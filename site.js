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
      scrollHint: 'Desliza',
      factWhereLbl: 'Dónde',
      factWhere: 'Villa Victoria y comunidades vinculadas al centro mazahua de la región',
      factProgramLbl: 'Financiamiento',
      factProgram: 'SECIHTI · Divulgación Comunitaria 2025 (Pp F003 / F027)',
      factStageLbl: 'Etapa en curso',
      factStage: 'Etapa 1: jul 2026 – jun 2027',
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
      whatTitle: '¿De qué se trata?',
      whatBody: `<p>El proyecto <strong>Nutrición en Realidad Aumentada: Divulgando la Ciencia para Prevenir Diabetes en Villa Victoria</strong> (clave <strong>DIVULGACION-2025-1352</strong>) adapta contenidos de nutrición y prevención a la cultura y la lengua de la comunidad.</p>
<p>Combina <strong>revisión de evidencia</strong>, <strong>entrevistas voluntarias</strong> con adultos y <strong>pruebas de la app</strong> con niñas y niños de 8 a 14 años (con permiso de su tutor). La información sirve para mejorar materiales educativos <strong>de acceso abierto</strong>, sin fines comerciales.</p>
<p>La app <strong>enseña</strong>; no dice si alguien tiene diabetes ni sustituye la atención de salud.</p>`,
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
<p>Principios: consentimiento, reciprocidad con el centro, materiales bilingües cuando sea posible, y evaluación formativa (antes/después) de los módulos sin fines clínicos.</p>`,
      teamTitle: 'Quién trabaja en el proyecto',
      teamIntro: 'Roles principales en la etapa 1. La lista puede ampliarse con colaboradores locales.',
      team: [
        { name: 'Dr. Vicente Estrada González', initials: 'VE', role: 'Responsable técnico', text: 'Diseño científico, entrevistas comunitarias y coordinación general.' },
        { name: 'Jeffrey Vadala', initials: 'JV', role: 'Desarrollo de la app', text: 'Construcción técnica de la aplicación educativa en dispositivos móviles.' },
        { name: 'Inhala / Mallinalli', initials: 'M', role: 'Articulación local', text: 'Espacio, dinámica comunitaria y apoyo en Villa Victoria.' },
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
      scrollHint: 'Scroll',
      factWhereLbl: 'Where',
      factWhere: 'Villa Victoria and communities linked to the regional Mazahua center',
      factProgramLbl: 'Funder',
      factProgram: 'SECIHTI · Community Outreach for Science & Humanities 2025 (Pp F003 / F027)',
      factStageLbl: 'Current stage',
      factStage: 'Stage 1: Jul 2026 – Jun 2027',
      asideLabel: 'Three modules in the app',
      eyWhat: 'The project',
      eyAud: 'Who this is for',
      eyPart: 'Voluntary participation',
      eyCenter: 'Community',
      eyStage: 'Timeline',
      eySci: 'Method',
      eyTeam: 'Team',
      eyMedia: 'Gallery',
      eyFund: 'Next stages',
      eyLinks: 'Resources',
      backTop: 'Back to top',
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
        { accent: '#c4841a', title: 'General public', text: 'Learn what we do, why Villa Victoria, and how community decisions are respected.' },
        { accent: '#a4502f', title: 'Potential participants', text: 'Interviews and app use are voluntary. You may skip any question or stop at any time.' },
        { accent: '#6b7a3a', title: 'Mazahua Center', text: 'We ask for review of flyers and outreach. We return a useful summary and credit the community in materials.' },
        { accent: '#1f1b16', title: 'SECIHTI & future funders', text: 'Stage 1 with verifiable outputs: community assessment, beta app, and materials to scale later stages.' },
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
      ],
      sciTitle: 'Science and ethics',
      sciBody: `<p>Scripts draw on literature on nutrition, type 2 diabetes, Mazahua foodways and digital education. What is not confirmed in the community is kept generic or omitted.</p>
<p>Principles: consent, reciprocity with the center, bilingual materials when possible, and formative (before/after) evaluation of modules without clinical aims.</p>`,
      teamTitle: 'Project team',
      teamIntro: 'Core roles in stage 1. Local collaborators may be added.',
      team: [
        { name: 'Dr. Vicente Estrada González', initials: 'VE', role: 'Principal investigator', text: 'Scientific design, community interviews and overall coordination.' },
        { name: 'Jeffrey Vadala', initials: 'JV', role: 'App development', text: 'Technical build of the educational mobile application.' },
        { name: 'Inhala / Mallinalli', initials: 'M', role: 'Local liaison', text: 'Space, community dynamics and support in Villa Victoria.' },
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
    $('#team').innerHTML = T[L()].team.map((p) => `
      <article>
        <div class="avatar" aria-hidden="true">${esc(p.initials || '')}</div>
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
      ['.hero__tag', '.hero__sub', '.hero__cta', '.hero__scroll-indicator'].forEach((s) => {
        const el = document.querySelector(s);
        if (el) el.style.opacity = '1';
      });
      return;
    }
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.hero__tag', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.25)
      .fromTo(words, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.05 }, 0.45)
      .fromTo('.hero__sub', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, 1.0)
      .fromTo('.hero__cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 1.2)
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

    gsap.to('.hero__content', {
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

    // Header: transparent over the hero, solid afterwards.
    const head = $('.site-head');
    ScrollTrigger.create({
      trigger: '.hero',
      start: 'top top',
      end: 'bottom 80px',
      onLeave: () => head.classList.remove('is-over-hero'),
      onEnterBack: () => head.classList.add('is-over-hero'),
    });

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

    // Photo bands: the still drifts slowly, like the hero video pushing in.
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
    });
  });

  renderAll();
  initPreloader(() => {
    initHeroScroll();
    if (hasGsap && !reduceMotion) ScrollTrigger.refresh();
  });
  if (!hasGsap || reduceMotion) revealHero(true);
})();