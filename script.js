const RSVP_DESTINATION_EMAIL = "rjuniorcf@gmail.com";
const RSVP_WEBHOOK_URL = "";
const GIFT_DESTINATION_EMAIL = "rjuniorcf@gmail.com";
const SECONDARY_DESTINATION_EMAIL = "simone.lee501@gmail.com";
const GIFT_CARD_PAYMENT_URL = "";
const GIFT_PIX_COPY_TEXT = "00020126580014BR.GOV.BCB.PIX0136f35427de-e68d-48c0-a6b7-1401e4a813d15204000053039865802BR5925Richard Cascaes Figueired6009SAO PAULO62140510zQPRQgHNb563046546";
const GIFT_PIX_QR_IMAGE = "assets/images/pix-noivo.jpg";
const RSVP_CONFIRMED_STORAGE_KEY = "simone-richard-rsvp-confirmados";
const GIFT_BUYER_STORAGE_KEY = "simone-richard-presenteador";

const MEMORY_TOTAL = 50;
const MEMORY_OPTIMIZED_BASE_PATH = "assets/photos-optimized";
const HERO_FEATURED_MEMORY_IDS = ["048", "049", "050"];
const HERO_SLIDE_DURATION_MS = 8000;
const MEMORY_PRELOAD_COUNT = 14;
const MEMORY_IMAGE_SWAP_MS = 2200;
const MEMORY_FADE_OUT_MS = 560;
const MEMORY_DRIFT_MS = 1650;
const MEMORY_DRIFT_MAX_PX = 9;
const MEMORY_DRIFT_MAX_ROTATE_DEG = 1.05;
const HERO_COLLAGE_DENSITY = 32000;
const HERO_COLLAGE_MIN_MOBILE = 28;
const HERO_COLLAGE_MIN_DESKTOP = MEMORY_TOTAL;
const HERO_COLLAGE_MAX = 72;
const HERO_COLLAGE_MAX_HEAVY_OVERLAPS = 2;
const HERO_COLLAGE_HEAVY_OVERLAP_RATIO = 0.8;
const LEGACY_HASH_ROUTES = {
  "#nossa-historia": "nossa-historia.html",
  "#endereco": "endereco.html",
  "#cronograma-casamento": "cronograma-casamento.html",
  "#confirmar-presenca": "confirmar-presenca.html",
  "#dress-code": "dress-code.html",
  "#lista-presentes": "lista-presentes.html",
  "#hospedagem-salao": "hospedagem-salao.html",
};

const GIFT_PRODUCTS = [
  { title: "2 tainha pro almoço de domingo", price: "R$ 70", initial: "T", image: "presentes-fotos/tainhas.jpg" },
  { title: "Almoço para os noivos endividados", price: "R$ 80", initial: "A", image: "presentes-fotos/almoco-mc.webp" },
  { title: "Eletro Up", price: "R$ 85", initial: "E", image: "presentes-fotos/eletroup.png" },
  { title: "Caixa de gel da Probi", price: "R$ 100", initial: "G", image: "presentes-fotos/gel-probi.png" },
  { title: "Meia de corrida", price: "R$ 120", initial: "M", image: "presentes-fotos/meiadecorrida.png" },
  { title: "Boné baixa pace", price: "R$ 150", initial: "B", image: "presentes-fotos/bonebaixapace.png" },
  { title: "Whey zero lactose", price: "R$ 235", initial: "W", image: "presentes-fotos/wheyprobizero.jpg" },
  { title: "Óculos de corrida", price: "R$ 280", initial: "O", image: "presentes-fotos/oculos-de-corrida.png" },
  { title: "Camisa do Mengão", price: "R$ 300", initial: "M", image: "presentes-fotos/camisaflamengo.png" },
  { title: "Fone de ouvido novo", price: "R$ 350", initial: "F", image: "presentes-fotos/fonedecorrida.png" },
  { title: "Cinta cardíaca", price: "R$ 700", initial: "C", image: "presentes-fotos/cinta.webp" },
  { title: "Macaquinho estiloso", price: "R$ 800", initial: "M", image: "presentes-fotos/macaquinhoestiloso.png" },
  { title: "Uma parcela da roda de carbono do Ri", price: "R$ 1.000", initial: "R", image: "presentes-fotos/roda-decarbono.png" },
  { title: "Sapatilha nova", price: "R$ 1.000", initial: "S", image: "presentes-fotos/sapatilha.png" },
  { title: "Spa para noiva descansar", price: "R$ 1.000", initial: "S", image: "presentes-fotos/spanoiva.jpg" },
  { title: "Tênis de corrida pro noivo", price: "R$ 1.200", initial: "T", image: "presentes-fotos/tenis-pro-noivo.png" },
  { title: "Tênis de corrida pra noiva", price: "R$ 1.200", initial: "T", image: "presentes-fotos/tenis-noiva-novo.png" },
  { title: "Capacete aero novo", price: "R$ 1.800", initial: "C", image: "presentes-fotos/capaceteaero.png" },
  { title: "Um Garmin novo pra ele", price: "R$ 2.000", initial: "G", image: "presentes-fotos/gamin%20ri.webp" },
  { title: "Um Garmin novo pra ela", price: "R$ 2.500", initial: "G", image: "presentes-fotos/garmin%20si.webp" },
  { title: "Geladeira nova", price: "R$ 2.500", initial: "G", image: "presentes-fotos/geladeira-nova.png" },
  { title: "Rolo de treino smart", price: "R$ 3.000", initial: "R", image: "presentes-fotos/rolosmart.png" },
  { title: "Lua de mel em Paris", price: "10x de R$ 1.000", initial: "P", image: "presentes-fotos/paris.png" },
];

