/* ============================================
   I18N.JS — Bilingual EN / ES Support
   ============================================ */

const TRANSLATIONS = {
  en: {
    meta_title: 'Elier Garcia — Electrical Engineer · AI & Automation · Madrid',
    meta_description: 'Electrical Engineer with an M.S. in Business Analytics & AI. Industrial projects for Microsoft and BMW Group. Founder of EG Solutions, building AI and automation systems. Based in Madrid.',
    og_description: 'Electrical Engineer with an M.S. in Business Analytics & AI. Industrial projects for Microsoft and BMW Group. Founder of EG Solutions, building AI and automation systems. Based in Madrid.',
    twitter_description: 'Electrical Engineer with an M.S. in Business Analytics & AI. Industrial projects for Microsoft and BMW Group. Founder of EG Solutions, building AI and automation systems. Based in Madrid.',
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_cv: 'CV & Stack',
    nav_experience: 'Experience',
    nav_contact: 'Contact',
    nav_hamburger_label: 'Open menu',
    hero_label: 'Electrical engineer, AI builder',
    hero_title: 'Electrical Engineer · AI & Automation · Madrid',
    hero_tagline: '"From industrial field engineering to building AI systems."',
    hero_cta: 'Get in touch',
    hero_status: 'Available to work',
    stat_apps: 'AI projects built',
    stat_people: 'people coordinated',
    stat_gpa: 'top of class · INESDI 2026',
    about_label: 'Profile',
    about_heading: 'From Chihuahua to Madrid.<br>From field to code.',
    about_p1: `I'm <strong>Elier Garcia</strong>, an electrical engineer from Chihuahua, Mexico. I built my foundation tackling high-stakes field challenges: supervising electrical infrastructure for <strong>Microsoft's Azure hyperscale data center</strong> and a <strong>19,847 m² industrial facility for BMW Group</strong>. Within six months, I stepped up from new hire to running the exterior electrical front solo, managing <strong>60+ workers</strong>.`,
    about_p2: `In 2025 I moved to <strong>Madrid</strong> for an M.S. in Business Analytics & AI at INESDI, graduating with the <strong>top academic record of my cohort (8.94/10)</strong>. Alongside the programme I started building AI systems: a RAG assistant for technical documents, an AI cover-letter tool and, as part of a team, a nutrition app whose MVP reached 200 real users. In 2026 I founded EG Solutions, where I build AI automations and platforms for businesses.`,
    about_p3: `I didn't transition into tech just to chase buzzwords. I come from industrial engineering where failures have immediate operational impact. That same discipline shapes how I write code, structure pipelines, and manage cloud workloads today.`,
    about_loc_label: 'Location',
    about_loc_value: 'Madrid, Spain',
    about_edu_label: 'Education',
    about_edu_value: 'M.S. Business Analytics &amp; AI — INESDI (2026)',
    about_bg_label: 'Background',
    about_bg_value: 'B.S. Electrical Engineering — TECNM Chihuahua (9.27/10)',
    about_lang_label: 'Languages',
    about_lang_value: 'Spanish (native) · English B2 · German (basic)',
    about_avail_label: 'Availability',
    about_avail_value: 'Immediate',
    port_label: 'Projects',
    port_heading: "What I've built",
    port_subtitle: 'Each project with its real status: in use, in development, MVP or demo.',
    cv_label: 'CV & tech stack',
    cv_heading: 'Tools & Résumé',
    cv_subtitle: 'Download my CV in the profile you need and explore my technical stack.',
    cv_dl_es_title: 'CV Data & AI — Spanish',
    cv_dl_es_sub: 'PDF · Business Analytics & IA',
    cv_dl_en_title: 'CV Data & AI — English',
    cv_dl_en_sub: 'PDF · Business Analytics & AI',
    cv_dl_el_title: 'CV Electrical Engineering',
    cv_dl_el_sub: 'PDF · Industrial installations',
    stack_frontend: 'Frontend',
    stack_backend: 'Backend & Cloud',
    stack_ai: 'AI / ML & Data',
    stack_devops: 'DevOps & Tooling',
    stack_electrical: 'Electrical Engineering',
    certs_label: 'Certifications',
    certs_heading: 'Awards & Certifications',
    cert1_title: 'Top Academic Record — M.S. Business Analytics & AI',
    cert1_issuer: 'INESDI Business TechSchool · Madrid (UNIE)',
    cert1_date: 'March 2026',
    cert2_title: 'Digital Leadership Programme',
    cert2_issuer: 'INESDI Business TechSchool',
    cert2_date: 'April 2025',
    cert3_title: 'Artificial Intelligence — Principles & Applications',
    cert3_issuer: 'Universidad del Valle de México',
    cert3_date: 'August 2026',
    cert4_title: 'Electric Power Systems',
    cert4_issuer: 'University at Buffalo — SUNY',
    cert4_date: 'February 2023',
    cert5_title: 'PVC-Coated Conduit Installer',
    cert5_issuer: 'Plasti-Bond',
    cert5_date: 'April 2024',
    exp_label: 'Experience',
    exp_heading: 'Work history',
    job0_date: '2026 — present',
    job0_title: 'Founder · AI & Automation Engineer',
    job0_company: 'EG Solutions · Madrid (remote)',
    job0_li1: 'Design and development of web platforms, n8n automations and AI agents for businesses.',
    job0_li2: 'Technical PDF-to-Excel extraction pipeline: parallel regex and LLM extraction (Gemini via n8n), a second model that audits and normalizes both outputs, and human validation before export.',
    job0_li3: 'Working UI demo and technical proposal for the loyalty campaign of a beverage brand: two-step receipt validation, rewards catalog and a server-signed Apple and Google Wallet architecture.',
    job1_date: 'Jan 2024 — Feb 2025',
    job1_title: 'Electrical Construction Resident',
    job1_company: 'DEMEK S.A. de C.V. · Querétaro / San Luis Potosí, Mexico',
    job1_li1: `Led the outdoor electrical front at <strong>Microsoft's Azure hyperscale Data Center</strong> in Querétaro — from newest hire to sole front lead in 6 months, directly supervising <strong>60+ people</strong>: medium voltage, grounding, transformers, generators and switchgear.`,
    job1_li2: `At <strong>BMW Group's plant</strong> (San Luis Potosí, 19,847 m² body-shop expansion): supervised LV and grounding in 2 sections (~40 people) and handled material requisitions for nearly all 8 — built my own tracking system (Excel + SAP) that cut supply stoppages, with every off-budget request technically justified.`,
    job1_li3: 'Verified compliance with NEC/IEC/NOM technical specs and safety standards on-site throughout the full project lifecycle for both sites.',
    job2_date: 'Jan 2023 — Jan 2024',
    job2_title: 'Electrical Budget Analyst',
    job2_company: 'DEMEK S.A. de C.V. · Chihuahua, Mexico',
    job2_li1: `Ran the full estimating cycle — AutoCAD takeoffs, OPUS pricing, vendor quotes, and client delivery. Won the <strong>Terex project in Nuevo León</strong>, presenting directly to the client in English through Copachisa.`,
    job2_li2: 'Built and presented financial proposals in PowerPoint to non-technical clients, covering scope, line items, and post-review adjustments.',
    job2_li3: 'Managed vendor relationships to secure best material pricing, integrated directly into OPUS for budget close-out.',
    contact_label: 'Contact',
    contact_heading: "Let's talk",
    contact_msg: `Available for opportunities in <strong>Data, AI Engineering</strong> or <strong>Electrical Engineering</strong> in Spain. If you think I'm a fit for your team, reach out.`,
    contact_avail: 'Immediate availability',
    contact_location: 'Madrid, Spain',
    footer_text: 'Designed and built by hand ⚡',
    tag_medium_voltage: 'Medium Voltage',
    tag_lv_outdoor: 'LV Outdoor',
    tag_electrical_rooms: 'Electrical Rooms',
    tag_vendor_quotes: 'Vendor quotes',
    tag_site_supervision: 'Site supervision',
    tag_subcontractor_management: 'Subcontractor management',
    tag_microsoft_data_center: 'Microsoft Data Center',
    tag_bmw_group: 'BMW Group',
    tag_autocad: 'AutoCAD',
    tag_opus: 'OPUS',
    tag_excel: 'Excel',
    tag_n8n: 'n8n',
    tag_gemini: 'Gemini',
    tag_react: 'React',
    tag_supabase: 'Supabase',
    tag_ocr: 'OCR'
  },
  es: {
    meta_title: 'Elier Garcia — Ingeniero Eléctrico · IA & Automatización · Madrid',
    meta_description: 'Ingeniero eléctrico con Máster en Business Analytics & IA. Proyectos industriales para Microsoft y BMW Group. Fundador de EG Solutions, desarrollando sistemas de IA y automatización. Base en Madrid.',
    og_description: 'Ingeniero eléctrico con Máster en Business Analytics & IA. Proyectos industriales para Microsoft y BMW Group. Fundador de EG Solutions, desarrollando sistemas de IA y automatización. Base en Madrid.',
    twitter_description: 'Ingeniero eléctrico con Máster en Business Analytics & IA. Proyectos industriales para Microsoft y BMW Group. Fundador de EG Solutions, desarrollando sistemas de IA y automatización. Base en Madrid.',
    nav_about: 'Sobre mí',
    nav_projects: 'Proyectos',
    nav_cv: 'CV & Stack',
    nav_experience: 'Experiencia',
    nav_contact: 'Contacto',
    nav_hamburger_label: 'Abrir menú',
    hero_label: 'Ingeniero eléctrico, constructor de IA',
    hero_title: 'Ingeniero Eléctrico · IA & Automatización · Madrid',
    hero_tagline: '"Del rigor técnico en obra industrial a construir sistemas de IA."',
    hero_cta: 'Contactar',
    hero_status: 'Disponible para trabajar',
    stat_apps: 'proyectos de IA construidos',
    stat_people: 'personas coordinadas',
    stat_gpa: 'mejor expediente · INESDI 2026',
    about_label: 'Perfil',
    about_heading: 'De Chihuahua a Madrid.<br>De la obra al código.',
    about_p1: `Soy <strong>Elier Garcia</strong>, ingeniero eléctrico de Chihuahua, México. Me formé resolviendo problemas reales en terreno: supervisé la infraestructura eléctrica del <strong>Data Center Azure de hiperescala de Microsoft</strong> y la nave de <strong>19.847 m² para BMW Group</strong>. En seis meses pasé de integrarme al equipo a liderar de forma autónoma el frente exterior, coordinando a <strong>más de 60 personas</strong>.`,
    about_p2: `En 2025 me trasladé a <strong>Madrid</strong> para cursar el Máster en Business Analytics & IA en INESDI, donde obtuve el <strong>mejor expediente de la promoción (8,94/10)</strong>. En paralelo empecé a construir sistemas de IA: un asistente RAG para documentación técnica, una herramienta de cartas de presentación con IA y, en equipo, una app de nutrición cuyo MVP llegó a 200 usuarios reales. En 2026 fundé EG Solutions, donde desarrollo automatizaciones y plataformas con IA para empresas.`,
    about_p3: `No entré al desarrollo por subirme a una tendencia. Vengo de la ingeniería de campo donde un error cuesta paradas críticas o problemas de seguridad; ese mismo rigor lo mantengo al diseñar arquitecturas, escribir código y optimizar costos en la nube.`,
    about_loc_label: 'Ubicación',
    about_loc_value: 'Madrid, España',
    about_edu_label: 'Educación',
    about_edu_value: 'Máster en Business Analytics &amp; AI — INESDI (2026)',
    about_bg_label: 'Formación',
    about_bg_value: 'Ingeniería Eléctrica — TECNM Chihuahua (9,27/10)',
    about_lang_label: 'Idiomas',
    about_lang_value: 'Español (nativo) · Inglés B2 · Alemán (básico)',
    about_avail_label: 'Disponibilidad',
    about_avail_value: 'Inmediata',
    port_label: 'Proyectos',
    port_heading: 'Lo que he construido',
    port_subtitle: 'Cada proyecto con su estado real: en uso, en desarrollo, MVP o demo.',
    cv_label: 'CV y stack técnico',
    cv_heading: 'Herramientas & Currículum',
    cv_subtitle: 'Descarga mi CV según el perfil que necesites y explora mi stack técnico.',
    cv_dl_es_title: 'CV Data & AI — Español',
    cv_dl_es_sub: 'PDF · Business Analytics & IA',
    cv_dl_en_title: 'CV Data & AI — Inglés',
    cv_dl_en_sub: 'PDF · Business Analytics & AI',
    cv_dl_el_title: 'CV Ingeniería Eléctrica',
    cv_dl_el_sub: 'PDF · Instalaciones industriales',
    stack_frontend: 'Frontend',
    stack_backend: 'Backend & Cloud',
    stack_ai: 'IA / ML & Datos',
    stack_devops: 'DevOps & Herramientas',
    stack_electrical: 'Ingeniería Eléctrica',
    certs_label: 'Certificaciones',
    certs_heading: 'Premios y Certificaciones',
    cert1_title: 'Mejor expediente académico — Máster en Business Analytics & IA',
    cert1_issuer: 'INESDI Business TechSchool · Madrid (UNIE)',
    cert1_date: 'Marzo 2026',
    cert2_title: 'Digital Leadership Programme',
    cert2_issuer: 'INESDI Business TechSchool',
    cert2_date: 'Abril 2025',
    cert3_title: 'Inteligencia Artificial — Principios y Aplicaciones',
    cert3_issuer: 'Universidad del Valle de México',
    cert3_date: 'Agosto 2026',
    cert4_title: 'Electric Power Systems',
    cert4_issuer: 'University at Buffalo — SUNY',
    cert4_date: 'Febrero 2023',
    cert5_title: 'Instalador Certificado de Tubería Recubierta (PVC)',
    cert5_issuer: 'Plasti-Bond',
    cert5_date: 'Abril 2024',
    exp_label: 'Experiencia',
    exp_heading: 'Experiencia laboral',
    job0_date: '2026 — hoy',
    job0_title: 'Fundador · Ingeniero de IA y Automatización',
    job0_company: 'EG Solutions · Madrid (remoto)',
    job0_li1: 'Diseño y desarrollo de plataformas web, automatizaciones con n8n y agentes de IA para empresas.',
    job0_li2: 'Pipeline de extracción de PDFs técnicos a Excel: extracción paralela por regex y por LLM (Gemini vía n8n), un segundo modelo que audita y normaliza ambas salidas, y validación humana antes de exportar.',
    job0_li3: 'Demo de interfaz y propuesta técnica para la campaña de fidelización de una marca de bebidas: validación del ticket en dos pasos, catálogo de recompensas y arquitectura de Apple y Google Wallet con firma en servidor.',
    job1_date: 'Ene 2024 — Feb 2025',
    job1_title: 'Residente de Construcción Eléctrica',
    job1_company: 'DEMEK S.A. de C.V. · Querétaro / San Luis Potosí, México',
    job1_li1: `Lideré el frente eléctrico de exteriores del <strong>Data Center Azure de hiperescala de Microsoft</strong> en Querétaro — de ser el más nuevo del equipo a encargado único del frente en 6 meses, supervisando a <strong>más de 60 personas</strong>: media tensión, tierras, transformadores, generadores y tableros.`,
    job1_li2: `En la <strong>planta de BMW Group</strong> (San Luis Potosí, ampliación de carrocería de 19.847 m²): supervisé baja tensión y tierras en 2 secciones (~40 personas) y gestioné las requisiciones de material de casi las 8 — con un sistema de seguimiento propio (Excel + SAP) que redujo los paros de suministro, justificando técnicamente cada requisición fuera de presupuesto.`,
    job1_li3: 'Verifiqué el cumplimiento de especificaciones técnicas NEC/IEC/NOM y estándares de seguridad en obra durante todo el ciclo de vida del proyecto en ambas obras.',
    job2_date: 'Ene 2023 — Ene 2024',
    job2_title: 'Analista de Presupuestos Eléctricos',
    job2_company: 'DEMEK S.A. de C.V. · Chihuahua, México',
    job2_li1: `Ejecuté el ciclo completo de presupuestación — mediciones en AutoCAD, precios en OPUS, cotizaciones con proveedores y entrega al cliente. Gané el <strong>proyecto Terex en Nuevo León</strong>, presentando directamente al cliente en inglés a través de Copachisa.`,
    job2_li2: 'Elaboré y presenté propuestas económicas en PowerPoint a clientes no técnicos, cubriendo alcance, partidas y ajustes post-revisión.',
    job2_li3: 'Gestioné relaciones con proveedores para obtener los mejores precios de materiales, integrados directamente en OPUS para el cierre de presupuesto.',
    contact_label: 'Contacto',
    contact_heading: 'Hablemos',
    contact_msg: `Disponible para oportunidades en <strong>Data, Ingeniería de IA</strong> o <strong>Ingeniería Eléctrica</strong> en España. Si crees que encajo en tu equipo, escríbeme.`,
    contact_avail: 'Disponibilidad inmediata',
    contact_location: 'Madrid, España',
    footer_text: 'Diseñado y construido a mano ⚡',
    tag_medium_voltage: 'Tensión media',
    tag_lv_outdoor: 'BT exterior',
    tag_electrical_rooms: 'Cuartos eléctricos',
    tag_vendor_quotes: 'Cotizaciones de proveedores',
    tag_site_supervision: 'Supervisión de obra',
    tag_subcontractor_management: 'Gestión de subcontratas',
    tag_microsoft_data_center: 'Centro de datos Microsoft',
    tag_bmw_group: 'BMW Group',
    tag_autocad: 'AutoCAD',
    tag_opus: 'OPUS',
    tag_excel: 'Excel',
    tag_n8n: 'n8n',
    tag_gemini: 'Gemini',
    tag_react: 'React',
    tag_supabase: 'Supabase',
    tag_ocr: 'OCR'
  }
};

