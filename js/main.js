/* Ketchikan Gateway Borough — Interactive Features */

const attractions = {
  'creek-street': {
    title: 'Creek Street',
    tag: 'Historic Boardwalk',
    image: 'linear-gradient(135deg, #042f2e 0%, #134e4a 40%, #2dd4bf 100%)',
    description: 'A picturesque boardwalk built on stilts over Ketchikan Creek, Creek Street was once the town\'s famed red-light district until 1954. Today it\'s a photographer\'s delight — home to art galleries, gift shops, bookstores, and restaurants perched above the salmon-filled creek.',
    highlights: [
      'Dolly\'s House Museum — preserved brothel from the gold rush era',
      'Salmon viewing from the boardwalk during summer spawning runs',
      'The "Married Man\'s Trail" — a secret staircase used during prohibition',
      'Rainbird Records and other unique local shops'
    ]
  },
  'totem-bight': {
    title: 'Totem Bight State Historical Park',
    tag: 'State Park',
    image: 'linear-gradient(135deg, #0c4a6e 0%, #164e63 50%, #22d3ee 100%)',
    description: 'Set against the backdrop of the Tongass National Forest, this 33-acre park features a collection of restored totem poles and a replica Tlingit clan house. Many poles are recarvings of older poles created during the Civilian Conservation Corps era in the 1930s.',
    highlights: [
      '14 totem poles with interpretive signage',
      'Full-scale Tlingit clan house open for tours',
      'Rainforest walking trails along the shoreline',
      'Free admission — open year-round'
    ]
  },
  'misty-fjords': {
    title: 'Misty Fjords National Monument',
    tag: 'Wilderness',
    image: 'linear-gradient(135deg, #030712 0%, #0c4a6e 50%, #2dd4bf 100%)',
    description: 'A breathtaking 3,570-square-mile wilderness of sea cliffs, steep fjords, and rock walls jutting 3,000 feet straight from the ocean. Accessible by floatplane, tour boat, or kayak, Misty Fjords is one of Alaska\'s most spectacular natural wonders.',
    highlights: [
      'New Eddystone Rock — a volcanic spire rising from the sea',
      'Rudyerd Bay — sheer granite cliffs draped in waterfalls',
      'Wildlife: seals, sea otters, bald eagles, and whales',
      'Flightseeing tours depart daily from Ketchikan harbor'
    ]
  },
  'saxman': {
    title: 'Saxman Totem Park',
    tag: 'Native Heritage',
    image: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a78bfa 100%)',
    description: 'Located in the City of Saxman, just south of Ketchikan, this park houses 25 totem poles — one of the largest collections in Alaska. The Saxman community maintains strong Tlingit traditions, with regular carving demonstrations and cultural performances.',
    highlights: [
      '25 standing totem poles in a traditional village setting',
      'Chief Johnson Totem Pole — one of the most photographed in Alaska',
      'Saxman Community Hall — home to the Cape Fox Dancers',
      'Carving shed where master carvers work on new poles'
    ]
  },
  'downtown': {
    title: 'Downtown Ketchikan',
    tag: 'National Historic Landmark',
    image: 'linear-gradient(135deg, #042f2e 0%, #0c4a6e 50%, #22d3ee 100%)',
    description: 'Downtown Ketchikan is a National Historic Landmark District centered on Mission Street and the waterfront. Two large harbors, four cruise ship berths, and a vibrant commercial district make this the heart of the borough.',
    highlights: [
      'Chief Kyan Totem Pole in Whale Park (featured in U.S. passports)',
      'Tongass Historical Museum and Totem Heritage Center',
      'Berth 2 Visitor Information Center',
      'Southeast Alaska Discovery Center with interactive exhibits'
    ]
  },
  'herring-cove': {
    title: 'Herring Cove',
    tag: 'Wildlife Viewing',
    image: 'linear-gradient(135deg, #064e3b 0%, #134e4a 50%, #2dd4bf 100%)',
    description: 'A popular wildlife viewing area just a short drive from downtown, Herring Cove offers some of the best bear and salmon viewing in Southeast Alaska. Black bears frequently fish for salmon in the creek during summer months.',
    highlights: [
      'Black bear viewing during salmon runs (July–September)',
      'Accessible via the Herring Cove road or organized tours',
      'Bald eagles, seals, and occasional orca sightings',
      'Scenic coastal rainforest setting'
    ]
  }
};

