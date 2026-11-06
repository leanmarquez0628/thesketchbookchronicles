// Refreshes stats.json with your public follower / like counts.
// Run:  node update-stats.mjs        (Node 18 or newer, no packages needed)
// If a site blocks the request, the old numbers are kept, nothing breaks.
import { readFile, writeFile } from "node:fs/promises";

const TIKTOK = "lnmglmrq";
const INSTAGRAM = "lnmglmrqz";
const FILE = new URL("./stats.json", import.meta.url);
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

// "1,234" / "12.4K" / "1.2M" -> number
export function toNum(s) {
  if (s == null) return null;
  const m = String(s).replace(/,/g, "").trim().match(/^([\d.]+)\s*([KkMmBb]?)$/);
  if (!m) return null;
  const mult = { "": 1, K: 1e3, M: 1e6, B: 1e9 }[m[2].toUpperCase()];
  return Math.round(parseFloat(m[1]) * mult);
}

// TikTok puts the profile numbers in a JSON blob inside the page.
export function parseTikTok(html) {
  const blob = html.match(/<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>([\s\S]*?)<\/script>/);
  if (blob) {
    try {
      const data = JSON.parse(blob[1]);
      const st = data?.__DEFAULT_SCOPE__?.["webapp.user-detail"]?.userInfo?.stats;
      if (st && st.followerCount != null)
        return { followers: Number(st.followerCount), likes: Number(st.heartCount ?? st.heart) };
    } catch {}
  }
  const f = html.match(/"followerCount":\s*(\d+)/), l = html.match(/"heartCount":\s*(\d+)|"heart":\s*(\d+)/);
  if (f) return { followers: +f[1], likes: l ? +(l[1] ?? l[2]) : null };
  return null;
}

// Instagram's page description reads like "1,234 Followers, 56 Following, 78 Posts - ..."
export function parseInstagram(html) {
  const d = html.match(/<meta[^>]+(?:property="og:description"|name="description")[^>]+content="([^"]+)"/i);
  if (!d) return null;
  const t = d[1];
  const g = (w) => toNum((t.match(new RegExp("([\\d.,]+[KkMm]?)\\s+" + w, "i")) || [])[1]);
  const followers = g("Followers");
  if (followers == null) return null;
  return { followers, following: g("Following"), posts: g("Posts") };
}

async function get(url) {
  const r = await fetch(url, { headers: { "user-agent": UA, "accept-language": "en-US,en;q=0.9" }, redirect: "follow" });
  if (!r.ok) throw new Error(url + " -> HTTP " + r.status);
  return r.text();
}


// ---- Instagram posts from a free feed link (e.g. Behold: https://behold.so) ----
// Paste your feed's JSON link into posts.json -> instagram.feedUrl. Leave it "" to skip.
export function parseFeed(data, profile) {
  const list = Array.isArray(data) ? data : data?.posts;
  if (!Array.isArray(list)) return null;
  const posts = list
    .map((p) => {
      const img = p.sizes?.medium?.mediaUrl || p.sizes?.small?.mediaUrl || p.thumbnailUrl || p.mediaUrl || p.media_url || p.thumbnail_url;
      const kind = String(p.mediaType || p.media_type || "").toUpperCase();
      const type = p.isReel || p.media_product_type === "REELS" || kind === "VIDEO" ? "reel" : kind.startsWith("CAROUSEL") ? "carousel" : "image";
      return img ? { img, link: p.permalink || profile, type, alt: String(p.prunedCaption || p.caption || "Instagram post").slice(0, 80) } : null;
    })
    .filter(Boolean)
    .slice(0, 12);
  return posts.length ? posts : null;
}
async function updatePosts() {
  const POSTS = new URL("./posts.json", import.meta.url);
  let d;
  try {
    d = JSON.parse(await readFile(POSTS, "utf8"));
  } catch {
    return;
  }
  const url = d.instagram?.feedUrl;
  if (!url) return;
  try {
    const posts = parseFeed(JSON.parse(await get(url)), d.instagram.profile);
    if (!posts) return console.log("Instagram feed: no posts found, keeping the old ones");
    if (JSON.stringify(posts) !== JSON.stringify(d.instagram.posts)) {
      d.instagram.posts = posts;
      await writeFile(POSTS, JSON.stringify(d, null, 2) + "\n");
      console.log("posts.json updated with", posts.length, "Instagram posts");
    } else console.log("Instagram posts: no change.");
  } catch (e) {
    console.log("Instagram feed skipped:", e.message);
  }
}

