/* ==========================================================================
   Tomás Mena — Portfolio Interactive Logic
   Storyline Schema: ON/OFF Mode, Parametric Canvas, Split Carousels,
   CV Asset Drawer, Project Spec Modal, Filters & Clipboard Copy
   ========================================================================== */

const PROJECT_SPECS = {
  priedemann: {
    eyebrow: '01 // DIGITAL TWIN & PRODUCT OWNERSHIP',
    title: 'Priedemann Digital Twin & Custom AEC Tools',
    meta: '2023–PRESENT  |  BERLIN, GERMANY  |  PRODUCT OWNER & SENIOR PM 3D',
    thesis: 'Bridging Agile software product ownership and high-complexity parametric façade engineering inside scalable Digital Twin environments.',
    problem: 'Complex commercial building envelopes suffer from fragmented CAD/BIM handoffs between engineering teams and custom software developers.',
    system: 'Defined computational design strategies, structured 3D Digital Twin data pipelines, and Agile development frameworks for proprietary parametric construction tools.',
    output: 'Scalable cross-functional automation workflows accelerating 3D façade construction modeling and collaborative engineering execution.',
    stack: ['Python', 'Rhino / Grasshopper', 'Digital Twin Data', 'Agile PO', 'BIM Automation']
  },
  kula: {
    eyebrow: '02 // BIM INTEROPERABILITY & PANELIZATION',
    title: 'Kula Tower, Belgrade',
    meta: 'SCHUECO INTERNATIONAL  |  BELGRADE  |  COMPUTATIONAL GEOMETRY',
    thesis: 'Automated Revit-to-Grasshopper coordinate interoperability and double-curved high-rise panelization rationalization.',
    problem: 'Double-curved tower geometry created thousands of non-planar façade panels exceeding manufacturing tolerances and breaking BIM coordination.',
    system: 'Built bidirectional Revit–Grasshopper coordinate bridges paired with custom geometric measurement and planarization rationalization algorithms.',
    output: 'Verified constructible panel geometry with automated deviation tracking directly feeding fabrication schedules.',
    stack: ['Rhino', 'Grasshopper', 'Revit', 'Python', 'Surface Rationalization']
  },
  cliphut: {
    eyebrow: '03 // DIGITAL PREFABRICATION & TIMBER JOINERY',
    title: 'ClipHut: Decentralized Parametric Building System',
    meta: 'TH-OWL / METSÄWOOD AWARD  |  NIEHEIM, GERMANY  |  1:1 PROTOTYPE',
    thesis: 'Open-source tool-less timber construction system driven by Karamba3D FEA limits, automated 84-sheet CNC nesting, and web configurator architecture.',
    problem: 'Conventional timber prefabrication relies on proprietary hardware, manual detailing, and centralized supply chains.',
    system: 'Engineered a parametric Grasshopper + Karamba3D structural simulation pipeline outputting automated 2D CNC nesting sheets and assembly manuals.',
    output: '0.59mm max displacement, 100% tool-less 1:1 physical prototype, 84 automated CNC sheets, and Metsäwood Open Source Wood Award recognition.',
    stack: ['Grasshopper', 'Karamba3D FEA', 'CNC Nesting', 'Web Configurator', 'Timber Joinery']
  },
  grid2: {
    eyebrow: '04 // MESH RESTRUCTURING & FABRICATION',
    title: 'Grid 2 Shell System — Schueco Welcome Forum',
    meta: 'SCHUECO INTERNATIONAL  |  BIELEFELD  |  PYTHON & RHINO',
    thesis: 'Custom Python pipeline transforming unstructured free-form meshes into fabrication-ready façade profiles and cut schedules.',
    problem: 'Free-form grid-shell geometries require exact node orientations, profile alignments, and unique angle cuts that are error-prone to model manually.',
    system: 'Developed a custom Python workflow to restructure unstructured meshes, place structural façade profiles, and compute fabrication cut angles.',
    output: 'Automated fabrication numbering and cut-angle data delivered directly to metal fabricators.',
    stack: ['Python', 'Rhino', 'Grasshopper', 'Mesh Topology', 'Fabrication Automation']
  },
  terrarium: {
    eyebrow: '05 // LIVE IOT DIGITAL TWIN',
    title: 'Winter Garden — Terrarium',
    meta: 'UMARTS / UMEÅ UNIVERSITY  |  SWEDEN  |  IOT + GENERATIVE DESIGN',
    thesis: 'Generative architecture connected to a live IoT sensor-to-Digital Twin WebSocket pipeline streaming real-time O₂ telemetry into Grasshopper.',
    problem: 'Static architectural models fail to respond to live ecological and microclimatic performance data.',
    system: 'Built a custom server/WebSocket pipeline streaming live O₂ sensor readings into Grasshopper to drive real-time digital twin visualization and fabrication.',
    output: 'Exhibited at UmArts (Umeå), demonstrating closed-loop physical-to-digital environmental sensing.',
    stack: ['Grasshopper', 'WebSockets / IoT', 'Digital Fabrication', 'Digital Twin', 'Data Viz']
  },
  rematerializing: {
    eyebrow: '06 // CIRCULAR DIGITAL TWINS',
    title: 'ReMaterializing Data — Circular Material Archives',
    meta: 'ÉCOLE SPÉCIALE D\'ARCHITECTURE  |  PARIS, NOV 2025  |  MASTER CLASS',
    thesis: 'Digitizing discarded building materials via 3D scanning into computational design assets for circular architecture.',
    problem: 'Reclaimed architectural materials are irregular and uncatalogued, preventing computational designers from integrating them into parametric assemblies.',
    system: 'Led a master-class pipeline converting 3D-scanned discarded matter into structured, queryable parametric assets for generative reuse.',
    output: 'Reusable circular-design Digital Twin workflow bridging physical material recovery with algorithmic aggregation.',
    stack: ['3D Scanning', 'Digital Twin', 'Circular Design', 'Grasshopper', 'Computational Assets']
  },
  liminal: {
    eyebrow: '07 // EXHIBITIONS & GIS FABRICATION',
    title: 'Liminal Phantoms & Trades of Cultural Capital',
    meta: 'TRIENNALE DI MILANO 2025  |  VENICE & FAVARA BIENNALE  |  LAB.PRO.FAB',
    thesis: 'Multi-scalar GIS mesh modeling, rationalization algorithms, and hybrid 3D printing / CNC sculpting exhibited internationally.',
    problem: 'Translating territorial GIS datasets and cultural narratives into tactile, high-resolution physical architectural artifacts.',
    system: 'Combined multi-scalar GIS mesh reconstruction, algorithmic rationalization, and hybrid CNC / additive fabrication workflows.',
    output: 'Exhibited at La Triennale di Milano (2025), Venice Biennale of Architecture (2021), and FAVARA Biennale (2021).',
    stack: ['GIS Mesh Modeling', 'Rationalization', 'CNC Sculpting', '3D Printing', 'Exhibition']
  },
  vilnius: {
    eyebrow: '08 // FORM-FINDING & FEA SCULPTING',
    title: 'Vilnius Concert Hall & Puercoespín',
    meta: 'COMPETITION & KUZO COLLABORATION  |  DYNAMIC RELAXATION & FEA',
    thesis: 'Dynamic Relaxation form-finding for mixed timber-metal acoustic envelopes paired with Karamba3D stress/displacement optimization.',
    problem: 'Large-span cultural envelopes and architectural-scale sculptures require simultaneous acoustic, daylight, and structural stress balance.',
    system: 'Implemented Dynamic Relaxation (DR) engines in Grasshopper alongside Karamba3D nodal displacement and stress heatmaps.',
    output: 'Structurally validated shell geometries and sculptural scaling rules ready for engineering development.',
    stack: ['Dynamic Relaxation', 'Karamba3D FEA', 'Grasshopper', 'Acoustic Envelopes']
  },
  ai_landscapes: {
    eyebrow: '09 // AI & DESIGN RESEARCH',
    title: 'Experimental Landscapes: AI & Future of Design',
    meta: 'UNIV. OF ARIZONA (APR 2025)  |  DIGITALFUTURES (JUL 2024)',
    thesis: 'Investigating multi-agent systems and generative AI workflows spanning planetary urban intelligence to molecular material logic.',
    problem: 'Emerging AI tools in architecture often remain disconnected from rigorous geometric, structural, and multi-scalar computational frameworks.',
    system: 'Presented research lectures and international workshops combining agent-based modeling, generative AI, and architectural computation.',
    output: 'Guest Speaker at University of Arizona Urban Futures Symposium (2025) and Workshop Instructor at DigitalFUTURES International (2024).',
    stack: ['Generative AI', 'Multi-Agent Systems', 'Research', 'Computational Pedagogy']
  },
  sonic_object: {
    eyebrow: 'THE ALT+ // SOUND & WEARABLE PRODUCT',
    title: 'Sonic Wearable Object',
    meta: 'THE ALT PLUS  |  PRODUCT DESIGN & SOUND RESEARCH  |  EXPERIENTIAL OBJECT',
    thesis: 'An experiential ring and sound product translating tactile gesture, wearable geometry, and acoustic resonance into an intimate physical-digital object.',
    problem: 'Everyday wearable tech prioritizes screens and notifications over tactile craft, sonic presence, and poetic spatial interaction.',
    system: 'Combines computational ring geometry, acoustic/sound design research, and material prototyping into a wearable sonic artifact.',
    output: 'Flagship product-research piece for The Alt Plus bridging industrial craft, sound art, and experiential design.',
    stack: ['Sound Design', 'Product Design', 'Computational Geometry', 'Wearable Craft', 'Interaction']
  },
  teaching: {
    eyebrow: 'THE ALT+ // INTERNATIONAL PEDAGOGY',
    title: 'Master Studios & Computational Teaching',
    meta: 'UMEÅ UNIV. (2022—PRESENT)  |  IAAC BARCELONA  |  ESA PARIS',
    thesis: 'Teaching collaborative computational workflows, data visualization, circular digital twins, and experimental design methodologies.',
    problem: 'Design education often separates computational scripting from material experimentation, ecology, and spatial storytelling.',
    system: 'Developed studio curricula and intensive master classes integrating Grasshopper, data visualization, 3D scanning, and collaborative workflows.',
    output: 'Ongoing Guest Lecturer at Umeå University Master in Architecture Studio, plus courses & master classes in Paris, Barcelona, and Arizona.',
    stack: ['Umeå University', 'IAAC Barcelona', 'ESA Paris', 'Computational Pedagogy', 'Data Visualization']
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initCvDrawer();
  initCarousels();
  initProjectModal();
  initCatalogFilters();
  initCopyEmail();
  initBackToTop();
  initParametricCanvas();
  initEchoCanvas();
});