const INVITED_GUESTS = [
  "Maria Clara de Faria Fernandes",
  "Rafael de Castro",
  "Janaína Belchior",
  "Edgard Henrique Pupo",
  "Eloisa Lobão",
  "Thiago Nunes Thiba",
  "Alberto Borem",
  "Lucy Helem Borem",
  "Maria Eduarda Borem",
  "Pedro Borem",
  "Simon - Lee Shu Hung",
  "Neli Aparecida Klein",
  "Lap Lee",
  "tia Ng",
  "Camila Lee",
  "Carl Lee",
  "Henri Lee",
  "Henrique Lee",
  "Isaura de Oliveira",
  "Thaís Fernanda Magalhães",
  "Ulisses Lee",
  "Coralina Cora Lee",
  "Calvin de Oliveira Lee",
  "Caroline de Oliveira Lee",
  "Fernando Hugo",
  "Theo Lee Mendonça",
  "Nam Phat Quach",
  "Miewa Quach Lee",
  "Alda Gorete Klein",
  "Celine Klein",
  "Ricardo Cascaes Figueiredo",
  "Richard Cascaes Figueiredo",
  "Ingrid Cascaes Figueiredo de Jesus Camargo",
  "Joeferson Jesus Camargo",
  "Grasiele Silva",
  "Franken Eluisio da Silva",
  "Jonilson dos Anjos",
  "Sandra Regina dos Anjos",
  "Cláudia Figueiredo",
  "Ellen da Silva Figueiredo",
  "Anderson Schmitt",
  "Ana Paula Figueiredo Rodrigues",
  "Etori Rodrigues Toco",
  "Alex Teixeira",
  "Fernanda Figueiredo",
  "Leonam da Silva",
  "Bruna Ferrêira",
  "Guilherme Cascaes Figueiredo",
  "Alecyana Batista Teixeira Camargo",
  "João Paulo Camargo",
  "Miguel Kawakita",
  "Shayane zonta",
  "Cássio Dantas",
  "Aldo Miike",
  "Eduardo Martinelli",
  "Jéssica Souza",
  "André Andrade",
  "Filipe Ronzani",
  "Diurlhane",
  "Tiago Silva",
  "Andressa Domingues",
  "Alessandra Domingues",
  "Josué Mattos",
  "Fernanda Mattos",
  "Edicarlos Cardoso Costa",
  "Bárbara Rafaela Zen de Andrade",
  "João Vitor Bastos",
  "Letícia Medeiros",
  "Magda Grasiella Lima de Moraes",
  "Giselle Rodrigues",
  "Marina Hohne Nunes",
  "Débora Catarina",
  "Vitor Hugo",
  "Anderson Sabadini",
  "Paulo de Moura",
  "Dorilda Dolor da Silveira de Moura",
  "Ricardo Rosa",
  "Valentina Rosa",
  "Davi Rosa",
  "Diego Ferraz",
  "Gabriela Mieko",
  "Gabriela Perrenoud",
  "César Moro",
  "Maurício Paiva",
  "Nancy Ferreira",
  "Braian Rizzo",
  "Mariana Pereira",
  "Victória Fabris",
  "Fernando Paladini",
  "Camila Bragion",
  "Maia Fleming",
  "Fernando Lima",
  "Audrey Marinho",
  "Gustavo Novais",
  "Dri Takahashi Adriele",
  "Jéssica Alegre",
  "Gabriel Godoy Barbosa",
  "Gabriel Morais",
  "Kassy Anne",
  "Joaquina Lealcina de Jesus",
  "Valdeci de Souza - Seu Ci",
  "Rafael Scucuglia",
  "Tati Scucuglia",
  "Brenda Rupp Gazze",
  "Caio Urzelin",
  "João Campos",
  "Karin Bike Hauss",
  "Junior Bike Hauss",
  "Giselly Westphal Kawakita",
  "Massaru Kawakita",
  "Gabriel Vitor Durrewald",
  "Fernanda Detoni",
  "Marcos Reinaldo",
  "Amanda Ingeichak",
  "Cristiano Hoffman",
];

const GUEST_INDEX = INVITED_GUESTS.map((name) => ({
  name,
  normalized: normalizeText(name),
  tokens: getMeaningfulTokens(name),
  key: slugify(name),
}));

const MEMORY_DATE_LABELS = {
  "001": "26/04/2015",
  "002": "08/08/2024",
  "003": "29/03/2026",
  "004": "26/08/2024",
  "005": "01/04/2026",
  "006": "02/06/2025",
  "007": "14/06/2025",
  "008": "11/04/2026",
  "009": "11/04/2026",
  "010": "13/04/2026",
  "011": "31/12/2023",
  "012": "07/06/2023",
  "013": "27/04/2025",
  "014": "09/09/2019",
  "015": "08/06/2023",
  "016": "08/06/2023",
  "017": "08/06/2023",
  "018": "09/08/2025",
  "019": "09/08/2025",
  "020": "25/05/2025",
  "021": "11/08/2025",
  "022": "17/08/2025",
  "023": "06/09/2025",
  "024": "07/09/2025",
  "025": "27/09/2025",
  "026": "18/10/2025",
  "027": "23/10/2025",
  "028": "23/10/2025",
  "029": "01/12/2024",
  "030": "23/11/2025",
  "031": "15/11/2025",
  "032": "16/11/2025",
  "033": "26/12/2024",
  "034": "23/09/2023",
  "035": "25/12/2014",
  "036": "02/06/2024",
  "037": "01/01/2015",
  "038": "24/12/2025",
  "039": "31/12/2025",
  "040": "21/02/2015",
  "041": "05/01/2026",
  "042": "24/01/2026",
  "043": "08/02/2026",
  "044": "30/10/2021",
  "045": "23/04/2025",
  "046": "22/02/2026",
  "047": "25/05/2024",
  "048": "04/08/2026",
  "049": "04/08/2026",
  "050": "04/08/2026",
};

const heroMonogram = document.getElementById("hero-monogram");
const heroCollage = document.getElementById("hero-collage");
const heroSlideshow = document.getElementById("hero-slideshow");
const countdownEl = document.getElementById("countdown");
const rsvpDeadlineCountdownEl = document.getElementById("rsvp-deadline-countdown");

const memoriesContainer = document.querySelector(".memories");
const memoryCards = Array.from(document.querySelectorAll(".memory-card"));
const memoryPrefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const menuOverlay = document.getElementById("menu-overlay");
const sideMenu = document.getElementById("site-menu");
const sideMenuLinks = document.querySelectorAll(".side-nav a");
const homeSections = Array.from(document.querySelectorAll("#inicio, #nossa-historia"));
const tabSections = Array.from(document.querySelectorAll(".tab-section"));
const tabSectionLinks = Array.from(document.querySelectorAll("[data-tab-link]"));
const siteFooter = document.querySelector(".site-footer");

const rsvpForm = document.getElementById("rsvp-form");
const rsvpFeedback = document.getElementById("rsvp-feedback");
const guestNameInput = document.getElementById("guest-name");
const guestWhatsappInput = document.getElementById("guest-whatsapp");
const guestPresenceSelect = document.getElementById("guest-presence");
const guestMatchFeedback = document.getElementById("guest-match-feedback");
const matchedGuestNameInput = document.getElementById("matched-guest-name");
const rsvpSubmitButton = document.getElementById("rsvp-submit");
const giftShop = document.getElementById("gift-shop");
const giftModal = document.getElementById("gift-modal");
const giftModalTitle = document.getElementById("gift-modal-title");
const giftModalCopy = document.getElementById("gift-modal-copy");
const giftBuyerNameInput = document.getElementById("gift-buyer-name");
const giftSaveBuyerButton = document.getElementById("gift-save-buyer");
const giftPayment = document.getElementById("gift-payment");
const giftCardPayment = document.getElementById("gift-card-payment");
const giftQrPlaceholder = document.getElementById("gift-qr-placeholder");
const giftPixCopyInput = document.getElementById("gift-pix-copy");
const giftCopyPixButton = document.getElementById("gift-copy-pix");
const giftFeedback = document.getElementById("gift-feedback");
const giftCloseButtons = document.querySelectorAll("[data-close-gift-modal]");

