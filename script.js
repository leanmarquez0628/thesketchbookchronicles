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
    src: "images/gallery/anime/art-03.jpg",
    title: "Roronoa Zoro, One Piece",
    pos: "50% 32%",
  },
  {
    cat: "anime",
    src: "images/gallery/anime/art-04.jpg",
    title: "Bruno Bucciarati, JoJo's Bizarre Adventure",
    pos: "42% 30%",
  },
  {
    cat: "portrait",
    src: "images/gallery/portrait/art-02.jpg",
    title: "Portrait No. 1",
    pos: "50% 40%",
  },
  {
    cat: "portrait",
    src: "images/gallery/portrait/art-05.jpg",
    title: "Portrait No. 2",
    pos: "35% 38%",
  },
  {
    cat: "anime",
    src: "images/gallery/anime/art-10.jpg",
    title: "All Might, My Hero Academia",
    pos: "55% 35%",
  },
  {
    cat: "anime",
    src: "images/gallery/anime/art-06.jpg",
    title: "Madara Uchiha, Naruto",
    pos: "50% 28%",
  },
  {
    cat: "anime",
    src: "images/gallery/anime/art-01.jpg",
    title: "JoJo Bizzare Adventure, Joestar Family",
    pos: "45% 40%",
  },
  {
    cat: "portrait",
    src: "images/gallery/portrait/art-12.jpg",
    title: "Portrait No. 3",
    pos: "50% 25%",
  },
  {
    cat: "portrait",
    src: "images/gallery/portrait/art-16.jpg",
    title: "Portrait No. 4",
    pos: "50% 55%",
  },
  // slide 2
  {
    cat: "anime",
    src: "images/gallery/anime/art-11.jpg",
    title: "Jotaro Kujo, JoJo's Bizarre Adventure",
    pos: "50% 30%",
  },
  {
    cat: "portrait",
    src: "images/gallery/portrait/art-17.jpg",
    title: "Portrait No. 5",
    pos: "45% 30%",
  },
  {
    cat: "portrait",
    src: "images/gallery/portrait/art-14.jpg",
    title: "Portrait No. 6",
    pos: "50% 40%",
  },
  {
    cat: "anime",
    src: "images/gallery/anime/art-13.jpg",
    title: "Sanji Vinsmoke, One Piece",
    pos: "50% 38%",
  },
  {
    cat: "portrait",
    src: "images/gallery/portrait/art-09.jpg",
    title: "Portrait No. 8",
    pos: "50% 30%",
  },
  {
    cat: "anime",
    src: "images/gallery/anime/art-22.jpg",
    title: "Nezuko Kamado, Demon Slayer",
    pos: "50% 38%",
  },
  {
    cat: "portrait",
    src: "images/gallery/portrait/art-19.jpg",
    title: "Portrait No. 10",
    pos: "50% 38%",
  },
  {
    cat: "anime",
    src: "images/gallery/anime/art-23.jpg",
    title: "Keisuke Baji, Tokyo Revengers",
    pos: "50% 38%",
  },
  {
    cat: "portrait",
    src: "images/gallery/portrait/art-20.jpg",
    title: "Portrait No. 12",
    pos: "50% 35%",
  },
  // ink drawings
  {
    cat: "anime",
    src: "images/gallery/anime/art-34.jpg",
    title: "Monkey D. Luffy, Gear 5, One Piece",
    pos: "50% 40%",
  },
  {
    cat: "anime",
    src: "images/gallery/anime/art-35.jpg",
    title: "Giorno Giovanna, JoJo's Bizarre Adventure: Golden Wind",
    pos: "50% 35%",
  },
  {
    cat: "portrait",
    src: "images/gallery/portrait/art-38.jpg",
    title: "Portrait No. 14",
    pos: "50% 40%",
  },
  // graphic design
  {
    cat: "design",
    src: "images/design/design-1.jpg",
    title: "Lewis Hamilton, Ferrari F1 poster",
    pos: "50% 48%",
  },
  {
    cat: "design",
    src: "images/design/design-2.jpg",
    title: "Max Verstappen, Red Bull F1 poster",
    pos: "50% 48%",
  },
  {
    cat: "design",
    src: "images/design/design-3.jpg",
    title: "Lando Norris, McLaren F1 poster",
    pos: "50% 48%",
  },
  {
    cat: "design",
    src: "images/design/design-4.jpg",
    title: "George Russell, Mercedes F1 poster",
    pos: "50% 48%",
  },
  {
    cat: "design",
    src: "images/design/design-5.jpg",
    title: "Charles Leclerc, Ferrari F1 poster",
    pos: "50% 48%",
  },
  {
    cat: "design",
    src: "images/design/design-6.jpg",
    title: "Nico Hulkenberg, Audi F1 poster",
    pos: "50% 48%",
  },
  {
    cat: "design",
    src: "images/design/design-7.jpg",
    title: "Kimi Antonelli, Mercedes F1 poster",
    pos: "50% 48%",
  },
  {
    cat: "design",
    src: "images/design/design-8.jpg",
    title: "Oscar Piastri, McLaren F1 poster",
    pos: "50% 48%",
  },
  {
    cat: "design",
    src: "images/design/design-9.jpg",
    title: "Isack Hadjar, Red Bull F1 poster",
    pos: "50% 48%",
  },
  {
    cat: "design",
    src: "images/design/design-10.jpg",
    title: "Lewis Hamilton, Ferrari F1 driver poster",
    pos: "50% 48%",
  },
  {
    cat: "design",
    src: "images/design/design-11.jpg",
    title: "Max Verstappen, Red Bull F1 driver poster",
    pos: "50% 48%",
  },
  {
    cat: "design",
    src: "images/design/design-12.jpg",
    title: "Lando Norris, McLaren F1 driver poster",
    pos: "50% 48%",
  },
  {
    cat: "design",
    src: "images/design/design-13.jpg",
    title: "Charles Leclerc, Ferrari F1 driver poster",
    pos: "50% 48%",
  },
  {
    cat: "design",
    src: "images/design/design-14.jpg",
    title: "Oscar Piastri, McLaren F1 driver poster",
    pos: "50% 48%",
  },
  {
    cat: "design",
    src: "images/design/design-15.jpg",
    title: "George Russell, Mercedes F1 driver poster",
    pos: "50% 48%",
  },
  {
    cat: "design",
    src: "images/design/design-16.jpg",
    title: "Kimi Antonelli, Mercedes F1 driver poster",
    pos: "50% 48%",
  },
  {
    cat: "design",
    src: "images/design/design-17.jpg",
    title: "Fernando Alonso, Aston Martin F1 driver poster",
    pos: "50% 48%",
  },
];

