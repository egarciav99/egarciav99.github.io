/* ============================================
   I18N.JS · Bilingual EN / ES Support
   ============================================ */

const TRANSLATIONS = {
  en: {
    meta_title: 'Elier Garcia · Electrical Engineer · AI & Automation · Madrid',
    meta_description: 'Electrical Engineer with an M.S. in Business Analytics & AI. Industrial projects for Microsoft and BMW Group. Founder of EG Solutions, building AI and automation systems. Based in Madrid.',
    og_description: 'Electrical Engineer with an M.S. in Business Analytics & AI. Industrial projects for Microsoft and BMW Group. Founder of EG Solutions, building AI and automation systems. Based in Madrid.',
    twitter_description: 'Electrical Engineer with an M.S. in Business Analytics & AI. Industrial projects for Microsoft and BMW Group. Founder of EG Solutions, building AI and automation systems. Based in Madrid.',
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_cv: 'CV & Stack',
    nav_experience: 'Experience',
    nav_contact: 'Contact',
    nav_hamburger_label: 'Open menu',
    theme_toggle_label: 'Light theme',
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
    about_p1: `I'm <strong>Elier Garcia</strong>, an electrical engineer from Chihuahua, Mexico. I built my foundation tackling high-stakes field challenges: supervising electrical infrastructure for <strong>Microsoft's Azure hyperscale data center</strong> and a <strong>19,847 m² industrial facility for BMW Group</strong>. At the data center I coordinated the outdoor electrical installations, managing <strong>60+ workers</strong>.`,
    about_p2: `In 2025 I moved to <strong>Madrid</strong> for an M.S. in Business Analytics & AI at INESDI, graduating with the <strong>top academic record of my cohort (8.94/10)</strong>. Alongside the programme I started building AI systems: a RAG assistant for technical documents, an AI cover-letter tool and, as part of a team, a nutrition app whose MVP reached 234 real users. In 2026 I founded EG Solutions, where I build AI automations and platforms for businesses.`,
    about_p3: `I didn't transition into tech just to chase buzzwords. I come from industrial engineering where failures have immediate operational impact. That same discipline shapes how I write code, structure pipelines, and manage cloud workloads today.`,
    about_loc_label: 'Location',
    about_loc_value: 'Madrid, Spain',
    about_edu_label: 'Education',
    about_edu_value: 'M.S. Business Analytics &amp; AI · INESDI (2026)',
    about_bg_label: 'Background',
    about_bg_value: 'B.S. Electrical Engineering · TECNM Chihuahua (9.27/10)',
    about_lang_label: 'Languages',
    about_lang_value: 'Spanish (native) · English B2',
    about_avail_label: 'Availability',
    about_avail_value: 'Immediate',
    port_label: 'Projects',
    port_heading: "What I've built",
    port_subtitle: 'Each project with its real status: in use, in development, MVP or demo.',
    cv_label: 'CV & tech stack',
    cv_heading: 'Tools & Résumé',
    cv_subtitle: 'Download my CV in the profile you need and explore my technical stack.',
    cv_dl_es_title: 'CV Data & AI · Spanish',
    cv_dl_es_sub: 'PDF · Business Analytics & IA',
    cv_dl_en_title: 'CV Data & AI · English',
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
    cert1_title: 'Top Academic Record · M.S. Business Analytics & AI',
    cert1_issuer: 'INESDI Business TechSchool · Madrid (UNIE)',
    cert1_date: 'March 2026',
    cert2_title: 'Digital Leadership Programme',
    cert2_issuer: 'INESDI Business TechSchool',
    cert2_date: 'April 2025',
    cert3_title: 'Artificial Intelligence: Principles & Applications',
    cert3_issuer: 'Universidad del Valle de México',
    cert3_date: 'August 2026',
    cert4_title: 'Electric Power Systems',
    cert4_issuer: 'University at Buffalo (SUNY)',
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
    job1_date: 'Jan 2024 — Feb 2025',
    job1_title: 'Electrical Installations Coordinator',
    job1_company: 'DEMEK S.A. de C.V. · Querétaro / San Luis Potosí, Mexico',
    job1_li1: `Coordinated the outdoor electrical installations at <strong>Microsoft's Azure hyperscale Data Center</strong> in Querétaro, directly supervising <strong>60+ people</strong>: 35 kV medium voltage (about <strong>13,000 m</strong> of cable in a redundant system), grounding, <strong>6 transformers and 6 generators</strong> of up to 3,000 kVA / 3,000 kW, and switchgear.`,
    job1_li2: `At <strong>BMW Group's plant</strong> (San Luis Potosí, 19,847 m² body-shop expansion): chosen as the pilot for a dedicated material-control role, I was <strong>the only person authorised to issue requisitions for the whole building</strong> (100+), with my own tracking system (Excel + SAP), and supervised LV and grounding in 2 sections (~40 people). It cut supply stoppages and uncovered cable ordered above budget and cable theft, which led to tighter security.`,
    job1_li3: 'Verified compliance with NEC/IEC/NOM technical specs and safety standards on-site throughout the full project lifecycle for both sites.',
    job2_date: 'Jan 2023 — Jan 2024',
    job2_title: 'Electrical Estimator',
    job2_company: 'DEMEK S.A. de C.V. · Chihuahua, Mexico',
    job2_li1: `Ran the full estimating cycle (AutoCAD takeoffs, OPUS pricing, vendor quotes and client delivery) for <strong>30+ bids up to USD 500K</strong>. Won the <strong>Terex project in Nuevo León</strong>, presenting directly to the client in English through Copachisa.`,
    job2_li2: 'Built and presented financial proposals in PowerPoint to non-technical clients, covering scope, line items, and post-review adjustments.',
    job2_li3: 'Managed vendor relationships to secure best material pricing, integrated directly into OPUS for budget close-out.',
    contact_label: 'Contact',
    contact_heading: "Let's talk",
    contact_msg: `Available for opportunities in <strong>Data, AI Engineering</strong> or <strong>Electrical Engineering</strong> in Spain. If you think I'm a fit for your team, reach out.`,
    contact_avail: 'Immediate availability',
    contact_location: 'Madrid, Spain',
    footer_text: 'Designed and built by hand ⚡',
    // CV en PDF (cv.html): textos que solo usa el CV; el resto sale de la web
    cvp_title: 'Elier Garcia · CV',
    cvp_headline: 'AI & Automation Developer · RAG, n8n, Python',
    cvp_summary: 'Electrical engineer with an M.S. in Business Analytics & AI (top of my cohort, 8.94/10) and 2 years on industrial projects for Microsoft and BMW Group. I specialise in process automation with n8n, RAG systems and AI web applications, with my own products in real use. I am looking to join a company as an AI or automation developer.',
    cvp_contact: 'Contact',
    cvp_profile: 'Profile',
    cvp_skills: 'Skills',
    cvp_languages: 'Languages',
    cvp_certs: 'Awards & certifications',
    cvp_experience: 'Work experience',
    cvp_projects: 'Selected projects',
    cvp_education: 'Education',
    cvp_edu1_title: 'M.S. in Business Analytics & Artificial Intelligence',
    cvp_edu1_place: 'INESDI Business TechSchool · Madrid, Spain · 2026',
    cvp_edu1_detail: 'Top academic record of the cohort (8.94/10). ETL/ELT, RAG architectures, applied machine learning and Power BI.',
    cvp_edu2_title: 'B.S. in Electrical Engineering',
    cvp_edu2_place: 'Instituto Tecnológico de Chihuahua · Mexico · 2023',
    cvp_edu2_detail: 'Major in electrical installations. GPA 9.27/10. President of the Electrical Engineering student committee.',
    cvp_updated: 'Generated from egarciav99.github.io',
    cvp_demek: 'Industrial electrical and mechanical contractor in Mexico since 1994: 350+ employees and 900+ contracts.',
    // CV eléctrico (cv.html?cv=el): fuente, eg-content/perfil/experiencia.md
    cv_dl_el_href: 'Elier_Garcia_CV_EL.pdf',
    cvp_el_headline: 'Electrical Engineer · Site supervision and estimating',
    cvp_project: 'Related project',
    cvp_el_summary: `Electrical engineer with 2 years in industrial electrical installations: one estimating and one supervising site work at Microsoft's data center in Querétaro and BMW Group's plant in San Luis Potosí. I specialise in low and medium voltage, materials control and estimating, backed by an M.S. in Business Analytics & AI. I am looking to join a company as an electrical site supervisor or technician, or in an estimating department.`,
    cvp_el_job1_li1: `<strong>Microsoft Azure hyperscale Data Center</strong> (Querétaro, 9 months): <strong>coordinator of the outdoor electrical installations</strong>, directly supervising <strong>60+ people</strong>, with daily progress meetings, weekly planning and coordination with mechanical, telecom and civil works.`,
    cvp_el_job1_li2: `Outdoor scope: <strong>35 kV medium voltage</strong> with about <strong>13,000 m</strong> of 750 kcmil copper EPR cable in a redundant system (coordinated with civil works), grounding, pump room (MCC, lighting and power panels), outdoor pole lighting and temporary site power.`,
    cvp_el_job1_li3: `Installation, interconnection and quality verification of critical power equipment: <strong>6 diesel generators</strong> (4 × 3,000 kW at 480 V, 1,500 kW and 750 kW), <strong>6 outdoor transformers</strong> (4 × 3,000 kVA, 1,000 kVA and 750 kVA; dry-type and oil-filled), modular UPS, MCCs, switchboards and PDUs, with crane coordination and redundant A/B power cabling.`,
    cvp_el_job1_li4: `<strong>BMW Group plant</strong> (San Luis Potosí, 5 months, 19,847 m² body-shop expansion in 8 sections): chosen as the pilot for a dedicated material-control role, I was <strong>the only person authorised to issue requisitions for the whole building</strong> (100+) and supervised LV and grounding in 2 sections (~40 people).`,
    cvp_el_job1_li5: 'Built my own materials tracking system (Excel + SAP): every off-budget request technically justified and fewer supply stoppages. It uncovered cable ordered above budget and cable theft, which led to tighter material security.',
    cvp_el_job1_li6: 'Compliance with NEC/IEC/NOM specifications and safety standards on both sites.',
    cvp_el_job2_li1: `<strong>30+ bids delivered, up to USD 500K</strong>, several in parallel (1-2 week deadlines): drawings and specs in AutoCAD, Excel quantity take-offs by room, system and area, and OPUS pricing (Presto equivalent) by line item.`,
    cvp_el_job2_li2: 'Supplier quotes under client-defined brand and function specs, full indirect costs (security, site offices, cranes, labor, safety and documentation) and change orders during execution.',
    cvp_el_job2_li3: `Won the <strong>Terex project in Nuevo León</strong>: the only bid that reached the final presentation, delivered in English directly to Terex through Copachisa.`,
    cvp_el_pdf_assistant_sum: 'Built from my own site experience to query electrical specs and technical manuals: each company uploads its PDFs and gets answers only from the documents, focused on its specialty (electrical, civil, mechanical…). Multi-company with roles, delivered as SaaS or on-premise with Docker.',
    tag_medium_voltage: 'Medium Voltage',
    tag_lv_outdoor: 'LV Outdoor',
    tag_electrical_rooms: 'Electrical Rooms',
    tag_vendor_quotes: 'Vendor quotes',
    tag_site_supervision: 'Site supervision',
    tag_subcontractor_management: 'Subcontractor management',
    tag_microsoft_data_center: 'Microsoft Data Center',
    tag_bmw_group: 'BMW Group',
    tag_autocad: 'AutoCAD',
    tag_opus: 'OPUS (Presto equivalent)',
    tag_excel: 'Excel',
    tag_excel_adv: 'Advanced Excel',
    tag_n8n: 'n8n',
    tag_gemini: 'Gemini',
    tag_react: 'React',
    tag_supabase: 'Supabase',
    tag_ocr: 'OCR'
  },
  es: {
    meta_title: 'Elier Garcia · Ingeniero Eléctrico · IA & Automatización · Madrid',
    meta_description: 'Ingeniero eléctrico con Máster en Business Analytics & IA. Proyectos industriales para Microsoft y BMW Group. Fundador de EG Solutions, desarrollando sistemas de IA y automatización. Base en Madrid.',
    og_description: 'Ingeniero eléctrico con Máster en Business Analytics & IA. Proyectos industriales para Microsoft y BMW Group. Fundador de EG Solutions, desarrollando sistemas de IA y automatización. Base en Madrid.',
    twitter_description: 'Ingeniero eléctrico con Máster en Business Analytics & IA. Proyectos industriales para Microsoft y BMW Group. Fundador de EG Solutions, desarrollando sistemas de IA y automatización. Base en Madrid.',
    nav_about: 'Sobre mí',
    nav_projects: 'Proyectos',
    nav_cv: 'CV & Stack',
    nav_experience: 'Experiencia',
    nav_contact: 'Contacto',
    nav_hamburger_label: 'Abrir menú',
    theme_toggle_label: 'Tema claro',
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
    about_p1: `Soy <strong>Elier Garcia</strong>, ingeniero eléctrico de Chihuahua, México. Me formé resolviendo problemas reales en terreno: supervisé la infraestructura eléctrica del <strong>Data Center Azure de hiperescala de Microsoft</strong> y la nave de <strong>19.847 m² para BMW Group</strong>. En el data center coordiné las instalaciones eléctricas de exteriores, con <strong>más de 60 personas</strong>.`,
    about_p2: `En 2025 me trasladé a <strong>Madrid</strong> para cursar el Máster en Business Analytics & IA en INESDI, donde obtuve el <strong>mejor expediente de la promoción (8,94/10)</strong>. En paralelo empecé a construir sistemas de IA: un asistente RAG para documentación técnica, una herramienta de cartas de presentación con IA y, en equipo, una app de nutrición cuyo MVP llegó a 234 usuarios reales. En 2026 fundé EG Solutions, donde desarrollo automatizaciones y plataformas con IA para empresas.`,
    about_p3: `No entré al desarrollo por subirme a una tendencia. Vengo de la ingeniería de campo donde un error cuesta paradas críticas o problemas de seguridad; ese mismo rigor lo mantengo al diseñar arquitecturas, escribir código y optimizar costos en la nube.`,
    about_loc_label: 'Ubicación',
    about_loc_value: 'Madrid, España',
    about_edu_label: 'Educación',
    about_edu_value: 'Máster en Business Analytics &amp; AI · INESDI (2026)',
    about_bg_label: 'Formación',
    about_bg_value: 'Ingeniería Eléctrica · TECNM Chihuahua (9,27/10)',
    about_lang_label: 'Idiomas',
    about_lang_value: 'Español (nativo) · Inglés B2',
    about_avail_label: 'Disponibilidad',
    about_avail_value: 'Inmediata',
    port_label: 'Proyectos',
    port_heading: 'Lo que he construido',
    port_subtitle: 'Cada proyecto con su estado real: en uso, en desarrollo, MVP o demo.',
    cv_label: 'CV y stack técnico',
    cv_heading: 'Herramientas & Currículum',
    cv_subtitle: 'Descarga mi CV según el perfil que necesites y explora mi stack técnico.',
    cv_dl_es_title: 'CV Data & AI · Español',
    cv_dl_es_sub: 'PDF · Business Analytics & IA',
    cv_dl_en_title: 'CV Data & AI · Inglés',
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
    cert1_title: 'Mejor expediente académico · Máster en Business Analytics & IA',
    cert1_issuer: 'INESDI Business TechSchool · Madrid (UNIE)',
    cert1_date: 'Marzo 2026',
    cert2_title: 'Digital Leadership Programme',
    cert2_issuer: 'INESDI Business TechSchool',
    cert2_date: 'Abril 2025',
    cert3_title: 'Inteligencia Artificial: Principios y Aplicaciones',
    cert3_issuer: 'Universidad del Valle de México',
    cert3_date: 'Agosto 2026',
    cert4_title: 'Electric Power Systems',
    cert4_issuer: 'University at Buffalo (SUNY)',
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
    job1_date: 'Ene 2024 — Feb 2025',
    job1_title: 'Coordinador de instalaciones eléctricas',
    job1_company: 'DEMEK S.A. de C.V. · Querétaro / San Luis Potosí, México',
    job1_li1: `Coordiné las instalaciones eléctricas de exteriores del <strong>Data Center Azure de hiperescala de Microsoft</strong> en Querétaro, supervisando a <strong>más de 60 personas</strong>: media tensión en 35 kV (unos <strong>13.000 m</strong> de cable en sistema redundante), tierras, <strong>6 transformadores y 6 generadores</strong> de hasta 3.000 kVA / 3.000 kW, y tableros.`,
    job1_li2: `En la <strong>planta de BMW Group</strong> (San Luis Potosí, ampliación de carrocería de 19.847 m²): elegido como caso piloto de un puesto dedicado al control de materiales, fui <strong>el único autorizado para las requisiciones de todo el edificio</strong> (más de 100), con un sistema de seguimiento propio (Excel + SAP), y supervisé baja tensión y tierras en 2 secciones (~40 personas). Redujo los paros de suministro y destapó pedidos de cable por encima de lo presupuestado y robos de cable, lo que llevó a reforzar la seguridad.`,
    job1_li3: 'Verifiqué el cumplimiento de especificaciones técnicas NEC/IEC/NOM y estándares de seguridad en obra durante todo el ciclo de vida del proyecto en ambas obras.',
    job2_date: 'Ene 2023 — Ene 2024',
    job2_title: 'Técnico de presupuestos eléctricos',
    job2_company: 'DEMEK S.A. de C.V. · Chihuahua, México',
    job2_li1: `Ejecuté el ciclo completo de presupuestación (mediciones en AutoCAD, precios en OPUS, cotizaciones con proveedores y entrega al cliente) en <strong>más de 30 presupuestos de hasta 500.000 USD</strong>. Gané el <strong>proyecto Terex en Nuevo León</strong>, presentando directamente al cliente en inglés a través de Copachisa.`,
    job2_li2: 'Elaboré y presenté propuestas económicas en PowerPoint a clientes no técnicos, cubriendo alcance, partidas y ajustes post-revisión.',
    job2_li3: 'Gestioné relaciones con proveedores para obtener los mejores precios de materiales, integrados directamente en OPUS para el cierre de presupuesto.',
    contact_label: 'Contacto',
    contact_heading: 'Hablemos',
    contact_msg: `Disponible para oportunidades en <strong>Data, Ingeniería de IA</strong> o <strong>Ingeniería Eléctrica</strong> en España. Si crees que encajo en tu equipo, escríbeme.`,
    contact_avail: 'Disponibilidad inmediata',
    contact_location: 'Madrid, España',
    footer_text: 'Diseñado y construido a mano ⚡',
    // CV en PDF (cv.html): textos que solo usa el CV; el resto sale de la web
    cvp_title: 'Elier Garcia · CV',
    cvp_headline: 'Desarrollador de IA y automatización · RAG, n8n, Python',
    cvp_summary: 'Ingeniero eléctrico con máster en Business Analytics e IA (mejor expediente de la promoción, 8,94/10) y 2 años en obra industrial para Microsoft y BMW Group. Me especializo en automatización de procesos con n8n, sistemas RAG y aplicaciones web con IA, con productos propios en uso real. Busco incorporarme a una empresa como desarrollador de IA o de automatización.',
    cvp_contact: 'Contacto',
    cvp_profile: 'Perfil',
    cvp_skills: 'Habilidades',
    cvp_languages: 'Idiomas',
    cvp_certs: 'Reconocimientos y certificaciones',
    cvp_experience: 'Experiencia laboral',
    cvp_projects: 'Proyectos destacados',
    cvp_education: 'Educación',
    cvp_edu1_title: 'Máster en Business Analytics e Inteligencia Artificial',
    cvp_edu1_place: 'INESDI Business TechSchool · Madrid, España · 2026',
    cvp_edu1_detail: 'Mejor expediente de la promoción (8,94/10). ETL/ELT, arquitecturas RAG, machine learning aplicado y Power BI.',
    cvp_edu2_title: 'Ingeniería Eléctrica',
    cvp_edu2_place: 'Instituto Tecnológico de Chihuahua · México · 2023',
    cvp_edu2_detail: 'Especialidad en instalaciones eléctricas. Promedio 9,27/10. Presidente de la Comisión de Alumnos de Ingeniería Eléctrica.',
    cvp_updated: 'Generado desde egarciav99.github.io',
    cvp_demek: 'Contratista de instalaciones eléctricas y mecánicas industriales en México desde 1994: más de 350 empleados y más de 900 contratos.',
    // CV eléctrico (cv.html?cv=el): fuente, eg-content/perfil/experiencia.md
    cv_dl_el_href: 'Elier_Garcia_CV_EL_ES.pdf',
    cvp_el_headline: 'Ingeniero eléctrico · Supervisión de obra y presupuestos',
    cvp_project: 'Proyecto relacionado',
    cvp_el_summary: 'Ingeniero eléctrico con 2 años en instalaciones eléctricas industriales: uno en presupuestos y otro supervisando obra en el data center de Microsoft en Querétaro y en la planta de BMW Group en San Luis Potosí. Me especializo en baja y media tensión, control de materiales y presupuestos, con máster en Business Analytics e IA. Busco incorporarme como supervisor o técnico de obra eléctrica, o en una oficina técnica de presupuestos.',
    cvp_el_job1_li1: `<strong>Data Center Azure de hiperescala de Microsoft</strong> (Querétaro, 9 meses): <strong>coordinador de las instalaciones eléctricas de exteriores</strong>, supervisando a <strong>más de 60 personas</strong>, con juntas diarias de avance, planeación semanal y coordinación con mecánica, telefonía y obra civil.`,
    cvp_el_job1_li2: `Alcance de exteriores: <strong>media tensión en 35 kV</strong> con unos <strong>13.000 m</strong> de cable de cobre 750 kcmil EPR en sistema redundante (coordinada con obra civil), sistemas de tierras, cuarto de bombas (CCM, tableros de alumbrado y fuerza), luminarias exteriores en postes y energía provisional de obra.`,
    cvp_el_job1_li3: `Instalación, interconexión y verificación de calidad de equipo crítico de potencia: <strong>6 generadores diésel</strong> (4 de 3.000 kW a 480 V, 1 de 1.500 kW y 1 de 750 kW), <strong>6 transformadores exteriores</strong> (4 de 3.000 kVA, 1 de 1.000 kVA y 1 de 750 kVA; secos y en aceite), UPS modulares, CCM, tableros de distribución y PDU, con coordinación de grúas y cableado de potencia redundante A/B.`,
    cvp_el_job1_li4: `<strong>Planta de BMW Group</strong> (San Luis Potosí, 5 meses, ampliación de carrocería de 19.847 m² en 8 secciones): elegido como caso piloto de un puesto dedicado al control de materiales, fui <strong>el único autorizado para las requisiciones de todo el edificio</strong> (más de 100) y supervisé baja tensión y tierras en 2 secciones (~40 personas).`,
    cvp_el_job1_li5: 'Sistema propio de seguimiento de material (Excel + SAP): cada requisición fuera de presupuesto justificada técnicamente y menos paros de suministro. Destapó pedidos de cable por encima de lo presupuestado y robos de cable, lo que llevó a reforzar la seguridad del material.',
    cvp_el_job1_li6: 'Cumplimiento de especificaciones NEC/IEC/NOM y normas de seguridad en ambas obras.',
    cvp_el_job2_li1: `<strong>Más de 30 presupuestos entregados, de hasta 500.000 USD</strong>, varios a la vez (entregas de 1 a 2 semanas): planos y especificaciones en AutoCAD, volumetrías en Excel por cuarto, sistema y área, y precios en OPUS (equivalente a Presto) por partidas.`,
    cvp_el_job2_li2: 'Cotizaciones con proveedores bajo especificaciones cerradas de marca y función, indirectos completos (vigilancia, casetas, grúas, mano de obra, seguridad y documentación) y órdenes de cambio durante la ejecución.',
    cvp_el_job2_li3: `Adjudicación del <strong>proyecto Terex en Nuevo León</strong>: el único presupuesto que llegó a presentación final, en inglés y directamente con Terex, a través de Copachisa.`,
    cvp_el_pdf_assistant_sum: 'Nació de mi experiencia en obra para consultar especificaciones eléctricas y manuales técnicos: cada empresa sube sus PDF y obtiene respuestas solo de sus documentos, con el enfoque de su especialidad (eléctrica, civil, mecánica…). Multiempresa con roles, se entrega como SaaS o instalado con Docker.',
    tag_medium_voltage: 'Tensión media',
    tag_lv_outdoor: 'BT exterior',
    tag_electrical_rooms: 'Cuartos eléctricos',
    tag_vendor_quotes: 'Cotizaciones de proveedores',
    tag_site_supervision: 'Supervisión de obra',
    tag_subcontractor_management: 'Gestión de subcontratas',
    tag_microsoft_data_center: 'Centro de datos Microsoft',
    tag_bmw_group: 'BMW Group',
    tag_autocad: 'AutoCAD',
    tag_opus: 'OPUS (equivalente a Presto)',
    tag_excel: 'Excel',
    tag_excel_adv: 'Excel avanzado',
    tag_n8n: 'n8n',
    tag_gemini: 'Gemini',
    tag_react: 'React',
    tag_supabase: 'Supabase',
    tag_ocr: 'OCR'
  }
};

const STORAGE_KEY = 'eg_lang';
let currentLang = (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) || 'es';

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

  // Theme switch: fixed name, its state is aria-pressed (set by main.js)
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn && t.theme_toggle_label) {
    themeBtn.setAttribute('aria-label', t.theme_toggle_label);
    themeBtn.setAttribute('title', t.theme_toggle_label);
  }

  document.querySelectorAll('[data-i18n-href]').forEach((el) => {
    const href = t[el.getAttribute('data-i18n-href')];
    if (href) el.setAttribute('href', href);
  });

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

  // El HTML está en español; si el visitante eligió inglés, se aplica al cargar.
  if (currentLang !== 'es') applyTranslations(currentLang);
});