const memorySlotsDesktop = [
  { left: 30, top: 15, rotate: -5 },
  { left: 47, top: 12, rotate: 4 },
  { left: 64, top: 15, rotate: -4 },
  { left: 26, top: 33, rotate: 5 },
  { left: 42, top: 30, rotate: -3 },
  { left: 59, top: 31, rotate: 4 },
  { left: 75, top: 34, rotate: -4 },
  { left: 31, top: 52, rotate: 5 },
  { left: 49, top: 50, rotate: -2 },
  { left: 67, top: 52, rotate: 3 },
  { left: 37, top: 70, rotate: -5 },
  { left: 56, top: 71, rotate: 4 },
];

const memoryMetaCache = new Map();
let memoryQueue = [];
let memoryCycleIndex = 0;
let memoryZIndex = 8;
let memoryCycleTimer = null;
let memoryDriftTimer = null;
let memoryCycleLocked = false;
let memorySectionVisible = true;
let memoryCardSlotIndices = [];
let heroCollageRenderToken = 0;

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function padNumber(value) {
  return String(value).padStart(3, "0");
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getMeaningfulTokens(value) {
  const ignoredTokens = new Set(["de", "da", "do", "das", "dos", "e"]);
  return normalizeText(value)
    .split(" ")
    .filter((token) => token.length >= 2 && !ignoredTokens.has(token));
}

function slugify(value) {
  return getMeaningfulTokens(value).join("-");
}

function readStoredList(key) {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(key) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function writeStoredList(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Não foi possível salvar no armazenamento local.", error);
  }
}

function shuffle(array) {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function isDesktopMemories() {
  return !window.matchMedia("(max-width: 920px)").matches;
}

function redirectLegacyHashRoute() {
  const route = LEGACY_HASH_ROUTES[window.location.hash];
  if (!route) return;

  const pathname = window.location.pathname;
  const isHomePage = pathname.endsWith("/") || pathname.endsWith("/index.html");
  if (isHomePage) {
    window.location.replace(route);
  }
}

function getHeroCollagePhotoCount(width, height) {
  const isMobile = width < 760;
  const minCount = isMobile ? HERO_COLLAGE_MIN_MOBILE : HERO_COLLAGE_MIN_DESKTOP;
  const densityCount = Math.round((width * height) / HERO_COLLAGE_DENSITY);
  return clamp(densityCount, minCount, HERO_COLLAGE_MAX);
}

function overlapArea(rectA, rectB) {
  const x = Math.max(
    0,
    Math.min(rectA.x + rectA.width, rectB.x + rectB.width) - Math.max(rectA.x, rectB.x)
  );
  const y = Math.max(
    0,
    Math.min(rectA.y + rectA.height, rectB.y + rectB.height) -
      Math.max(rectA.y, rectB.y)
  );
  return x * y;
}

function buildHeroCollageSequence(count) {
  const memoryPool = buildMemoryPool();
  const featuredIds = new Set(HERO_FEATURED_MEMORY_IDS);
  const featuredPhotos = HERO_FEATURED_MEMORY_IDS.map((id) =>
    memoryPool.find((photo) => photo.id === id)
  ).filter(Boolean);
  const selected = featuredPhotos.slice(0, count);
  let batch = shuffle(memoryPool.filter((photo) => !featuredIds.has(photo.id)));
  let cursor = 0;

  while (selected.length < count) {
    if (cursor >= batch.length) {
      batch = shuffle(memoryPool);
      cursor = 0;
    }
    selected.push(batch[cursor]);
    cursor += 1;
  }
  return selected;
}

function getSafePhotoRatio(photo) {
  const safeWidth = Number(photo?.width) || 0;
  const safeHeight = Number(photo?.height) || 0;
  if (safeWidth <= 0 || safeHeight <= 0) return 1;
  return clamp(safeWidth / safeHeight, 0.58, 1.85);
}

function buildHeroTileLayout(photos, width, height) {
  const count = photos.length;
  const isMobile = width < 760;
  const minWidth = isMobile ? 86 : 124;
  const maxWidth = isMobile ? 156 : 240;
  const maxRotation = isMobile ? 18 : 26;
  const placed = [];

  for (let i = 0; i < count; i += 1) {
    let bestCandidate = null;
    let bestPenalty = Number.POSITIVE_INFINITY;

    for (let attempt = 0; attempt < 60; attempt += 1) {
      const tileWidth = randomBetween(minWidth, maxWidth);
      const aspectRatio = getSafePhotoRatio(photos[i]);
      const tileHeight = tileWidth / aspectRatio;
      const x = randomBetween(-tileWidth * 0.28, width - tileWidth * 0.72);
      const y = randomBetween(-tileHeight * 0.2, height - tileHeight * 0.82);
      const rotate = randomBetween(-maxRotation, maxRotation);

      const candidate = { x, y, width: tileWidth, height: tileHeight, rotate };

      let heavyOverlaps = 0;
      let penalty = 0;
      for (let j = 0; j < placed.length; j += 1) {
        const overlap = overlapArea(candidate, placed[j]);
        if (!overlap) continue;
        const minArea = Math.min(
          candidate.width * candidate.height,
          placed[j].width * placed[j].height
        );
        const ratio = overlap / minArea;
        penalty += ratio;
        if (ratio > HERO_COLLAGE_HEAVY_OVERLAP_RATIO) {
          heavyOverlaps += 1;
          if (heavyOverlaps > HERO_COLLAGE_MAX_HEAVY_OVERLAPS) {
            penalty = Number.POSITIVE_INFINITY;
            break;
          }
        }
      }

      if (penalty < bestPenalty) {
        bestPenalty = penalty;
        bestCandidate = candidate;
        if (bestPenalty < 0.5) break;
      }
    }

    const fallbackRatio = getSafePhotoRatio(photos[i]);
    placed.push(
      bestCandidate || {
        x: randomBetween(0, Math.max(0, width - minWidth)),
        y: randomBetween(0, Math.max(0, height - minWidth)),
        width: minWidth,
        height: minWidth / fallbackRatio,
        rotate: randomBetween(-12, 12),
      }
    );
  }

  return placed;
}

async function renderHeroCollage() {
  if (!heroCollage) return;

  const renderToken = ++heroCollageRenderToken;
  const width = heroCollage.clientWidth || window.innerWidth;
  const height = heroCollage.clientHeight || window.innerHeight;
  const tileCount = getHeroCollagePhotoCount(width, height);
  const photos = buildHeroCollageSequence(tileCount);
  const resolvedPhotos = await Promise.all(
    photos.map(async (photo) => {
      const resolved = await resolveMemorySource(photo);
      if (resolved.ok) return resolved;
      return {
        ...photo,
        ok: false,
        width: 1200,
        height: 900,
        resolvedSrc: photo.src,
      };
    })
  );

  if (renderToken !== heroCollageRenderToken) return;

  const layout = buildHeroTileLayout(resolvedPhotos, width, height);
  const fragment = document.createDocumentFragment();

  resolvedPhotos.forEach((photo, index) => {
    const tile = layout[index];
    const card = document.createElement("figure");
    card.className = "hero-photo";
    const shortEdge = Math.min(tile.width, tile.height);
    const framePad = clamp(shortEdge * 0.04, 4, 11);
    const frameRadius = clamp(shortEdge * 0.058, 7, 16);
    const imageRadius = clamp(frameRadius - framePad * 0.42, 4, 11);
    const frameBorder = clamp(shortEdge * 0.0075, 1, 2.6);
    card.style.width = `${Math.round(tile.width)}px`;
    card.style.height = `${Math.round(tile.height)}px`;
    card.style.setProperty("--photo-x", `${Math.round(tile.x)}px`);
    card.style.setProperty("--photo-y", `${Math.round(tile.y)}px`);
    card.style.setProperty("--photo-r", `${tile.rotate.toFixed(2)}deg`);
    card.style.setProperty("--hero-frame-pad", `${framePad.toFixed(1)}px`);
    card.style.setProperty("--hero-frame-radius", `${frameRadius.toFixed(1)}px`);
    card.style.setProperty("--hero-image-radius", `${imageRadius.toFixed(1)}px`);
    card.style.setProperty("--hero-frame-border", `${frameBorder.toFixed(2)}px`);
    card.style.zIndex = String(index + 1);

    const img = document.createElement("img");
    img.src = photo.resolvedSrc || photo.src;
    img.alt = "";
    img.decoding = "async";
    img.loading = index < 22 ? "eager" : "lazy";
    card.appendChild(img);
    fragment.appendChild(card);
  });

  heroCollage.replaceChildren(fragment);
}

function initHeroCollage() {
  if (!heroCollage) return;

  void renderHeroCollage();

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      void renderHeroCollage();
    }, 220);
  });
}

