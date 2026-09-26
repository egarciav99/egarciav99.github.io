/* ============================================
   CV.JS — Monta el CV a partir de la web
   Textos: TRANSLATIONS (i18n.js + projects-i18n.js).
   Orden de proyectos, etiquetas y stack: index.html.
   ============================================ */

const CV_PROJECTS = 3; // los N primeros proyectos de la web
const CV_BULLETS = [1, 3, 1]; // viñetas por puesto (job0, job1, ...) para que quepa en una hoja
const CV_SKIP_CERTS = ['cert1']; // el mejor expediente ya sale en Educación

(async () => {
  const params = new URLSearchParams(location.search);
  const lang = params.get('lang') === 'en' ? 'en' : 'es';
  const t = TRANSLATIONS[lang];
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

  // Habilidades: cada bloque del stack de la web. Salen las etiquetas marcadas con data-cv;
  // si un bloque no tiene ninguna, las destacadas (badge--accent/violet/success).
  const skills = [...web.querySelectorAll('.cv__stack-section')].map((sec) => {
    const badges = [...sec.querySelectorAll('.badge')];
    const forCv = badges.filter((b) => b.hasAttribute('data-cv'));
    const marked = badges.filter((b) => /badge--(accent|violet|success)/.test(b.className));
    const pick = (forCv.length ? forCv : marked.length ? marked : badges.slice(0, 4)).map((b) => tr(b));
    return `<div class="cv-skill"><div class="cv-skill__label">${tr(sec.querySelector('.cv__stack-label'))}</div><div class="cv-skill__items">${pick.join(' · ')}</div></div>`;
  }).join('');

  const languages = t.about_lang_value.split('·').map((l) => `<li>${l.trim()}</li>`).join('');

  const certs = [];
  for (let i = 1; t[`cert${i}_title`]; i++) {
    if (CV_SKIP_CERTS.includes(`cert${i}`)) continue;
    certs.push(`<li><strong>${t[`cert${i}_title`]}</strong> — ${t[`cert${i}_issuer`]} <span>· ${t[`cert${i}_date`]}</span></li>`);
  }

  // Experiencia: job0, job1, ... de i18n.js
  const jobs = [];
  for (let i = 0; t[`job${i}_title`]; i++) {
    const lis = [];
    for (let j = 1; t[`job${i}_li${j}`] && j <= (CV_BULLETS[i] ?? 3); j++) lis.push(`<li>${t[`job${i}_li${j}`]}</li>`);
    jobs.push(`<article class="cv-item">
      <div class="cv-item__head"><h3>${t[`job${i}_title`]}</h3><span class="cv-item__date">${t[`job${i}_date`]}</span></div>
      <div class="cv-item__org">${t[`job${i}_company`]}</div>
      <ul>${lis.join('')}</ul>
    </article>`);
  }

  // Proyectos: los primeros de la web, en su orden
  const projects = [...web.querySelectorAll('.project-card')].slice(0, CV_PROJECTS).map((card) => {
    const titleEl = card.querySelector('.card__title [data-i18n], .card__title[data-i18n]') || card.querySelector('.card__title');
    const href = card.querySelector('.card__title a')?.getAttribute('href');
    const title = tr(titleEl);
    const tags = [...card.querySelectorAll('.card__footer .badges-wrap .badge')].map((b) => b.textContent.trim());
    return `<article class="cv-item cv-item--project">
      <div class="cv-item__head"><h3>${href ? `<a href="${esc(href)}">${title}</a>` : title}</h3>${href ? `<span class="cv-item__date">${bare(href)}</span>` : ''}</div>
      <p>${tr(card.querySelector('.card__summary'))}</p>
      <div class="cv-item__tags">${tags.map(esc).join(' · ')}</div>
    </article>`;
  }).join('');

  const education = [1, 2].map((i) => `<article class="cv-item">
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
      <div class="cv-headline">${t.cvp_headline}</div>
      ${section(t.cvp_contact, `<ul class="cv-list">${contact}</ul>`)}
      ${section(t.cvp_skills, skills)}
      ${section(t.cvp_languages, `<ul class="cv-list">${languages}</ul>`)}
      ${section(t.cvp_certs, `<ul class="cv-certs">${certs.join('')}</ul>`)}
    </aside>
    <div class="cv-main">
      ${section(t.cvp_profile, `<p class="cv-summary">${t.cvp_summary}</p>`)}
      ${section(t.cvp_experience, jobs.join(''))}
      ${section(t.cvp_projects, projects)}
      ${section(t.cvp_education, education)}
      <footer class="cv-foot">${t.cvp_updated} · ${today}</footer>
    </div>`;

  await Promise.all([...document.images].map((img) => (img.complete ? null : new Promise((r) => { img.onload = img.onerror = r; }))));
  if (document.fonts) await document.fonts.ready;
  document.body.dataset.ready = '1';
})();