const wildlife = {
  'bald-eagle': {
    name: 'Bald Eagle',
    scientific: 'Haliaeetus leucocephalus',
    description: 'Ketchikan has one of the highest concentrations of bald eagles in the world. These majestic birds nest in old-growth trees throughout the Tongass National Forest and are a common sight along the waterfront, where they hunt for fish and scavenge from fishing boats.',
    habitat: 'Waterfront, forests',
    bestTime: 'Year-round',
    likelihood: 'Very High'
  },
  'humpback-whale': {
    name: 'Humpback Whale',
    scientific: 'Megaptera novaeangliae',
    description: 'Humpback whales migrate through the waters around Ketchikan from May through September. These acrobatic giants can be seen breaching, tail-slapping, and bubble-net feeding in the channels and fjords surrounding Revillagigedo Island.',
    habitat: 'Open channels, fjords',
    bestTime: 'May – September',
    likelihood: 'High (summer)'
  },
  'black-bear': {
    name: 'Black Bear',
    scientific: 'Ursus americanus',
    description: 'Southeast Alaska\'s lush rainforest provides ideal habitat for black bears. They are frequently spotted fishing for salmon at Herring Cove, along streams throughout the borough, and occasionally wandering through residential areas in late summer.',
    habitat: 'Streams, forests',
    bestTime: 'July – September',
    likelihood: 'Moderate'
  },
  'salmon': {
    name: 'Pacific Salmon',
    scientific: 'Oncorhynchus spp.',
    description: 'All five species of Pacific salmon — king (chinook), silver (coho), red (sockeye), pink (humpy), and chum (dog) — spawn in Ketchikan Creek and surrounding waters. The summer runs draw bears, eagles, and anglers from around the world.',
    habitat: 'Creeks, streams, ocean',
    bestTime: 'June – September',
    likelihood: 'Very High (summer)'
  },
  'sea-otter': {
    name: 'Sea Otter',
    scientific: 'Enhydra lutris',
    description: 'Playful sea otters float on their backs in the protected waters around Ketchikan, using rocks to crack open shellfish. Once hunted nearly to extinction for their fur, they have made a remarkable comeback in Southeast Alaska.',
    habitat: 'Kelp beds, harbors',
    bestTime: 'Year-round',
    likelihood: 'Moderate'
  },
  'orca': {
    name: 'Orca (Killer Whale)',
    scientific: 'Orcinus orca',
    description: 'Both resident and transient orca pods pass through the waters near Ketchikan. Resident pods feed on salmon, while transient pods hunt marine mammals. Sightings are a thrilling highlight of wildlife cruises and flightseeing tours.',
    habitat: 'Open water, channels',
    bestTime: 'May – October',
    likelihood: 'Low–Moderate'
  }
};

const totemDetails = [
  {
    title: 'Chief Kyan Pole',
    body: 'Carved in the early 20th century to honor Chief Kyan of the Tongass Tlingit, this totem pole stands in Whale Park at the center of downtown Ketchikan. Its distinctive design — featuring a crane, a thunderbird, and a bear holding a fish — has become one of the most recognizable images of Alaska, appearing as a background image in most U.S. passports issued since 2007.'
  },
  {
    title: 'Totem Heritage Center',
    body: 'Established in 1976, the Totem Heritage Center preserves original 19th-century totem poles rescued from abandoned Tlingit and Haida village sites on Tongass Island and Village Island. Unlike the recarvings found at Saxman and Totem Bight, these poles are authentic historical artifacts — some over 150 years old — displayed indoors to protect them from the elements.'
  },
  {
    title: 'Saxman Totem Park',
    body: 'The totem poles at Saxman represent a remarkable preservation effort. During the 1930s, the Civilian Conservation Corps employed Tlingit and Haida carvers to recreate poles from villages that had been abandoned due to population decline. Master carvers like Nathan Jackson and Israel Shotridge have continued this tradition, making Saxman a living center of Northwest Coast art.'
  }
];

const seasons = {
  summer: {
    temp: '62°F',
    desc: 'Long daylight hours (up to 17 hours), lush greenery, and peak salmon runs make summer the most popular visiting season. Average rainfall is lower than other seasons, though rain is still common.'
  },
  fall: {
    temp: '48°F',
    desc: 'Fall brings vibrant colors to the rainforest, fewer crowds, and the tail end of salmon runs. Eagles congregate along streams to feed, and the moody atmosphere is perfect for photography.'
  },
  winter: {
    temp: '37°F',
    desc: 'Winter in Ketchikan is mild compared to interior Alaska, with temperatures rarely dropping below freezing. The rainforest takes on a mystical quality with moss-covered trees and misty mornings.'
  },
  spring: {
    temp: '45°F',
    desc: 'Spring awakens the rainforest with wildflowers, migrating birds, and the first salmon returning to local streams. Whale migration begins in May, and the community celebrates the return of longer days.'
  }
};

const seasonScenes = {
  summer: 'linear-gradient(180deg, #0c4a6e 0%, #042f2e 60%, #134e4a 100%)',
  fall: 'linear-gradient(180deg, #451a03 0%, #292524 60%, #1c1917 100%)',
  winter: 'linear-gradient(180deg, #1e293b 0%, #0f172a 60%, #030712 100%)',
  spring: 'linear-gradient(180deg, #064e3b 0%, #042f2e 60%, #134e4a 100%)'
};