function initHeroSlideshow() {
  if (!heroSlideshow) return;

  const slides = HERO_FEATURED_MEMORY_IDS.map((id) => ({
    id,
    src: `${MEMORY_OPTIMIZED_BASE_PATH}/memoria-${id}.jpg`,
    label: MEMORY_DATE_LABELS[id] || "Foto do casal",
  }));

  const fragment = document.createDocumentFragment();
  slides.forEach((slide, index) => {
    const figure = document.createElement("figure");
    figure.className = `hero-slide${index === 0 ? " is-active" : ""}`;
    figure.setAttribute("aria-hidden", "true");

    const img = document.createElement("img");
    img.src = slide.src;
    img.alt = "";
    img.decoding = "async";
    img.loading = index === 0 ? "eager" : "lazy";
    figure.appendChild(img);
    fragment.appendChild(figure);
  });

  heroSlideshow.replaceChildren(fragment);

  if (slides.length <= 1 || memoryPrefersReducedMotion.matches) return;

  let activeIndex = 0;
  const renderedSlides = Array.from(heroSlideshow.querySelectorAll(".hero-slide"));
  window.setInterval(() => {
    renderedSlides[activeIndex]?.classList.remove("is-active");
    activeIndex = (activeIndex + 1) % renderedSlides.length;
    renderedSlides[activeIndex]?.classList.add("is-active");
  }, HERO_SLIDE_DURATION_MS);
}

function animateHeroMonogram() {
  if (!heroMonogram) return;
  const maxScroll = window.innerHeight * 0.9;
  const progress = Math.min(window.scrollY / maxScroll, 1);
  const yOffset = progress * 140;
  const scale = 1 - progress * 0.12;
  heroMonogram.style.transform = `translate(-50%, calc(-50% - ${yOffset}px)) scale(${scale})`;
  heroMonogram.style.opacity = String(0.96 - progress * 0.68);
}

function initHeroScroll() {
  animateHeroMonogram();
  updateHomeTopbarTheme();
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        animateHeroMonogram();
        updateHomeTopbarTheme();
        ticking = false;
      });
      ticking = true;
    }
  });
}

function updateHomeTopbarTheme() {
  if (!document.body.classList.contains("home-page")) return;
  const hero = document.getElementById("inicio");
  if (!hero) return;
  const shouldUseLightTopbar = window.scrollY < hero.offsetHeight - 96;
  document.body.classList.toggle("is-over-hero", shouldUseLightTopbar);
}

function initReveals() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

function buildMemoryPool() {
  return Array.from({ length: MEMORY_TOTAL }, (_, index) => {
    const id = padNumber(index + 1);
    return {
      id,
      label: MEMORY_DATE_LABELS[id] || `Foto ${id}`,
      src: `${MEMORY_OPTIMIZED_BASE_PATH}/memoria-${id}.jpg`,
    };
  });
}

function preloadMemorySource(src) {
  if (memoryMetaCache.has(src)) {
    return memoryMetaCache.get(src);
  }

  const metaPromise = new Promise((resolve) => {
    const img = new Image();
    let done = false;

    const finish = (ok) => {
      if (done) return;
      done = true;
      resolve({
        ok,
        width: img.naturalWidth || img.width || 0,
        height: img.naturalHeight || img.height || 0,
      });
    };

    img.onload = () => finish(true);
    img.onerror = () => finish(false);
    img.decoding = "async";
    img.src = src;
    if (img.decode) {
      img.decode().then(() => finish(true)).catch(() => {});
    }
  });

  memoryMetaCache.set(src, metaPromise);
  return metaPromise;
}

async function resolveMemorySource(item) {
  const meta = await preloadMemorySource(item.src);
  if (meta.ok) {
    return { ...item, ...meta, resolvedSrc: item.src };
  }
  return { ...item, ok: false, width: 0, height: 0, resolvedSrc: "" };
}

function refillMemoryQueue() {
  const featuredIds = new Set(HERO_FEATURED_MEMORY_IDS);
  memoryQueue = shuffle(buildMemoryPool().filter((item) => !featuredIds.has(item.id)));
}

function warmUpMemoryQueue(count = MEMORY_PRELOAD_COUNT) {
  if (!memoryQueue.length) return;
  const start = Math.max(0, memoryQueue.length - count);
  for (let i = start; i < memoryQueue.length; i += 1) {
    preloadMemorySource(memoryQueue[i].src);
  }
}

function getNextMemoryItem() {
  if (!memoryQueue.length) {
    refillMemoryQueue();
    warmUpMemoryQueue();
  }
  const item = memoryQueue.pop();
  if (memoryQueue.length <= MEMORY_PRELOAD_COUNT) {
    warmUpMemoryQueue();
  }
  return item;
}

async function getNextValidMemoryItem(maxAttempts = MEMORY_TOTAL) {
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const candidate = getNextMemoryItem();
    const resolved = await resolveMemorySource(candidate);
    if (resolved.ok) return resolved;
  }
  return null;
}

