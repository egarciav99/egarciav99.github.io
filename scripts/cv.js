/* ============================================
   CV.JS · Monta el CV a partir de la web
   Textos: TRANSLATIONS (i18n.js + projects-i18n.js).
   Orden de proyectos, etiquetas y stack: index.html.
   ============================================ */

// Variantes (?cv=data|el). Las claves cvp_<prefijo>* de i18n.js sustituyen a las de la web
// cuando existen (titular, perfil, viñetas de un puesto, resumen de un proyecto).
const CV_VARIANTS = {
  data: {
    prefix: 'cvp_',
    projects: 3,               // los N primeros proyectos de la web
    bullets: [1, 3, 1],        // viñetas por puesto (job0, job1, ...) para que quepa en una hoja
    skillAttr: 'data-cv',      // etiquetas del stack que salen en el CV
    certs: ['cert3', 'cert2'], // solo lo relevante para datos e IA; el mejor expediente ya sale en Educación
    education: [1, 2],
  },
  el: {
    prefix: 'cvp_el_',
    projects: ['project-pdf-assistant'],
    bullets: [1, 6, 3],
    skillAttr: 'data-cv-el',
    skillFirst: 'stack_electrical',
    certs: ['cert4', 'cert5', 'cert3'],
    education: [2, 1],
  },
};

