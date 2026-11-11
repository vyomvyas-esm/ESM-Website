/*
 * The pyzo.ai site: the PYZO page of esmagico.com, served on its own domain.
 *
 *   npm run build                      # the main site, first
 *   node tools/pyzo-ai.mjs             # writes tools/out/pyzo-ai/ and tools/out/pyzo-ai.zip
 *
 * pyzo.ai shows exactly the page built for www.esmagico.com/pyzo/ (same header, footer,
 * diagrams and animations), taken from the main build so the two never drift. Every link
 * on it points back to www.esmagico.com, its canonical stays www.esmagico.com/pyzo/ so the
 * two domains do not compete in search, and any other address on pyzo.ai is sent to the
 * same address on www.esmagico.com. The result is a small Node.js app with no
 * dependencies (server.js), for Hostinger's Node.js web apps. Its files sit in site/, not
 * public/: Hostinger's web server answers a Node app's public/ itself and returns 404.
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { SITE_URL } from "./slugs.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const NEXT = path.join(ROOT, ".next");
const OUT = path.join(ROOT, "tools/out/pyzo-ai");
const SITE = path.join(OUT, "site");
const ZIP = path.join(ROOT, "tools/out/pyzo-ai.zip");

const page = path.join(NEXT, "server/app/pyzo.html");
if (!fs.existsSync(page)) throw new Error("no built PYZO page: run `npm run build` first");

/* Paths the pyzo.ai app serves itself. Everything else is the main site's. */
const LOCAL = /^\/(?:_next\/|img\/|js\/|blog\/[^/]+\.webp)/;
const toMain = (p) => `${SITE_URL}${p}`;

let html = fs.readFileSync(page, "utf8");
const before = html.length;

// links in the markup: href="/x/" -> href="https://www.esmagico.com/x/"
let links = 0;
html = html.replace(/href="(\/[^"]*)"/g, (m, p) => (LOCAL.test(p) ? m : (links++, `href="${toMain(p)}"`)));
/* The same links in the payload React hydrates from (self.__next_f strings, where quotes
   are escaped). Left relative, hydration would put the relative href back and a click
   would try to route inside pyzo.ai. */
let payload = 0;
html = html.replace(/\\"href\\":\\"(\/[^\\"]*)\\"/g, (m, p) => (LOCAL.test(p) ? m : (payload++, `\\"href\\":\\"${toMain(p)}\\"`)));
/* The header, footer and tabs are client components whose links live in the shared
   scripts, so after hydration Next's router still treats them as pages of this domain. A
   click on any link to a page goes straight to the main site instead, ahead of the
   router (window capture runs before React's listeners on the document). */
const LEAVE = `<script>(function(){var M=${JSON.stringify(SITE_URL)},L=${LOCAL};addEventListener("click",function(e){if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;var a=e.target.closest&&e.target.closest("a[href]");if(!a||a.target==="_blank")return;var h=a.getAttribute("href")||"",u=h.indexOf(M+"/")===0?h:(h.charAt(0)==="/"&&h.charAt(1)!=="/"&&!L.test(h)?M+h:"");if(!u)return;e.preventDefault();e.stopImmediatePropagation();location.href=u},true)})();</script>`;
html = html.replace("</head>", `${LEAVE}</head>`);

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(SITE, { recursive: true });
fs.writeFileSync(path.join(SITE, "index.html"), html);

/* What the page loads: the build's static output (scripts, styles, fonts; chunks load on
   demand, so all of it), the design images and the diagram scripts, and any blog artwork
   the page shows. */
