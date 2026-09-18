/*
 * SEO verification, executed after `next build`:
 *
 *   node tools/seo-check.mjs            # page assertions over .next/server/app/** /*.html
 *   node tools/seo-check.mjs --brand    # brand-rule grep over the diff against main (added lines)
 *
 * Page assertions: expected route count, unique titles, unique canonicals, no duplicate
 * descriptions, exactly one <h1>, canonical matches the file's route, every page has a
 * title of its own and either a description or a listing in docs/seo-needs-copy.md.
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = path.resolve(import.meta.dirname, "..");
const EXPECTED_ROUTES = 359;
const fail = (msg) => {
  console.error("FAIL:", msg);
  process.exitCode = 1;
};

function pages() {
  const out = [];
  const dir = path.join(ROOT, ".next/server/app");
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith(".html") && !/^_(not-found|global-error)\.html$/.test(e.name)) out.push(p);
    }
  };
  walk(dir);
  return out.map((file) => {
    const rel = path.relative(dir, file).replace(/\\/g, "/").replace(/\.html$/, "");
    const route = rel === "index" ? "/" : `/${rel}/`;
    const html = fs.readFileSync(file, "utf8");
    const pick = (re) => (html.match(re) || [])[1];
    return {
      route,
      title: pick(/<title>([^<]*)<\/title>/),
      description: pick(/<meta name="description" content="([^"]*)"/),
      canonical: pick(/<link rel="canonical" href="([^"]*)"/),
      robots: pick(/<meta name="robots" content="([^"]*)"/),
      h1s: (html.match(/<h1[\s>]/g) || []).length,
      ogType: pick(/<meta property="og:type" content="([^"]*)"/),
      jsonld: [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].flatMap((m) => JSON.parse(m[1])["@graph"]),
      crumb: (() => {
        const nav = html.match(/<nav class="crumb[^"]*" aria-label="Breadcrumb">(.*?)<\/nav>/);
        if (!nav) return null;
        return [...nav[1].matchAll(/<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>|<span aria-current="page">([^<]*)<\/span>|<span class="text-white\/45">([^<]*)<\/span>/g)].map((m) =>
          m[1] ? { label: m[2], href: m[1] } : { label: m[3] ?? m[4] },
        );
      })(),
    };
  });
}

function checkPages() {
  const all = pages();
  const needsCopy = new Set(
    [...fs.readFileSync(path.join(ROOT, "docs/seo-needs-copy.md"), "utf8").matchAll(/^\| `([^`]+)` \|/gm)].map((m) => m[1]),
  );
  console.log(`routes: ${all.length}`);
  if (all.length !== EXPECTED_ROUTES) fail(`expected ${EXPECTED_ROUTES} routes, found ${all.length}`);

  const dupes = (key) => {
    const seen = new Map();
    for (const p of all) {
      const v = p[key];
      if (!v) continue;
      seen.set(v, [...(seen.get(v) || []), p.route]);
    }
    return [...seen].filter(([, r]) => r.length > 1);
  };
  const noTitle = all.filter((p) => !p.title || p.title === "Es Magico");
  if (noTitle.length) fail(`pages without their own title: ${noTitle.map((p) => p.route).join(", ")}`);
  const dupTitles = dupes("title");
  console.log(`unique titles: ${all.length - dupTitles.reduce((n, [, r]) => n + r.length - 1, 0)}`);
  if (dupTitles.length) fail(`duplicate titles: ${JSON.stringify(dupTitles)}`);

  const noCanon = all.filter((p) => !p.canonical);
  if (noCanon.length) fail(`pages without canonical: ${noCanon.map((p) => p.route).join(", ")}`);
  const wrongCanon = all.filter((p) => p.canonical && p.canonical !== `https://esmagico.com${p.route}`);
  if (wrongCanon.length) fail(`canonical does not match route: ${wrongCanon.map((p) => `${p.route} -> ${p.canonical}`).join(", ")}`);
  const dupCanon = dupes("canonical");
  console.log(`unique canonicals: ${all.length - dupCanon.reduce((n, [, r]) => n + r.length - 1, 0)}`);
  if (dupCanon.length) fail(`duplicate canonicals: ${JSON.stringify(dupCanon)}`);

  const dupDesc = dupes("description");
  const withDesc = all.filter((p) => p.description);
  console.log(`descriptions: ${withDesc.length} set, ${all.length - withDesc.length} empty (listed for a human), ${dupDesc.length} duplicates`);
  if (dupDesc.length) fail(`duplicate descriptions: ${JSON.stringify(dupDesc)}`);
  const tooLong = withDesc.filter((p) => p.description.length >= 155);
  if (tooLong.length) fail(`descriptions of 155+ chars: ${tooLong.map((p) => p.route).join(", ")}`);
  const unlisted = all.filter((p) => !p.description && !needsCopy.has(p.route));
  if (unlisted.length) fail(`empty description not listed in docs/seo-needs-copy.md: ${unlisted.map((p) => p.route).join(", ")}`);

  const h1 = all.filter((p) => p.h1s !== 1);
  console.log(`pages with exactly one <h1>: ${all.length - h1.length}`);
  if (h1.length) fail(`h1 count != 1: ${h1.map((p) => `${p.route} (${p.h1s})`).join(", ")}`);

  /* structured data: every page carries Organization + WebSite; every page below home a
     BreadcrumbList whose linked items and last item are the visible crumb's; the
     templates carry their own type. */
  const decode = (t) => t.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"');
  const ldIssues = [];
  for (const p of all) {
    const types = p.jsonld.map((n) => n["@type"]);
    if (!types.includes("Organization") || !types.includes("WebSite")) ldIssues.push(`${p.route}: no Organization/WebSite`);
    if (p.route !== "/") {
      const bl = p.jsonld.find((n) => n["@type"] === "BreadcrumbList");
      if (!bl || !p.crumb) ldIssues.push(`${p.route}: missing BreadcrumbList or visible crumb`);
      else {
        const expect = p.crumb.filter((c, i) => c.href || i === p.crumb.length - 1).map((c) => ({ name: decode(c.label), item: c.href ? `https://esmagico.com${c.href}` : undefined }));
        const got = bl.itemListElement.map((i) => ({ name: i.name, item: i.item }));
        if (JSON.stringify(expect) !== JSON.stringify(got)) ldIssues.push(`${p.route}: breadcrumb schema differs from visible crumb`);
      }
    }
    if (p.route.startsWith("/blog/") && p.route !== "/blog/" && !types.includes("BlogPosting")) ldIssues.push(`${p.route}: no BlogPosting`);
    if (/^\/(pyzo|industries)\/(bfsi|healthcare|public-sector|retail)?\/?$/.test(p.route) && p.route !== "/pyzo/" && p.route.startsWith("/industries") && !types.includes("FAQPage")) ldIssues.push(`${p.route}: no FAQPage`);
    if (p.route === "/pyzo/" && !types.includes("FAQPage")) ldIssues.push(`${p.route}: no FAQPage`);
    if ((/^\/pyzo\/[a-z]+\/$/.test(p.route) || p.route.startsWith("/engineering/")) && !types.includes("Service")) ldIssues.push(`${p.route}: no Service`);
  }
  const counts = {};
  for (const p of all) for (const n of p.jsonld) counts[n["@type"]] = (counts[n["@type"]] || 0) + 1;
  console.log(`json-ld nodes: ${Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(", ")}`);
  console.log(`json-ld issues: ${ldIssues.length}`);
  if (ldIssues.length) fail(ldIssues.slice(0, 8).join("; "));

  const noindex = all.filter((p) => p.robots && /noindex/.test(p.robots)).map((p) => p.route);
  console.log(`noindex: ${noindex.join(", ") || "none"}`);
  const articles = all.filter((p) => p.ogType === "article").length;
  console.log(`og:type article: ${articles}, website: ${all.filter((p) => p.ogType === "website").length}`);
}

