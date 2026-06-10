/* ═══ KETCHIKAN EXPERIMENTAL INTERFACE ═══ */

const SIGNALS = {
  'creek-street': {
    title: 'Creek Street', tag: 'HISTORIC BOARDWALK',
    description: 'A boardwalk on stilts over Ketchikan Creek — once the famed red-light district until 1954. Now galleries, shops, and salmon runs beneath.',
    highlights: ['Dolly\'s House Museum', 'Summer salmon viewing', 'Married Man\'s Trail', 'Rainbird Records']
  },
  'totem-bight': {
    title: 'Totem Bight State Park', tag: 'STATE PARK',
    description: '33 acres of restored totem poles and a replica Tlingit clan house against the Tongass National Forest backdrop.',
    highlights: ['14 totem poles', 'Tlingit clan house tours', 'Shoreline rainforest trails', 'Free year-round admission']
  },
  'misty-fjords': {
    title: 'Misty Fjords National Monument', tag: 'WILDERNESS',
    description: '3,570 square miles of granite cliffs plunging 3,000 feet into the sea. Accessible by floatplane, boat, or kayak.',
    highlights: ['New Eddystone Rock', 'Rudyerd Bay waterfalls', 'Seals, otters, eagles, whales', 'Daily flightseeing tours']
  },
  'saxman': {
    title: 'Saxman Totem Park', tag: 'NATIVE HERITAGE',
    description: '25 totem poles in the City of Saxman — one of Alaska\'s largest collections with active carving traditions.',
    highlights: ['25 standing poles', 'Chief Johnson Totem Pole', 'Cape Fox Dancers', 'Master carver demonstrations']
  },
  'downtown': {
    title: 'Downtown Ketchikan', tag: 'NATIONAL LANDMARK',
    description: 'National Historic Landmark District — two harbors, four cruise berths, the heart of the borough.',
    highlights: ['Chief Kyan Pole in Whale Park', 'Tongass Historical Museum', 'Berth 2 Visitor Center', 'Southeast Alaska Discovery Center']
  },
  'herring-cove': {
    title: 'Herring Cove', tag: 'WILDLIFE VIEWING',
    description: 'Prime black bear and salmon viewing just minutes from downtown in a coastal rainforest setting.',
    highlights: ['Bear viewing Jul–Sep', 'Road and tour access', 'Eagles, seals, orcas', 'Coastal rainforest']
  }
};

const CONSTELLATION_NODES = [
  { id: 'misty-fjords', x: 80, y: 100, label: 'MF' },
  { id: 'totem-bight', x: 380, y: 120, label: 'TB' },
  { id: 'downtown', x: 250, y: 220, label: 'DT' },
  { id: 'creek-street', x: 180, y: 300, label: 'CS' },
  { id: 'herring-cove', x: 400, y: 340, label: 'HC' },
  { id: 'saxman', x: 220, y: 400, label: 'SX' }
];

const SPECIES = {
  'bald-eagle': { name: 'BALD EAGLE', sci: 'Haliaeetus leucocephalus', id: 'KG-001',
    desc: 'Highest concentration of bald eagles in the world. Common along waterfront and old-growth forest.',
    habitat: 'Waterfront', time: 'Year-round', chance: 'Very High', x: 0.7, y: 0.3 },
  'humpback-whale': { name: 'HUMPBACK WHALE', sci: 'Megaptera novaeangliae', id: 'KG-002',
    desc: 'Migratory giants breaching and bubble-net feeding in channels May through September.',
    habitat: 'Channels', time: 'May–Sep', chance: 'High', x: 0.25, y: 0.6 },
  'black-bear': { name: 'BLACK BEAR', sci: 'Ursus americanus', id: 'KG-003',
    desc: 'Frequently spotted fishing for salmon at Herring Cove and streams throughout the borough.',
    habitat: 'Streams', time: 'Jul–Sep', chance: 'Moderate', x: 0.55, y: 0.75 },
  'salmon': { name: 'PACIFIC SALMON', sci: 'Oncorhynchus spp.', id: 'KG-004',
    desc: 'All five Pacific species spawn in Ketchikan Creek — king, silver, red, pink, and chum.',
    habitat: 'Creeks', time: 'Jun–Sep', chance: 'Very High', x: 0.4, y: 0.45 },
  'sea-otter': { name: 'SEA OTTER', sci: 'Enhydra lutris', id: 'KG-005',
    desc: 'Playful otters float on their backs in protected harbor waters, cracking shellfish with rocks.',
    habitat: 'Harbors', time: 'Year-round', chance: 'Moderate', x: 0.8, y: 0.65 },
  'orca': { name: 'ORCA', sci: 'Orcinus orca', id: 'KG-006',
    desc: 'Resident and transient pods pass through — salmon feeders and marine mammal hunters.',
    habitat: 'Open water', time: 'May–Oct', chance: 'Low–Mod', x: 0.15, y: 0.25 }
};