// Tabs with no pictures yet show a "Coming soon" card instead
const COMING_SOON = {
  painting: {
    label: "Painting",
    text: "Hand-painted pieces in watercolor and acrylic are on the way.",
  },
  digital: {
    label: "Digital art",
    text: "Clean digital illustrations and character art are on the way.",
  },
};
const PER_SLIDE = 9; // pictures per slide (matches the 9-tile museum grid)

// Images used in the hero and About section (images/home/hero-1.jpg, etc.)
const SPECIAL_IMAGES = {
  "hero-1": "images/home/hero-1.jpg",
  "hero-2": "images/home/hero-2.jpg",
  "hero-3": "images/home/hero-3.jpg",
  "hero-4": "images/home/hero-4.jpg",
};

/* ---------- 2) HELPERS ---------- */
// returns a detached <div> when the element is on another page, so shared code never crashes
const $ = (s, el = document) => el.querySelector(s) || document.createElement("div");
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
// Pictures live in sub-folders (images/gallery/anime/...). If a sub-folder picture is missing,
// try the old flat path (images/art-01.jpg) first, then show the drawn placeholder.
const FLAT_ALIAS = {
  "th-jojo.jpg": "art-32.jpg",
};
function flatPath(src) {
  const m = /^(.*?images\/)(?:[a-z0-9_-]+\/)+([^/?#]+)$/i.exec(src || "");
  return m ? m[1] + (FLAT_ALIAS[m[2]] || m[2]) : null;
}
function imgFailed(img) {
  if (!img || img.tagName !== "IMG" || img.src.startsWith("data:")) return;
  const cur = img.getAttribute("src") || "";
  const flat = flatPath(cur);
  if (flat && !img.dataset.flat) {
    img.dataset.flat = "1";
    img.src = flat;
    return true;
  }
  if (img.dataset.ph && !img.dataset.phDone) {
    img.dataset.phDone = "1";
    img.src = placeholder(img.dataset.ph, +img.dataset.phSeed || 0);
  }
}
document.addEventListener("error", (e) => { if (imgFailed(e.target)) e.stopPropagation(); }, true);
window.addEventListener("load", () => {
  document.querySelectorAll("img").forEach((i) => i.complete && i.naturalWidth === 0 && i.getAttribute("src") && imgFailed(i));
});
function withFallback(img, label, seed) {
  img.dataset.ph = label;
  img.dataset.phSeed = seed;
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
  ARTWORKS.filter(
    (a) => a.cat !== "design" && (filter === "all" || a.cat === filter),
  );
const GALLERY_PER = 16; // main gallery: 16 pictures per slide
const pages = () => Math.max(1, Math.ceil(items().length / GALLERY_PER));

// Mosaic for big slides: 4 columns, blocks of up to 8 pictures (3 rows each), explicit placement so there are no holes.
// Each entry is [column, row, width, height]; every second block is mirrored left-right.
const BIG_PATTERNS = {
  8: [[1,1,2,2],[3,1,1,1],[4,1,1,1],[3,2,1,1],[4,2,1,1],[1,3,1,1],[2,3,1,1],[3,3,2,1]],
  7: [[1,1,2,2],[3,1,1,1],[4,1,1,1],[3,2,1,1],[4,2,1,1],[1,3,2,1],[3,3,2,1]],
  6: [[1,1,2,2],[3,1,2,1],[3,2,1,1],[4,2,1,1],[1,3,2,1],[3,3,2,1]],
  5: [[1,1,2,2],[3,1,2,1],[3,2,2,1],[1,3,2,1],[3,3,2,1]],
  4: [[1,1,2,2],[3,1,2,1],[3,2,1,1],[4,2,1,1]],
  3: [[1,1,2,2],[3,1,2,1],[3,2,2,1]],
  2: [[1,1,2,1],[3,1,2,1]],
  1: [[1,1,4,1]],
};
function bigLayout(figs) {
  for (let b = 0, k = 0; b < figs.length; b += 8, k++) {
    const blk = figs.slice(b, b + 8), pat = BIG_PATTERNS[blk.length];
    blk.forEach((f, i) => {
      let [c, r, w, h] = pat[i];
      if (k % 2 === 1) c = 6 - c - w; // mirror every second block
      f.style.setProperty("--gc", c);
      f.style.setProperty("--gr", r + k * 3);
      f.style.setProperty("--gw", w);
      f.style.setProperty("--gh", h);
    });
  }
}

// One framed picture tile (used by the gallery and by the Home layout 2)
/* ---------- IMAGE CODES ----------
   Every picture has a short code built from its file name, so you can say
   "I like PT-05" or "order F1-14". Prefixes: AN anime, PT pencil portrait, IK ink,
   F1 poster, PA painting, DG digital, IG Instagram, TT TikTok, FB Facebook,
   TH Threads, YT YouTube. The full list is in IMAGE-CODES.txt. */
const CODE_PREFIX = { anime: "AN", portrait: "PT", ink: "IK", design: "F1", painting: "PA", digital: "DG" };
function codeOf(src, cat) {
  const f = ((src || "").split("/").pop() || "").replace(/\.[a-z]+$/i, "");
  let m;
  if ((m = /^art-0*(\d+)$/.exec(f))) return (CODE_PREFIX[cat] || "AR") + "-" + m[1].padStart(2, "0");
  if ((m = /^design-0*(\d+)$/.exec(f))) return "F1-" + m[1].padStart(2, "0");
  if ((m = /^ig-0*(\d+)$/.exec(f))) return "IG-" + m[1].padStart(2, "0");
  if ((m = /^tt-0*(\d+)$/.exec(f))) return "TT-" + m[1].padStart(2, "0");
  if ((m = /^fb-photo-0*(\d+)$/.exec(f))) return "FB-P" + m[1].padStart(2, "0");
  if ((m = /^fb-reel-0*(\d+)$/.exec(f))) return "FB-R" + m[1].padStart(2, "0");
  if ((m = /^yt-short-0*(\d+)$/.exec(f))) return "YT-" + m[1].padStart(2, "0");
  return "";
}
function codeTag(code) {
  const t = document.createElement("span");
  t.className = "code-tag";
  t.textContent = code;
  return t;
}
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
        : a.cat === "design"
          ? "Graphic design"
          : "Pencil portrait";
  const name = document.createElement("b");
  name.textContent = a.title;
  cap.append(kind, name);
  fig.append(img, cap);
  const code = codeOf(a.src, a.cat);
  if (code) {
    fig.dataset.code = code;
    fig.append(codeTag(code));
  }
  const open = () => openLightbox(img.src, (code ? code + " · " : "") + a.title);
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
    grid.classList.remove("alt", "posters");
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
  const cnt = Math.min(GALLERY_PER, list.length - page * GALLERY_PER); // tiles on this slide
  grid.dataset.n = cnt > 9 ? "big" : cnt;
  const figs = list
    .slice(page * GALLERY_PER, page * GALLERY_PER + GALLERY_PER)
    .map((a, i) => makeArt(a, i + page * GALLERY_PER, i * 70, true));
  if (cnt > 9) bigLayout(figs);
  grid.append(...figs);
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

// Graphic design gallery (its own section, all posters on one page)
const designGrid = $("#designGrid");
const DESIGNS = ARTWORKS.filter((a) => a.cat === "design");
let dPage = 0;
const D_SLIDES = [[0, 11], [11, DESIGNS.length]]; // slide 1: 11-tile mosaic, slide 2: the rest
function renderDesign() {
  const total = D_SLIDES.length;
  dPage = (dPage + total) % total;
  designGrid.innerHTML = "";
  designGrid.dataset.layout = "m" + (dPage + 1);
  const [from, to] = D_SLIDES[dPage];
  DESIGNS.slice(from, to).forEach((a, i) =>
    designGrid.append(makeArt(a, 200 + i + from, i * 70, true)),
  );
  $("#dCount").textContent = `Slide ${dPage + 1} / ${total}`;
}
$("#dPrev").onclick = () => { dPage--; renderDesign(); };
$("#dNext").onclick = () => { dPage++; renderDesign(); };
if (designGrid.dataset.n || $("#dCount").tagName) renderDesign();

// Shop: framed F1 driver posters. Edit sizes, frame sizes and prices here.
const SHOP_SIZES = [
  { id: "A5", dims: "5.8 × 8.3 in", frame: "Frame 6 × 8 in", print: 530, framed: 900 },
  { id: "A4", dims: "8.3 × 11.7 in", frame: "Frame 9 × 12 in", print: 600, framed: 1420 },
  { id: "Letter", dims: "8.5 × 11 in", frame: "Frame 10 × 13 in", print: 720, framed: 1650 },
  { id: "A3", dims: "11.7 × 16.5 in", frame: "Frame 12 × 17 in", print: 950, framed: 2000 },
];
const SHOP_VARIANTS = {
  framed: { name: "framed poster", label: "Framed poster", key: "framed" },
  print: { name: "poster print (no frame)", label: "Poster print", key: "print" },
};
const peso = (n) => "₱" + n.toLocaleString("en-PH");
const sizeLines = (v, z) => [z.id + " print, " + z.dims, v.key === "framed" ? z.frame : "No frame, rolled in a tube"];
$$(".shop-row[data-products]").forEach((row) => {
  const BOTH = row.dataset.products === "both";
  let V = SHOP_VARIANTS[BOTH ? "framed" : row.dataset.products] || SHOP_VARIANTS.framed;
  const h3 = document.createElement("h3");
  h3.className = "shop-title";
  h3.textContent = row.dataset.title;
  const list = document.createElement("div");
  list.className = "prod-list";
  const TOP_VIEW = ["design-1.", "design-2.", "design-3.", "design-5.", "design-6.", "design-7.", "design-8."];
  const isTop = (a) => TOP_VIEW.some((t) => a.src.includes(t));
  const cards = [];
  const items = ARTWORKS.filter((a) => a.cat === "design" && /F1 driver poster/.test(a.title)).concat(ARTWORKS.filter(isTop));
  items.forEach((a) => {
    const tall = isTop(a);
    const driver = a.title.replace(", ", " · ").replace(/ F1 (driver )?poster/, "") + (tall ? " · Car view" : "");
    const card = document.createElement("article");
    const baseCode = codeOf(a.src, a.cat);
    card.dataset.code = baseCode;
    card.className = "prod " + (BOTH ? "framed" : row.dataset.products || "") + (tall ? " tall" : "");
    let V = SHOP_VARIANTS[BOTH ? "framed" : row.dataset.products] || SHOP_VARIANTS.framed;
    const img = new Image();
    img.src = a.src;
    img.alt = a.title;
    img.loading = "lazy";
    img.addEventListener("click", () => openLightbox(a.src, a.title));
    const name = document.createElement("h4");
    name.textContent = driver;
    const typeSel = document.createElement("select");
    typeSel.className = "prod-size prod-type";
    typeSel.setAttribute("aria-label", "Framed or print only for " + driver);
    typeSel.add(new Option("Framed poster", "framed", true, true));
    typeSel.add(new Option("Print only (no frame)", "print"));
    const sel = document.createElement("select");
    sel.className = "prod-size";
    sel.setAttribute("aria-label", "Size for " + driver);
    SHOP_SIZES.forEach((z, i) => sel.add(new Option(z.id + " (" + z.dims + ")", i, i === 1, i === 1)));
    const meta = document.createElement("p");
    meta.className = "prod-meta";
    const buy = document.createElement("div");
    buy.className = "prod-buy";
    const price = document.createElement("b");
    const order = document.createElement("a");
    order.className = "prod-order";
    order.textContent = "Order";
    const current = () => {
      const z = SHOP_SIZES[+sel.value];
      return { name: V.name, unit: z[V.key], lines: sizeLines(V, z), size: z.id, code: baseCode + "-" + (V.key === "framed" ? "FR" : "PR") + "-" + z.id.toUpperCase() };
    };
    const refresh = () => {
      if (BOTH) {
        V = SHOP_VARIANTS[typeSel.value];
        card.classList.toggle("framed", typeSel.value === "framed");
        card.classList.toggle("print", typeSel.value === "print");
      }
      const c = current();
      meta.innerHTML = "<span>" + V.label + "</span>" + c.lines.map((l) => "<span>" + l + "</span>").join("") + '<span class="prod-code">Code: ' + c.code + "</span>";
      price.textContent = peso(c.unit);
      order.href = "mailto:leanmarquez0628@yahoo.com?subject=" + encodeURIComponent("Order " + c.code + ": " + driver + " " + V.name + " " + c.size) + "&body=" + encodeURIComponent("Hi Lean, I'd like to order " + c.code + " (the " + driver + " " + V.name + ", size " + c.size + ", " + peso(c.unit) + "). My name and delivery address:");
    };
    sel.addEventListener("change", refresh);
    typeSel.addEventListener("change", refresh);
    order.addEventListener("click", (e) => {
      e.preventDefault();
      openOrder(driver, a.src, current());
    });
    refresh();
    buy.append(price, order);
    card.append(img, codeTag(baseCode), name, ...(BOTH ? [typeSel] : []), sel, meta, buy);
    cards.push(card);
  });
  const pager = document.createElement("div");
  pager.className = "pager prod-pager";
  pager.innerHTML = '<button class="arrow" aria-label="Previous slide">←</button><span>Slide 1 / 1</span><button class="arrow" aria-label="Next slide">→</button>';
  const [prevB, , nextB] = pager.children, countEl = pager.children[1];
  const mq = window.matchMedia("(max-width: 900px)");
  let pg = 0;
  const draw = () => {
    const per = mq.matches ? 2 : 4, total = Math.max(1, Math.ceil(cards.length / per));
    pg = (pg + total) % total;
    list.replaceChildren(...cards.slice(pg * per, pg * per + per));
    list.classList.remove("slide-in");
    void list.offsetWidth;
    list.classList.add("slide-in");
    countEl.textContent = `Slide ${pg + 1} / ${total}`;
  };
  prevB.onclick = () => { pg--; draw(); };
  nextB.onclick = () => { pg++; draw(); };
  if (mq.addEventListener) mq.addEventListener("change", () => { pg = 0; draw(); });
  draw();
  row.append(h3, list, pager);
});


// Seller payment details shown to buyers. Fill these in (leave "" to hide a line).
const PAYMENT = {
  GCash: { bank: "GCash", accountName: "", accountNumber: "" },
  Maya: { bank: "Maya", accountName: "", accountNumber: "" },
  "Bank transfer": { bank: "", accountName: "", accountNumber: "" },
  "Cash on pickup": null,
};

// ---- Order form (opens from every Order button, sends the order by email) ----
let orderDlg;
function openOrder(driver, src, V) {
  if (!orderDlg) {
    orderDlg = document.createElement("dialog");
    orderDlg.className = "order-dlg";
    orderDlg.innerHTML = `
      <form method="dialog" class="order-form" novalidate>
        <button type="button" class="od-x" aria-label="Close">×</button>
        <div class="od-head"><img alt="" /><div><h3></h3><p></p></div></div>
        <label>Full name<input name="name" required autocomplete="name" /></label>
        <label>Mobile number<input name="phone" required inputmode="tel" autocomplete="tel" /></label>
        <label>Email (optional)<input name="email" type="email" autocomplete="email" /></label>
        <label>Delivery address<textarea name="address" rows="2" required autocomplete="street-address"></textarea></label>
        <div class="od-row">
          <label>Quantity<span class="od-qty"><button type="button" data-d="-1">−</button><input name="qty" value="1" inputmode="numeric" readonly /><button type="button" data-d="1">+</button></span></label>
          <label>Payment<select name="pay"><option>GCash</option><option>Maya</option><option>Bank transfer</option><option>Cash on pickup</option></select></label>
        </div>
        <div class="od-pay" aria-live="polite"></div>
        <label>Name of buyer on the payment (if different)<input name="payname" /></label>
        <label>Payment reference no. (after you pay)<input name="payref" inputmode="text" /></label>
        <label>Notes (optional)<input name="notes" /></label>
        <p class="od-total"></p>
        <p class="od-err" role="alert"></p>
        <button type="submit" class="od-send">Send order by email</button>
        <p class="od-hint">This opens your email app with the order filled in. I'll reply to confirm payment and delivery.</p>
        <div class="od-done" hidden>
          <b>Almost done!</b>
          <p>Your email app should open with the order. If it didn't, copy the order and send it to leanmarquez0628@yahoo.com.</p>
          <button type="button" class="od-copy">Copy order</button>
        </div>
      </form>`;
    document.body.append(orderDlg);
    const f = $(".order-form", orderDlg);
    const total = () => {
      const q = +f.qty.value;
      $(".od-total", f).textContent = "Total: ₱" + (q * orderDlg._V.unit).toLocaleString("en-PH");
    };
    const showPay = () => {
      const p = PAYMENT[f.pay.value], box = $(".od-pay", f);
      box.replaceChildren();
      const add = (k, v) => { const r = document.createElement("div"); r.innerHTML = "<span></span><b></b>"; r.firstChild.textContent = k; r.lastChild.textContent = v; box.append(r); };
      const h = document.createElement("strong"); h.textContent = "Payment details"; box.append(h);
      if (!p) { const t = document.createElement("p"); t.textContent = "Pay in cash when you pick up your order. I'll confirm the pick-up details by message."; box.append(t); return; }
      const rows = [["Bank / e-wallet", p.bank], ["Account name", p.accountName], ["Account number", p.accountNumber]].filter((r) => r[1]);
      if (!rows.length) { const t = document.createElement("p"); t.textContent = "I'll message you the account details to pay after I receive your order."; box.append(t); }
      else rows.forEach((r) => add(r[0], r[1]));
      if (rows.length && !p.accountNumber) { const t = document.createElement("p"); t.textContent = "I'll message you the account number after I receive your order."; box.append(t); }
      add("Name of buyer", f.name.value.trim() || "(your name above)");
      add("Contact number", f.phone.value.trim() || "(your mobile number above)");
    };
    f.pay.addEventListener("change", showPay);
    f.name.addEventListener("input", showPay);
    f.phone.addEventListener("input", showPay);
    orderDlg._showPay = showPay;
    f.addEventListener("input", () => { $(".od-err", f).textContent = ""; });
    $(".od-x", f).onclick = () => orderDlg.close();
    orderDlg.addEventListener("click", (e) => { if (e.target === orderDlg) orderDlg.close(); });
    $$(".od-qty button", f).forEach((b) => (b.onclick = () => {
      f.qty.value = Math.min(10, Math.max(1, +f.qty.value + +b.dataset.d));
      total();
    }));
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const err = $(".od-err", f);
      if (!f.name.value.trim() || !f.phone.value.trim() || !f.address.value.trim()) {
        err.textContent = "Please fill in your name, mobile number and delivery address.";
        return;
      }
      err.textContent = "";
      const q = +f.qty.value, d = orderDlg.dataset.driver;
      const text = [
        "NEW ORDER, The Sketchbook Chronicles",
        "Code: " + orderDlg._V.code,
        "Item: " + d + " " + orderDlg._V.name,
        "Size: " + orderDlg._V.size,
        orderDlg._V.lines.join(" / "),
        "Quantity: " + q,
        "Total: ₱" + (q * orderDlg._V.unit).toLocaleString("en-PH") + " (" + peso(orderDlg._V.unit) + " each)",
        "Payment: " + f.pay.value,
        ...(PAYMENT[f.pay.value] ? [
          PAYMENT[f.pay.value].bank ? "Pay to: " + PAYMENT[f.pay.value].bank : null,
          PAYMENT[f.pay.value].accountName ? "Account name: " + PAYMENT[f.pay.value].accountName : null,
          PAYMENT[f.pay.value].accountNumber ? "Account number: " + PAYMENT[f.pay.value].accountNumber : null,
        ] : []),
        f.payname.value.trim() ? "Name of buyer on payment: " + f.payname.value.trim() : null,
        f.payref.value.trim() ? "Payment reference no.: " + f.payref.value.trim() : null,
        "",
        "Name: " + f.name.value.trim(),
        "Mobile: " + f.phone.value.trim(),
        f.email.value.trim() ? "Email: " + f.email.value.trim() : null,
        "Address: " + f.address.value.trim(),
        f.notes.value.trim() ? "Notes: " + f.notes.value.trim() : null,
      ].filter((l) => l !== null).join("\n");
      f.dataset.text = text;
      const mail = "mailto:leanmarquez0628@yahoo.com?subject=" + encodeURIComponent("Order " + orderDlg._V.code + ": " + d + " " + orderDlg._V.name + " x" + q) + "&body=" + encodeURIComponent(text);
      $(".od-done", f).hidden = false;
      $(".od-send", f).hidden = true;
      location.href = mail;
    });
    $(".od-copy", f).onclick = async (e) => {
      try { await navigator.clipboard.writeText(f.dataset.text || ""); e.target.textContent = "Copied!"; }
      catch { e.target.textContent = "Select and copy from your email"; }
    };
    orderDlg._total = total;
  }
  const f = $(".order-form", orderDlg);
  orderDlg._V = V;
  $(".od-head p", f).innerHTML = V.lines.join(" · ") + "<br>" + peso(V.unit) + " each<br>Code: " + V.code;
  orderDlg.dataset.driver = driver;
  $("h3", f).textContent = driver;
  $(".od-head img", f).src = src;
  f.qty.value = 1;
  $(".od-done", f).hidden = true;
  $(".od-send", f).hidden = false;
  $(".od-err", f).textContent = "";
  orderDlg._total();
  orderDlg._showPay();
  if (orderDlg.showModal) orderDlg.showModal();
  else orderDlg.setAttribute("open", "");
}

// Shop: "Coming soon" cards for Digital art and Painting (same card as the gallery tabs)
$$(".shop-row").forEach((row) => {
  const SHOP_SOON = {
    new: { label: "Painting", text: "Original paintings for sale will be available here soon." },
    special: { label: "Painting print", text: "Prints of my paintings will be available here soon." },
  };
  const c = SHOP_SOON[row.dataset.soon];
  if (!c) return;
  const h3 = document.createElement("h3");
  h3.className = "shop-title";
  h3.textContent = row.dataset.title;
  const card = document.createElement("div");
  card.className = "art soon shop-soon";
  card.innerHTML = "<small></small><b>Coming soon</b><p></p>";
  $("small", card).textContent = "✎ " + c.label;
  $("p", card).textContent = c.text;
  row.append(h3, card);
});

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
    src: "images/sketchbook/sketch-1.jpg",
    title: "Sanji Vinsmoke, One Piece",
  },
  { cat: "portrait", src: "images/sketchbook/sketch-2.jpg", title: "Portrait sketches" },
  {
    cat: "anime",
    src: "images/sketchbook/sketch-3.jpg",
    title: "Jotaro Kujo, JoJo's Bizarre Adventure",
  },
  {
    cat: "portrait",
    src: "images/sketchbook/sketch-4.jpg",
    title: "Pencil portrait study",
  },
  { cat: "portrait", src: "images/sketchbook/sketch-5.jpg", title: "Pencil portrait" },
  {
    cat: "anime",
    src: "images/sketchbook/sketch-6.jpg",
    title: "Zenitsu Agatsuma, Demon Slayer",
  },
  {
    cat: "anime",
    src: "images/sketchbook/sketch-7.jpg",
    title: "Kazutora Hanemiya, Tokyo Revengers",
  },
  {
    cat: "anime",
    src: "images/sketchbook/sketch-8.jpg",
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
    src: "images/about/about-4.jpg",
    cap: "Hi, I'm Miguel · the artist behind the drawings",
    pos: "50% 38%",
  },
  {
    src: "images/about/about-1.jpg",
    cap: "Sanji Vinsmoke· markers & colored pencil",
    pos: "50% 35%",
  },
  {
    src: "images/about/about-2.jpg",
    cap: "Portrait No 1 · Graphite Pencil",
    pos: "50% 50%",
  },
  {
    src: "images/about/about-3.jpg",
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

/* ---------- LIVE SOCIAL STATS (reads stats.json, refreshes by itself) ---------- */
(() => {
  const REFRESH_MS = 60000;
  const stamp = document.getElementById("liveStamp");
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
    if (stamp) stamp.querySelector("span").textContent = "Live numbers · updated " + t;
  }
  function apply(d) {
    document.querySelectorAll(".feed-stats").forEach((box) => {
      const src = d[box.dataset.net] || {};
      box
        .querySelectorAll("[data-stat]")
        .forEach((b) => setNum(b, src[b.dataset.stat] ?? null));
    });
    updated = d.checked || d.updated ? new Date(d.checked || d.updated).getTime() : Date.now();
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
       // stats.json not found: just show the numbers typed in the page
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
    reel: svg('<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M10 8.500v7l6-3.500z" fill="#512323"/>'),
  };
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const safeUrl = (u, fallback) => (/^(https?:\/\/|images\/)/.test(u || "") ? u : fallback);

  function tile(p, net, profile) {
    const img = safeUrl(p.img, "");
    if (!img) return "";
    const link = safeUrl(p.link, profile);
    let extra = "";
    if (net === "ig") {
      extra = ICON[p.type] ? `<span class="tag">${ICON[p.type]}</span>` : "";
    }
    else {
      if (p.pinned) extra += '<span class="pinned">Pinned</span>';
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


/* ---------- Graphic design: sliding strip (same style as the sketchbook strip) ---------- */
(() => {
  const strip = $("#designStrip");
  if (!document.getElementById("designStrip")) return;
  const list = ARTWORKS.filter((a) => a.cat === "design");
  [...list, ...list].forEach((s, k) => {
    const b = document.createElement("button");
    b.className = "sk";
    b.type = "button";
    b.setAttribute("aria-label", "Open " + s.title);
    if (k >= list.length) (b.setAttribute("aria-hidden", "true"), (b.tabIndex = -1));
    const img = new Image();
    img.alt = s.title;
    img.loading = "lazy";
    img.src = s.src;
    const cap = document.createElement("div");
    cap.className = "cap";
    cap.innerHTML = "<small>Graphic design</small><b></b>";
    $("b", cap).textContent = s.title;
    b.append(img, cap);
    b.addEventListener("click", () => openLightbox(img.src, s.title));
    strip.append(b);
  });
})();

/* ---------- Footer newsletter (opens an email to you) ---------- */
(() => {
  const f = $("#footNews");
  if (!f) return;
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const mail = $("#footEmail").value.trim();
    if (!mail) return;
    location.href =
      "mailto:leanmarquez0628@yahoo.com?subject=" +
      encodeURIComponent("Newsletter sign-up") +
      "&body=" +
      encodeURIComponent("Hi Lean, please add me to your list for new art and shop updates: " + mail);
    $("#footNote").textContent = "Thanks! Your email app will open to send the sign-up.";
  });
})();

// Painting & digital gallery (same layout as the work gallery, tabs: All / Painting / Digital art)
(function () {
  const g = $("#pdGrid");
  if (!$("#pdTabs") || !g) return;
  const DESC = {
    all: "Painting and digital art together: hand-painted pieces and digital illustrations, all in one gallery.",
    painting: "Watercolor and acrylic pieces on paper and canvas, with soft blends, layered colour and visible brush texture.",
    digital: "Clean digital illustrations and character art, from rough sketch to finished colour, made on a drawing tablet.",
  };
  const SOON = {
    all: { label: "Painting & digital", text: "Hand-painted pieces and digital illustrations are on the way." },
    painting: COMING_SOON.painting,
    digital: COMING_SOON.digital,
  };
  let f = "all", pg = 0;
  const list = () => ARTWORKS.filter((a) => (a.cat === "painting" || a.cat === "digital") && (f === "all" || a.cat === f));
  function render() {
    const l = list(), total = Math.max(1, Math.ceil(l.length / PER_SLIDE));
    const dEl = $("#pdDesc"); if (dEl) dEl.textContent = DESC[f];
    g.innerHTML = "";
    if (!l.length) {
      pg = 0; g.dataset.n = 1; g.classList.remove("alt");
      const c = SOON[f], card = document.createElement("div");
      card.className = "art soon";
      const k = document.createElement("small"), b = document.createElement("b"), t = document.createElement("p");
      k.textContent = "✎ " + c.label; b.textContent = "Coming soon"; t.textContent = c.text;
      card.append(k, b, t); g.append(card);
      $("#pdCount").textContent = "Slide 1 / 1";
      return;
    }
    pg = (pg + total) % total;
    g.classList.toggle("alt", pg % 2 === 1);
    g.dataset.n = Math.min(PER_SLIDE, l.length - pg * PER_SLIDE);
    l.slice(pg * PER_SLIDE, pg * PER_SLIDE + PER_SLIDE).forEach((a, i) => g.append(makeArt(a, 300 + i, i * 70, true)));
    $("#pdCount").textContent = `Slide ${pg + 1} / ${total}`;
  }
  $("#pdPrev").onclick = () => { pg--; render(); };
  $("#pdNext").onclick = () => { pg++; render(); };
  $("#pdTabs").addEventListener("click", (e) => {
    const b = e.target.closest(".tab");
    if (!b) return;
    $$("#pdTabs .tab").forEach((t) => t.classList.toggle("active", t === b));
    f = b.dataset.filter; pg = 0; render();
  });
  render();
})();

// Threads cards: if a picture can't load, show a tidy placeholder instead of a broken-image icon
$$(".th-card img").forEach((img) => {
  const swap = () => {
    if (img.dataset.failed) return;
    img.dataset.failed = "1";
    const ph = document.createElement("div");
    ph.className = "th-noimg";
    ph.setAttribute("role", "img");
    ph.setAttribute("aria-label", img.alt);
    ph.textContent = "✎";
    img.replaceWith(ph);
  };
  img.addEventListener("error", swap);
  if (img.complete && img.naturalWidth === 0) swap();
});


/* ---------- FACEBOOK tabs (Photos / Reels) ---------- */
(() => {
  const tabs = document.getElementById("fbTabs");
  if (!tabs) return;
  const grids = { photos: document.getElementById("fbPhotos"), reels: document.getElementById("fbReels") };
  tabs.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-fb]");
    if (!b) return;
    tabs.querySelectorAll("button").forEach((x) => {
      x.classList.toggle("on", x === b);
      x.setAttribute("aria-selected", x === b);
    });
    Object.keys(grids).forEach((k) => (grids[k].hidden = k !== b.dataset.fb));
  });
})();


/* ---------- IMAGE CODES on the Blog (data-code is written in blog.html / posts.json) ---------- */
(() => {
  const mark = () => {
    document.querySelectorAll(".feed .ftile, .feed .th-card, .feed .yt-short").forEach((el) => {
      if (el.querySelector(".code-tag")) return;
      const img = el.querySelector("img");
      const code = el.dataset.code || (img && codeOf(img.getAttribute("src")));
      if (!code) return;
      el.dataset.code = code;
      el.append(codeTag(code));
    });
  };
  mark();
  window.addEventListener("load", mark);
  new MutationObserver(mark).observe(document.body, { childList: true, subtree: true });
})();


/* ---------- Performance: decode pictures off the main thread ---------- */
(() => {
  const tune = () => document.querySelectorAll("img:not([decoding])").forEach((i) => (i.decoding = "async"));
  tune();
  let t = 0;
  new MutationObserver(() => { cancelAnimationFrame(t); t = requestAnimationFrame(tune); }).observe(document.body, { childList: true, subtree: true });
})();

/* ---------- Lightbox: Esc always closes ---------- */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lb && lb.open) lb.close();
});