/* Brand rules over the diff against main, including untracked files. Skipped, because
   they quote existing content verbatim: the extracted content data (data/*.ts; the alt
   text generated into it is checked separately below), the slug map (prototype slugs), the alt overrides (article headings)
   and the review documents that list current titles for a human. In every other file,
   added lines are checked with code spans removed (a quoted path is not prose), and a
   line may carry `brand-rules: allow` only where it defines the rules themselves. */
const SKIP = [/^data\//, /^tools\/slugs\.mjs$/, /^tools\/alt-overrides\.mjs$/, /^docs\/seo-url-map\.md$/, /^docs\/seo-title-review\.md$/, /^docs\/seo-alt-text-review\.md$/, /^public\//, /package-lock\.json$/];
const RULES = [
  { name: "em/en dash", re: /[–—]/ }, // brand-rules: allow
  { name: "run-word", re: /\b(run|running|runs)\b/i }, // brand-rules: allow
  { name: "build-word", re: /\b(build|built|building)\b/i }, // brand-rules: allow
];
function checkBrand() {
  let diff = execSync("git diff main -- .", { cwd: ROOT, encoding: "utf8", maxBuffer: 1 << 28 });
  const untracked = execSync("git ls-files --others --exclude-standard", { cwd: ROOT, encoding: "utf8" }).split("\n").filter(Boolean);
  for (const f of untracked) {
    if (/\.(webp|png|jpg|svg|avif)$/.test(f)) continue;
    diff += `\n+++ b/${f}\n` + fs.readFileSync(path.join(ROOT, f), "utf8").split("\n").map((l) => "+" + l).join("\n");
  }
  let file = "";
  let skip = false;
  let hits = 0;
  for (const raw of diff.split("\n")) {
    const m = raw.match(/^\+\+\+ b\/(.*)$/);
    if (m) {
      file = m[1];
      skip = SKIP.some((re) => re.test(file));
      continue;
    }
    if (skip || !raw.startsWith("+") || raw.startsWith("+++") || raw.includes("brand-rules: allow")) continue;
    const line = raw.replace(/`[^`]*`/g, "");
    for (const r of RULES) {
      if (r.re.test(line)) {
        hits++;
        console.error(`${r.name}: ${file}: ${line.slice(1, 160)}`);
      }
    }
  }
  console.log(`brand grep: ${hits} hits`);
  if (hits) fail("brand rules violated in the diff");

  // alt text is generated into the (otherwise skipped) blog data, so it is checked on its own
  const alts = [...fs.readFileSync(path.join(ROOT, "data/blog-posts.ts"), "utf8").matchAll(/"alt": ("(?:[^"\\]|\\.)*")/g)].map((m) => JSON.parse(m[1]));
  const badAlt = alts.filter((a) => RULES.some((r) => r.re.test(a)) || a.length > 124 || !a.trim());
  console.log(`alt texts: ${alts.length} checked, ${badAlt.length} violations`);
  if (badAlt.length) fail(`alt text violations: ${badAlt.slice(0, 5).join(" | ")}`);
}

if (process.argv.includes("--brand")) checkBrand();
else checkPages();