const TOTEMS = [
  { title: 'Chief Kyan Pole', body: 'Carved to honor Chief Kyan of the Tongass Tlingit. Its crane, thunderbird, and bear design appears in most U.S. passports since 2007.' },
  { title: 'Totem Heritage Center', body: 'Preserves original 19th-century poles rescued from abandoned Tlingit and Haida villages — authentic artifacts over 150 years old.' },
  { title: 'Saxman Totem Park', body: 'CCC-era recarvings by Tlingit and Haida masters. Nathan Jackson and Israel Shotridge continued this living tradition.' }
];

const SEASONS = {
  summer: { temp: '62°F', cond: 'liquid sunshine', desc: '17 hours of daylight. Peak salmon runs. The island breathes green.' },
  fall: { temp: '48°F', cond: 'chromatic decay', desc: 'Rainforest colors ignite. Eagles congregate. Fewer crowds, moodier light.' },
  winter: { temp: '37°F', cond: 'frozen mist', desc: 'Mild by Alaska standards. Moss-covered trees in mystical fog. Rarely below freezing.' },
  spring: { temp: '45°F', cond: 'awakening pulse', desc: 'Wildflowers, migrating birds, first salmon. Whales return in May.' }
};

const QUIZ = [
  { q: 'What is Ketchikan known as?', opts: ['Gold Capital of Alaska', 'Salmon Capital of the World', 'Oil Capital of the North', 'Ice Capital of America'], ans: 1 },
  { q: 'Which peoples have lived here 10,000+ years?', opts: ['Inuit and Yupik', 'Tlingit, Haida, and Tsimshian', 'Aleut and Alutiiq', 'Athabascan and Tlingit'], ans: 1 },
  { q: 'What was Creek Street before 1954?', opts: ['Fish cannery row', 'A red-light district', 'A logging camp', 'A military base'], ans: 1 },
  { q: 'How large is Misty Fjords?', opts: ['357 mi²', '1,570 mi²', '3,570 mi²', '5,700 mi²'], ans: 2 },
  { q: 'Which island is Ketchikan on?', opts: ['Kodiak', 'Revillagigedo', 'Baranof', 'Prince of Wales'], ans: 1 }
];

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

/* ─── Canvas Particle World ─── */
const canvas = document.getElementById('world-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: 0, y: 0 };
let entered = false;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
}

function initParticles() {
  particles = [];
  const count = Math.min(Math.floor(window.innerWidth * window.innerHeight / 8000), 200);
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: Math.random() * 0.5 + 0.2,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.4 + 0.1
    });
  }
}

function drawWorld() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    if (entered) {
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        p.vx -= (dx / dist) * 0.02;
        p.vy -= (dy / dist) * 0.02;
      }
    }

    p.x += p.vx;
    p.y += p.vy;

    if (p.y > canvas.height) { p.y = 0; p.x = Math.random() * canvas.width; }
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;

    p.vx *= 0.99;
    p.vy = p.vy * 0.99 + 0.15;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(184, 224, 255, ${p.alpha})`;
    ctx.fill();
  });

  if (entered) {
    particles.forEach((a, i) => {
      particles.slice(i + 1).forEach(b => {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(200, 255, 0, ${0.08 * (1 - dist / 80)})`;
          ctx.stroke();
        }
      });
    });
  }

  requestAnimationFrame(drawWorld);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
