/* =========================================================
   Lean Marquez – Art Gallery
   Sections: 1) data  2) helpers  3) theme + nav  4) typed headings
             5) gallery  6) footer year  7) background
   ========================================================= */

/* ---------- 1) DATA: edit these to add your own work ---------- */

// Put your drawings in the "images" folder and list them here.
// If a file is missing, a colorful placeholder is shown instead.
// "pos" = which part of the picture stays visible inside the frame (CSS object-position).
// Click any picture to see the whole drawing in the lightbox.
const ARTWORKS = [
  // slide 1: small, TALL, WIDE / small, small, small / small, small, WIDE
  {
    cat: "anime",
    src: "images/art-03.jpg",
    title: "Roronoa Zoro, One Piece",
    pos: "50% 32%",
  },
  {
    cat: "anime",
    src: "images/art-04.jpg",
    title: "Bruno Bucciarati, JoJo's Bizarre Adventure",
    pos: "42% 30%",
  },
  {
    cat: "portrait",
    src: "images/art-02.jpg",
    title: "Portrait No. 1",
    pos: "50% 40%",
  },
  {
    cat: "portrait",
    src: "images/art-05.jpg",
    title: "Portrait No. 2",
    pos: "35% 38%",
  },
  {
    cat: "anime",
    src: "images/art-10.jpg",
    title: "All Might, My Hero Academia",
    pos: "55% 35%",
  },
  {
    cat: "anime",
    src: "images/art-06.jpg",
    title: "Madara Uchiha, Naruto",
    pos: "50% 28%",
  },
  {
    cat: "anime",
    src: "images/art-01.jpg",
    title: "JoJo Bizzare Adventure, Joestar Family",
    pos: "45% 40%",
  },
  {
    cat: "portrait",
    src: "images/art-12.jpg",
    title: "Portrait No. 3",
    pos: "50% 25%",
  },
  {
    cat: "portrait",
    src: "images/art-16.jpg",
    title: "Portrait No. 4",
    pos: "50% 55%",
  },
  // slide 2
  {
    cat: "anime",
    src: "images/art-11.jpg",
    title: "Jotaro Kujo, JoJo's Bizarre Adventure",
    pos: "50% 30%",
  },
  {
    cat: "portrait",
    src: "images/art-17.jpg",
    title: "Portrait No. 5",
    pos: "45% 30%",
  },
  {
    cat: "anime",
    src: "images/art-08.jpg",
    title: "Kaido, One Piece",
    pos: "50% 38%",
  },
  {
    cat: "portrait",
    src: "images/art-14.jpg",
    title: "Portrait No. 6",
    pos: "50% 40%",
  },
  {
    cat: "anime",
    src: "images/art-13.jpg",
    title: "Sanji Vinsmoke, One Piece",
    pos: "50% 38%",
  },
  {
    cat: "portrait",
    src: "images/art-07.jpg",
    title: "Portrait No. 7",
    pos: "50% 55%",
  },
  {
    cat: "anime",
    src: "images/art-15.jpg",
    title: "Saitama, One Punch Man",
    pos: "50% 35%",
  },
  {
    cat: "portrait",
    src: "images/art-09.jpg",
    title: "Portrait No. 8",
    pos: "50% 30%",
  },
  {
    cat: "portrait",
    src: "images/art-18.jpg",
    title: "Portrait No. 9",
    pos: "50% 45%",
  },
  {
    cat: "anime",
    src: "images/art-22.jpg",
    title: "Nezuko Kamado, Demon Slayer",
    pos: "50% 38%",
  },
  {
    cat: "portrait",
    src: "images/art-19.jpg",
    title: "Portrait No. 10",
    pos: "50% 38%",
  },
  {
    cat: "anime",
    src: "images/art-24.jpg",
    title: "Yuji Itadori, Jujutsu Kaisen",
    pos: "40% 35%",
  },
  {
    cat: "portrait",
    src: "images/art-21.jpg",
    title: "Portrait No. 11",
    pos: "50% 22%",
  },
  {
    cat: "anime",
    src: "images/art-23.jpg",
    title: "Keisuke Baji, Tokyo Revengers",
    pos: "50% 38%",
  },
  {
    cat: "portrait",
    src: "images/art-20.jpg",
    title: "Portrait No. 12",
    pos: "50% 35%",
  },
  // ink drawings
  {
    cat: "ink",
    src: "images/art-25.jpg",
    title: "Ink Townhouse No. 1",
    pos: "50% 40%",
  },
  {
    cat: "ink",
    src: "images/art-26.jpg",
    title: "Ink Facades Sketchbook Spread",
    pos: "50% 50%",
  },
  {
    cat: "ink",
    src: "images/art-27.jpg",
    title: "Ink Shopfront with Japanese Signs",
    pos: "50% 45%",
  },
  {
    cat: "ink",
    src: "images/art-28.jpg",
    title: "Ink Portrait of a Warrior",
    pos: "60% 45%",
  },
  {
    cat: "ink",
    src: "images/art-29.jpg",
    title: "Ink Street Scene with Setting Sun",
    pos: "40% 45%",
  },
  {
    cat: "ink",
    src: "images/art-30.jpg",
    title: "Ink Lighthouse on the Rocks",
    pos: "50% 40%",
  },
  {
    cat: "ink",
    src: "images/art-31.jpg",
    title: "Ink Townhouse No. 2",
    pos: "50% 45%",
  },
  {
    cat: "ink",
    src: "images/art-32.jpg",
    title: "Gyro Zeppeli and Johnny Joestar, Jojo Bizzare Adventure: Steel Ball Run",
    pos: "50% 45%",
  },
  {
    cat: "ink",
    src: "images/art-33.jpg",
    title: "Anakin Skywalker and Darth Vader, Star Wars Series",
    pos: "55% 40%",
  },
];