// ---- Fallback sources, tried only when the normal page gives no numbers ----
async function igFallback() {
  // Instagram's own web endpoint (works from many servers, sometimes blocked)
  try {
    const r = await fetch(`https://www.instagram.com/api/v1/users/web_profile_info/?username=${INSTAGRAM}`, {
      headers: { "user-agent": UA, "x-ig-app-id": "936619743392459", accept: "*/*" },
    });
    if (r.ok) {
      const u = (await r.json())?.data?.user;
      if (u) return { followers: u.edge_followed_by?.count, following: u.edge_follow?.count, posts: u.edge_owner_to_timeline_media?.count };
    }
  } catch {}
  // A text-reader proxy that renders the page for us
  try {
    const t = await get(`https://r.jina.ai/https://www.instagram.com/${INSTAGRAM}/`);
    const g = (w) => toNum((t.match(new RegExp("([\\d.,]+[KkMm]?)\\s+" + w, "i")) || [])[1]);
    if (g("Followers") != null) return { followers: g("Followers"), following: g("Following"), posts: g("Posts") };
  } catch {}
  return null;
}
async function ttFallback() {
  try {
    const t = await get(`https://r.jina.ai/https://www.tiktok.com/@${TIKTOK}`);
    const g = (w) => toNum((t.match(new RegExp("([\\d.,]+[KkMm]?)\\s+" + w, "i")) || [])[1]);
    if (g("Followers") != null) return { followers: g("Followers"), likes: g("Likes") };
  } catch {}
  return null;
}

async function main() {
  await updatePosts();
  const stats = JSON.parse(await readFile(FILE, "utf8"));
  let changed = false;
  const take = (target, got) => {
    for (const [k, v] of Object.entries(got || {}))
      if (Number.isFinite(v) && target[k] !== v) {
        target[k] = v;
        changed = true;
      }
  };
  let tiktokOk = false, igOk = false;
  try {
    const got = parseTikTok(await get(`https://www.tiktok.com/@${TIKTOK}`));
    got ? (take((stats.tiktok ||= {}), got), (tiktokOk = true)) : console.log("TikTok: numbers not found in page, keeping old ones");
  } catch (e) {
    console.log("TikTok skipped:", e.message);
  }
  if (!tiktokOk) {
    const fb = await ttFallback();
    if (fb) { take((stats.tiktok ||= {}), fb); tiktokOk = true; console.log("TikTok: used fallback"); }
  }
  try {
    const got = parseInstagram(await get(`https://www.instagram.com/${INSTAGRAM}/`));
    got ? (take((stats.instagram ||= {}), got), (igOk = true)) : console.log("Instagram: numbers not found in page, keeping old ones");
  } catch (e) {
    console.log("Instagram skipped:", e.message);
  }
  if (!igOk) {
    const fb = await igFallback();
    if (fb) { take((stats.instagram ||= {}), fb); igOk = true; console.log("Instagram: used fallback"); }
  }
  // "updated" = when a number last changed, "checked" = when we last looked (shown on the page)
  if (changed) stats.updated = new Date().toISOString();
  if (igOk || tiktokOk) {
    stats.checked = new Date().toISOString();
    await writeFile(FILE, JSON.stringify(stats, null, 2) + "\n");
    console.log("stats.json saved:", JSON.stringify({ i: stats.instagram, t: stats.tiktok }));
  } else {
    console.log("::warning::Could not read Instagram or TikTok this time, numbers left as they were.");
  }
}
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split("/").pop())) main();