(async () => {
  const params = new URLSearchParams(location.search);
  const lang = params.get('lang') === 'en' ? 'en' : 'es';
  const variant = CV_VARIANTS[params.get('cv')] || CV_VARIANTS.data;
  const t = TRANSLATIONS[lang];
  const v = (key) => t[variant.prefix + key] ?? t['cvp_' + key]; // texto de la variante o el común
  const html = await (await fetch('index.html', { cache: 'no-store' })).text();
  const web = new DOMParser().parseFromString(html, 'text/html');

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const tr = (el) => (el && el.dataset.i18n && t[el.dataset.i18n] !== undefined ? t[el.dataset.i18n] : el ? el.innerHTML.trim() : '');
  const section = (title, body) => `<section class="cv-sec"><h2 class="cv-sec__title">${title}</h2>${body}</section>`;

  // Contacto (sin teléfono: el PDF es público)
  const email = (web.querySelector('a[href^="mailto:"]')?.getAttribute('href') || '').replace('mailto:', '');
  const linkedin = web.querySelector('a[href*="linkedin.com/in/"]')?.getAttribute('href') || '';
  const github = web.querySelector('a[href^="https://github.com/"]')?.getAttribute('href') || '';
  const site = 'https://egarciav99.github.io';
  const bare = (u) => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  const photo = web.querySelector('img[src*="profile"]')?.getAttribute('src') || 'assets/profile.webp';

  const contact = [
    email && `<li><a href="mailto:${email}">${email}</a></li>`,
    `<li>${t.about_loc_value}</li>`,
    `<li><a href="${site}">${bare(site)}</a></li>`,
    linkedin && `<li><a href="${linkedin}">${bare(linkedin)}</a></li>`,
    github && `<li><a href="${github}">${bare(github)}</a></li>`,
  ].filter(Boolean).join('');

  // Habilidades: cada bloque del stack de la web, con las etiquetas marcadas para la variante
  // (data-cv o data-cv-el). En "data", un bloque sin marcas usa las destacadas; en "el" se omite.
  const stack = [...web.querySelectorAll('.cv__stack-section')];
  const labelKey = (sec) => sec.querySelector('.cv__stack-label')?.dataset.i18n;
  if (variant.skillFirst) stack.sort((a, b) => (labelKey(b) === variant.skillFirst) - (labelKey(a) === variant.skillFirst));
  const skills = stack.map((sec) => {
    const badges = [...sec.querySelectorAll('.badge')];
    const forCv = badges.filter((b) => b.hasAttribute(variant.skillAttr));
    const marked = badges.filter((b) => /badge--(accent|violet|success)/.test(b.className));
    const pick = forCv.length ? forCv : variant.skillAttr === 'data-cv' ? (marked.length ? marked : badges.slice(0, 4)) : [];
    if (!pick.length) return '';
    return `<div class="cv-skill"><div class="cv-skill__label">${tr(sec.querySelector('.cv__stack-label'))}</div><div class="cv-skill__items">${pick.map(tr).join(' · ')}</div></div>`;
  }).join('');

  const languages = t.about_lang_value.split('·').map((l) => `<li>${l.trim()}</li>`).join('');

  const certs = variant.certs.filter((k) => t[`${k}_title`])
    .map((k) => `<li><strong>${t[`${k}_title`]}</strong>, ${t[`${k}_issuer`]} <span>· ${t[`${k}_date`]}</span></li>`);

  // Experiencia: job0, job1, ... de i18n.js (o las viñetas propias de la variante, si las tiene)
  const jobs = [];
  let demekShown = false; // la línea de contexto de DEMEK solo va en su primer puesto
  for (let i = 0; t[`job${i}_title`]; i++) {
    const own = t[`${variant.prefix}job${i}_li1`] !== undefined && variant.prefix !== 'cvp_';
    const li = (j) => (own ? t[`${variant.prefix}job${i}_li${j}`] : t[`job${i}_li${j}`]);
    const lis = [];
    for (let j = 1; li(j) && j <= (variant.bullets[i] ?? 3); j++) lis.push(`<li>${li(j)}</li>`);
    jobs.push(`<article class="cv-item">
      <div class="cv-item__head"><h3>${t[`job${i}_title`]}</h3><span class="cv-item__date">${t[`job${i}_date`]}</span></div>
      <div class="cv-item__org">${t[`job${i}_company`]}</div>
      ${!demekShown && /DEMEK/.test(t[`job${i}_company`]) && (demekShown = true) ? `<div class="cv-item__ctx">${t.cvp_demek}</div>` : ''}
      <ul>${lis.join('')}</ul>
    </article>`);
  }

  // Proyectos: los N primeros de la web, o los indicados por id
  const cards = Array.isArray(variant.projects)
    ? variant.projects.map((id) => web.getElementById(id)).filter(Boolean)
    : [...web.querySelectorAll('.project-card')].slice(0, variant.projects);
  const projects = cards.map((card) => {
    const sumEl = card.querySelector('.card__summary');
    const ownSum = t[`${variant.prefix}${(sumEl?.dataset.i18n || '').replace(/^p_/, '').replace(/_sum$/, '')}_sum`];
    const titleEl = card.querySelector('.card__title [data-i18n], .card__title[data-i18n]') || card.querySelector('.card__title');
    const href = card.querySelector('.card__title a')?.getAttribute('href');
    const title = tr(titleEl);
    const tags = [...card.querySelectorAll('.card__footer .badges-wrap .badge')].map((b) => b.textContent.trim());
    return `<article class="cv-item cv-item--project">
      <div class="cv-item__head"><h3>${href ? `<a href="${esc(href)}">${title}</a>` : title}</h3>${href ? `<span class="cv-item__date">${bare(href)}</span>` : ''}</div>
      <p>${variant.prefix !== 'cvp_' && ownSum ? ownSum : tr(sumEl)}</p>
      <div class="cv-item__tags">${tags.map(esc).join(' · ')}</div>
    </article>`;
  }).join('');

  const education = variant.education.map((i) => `<article class="cv-item">
      <div class="cv-item__head"><h3>${t[`cvp_edu${i}_title`]}</h3></div>
      <div class="cv-item__org">${t[`cvp_edu${i}_place`]}</div>
      <p>${t[`cvp_edu${i}_detail`]}</p>
    </article>`).join('');

  const today = new Date().toISOString().slice(0, 10);

  document.documentElement.lang = lang;
  document.title = t.cvp_title;
  document.getElementById('cv').innerHTML = `
    <aside class="cv-side">
      <img class="cv-photo" src="${esc(photo)}" alt="Elier Garcia">
      <h1 class="cv-name">Elier Garcia</h1>
      <div class="cv-headline">${v('headline')}</div>
      ${section(t.cvp_contact, `<ul class="cv-list">${contact}</ul>`)}
      ${section(t.cvp_skills, skills)}
      ${section(t.cvp_languages, `<ul class="cv-list">${languages}</ul>`)}
      ${section(t.cvp_certs, `<ul class="cv-certs">${certs.join('')}</ul>`)}
    </aside>
    <div class="cv-main">
      ${section(t.cvp_profile, `<p class="cv-summary">${v('summary')}</p>`)}
      ${section(t.cvp_experience, jobs.join(''))}
      ${section(cards.length > 1 ? t.cvp_projects : v('project'), projects)}
      ${section(t.cvp_education, education)}
      <footer class="cv-foot">${t.cvp_updated} · ${today}</footer>
    </div>`;

  await Promise.all([...document.images].map((img) => (img.complete ? null : new Promise((r) => { img.onload = img.onerror = r; }))));
  if (document.fonts) await document.fonts.ready;
  document.body.dataset.ready = '1';
})();