function computePhotoDisplaySize(width, height) {
  const safeWidth = width || 1200;
  const safeHeight = height || 900;
  const ratio = safeWidth / safeHeight;
  const targetLongEdge = 230;

  let displayWidth;
  let displayHeight;

  if (ratio >= 1) {
    displayWidth = targetLongEdge;
    displayHeight = targetLongEdge / ratio;
  } else {
    displayHeight = targetLongEdge;
    displayWidth = targetLongEdge * ratio;
  }

  const shortEdge = Math.min(displayWidth, displayHeight);
  if (shortEdge < 128) {
    const scale = 128 / shortEdge;
    displayWidth *= scale;
    displayHeight *= scale;
  }

  return {
    width: Math.round(clamp(displayWidth, 128, 300)),
    height: Math.round(clamp(displayHeight, 128, 340)),
  };
}

function pickSlotWithJitter(slotIndex) {
  const base = memorySlotsDesktop[slotIndex];
  if (!base) return null;
  return {
    left: base.left + randomBetween(-1.8, 1.8),
    top: base.top + randomBetween(-1.8, 1.8),
    rotate: base.rotate + randomBetween(-1.4, 1.4),
  };
}

function getOccupiedSlotSet(excludeCardIndex = -1) {
  const occupied = new Set();
  memoryCardSlotIndices.forEach((slotIndex, cardIndex) => {
    if (cardIndex === excludeCardIndex) return;
    if (Number.isInteger(slotIndex)) occupied.add(slotIndex);
  });
  return occupied;
}

function chooseSlotIndexForCard(cardIndex, forceNewSlot = false) {
  const currentSlot = memoryCardSlotIndices[cardIndex];
  const occupied = getOccupiedSlotSet(cardIndex);
  let available = [];

  for (let i = 0; i < memorySlotsDesktop.length; i += 1) {
    if (!occupied.has(i)) available.push(i);
  }

  if (!available.length) {
    return Math.floor(Math.random() * memorySlotsDesktop.length);
  }

  if (forceNewSlot && Number.isInteger(currentSlot) && available.length > 1) {
    available = available.filter((slotIndex) => slotIndex !== currentSlot);
  }

  if (
    !forceNewSlot &&
    Number.isInteger(currentSlot) &&
    available.includes(currentSlot)
  ) {
    return currentSlot;
  }

  return available[Math.floor(Math.random() * available.length)];
}

function positionMemoryCard(card, cardIndex, bringToFront = false, forceNewSlot = false) {
  if (!card || !memoriesContainer) return;
  if (!isDesktopMemories()) return;

  const slotIndex = chooseSlotIndexForCard(cardIndex, forceNewSlot);
  const slot = pickSlotWithJitter(slotIndex);
  if (!slot) return;
  memoryCardSlotIndices[cardIndex] = slotIndex;

  const containerWidth = memoriesContainer.clientWidth;
  const containerHeight = memoriesContainer.clientHeight;
  const cardWidth = card.offsetWidth || 220;
  const cardHeight = card.offsetHeight || 280;

  const centerX = (slot.left / 100) * containerWidth;
  const centerY = (slot.top / 100) * containerHeight;

  const x = clamp(centerX - cardWidth / 2, 0, Math.max(0, containerWidth - cardWidth));
  const y = clamp(centerY - cardHeight / 2, 0, Math.max(0, containerHeight - cardHeight));

  card.style.setProperty("--memory-x", `${Math.round(x)}px`);
  card.style.setProperty("--memory-y", `${Math.round(y)}px`);
  card.style.setProperty("--memory-rotate", `${slot.rotate.toFixed(2)}deg`);

  if (bringToFront) {
    memoryZIndex += 1;
    card.style.zIndex = String(memoryZIndex);
  }
}

function resetMemoryDrift() {
  memoryCards.forEach((card) => {
    card.style.setProperty("--memory-float-x", "0px");
    card.style.setProperty("--memory-float-y", "0px");
    card.style.setProperty("--memory-float-rotate", "0deg");
  });
}

function applyMemoryDrift() {
  if (!isDesktopMemories()) {
    resetMemoryDrift();
    return;
  }

  memoryCards.forEach((card, index) => {
    const factor = 0.65 + (index % 4) * 0.1;
    const driftX = randomBetween(-MEMORY_DRIFT_MAX_PX, MEMORY_DRIFT_MAX_PX) * factor;
    const driftY = randomBetween(-MEMORY_DRIFT_MAX_PX * 0.75, MEMORY_DRIFT_MAX_PX * 0.75) * factor;
    const driftRotate =
      randomBetween(-MEMORY_DRIFT_MAX_ROTATE_DEG, MEMORY_DRIFT_MAX_ROTATE_DEG) *
      (0.7 + (index % 3) * 0.12);

    card.style.setProperty("--memory-float-x", `${driftX.toFixed(2)}px`);
    card.style.setProperty("--memory-float-y", `${driftY.toFixed(2)}px`);
    card.style.setProperty("--memory-float-rotate", `${driftRotate.toFixed(2)}deg`);
  });
}

async function setMemoryCardData(card, cardIndex, resolvedItem, animated = true) {
  if (!card || !resolvedItem) return;
  const image = card.querySelector("[data-memory-photo]");
  const caption = card.querySelector("p");
  if (!image || !caption) return;

  if (animated) {
    card.classList.add("is-fading");
    image.classList.add("is-changing");
    await wait(MEMORY_FADE_OUT_MS);
  }

  const size = computePhotoDisplaySize(resolvedItem.width, resolvedItem.height);
  image.style.width = `${size.width}px`;
  image.style.height = `${size.height}px`;
  image.src = resolvedItem.resolvedSrc;
  image.alt = resolvedItem.label;
  caption.textContent = resolvedItem.label;
  card.classList.remove("memory-card-empty");

  image.onload = () => card.classList.remove("memory-card-empty");
  image.onerror = () => card.classList.add("memory-card-empty");

  positionMemoryCard(card, cardIndex, true, true);

  window.requestAnimationFrame(() => {
    card.classList.remove("is-fading");
    image.classList.remove("is-changing");
  });
}

function clearMemoryCycle() {
  if (memoryCycleTimer) {
    window.clearInterval(memoryCycleTimer);
    memoryCycleTimer = null;
  }

  if (memoryDriftTimer) {
    window.clearInterval(memoryDriftTimer);
    memoryDriftTimer = null;
  }
}

function startMemoryCycle() {
  clearMemoryCycle();
  if (memoryPrefersReducedMotion.matches || !memorySectionVisible || !isDesktopMemories()) {
    resetMemoryDrift();
    return;
  }

  memoryCycleTimer = window.setInterval(async () => {
    if (document.hidden || memoryCycleLocked) return;
    if (!memoryCards.length) return;

    memoryCycleLocked = true;
    const cardIndex = memoryCycleIndex % memoryCards.length;
    const card = memoryCards[cardIndex];
    const nextResolved = await getNextValidMemoryItem();
    if (nextResolved) {
      await setMemoryCardData(card, cardIndex, nextResolved, true);
      memoryCycleIndex += 1;
    }
    memoryCycleLocked = false;
  }, MEMORY_IMAGE_SWAP_MS);

  applyMemoryDrift();
  memoryDriftTimer = window.setInterval(applyMemoryDrift, MEMORY_DRIFT_MS);
}

