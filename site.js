(() => {
  'use strict';

  /** Paste your live pilot-calendar URL here after Vercel deploy (optional). */
  const PILOT_CALENDAR_URL = '';

  /**
   * Gallery: set `src` when a file is ready (path from site root, e.g. assets/comunidad.jpg).
   * For video, optional `poster` image while loading.
   */
  const MEDIA_SLOTS = [
    {
      id: 'comunidad',
      type: 'image',
      src: '',
      caption: {
        es: 'Comunidad y territorio (con permiso para publicar).',
        en: 'Community and landscape (published with permission).',
        de: 'Gemeinschaft und Landschaft (mit Veröffentlichungserlaubnis).',
      },
    },
    {
      id: 'app-capturas',
      type: 'image',
      src: '',
      caption: {
        es: 'Capturas de la app educativa (sin datos personales).',
        en: 'Screenshots of the educational app (no personal data).',
        de: 'Screenshots der Bildungs-App (ohne personenbezogene Daten).',
      },
    },
    {
      id: 'taller',
      type: 'image',
      src: '',
      caption: {
        es: 'Taller o actividad de divulgación con el Centro.',
        en: 'Outreach activity or workshop with the Center.',
        de: 'Workshop oder Vermittlungsaktivität mit dem Zentrum.',
      },
    },
    {
      id: 'alimentos',
      type: 'image',
      src: '',
      caption: {
        es: 'Alimentos y prácticas locales (ejemplo para los módulos).',
        en: 'Local foods and practices (example for the modules).',
        de: 'Lokale Lebensmittel und Praktiken (Beispiel für die Module).',
      },
    },
    {
      id: 'video-presentacion',
      type: 'video',
      src: '',
      poster: '',
      caption: {
        es: 'Video breve: qué es el proyecto (2–3 min).',
        en: 'Short video: what the project is (2–3 min).',
        de: 'Kurzes Video: Worum geht es in dem Projekt? (2–3 Min.).',
      },
    },
    {
      id: 'video-modulo',
      type: 'video',
      src: '',
      poster: '',
      caption: {
        es: 'Demostración de un módulo de realidad aumentada.',
        en: 'Demo of one augmented-reality module.',
        de: 'Demonstration eines Augmented-Reality-Moduls.',
      },
    },
  ];

  const T = {
    es: {
      brandTitle: 'Nutrición en RA',
      nav: [
        ['#que-es', 'El proyecto'],
        ['#equipo', 'Equipo'],
        ['#participar', 'Participar'],
        ['#centro', 'Centro Mazahua'],
        ['#etapa', 'Etapa 1'],
        ['#galeria', 'Fotos y videos'],
      ],
      heroEyebrow: 'Ciencia comunitaria · Villa Victoria, Edomex',
      heroH1: 'Realidad virtual contra la diabetes',
      heroLede: 'En México, el 18,3 % de los adultos vive con diabetes y 1 de cada 3 aún no lo sabe. Nuestra app ayuda a la mejor planeación alimentaria, aprovechando conocimientos ancestrales avalados científicamente.',
      heroNote: 'Cifras: ENSANUT 2022 (INSP). En 2024 la diabetes fue la segunda causa de muerte en México —112 577 defunciones, 17 155 en el Estado de México (INEGI).',
      ctaParticipate: 'Cómo participar',
      ctaCenter: 'Para el Centro Mazahua',
      scrollHint: 'Desliza',
      factWhereLbl: 'Dónde',
      factWhere: 'Villa Victoria y comunidades vinculadas al centro mazahua de la región',
      factProgramLbl: 'Financiamiento',
      factProgram: 'SECIHTI · Divulgación Comunitaria 2025 (Pp F003 / F027)',
      factStageLbl: 'Etapa en curso',
      factStage: 'Etapa 1: jul. 2026 – jun. 2027',
      asideLabel: 'Tres módulos en la app',
      eyWhat: 'El proyecto',
      eyAud: 'Para quién',
      eyPart: 'Participación voluntaria',
      eyCenter: 'Comunidad',
      eyStage: 'Calendario',
      eySci: 'Método',
      eyTeam: 'Equipo',
      eyMedia: 'Galería',
      eyFund: 'Seguimiento',
      eyLinks: 'Recursos',
      backTop: 'Volver arriba',
      modules: [
        { t: 'Alimentación diaria', d: 'Maíz, frijol, verduras y hábitos del hogar con explicaciones visuales.' },
        { t: 'Glucosa y energía', d: 'Cómo los alimentos afectan la energía del cuerpo, en lenguaje sencillo.' },
        { t: 'Movimiento', d: 'Actividad física cotidiana como parte del cuidado de la salud.' },
      ],
      whatTitle: 'El proyecto',
      whatBody: `<p>En México, la diabetes es la <strong>segunda causa de muerte</strong>, solo por detrás de las enfermedades del corazón. Las razones son varias: el paso de la alimentación tradicional a los ultraprocesados, las bebidas azucaradas que desplazan al agua y a las comidas de casa, y la falta de información clara al alcance de la comunidad.</p>
<p>Estos hábitos están fuertemente anclados. Sin embargo, resulta sorprendente que con <strong>tan solo cambios puntuales en la dieta</strong> se pueda reducir la probabilidad de desarrollar diabetes. Que ese conocimiento llegue, y se use, es la apuesta de este proyecto (clave <strong>DIVULGACION-2025-1352</strong>).</p>
<p>Nuestra app, por medio de la <strong>Realidad Aumentada</strong>, ofrece información basada en la revisión más actualizada de estudios científicos sobre el impacto de los alimentos en la salud. Esa información es curada y dirigida a nuestra población específica gracias a las entrevistas realizadas en la comunidad, en persona y en línea, y se comunica de forma útil y didáctica para su mejor aprovechamiento.</p>
<p>Nuestro equipo, con expertos internacionales en salud digital —el <strong>Dr. Jeffrey Vadala</strong> y el <strong>Dr. Vicente Estrada González</strong>—, ya había desarrollado esta tecnología y probado su eficacia en una comunidad de Filadelfia, EE. UU., para fomentar la vacunación en comunidades con menor acceso a los servicios de salud.</p>`,
      audTitle: 'Información según quién consulta',
      audIntro: 'Esta página es pública. Resume el propósito del proyecto sin datos personales de participantes.',
      audiences: [
        { accent: '#c4841a', title: 'Público general', text: 'Conoce qué hacemos, por qué en Villa Victoria y cómo se respetan las decisiones de la comunidad.' },
        { accent: '#a4502f', title: 'Personas interesadas en participar', text: 'Entrevistas y uso de la app son voluntarios. Puede saltarse cualquier pregunta o dejar de participar.' },
        { accent: '#6b7a3a', title: 'Centro Mazahua', text: 'Pedimos revisión de volantes y difusión. Devolvemos un resumen útil y reconocemos a la comunidad en los materiales.' },
        { accent: '#1f1b16', title: 'SECIHTI y posibles financiadores', text: 'Etapa 1 con productos verificables: diagnóstico comunitario, app beta y materiales para ampliar etapas futuras.' },
      ],
      partTitle: 'Cómo participar',
      partAdultsTitle: 'Conversaciones con adultos',
      partAdults: `<p>Una persona del equipo entrevista a <strong>voluntarios</strong> (45–60 min) sobre alimentación, hábitos y contexto comunitario. Hay intérprete mazahua–español si se prefiere.</p>
<ul><li>No es encuesta obligatoria ni condiciona apoyos.</li><li>Consentimiento informado; preguntas que no quiera contestar, se omiten.</li><li>Los nombres no son obligatorios en el registro.</li></ul>`,
      partKidsTitle: 'Niñas y niños y la app',
      partKids: `<p>En grupos pequeños, niñas y niños de <strong>8 a 14 años</strong> prueban la app en teléfonos del proyecto, con permiso del tutor.</p>
<ul><li>Módulos cortos con realidad aumentada y preguntas antes/después.</li><li>No entrega resultado médico.</li><li>Un espacio local y el equipo técnico acompañan la actividad.</li></ul>`,
      partRights: '<strong>Sus derechos:</strong> participar es una elección; puede retirarse en cualquier momento; la información se usa solo para mejorar la divulgación científica del proyecto.',
      centerTitle: 'Colaboración con el Centro Mazahua',
      centerBody: `<p>Antes del piloto en campo contactamos al centro para <strong>presentar el proyecto</strong> y solicitar que revisen <strong>volantes u otros materiales</strong> con los que se invita a participar de forma voluntaria.</p>
<p>El Centro <strong>no elige las fechas</strong> del trabajo de campo; puede autorizar o no la difusión en su espacio. Acordamos devolver un <strong>resumen en formato útil</strong> para la comunidad y el reconocimiento en los materiales educativos.</p>
<p>La instancia receptora exacta (presidencia indígena mazahua, CEDIPIEM u otra) se confirma en territorio, conforme al protocolo del proyecto.</p>`,
      stageTitle: 'Etapa 1 (2026–2027)',
      stageBody: `<p>La Secretaría Técnica fijó el calendario de esta etapa. El piloto en Villa Victoria está planeado para el <strong>8 al 26 de enero de 2027</strong> (días concretos en acuerdo con el equipo).</p>`,
      timeline: [
        { when: 'Jul 2026', what: 'Inicio de la etapa 1 y trabajo de contenidos científicos y comunitarios.' },
        { when: 'Nov–Dic 2026', what: 'Entrega de estructura de la app, montaje técnico y contacto con el Centro Mazahua.' },
        { when: 'Ene 2027', what: 'Piloto en Villa Victoria: entrevistas y sesiones con la app.' },
        { when: 'Jun 2027', what: 'Término formal de la etapa 1; pulido de la app con lo aprendido en el piloto.' },
      ],
      sciTitle: 'Base científica y ética',
      sciBody: `<p>Los guiones parten de literatura sobre nutrición, diabetes tipo 2, alimentación mazahua y educación digital. Lo que no se confirme en comunidad se presenta de forma genérica o se omite.</p>
<p>Principios: consentimiento, reciprocidad con el centro, materiales multilingües cuando sea posible, y evaluación formativa (antes/después) de los módulos sin fines clínicos.</p>`,
      teamTitle: 'Quién trabaja en el proyecto',
      teamIntro: 'Roles principales en la etapa 1. La lista puede ampliarse con colaboradores locales.',
      team: [
        {
          name: 'Dr. Vicente Estrada González',
          initials: 'VE',
          photo: 'assets/team-vicente.jpg',
          url: 'https://vicenteestrada.com',
          role: 'Responsable técnico · Investigador postdoctoral (LMU Múnich)',
          credentials: 'PhD en Psicología (UNSW Sydney) · B.Sc. Psicología (UNAM) · Ex-postdoc, Penn Center for Neuroaesthetics (UPenn)',
          text: 'Diseño científico, entrevistas comunitarias y coordinación general del proyecto SECIHTI. Investiga estética empírica, visión y salud digital; lidera el desarrollo de la app de realidad aumentada.',
        },
        { name: 'Jeffrey Vadala', initials: 'JV', photo: '', url: '', role: 'Desarrollo de la app', credentials: '', text: 'Construcción técnica de la aplicación educativa en dispositivos móviles.' },
        { name: 'Inhala / Mallinalli', initials: 'M', photo: '', url: '', role: 'Articulación local', credentials: '', text: 'Espacio, dinámica comunitaria y apoyo en Villa Victoria.' },
      ],
      mediaTitle: 'Fotos y videos',
      mediaIntro: 'Espacios reservados para imágenes y material audiovisual del proyecto. Solo se publicará contenido con consentimiento y sin datos personales.',
      mediaEmpty: 'Pendiente',
      mediaPhoto: 'Foto',
      mediaVideo: 'Video',
      fundTitle: 'Para SECIHTI y quienes evalúen etapas futuras',
      fundBody: `<p><strong>Clave:</strong> DIVULGACION-2025-1352. <strong>Convocatoria:</strong> Divulgación Comunitaria de la Ciencia y las Humanidades 2025.</p>
<p><strong>Entregables de la etapa 1:</strong> revisión bibliográfica y análisis de vacíos; diagnóstico comunitario (meta de 15 entrevistas); app beta con tres módulos de RA; piloto documentado; materiales preparados para divulgación abierta.</p>
<p>Una posible <strong>etapa 2</strong> dependería de convocatorias y dictámenes oficiales; esta página no anuncia montos ni compromisos no notificados por SECIHTI.</p>`,
      linksTitle: 'Enlaces útiles',
      linksIntro: 'Recursos públicos relacionados con el proyecto.',
      links: [
        { href: 'https://www.conahcyt.mx/secihti', title: 'SECIHTI', text: 'Secretaría Ejecutiva del Sistema Nacional de Investigación e Innovación.', external: true },
        { href: PILOT_CALENDAR_URL, title: 'Calendario del piloto (equipo)', text: 'Herramienta interna para coordinar fechas entre investigadoras, investigadores y colaboradores.', external: true, needsUrl: true },
      ],
      footLegal: 'Financiado por la <strong>SECIHTI</strong> dentro de la convocatoria de Divulgación Comunitaria de la Ciencia y las Humanidades 2025. Responsable técnico: <strong>Dr. Vicente Estrada González</strong>.',
      footNote: 'Sitio informativo. No solicita datos personales. Actualizado conforme avanza la etapa 1.',
      linkSoon: ' (enlace del equipo cuando esté publicado)',
    },
    en: {
      brandTitle: 'Nutrition in AR',
      nav: [
        ['#que-es', 'Project'],
        ['#equipo', 'Team'],
        ['#participar', 'Take Part'],
        ['#centro', 'Mazahua Center'],
        ['#etapa', 'Stage 1'],
        ['#galeria', 'Photos & Videos'],
      ],
      heroEyebrow: 'Community Science · Villa Victoria, Mexico State',
      heroH1: 'Virtual Reality Against Diabetes',
      heroLede: 'In Mexico, 18.3% of adults live with diabetes, and 1 in 3 doesn’t know it yet. Our app helps with better meal planning, drawing on ancestral knowledge backed by science.',
      heroNote: 'Figures: ENSANUT 2022 (INSP). In 2024, diabetes was the second cause of death in Mexico — 112,577 deaths; 17,155 in Mexico State (INEGI).',
      ctaParticipate: 'How to Participate',
      ctaCenter: 'For the Mazahua Center',
      scrollHint: 'Scroll',
      factWhereLbl: 'Where',
      factWhere: 'Villa Victoria and communities linked to the regional Mazahua center',
      factProgramLbl: 'Funder',
      factProgram: 'SECIHTI · Community Outreach for Science & Humanities 2025 (Pp F003 / F027)',
      factStageLbl: 'Current Stage',
      factStage: 'Stage 1: Jul 2026 – Jun 2027',
      asideLabel: 'Three Modules in the App',
      eyWhat: 'The Project',
      eyAud: 'Who This Is For',
      eyPart: 'Voluntary Participation',
      eyCenter: 'Community',
      eyStage: 'Timeline',
      eySci: 'Method',
      eyTeam: 'Team',
      eyMedia: 'Gallery',
      eyFund: 'Next Stages',
      eyLinks: 'Resources',
      backTop: 'Back to Top',
      modules: [
        { t: 'Everyday Food', d: 'Corn, beans, vegetables and home habits with visual explanations.' },
        { t: 'Glucose and Energy', d: 'How food affects body energy, in plain language.' },
        { t: 'Movement', d: 'Everyday physical activity as part of caring for health.' },
      ],
      whatTitle: 'The Project',
      whatBody: `<p>In Mexico, diabetes is the <strong>second cause of death</strong>, behind only heart disease. The reasons are many: the shift from traditional foodways to ultra-processed products, sugary drinks displacing water and home-cooked meals, and a lack of clear information within the community’s reach.</p>
<p>These habits are deeply rooted. Yet it is striking that with <strong>just a few targeted changes in diet</strong>, the likelihood of developing diabetes can be reduced. Making that knowledge arrive — and be used — is this project’s bet (ID <strong>DIVULGACION-2025-1352</strong>).</p>
<p>Through <strong>augmented reality</strong>, our app offers information based on the most up-to-date review of scientific studies on how food affects health. That information is curated and aimed at our specific population thanks to interviews carried out in the community, in person and online, and is communicated in a useful, didactic way so it can be put to the best use.</p>
<p>Our team, with international experts in digital health — <strong>Dr. Jeffrey Vadala</strong> and <strong>Dr. Vicente Estrada González</strong> — had already developed this technology and tested its effectiveness in a community in Philadelphia, USA, to encourage vaccination in communities with less access to health services.</p>`,
      audTitle: 'Information by Audience',
      audIntro: 'This page is public. It summarises the purpose of the project without participants’ personal data.',
      audiences: [
        { accent: '#c4841a', title: 'General Public', text: 'Learn what we do, why Villa Victoria, and how community decisions are respected.' },
        { accent: '#a4502f', title: 'Potential Participants', text: 'Interviews and app use are voluntary. You may skip any question or stop at any time.' },
        { accent: '#6b7a3a', title: 'Mazahua Center', text: 'We ask for review of flyers and outreach. We return a useful summary and credit the community in materials.' },
        { accent: '#1f1b16', title: 'SECIHTI & Future Funders', text: 'Stage 1 with verifiable outputs: community assessment, beta app, and materials to scale later stages.' },
      ],
      partTitle: 'How to Take Part',
      partAdultsTitle: 'Conversations with Adults',
      partAdults: `<p>A team member interviews <strong>volunteers</strong> (45–60 min) about food, habits and community context. A Mazahua–Spanish interpreter is available if preferred.</p>
<ul><li>Not a mandatory survey and not tied to social programmes.</li><li>Informed consent; questions may be skipped.</li><li>Names are optional on the registration form.</li></ul>`,
      partKidsTitle: 'Children and the App',
      partKids: `<p>In small groups, children aged <strong>8–14</strong> try the app on project phones, with a guardian’s permission.</p>
<ul><li>Short AR modules with before/after questions.</li><li>No medical result is delivered.</li><li>A local space and the technical team support the session.</li></ul>`,
      partRights: '<strong>Your rights:</strong> participation is a choice; you may withdraw at any time; information is used only to improve this science outreach project.',
      centerTitle: 'Working with the Mazahua Center',
      centerBody: `<p>Before fieldwork we contact the center to <strong>present the project</strong> and ask them to review <strong>flyers or other materials</strong> inviting voluntary participation.</p>
<p>The Center <strong>does not choose field dates</strong>; it may or may not allow outreach in its space. We agree to return a <strong>useful summary</strong> for the community and recognition in educational materials.</p>
<p>The exact receiving body (Mazahua leadership, CEDIPIEM or another community institution) is confirmed on site, following the project protocol.</p>`,
      stageTitle: 'Stage 1 (2026–2027)',
      stageBody: `<p>The Technical Secretariat set this stage’s calendar. The Villa Victoria pilot is planned for <strong>8–26 January 2027</strong> (exact days agreed with the team).</p>`,
      timeline: [
        { when: 'Jul 2026', what: 'Start of stage 1; scientific and community content work.' },
        { when: 'Nov–Dec 2026', what: 'App structure handoff, technical build, contact with the Mazahua Center.' },
        { when: 'Jan 2027', what: 'Pilot in Villa Victoria: interviews and app sessions.' },
        { when: 'Jun 2027', what: 'Formal end of stage 1; app polish after the pilot.' },
      ],
      sciTitle: 'Science and Ethics',
      sciBody: `<p>Scripts draw on literature on nutrition, type 2 diabetes, Mazahua foodways and digital education. What is not confirmed in the community is kept generic or omitted.</p>
<p>Principles: consent, reciprocity with the center, multilingual materials when possible, and formative (before/after) evaluation of modules without clinical aims.</p>`,
      teamTitle: 'Project Team',
      teamIntro: 'Core roles in stage 1. Local collaborators may be added.',
      team: [
        {
          name: 'Dr. Vicente Estrada González',
          initials: 'VE',
          photo: 'assets/team-vicente.jpg',
          url: 'https://vicenteestrada.com',
          role: 'Principal Investigator · Postdoctoral Researcher (LMU Munich)',
          credentials: 'PhD in Psychology (UNSW Sydney) · B.Sc. Psychology (UNAM) · Former postdoc, Penn Center for Neuroaesthetics (UPenn)',
          text: 'Scientific design, community interviews and overall coordination of the SECIHTI project. Researches empirical aesthetics, vision and digital health; leads development of the augmented-reality app.',
        },
        { name: 'Jeffrey Vadala', initials: 'JV', photo: '', url: '', role: 'App Development', credentials: '', text: 'Technical build of the educational mobile application.' },
        { name: 'Inhala / Mallinalli', initials: 'M', photo: '', url: '', role: 'Local Liaison', credentials: '', text: 'Space, community dynamics and support in Villa Victoria.' },
      ],
      mediaTitle: 'Photos and Videos',
      mediaIntro: 'Reserved slots for project images and clips. Only material with consent and no personal data will be published.',
      mediaEmpty: 'Coming Soon',
      mediaPhoto: 'Photo',
      mediaVideo: 'Video',
      fundTitle: 'For SECIHTI and Future Funding Reviewers',
      fundBody: `<p><strong>ID:</strong> DIVULGACION-2025-1352. <strong>Call:</strong> Community Outreach for Science and Humanities 2025.</p>
<p><strong>Stage 1 outputs:</strong> literature review and gap analysis; community assessment (goal of 15 interviews); beta app with three AR modules; documented pilot; materials prepared for open outreach.</p>
<p>A possible <strong>stage 2</strong> would depend on official calls and reviews; this page does not announce budgets or commitments not notified by SECIHTI.</p>`,
      linksTitle: 'Useful Links',
      linksIntro: 'Public resources related to the project.',
      links: [
        { href: 'https://www.conahcyt.mx/secihti', title: 'SECIHTI', text: 'Mexican Secretariat for Science, Humanities, Technology and Innovation.', external: true },
        { href: PILOT_CALENDAR_URL, title: 'Pilot Calendar (Team)', text: 'Internal tool to coordinate dates among researchers and collaborators.', external: true, needsUrl: true },
      ],
      footLegal: 'Funded by <strong>SECIHTI</strong> under the 2025 Community Outreach for Science and Humanities call. Principal investigator: <strong>Dr. Vicente Estrada González</strong>.',
      footNote: 'Informational site. Does not collect personal data. Updated as stage 1 progresses.',
      linkSoon: ' (team link when published)',
    },
    de: {
      brandTitle: 'Ernährung in AR',
      nav: [
        ['#que-es', 'Das Projekt'],
        ['#equipo', 'Team'],
        ['#participar', 'Mitmachen'],
        ['#centro', 'Mazahua-Zentrum'],
        ['#etapa', 'Stufe 1'],
        ['#galeria', 'Fotos & Videos'],
      ],
      heroEyebrow: 'Community Science · Villa Victoria, Bundesstaat México',
      heroH1: 'Virtuelle Realität gegen Diabetes',
      heroLede: 'In Mexiko leben 18,3 % der Erwachsenen mit Diabetes, und jede dritte Person weiß es noch nicht. Unsere App unterstützt eine bessere Ernährungsplanung und greift dabei auf überliefertes Wissen der Vorfahren zurück, das wissenschaftlich gestützt ist.',
      heroNote: 'Zahlen: ENSANUT 2022 (INSP). 2024 war Diabetes die zweithäufigste Todesursache in Mexiko — 112.577 Todesfälle; 17.155 im Bundesstaat México (INEGI).',
      ctaParticipate: 'So können Sie mitmachen',
      ctaCenter: 'Für das Mazahua-Zentrum',
      scrollHint: 'Scrollen',
      factWhereLbl: 'Wo',
      factWhere: 'Villa Victoria und Gemeinden, die mit dem regionalen Mazahua-Zentrum verbunden sind',
      factProgramLbl: 'Finanzierung',
      factProgram: 'SECIHTI · Community Outreach für Wissenschaft und Geisteswissenschaften 2025 (Pp F003 / F027)',
      factStageLbl: 'Aktuelle Stufe',
      factStage: 'Stufe 1: Jul. 2026 – Jun. 2027',
      asideLabel: 'Drei Module in der App',
      eyWhat: 'Das Projekt',
      eyAud: 'Für wen',
      eyPart: 'Freiwillige Teilnahme',
      eyCenter: 'Gemeinschaft',
      eyStage: 'Zeitplan',
      eySci: 'Methode',
      eyTeam: 'Team',
      eyMedia: 'Galerie',
      eyFund: 'Weiterführung',
      eyLinks: 'Ressourcen',
      backTop: 'Nach oben',
      modules: [
        { t: 'Alltägliche Ernährung', d: 'Mais, Bohnen, Gemüse und Haushaltsgewohnheiten mit visuellen Erklärungen.' },
        { t: 'Glukose und Energie', d: 'Wie Lebensmittel die Körperenergie beeinflussen — in verständlicher Sprache.' },
        { t: 'Bewegung', d: 'Alltägliche körperliche Aktivität als Teil der Gesundheitsvorsorge.' },
      ],
      whatTitle: 'Das Projekt',
      whatBody: `<p>In Mexiko ist Diabetes die <strong>zweithäufigste Todesursache</strong> — nur Herzkrankheiten liegen davor. Die Gründe sind vielfältig: der Übergang von traditioneller Ernährung zu hochverarbeiteten Produkten, zuckerhaltige Getränke, die Wasser und Hausmannskost verdrängen, sowie fehlende klare Informationen in Reichweite der Gemeinde.</p>
<p>Diese Gewohnheiten sind fest verankert. Dennoch überrascht es, dass bereits <strong>gezielte Veränderungen in der Ernährung</strong> die Wahrscheinlichkeit, Diabetes zu entwickeln, senken können. Dass dieses Wissen ankommt — und genutzt wird — ist der Einsatz dieses Projekts (Kennung <strong>DIVULGACION-2025-1352</strong>).</p>
<p>Über <strong>Augmented Reality</strong> bietet unsere App Informationen auf Grundlage der aktuellsten wissenschaftlichen Studien zum Einfluss von Lebensmitteln auf die Gesundheit. Diese Informationen werden kuratiert und auf unsere spezifische Bevölkerung zugeschnitten — dank Interviews in der Gemeinde, vor Ort und online — und so vermittelt, dass sie nützlich und didaktisch gut nutzbar sind.</p>
<p>Unser Team mit internationalen Expertinnen und Experten für digitale Gesundheit — <strong>Dr. Jeffrey Vadala</strong> und <strong>Dr. Vicente Estrada González</strong> — hat diese Technologie bereits entwickelt und ihre Wirksamkeit in einer Gemeinde in Philadelphia, USA, erprobt, um Impfungen in Gemeinden mit schlechterem Zugang zu Gesundheitsdiensten zu fördern.</p>`,
      audTitle: 'Informationen nach Zielgruppe',
      audIntro: 'Diese Seite ist öffentlich. Sie fasst den Zweck des Projekts zusammen — ohne personenbezogene Daten von Teilnehmenden.',
      audiences: [
        { accent: '#c4841a', title: 'Allgemeine Öffentlichkeit', text: 'Erfahren Sie, was wir tun, warum in Villa Victoria, und wie Entscheidungen der Gemeinde geachtet werden.' },
        { accent: '#a4502f', title: 'Interessierte Teilnehmende', text: 'Interviews und App-Nutzung sind freiwillig. Sie können jede Frage überspringen oder jederzeit aufhören.' },
        { accent: '#6b7a3a', title: 'Mazahua-Zentrum', text: 'Wir bitten um Prüfung von Flugblättern und Öffentlichkeitsarbeit. Wir liefern eine nützliche Zusammenfassung zurück und würdigen die Gemeinde in den Materialien.' },
        { accent: '#1f1b16', title: 'SECIHTI und künftige Förderer', text: 'Stufe 1 mit überprüfbaren Ergebnissen: Gemeindediagnose, Beta-App und Materialien für spätere Stufen.' },
      ],
      partTitle: 'So können Sie mitmachen',
      partAdultsTitle: 'Gespräche mit Erwachsenen',
      partAdults: `<p>Eine Person aus dem Team interviewt <strong>Freiwillige</strong> (45–60 Min.) zu Ernährung, Gewohnheiten und Gemeindekontext. Eine mazahua–spanische Dolmetschung ist auf Wunsch verfügbar.</p>
<ul><li>Keine verpflichtende Umfrage und nicht an Sozialleistungen gebunden.</li><li>Informierte Einwilligung; Fragen können übersprungen werden.</li><li>Namen sind im Formular optional.</li></ul>`,
      partKidsTitle: 'Kinder und die App',
      partKids: `<p>In kleinen Gruppen erproben Kinder von <strong>8 bis 14 Jahren</strong> die App auf Projekttelefonen — mit Erlaubnis der Erziehungsberechtigten.</p>
<ul><li>Kurze AR-Module mit Vorher-/Nachher-Fragen.</li><li>Kein medizinisches Ergebnis.</li><li>Ein lokaler Raum und das technische Team begleiten die Sitzung.</li></ul>`,
      partRights: '<strong>Ihre Rechte:</strong> Die Teilnahme ist freiwillig; Sie können jederzeit zurücktreten; Informationen dienen nur der Verbesserung dieser wissenschaftlichen Vermittlung.',
      centerTitle: 'Zusammenarbeit mit dem Mazahua-Zentrum',
      centerBody: `<p>Vor der Feldarbeit kontaktieren wir das Zentrum, um das <strong>Projekt vorzustellen</strong> und um die Prüfung von <strong>Flugblättern oder anderen Materialien</strong> zu bitten, mit denen zur freiwilligen Teilnahme eingeladen wird.</p>
<p>Das Zentrum <strong>wählt keine Feldtermine</strong>; es kann die Öffentlichkeitsarbeit in seinem Raum erlauben oder ablehnen. Wir vereinbaren, eine <strong>nützliche Zusammenfassung</strong> für die Gemeinde zurückzugeben und sie in den Bildungsmaterialien zu würdigen.</p>
<p>Die genaue empfangende Stelle (mazahuaische indigene Leitung, CEDIPIEM oder eine andere Gemeindeinstitution) wird vor Ort bestätigt — gemäß dem Projektprotokoll.</p>`,
      stageTitle: 'Stufe 1 (2026–2027)',
      stageBody: `<p>Das Technische Sekretariat hat den Kalender dieser Stufe festgelegt. Der Pilot in Villa Victoria ist für den <strong>8. bis 26. Januar 2027</strong> geplant (genaue Tage in Absprache mit dem Team).</p>`,
      timeline: [
        { when: 'Jul. 2026', what: 'Beginn von Stufe 1; wissenschaftliche und gemeindebezogene Inhaltsarbeit.' },
        { when: 'Nov.–Dez. 2026', what: 'Übergabe der App-Struktur, technischer Aufbau, Kontakt mit dem Mazahua-Zentrum.' },
        { when: 'Jan. 2027', what: 'Pilot in Villa Victoria: Interviews und App-Sitzungen.' },
        { when: 'Jun. 2027', what: 'Formelles Ende von Stufe 1; App-Nachbearbeitung nach dem Pilot.' },
      ],
      sciTitle: 'Wissenschaft und Ethik',
      sciBody: `<p>Die Skripte stützen sich auf Literatur zu Ernährung, Typ-2-Diabetes, mazahuaischer Esskultur und digitaler Bildung. Was in der Gemeinde nicht bestätigt ist, wird allgemein gehalten oder weggelassen.</p>
<p>Grundsätze: Einwilligung, Gegenseitigkeit mit dem Zentrum, mehrsprachige Materialien wo möglich sowie formative (Vorher-/Nachher-)Evaluation der Module ohne klinische Ziele.</p>`,
      teamTitle: 'Projektteam',
      teamIntro: 'Zentrale Rollen in Stufe 1. Die Liste kann um lokale Mitarbeitende erweitert werden.',
      team: [
        {
          name: 'Dr. Vicente Estrada González',
          initials: 'VE',
          photo: 'assets/team-vicente.jpg',
          url: 'https://vicenteestrada.com',
          role: 'Technische Leitung · Postdoktorand (LMU München)',
          credentials: 'PhD Psychologie (UNSW Sydney) · B.Sc. Psychologie (UNAM) · Ehem. Postdoc, Penn Center for Neuroaesthetics (UPenn)',
          text: 'Wissenschaftliches Design, Gemeindeinterviews und Gesamtkoordination des SECIHTI-Projekts. Forscht zu empirischer Ästhetik, Sehen und digitaler Gesundheit; leitet die Entwicklung der Augmented-Reality-App.',
        },
        { name: 'Jeffrey Vadala', initials: 'JV', photo: '', url: '', role: 'App-Entwicklung', credentials: '', text: 'Technischer Aufbau der Bildungs-App für mobile Geräte.' },
        { name: 'Inhala / Mallinalli', initials: 'M', photo: '', url: '', role: 'Lokale Vernetzung', credentials: '', text: 'Raum, Gemeindedynamik und Unterstützung in Villa Victoria.' },
      ],
      mediaTitle: 'Fotos und Videos',
      mediaIntro: 'Reservierte Plätze für Bilder und audiovisuelle Materialien des Projekts. Veröffentlicht wird nur Material mit Einwilligung und ohne personenbezogene Daten.',
      mediaEmpty: 'Demnächst',
      mediaPhoto: 'Foto',
      mediaVideo: 'Video',
      fundTitle: 'Für SECIHTI und künftige Fördergutachterinnen und -gutachter',
      fundBody: `<p><strong>Kennung:</strong> DIVULGACION-2025-1352. <strong>Ausschreibung:</strong> Community Outreach für Wissenschaft und Geisteswissenschaften 2025.</p>
<p><strong>Ergebnisse von Stufe 1:</strong> Literaturübersicht und Lückenanalyse; Gemeindediagnose (Ziel: 15 Interviews); Beta-App mit drei AR-Modulen; dokumentierter Pilot; Materialien für offene Vermittlung.</p>
<p>Eine mögliche <strong>Stufe 2</strong> hinge von offiziellen Ausschreibungen und Begutachtungen ab; diese Seite kündigt keine Budgets und keine von SECIHTI nicht mitgeteilten Verpflichtungen an.</p>`,
      linksTitle: 'Nützliche Links',
      linksIntro: 'Öffentliche Ressourcen zum Projekt.',
      links: [
        { href: 'https://www.conahcyt.mx/secihti', title: 'SECIHTI', text: 'Mexikanisches Sekretariat für Wissenschaft, Geisteswissenschaften, Technologie und Innovation.', external: true },
        { href: PILOT_CALENDAR_URL, title: 'Pilotkalender (Team)', text: 'Internes Werkzeug zur Terminabstimmung zwischen Forschenden und Mitarbeitenden.', external: true, needsUrl: true },
      ],
      footLegal: 'Finanziert durch die <strong>SECIHTI</strong> im Rahmen der Ausschreibung Community Outreach für Wissenschaft und Geisteswissenschaften 2025. Technische Leitung: <strong>Dr. Vicente Estrada González</strong>.',
      footNote: 'Informationsseite. Erhebt keine personenbezogenen Daten. Wird mit dem Fortschritt von Stufe 1 aktualisiert.',
      linkSoon: ' (Team-Link, sobald veröffentlicht)',
    },
  };

  const STORE_LANG = 'proyecto-vv-lang';
  let lang = 'es';

  const $ = (s) => document.querySelector(s);
  const L = () => lang;
  const t = (k) => T[L()][k];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

  const LANGS = ['es', 'en', 'de'];
  const detectLang = () => {
    try {
      const saved = localStorage.getItem(STORE_LANG);
      if (LANGS.includes(saved)) return saved;
    } catch (e) { /* ignore */ }
    const nav = (navigator.language || '').toLowerCase();
    if (nav.startsWith('de')) return 'de';
    if (nav.startsWith('en')) return 'en';
    return 'es';
  };

  /* ---------- typewriter for section 01 ("El proyecto") ---------- */
  let typeTimer = null;
  let typeStarted = false;
  let typeLang = '';

  const stopTypewriter = () => {
    if (typeTimer) { clearTimeout(typeTimer); typeTimer = null; }
  };

  const fillWhatBody = (html) => {
    const el = $('#whatTypewriter');
    if (!el) return;
    el.classList.add('is-done');
    el.innerHTML = html;
  };

  const runTypewriter = (html, force) => {
    const el = $('#whatTypewriter');
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    stopTypewriter();
    if (reduce) {
      fillWhatBody(html);
      typeStarted = true;
      typeLang = L();
      return;
    }
    if (!force && typeStarted && typeLang === L() && el.classList.contains('is-done')) return;

    typeStarted = true;
    typeLang = L();
    el.classList.remove('is-done');

    // Keep tags intact; type only visible characters (máquina de escribir).
    const tokens = [];
    const re = /(<[^>]+>)|([^<]+)/g;
    let m;
    while ((m = re.exec(html))) {
      if (m[1]) tokens.push({ kind: 'tag', v: m[1] });
      else {
        for (const ch of [...m[2]]) tokens.push({ kind: 'char', v: ch });
      }
    }

    let i = 0;
    let out = '';
    const cursor = '<span class="type-cursor" aria-hidden="true"></span>';
    el.innerHTML = cursor;

    const step = () => {
      if (i >= tokens.length) {
        el.classList.add('is-done');
        el.innerHTML = html;
        typeTimer = null;
        return;
      }
      const tok = tokens[i++];
      if (tok.kind === 'tag') {
        out += tok.v;
        // Flush tags immediately (open/close) without waiting.
        while (i < tokens.length && tokens[i].kind === 'tag') out += tokens[i++].v;
      } else {
        out += tok.v;
      }
      el.innerHTML = out + cursor;

      const ch = tok.kind === 'char' ? tok.v : '';
      let delay = 22;
      if (ch === ' ') delay = 10;
      else if (ch === '.' || ch === '!' || ch === '?') delay = 220;
      else if (ch === ',' || ch === ';' || ch === ':') delay = 90;
      else if (ch === '\n') delay = 40;
      typeTimer = setTimeout(step, delay);
    };
    typeTimer = setTimeout(step, 280);
  };

  const initWhatTypewriter = () => {
    const section = $('#que-es');
    const html = () => T[L()].whatBody;
    if (!section) {
      fillWhatBody(html());
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      fillWhatBody(html());
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) runTypewriter(html(), false);
      });
    }, { threshold: 0.28 });
    io.observe(section);
  };

  const renderText = () => {
    lang = detectLang();
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-t]').forEach((el) => {
      const k = el.dataset.t;
      const v = T[L()][k];
      if (typeof v !== 'string') return;
      if (v.includes('<')) el.innerHTML = v; else el.textContent = v;
    });
    document.querySelectorAll('[data-t-html]').forEach((el) => {
      if (el.id === 'whatTypewriter') return; // driven by the typewriter
      const k = el.dataset.tHtml;
      el.innerHTML = T[L()][k];
    });
    document.querySelectorAll('[data-lang]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    document.title = ({
      es: 'Nutrición en realidad aumentada · Villa Victoria',
      en: 'Nutrition in Augmented Reality · Villa Victoria',
      de: 'Ernährung in Augmented Reality · Villa Victoria',
    })[lang] || document.title;
  };

  const renderNav = () => {
    const nav = $('#nav');
    nav.innerHTML = T[L()].nav.map(([href, label]) =>
      `<a href="${href}">${label}</a>`).join('');
  };

  const renderModules = () => {
    $('#modules').innerHTML = T[L()].modules.map((m, i) =>
      `<li><span class="module-num">${String(i + 1).padStart(2, '0')}</span><strong>${m.t}</strong><span>${m.d}</span></li>`).join('');
  };

  const renderAudiences = () => {
    $('#audience-cards').innerHTML = T[L()].audiences.map((a) => `
      <article class="card" style="--card-accent:${a.accent}">
        <h3>${a.title}</h3>
        <p>${a.text}</p>
      </article>`).join('');
  };

  const renderTimeline = () => {
    $('#timeline').innerHTML = T[L()].timeline.map((x) => `
      <li><time>${x.when}</time><span>${x.what}</span></li>`).join('');
  };

  const renderTeam = () => {
    $('#team').innerHTML = T[L()].team.map((p) => {
      const hasPhoto = Boolean(p.photo && String(p.photo).trim());
      const media = hasPhoto
        ? `<img class="avatar avatar--photo" src="${esc(p.photo)}" alt="${esc(p.name)}" width="800" height="800" loading="lazy">`
        : `<div class="avatar" aria-hidden="true">${esc(p.initials || '')}</div>`;
      const link = p.url
        ? `<a class="team-link" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${esc(p.url.replace(/^https?:\/\//, ''))}</a>`
        : '';
      const creds = p.credentials ? `<p class="team-creds">${esc(p.credentials)}</p>` : '';
      return `<article class="team-card${hasPhoto ? ' has-photo' : ''}">
        ${media}
        <h3>${esc(p.name)}</h3>
        ${link}
        <p class="role">${esc(p.role)}</p>
        ${creds}
        <p>${esc(p.text)}</p>
      </article>`;
    }).join('');
  };

  const renderMedia = () => {
    const host = $('#media-grid');
    if (!host) return;
    host.innerHTML = MEDIA_SLOTS.map((slot) => {
      const cap = slot.caption[L()] || slot.caption.es || '';
      const typeLabel = slot.type === 'video' ? t('mediaVideo') : t('mediaPhoto');
      const hasSrc = Boolean(slot.src && String(slot.src).trim());
      let frame = '';
      if (hasSrc && slot.type === 'image') {
        frame = `<img class="media-fill" src="${esc(slot.src)}" alt="${esc(cap)}" loading="lazy" width="800" height="500">`;
      } else if (hasSrc && slot.type === 'video') {
        const poster = slot.poster ? ` poster="${esc(slot.poster)}"` : '';
        frame = `<video class="media-fill" controls preload="metadata"${poster}><source src="${esc(slot.src)}"></video>`;
      } else {
        frame = `<div class="media-placeholder" aria-hidden="true">
          <span class="media-kind">${esc(typeLabel)}</span>
          <span class="media-pending">${esc(t('mediaEmpty'))}</span>
        </div>`;
      }
      return `<figure class="media-slot is-${slot.type}${hasSrc ? ' is-filled' : ' is-empty'}" data-slot="${esc(slot.id)}">
        <div class="media-frame">${frame}</div>
        <figcaption><span class="media-cap">${esc(cap)}</span></figcaption>
      </figure>`;
    }).join('');
  };

  const renderLinks = () => {
    $('#link-cards').innerHTML = T[L()].links.map((lnk) => {
      const disabled = lnk.needsUrl && !lnk.href;
      const href = disabled ? '#' : lnk.href;
      const extra = lnk.external && !disabled ? ' target="_blank" rel="noopener noreferrer"' : '';
      const note = disabled ? (t('linkSoon') || '') : '';
      return `<a class="link-card${disabled ? ' is-disabled' : ''}" href="${href}"${extra}>
        <h3>${lnk.title}${note}</h3>
        <p>${lnk.text}</p>
      </a>`;
    }).join('');
  };

  const renderAll = () => {
    renderText();
    renderNav();
    renderModules();
    renderAudiences();
    renderTimeline();
    renderTeam();
    renderMedia();
    renderLinks();
  };

  /* ---------- motion (preloader + cinematic hero) ---------- */
  const hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Wrap each word of the heading so it can be staggered in. Re-run after a language switch.
  function splitWords(el) {
    if (!el) return [];
    const text = el.textContent.trim();
    el.innerHTML = text.split(/\s+/).map((w) => `<span class="word">${esc(w)}</span>`).join(' ');
    return Array.from(el.querySelectorAll('.word'));
  }

  function revealHero(immediate) {
    const heading = $('#heroHeading');
    const words = splitWords(heading);
    if (!hasGsap || reduceMotion || immediate) {
      words.forEach((w) => { w.style.opacity = '1'; });
      ['.hero__tag', '.hero__sub', '.hero__cta', '.hero__note', '.hero__scroll-indicator'].forEach((s) => {
        const el = document.querySelector(s);
        if (el) el.style.opacity = '1';
      });
      return;
    }
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.hero__tag', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.25)
      .fromTo(words, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.05 }, 0.45)
      .fromTo('.hero__sub', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, 1.05)
      .fromTo('.hero__cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 1.25)
      .fromTo('.hero__note', { opacity: 0 }, { opacity: 1, duration: 0.8 }, 1.45)
      .fromTo('.hero__scroll-indicator', { opacity: 0 }, { opacity: 1, duration: 1 }, 1.6);
  }

  function initHeroScroll() {
    if (!hasGsap || reduceMotion) return;
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    ScrollTrigger.create({
      trigger: '.hero',
      start: 'top top',
      end: 'bottom bottom',
      pin: '.hero__pin',
      pinSpacing: false,
    });

    // The video slowly pushes in and the overlay deepens as the hero scrolls away.
    gsap.to('.hero__video', {
      scale: 1.12,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom bottom', scrub: true },
    });

    gsap.fromTo('.hero__overlay',
      { opacity: 1 },
      {
        opacity: 1,
        background: 'linear-gradient(to bottom, rgba(20,17,13,0.78) 0%, rgba(20,17,13,0.62) 40%, rgba(20,17,13,0.62) 60%, rgba(20,17,13,0.96) 100%)',
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: '60% bottom', scrub: true },
      });

    gsap.fromTo('.hero__content', { y: 0, opacity: 1, scale: 1 }, {
      y: -120,
      opacity: 0,
      scale: 0.94,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: '5% top', end: '35% top', scrub: true },
    });

    gsap.to('.hero__scroll-indicator', {
      opacity: 0,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: '2% top', end: '10% top', scrub: true },
    });

    // Header theme follows whatever band is directly beneath it (see syncHeadTheme below).

    // Sections ease in as they arrive.
    gsap.utils.toArray('.reveal-up').forEach((el, i) => {
      gsap.fromTo(el, { y: 36, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: (i % 2) * 0.12,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });

    gsap.utils.toArray('main .section h2').forEach((h) => {
      gsap.fromTo(h, { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: h, start: 'top 90%', once: true },
      });
    });

    // Section eyebrows: the hairline draws in like the preloader bar.
    gsap.utils.toArray('.sec-eyebrow').forEach((eb) => {
      const line = eb.querySelector('.sec-line');
      const tl = gsap.timeline({ scrollTrigger: { trigger: eb, start: 'top 92%', once: true } });
      tl.fromTo(eb, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0);
      if (line) tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'power3.out' }, 0.1);
    });

    // Lists and grids: children arrive one after another, same curve as the hero words.
    gsap.utils.toArray('[data-stagger]').forEach((box) => {
      const items = Array.from(box.children);
      if (!items.length) return;
      gsap.fromTo(items, { y: 28, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.85, ease: 'power3.out', stagger: 0.09,
        scrollTrigger: { trigger: box, start: 'top 86%', once: true },
      });
    });

    // Photo / video bands: the background drifts slowly, like the hero video pushing in.
    gsap.utils.toArray('.section__bg').forEach((bg) => {
      gsap.fromTo(bg, { yPercent: -8 }, {
        yPercent: 8, ease: 'none',
        scrollTrigger: { trigger: bg.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    });

    // Smooth in-page navigation, offset for the fixed header.
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        gsap.to(window, { scrollTo: { y: target, offsetY: id === '#top' ? 0 : 72 }, duration: 1.1, ease: 'power3.inOut' });
      });
    });
  }

  // Section 01: muted looping B-roll — play only while visible (no voiceover).
  function initBandVideos() {
    document.querySelectorAll('.section__video').forEach((video) => {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) video.play().catch(() => {});
          else video.pause();
        });
      }, { threshold: 0.2 });
      io.observe(video.closest('.section') || video);
    });
  }

  function initPreloader(onComplete) {
    const pre = $('#preloader');
    const bar = $('#preloaderBar');
    const pct = $('#preloaderPct');
    if (!pre || !hasGsap || reduceMotion) {
      document.body.classList.remove('is-loading');
      if (pre) pre.remove();
      onComplete();
      return;
    }

    let loaded = 0;
    let total = 0;
    let shown = 0;
    let target = 0;
    let raf = null;
    const mark = () => { loaded = Math.min(loaded + 1, total); target = Math.round((loaded / total) * 100); };

    const video = $('#heroVideo');
    if (video) {
      total++;
      if (video.readyState >= 3) mark();
      else {
        video.addEventListener('canplay', mark, { once: true });
        setTimeout(() => { if (loaded < total) mark(); }, 6000);
      }
    }
    if (document.fonts && document.fonts.ready) { total++; document.fonts.ready.then(mark); }
    const poster = new Image();
    total++;
    poster.onload = mark; poster.onerror = mark;
    poster.src = 'assets/hero-poster.jpg';
    if (total === 0) { total = 1; mark(); }

    const minShow = 900;
    const started = performance.now();
    const maxWait = setTimeout(() => { loaded = total; target = 100; }, 9000);

    function tick() {
      shown += (target - shown) * 0.14;
      const r = Math.round(shown);
      pct.textContent = String(r);
      bar.style.width = `${r}%`;
      if (r >= 100 && target >= 100 && performance.now() - started > minShow) {
        cancelAnimationFrame(raf);
        pct.textContent = '100';
        bar.style.width = '100%';
        setTimeout(reveal, 350);
        return;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    function reveal() {
      clearTimeout(maxWait);
      document.body.classList.remove('is-loading');
      if (video) video.play().catch(() => {});
      gsap.timeline({ onComplete: () => { pre.remove(); onComplete(); } })
        .to('.preloader__counter', { y: -20, opacity: 0, duration: 0.4, ease: 'power2.in' }, 0)
        .to('.preloader__bar-wrap', { scaleX: 0, opacity: 0, duration: 0.4, ease: 'power2.in' }, 0.1)
        .to('.preloader__logo', { y: -20, opacity: 0, duration: 0.4, ease: 'power2.in' }, 0.15)
        .to(pre, { yPercent: -100, duration: 0.85, ease: 'power3.inOut' }, 0.4)
        .add(() => revealHero(false), 0.75);
    }
  }

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      lang = btn.dataset.lang;
      try { localStorage.setItem(STORE_LANG, lang); } catch (e) { /* ignore */ }
      renderAll();
      // The heading was re-rendered as plain text; show it without replaying the intro.
      revealHero(true);
      // Replay section 01 in the new language if it is (or was) in view.
      runTypewriter(T[L()].whatBody, true);
    });
  });

  /* ---------- header theme: light text over dark bands, ink over light ones ---------- */
  const head = $('.site-head');
  const DARK_ZONES = '.hero, .section--dark, .site-foot';
  function syncHeadTheme() {
    if (!head) return;
    const probe = document.elementFromPoint(24, head.offsetHeight + 8);
    head.classList.toggle('is-over-hero', Boolean(probe && probe.closest(DARK_ZONES)));
  }
  let headTicking = false;
  function onScroll() {
    if (headTicking) return;
    headTicking = true;
    requestAnimationFrame(() => { syncHeadTheme(); headTicking = false; });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { syncHeadTheme(); onScroll(); });
  window.addEventListener('load', () => { syncHeadTheme(); onScroll(); });
  syncHeadTheme();

  renderAll();
  initPreloader(() => {
    initHeroScroll();
    initBandVideos();
    initWhatTypewriter();
    if (hasGsap && !reduceMotion) ScrollTrigger.refresh();
    syncHeadTheme();
  });
  if (!hasGsap || reduceMotion) {
    revealHero(true);
    initBandVideos();
    initWhatTypewriter();
  }
})();