// Tabs with no pictures yet show a "Coming soon" card instead
const COMING_SOON = {
  painting: {
    label: "Painting",
    text: "Coming soon: Original hand-painted works in watercolor and acrylic.",
  },
  digital: {
    label: "Digital art",
    text: "Coming soon: Clean digital illustrations and character art.",
  },
};
const PER_SLIDE = 9; // pictures per slide (matches the 9-tile museum grid)

// Images used in the hero and About section (images/hero-1.jpg, etc.)
const SPECIAL_IMAGES = {
  "hero-1": "images/hero-1.jpg",
  "hero-2": "images/hero-2.jpg",
  "hero-3": "images/hero-3.jpg",
  "hero-4": "images/art-03.jpg",
};

/* ---------- 2) HELPERS ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// A colorful "sketch" placeholder shown when a drawing file isn't found yet
function placeholder(label, seed = 0) {
  label = String(label).replace(/[&<>"']/g, " "); // keep the SVG valid
  const hues = [8, 40, 200, 280, 150, 330];
  const h = hues[seed % hues.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="hsl(${h},85%,88%)"/>
    <g fill="none" stroke="hsl(${h},70%,40%)" stroke-width="3" stroke-linecap="round" opacity=".55">
      <path d="M80 480 Q200 300 320 430 T560 380 T740 460"/>
      <circle cx="${300 + ((seed * 17) % 200)}" cy="230" r="70"/>
      <path d="M${260 + ((seed * 17) % 200)} 215 q20 -22 40 0 M${300 + ((seed * 17) % 200)} 215 q20 -22 40 0"/>
      <path d="M${290 + ((seed * 17) % 200)} 255 q20 18 40 0"/>
    </g>
    <text x="400" y="545" font-family="Arial Black, Arial" font-size="30" text-anchor="middle" fill="hsl(${h},70%,28%)">${label}</text>
    <text x="400" y="575" font-family="Arial" font-size="18" text-anchor="middle" fill="hsl(${h},50%,35%)">add your drawing in /images</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
function withFallback(img, label, seed) {
  img.addEventListener(
    "error",
    () => {
      img.onerror = null;
      img.src = placeholder(label, seed);
    },
    { once: true },
  );
}

/* ---------- 3) THEME + NAV ---------- */
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
} catch (e) {}
$("#theme").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
  bgColors();
});