drawWorld();

document.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}, { passive: true });

/* ─── Custom Cursor ─── */
const cursor = document.getElementById('cursor');
const cursorDot = cursor.querySelector('.cursor-dot');
const cursorRing = cursor.querySelector('.cursor-ring');

if (window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  }, { passive: true });

  document.querySelectorAll('a, button, .const-node, .sonar-blip, .depth-card, .echo-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
  document.addEventListener('mouseup', () => document.body.classList.remove('cursor-click'));
}

/* ─── Intro Gate ─── */
const intro = document.getElementById('intro');
const experience = document.getElementById('experience');

function enterSite() {
  if (entered) return;
  entered = true;
  intro.classList.add('dismissed');
  experience.classList.remove('hidden');
  document.body.classList.add('entered');
  initScramble();
  animateCounters();
  setTimeout(() => intro.remove(), 1500);
}

document.getElementById('enter-btn').addEventListener('click', enterSite);
intro.addEventListener('click', enterSite);

/* ─── Scramble Text ─── */
function scramble(el) {
  const target = el.dataset.text || el.textContent;
  let frame = 0;
  const maxFrames = 20;

  const interval = setInterval(() => {
    let result = '';
    for (let i = 0; i < target.length; i++) {
      if (target[i] === ' ') { result += ' '; continue; }
      if (frame / maxFrames > i / target.length) {
        result += target[i];
      } else {
        result += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
    }
    el.textContent = result;
    frame++;
    if (frame > maxFrames) {
      clearInterval(interval);
      el.textContent = target;
    }
  }, 40);
}

function initScramble() {
  document.querySelectorAll('.scramble').forEach((el, i) => {
    setTimeout(() => scramble(el), i * 150);
  });
}

const scrambleObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entered) {
      scramble(entry.target);
      scrambleObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.section-title.scramble').forEach(el => scrambleObserver.observe(el));

/* ─── Counters ─── */
function animateCounters() {
  document.querySelectorAll('.void-stat-num').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const fmt = el.dataset.fmt || 'comma';
    const duration = 2000;
    const start = performance.now();

    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      const val = Math.floor(eased * target);
      el.textContent = fmt === 'raw' ? val + suffix : val.toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

/* ─── Depth Meter & Nav ─── */
const depthFill = document.getElementById('depth-fill');
const depthValue = document.getElementById('depth-value');
const compassNeedle = document.getElementById('compass-needle');
const orbitLinks = document.querySelectorAll('.orbit-link');
const panels = document.querySelectorAll('.panel');

window.addEventListener('scroll', () => {
  const scrollPct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  depthFill.style.height = (scrollPct * 100) + '%';
  depthValue.textContent = Math.floor(scrollPct * 3000) + 'm';
  compassNeedle.style.transform = `translate(-50%, -100%) rotate(${scrollPct * 360}deg)`;
}, { passive: true });

const panelObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      orbitLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });

panels.forEach(p => panelObserver.observe(p));

document.getElementById('orbit-toggle').addEventListener('click', () => {
  document.getElementById('orbit-menu').classList.toggle('open');
});

orbitLinks.forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('orbit-menu').classList.remove('open');
  });
});

/* ─── Horizontal Depths Progress ─── */
const depthsScroll = document.getElementById('depths-scroll');
const depthsProgressFill = document.getElementById('depths-progress-fill');

depthsScroll?.addEventListener('scroll', () => {
  const max = depthsScroll.scrollWidth - depthsScroll.clientWidth;
  const pct = max > 0 ? depthsScroll.scrollLeft / max : 0;
  depthsProgressFill.style.width = (pct * 100) + '%';
}, { passive: true });

/* ─── Constellation Map ─── */
const constLines = document.getElementById('const-lines');
const constNodes = document.getElementById('const-nodes');
const signalDetail = document.getElementById('signal-detail');

const connections = [[0,1],[1,2],[2,3],[2,4],[3,5],[4,5],[0,2]];