async function initRandomMemories() {
  if (!memoryCards.length) return;

  refillMemoryQueue();
  warmUpMemoryQueue();

  for (let i = 0; i < memoryCards.length; i += 1) {
    const card = memoryCards[i];
    const resolved = await getNextValidMemoryItem();
    if (resolved) {
      await setMemoryCardData(card, i, resolved, false);
    }
  }

  if (memoriesContainer && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        memorySectionVisible = entries.some((entry) => entry.isIntersecting);
        if (memorySectionVisible) {
          startMemoryCycle();
        } else {
          clearMemoryCycle();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(memoriesContainer);
  } else {
    startMemoryCycle();
  }

  window.addEventListener("resize", () => {
    if (isDesktopMemories()) {
      memoryCards.forEach((card, index) => {
        positionMemoryCard(card, index, false, false);
      });
    }
    startMemoryCycle();
  });

  const motionListener = () => startMemoryCycle();
  if (memoryPrefersReducedMotion.addEventListener) {
    memoryPrefersReducedMotion.addEventListener("change", motionListener);
  } else if (memoryPrefersReducedMotion.addListener) {
    memoryPrefersReducedMotion.addListener(motionListener);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      clearMemoryCycle();
      return;
    }
    startMemoryCycle();
  });

  startMemoryCycle();
}

function setMenuState(isOpen) {
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  sideMenu?.setAttribute("aria-hidden", String(!isOpen));
}

function initMenu() {
  if (!menuToggle || !sideMenu || !menuOverlay) return;
  setMenuState(false);

  menuToggle.addEventListener("click", () => {
    const shouldOpen = !document.body.classList.contains("menu-open");
    setMenuState(shouldOpen);
  });

  menuClose?.addEventListener("click", () => setMenuState(false));
  menuOverlay.addEventListener("click", () => setMenuState(false));
  sideMenuLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
  });
}