const burger = $("#burger"),
  links = $("#links");
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("open");
    burger.setAttribute("aria-expanded", false);
  }
});

// Highlight current section in the nav
const navLinks = $$(".links a");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting)
        navLinks.forEach((a) =>
          a.classList.toggle(
            "active",
            a.getAttribute("href") === "#" + en.target.id,
          ),
        );
    });
  },
  { rootMargin: "-45% 0px -50% 0px" },
);
$$("main section[id]").forEach((s) => sectionObserver.observe(s));

// Reveal on scroll
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        revealObserver.unobserve(en.target);
      }
    });
  },
  { threshold: 0.15 },
);
$$(".reveal").forEach((el) => revealObserver.observe(el));

// Count-up numbers
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target,
      end = +el.dataset.count;
    let n = 0;
    const step = () => {
      n += Math.max(1, end / 40);
      if (n >= end) {
        el.textContent = end;
        return;
      }
      el.textContent = Math.floor(n);
      requestAnimationFrame(step);
    };
    step();
    countObserver.unobserve(el);
  });
});
$$("[data-count]").forEach((el) => countObserver.observe(el));

/* ---------- 4) TYPED HEADINGS ---------- */
const typeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      typeObserver.unobserve(el);
      const text = el.dataset.typed;
      let i = 0;
      el.textContent = "";
      if (reduceMotion) {
        el.textContent = text;
        el.classList.add("done");
        return;
      }
      const tick = () => {
        el.textContent = text.slice(0, ++i);
        if (i < text.length) setTimeout(tick, 55);
        else setTimeout(() => el.classList.add("done"), 1200);
      };
      tick();
    });
  },
  { threshold: 0.6 },
);
$$("[data-typed]").forEach((el) => {
  // decode &amp; etc. and keep the full text as an accessible label
  const tmp = document.createElement("textarea");
  tmp.innerHTML = el.dataset.typed;
  el.dataset.typed = tmp.value;
  el.setAttribute("aria-label", tmp.value);
  typeObserver.observe(el);
});

/* ---------- 5) GALLERY (slides of 9) ---------- */
// Hero + about images
$$("img[data-art]").forEach((img, i) => {
  const key = img.dataset.art;
  withFallback(img, key === "about" ? "Me & my art" : "Sketch", i + 1);
  img.src = SPECIAL_IMAGES[key];
});

// Home pictures: two layouts (1 = overlapping frames, 2 = tidy grid). Switches by itself, or click 1 / 2.
const heroArt = $("#heroArt");
function setHeroLayout(l) {
  heroArt.dataset.layout = l;
  $$(".layout-switch button").forEach((b) => {
    const on = b.dataset.l === l;
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", on);
  });
}
let heroAuto = !reduceMotion;
$$(".layout-switch button").forEach((b) =>
  b.addEventListener("click", () => {
    heroAuto = false;
    setHeroLayout(b.dataset.l);
  }),
);
setInterval(() => {
  if (heroAuto) setHeroLayout(heroArt.dataset.layout === "a" ? "b" : "a");
}, 7000);

const grid = $("#galleryGrid"),
  count = $("#gCount");
let filter = "all",
  page = 0;
const items = () =>
  ARTWORKS.filter((a) => filter === "all" || a.cat === filter);
const pages = () => Math.max(1, Math.ceil(items().length / PER_SLIDE));

// One framed picture tile (used by the gallery and by the Home layout 2)
function makeArt(a, seed, delay, focusable) {
  const fig = document.createElement("figure");
  fig.className = "art";
  fig.style.animationDelay = delay + "ms";
  if (focusable) fig.tabIndex = 0;
  const img = new Image();
  img.alt = a.title;
  img.loading = "lazy";
  withFallback(img, a.title, seed);
  if (a.pos) img.style.objectPosition = a.pos;
  img.src = a.src;
  const cap = document.createElement("figcaption");
  const kind = document.createElement("small");
  kind.textContent =
    a.cat === "anime"
      ? "Anime fan art"
      : a.cat === "ink"
        ? "Ink drawing"
        : "Pencil portrait";
  const name = document.createElement("b");
  name.textContent = a.title;
  cap.append(kind, name);
  fig.append(img, cap);
  const open = () => openLightbox(img.src, a.title);
  fig.addEventListener("click", open);
  if (focusable)
    fig.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  return fig;
}