connections.forEach(([a, b]) => {
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', CONSTELLATION_NODES[a].x);
  line.setAttribute('y1', CONSTELLATION_NODES[a].y);
  line.setAttribute('x2', CONSTELLATION_NODES[b].x);
  line.setAttribute('y2', CONSTELLATION_NODES[b].y);
  line.classList.add('const-line');
  line.dataset.a = a;
  line.dataset.b = b;
  constLines.appendChild(line);
});

CONSTELLATION_NODES.forEach((node, i) => {
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.classList.add('const-node');
  g.dataset.id = node.id;
  g.dataset.index = i;
  g.innerHTML = `
    <circle class="core" cx="${node.x}" cy="${node.y}" r="12"/>
    <text x="${node.x}" y="${node.y + 24}" text-anchor="middle">${node.label}</text>
  `;
  g.addEventListener('click', () => showSignal(node.id, i));
  constNodes.appendChild(g);
});

function showSignal(id, index) {
  const data = SIGNALS[id];
  if (!data) return;

  signalDetail.style.opacity = '0';
  setTimeout(() => {
    document.getElementById('signal-tag').textContent = data.tag;
    document.getElementById('signal-title').textContent = data.title;
    document.getElementById('signal-body').textContent = data.description;
    document.getElementById('signal-highlights').innerHTML =
      data.highlights.map(h => `<li>${h}</li>`).join('');
    signalDetail.style.opacity = '1';
  }, 200);

  document.querySelectorAll('.const-node').forEach(n => {
    n.classList.toggle('active', n.dataset.id === id);
  });

  document.querySelectorAll('.const-line').forEach(line => {
    const a = parseInt(line.dataset.a);
    const b = parseInt(line.dataset.b);
    line.classList.toggle('active', a === index || b === index);
  });
}

showSignal('downtown', 2);
signalDetail.style.transition = 'opacity 0.3s';

/* ─── Sonar ─── */
const sonarCanvas = document.getElementById('sonar-canvas');
const sonarCtx = sonarCanvas.getContext('2d');
const sonarBlips = document.getElementById('sonar-blips');
let sonarAngle = 0;
let activeSpecies = null;

Object.entries(SPECIES).forEach(([key, sp]) => {
  const blip = document.createElement('button');
  blip.className = 'sonar-blip';
  blip.style.left = (sp.x * 100) + '%';
  blip.style.top = (sp.y * 100) + '%';
  blip.dataset.species = key;
  blip.setAttribute('aria-label', sp.name);
  blip.addEventListener('click', () => showSpecies(key));
  sonarBlips.appendChild(blip);

  const btn = document.createElement('button');
  btn.className = 'sonar-key';
  btn.textContent = sp.name.split(' ')[0];
  btn.addEventListener('click', () => showSpecies(key));
  document.getElementById('sonar-keys').appendChild(btn);
});

function showSpecies(key) {
  activeSpecies = key;
  const sp = SPECIES[key];

  document.getElementById('readout-status').textContent = 'IDENTIFIED';
  document.getElementById('readout-id').textContent = sp.id;
  document.getElementById('readout-name').textContent = sp.name;
  document.getElementById('readout-sci').textContent = sp.sci;
  document.getElementById('readout-desc').textContent = sp.desc;
  document.getElementById('readout-meta').innerHTML = `
    <div><span>HABITAT</span><span>${sp.habitat}</span></div>
    <div><span>SEASON</span><span>${sp.time}</span></div>
    <div><span>SIGNAL</span><span>${sp.chance}</span></div>
  `;

  document.querySelectorAll('.sonar-blip').forEach(b => {
    b.classList.toggle('active', b.dataset.species === key);
  });
  document.querySelectorAll('.sonar-key').forEach((b, i) => {
    b.classList.toggle('active', Object.keys(SPECIES)[i] === key);
  });
}