const STORAGE_KEY = 'eg_lang';
let currentLang = (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) || 'en';

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  document.documentElement.lang = lang;
  currentLang = lang;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  const descriptionTag = document.querySelector('meta[name="description"]');
  const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
  const twitterDescriptionTag = document.querySelector('meta[name="twitter:description"]');
  const titleTag = document.querySelector('title');
  if (titleTag) titleTag.textContent = t.meta_title;
  if (descriptionTag) descriptionTag.setAttribute('content', t.meta_description);
  if (ogDescriptionTag) ogDescriptionTag.setAttribute('content', t.og_description);
  if (twitterDescriptionTag) twitterDescriptionTag.setAttribute('content', t.twitter_description);

  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.setAttribute('title', lang === 'en' ? 'Cambiar a Español' : 'Switch to English');
    const active = btn.querySelector('.lang-toggle__active');
    const other = btn.querySelector('.lang-toggle__other');
    if (active) active.textContent = lang.toUpperCase();
    if (other) other.textContent = lang === 'en' ? 'ES' : 'EN';
  }

  const hamburger = document.getElementById('nav-hamburger');
  if (hamburger) {
    hamburger.setAttribute('aria-label', t.nav_hamburger_label || 'Open menu');
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined && key !== 'nav_hamburger_label') {
      el.innerHTML = t[key];
    }
  });
}

function toggleLanguage() {
  applyTranslations(currentLang === 'en' ? 'es' : 'en');
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('lang-toggle');
  if (btn && !btn.dataset.bound) {
    btn.addEventListener('click', toggleLanguage);
    btn.dataset.bound = 'true';
  }

  if (currentLang === 'en') {
    document.documentElement.lang = 'en';
    if (btn) {
      btn.setAttribute('title', 'Cambiar a Español');
      const active = btn.querySelector('.lang-toggle__active');
      const other = btn.querySelector('.lang-toggle__other');
      if (active) active.textContent = 'EN';
      if (other) other.textContent = 'ES';
    }
    const hamburger = document.getElementById('nav-hamburger');
    if (hamburger) hamburger.setAttribute('aria-label', 'Open menu');
    return;
  }

  applyTranslations(currentLang);
});