function renderGallery() {
  const list = items(),
    total = pages();
  if (!list.length && COMING_SOON[filter]) {
    // no pictures for this tab yet: one "Coming soon" card
    page = 0;
    grid.innerHTML = "";
    grid.classList.remove("alt");
    grid.dataset.n = 1;
    const c = COMING_SOON[filter],
      card = document.createElement("div");
    card.className = "art soon";
    const kind = document.createElement("small"),
      big = document.createElement("b"),
      txt = document.createElement("p");
    kind.textContent = "✎ " + c.label;
    big.textContent = "Coming soon";
    txt.textContent = c.text;
    card.append(kind, big, txt);
    grid.append(card);
    count.textContent = "Slide 1 / 1";
    return;
  }
  page = (page + total) % total;
  grid.innerHTML = "";
  grid.classList.toggle("alt", page % 2 === 1); // flip the collage on every other slide
  grid.dataset.n = Math.min(PER_SLIDE, list.length - page * PER_SLIDE); // tiles on this slide
  list
    .slice(page * PER_SLIDE, page * PER_SLIDE + PER_SLIDE)
    .forEach((a, i) =>
      grid.append(makeArt(a, i + page * PER_SLIDE, i * 70, true)),
    );
  count.textContent = `Slide ${page + 1} / ${total}`;
}
$("#gPrev").onclick = () => {
  page--;
  renderGallery();
};
$("#gNext").onclick = () => {
  page++;
  renderGallery();
};
$("#galleryTabs").addEventListener("click", (e) => {
  const b = e.target.closest(".tab");
  if (!b) return;
  $$("#galleryTabs .tab").forEach((t) => t.classList.toggle("active", t === b));
  filter = b.dataset.filter;
  page = 0;
  renderGallery();
});
renderGallery();

// Lightbox
const lb = $("#lightbox");
function openLightbox(src, title) {
  $("#lbImg").src = src;
  $("#lbImg").alt = title;
  $("#lbCap").textContent = title;
  if (lb.showModal) lb.showModal();
  else lb.setAttribute("open", "");
}
$("#lbClose").onclick = () => lb.close();
lb.addEventListener("click", (e) => {
  if (e.target === lb) lb.close();
});

// Sketchbook strip (the sliding pictures in the yellow band)
const SKETCHBOOK = [
  {
    cat: "anime",
    src: "images/sketch-1.jpg",
    title: "Sanji Vinsmoke, One Piece",
  },
  { cat: "portrait", src: "images/sketch-2.jpg", title: "Portrait sketches" },
  {
    cat: "anime",
    src: "images/sketch-3.jpg",
    title: "Jotaro Kujo, JoJo's Bizarre Adventure",
  },
  {
    cat: "portrait",
    src: "images/sketch-4.jpg",
    title: "Pencil portrait study",
  },
  { cat: "portrait", src: "images/sketch-5.jpg", title: "Pencil portrait" },
  {
    cat: "anime",
    src: "images/sketch-6.jpg",
    title: "Zenitsu Agatsuma, Demon Slayer",
  },
  {
    cat: "anime",
    src: "images/sketch-7.jpg",
    title: "Kazutora Hanemiya, Tokyo Revengers",
  },
  {
    cat: "anime",
    src: "images/sketch-8.jpg",
    title: "Yoh Asakura, Shaman King",
  },
];
const strip = $("#sketchStrip");
if (strip) {
  [...SKETCHBOOK, ...SKETCHBOOK].forEach((s, k) => {
    // list twice so the loop is seamless
    const b = document.createElement("button");
    b.className = "sk";
    b.type = "button";
    b.setAttribute("aria-label", "Open " + s.title);
    if (k >= SKETCHBOOK.length)
      (b.setAttribute("aria-hidden", "true"), (b.tabIndex = -1));
    const img = new Image();
    img.alt = s.title;
    img.loading = "lazy";
    withFallback(img, s.title, k + 7);
    img.src = s.src;
    const cap = document.createElement("div");
    cap.className = "cap";
    const kind = document.createElement("small");
    kind.textContent = s.cat === "anime" ? "Anime fan art" : "Pencil portrait";
    const name = document.createElement("b");
    name.textContent = s.title;
    cap.append(kind, name);
    b.append(img, cap);
    b.addEventListener("click", () => openLightbox(img.src, s.title));
    strip.append(b);
  });
}

