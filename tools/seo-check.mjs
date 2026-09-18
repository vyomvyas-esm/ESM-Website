/*
 * SEO verification, run after `next build`:
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

  const noindex = all.filter((p) => p.robots && /noindex/.test(p.robots)).map((p) => p.route);
  console.log(`noindex: ${noindex.join(", ") || "none"}`);
  const articles = all.filter((p) => p.ogType === "article").length;
  console.log(`og:type article: ${articles}, website: ${all.filter((p) => p.ogType === "website").length}`);
}

/* Brand rules over the diff. Files that quote existing content verbatim are skipped:
   blog bodies and titles (data/blog-*.ts) and the two review documents that list current
   titles for a human. Everything else, including every page, component, lib and doc
   we write, must be clean. */
const SKIP = [/^data\/blog-posts\.ts$/, /^data\/blog-index\.ts$/, /^docs\/seo-url-map\.md$/, /^docs\/seo-title-review\.md$/];
const RULES = [
  { name: "em/en dash", re: /[–—]/ },
  { name: "run-word", re: /\b(run|running|runs)\b/i },
  { name: "build-word", re: /\b(build|built|building)\b/i },
];
function checkBrand() {
  const diff = execSync("git diff main -- . :!package-lock.json", { cwd: ROOT, encoding: "utf8", maxBuffer: 1 << 28 });
  let file = "";
  let skip = false;
  let hits = 0;
  for (const line of diff.split("\n")) {
    const m = line.match(/^\+\+\+ b\/(.*)$/);
    if (m) {
      file = m[1];
      skip = SKIP.some((re) => re.test(file));
      continue;
    }
    if (skip || !line.startsWith("+") || line.startsWith("+++")) continue;
    for (const r of RULES) {
      if (r.re.test(line)) {
        hits++;
        console.error(`${r.name}: ${file}: ${line.slice(1, 160)}`);
      }
    }
  }
  console.log(`brand grep: ${hits} hits`);
  if (hits) fail("brand rules violated in the diff");
}

if (process.argv.includes("--brand")) checkBrand();
else checkPages();