/* 1. ON/OFF Mode Toggle (Dark Computational ↔ Swiss High-Contrast Blueprint) */
function initThemeToggle() {
  const btn = document.getElementById('modeToggle');
  if (!btn) return;
  const saved = localStorage.getItem('tm_theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
    btn.textContent = 'MODE: LIGHT';
  }
  btn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    localStorage.setItem('tm_theme', isLight ? 'light' : 'dark');
    btn.textContent = isLight ? 'MODE: LIGHT' : 'ON / OFF';
  });
}

/* 2. Mobile Navigation Toggle */
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('siteNav');
  if (!btn || !nav) return;

  const host = btn.closest('.top-nav, .site-header');
  const setOpen = open => {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    if (host) host.classList.toggle('menu-open', open);
  };

  btn.addEventListener('click', () => {
    setOpen(!nav.classList.contains('open'));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) setOpen(false);
  });
}

/* 3. Slide-Over CV & Portfolio Asset Drawer */
function initCvDrawer() {
  const triggers = document.querySelectorAll('[data-open-cv]');
  const drawer = document.getElementById('cvDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const closeBtn = document.getElementById('closeCvDrawer');
  if (!drawer || !backdrop) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    backdrop.classList.add('open');
  };
  const closeDrawer = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
  };

  triggers.forEach(el => el.addEventListener('click', openDrawer));
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });
}