/* ---------- 5b) ABOUT ME SLIDER (the pictures inside the polaroid) ---------- */
// Put your files in the images folder and edit this list to add more slides.
const ABOUT_SLIDES = [
  {
    src: "images/about-4.jpg",
    cap: "Hi, I'm Miguel · the artist behind the drawings",
    pos: "50% 38%",
  },
  {
    src: "images/about-1.jpg",
    cap: "Sanji Vinsmoke· markers & colored pencil",
    pos: "50% 35%",
  },
  {
    src: "images/about-2.jpg",
    cap: "Portrait No 1 · Graphite Pencil",
    pos: "50% 50%",
  },
  {
    src: "images/about-3.jpg",
    cap: "Portrait No 5 · Graphite Pencil",
    pos: "50% 40%",
  },
];
(function aboutSlider() {
  const box = $("#aboutSlider");
  if (!box) return;
  const track = $("#aboutTrack"),
    dots = $("#aboutDots"),
    cap = $("#aboutCap");
  let i = 0,
    timer;
  ABOUT_SLIDES.forEach((s, k) => {
    const img = new Image();
    img.alt = s.cap;
    img.style.objectPosition = s.pos;
    withFallback(img, s.cap, k + 3);
    img.src = s.src;
    track.append(img);
    const d = document.createElement("button");
    d.setAttribute("aria-label", `Show drawing ${k + 1}`);
    d.onclick = () => {
      go(k);
      restart();
    };
    dots.append(d);
  });
  function go(n) {
    i = (n + ABOUT_SLIDES.length) % ABOUT_SLIDES.length;
    track.style.transform = `translateX(-${i * 100}%)`;
    [...dots.children].forEach((d, k) => d.classList.toggle("active", k === i));
    cap.textContent = ABOUT_SLIDES[i].cap;
  }
  function restart() {
    clearInterval(timer);
    if (!reduceMotion) timer = setInterval(() => go(i + 1), 4500);
  }
  $("#aPrev").onclick = () => {
    go(i - 1);
    restart();
  };
  $("#aNext").onclick = () => {
    go(i + 1);
    restart();
  };
  box.addEventListener("mouseenter", () => clearInterval(timer));
  box.addEventListener("mouseleave", restart);
  let sx = null; // swipe on touch screens
  box.addEventListener(
    "touchstart",
    (e) => {
      sx = e.touches[0].clientX;
    },
    { passive: true },
  );
  box.addEventListener("touchend", (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 40) {
      go(i + (dx < 0 ? 1 : -1));
      restart();
    }
    sx = null;
  });
  go(0);
  restart();
})();

/* ---------- 6) FOOTER YEAR ---------- */
$("#year").textContent = new Date().getFullYear();

/* ---------- 7) UNIQUE BACKGROUND: pencil doodles + cursor line trail ---------- */
const cv = $("#bg"),
  ctx = cv.getContext("2d");
let W,
  H,
  dpr,
  doodles = [],
  trail = [],
  colors;
function bgColors() {
  const dark = root.dataset.theme === "dark";
  colors = dark
    ? ["#f9a66c", "#ffc94b", "#f9faf4", "#f17a7e"]
    : ["#4a6163", "#ffc94b", "#f9a66c", "#f17a7e"];
}
bgColors();