const quizQuestions = [
  {
    question: 'What is Ketchikan known as?',
    options: ['The Gold Capital of Alaska', 'The Salmon Capital of the World', 'The Oil Capital of the North', 'The Ice Capital of America'],
    correct: 1
  },
  {
    question: 'Which Native peoples have lived in the Ketchikan area for over 10,000 years?',
    options: ['Inuit and Yupik', 'Tlingit, Haida, and Tsimshian', 'Aleut and Alutiiq', 'Athabascan and Tlingit'],
    correct: 1
  },
  {
    question: 'What was Creek Street before 1954?',
    options: ['A fish cannery row', 'A red-light district', 'A logging camp', 'A military base'],
    correct: 1
  },
  {
    question: 'How large is Misty Fjords National Monument?',
    options: ['357 square miles', '1,570 square miles', '3,570 square miles', '5,700 square miles'],
    correct: 2
  },
  {
    question: 'On which island is Ketchikan located?',
    options: ['Kodiak Island', 'Revillagigedo Island', 'Baranof Island', 'Prince of Wales Island'],
    correct: 1
  }
];

/* Rain Effect */
let rainActive = true;
const rainContainer = document.getElementById('rain-container');

function createRain() {
  rainContainer.innerHTML = '';
  if (!rainActive) return;

  const count = Math.min(window.innerWidth / 8, 150);
  for (let i = 0; i < count; i++) {
    const drop = document.createElement('div');
    drop.className = 'raindrop';
    drop.style.left = Math.random() * 100 + '%';
    drop.style.height = Math.random() * 20 + 10 + 'px';
    drop.style.animationDuration = Math.random() * 0.5 + 0.5 + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';
    drop.style.opacity = Math.random() * 0.3 + 0.1;
    rainContainer.appendChild(drop);
  }
}

document.getElementById('rain-toggle').addEventListener('click', function () {
  rainActive = !rainActive;
  this.setAttribute('aria-pressed', rainActive);
  this.querySelector('span').textContent = rainActive ? 'Rain On' : 'Rain Off';
  createRain();
});

createRain();
window.addEventListener('resize', createRain);

/* Navigation */
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const sections = document.querySelectorAll('section[id]');
const navItems = navLinks.querySelectorAll('a');

const observerNav = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => observerNav.observe(s));

/* Scroll Progress */
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  scrollProgress.style.width = pct + '%';
}, { passive: true });

/* Cursor Glow */
const cursorGlow = document.getElementById('cursor-glow');
if (window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  }, { passive: true });
}

/* Animated Counters */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const format = el.dataset.format || 'comma';
  const duration = 2200;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    const val = Math.floor(eased * target);
    el.textContent = format === 'raw' ? val + suffix : val.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const statObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-value').forEach(animateCounter);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statObserver.observe(heroStats);