/* 4. Split-Column Carousels (Mirrors TheNOTHINGShop's Dual Showcase Carousels) */
function initCarousels() {
  document.querySelectorAll('[data-carousel]').forEach(section => {
    const track = section.querySelector('.carousel-track');
    const prevBtn = section.querySelector('[data-prev]');
    const nextBtn = section.querySelector('[data-next]');
    const counter = section.querySelector('[data-counter]');
    if (!track) return;

    const cards = Array.from(track.querySelectorAll('.project-card'));
    const total = cards.length;

    const updateCounter = () => {
      if (!counter || total === 0) return;
      const cardW = cards[0].offsetWidth + 18;
      const idx = Math.min(total, Math.max(1, Math.round(track.scrollLeft / cardW) + 1));
      counter.textContent = `${String(idx).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    };

    const scrollByCard = dir => {
      const cardW = cards[0] ? cards[0].offsetWidth + 18 : 320;
      track.scrollBy({ left: dir * cardW, behavior: 'smooth' });
    };

    if (prevBtn) prevBtn.addEventListener('click', () => scrollByCard(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => scrollByCard(1));
    track.addEventListener('scroll', updateCounter, { passive: true });
    updateCounter();
  });
}

/* 5. Project Spec Modal (Mirrors TheNOTHINGShop's Product Detail Spec View) */
function initProjectModal() {
  const modal = document.getElementById('specModal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('closeSpecModal');
  if (!modal || !backdrop) return;

  const openModal = key => {
    const data = PROJECT_SPECS[key];
    if (!data) return;
    modal.querySelector('[data-spec-eyebrow]').textContent = data.eyebrow;
    modal.querySelector('[data-spec-title]').textContent = data.title;
    modal.querySelector('[data-spec-meta]').textContent = data.meta;
    modal.querySelector('[data-spec-thesis]').textContent = data.thesis;
    modal.querySelector('[data-spec-problem]').textContent = data.problem;
    modal.querySelector('[data-spec-system]').textContent = data.system;
    modal.querySelector('[data-spec-output]').textContent = data.output;
    const stackWrap = modal.querySelector('[data-spec-stack]');
    stackWrap.innerHTML = data.stack.map(t => `<span class="tag-chip">${t}</span>`).join('');

    modal.classList.add('open');
    backdrop.classList.add('open');
  };

  const closeModal = () => {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
  };

  document.querySelectorAll('[data-inspect]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.getAttribute('data-inspect')));
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

/* 6. Catalog Filters on projects.html */
function initCatalogFilters() {
  const buttons = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-category]');
  if (!buttons.length || !cards.length) return;

  const applyFilter = filter => {
    buttons.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === filter));
    cards.forEach(card => {
      const cats = (card.getAttribute('data-category') || '').split(' ');
      const show = filter === 'all' || cats.includes(filter);
      card.classList.toggle('hidden', !show);
    });
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.getAttribute('data-filter')));
  });

  const urlFilter = new URLSearchParams(window.location.search).get('filter');
  if (urlFilter) applyFilter(urlFilter);
}

/* 7. Direct Mail Copy-to-Clipboard */
function initCopyEmail() {
  document.querySelectorAll('[data-copy-email]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const orig = btn.textContent;
      try {
        await navigator.clipboard.writeText('tomasmena@gmail.com');
        btn.textContent = 'COPIED // TOMASMENA@GMAIL.COM';
        setTimeout(() => { btn.textContent = orig; }, 2200);
      } catch {
        window.location.href = 'mailto:tomasmena@gmail.com';
      }
    });
  });
}

/* 8. Floating Back-to-Top Button */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 420);
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* 9. Interactive Dynamic Relaxation Parametric Mesh Canvas (Hero Left Visual) */
function initParametricCanvas() {
  const canvas = document.getElementById('parametricCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = 0, height = 0, t = 0;
  let pointer = { x: 0.5, y: 0.5, active: false };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  resize();
  window.addEventListener('resize', resize);

  const interactionHost = canvas.closest('.hero') || canvas;
  interactionHost.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    pointer.x = (e.clientX - r.left) / r.width;
    pointer.y = (e.clientY - r.top) / r.height;
    pointer.active = true;
  });
  interactionHost.addEventListener('mouseleave', () => { pointer.active = false; });

  const cols = 18;
  const rows = 13;

  const render = () => {
    t += 0.015;
    const isLight = document.body.classList.contains('light-mode');
    ctx.clearRect(0, 0, width, height);

    const padX = width * 0.1;
    const padY = height * 0.14;
    const gridW = width - padX * 2;
    const gridH = height - padY * 2;

    const pts = [];
    for (let j = 0; j < rows; j++) {
      const row = [];
      for (let i = 0; i < cols; i++) {
        const u = i / (cols - 1);
        const v = j / (rows - 1);
        const dx = u - (pointer.active ? pointer.x : 0.5);
        const dy = v - (pointer.active ? pointer.y : 0.5);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const wave = Math.sin(u * 5.2 + t) * Math.cos(v * 4.2 - t * 0.8) * 14;
        const pull = Math.exp(-dist * dist * 7.5) * (pointer.active ? -34 : -20);
        const x = padX + u * gridW + Math.sin(v * Math.PI) * (u - 0.5) * 12;
        const y = padY + v * gridH + wave + pull;
        row.push({ x, y, stress: Math.min(1, Math.abs(pull) / 28) });
      }
      pts.push(row);
    }

    ctx.lineWidth = 1;
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const p = pts[j][i];
        if (i < cols - 1) {
          const right = pts[j][i + 1];
          ctx.strokeStyle = p.stress > 0.45
            ? (isLight ? 'rgba(217,72,0,0.65)' : 'rgba(255,85,0,0.65)')
            : (isLight ? 'rgba(10,10,10,0.22)' : 'rgba(237,237,237,0.22)');
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(right.x, right.y);
          ctx.stroke();
        }
        if (j < rows - 1) {
          const down = pts[j + 1][i];
          ctx.strokeStyle = p.stress > 0.35
            ? (isLight ? 'rgba(0,122,138,0.65)' : 'rgba(0,229,255,0.55)')
            : (isLight ? 'rgba(10,10,10,0.18)' : 'rgba(237,237,237,0.16)');
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(down.x, down.y);
          ctx.stroke();
        }
      }
    }

    // Highlight key structural nodes
    for (let j = 0; j < rows; j += 3) {
      for (let i = 0; i < cols; i += 3) {
        const p = pts[j][i];
        ctx.fillStyle = p.stress > 0.4
          ? (isLight ? '#d94800' : '#ff5500')
          : (isLight ? '#007a8a' : '#00e5ff');
        ctx.fillRect(p.x - 1.5, p.y - 1.5, 3, 3);
      }
    }

    requestAnimationFrame(render);
  };
  render();
}

/* 10. Ambient Oscilloscope / Glitch Resonance Canvas (The Alt Plus Hero Visual) */
function initEchoCanvas() {
  const canvas = document.getElementById('echoCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = 0, height = 0, t = 0, frame = 0;
  let pointer = { x: 0.5, y: 0.5, active: false };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  resize();
  window.addEventListener('resize', resize);

  const interactionHost = canvas.closest('.hero') || canvas;
  interactionHost.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    pointer.x = (e.clientX - r.left) / r.width;
    pointer.y = (e.clientY - r.top) / r.height;
    pointer.active = true;
  });
  interactionHost.addEventListener('mouseleave', () => { pointer.active = false; });

  const rings = 9;
  const segments = 96;

  const render = () => {
    t += 0.022;
    frame++;
    ctx.clearRect(0, 0, width, height);

    const cx = width * (pointer.active ? 0.5 + (pointer.x - 0.5) * 0.16 : 0.5);
    const cy = height * (pointer.active ? 0.5 + (pointer.y - 0.5) * 0.16 : 0.5);
    const maxR = Math.min(width, height) * 0.42;

    // Subtle Bauhaus axis grid
    ctx.strokeStyle = 'rgba(231, 227, 217, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, cy); ctx.lineTo(width, cy);
    ctx.moveTo(cx, 0); ctx.lineTo(cx, height);
    ctx.stroke();

    // Horizontal ambient audio waveform (Aphex / Warp oscilloscope)
    ctx.beginPath();
    const amp = pointer.active ? 18 + Math.abs(pointer.y - 0.5) * 32 : 14;
    const freq = pointer.active ? 0.03 + pointer.x * 0.05 : 0.04;
    for (let x = 0; x <= width; x += 3) {
      const env = Math.sin((x / width) * Math.PI);
      const y = cy + (Math.sin(x * freq + t * 2.2) * Math.cos(x * 0.015 - t) * amp * env);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = 'rgba(242, 242, 242, 0.72)';
    ctx.lineWidth = 1.25;
    ctx.stroke();

    // Concentric acoustic harmonics
    for (let r = 1; r <= rings; r++) {
      const ratio = r / rings;
      const baseRadius = maxR * ratio;
      ctx.beginPath();
      for (let s = 0; s <= segments; s++) {
        const angle = (s / segments) * Math.PI * 2;
        const mod = Math.sin(angle * 3 + t * 1.6 - r * 0.5) * (3 + ratio * 6)
                  + Math.cos(angle * 7 - t * 1.1 + r * 0.4) * (1.8 * ratio);
        const rad = baseRadius + mod;
        const x = cx + Math.cos(angle) * rad;
        const y = cy + Math.sin(angle) * rad;
        if (s === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();

      if (r === 4 || r === 8) {
        ctx.strokeStyle = 'rgba(225, 37, 27, 0.8)';
        ctx.lineWidth = 1.3;
      } else {
        ctx.strokeStyle = `rgba(242, 242, 242, ${0.1 + ratio * 0.16})`;
        ctx.lineWidth = 0.9;
      }
      ctx.stroke();
    }

    // Periodic micro-glitch horizontal tape-tear slice
    if (frame % 78 < 4) {
      const gy = Math.random() * height;
      const gh = 2 + Math.random() * 6;
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(225, 37, 27, 0.48)' : 'rgba(255, 255, 255, 0.22)';
      ctx.fillRect(0, gy, width, gh);
    }

    requestAnimationFrame(render);
  };
  render();
}
