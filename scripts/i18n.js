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
    hero_label:   'ELECTRICAL ENGINEER · AI & DATA · BUILDER',
    hero_title:   'Electrical Engineer & AI Developer · Madrid',
    hero_tagline: '"From industrial field engineering to full-stack AI products in production."',
    hero_cta:     'Get in touch',
    hero_status:  'Available to work',
    stat_apps:    'AI apps in production',
    stat_people:  'people coordinated',
    stat_gpa:     'top of class · INESDI 2026',

  /* ── ABOUT ── */
    about_label:    '// profile',
    about_heading:  'From Chihuahua to Madrid.<br>From job site to code.',
    about_p1: `I'm <strong>Elier Garcia</strong>, an electrical engineer from Chihuahua, Mexico. I built my foundation tackling high-stakes field challenges: supervising electrical infrastructure for <strong>Microsoft's Azure hyperscale data center</strong> and a <strong>19,847 m² industrial facility for BMW Group</strong>. Within six months, I stepped up from new hire to running the exterior electrical front solo, managing up to <strong>60 workers</strong> with zero supply stoppages.`,
    about_p2: `In 2025, I moved to <strong>Madrid</strong> for an M.S. in Business Analytics & AI at INESDI, graduating with the <strong>top academic record of my cohort</strong>. Alongside coursework, I built and launched real full-stack AI systems independently, featuring RAG pipelines, serverless workflows, and live production users.`,
    about_p3: `I didn't transition into tech just to chase buzzwords. I come from industrial engineering where failures have immediate operational impact. That same discipline shapes how I write code, structure pipelines, and manage cloud workloads today.`,
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
    port_subtitle: 'Full-stack applications and AI systems running in production and enterprise development.',
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

     /* Project 4: Enterprise Automation Hub */
    coreit_title:   'Enterprise AI Automation Hub (POS Style)',
    coreit_sub:     'Corporate one-touch terminal for AI & n8n workflows',
    coreit_desc:    `Modular hub with a POS-terminal UI enabling non-technical staff to trigger complex workflows with a single tap. Features an isolated JS execution sandbox, an OCR + dual-LLM cross-validation extraction pipeline, and dynamic Excel generation with formula audits.`,
    coreit_tag:     'React 19 · n8n Self-hosted · LLM Chain · ExcelJS',
    coreit_status:  'Internal Deployment / Confidential',

    /* Project 5: Digital Loyalty & Gamification Platform */
    loyalty_title:  'Digital Loyalty & Gamification Platform',
    loyalty_sub:    'Omnichannel PWA integrated with Apple & Google Wallet',
    loyalty_desc:   `Web-based rewards platform with a two-step receipt validation flow (automated + on-site staff verification). Features a real-time synchronized triple wallet ecosystem, voucher fingerprinting for fraud prevention, and an operational analytics dashboard.`,
    loyalty_tag:    'React · Apple Wallet · Google Wallet · OTP Auth · Fraud Prevention',
    loyalty_status: 'MVP Stage / Confidential',

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

    /* ── CERTIFICACIONES ── */
    cert1_title:   'Top Academic Record — M.S. Business Analytics & AI',
    cert1_issuer:  'INESDI Business TechSchool · Madrid (UNIE)',
    cert1_date:    'March 2026',
    cert2_title:   'Digital Leadership Programme',
    cert2_issuer:  'INESDI Business TechSchool',
    cert2_date:    'April 2025',
    cert3_title:   'Artificial Intelligence — Principles & Applications',
    cert3_issuer:  'Universidad del Valle de México',
    cert3_date:    'August 2026',
    cert4_title:   'Electric Power Systems',
    cert4_issuer:  'University at Buffalo — SUNY',
    cert4_date:    'February 2023',
    cert5_title:   'PVC-Coated Conduit Installer',
    cert5_issuer:  'Plasti-Bond',
    cert5_date:    'April 2024',

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
    hero_label:   'INGENIERO ELÉCTRICO · AI & DATA · BUILDER',
    hero_title:   'Ingeniero Eléctrico & Desarrollador IA · Madrid',
    hero_tagline: '"Del rigor técnico en obra industrial a productos reales de IA en producción."',
    hero_cta:     'Contactar',
    hero_status:  'Disponible para trabajar',
    stat_apps:    'apps de IA en producción',
    stat_people:  'personas coordinadas',
    stat_gpa:     'mejor expediente · INESDI 2026',
     
    /* ── ABOUT ── */
    about_label:    '// perfil',
    about_heading:  'De Chihuahua a Madrid.<br>De la obra al código.',
    about_p1: `Soy <strong>Elier Garcia</strong>, ingeniero eléctrico de Chihuahua, México. Me formé resolviendo problemas reales en terreno: supervisé la infraestructura eléctrica del <strong>Data Center Azure de hiperescala de Microsoft</strong> y la nave de <strong>19,847 m² para BMW Group</strong>. En seis meses pasé de integrarme al equipo a liderar de forma autónoma el frente exterior, coordinando hasta <strong>60 personas</strong> sin un solo día de paro de suministro.`,
    about_p2: `En 2025 me trasladé a <strong>Madrid</strong> para cursar el Máster en Business Analytics & IA en INESDI, donde obtuve el <strong>mejor expediente de la promoción (8.94/10)</strong>. Durante el máster no me quedé en teoría: desarrollé y desplegué de forma independiente proyectos completos con RAG, flujos serverless y SaaS con usuarios reales.`,
    about_p3: `No entré al desarrollo por subirme a una tendencia. Vengo de la ingeniería de campo donde un error cuesta paradas críticas o problemas de seguridad; ese mismo rigor lo mantengo al diseñar arquitecturas, escribir código y optimizar costos en la nube.`,
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
   port_subtitle: 'Aplicaciones full-stack y sistemas de IA en producción y desarrollo corporativo.',
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

   /* Proyecto 4: Terminal POS de Automatización */
    coreit_title:   'Plataforma de Automatización Empresarial (Estilo POS)',
    coreit_sub:     'Terminal corporativo de IA y flujos n8n',
    coreit_desc:    `Hub modular con interfaz táctil tipo terminal POS para ejecutar automatizaciones complejas en un toque. Incluye entorno sandbox aislado en JS, pipeline de extracción OCR + validación cruzada con doble LLM y generación dinámica de hojas Excel protegidas con fórmulas auditadas.`,
    coreit_tag:     'React 19 · n8n Self-hosted · LLM Chain · ExcelJS',
    coreit_status:  'Despliegue interno / Confidencial',

    /* Proyecto 5: Fidelización y Gamificación Digital */
    loyalty_title:  'Plataforma de Fidelización & Gamificación Digital',
    loyalty_sub:    'PWA omnicanal con integración a Apple y Google Wallet',
    loyalty_desc:   `Plataforma web de fidelización con validación de tickets en dos fases (IA + confirmación de personal en sitio). Cuenta con arquitectura de triple billetera sincronizada en tiempo real, sistema antifraude por huella digital de comprobante y panel de analítica operativa.`,
    loyalty_tag:    'React · Apple Wallet · Google Wallet · OTP Auth · Antifraude',
    loyalty_status: 'Fase MVP / Confidencial',

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

 /* ── CERTIFICACIONES (agrega cert5) ── */
    cert1_title:   'Mejor Expediente Académico — Máster en Business Analytics & IA',
    cert1_issuer:  'INESDI Business TechSchool · Madrid (UNIE)',
    cert1_date:    'Marzo 2026',
    cert2_title:   'Ciclo Digital Leadership',
    cert2_issuer:  'INESDI Business TechSchool',
    cert2_date:    'Abril 2025',
    cert3_title:   'Inteligencia Artificial — Principios y Aplicaciones',
    cert3_issuer:  'Universidad del Valle de México',
    cert3_date:    'Agosto 2026',
    cert4_title:   'Electric Power Systems',
    cert4_issuer:  'University at Buffalo — SUNY',
    cert4_date:    'Febrero 2023',
    cert5_title:   'Instalador Certificado de Tubería Recubierta (PVC)',
    cert5_issuer:  'Plasti-Bond',
    cert5_date:    'Abril 2024',

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