/* Reveal on Scroll */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 6) * 0.08}s`;
  revealObserver.observe(el);
});

/* Timeline Animation */
const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.timeline-item').forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 200);
      });
      timelineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const timeline = document.getElementById('timeline');
if (timeline) timelineObserver.observe(timeline);

/* Attraction Explorer */
const attractionContent = document.getElementById('attraction-content');
const tabBtns = document.querySelectorAll('.tab-btn');
const mapMarkers = document.querySelectorAll('.map-marker');

function showAttraction(id) {
  const data = attractions[id];
  if (!data) return;

  attractionContent.style.opacity = '0';
  setTimeout(() => {
    attractionContent.innerHTML = `
      <div class="attraction-image" style="background: ${data.image}"></div>
      <span class="attraction-tag">${data.tag}</span>
      <h3>${data.title}</h3>
      <p>${data.description}</p>
      <ul class="attraction-highlights">
        ${data.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    `;
    attractionContent.style.opacity = '1';
  }, 200);

  tabBtns.forEach(btn => {
    const isActive = btn.dataset.id === id;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive);
  });

  mapMarkers.forEach(marker => {
    marker.classList.toggle('active', marker.dataset.id === id);
  });
}

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => showAttraction(btn.dataset.id));
});

mapMarkers.forEach(marker => {
  marker.addEventListener('click', () => showAttraction(marker.dataset.id));
  marker.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showAttraction(marker.dataset.id);
    }
  });
});

showAttraction('creek-street');
attractionContent.style.transition = 'opacity 0.3s ease';

/* Wildlife Explorer */
const wildlifeDetail = document.getElementById('wildlife-detail');
const wildlifeBtns = document.querySelectorAll('.wildlife-btn');

function showWildlife(species) {
  const data = wildlife[species];
  if (!data) return;

  wildlifeDetail.style.opacity = '0';
  setTimeout(() => {
    wildlifeDetail.innerHTML = `
      <h3>${data.name}</h3>
      <p class="wildlife-scientific">${data.scientific}</p>
      <p>${data.description}</p>
      <div class="wildlife-meta">
        <div class="wildlife-meta-item">
          <span>Habitat</span>
          <span>${data.habitat}</span>
        </div>
        <div class="wildlife-meta-item">
          <span>Best Time</span>
          <span>${data.bestTime}</span>
        </div>
        <div class="wildlife-meta-item">
          <span>Likelihood</span>
          <span>${data.likelihood}</span>
        </div>
      </div>
    `;
    wildlifeDetail.style.opacity = '1';
  }, 200);

  wildlifeBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.species === species);
  });
}

wildlifeBtns.forEach(btn => {
  btn.addEventListener('click', () => showWildlife(btn.dataset.species));
});

showWildlife('bald-eagle');
wildlifeDetail.style.transition = 'opacity 0.3s ease';

/* Season Selector */
const seasonBtns = document.querySelectorAll('.season-btn');
const seasonDesc = document.getElementById('season-desc');
const tempDisplay = document.getElementById('temp-display');
const weatherScene = document.getElementById('weather-scene');

seasonBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const season = btn.dataset.season;
    seasonBtns.forEach(b => b.classList.toggle('active', b === btn));
    seasonDesc.textContent = seasons[season].desc;
    tempDisplay.textContent = seasons[season].temp;
    weatherScene.style.background = seasonScenes[season];
  });
});

/* Totem Modal */
const totemModal = document.getElementById('totem-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

document.querySelectorAll('.totem-learn-btn').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    modalTitle.textContent = totemDetails[i].title;
    modalBody.textContent = totemDetails[i].body;
    totemModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  totemModal.classList.add('hidden');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-backdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !totemModal.classList.contains('hidden')) closeModal();
});

/* Quiz */
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

const quizText = document.getElementById('quiz-text');
const quizOptions = document.getElementById('quiz-options');
const quizCounter = document.getElementById('quiz-counter');
const quizBarFill = document.getElementById('quiz-bar-fill');
const quizQuestion = document.getElementById('quiz-question');
const quizResult = document.getElementById('quiz-result');
const quizScoreEl = document.getElementById('quiz-score');
const quizMessage = document.getElementById('quiz-message');

function showQuestion() {
  quizAnswered = false;
  const q = quizQuestions[quizIndex];
  quizText.textContent = q.question;
  quizCounter.textContent = `Question ${quizIndex + 1} of ${quizQuestions.length}`;
  quizBarFill.style.width = ((quizIndex + 1) / quizQuestions.length * 100) + '%';

  quizOptions.innerHTML = q.options.map((opt, i) =>
    `<button class="quiz-option" data-index="${i}">${opt}</button>`
  ).join('');

  quizOptions.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index, 10)));
  });
}

function handleAnswer(selected) {
  if (quizAnswered) return;
  quizAnswered = true;

  const q = quizQuestions[quizIndex];
  const buttons = quizOptions.querySelectorAll('.quiz-option');
  buttons.forEach(btn => btn.classList.add('disabled'));

  if (selected === q.correct) {
    buttons[selected].classList.add('correct');
    quizScore++;
  } else {
    buttons[selected].classList.add('incorrect');
    buttons[q.correct].classList.add('correct');
  }

  setTimeout(() => {
    quizIndex++;
    if (quizIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showQuizResult();
    }
  }, 1500);
}

function showQuizResult() {
  quizQuestion.classList.add('hidden');
  quizResult.classList.remove('hidden');
  quizScoreEl.textContent = `${quizScore} / ${quizQuestions.length}`;
  const pct = quizScore / quizQuestions.length;
  if (pct === 1) {
    quizMessage.textContent = 'Perfect! You\'re a true Ketchikan expert!';
  } else if (pct >= 0.6) {
    quizMessage.textContent = 'Great job! You know your way around the Gateway Borough.';
  } else {
    quizMessage.textContent = 'Keep exploring — there\'s always more to discover in Ketchikan!';
  }
}

document.getElementById('quiz-restart').addEventListener('click', () => {
  quizIndex = 0;
  quizScore = 0;
  quizQuestion.classList.remove('hidden');
  quizResult.classList.add('hidden');
  showQuestion();
});

showQuestion();

/* Newsletter */
document.getElementById('newsletter-form').addEventListener('submit', e => {
  e.preventDefault();
  const msg = document.getElementById('newsletter-msg');
  msg.classList.remove('hidden');
  e.target.reset();
  showToast('Welcome to the Ketchikan community!');
});

/* Toast */
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* Card Tilt Effect */
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