fs.cpSync(path.join(NEXT, "static"), path.join(SITE, "_next/static"), { recursive: true });
fs.cpSync(path.join(ROOT, "assets/img"), path.join(SITE, "img"), { recursive: true });
fs.cpSync(path.join(ROOT, "assets/js"), path.join(SITE, "js"), { recursive: true });
const art = new Set([...html.matchAll(/\/blog\/([^"&?\\/]+\.webp)/g)].map((m) => m[1]));
art.forEach((f) => fs.cpSync(path.join(ROOT, "assets/blog", f), path.join(SITE, "blog", f)));

// every local file the page names must exist in the app
const named = new Set([...html.matchAll(/(?:src|href)="(\/(?:_next\/static|img|js|blog)\/[^"?#]+)"/g)].map((m) => m[1]));
for (const css of fs.readdirSync(path.join(SITE, "_next/static/css")))
  for (const m of fs.readFileSync(path.join(SITE, "_next/static/css", css), "utf8").matchAll(/url\((\/img\/[^)"']+)\)/g)) named.add(m[1]);
const missing = [...named].filter((p) => !fs.existsSync(path.join(SITE, p)));
if (missing.length) throw new Error(`files the page needs are missing: ${missing.join(", ")}`);

fs.writeFileSync(path.join(SITE, "robots.txt"), `User-agent: *\nAllow: /\n`);
fs.writeFileSync(path.join(OUT, "server.js"), serverSource());
fs.writeFileSync(
  path.join(OUT, "package.json"),
  JSON.stringify(
    {
      name: "pyzo-ai",
      version: "1.0.0",
      private: true,
      description: "pyzo.ai: the PYZO page of www.esmagico.com on its own domain",
      engines: { node: ">=18" },
      main: "server.js",
      scripts: { build: "node -e \"console.log('nothing to build: site/ is prebuilt')\"", start: "node server.js" },
    },
    null,
    2,
  ) + "\n",
);
fs.writeFileSync(path.join(OUT, "README.md"), readmeSource());

fs.rmSync(ZIP, { force: true });
execSync(`python -I -c "import shutil,sys; shutil.make_archive(sys.argv[1], 'zip', sys.argv[2])" "${ZIP.replace(/\.zip$/, "")}" "${OUT}"`);
const count = (d) => fs.readdirSync(d, { withFileTypes: true }).reduce((n, e) => n + (e.isDirectory() ? count(path.join(d, e.name)) : 1), 0);
console.log(`[pyzo.ai] ${links} links and ${payload} payload links point to ${SITE_URL}; ${count(OUT)} files; ${(fs.statSync(ZIP).size / 1e6).toFixed(1)} MB -> ${path.relative(ROOT, ZIP)}`);
console.log(`[pyzo.ai] page ${before} -> ${html.length} bytes; blog artwork copied: ${art.size}`);

/* ------------------------------------------------------------------ the app */
function serverSource() {
  return `/*
 * pyzo.ai: serves the PYZO page at / and its files from site/; every other address goes to
 * the same address on ${SITE_URL}. No dependencies. Generated by tools/pyzo-ai.mjs in the
 * ESM-Website repository; change the site there, not here.
 */
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const MAIN = "${SITE_URL}";
const SITE = path.join(__dirname, "site");
const PORT = Number(process.env.PORT) || 3000;
const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".json": "application/json", ".txt": "text/plain; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png",
  ".webp": "image/webp", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".avif": "image/avif",
  ".ico": "image/x-icon", ".woff2": "font/woff2", ".woff": "font/woff", ".map": "application/json",
};

function send(res, file, cache, head) {
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) return redirect(res, null);
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream", "Content-Length": st.size, "Cache-Control": cache, "X-Content-Type-Options": "nosniff" });
    if (head) return res.end();
    fs.createReadStream(file).pipe(res);
  });
}
function redirect(res, to) {
  res.writeHead(301, { Location: to || MAIN + "/pyzo/", "Cache-Control": "public, max-age=3600" });
  res.end();
}
// a path inside site/, never one that climbs out of it
function inSite(p) {
  const file = path.join(SITE, decodeURIComponent(p));
  return file.startsWith(SITE + path.sep) ? file : null;
}

http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  const host = (req.headers.host || "").toLowerCase();
  if (req.method !== "GET" && req.method !== "HEAD") { res.writeHead(405, { Allow: "GET, HEAD" }); return res.end(); }
  const head = req.method === "HEAD";
  // one address for the domain: www.pyzo.ai goes to pyzo.ai
  if (host.startsWith("www.")) return redirect(res, "https://" + host.slice(4) + url.pathname + url.search);
  const p = url.pathname;
  /* Next's router prefetches the pages its links name, from this domain. They are pages of
     the main site; "no content" lets the prefetch end quietly instead of failing on a
     cross-site redirect. */
  if (url.searchParams.has("_rsc") || req.headers["rsc"] === "1") { res.writeHead(204, { "Cache-Control": "no-store" }); return res.end(); }
  if (p === "/" || p === "/index.html") return send(res, path.join(SITE, "index.html"), "public, max-age=300", head);
  if (p === "/robots.txt") return send(res, path.join(SITE, "robots.txt"), "public, max-age=86400", head);
  if (p.startsWith("/_next/static/")) { const f = inSite(p); return f ? send(res, f, "public, max-age=31536000, immutable", head) : redirect(res, null); }
  // the main site resizes images on its server; here the original file is served as is
  if (p === "/_next/image" || p === "/_next/image/") { const src = url.searchParams.get("url") || ""; const f = src.startsWith("/") ? inSite(src) : null; return f ? send(res, f, "public, max-age=86400", head) : redirect(res, null); }
  if (/^\\/(img|js|blog)\\//.test(p)) { const f = inSite(p); if (f && fs.existsSync(f)) return send(res, f, "public, max-age=86400", head); }
  // anything else is a page of the main site
  return redirect(res, MAIN + p + url.search);
}).listen(PORT, () => console.log("pyzo.ai serving on port " + PORT));
`;
}

function readmeSource() {
  return `# pyzo.ai

The PYZO page of ${SITE_URL}/pyzo/ on its own domain. Generated by \`tools/pyzo-ai.mjs\` in
the ESM-Website repository; change the site there and regenerate, rather than editing here.

- \`server.js\` serves the page at \`/\` and its files from \`site/\`. Every other address
  (old pyzo.ai links included) is sent permanently to the same address on ${SITE_URL}.
- \`www.pyzo.ai\` is sent to \`pyzo.ai\`.
- No dependencies and nothing to build.

## Hostinger (Node.js web app)

1. Websites → Create site → Web App → upload this zip.
2. Framework: Other. Node 18 or newer. Build command: none (or \`npm run build\`, which
   does nothing). Start command \`npm start\`; entry file \`server.js\`.
3. Attach pyzo.ai and www.pyzo.ai, with SSL on both. This replaces the site pyzo.ai shows
   today.
`;
}
