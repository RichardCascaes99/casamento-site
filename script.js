const RSVP_DESTINATION_EMAIL = "seu-email@exemplo.com";
const RSVP_WEBHOOK_URL = "";

const MEMORY_TOTAL = 47;
const MEMORY_OPTIMIZED_BASE_PATH = "assets/photos-optimized";
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
};

const heroMonogram = document.getElementById("hero-monogram");
const heroCollage = document.getElementById("hero-collage");
const countdownEl = document.getElementById("countdown");

const memoriesContainer = document.querySelector(".memories");
const memoryCards = Array.from(document.querySelectorAll(".memory-card"));
const memoryPrefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const menuOverlay = document.getElementById("menu-overlay");
const sideMenu = document.getElementById("site-menu");
const sideMenuLinks = document.querySelectorAll(".side-nav a");

const rsvpForm = document.getElementById("rsvp-form");
const rsvpFeedback = document.getElementById("rsvp-feedback");

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
  const selected = [];
  let batch = shuffle(buildMemoryPool());
  let cursor = 0;

  while (selected.length < count) {
    if (cursor >= batch.length) {
      batch = shuffle(buildMemoryPool());
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
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        animateHeroMonogram();
        ticking = false;
      });
      ticking = true;
    }
  });
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
  memoryQueue = shuffle(buildMemoryPool());
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

function updateCountdown() {
  if (!countdownEl) return;
  const weddingDate = new Date("2026-10-31T14:15:00-03:00");
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

async function submitToWebhook(entry) {
  if (!RSVP_WEBHOOK_URL) return;
  await fetch(RSVP_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  });
}

async function sendRsvpEmail(entry) {
  const hasDestination =
    RSVP_DESTINATION_EMAIL && RSVP_DESTINATION_EMAIL.includes("@");
  if (!hasDestination) {
    throw new Error("Destino de e-mail do RSVP não configurado.");
  }

  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(
    RSVP_DESTINATION_EMAIL
  )}`;

  const payload = {
    _subject: `RSVP Casamento - ${entry.guestName}`,
    nome: entry.guestName,
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

  rsvpForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(rsvpForm);
    const guestName = String(formData.get("guestName") || "").trim();
    const presence = String(formData.get("presence") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!guestName || !presence) {
      rsvpFeedback.textContent = "Preencha nome e presença para continuar.";
      rsvpFeedback.className = "feedback error";
      return;
    }

    const entry = {
      id: `${Date.now()}_${Math.random().toString(16).slice(2)}`,
      guestName,
      presence,
      message,
      createdAt: new Date().toISOString(),
    };

    try {
      await sendRsvpEmail(entry);
      await submitToWebhook(entry);
      rsvpForm.reset();
      rsvpFeedback.textContent =
        "Confirmação enviada com sucesso. Obrigado por responder.";
      rsvpFeedback.className = "feedback success";
    } catch (error) {
      rsvpFeedback.textContent =
        "Não foi possível enviar por e-mail agora. Revise o e-mail de destino no script.";
      rsvpFeedback.className = "feedback error";
      console.error(error);
    }
  });
}

window.addEventListener("beforeunload", () => {
  clearMemoryCycle();
});

initHeroCollage();
initHeroScroll();
initReveals();
initMenu();
initRsvpForm();
updateCountdown();
window.setInterval(updateCountdown, 60 * 1000);