let lastW = 0;
function resize() {
  dpr = Math.min(devicePixelRatio || 1, 2);
  W = innerWidth;
  H = innerHeight;
  cv.width = W * dpr;
  cv.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  if (W === lastW && doodles.length) return; // phone address bar showing/hiding
  lastW = W;
  const n = Math.round(Math.min(26, Math.max(10, (W * H) / 60000)));
  doodles = Array.from({ length: n }, (_, i) => ({
    x: Math.random() * W,
    y: Math.random() * H,
    s: 18 + Math.random() * 34,
    r: Math.random() * 6.28,
    vr: (Math.random() - 0.5) * 0.006,
    vx: (Math.random() - 0.5) * 0.25,
    vy: -0.08 - Math.random() * 0.22,
    type: i % 5,
    c: i % 4,
  }));
}
function drawDoodle(d) {
  ctx.save();
  ctx.translate(d.x, d.y);
  ctx.rotate(d.r);
  ctx.strokeStyle = colors[d.c];
  ctx.globalAlpha = 0.38;
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  const s = d.s;
  ctx.beginPath();
  if (d.type === 0) {
    // star
    for (let i = 0; i < 10; i++) {
      const a = (i * Math.PI) / 5,
        r = i % 2 ? s * 0.42 : s;
      ctx[i ? "lineTo" : "moveTo"](Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
  } else if (d.type === 1) {
    // spiral
    for (let a = 0; a < 12; a += 0.3) {
      const r = (a * s) / 12;
      ctx[a ? "lineTo" : "moveTo"](Math.cos(a) * r, Math.sin(a) * r);
    }
  } else if (d.type === 2) {
    // squiggle
    ctx.moveTo(-s, 0);
    for (let i = 0; i < 4; i++)
      ctx.quadraticCurveTo(
        -s + (i * s) / 2 + s / 4,
        i % 2 ? s / 2 : -s / 2,
        -s + ((i + 1) * s) / 2,
        0,
      );
  } else if (d.type === 3) {
    // circle sketched twice
    ctx.arc(0, 0, s * 0.7, 0, 6.1);
    ctx.moveTo(s * 0.75, 0);
    ctx.arc(0, 0, s * 0.75, 0.2, 6.3);
  } else {
    // pencil
    ctx.moveTo(-s, s * 0.25);
    ctx.lineTo(s * 0.7, s * 0.25);
    ctx.lineTo(s, 0);
    ctx.lineTo(s * 0.7, -s * 0.25);
    ctx.lineTo(-s, -s * 0.25);
    ctx.closePath();
    ctx.moveTo(s * 0.7, s * 0.25);
    ctx.lineTo(s * 0.7, -s * 0.25);
  }
  ctx.stroke();
  ctx.restore();
}

// Cursor line trail, like a pencil drawing on the page
const LIFE = 900;
function addPoint(x, y) {
  trail.push({ x, y, t: performance.now() });
  if (trail.length > 80) trail.shift();
}
if (!reduceMotion) {
  addEventListener("mousemove", (e) => addPoint(e.clientX, e.clientY), {
    passive: true,
  });
  addEventListener(
    "touchmove",
    (e) => addPoint(e.touches[0].clientX, e.touches[0].clientY),
    { passive: true },
  );
}
function frame(now) {
  ctx.clearRect(0, 0, W, H);
  doodles.forEach((d) => {
    if (!reduceMotion) {
      d.x += d.vx;
      d.y += d.vy;
      d.r += d.vr;
      if (d.y < -60) {
        d.y = H + 60;
        d.x = Math.random() * W;
      }
      if (d.x < -60) d.x = W + 60;
      if (d.x > W + 60) d.x = -60;
    }
    drawDoodle(d);
  });
  // trail
  trail = trail.filter((p) => now - p.t < LIFE);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  for (let i = 1; i < trail.length; i++) {
    const a = trail[i - 1],
      b = trail[i],
      age = 1 - (now - b.t) / LIFE;
    ctx.strokeStyle = colors[0];
    ctx.globalAlpha = Math.max(0, age) * 0.8;
    ctx.lineWidth = 1 + age * 3;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x + Math.sin(i) * 0.8, b.y + Math.cos(i) * 0.8);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
  looping = false;
  if (!reduceMotion && !document.hidden) startLoop();
}
let looping = false;
function startLoop() {
  if (looping) return;
  looping = true;
  requestAnimationFrame(frame);
}
addEventListener("resize", resize);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && !reduceMotion) startLoop();
});
resize();
startLoop();