function drawSonar() {
  const w = sonarCanvas.width;
  const h = sonarCanvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const r = w / 2 - 4;

  sonarCtx.clearRect(0, 0, w, h);

  for (let i = 1; i <= 4; i++) {
    sonarCtx.beginPath();
    sonarCtx.arc(cx, cy, (r / 4) * i, 0, Math.PI * 2);
    sonarCtx.strokeStyle = 'rgba(200, 255, 0, 0.08)';
    sonarCtx.stroke();
  }

  sonarCtx.beginPath();
  sonarCtx.moveTo(cx, cy);
  sonarCtx.lineTo(cx + Math.cos(sonarAngle) * r, cy + Math.sin(sonarAngle) * r);
  sonarCtx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
  sonarCtx.lineWidth = 1;
  sonarCtx.stroke();

  const gradient = sonarCtx.createConicGradient(sonarAngle - 0.4, cx, cy);
  gradient.addColorStop(0, 'rgba(0, 240, 255, 0)');
  gradient.addColorStop(0.5, 'rgba(0, 240, 255, 0.06)');
  gradient.addColorStop(1, 'rgba(0, 240, 255, 0)');
  sonarCtx.beginPath();
  sonarCtx.moveTo(cx, cy);
  sonarCtx.arc(cx, cy, r, sonarAngle - 0.5, sonarAngle);
  sonarCtx.closePath();
  sonarCtx.fillStyle = gradient;
  sonarCtx.fill();

  Object.entries(SPECIES).forEach(([key, sp]) => {
    const bx = cx + (sp.x - 0.5) * r * 1.6;
    const by = cy + (sp.y - 0.5) * r * 1.6;
    const angleToBlip = Math.atan2(by - cy, bx - cx);
    const angleDiff = Math.abs(angleToBlip - sonarAngle);
    if (angleDiff < 0.15 || angleDiff > Math.PI * 2 - 0.15) {
      sonarCtx.beginPath();
      sonarCtx.arc(bx, by, 4, 0, Math.PI * 2);
      sonarCtx.fillStyle = activeSpecies === key ? '#c8ff00' : 'rgba(200, 255, 0, 0.6)';
      sonarCtx.fill();
    }
  });

  sonarAngle += 0.02;
  requestAnimationFrame(drawSonar);
}

drawSonar();
showSpecies('bald-eagle');

/* ─── Atmos Canvas ─── */
const atmosCanvas = document.getElementById('atmos-canvas');
const atmosCtx = atmosCanvas.getContext('2d');
let atmosSeason = 'summer';
let atmosParticles = [];

const SEASON_COLORS = {
  summer: { sky: ['#0c1929', '#134e4a'], rain: 'rgba(0, 240, 255, 0.3)' },
  fall: { sky: ['#1a0f0a', '#451a03'], rain: 'rgba(251, 113, 133, 0.3)' },
  winter: { sky: ['#0a0a12', '#1e293b'], rain: 'rgba(184, 224, 255, 0.4)' },
  spring: { sky: ['#0a1a14', '#064e3b'], rain: 'rgba(200, 255, 0, 0.25)' }
};

function initAtmosParticles() {
  atmosParticles = [];
  for (let i = 0; i < 80; i++) {
    atmosParticles.push({
      x: Math.random() * atmosCanvas.width,
      y: Math.random() * atmosCanvas.height,
      speed: Math.random() * 3 + 2,
      len: Math.random() * 15 + 5
    });
  }
}

initAtmosParticles();

function drawAtmos() {
  const w = atmosCanvas.width;
  const h = atmosCanvas.height;
  const colors = SEASON_COLORS[atmosSeason];

  const grad = atmosCtx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, colors.sky[0]);
  grad.addColorStop(1, colors.sky[1]);
  atmosCtx.fillStyle = grad;
  atmosCtx.fillRect(0, 0, w, h);

  atmosParticles.forEach(p => {
    atmosCtx.beginPath();
    atmosCtx.moveTo(p.x, p.y);
    atmosCtx.lineTo(p.x, p.y + p.len);
    atmosCtx.strokeStyle = colors.rain;
    atmosCtx.lineWidth = 1;
    atmosCtx.stroke();

    p.y += p.speed;
    if (p.y > h) { p.y = -p.len; p.x = Math.random() * w; }
  });

  requestAnimationFrame(drawAtmos);
}

