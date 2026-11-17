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
      },
    },
    {
      id: 'app-capturas',
      type: 'image',
      src: '',
      caption: {
        es: 'Capturas de la app educativa (sin datos personales).',
        en: 'Screenshots of the educational app (no personal data).',
      },
    },
    {
      id: 'taller',
      type: 'image',
      src: '',
      caption: {
        es: 'Taller o actividad de divulgación con el Centro.',
        en: 'Outreach activity or workshop with the Center.',
      },
    },
    {
      id: 'alimentos',
      type: 'image',
      src: '',
      caption: {
        es: 'Alimentos y prácticas locales (ejemplo para los módulos).',
        en: 'Local foods and practices (example for the modules).',
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
      },
    },
  ];

  const T = {
    es: {
      brandTitle: 'Nutrición en RA',
      nav: [
        ['#que-es', 'El proyecto'],
        ['#participar', 'Participar'],
        ['#centro', 'Centro Mazahua'],
        ['#etapa', 'Etapa 1'],
        ['#galeria', 'Fotos y videos'],
        ['#futuro', 'Seguimiento'],
      ],
      heroEyebrow: 'Ciencia comunitaria · Villa Victoria, Edomex',
      heroH1: 'Divulgando la ciencia de la alimentación con la comunidad',
      heroLede: 'Una app educativa en realidad aumentada y conversaciones voluntarias con personas de la zona mazahua ayudan a explicar —con alimentos y prácticas locales— cómo la nutrición cotidiana se relaciona con la salud. No es un servicio médico ni un diagnóstico.',
      ctaParticipate: 'Cómo participar',
      ctaCenter: 'Para el Centro Mazahua',
      factWhereLbl: 'Dónde',
      factWhere: 'Villa Victoria y comunidades vinculadas al centro mazahua de la región',
      factProgramLbl: 'Financiamiento',
      factProgram: 'SECIHTI · Divulgación Comunitaria 2025 (Pp F003 / F027)',
      factStageLbl: 'Etapa en curso',
      factStage: 'Etapa 1: jul 2026 – jun 2027',
      asideLabel: 'Tres módulos en la app',
      modules: [
        { t: 'Alimentación diaria', d: 'Maíz, frijol, verduras y hábitos del hogar con explicaciones visuales.' },
        { t: 'Glucosa y energía', d: 'Cómo los alimentos afectan la energía del cuerpo, en lenguaje sencillo.' },
        { t: 'Movimiento', d: 'Actividad física cotidiana como parte del cuidado de la salud.' },
      ],
      whatTitle: '¿De qué se trata?',
      whatBody: `<p>El proyecto <strong>Nutrición en Realidad Aumentada: Divulgando la Ciencia para Prevenir Diabetes en Villa Victoria</strong> (clave <strong>DIVULGACION-2025-1352</strong>) adapta contenidos de nutrición y prevención a la cultura y la lengua de la comunidad.</p>
<p>Combina <strong>revisión de evidencia</strong>, <strong>entrevistas voluntarias</strong> con adultos y <strong>pruebas de la app</strong> con niñas y niños de 8 a 14 años (con permiso de su tutor). La información sirve para mejorar materiales educativos <strong>de acceso abierto</strong>, sin fines comerciales.</p>
<p>La app <strong>enseña</strong>; no dice si alguien tiene diabetes ni sustituye la atención de salud.</p>`,
      audTitle: 'Información según quién consulta',
      audIntro: 'Esta página es pública. Resume el propósito del proyecto sin datos personales de participantes.',
      audiences: [
        { accent: '#2f4b8f', title: 'Público general', text: 'Conoce qué hacemos, por qué en Villa Victoria y cómo se respetan las decisiones de la comunidad.' },
        { accent: '#1d7d72', title: 'Personas interesadas en participar', text: 'Entrevistas y uso de la app son voluntarios. Puede saltarse cualquier pregunta o dejar de participar.' },
        { accent: '#c4841a', title: 'Centro Mazahua', text: 'Pedimos revisión de volantes y difusión. Devolvemos un resumen útil y reconocemos a la comunidad en los materiales.' },
        { accent: '#3b3a42', title: 'SECIHTI y posibles financiadores', text: 'Etapa 1 con productos verificables: diagnóstico comunitario, app beta y materiales para ampliar etapas futuras.' },
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
        { when: '1 Jul 2027', what: 'Límite de informes técnicos y financieros de la etapa 1.' },
      ],
      sciTitle: 'Base científica y ética',
      sciBody: `<p>Los guiones parten de literatura sobre nutrición, diabetes tipo 2, alimentación mazahua y educación digital. Lo que no se confirme en comunidad se presenta de forma genérica o se omite.</p>
<p>Principios: consentimiento, reciprocidad con el centro, materiales bilingües cuando sea posible, y evaluación formativa (antes/después) de los módulos sin fines clínicos.</p>`,
      teamTitle: 'Quién trabaja en el proyecto',
      teamIntro: 'Roles principales en la etapa 1. La lista puede ampliarse con colaboradores locales.',
      team: [
        { name: 'Dr. Vicente Estrada González', role: 'Responsable técnico', text: 'Diseño científico, entrevistas comunitarias y coordinación general.' },
        { name: 'Jeffrey Vadala', role: 'Desarrollo de la app', text: 'Construcción técnica de la aplicación educativa en dispositivos móviles.' },
        { name: 'Inhala / Mallinalli', role: 'Articulación local', text: 'Espacio, dinámica comunitaria y apoyo en Villa Victoria.' },
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
        { href: PILOT_CALENDAR_URL, title: 'Calendario del piloto (equipo)', text: 'Herramienta interna para coordinar fechas entre investigadorxs y colaboradores.', external: true, needsUrl: true },
      ],
      footLegal: 'Financiado por la <strong>SECIHTI</strong> dentro de la convocatoria de Divulgación Comunitaria de la Ciencia y las Humanidades 2025. Responsable técnico: <strong>Dr. Vicente Estrada González</strong>.',
      footNote: 'Sitio informativo. No solicita datos personales. Actualizado conforme avanza la etapa 1.',
    },
    en: {
      brandTitle: 'Nutrition in AR',
      nav: [
        ['#que-es', 'Project'],
        ['#participar', 'Take part'],
        ['#centro', 'Mazahua Center'],
        ['#etapa', 'Stage 1'],
        ['#galeria', 'Photos & videos'],
        ['#futuro', 'Next stages'],
      ],
      heroEyebrow: 'Community science · Villa Victoria, Mexico State',
      heroH1: 'Sharing food and health science with the community',
      heroLede: 'An educational augmented-reality app and voluntary conversations with people in the Mazahua area help explain —using local foods and practices— how everyday nutrition relates to health. This is not medical care or a diagnosis.',
      ctaParticipate: 'How to participate',
      ctaCenter: 'For the Mazahua Center',
      factWhereLbl: 'Where',
      factWhere: 'Villa Victoria and communities linked to the regional Mazahua center',
      factProgramLbl: 'Funder',
      factProgram: 'SECIHTI · Community Outreach for Science & Humanities 2025 (Pp F003 / F027)',
      factStageLbl: 'Current stage',
      factStage: 'Stage 1: Jul 2026 – Jun 2027',
      asideLabel: 'Three modules in the app',
      modules: [
        { t: 'Everyday food', d: 'Corn, beans, vegetables and home habits with visual explanations.' },
        { t: 'Glucose and energy', d: 'How food affects body energy, in plain language.' },
        { t: 'Movement', d: 'Everyday physical activity as part of caring for health.' },
      ],
      whatTitle: 'What is this?',
      whatBody: `<p>The project <strong>Nutrition in Augmented Reality: Divulging Science to Prevent Diabetes in Villa Victoria</strong> (ID <strong>DIVULGACION-2025-1352</strong>) adapts nutrition and prevention content to the community’s culture and language.</p>
<p>It combines <strong>evidence review</strong>, <strong>voluntary interviews</strong> with adults, and <strong>app trials</strong> with children aged 8–14 (with a guardian’s permission). Information is used to improve <strong>open-access</strong> educational materials, with no commercial purpose.</p>
<p>The app <strong>teaches</strong>; it does not tell users whether they have diabetes or replace health care.</p>`,
      audTitle: 'Information by audience',
      audIntro: 'This page is public. It summarises the purpose of the project without participants’ personal data.',
      audiences: [
        { accent: '#2f4b8f', title: 'General public', text: 'Learn what we do, why Villa Victoria, and how community decisions are respected.' },
        { accent: '#1d7d72', title: 'Potential participants', text: 'Interviews and app use are voluntary. You may skip any question or stop at any time.' },
        { accent: '#c4841a', title: 'Mazahua Center', text: 'We ask for review of flyers and outreach. We return a useful summary and credit the community in materials.' },
        { accent: '#3b3a42', title: 'SECIHTI & future funders', text: 'Stage 1 with verifiable outputs: community assessment, beta app, and materials to scale later stages.' },
      ],
      partTitle: 'How to take part',
      partAdultsTitle: 'Conversations with adults',
      partAdults: `<p>A team member interviews <strong>volunteers</strong> (45–60 min) about food, habits and community context. A Mazahua–Spanish interpreter is available if preferred.</p>
<ul><li>Not a mandatory survey and not tied to social programmes.</li><li>Informed consent; questions may be skipped.</li><li>Names are optional on the registration form.</li></ul>`,
      partKidsTitle: 'Children and the app',
      partKids: `<p>In small groups, children aged <strong>8–14</strong> try the app on project phones, with a guardian’s permission.</p>
<ul><li>Short AR modules with before/after questions.</li><li>No medical result is delivered.</li><li>A local space and the technical team support the session.</li></ul>`,
      partRights: '<strong>Your rights:</strong> participation is a choice; you may withdraw at any time; information is used only to improve this science outreach project.',
      centerTitle: 'Working with the Mazahua Center',
      centerBody: `<p>Before field work we contact the center to <strong>present the project</strong> and ask them to review <strong>flyers or other materials</strong> inviting voluntary participation.</p>
<p>The Center <strong>does not choose field dates</strong>; it may or may not allow outreach in its space. We agree to return a <strong>useful summary</strong> for the community and recognition in educational materials.</p>
<p>The exact receiving body (Mazahua leadership, CEDIPIEM or another community institution) is confirmed on site, following the project protocol.</p>`,
      stageTitle: 'Stage 1 (2026–2027)',
      stageBody: `<p>The Technical Secretariat set this stage’s calendar. The Villa Victoria pilot is planned for <strong>8–26 January 2027</strong> (exact days agreed with the team).</p>`,
      timeline: [
        { when: 'Jul 2026', what: 'Start of stage 1; scientific and community content work.' },
        { when: 'Nov–Dec 2026', what: 'App structure handoff, technical build, contact with the Mazahua Center.' },
        { when: 'Jan 2027', what: 'Pilot in Villa Victoria: interviews and app sessions.' },
        { when: 'Jun 2027', what: 'Formal end of stage 1; app polish after the pilot.' },
        { when: '1 Jul 2027', what: 'Deadline for stage 1 technical and financial reports.' },
      ],
      sciTitle: 'Science and ethics',
      sciBody: `<p>Scripts draw on literature on nutrition, type 2 diabetes, Mazahua foodways and digital education. What is not confirmed in the community is kept generic or omitted.</p>
<p>Principles: consent, reciprocity with the center, bilingual materials when possible, and formative (before/after) evaluation of modules without clinical aims.</p>`,
      teamTitle: 'Project team',
      teamIntro: 'Core roles in stage 1. Local collaborators may be added.',
      team: [
        { name: 'Dr. Vicente Estrada González', role: 'Principal investigator', text: 'Scientific design, community interviews and overall coordination.' },
        { name: 'Jeffrey Vadala', role: 'App development', text: 'Technical build of the educational mobile application.' },
        { name: 'Inhala / Mallinalli', role: 'Local liaison', text: 'Space, community dynamics and support in Villa Victoria.' },
      ],
      mediaTitle: 'Photos and videos',
      mediaIntro: 'Reserved slots for project images and clips. Only material with consent and no personal data will be published.',
      mediaEmpty: 'Coming soon',
      mediaPhoto: 'Photo',
      mediaVideo: 'Video',
      fundTitle: 'For SECIHTI and future funding reviewers',
      fundBody: `<p><strong>ID:</strong> DIVULGACION-2025-1352. <strong>Call:</strong> Community Outreach for Science and Humanities 2025.</p>
<p><strong>Stage 1 outputs:</strong> literature review and gap analysis; community assessment (goal of 15 interviews); beta app with three AR modules; documented pilot; materials prepared for open outreach.</p>
<p>A possible <strong>stage 2</strong> would depend on official calls and reviews; this page does not announce budgets or commitments not notified by SECIHTI.</p>`,
      linksTitle: 'Useful links',
      linksIntro: 'Public resources related to the project.',
      links: [
        { href: 'https://www.conahcyt.mx/secihti', title: 'SECIHTI', text: 'Mexican Secretariat for Science, Humanities, Technology and Innovation.', external: true },
        { href: PILOT_CALENDAR_URL, title: 'Pilot calendar (team)', text: 'Internal tool to coordinate dates among researchers and collaborators.', external: true, needsUrl: true },
      ],
      footLegal: 'Funded by <strong>SECIHTI</strong> under the 2025 Community Outreach for Science and Humanities call. Principal investigator: <strong>Dr. Vicente Estrada González</strong>.',
      footNote: 'Informational site. Does not collect personal data. Updated as stage 1 progresses.',
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

  const detectLang = () => {
    try {
      const saved = localStorage.getItem(STORE_LANG);
      if (saved === 'es' || saved === 'en') return saved;
    } catch (e) { /* ignore */ }
    return (navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'es';
  };

  const renderText = () => {
    lang = detectLang();
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-t]').forEach((el) => {
      const k = el.dataset.t;
      const v = T[L()][k];
      if (typeof v === 'string') el.textContent = v;
    });
    document.querySelectorAll('[data-t-html]').forEach((el) => {
      const k = el.dataset.tHtml;
      el.innerHTML = T[L()][k];
    });
    document.querySelectorAll('[data-lang]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    document.title = lang === 'es'
      ? 'Nutrición en realidad aumentada · Villa Victoria'
      : 'Nutrition in augmented reality · Villa Victoria';
  };

  const renderNav = () => {
    const nav = $('#nav');
    nav.innerHTML = T[L()].nav.map(([href, label]) =>
      `<a href="${href}">${label}</a>`).join('');
  };

  const renderModules = () => {
    $('#modules').innerHTML = T[L()].modules.map((m) =>
      `<li><strong>${m.t}</strong>${m.d}</li>`).join('');
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
    $('#team').innerHTML = T[L()].team.map((p) => `
      <article>
        <h3>${p.name}</h3>
        <p class="role">${p.role}</p>
        <p>${p.text}</p>
      </article>`).join('');
  };

  const renderMedia = () => {
    const host = $('#media-grid');
    if (!host) return;
    host.innerHTML = MEDIA_SLOTS.map((slot) => {
      const cap = slot.caption[L()];
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
      const note = disabled
        ? (L() === 'es' ? ' (enlace del equipo cuando esté publicado)' : ' (team link when published)')
        : '';
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

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      lang = btn.dataset.lang;
      try { localStorage.setItem(STORE_LANG, lang); } catch (e) { /* ignore */ }
      renderAll();
    });
  });

  renderAll();
})();