/* ---------- LIVE SOCIAL STATS (reads stats.json, refreshes by itself) ---------- */
(() => {
  const REFRESH_MS = 60000;
  const stamp = document.getElementById("liveStamp");
  if (!stamp) return;
  const fmt = (n) =>
    n == null
      ? "—"
      : n >= 1e6
        ? (n / 1e6).toFixed(n >= 1e7 ? 0 : 1).replace(/\.0$/, "") + "M"
        : n >= 1e4
          ? (n / 1e3).toFixed(n >= 1e5 ? 0 : 1).replace(/\.0$/, "") + "K"
          : n.toLocaleString("en-US");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const shown = new WeakMap();
  function setNum(el, to) {
    const from =
      shown.get(el) ?? (parseInt(el.textContent.replace(/\D/g, ""), 10) || 0);
    shown.set(el, to);
    if (to == null) return; // no number in stats.json: keep what the page already shows
    if (reduce || from === to) {
      el.textContent = fmt(to);
      return;
    }
    const t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / 900);
      el.textContent = fmt(
        Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3))),
      );
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  let updated = null;
  function ago() {
    if (!updated) return;
    const m = Math.round((Date.now() - updated) / 60000);
    const t =
      m < 1
        ? "just now"
        : m < 60
          ? m + " min ago"
          : m < 1440
            ? Math.round(m / 60) + " h ago"
            : Math.round(m / 1440) + " d ago";
    stamp.querySelector("span").textContent = "Live numbers · updated " + t;
  }
  function apply(d) {
    document.querySelectorAll(".feed-stats").forEach((box) => {
      const src = d[box.dataset.net] || {};
      box
        .querySelectorAll("[data-stat]")
        .forEach((b) => setNum(b, src[b.dataset.stat] ?? null));
    });
    const views = (d.tiktok && d.tiktok.views) || [];
    document.querySelectorAll(".views[data-view]").forEach((v) => {
      const val = views[v.dataset.view];
      if (val == null || !/\d/.test(v.textContent)) return; // only update tiles that show a count
      const svg = v.querySelector("svg");
      v.replaceChildren(
        svg,
        document.createTextNode(" " + val.toLocaleString("en-US")),
      );
    });
    updated = d.updated ? new Date(d.updated).getTime() : Date.now();
    stamp.hidden = false;
    stamp.classList.add("on");
    ago();
  }
  async function load() {
    try {
      const r = await fetch("stats.json?t=" + Date.now(), {
        cache: "no-store",
      });
      if (!r.ok) throw 0;
      apply(await r.json());
    } catch (e) {
      stamp.classList.remove("on");
      stamp.hidden = true; // stats.json not found: just show the numbers typed in the page
    }
  }
  load();
  setInterval(load, REFRESH_MS);
  setInterval(ago, 30000);
  document.addEventListener(
    "visibilitychange",
    () => !document.hidden && load(),
  );
})();