function setActiveMenuLink(sectionId = "") {
  tabSectionLinks.forEach((link) => {
    const isCurrent = sectionId && link.getAttribute("href") === `#${sectionId}`;
    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function hideTabSections() {
  tabSections.forEach((section) => {
    section.hidden = true;
    section.classList.remove("is-active");
  });
  setActiveMenuLink();
}

function showHomeView(shouldScroll = true) {
  homeSections.forEach((section) => {
    section.hidden = false;
    section.classList.remove("is-active");
  });
  tabSections.forEach((section) => {
    section.hidden = true;
    section.classList.remove("is-active");
  });
  siteFooter?.removeAttribute("hidden");
  setActiveMenuLink();

  if (shouldScroll) {
    document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function showExclusiveSection(sectionId, shouldScroll = true) {
  const target = document.getElementById(sectionId);
  const isStory = sectionId === "nossa-historia";
  const isTabSection = target?.classList.contains("tab-section");
  if (!target || (!isStory && !isTabSection)) return false;

  document.getElementById("inicio")?.setAttribute("hidden", "");
  document.getElementById("nossa-historia").hidden = !isStory;

  tabSections.forEach((section) => {
    const isTarget = isTabSection && section === target;
    section.hidden = !isTarget;
    section.classList.toggle("is-active", isTarget);
  });

  target.classList.toggle("is-active", true);
  siteFooter?.setAttribute("hidden", "");
  setActiveMenuLink(sectionId);

  if (shouldScroll) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return true;
}

function initSectionTabs() {
  if (!tabSections.length) return;

  sideMenuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href") || "";
      if (!href.startsWith("#")) return;

      const sectionId = href.slice(1);
      const openedExclusiveSection = showExclusiveSection(sectionId, true);
      if (openedExclusiveSection) {
        event.preventDefault();
        window.history.pushState(null, "", href);
        return;
      }

      showHomeView(true);
    });
  });

  const initialSectionId = window.location.hash.slice(1);
  if (initialSectionId) {
    const openedInitialSection = showExclusiveSection(initialSectionId, false);
    if (openedInitialSection) {
      window.requestAnimationFrame(() => {
        document
          .getElementById(initialSectionId)
          ?.scrollIntoView({ behavior: "auto", block: "start" });
      });
    } else {
      showHomeView(false);
    }
  } else {
    showHomeView(false);
  }

  window.addEventListener("hashchange", () => {
    const sectionId = window.location.hash.slice(1);
    if (!sectionId) {
      showHomeView(true);
      return;
    }

    if (!showExclusiveSection(sectionId, true)) {
      showHomeView(true);
    }
  });
}

function updateCountdown() {
  if (!countdownEl) return;
  const weddingDate = new Date("2026-10-31T14:00:00-03:00");
  const now = new Date();
  const diff = weddingDate.getTime() - now.getTime();

  if (diff <= 0) {
    countdownEl.textContent = "hoje";
    return;
  }

  const dayMs = 1000 * 60 * 60 * 24;
  const hourMs = 1000 * 60 * 60;
  const minuteMs = 1000 * 60;
  const days = Math.floor(diff / dayMs);
  const hours = Math.floor((diff % dayMs) / hourMs);
  const minutes = Math.floor((diff % hourMs) / minuteMs);
  countdownEl.textContent = `${days} dias • ${hours}h • ${minutes}min`;
}

function updateRsvpDeadlineCountdown() {
  if (!rsvpDeadlineCountdownEl) return;

  const deadlineDate = new Date("2026-09-25T23:59:59-03:00");
  const now = new Date();
  const diff = deadlineDate.getTime() - now.getTime();

  if (diff <= 0) {
    rsvpDeadlineCountdownEl.textContent = "prazo encerrado";
    return;
  }

  const dayMs = 1000 * 60 * 60 * 24;
  const hourMs = 1000 * 60 * 60;
  const minuteMs = 1000 * 60;
  const days = Math.floor(diff / dayMs);
  const hours = Math.floor((diff % dayMs) / hourMs);
  const minutes = Math.floor((diff % hourMs) / minuteMs);
  rsvpDeadlineCountdownEl.textContent = `${days} dias • ${hours}h • ${minutes}min`;
}

function scoreGuestMatch(queryTokens, guest) {
  let score = 0;
  queryTokens.forEach((queryToken) => {
    const matchedToken = guest.tokens.find(
      (guestToken) =>
        guestToken === queryToken ||
        guestToken.startsWith(queryToken) ||
        queryToken.startsWith(guestToken)
    );
    if (matchedToken) {
      score += matchedToken === queryToken ? 2 : 1;
    }
  });
  return score;
}

function findGuestMatch(value) {
  const normalizedValue = normalizeText(value);
  const queryTokens = getMeaningfulTokens(value);

  if (normalizedValue.length < 3 || queryTokens.length === 0) {
    return { status: "empty" };
  }

  const directMatches = GUEST_INDEX.filter(
    (guest) =>
      guest.normalized === normalizedValue ||
      (normalizedValue.length >= 5 && guest.normalized.includes(normalizedValue)) ||
      (normalizedValue.length >= 8 && normalizedValue.includes(guest.normalized))
  );

  if (directMatches.length === 1) {
    return { status: "matched", guest: directMatches[0] };
  }

  const scoredMatches = GUEST_INDEX.map((guest) => ({
    guest,
    score: scoreGuestMatch(queryTokens, guest),
  }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  if (scoredMatches.length === 0) {
    return { status: "not-found" };
  }

  const bestScore = scoredMatches[0].score;
  const bestMatches = scoredMatches.filter(({ score }) => score === bestScore);
  const requiredScore = queryTokens.length === 1 ? 2 : 3;

  if (bestScore < requiredScore) {
    return { status: "not-found" };
  }

  if (bestMatches.length > 1) {
    return { status: "ambiguous", matches: bestMatches.map(({ guest }) => guest) };
  }

  return { status: "matched", guest: bestMatches[0].guest };
}

function getConfirmedGuestKeys() {
  return readStoredList(RSVP_CONFIRMED_STORAGE_KEY);
}

function markGuestAsConfirmed(guestKey) {
  const confirmed = getConfirmedGuestKeys();
  if (!confirmed.includes(guestKey)) {
    confirmed.push(guestKey);
    writeStoredList(RSVP_CONFIRMED_STORAGE_KEY, confirmed);
  }
}

function isGuestAlreadyConfirmed(guestKey) {
  return getConfirmedGuestKeys().includes(guestKey);
}

function setRsvpControlsEnabled(isEnabled) {
  if (guestPresenceSelect) guestPresenceSelect.disabled = !isEnabled;
  if (rsvpSubmitButton) rsvpSubmitButton.disabled = !isEnabled;
}

function updateGuestMatchState() {
  if (!guestNameInput || !guestMatchFeedback || !matchedGuestNameInput) return null;

  const match = findGuestMatch(guestNameInput.value);
  guestMatchFeedback.className = "field-hint";
  matchedGuestNameInput.value = "";
  setRsvpControlsEnabled(false);

  if (match.status === "empty") {
    guestMatchFeedback.textContent = "Digite seu nome para buscarmos na lista de convidados.";
    return match;
  }

  if (match.status === "not-found") {
    guestMatchFeedback.textContent =
      "Não encontramos esse nome na lista. Confira se digitou nome ou sobrenome corretamente.";
    guestMatchFeedback.classList.add("error");
    return match;
  }

  if (match.status === "ambiguous") {
    const names = match.matches.slice(0, 3).map((guest) => guest.name).join(", ");
    guestMatchFeedback.textContent = `Encontramos mais de uma possibilidade (${names}). Digite também o sobrenome.`;
    guestMatchFeedback.classList.add("error");
    return match;
  }

  if (isGuestAlreadyConfirmed(match.guest.key)) {
    guestMatchFeedback.textContent =
      `${match.guest.name} já possui confirmação registrada.`;
    guestMatchFeedback.classList.add("error");
    return { ...match, status: "duplicate" };
  }

  matchedGuestNameInput.value = match.guest.name;
  guestMatchFeedback.textContent = `Convidado encontrado: ${match.guest.name}. Agora você pode confirmar.`;
  guestMatchFeedback.classList.add("success");
  setRsvpControlsEnabled(true);
  return match;
}

async function submitToWebhook(entry) {
  if (!RSVP_WEBHOOK_URL) return;
  await fetch(RSVP_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  });
}

function hasConfiguredEmail(email) {
  return Boolean(
    email &&
      email.includes("@") &&
      !email.includes("@exemplo.com") &&
      !email.includes("seu-email")
  );
}

async function sendRsvpEmail(entry) {
  if (!hasConfiguredEmail(RSVP_DESTINATION_EMAIL)) {
    throw new Error("Destino de e-mail do RSVP não configurado.");
  }

  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(
    RSVP_DESTINATION_EMAIL
  )}`;

  const payload = {
    _subject: `RSVP Casamento - ${entry.guestName}`,
    _cc: SECONDARY_DESTINATION_EMAIL,
    nome: entry.guestName,
    convidado_reconhecido: entry.matchedGuestName,
    whatsapp: entry.whatsapp,
    presenca: entry.presence === "sim" ? "Sim" : "Não",
    recado: entry.message || "Sem recado",
    data_envio: entry.createdAt,
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Falha ao enviar confirmação por e-mail.");
  }
}

function initRsvpForm() {
  if (!rsvpForm || !rsvpFeedback) return;

  setRsvpControlsEnabled(false);
  guestNameInput?.addEventListener("input", updateGuestMatchState);

  rsvpForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const match = updateGuestMatchState();
    const formData = new FormData(rsvpForm);
    const guestName = String(formData.get("guestName") || "").trim();
    const matchedGuestName = String(formData.get("matchedGuestName") || "").trim();
    const whatsapp = String(formData.get("whatsapp") || "").trim();
    const presence = String(formData.get("presence") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!match || match.status !== "matched" || !matchedGuestName) {
      rsvpFeedback.textContent =
        "Digite um nome que esteja na lista de convidados antes de confirmar.";
      rsvpFeedback.className = "feedback error";
      return;
    }

    if (!guestName || !whatsapp || !presence) {
      rsvpFeedback.textContent = "Preencha nome, WhatsApp e presença para continuar.";
      rsvpFeedback.className = "feedback error";
      return;
    }

    const entry = {
      id: `${Date.now()}_${Math.random().toString(16).slice(2)}`,
      guestName,
      matchedGuestName,
      guestKey: match.guest.key,
      whatsapp,
      presence,
      message,
      createdAt: new Date().toISOString(),
    };

    try {
      await sendRsvpEmail(entry);
      await submitToWebhook(entry);
      markGuestAsConfirmed(entry.guestKey);
      rsvpForm.reset();
      updateGuestMatchState();
      rsvpFeedback.textContent =
        "Confirmação enviada com sucesso. Obrigado por responder.";
      rsvpFeedback.className = "feedback success";
    } catch (error) {
      rsvpFeedback.textContent =
        "Não foi possível enviar por e-mail agora. Precisamos configurar o e-mail real dos noivos no site.";
      rsvpFeedback.className = "feedback error";
      console.error(error);
    }
  });
}

function buildGiftProductId(product) {
  return slugify(product.title);
}

function getGiftBuyerName() {
  try {
    return window.localStorage.getItem(GIFT_BUYER_STORAGE_KEY) || "";
  } catch (error) {
    return "";
  }
}

function saveGiftBuyerName(buyerName) {
  try {
    window.localStorage.setItem(GIFT_BUYER_STORAGE_KEY, buyerName);
  } catch (error) {
    console.warn("Não foi possível salvar o nome do presenteador.", error);
  }
}

function showGiftShop() {
  if (!giftShop) return;
  giftShop.hidden = false;
}

function renderGiftProducts() {
  if (!giftShop) return;

  giftShop.innerHTML = GIFT_PRODUCTS.map((product, index) => {
    const productId = buildGiftProductId(product);
    const mediaContent = product.image
      ? `<img src="${product.image}" alt="${product.title}" loading="lazy" />`
      : `<span>${product.initial}</span>`;
    return `
      <article class="gift-product-card reveal" style="transition-delay: ${Math.min(index * 0.025, 0.24)}s">
        <div class="gift-product-media">${mediaContent}</div>
        <h3>${product.title}</h3>
        <p class="gift-price">${product.price}</p>
        <button class="btn btn-primary" type="button" data-gift-action data-product-id="${productId}">Comprar</button>
      </article>
    `;
  }).join("");

  initReveals();
}

function getGiftProductById(productId) {
  return GIFT_PRODUCTS.find((product) => buildGiftProductId(product) === productId);
}

function setGiftFeedback(message, type = "") {
  if (!giftFeedback) return;
  giftFeedback.textContent = message;
  giftFeedback.className = type ? `feedback ${type}` : "feedback";
}

function setGiftPaymentDetails() {
  if (!giftCardPayment || !giftPixCopyInput || !giftQrPlaceholder) return;

  giftCardPayment.href = GIFT_CARD_PAYMENT_URL || "#";
  giftCardPayment.classList.toggle("is-disabled", !GIFT_CARD_PAYMENT_URL);
  giftCardPayment.textContent = GIFT_CARD_PAYMENT_URL
    ? "Pagar com cartão"
    : "Link de cartão em breve";
  giftPixCopyInput.value = GIFT_PIX_COPY_TEXT;
  giftQrPlaceholder.innerHTML = GIFT_PIX_QR_IMAGE
    ? `<img src="${GIFT_PIX_QR_IMAGE}" alt="QR Code Pix" />`
    : "<span>QR Code Pix em breve</span>";
}

function openGiftIdentityModal() {
  if (!giftModal || !giftModalTitle || !giftBuyerNameInput || !giftPayment) return;

  giftModal.dataset.mode = "identity";
  delete giftModal.dataset.productId;
  giftModalTitle.textContent = "Antes de ver a lista";
  giftModalCopy.textContent =
    "Digite seu nome uma única vez para liberar a nossa lista de presentes.";
  giftBuyerNameInput.value = getGiftBuyerName();
  giftBuyerNameInput.disabled = false;
  giftBuyerNameInput.hidden = false;
  giftSaveBuyerButton.hidden = false;
  giftPayment.hidden = true;
  giftCloseButtons.forEach((button) => {
    button.hidden = !getGiftBuyerName();
  });
  setGiftFeedback("");
  giftModal.classList.add("is-open");
  giftModal.setAttribute("aria-hidden", "false");
  window.setTimeout(() => giftBuyerNameInput.focus(), 80);
}

function openGiftModal(productId) {
  if (!giftModal || !giftModalTitle || !giftBuyerNameInput || !giftPayment) return;

  const product = getGiftProductById(productId);
  if (!product) return;

  const buyerName = getGiftBuyerName();
  giftModal.dataset.productId = productId;
  giftModal.dataset.mode = "payment";
  giftModalTitle.textContent = product.title;
  giftModalCopy.textContent = `${buyerName}, escolha abaixo como deseja seguir com esse presente.`;
  giftBuyerNameInput.value = buyerName;
  giftBuyerNameInput.hidden = true;
  giftBuyerNameInput.disabled = true;
  giftSaveBuyerButton.hidden = true;
  giftPayment.hidden = false;
  giftCloseButtons.forEach((button) => {
    button.hidden = false;
  });
  setGiftPaymentDetails();
  setGiftFeedback("");
  giftModal.classList.add("is-open");
  giftModal.setAttribute("aria-hidden", "false");
}

function closeGiftModal() {
  if (!giftModal) return;
  if (giftModal.dataset.mode === "identity" && !getGiftBuyerName()) return;
  giftModal.classList.remove("is-open");
  giftModal.setAttribute("aria-hidden", "true");
}

async function sendGiftEmail(entry) {
  if (!hasConfiguredEmail(GIFT_DESTINATION_EMAIL)) {
    throw new Error("Destino de e-mail dos presentes não configurado.");
  }

  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(
    GIFT_DESTINATION_EMAIL
  )}`;

  const payload = {
    _subject: `Presente escolhido - ${entry.productTitle}`,
    _cc: SECONDARY_DESTINATION_EMAIL,
    _template: "table",
    _captcha: "false",
    nome: entry.buyerName,
    item_clicado: entry.productTitle,
    valor: entry.productPrice,
    data_envio: entry.createdAt,
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Falha ao enviar presente por e-mail.");
  }
}

async function handleGiftPurchase(productId) {
  const product = getGiftProductById(productId);
  const buyerName = getGiftBuyerName();
  if (!product) return;

  if (!buyerName) {
    openGiftIdentityModal();
    return;
  }

  openGiftModal(productId);

  const entry = {
    productId,
    productTitle: product.title,
    productPrice: product.price,
    buyerName,
    createdAt: new Date().toISOString(),
  };

  try {
    await sendGiftEmail(entry);
    setGiftFeedback("Abrimos as opções de pagamento e avisamos os noivos sobre sua escolha.", "success");
  } catch (error) {
    setGiftFeedback(
      "As opções de pagamento estão abertas. Falta configurar o e-mail real dos noivos para receber o aviso automático.",
      "error"
    );
    console.error(error);
  }
}

function initGiftShop() {
  if (!giftShop || !giftModal) return;

  renderGiftProducts();
  if (getGiftBuyerName()) {
    showGiftShop();
  } else {
    openGiftIdentityModal();
  }

  giftShop.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-gift-action]");
    if (!actionButton) return;

    const productId = actionButton.dataset.productId;
    handleGiftPurchase(productId);
  });

  giftSaveBuyerButton?.addEventListener("click", () => {
    const buyerName = giftBuyerNameInput.value.trim();
    if (!buyerName) {
      setGiftFeedback("Digite seu nome para continuar.", "error");
      return;
    }

    saveGiftBuyerName(buyerName);
    showGiftShop();
    renderGiftProducts();
    closeGiftModal();
  });

  giftCopyPixButton?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(giftPixCopyInput.value);
      setGiftFeedback("Pix copia e cola copiado.", "success");
    } catch (error) {
      giftPixCopyInput.select();
      setGiftFeedback("Selecione e copie o Pix manualmente.", "error");
    }
  });

  giftCloseButtons.forEach((button) => {
    button.addEventListener("click", closeGiftModal);
  });

  giftModal.addEventListener("click", (event) => {
    if (event.target === giftModal) closeGiftModal();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeGiftModal();
  });
}

window.addEventListener("beforeunload", () => {
  clearMemoryCycle();
});

redirectLegacyHashRoute();
initHeroSlideshow();
initHeroCollage();
initHeroScroll();
initReveals();
initMenu();
initSectionTabs();
initRandomMemories();
initRsvpForm();
initGiftShop();
updateCountdown();
updateRsvpDeadlineCountdown();
window.setInterval(updateCountdown, 60 * 1000);
window.setInterval(updateRsvpDeadlineCountdown, 60 * 1000);
