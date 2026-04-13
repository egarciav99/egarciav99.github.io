/* ============================================
   I18N.JS — Bilingual EN / ES Support
   ============================================ */

const TRANSLATIONS = {
  en: {
    /* ── NAV ── */
    nav_about:      'About',
    nav_projects:   'Projects',
    nav_cv:         'CV & Stack',
    nav_experience: 'Experience',
    nav_contact:    'Contact',

    /* ── HERO ── */
    hero_label:   'ENGINEER · BUILDER · PROBLEM SOLVER',
    hero_title:   'Electrical Engineer · AI/Data · Madrid',
    hero_tagline: '"Building real things — from data centers to AI products."',
    hero_cta:     'Contact',
    hero_status:  'Available to work',
    stat_apps:    'AI apps in prod.',
    stat_people:  'people led',
    stat_gpa:     'GPA · INESDI 2026',

    /* ── ABOUT ── */
    about_label:    '// about',
    about_heading:  'From Chihuahua to Madrid.<br>From field to code.',
    about_p1: `I'm <strong>Elier Garcia</strong>, an electrical engineer from Chihuahua, Mexico. I grew up solving real
      problems with my hands — supervising the electrical installation of a <strong>Microsoft Azure hyperscale
      data center</strong> and a <strong>19,847 m² building at BMW Group's plant</strong>. In six months I went
      from the newest hire on site to running the entire electrical front on my own, coordinating up to
      <strong>60 people</strong> without a single supply stoppage.`,
    about_p2: `In 2025 I moved to <strong>Madrid</strong> to pursue an M.S. in Business Analytics &amp; AI at INESDI,
      which I <strong>finished with the best academic record of my class</strong>. During the programme I
      independently built three full-stack AI applications now running in production: a SaaS with RAG,
      a nutrition app with data pipelines, and an AI cover-letter generator.`,
    about_p3: `I didn't come to tech because it was trendy. I came from real engineering, where if something breaks,
      everyone notices. <strong>That standard carries into every line of code I write.</strong> I'm looking for
      my first role in Europe in Data, AI Engineering, or Electrical Engineering.`,
    about_loc_label:  'Location',
    about_loc_value:  'Madrid, Spain',
    about_edu_label:  'Education',
    about_edu_value:  'M.S. Business Analytics &amp; AI — INESDI (2026)',
    about_bg_label:   'Background',
    about_bg_value:   'B.S. Electrical Engineering — TECNM Chihuahua (9.27/10)',
    about_lang_label: 'Languages',
    about_lang_value: 'Spanish (native) · English B2 · German (basic)',
    about_avail_label: 'Availability',
    about_avail_value: 'Immediate',

    /* ── PORTFOLIO ── */
    port_label:    '// projects',
    port_heading:  "What I've built",
    port_subtitle: 'Three full-stack AI applications running in production. My own code, no tutorials.',
    bocado_sub:    'Personalized nutrition app with AI',
    bocado_desc:   `Full-stack PWA: Next.js 16 + React 19 + TypeScript + Firebase. Gemini 2.5 Flash for personalized meal plans,
      Google Places API to verify real restaurants, Service Worker for offline mode and push notifications.
      Firestore → BigQuery pipeline with Looker Studio dashboards. <strong>-98% Cloud Function calls,
      -85% network requests</strong> after optimization. Operational cost: <strong>&lt;€0.50/month</strong>.`,
    bocado_link:   'View demo',
    cover_sub:     'SaaS — AI cover letter generator',
    cover_desc:    `End-to-end SaaS: user uploads CV, n8n orchestrates AI via webhook, custom JS parser detects sections in
      4 languages (ES/EN/FR/NL). Gemini generates ATS-calibrated letters, persisted in Supabase with Row Level
      Security. Editable in TipTap, exported as PDF. Authenticated routes on both frontend and backend.`,
    cover_link:    'View demo',
    pdf_sub:       'RAG chatbot for technical documents',
    pdf_desc:      `Full RAG pipeline: PDF extraction, semantic chunking, Gemini embeddings (text-embedding-004) and
      sub-second vector search in Supabase pgvector. Temperature 0.1 for deterministic answers
      with strict document grounding. Two Cloud Functions in production: auto-ingestion and persistent chat.`,
    pdf_link:      'View demo',

    /* ── CV & STACK ── */
    cv_label:    '// cv & tech stack',
    cv_heading:  'Tools & Résumé',
    cv_subtitle: 'Download my CV in the profile you need and explore my technical stack.',
    cv_dl_es_title:  'CV Data & AI — Spanish',
    cv_dl_es_sub:    'PDF · Business Analytics & AI',
    cv_dl_en_title:  'CV Data & AI — English',
    cv_dl_en_sub:    'PDF · Business Analytics & AI',
    cv_dl_el_title:  'CV Electrical Engineering',
    cv_dl_el_sub:    'PDF · Industrial installations',
    stack_frontend:   'Frontend',
    stack_backend:    'Backend & Cloud',
    stack_ai:         'AI / ML & Data',
    stack_devops:     'DevOps & Tooling',
    stack_electrical: 'Electrical Engineering',

    /* ── CERTIFICATIONS ── */
    certs_label:   '// certifications',
    certs_heading: 'Awards & Certifications',
    cert1_title:   'Top Academic Record — M.S. Business Analytics & AI',
    cert1_issuer:  'INESDI Business TechSchool · Madrid',
    cert1_date:    'March 2026',
    cert2_title:   'Digital Leadership Programme',
    cert2_issuer:  'INESDI Business TechSchool',
    cert2_date:    'April 2025',
    cert3_title:   'Electric Power Systems',
    cert3_issuer:  'University at Buffalo — SUNY / Coursera',
    cert3_date:    'February 2023',
    cert4_title:   'PVC-Coated Conduit Installer',
    cert4_issuer:  'Plasti-Bond',
    cert4_date:    'April 2024',

    /* ── EXPERIENCE ── */
    exp_label:   '// experience',
    exp_heading: 'Work history',
    job1_date:   'Jan 2024 — Feb 2025',
    job1_title:  'Electrical Construction Resident',
    job1_company:'DEMEK S.A. de C.V. · Querétaro / San Luis Potosí, Mexico',
    job1_li1:    `Led the full electrical front at <strong>Microsoft's Azure hyperscale Data Center</strong>
      in Querétaro (~3 football fields) — escalated from newest hire to sole front lead in 6 months,
      coordinating up to <strong>60 people</strong> with zero supply stoppages over 9 months.`,
    job1_li2:    `Supervised the electrical installation of a <strong>19,847 m² building at BMW Group's plant</strong>
      (San Luis Potosí, EV manufacturing from 2027) — developed a custom material tracking system
      and managed procurement across nearly all 8 sections of the building.`,
    job1_li3:    'Verified compliance with NEC/IEC/NOM technical specs and safety standards on-site throughout the full project lifecycle for both sites.',
    job2_date:   'Jan 2023 — Jan 2024',
    job2_title:  'Electrical Budget Analyst',
    job2_company:'DEMEK S.A. de C.V. · Chihuahua, Mexico',
    job2_li1:    `Ran the full estimating cycle — AutoCAD takeoffs, OPUS pricing, vendor quotes, and client delivery.
      Won the <strong>Terex project in Nuevo León</strong>, presenting directly to the client in English through Copachisa.`,
    job2_li2:    'Built and presented financial proposals in PowerPoint to non-technical clients, covering scope, line items, and post-review adjustments.',
    job2_li3:    'Managed vendor relationships to secure best material pricing, integrated directly into OPUS for budget close-out.',

    /* ── CONTACT ── */
    contact_label:   '// contact',
    contact_heading: "Let's talk",
    contact_msg:     `Available for opportunities in <strong>Data, AI Engineering</strong> or <strong>Electrical
      Engineering</strong> in Spain. If you think I'm a fit for your team, reach out.`,
    contact_avail:   'Immediate availability',

    /* ── FOOTER ── */
    footer_text: 'Designed and built by hand ⚡',
  },

  es: {
    /* ── NAV ── */
    nav_about:      'Sobre mí',
    nav_projects:   'Proyectos',
    nav_cv:         'CV & Stack',
    nav_experience: 'Experiencia',
    nav_contact:    'Contacto',

    /* ── HERO ── */
    hero_label:   'INGENIERO · CONSTRUCTOR · RESOLVEDOR DE PROBLEMAS',
    hero_title:   'Ingeniero Eléctrico · AI/Data · Madrid',
    hero_tagline: '"Construyendo cosas reales — desde centros de datos hasta productos de IA."',
    hero_cta:     'Contacto',
    hero_status:  'Disponible para trabajar',
    stat_apps:    'apps de IA en prod.',
    stat_people:  'personas lideradas',
    stat_gpa:     'expediente · INESDI 2026',

    /* ── ABOUT ── */
    about_label:    '// sobre mí',
    about_heading:  'De Chihuahua a Madrid.<br>Del campo al código.',
    about_p1: `Soy <strong>Elier Garcia</strong>, ingeniero eléctrico de Chihuahua, México. Crecí resolviendo problemas
      reales con mis manos — supervisando la instalación eléctrica de un <strong>Data Center Azure de hiperescala
      de Microsoft</strong> y un <strong>edificio de 19,847 m² en la planta de BMW Group</strong>. En seis meses pasé
      de ser el trabajador más nuevo en obra a llevar solo el frente eléctrico completo, coordinando hasta
      <strong>60 personas</strong> sin un solo paro de suministro.`,
    about_p2: `En 2025 me mudé a <strong>Madrid</strong> para cursar un Máster en Business Analytics &amp; AI en INESDI,
      que terminé con <strong>el mejor expediente académico de mi promoción</strong>. Durante el programa construí
      de forma independiente tres aplicaciones de IA full-stack en producción: un SaaS con RAG,
      una app de nutrición con pipelines de datos y un generador de cartas de presentación con IA.`,
    about_p3: `No llegué a la tecnología porque estuviera de moda. Vengo de la ingeniería real, donde si algo falla,
      todo el mundo se entera. <strong>Ese estándar lo aplico a cada línea de código que escribo.</strong>
      Busco mi primer rol en Europa en Data, Ingeniería de IA o Ingeniería Eléctrica.`,
    about_loc_label:  'Ubicación',
    about_loc_value:  'Madrid, España',
    about_edu_label:  'Educación',
    about_edu_value:  'Máster en Business Analytics &amp; AI — INESDI (2026)',
    about_bg_label:   'Formación',
    about_bg_value:   'Ingeniería Eléctrica — TECNM Chihuahua (9.27/10)',
    about_lang_label: 'Idiomas',
    about_lang_value: 'Español (nativo) · Inglés B2 · Alemán (básico)',
    about_avail_label: 'Disponibilidad',
    about_avail_value: 'Inmediata',

    /* ── PORTFOLIO ── */
    port_label:    '// proyectos',
    port_heading:  'Lo que he construido',
    port_subtitle: 'Tres aplicaciones de IA full-stack en producción. Mi propio código, sin tutoriales.',
    bocado_sub:    'App de nutrición personalizada con IA',
    bocado_desc:   `PWA full-stack: Next.js 16 + React 19 + TypeScript + Firebase. Gemini 2.5 Flash para planes de comida
      personalizados, Google Places API para verificar restaurantes reales, Service Worker para modo offline y
      notificaciones push. Pipeline Firestore → BigQuery con dashboards en Looker Studio.
      <strong>-98% invocaciones de Cloud Functions, -85% requests de red</strong> tras optimización.
      Costo operativo: <strong>&lt;€0.50/mes</strong>.`,
    bocado_link:   'Ver demo',
    cover_sub:     'SaaS — Generador de cartas de presentación con IA',
    cover_desc:    `SaaS end-to-end: el usuario sube su CV, n8n orquesta la IA vía webhook, un parser JS propio detecta
      secciones en 4 idiomas (ES/EN/FR/NL). Gemini genera cartas calibradas para ATS, persistidas en Supabase con
      Row Level Security. Editables en TipTap, exportadas como PDF. Rutas autenticadas en frontend y backend.`,
    cover_link:    'Ver demo',
    pdf_sub:       'Chatbot RAG para documentos técnicos',
    pdf_desc:      `Pipeline RAG completo: extracción de PDF, chunking semántico, embeddings con Gemini (text-embedding-004)
      y búsqueda vectorial sub-segundo en Supabase pgvector. Temperature 0.1 para respuestas deterministas con
      grounding estricto al documento. Dos Cloud Functions en producción: ingestión automática y chat persistente.`,
    pdf_link:      'Ver demo',

    /* ── CV & STACK ── */
    cv_label:    '// cv & tech stack',
    cv_heading:  'Herramientas & Currículum',
    cv_subtitle: 'Descarga mi CV según el perfil que necesites y explora mi stack técnico.',
    cv_dl_es_title:  'CV Data & AI — Español',
    cv_dl_es_sub:    'PDF · Business Analytics & IA',
    cv_dl_en_title:  'CV Data & AI — Inglés',
    cv_dl_en_sub:    'PDF · Business Analytics & AI',
    cv_dl_el_title:  'CV Ingeniería Eléctrica',
    cv_dl_el_sub:    'PDF · Instalaciones industriales',
    stack_frontend:   'Frontend',
    stack_backend:    'Backend & Cloud',
    stack_ai:         'IA / ML & Datos',
    stack_devops:     'DevOps & Herramientas',
    stack_electrical: 'Ingeniería Eléctrica',

    /* ── CERTIFICATIONS ── */
    certs_label:   '// certificaciones',
    certs_heading: 'Premios & Certificaciones',
    cert1_title:   'Mejor Expediente Académico — Máster en Business Analytics & IA',
    cert1_issuer:  'INESDI Business TechSchool · Madrid',
    cert1_date:    'Marzo 2026',
    cert2_title:   'Ciclo Digital Leadership',
    cert2_issuer:  'INESDI Business TechSchool',
    cert2_date:    'Abril 2025',
    cert3_title:   'Electric Power Systems',
    cert3_issuer:  'University at Buffalo — SUNY / Coursera',
    cert3_date:    'Febrero 2023',
    cert4_title:   'Instalador de Conducto Recubierto (PVC)',
    cert4_issuer:  'Plasti-Bond',
    cert4_date:    'Abril 2024',

    /* ── EXPERIENCE ── */
    exp_label:   '// experiencia',
    exp_heading: 'Experiencia laboral',
    job1_date:   'Ene 2024 — Feb 2025',
    job1_title:  'Residente de Construcción Eléctrica',
    job1_company:'DEMEK S.A. de C.V. · Querétaro / San Luis Potosí, México',
    job1_li1:    `Lideré el frente eléctrico completo en el <strong>Data Center Azure de hiperescala de Microsoft</strong>
      en Querétaro (~3 canchas de fútbol) — escalé de ser el más nuevo en el equipo a encargado único del frente en 6 meses,
      coordinando hasta <strong>60 personas</strong> sin un solo paro de suministro en 9 meses.`,
    job1_li2:    `Supervisé la instalación eléctrica de un <strong>edificio de 19,847 m² en la planta de BMW Group</strong>
      (San Luis Potosí, fabricación de EV desde 2027) — desarrollé un sistema propio de tracking de materiales
      y gestioné la compra en casi las 8 secciones del edificio.`,
    job1_li3:    'Verifiqué el cumplimiento de especificaciones técnicas NEC/IEC/NOM y estándares de seguridad en obra durante todo el ciclo de vida del proyecto en ambas obras.',
    job2_date:   'Ene 2023 — Ene 2024',
    job2_title:  'Analista de Presupuestos Eléctricos',
    job2_company:'DEMEK S.A. de C.V. · Chihuahua, México',
    job2_li1:    `Ejecuté el ciclo completo de presupuestación — mediciones en AutoCAD, precios en OPUS, cotizaciones
      con proveedores y entrega al cliente. Gané el <strong>proyecto Terex en Nuevo León</strong>, presentando
      directamente al cliente en inglés a través de Copachisa.`,
    job2_li2:    'Elaboré y presenté propuestas económicas en PowerPoint a clientes no técnicos, cubriendo alcance, partidas y ajustes post-revisión.',
    job2_li3:    'Gestioné relaciones con proveedores para obtener los mejores precios de materiales, integrados directamente en OPUS para el cierre de presupuesto.',

    /* ── CONTACT ── */
    contact_label:   '// contacto',
    contact_heading: 'Hablemos',
    contact_msg:     `Disponible para oportunidades en <strong>Data, Ingeniería de IA</strong> o
      <strong>Ingeniería Eléctrica</strong> en España. Si crees que encajo en tu equipo, escríbeme.`,
    contact_avail:   'Disponibilidad inmediata',

    /* ── FOOTER ── */
    footer_text: 'Diseñado y construido a mano ⚡',
  },
};

/* ─── Language Engine ─────────────────────────────────────── */

const STORAGE_KEY = 'eg_lang';
let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  document.documentElement.lang = lang;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);

  // Update every element that has a data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update lang toggle button appearance
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.setAttribute('aria-label', lang === 'en' ? 'Cambiar a Español' : 'Switch to English');
    btn.querySelector('.lang-toggle__active').textContent = lang.toUpperCase();
    btn.querySelector('.lang-toggle__other').textContent  = lang === 'en' ? 'ES' : 'EN';
  }
}

function toggleLanguage() {
  applyTranslations(currentLang === 'en' ? 'es' : 'en');
}

/* ─── Init ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.addEventListener('click', toggleLanguage);
});