/* ---------- BLOG POSTS (reads posts.json, refreshes by itself) ---------- */
(() => {
  const igGrid = document.getElementById("igGrid");
  const ttGrid = document.getElementById("ttGrid");
  if (!igGrid || !ttGrid) return;
  const svg = (inner, extra = "") =>
    `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" ${extra}>${inner}</svg>`;
  const ICON = {
    pin: svg('<path d="M14.5 2.5l7 7-2 .8-3.600 3.600.4 4.200-1.400 1.400-4.200-4.200L5 19.800 4.200 19l4.300-4.300-4.200-4.200 1.400-1.400 4.200.4 3.600-3.600z"/>'),
    carousel: svg('<rect x="7" y="3" width="14" height="14" rx="3"/><path d="M4 7v10a4 4 0 0 0 4 4h10" fill="none" stroke="currentColor" stroke-width="2"/>'),
    reel: svg('<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M10 8.500v7l6-3.500z" fill="#1f2e30"/>'),
  };
  const PLAY =
    '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" aria-hidden="true"><path d="M6 4l14 8-14 8z"/></svg>';
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const safeUrl = (u, fallback) => (/^(https?:\/\/|images\/)/.test(u || "") ? u : fallback);

  function tile(p, net, profile) {
    const img = safeUrl(p.img, "");
    if (!img) return "";
    const link = safeUrl(p.link, profile);
    let extra = "";
    if (net === "ig") extra = ICON[p.type] ? `<span class="tag">${ICON[p.type]}</span>` : "";
    else {
      if (p.pinned) extra += '<span class="pinned">Pinned</span>';
      extra += `<span class="views">${PLAY}${p.views != null ? " " + Number(p.views).toLocaleString("en-US") : ""}</span>`;
    }
    return `<a class="ftile" href="${esc(link)}" target="_blank" rel="noopener"><img src="${esc(img)}" alt="${esc(p.alt || "Post")}" loading="lazy" referrerpolicy="no-referrer" />${extra}</a>`;
  }
  function fill(grid, list, net, profile) {
    if (!Array.isArray(list) || !list.length) return; // keep the pictures already in the page
    const html = list.slice(0, 12).map((p) => tile(p, net, profile)).join("");
    if (html && grid.dataset.sig !== html) {
      grid.innerHTML = html;
      grid.dataset.sig = html;
    }
  }
  async function loadPosts() {
    try {
      const r = await fetch("posts.json?t=" + Date.now(), { cache: "no-store" });
      if (!r.ok) throw 0;
      const d = await r.json();
      fill(igGrid, d.instagram && d.instagram.posts, "ig", (d.instagram && d.instagram.profile) || "https://www.instagram.com/lnmglmrqz/");
      fill(ttGrid, d.tiktok && d.tiktok.posts, "tt", (d.tiktok && d.tiktok.profile) || "https://www.tiktok.com/@lnmglmrq");
    } catch (e) {} // posts.json missing: the pictures written in the page stay
  }
  loadPosts();
  setInterval(loadPosts, 300000); // every 5 minutes
  document.addEventListener("visibilitychange", () => !document.hidden && loadPosts());

  // TikTok: "Videos" (my grid) / "Live" (TikTok's own widget, always the newest videos)
  const tabs = document.getElementById("ttTabs"),
    live = document.getElementById("ttLive");
  let embedLoaded = false;
  tabs.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-tt]");
    if (!b) return;
    const showLive = b.dataset.tt === "live";
    tabs.querySelectorAll("button").forEach((x) => {
      x.classList.toggle("on", x === b);
      x.setAttribute("aria-selected", x === b);
    });
    ttGrid.hidden = showLive;
    live.hidden = !showLive;
    if (showLive && !embedLoaded) {
      embedLoaded = true;
      const s = document.createElement("script");
      s.src = "https://www.tiktok.com/embed.js";
      s.async = true;
      live.appendChild(s);
    }
  });
})();

/* ---------- CONTACT FORM (opens your email app with the message filled in) ---------- */
(() => {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const out = document.getElementById("cfMsgOut");
  const TO = "leanmarquez0628@yahoo.com";
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const v = (k) => String(f.get(k) || "").trim();
    const bad = ["first", "last", "email"].find((k) => !v(k)) || (!form.email.checkValidity() ? "email" : "");
    if (bad) {
      out.className = "cf-msg err";
      out.textContent = "Please fill in your first name, last name and a valid email.";
      form.elements[bad].focus();
      return;
    }
    const subject = v("subject") || "Message from " + v("first") + " " + v("last");
    const body = `${v("message")}\n\n— ${v("first")} ${v("last")}\n${v("email")}`;
    out.className = "cf-msg";
    out.textContent = "Thank you! Opening your email app to send your message…";
    location.href = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