drawAtmos();

document.querySelectorAll('.dial-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    atmosSeason = btn.dataset.season;
    document.querySelectorAll('.dial-btn').forEach(b => b.classList.toggle('active', b === btn));
    const s = SEASONS[atmosSeason];
    document.getElementById('atmos-temp').textContent = s.temp;
    document.getElementById('atmos-condition').textContent = s.cond;
    document.getElementById('atmos-season-desc').textContent = s.desc;
    initAtmosParticles();
  });
});

/* ─── Echo Wave ─── */
const wavePath = document.getElementById('wave-path');
let waveOffset = 0;

function animateWave() {
  if (!wavePath) return;
  let d = 'M0,40 ';
  for (let x = 0; x <= 1200; x += 20) {
    const y = 40 + Math.sin((x + waveOffset) * 0.02) * 15 + Math.sin((x + waveOffset) * 0.01) * 10;
    d += `L${x},${y} `;
  }
  wavePath.setAttribute('d', d);
  waveOffset += 2;
  requestAnimationFrame(animateWave);
}

animateWave();

/* ─── Totem Modal ─── */
const modal = document.getElementById('modal');

document.querySelectorAll('.echo-expand').forEach(btn => {
  btn.addEventListener('click', () => {
    const t = TOTEMS[parseInt(btn.dataset.totem, 10)];
    document.getElementById('modal-title').textContent = t.title;
    document.getElementById('modal-body').textContent = t.body;
    modal.classList.remove('hidden');
  });
});

function closeModal() { modal.classList.add('hidden'); }
document.getElementById('modal-x').addEventListener('click', closeModal);
document.getElementById('modal-bg').addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ─── Terminal Quiz ─── */
let qIdx = 0, qScore = 0, qLocked = false;

function showQuizQ() {
  qLocked = false;
  const q = QUIZ[qIdx];
  document.getElementById('terminal-question').textContent = `[${qIdx + 1}/${QUIZ.length}] ${q.q}`;
  document.getElementById('terminal-options').innerHTML = q.opts.map((o, i) =>
    `<button class="terminal-opt" data-i="${i}">${o}</button>`
  ).join('');
  document.getElementById('terminal-options').querySelectorAll('.terminal-opt').forEach(btn => {
    btn.addEventListener('click', () => answerQuiz(parseInt(btn.dataset.i, 10)));
  });
}

function answerQuiz(sel) {
  if (qLocked) return;
  qLocked = true;
  const q = QUIZ[qIdx];
  const btns = document.querySelectorAll('.terminal-opt');
  btns.forEach(b => b.classList.add('disabled'));
  if (sel === q.ans) { btns[sel].classList.add('correct'); qScore++; }
  else { btns[sel].classList.add('wrong'); btns[q.ans].classList.add('correct'); }

  setTimeout(() => {
    qIdx++;
    if (qIdx < QUIZ.length) showQuizQ();
    else {
      document.getElementById('terminal-question').textContent = '';
      document.getElementById('terminal-options').innerHTML = '';
      document.getElementById('terminal-result').classList.remove('hidden');
      document.getElementById('terminal-score').textContent = `${qScore}/${QUIZ.length}`;
      const pct = qScore / QUIZ.length;
      document.getElementById('terminal-msg').textContent = pct === 1
        ? 'TRANSMISSION COMPLETE. You are a Ketchikan oracle.'
        : pct >= 0.6 ? 'SIGNAL STRONG. Borough knowledge confirmed.'
        : 'SIGNAL WEAK. Re-explore the depths.';
    }
  }, 1200);
}

document.getElementById('terminal-restart').addEventListener('click', () => {
  qIdx = 0; qScore = 0;
  document.getElementById('terminal-result').classList.add('hidden');
  showQuizQ();
});

/* ─── Transmit Form ─── */
document.getElementById('transmit-form').addEventListener('submit', e => {
  e.preventDefault();
  showToast('TRANSMISSION RECEIVED');
  e.target.reset();
});

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

document.getElementById('enter-btn').addEventListener('click', () => {
  setTimeout(showQuizQ, 800);
});
