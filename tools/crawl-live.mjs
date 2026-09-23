/*
 * Discovers the addresses the live esmagico.com serves today, so the redirect map can be
 * written against real URLs rather than a guess. This is a stand-in for the Search
 * Console export: it finds what is linked, not what is indexed, so an orphaned page that
 * still ranks will not appear. Treat the output as a floor, not a complete list.
 *
 *   node tools/crawl-live.mjs [--max 400]
 *
 * Writes docs/live-urls.json. Polite: one request at a time, small delay, skips assets.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const ORIGIN = "https://esmagico.com";
const MAX = Number(process.argv[process.argv.indexOf("--max") + 1]) || 400;
const ASSET = /\.(js|css|png|jpe?g|svg|webp|avif|gif|ico|woff2?|ttf|map|xml|txt|pdf|mp4|json)$/i;

const seen = new Map(); // path -> { status, title, links }
const queue = ["/"];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const normalise = (href, from) => {
  let u;
  try {
    u = new URL(href, ORIGIN + from);
  } catch {
    return null;
  }
  if (u.origin !== ORIGIN && u.hostname !== "www.esmagico.com") return null;
  if (ASSET.test(u.pathname) || u.pathname.startsWith("/_next/")) return null;
  return u.pathname.replace(/\/{2,}/g, "/");
};

while (queue.length && seen.size < MAX) {
  const p = queue.shift();
  if (seen.has(p)) continue;
  let res, html = "";
  try {
    res = await fetch(ORIGIN + p, { redirect: "manual", headers: { "user-agent": "esmagico-seo-audit" } });
    if (res.status >= 200 && res.status < 300) html = await res.text();
  } catch (e) {
    seen.set(p, { status: "error", error: String(e.message) });
    continue;
  }
  const title = (html.match(/<title[^>]*>([^<]*)<\/title>/) || [])[1]?.trim() ?? "";
  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] ?? "";
  const links = [...html.matchAll(/href="([^"]*)"/g)].map((m) => normalise(m[1], p)).filter(Boolean);
  seen.set(p, {
    status: res.status,
    ...(res.status >= 300 && res.status < 400 ? { location: res.headers.get("location") } : {}),
    title,
    ...(canonical ? { canonical } : {}),
  });
  for (const l of new Set(links)) if (!seen.has(l) && !queue.includes(l)) queue.push(l);
  await sleep(120);
}

const pages = [...seen].sort(([a], [b]) => a.localeCompare(b));
fs.writeFileSync(
  path.join(ROOT, "docs/live-urls.json"),
  JSON.stringify(
    {
      $comment:
        "Addresses the live esmagico.com served when crawled. Discovered by following links from the home page, so it is a floor rather than the full indexed set; the Search Console export is still worth cross-checking against it.",
      crawledAt: new Date().toISOString().slice(0, 10),
      origin: ORIGIN,
      count: pages.length,
      pages: Object.fromEntries(pages),
    },
    null,
    2,
  ) + "\n",
);
console.log(`[crawl-live] ${pages.length} addresses; ${pages.filter(([, v]) => v.status === 200).length} returned 200`);
for (const [p, v] of pages) console.log(`  ${String(v.status).padEnd(5)} ${p}${v.location ? " -> " + v.location : ""}`);
