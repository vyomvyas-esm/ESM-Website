/*
 * One-shot converter: turns the single-file SPA (tools/src/site.html) into
 * the Next.js project layout. It is deterministic and safe to re-run.
 *
 *   node --experimental-strip-types tools/convert.mjs
 *
 * What it produces
 *   public/img/*              base64 assets from the CSS and HTML, as files
 *   styles/site.css           the hand-written CSS layer, with assets re-pointed
 *   data/*.ts                 blog posts, case studies, reports, proof, panels…
 *   app/** /page.tsx           static pages, converted to JSX
 *   tools/out/*.tsx           reference JSX for the hand-written components
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import * as parse5 from "parse5";
import prettier from "prettier";
import { ROUTES, blogSlug, caseStudySlug } from "./slugs.mjs";
import { firstSentences } from "../lib/seo.ts";
import { blogImages } from "../data/blog-images.ts";
import { ALT_OVERRIDES } from "./alt-overrides.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "tools/src/site.html");
const OUT_REF = path.join(ROOT, "tools/out");
const html = fs.readFileSync(SRC, "utf8");

const log = (...a) => console.log("[convert]", ...a);
const write = (rel, content) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
};

/* ------------------------------------------------------------------ split */
const css = html.slice(html.indexOf("<style>") + 7, html.indexOf("</style>"));
const bodyStart = html.indexOf("<body");
const bodyOpenEnd = html.indexOf(">", bodyStart) + 1;
const scriptStart = html.lastIndexOf("<script>");
const scriptEnd = html.lastIndexOf("</script>");
let body = html.slice(bodyOpenEnd, scriptStart);
const script = html.slice(scriptStart + 8, scriptEnd);
const DATA = JSON.parse(script.match(/const DATA = (.*);\r?\n/)[1]);
const TITLES = DATA.titles;

/* ----------------------------------------------------------------- assets */
const MIME_EXT = {
  "image/png": "png",
  "image/webp": "webp",
  "image/svg+xml": "svg",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/gif": "gif",
  "image/avif": "avif",
};
const seenAssets = new Map(); // sha1 -> public path
function saveAsset(mime, b64, hint) {
  const buf = Buffer.from(b64, "base64");
  const sha = crypto.createHash("sha1").update(buf).digest("hex");
  if (seenAssets.has(sha)) return seenAssets.get(sha);
  const ext = MIME_EXT[mime] || "bin";
  const name = `${hint || sha.slice(0, 10)}.${ext}`;
  write(`public/img/${name}`, buf);
  const pub = `/img/${name}`;
  seenAssets.set(sha, pub);
  return pub;
}

/* -------------------------------------------------------------------- css */
let site = css.slice(css.indexOf(":root{"));
// CSS variables that hold a base64 image become real files named after the variable
site = site.replace(
  /(--[\w-]+)\s*:\s*url\("data:([^;"]+);base64,([^"]+)"\)/g,
  (_, v, mime, b64) => `${v}:url("${saveAsset(mime, b64, v.slice(2))}")`,
);
site = site.replace(
  /url\("data:([^;"]+);base64,([^"]+)"\)/g,
  (_, mime, b64) => `url("${saveAsset(mime, b64)}")`,
);
// the SPA page switch is now routing
site = site.replace(/\.page\{\s*display:none\s*\}\s*/, "").replace(/\.page\.is-active\{\s*display:block\s*\}\s*/, "");
// fonts are self-hosted through next/font and exposed as variables
site = site.replaceAll("Inter,system-ui,sans-serif", "var(--font-inter),system-ui,sans-serif");
site = site.replaceAll('"Schibsted Grotesk",system-ui,sans-serif', "var(--font-schibsted),system-ui,sans-serif");
if (/base64/.test(site)) throw new Error("base64 left in css");
write(
  "styles/site.css",
  `/* The site's own design layer, carried over from the original build.\n   Tokens live on :root; Tailwind utilities are layered underneath in globals.css. */\n\n${site.trim()}\n`,
);
log("css written, assets:", seenAssets.size);

// base64 images in the markup (report covers) become files too
body = body.replace(
  /data:(image\/[a-z+]+);base64,([A-Za-z0-9+/=]+)/g,
  (_, mime, b64) => saveAsset(mime, b64),
);
// blog artwork loads from /public/blog
body = body.replace(/src="assets\/blog\/([^"]+)"\s+data-blog="[^"]+"/g, 'src="/blog/$1"');
body = body.replace(/\s+data-blog="[^"]+"/g, "");

/* Pixel size of a PNG or WebP from its header, read synchronously so no file handle
   lingers across the renames below (sharp's async metadata does on Windows). */
function readDims(file) {
  const b = fs.readFileSync(file);
  if (b.subarray(1, 4).toString() === "PNG") return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  if (b.subarray(8, 12).toString() === "WEBP") {
    const chunk = b.subarray(12, 16).toString();
    if (chunk === "VP8 ") return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
    if (chunk === "VP8L") {
      const bits = b.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (chunk === "VP8X") return { width: b.readUIntLE(24, 3) + 1, height: b.readUIntLE(27, 3) + 1 };
  }
  throw new Error(`cannot read dimensions of ${file}`);
}
// assets renamed after extraction (report covers) keep resolving under their old path
const renamedAssets = {};
const assetPath = (src) => renamedAssets[src] ?? src;
const dimsOf = (src) => readDims(path.join(ROOT, "public", assetPath(src)));

/* ------------------------------------------------------------------- dom */
const doc = parse5.parseFragment(body);
const isEl = (n) => !!n.tagName;
const attr = (n, k) => n.attrs?.find((a) => (a.prefix ? `${a.prefix}:${a.name}` : a.name) === k)?.value;
const cls = (n) => (attr(n, "class") || "").split(/\s+/).filter(Boolean);
const hasCls = (n, c) => cls(n).includes(c);
function* walk(n) {
  for (const c of n.childNodes || []) {
    if (isEl(c)) {
      yield c;
      yield* walk(c);
    }
  }
}
const q = (n, pred) => {
  for (const c of walk(n)) if (pred(c)) return c;
  return null;
};
const qa = (n, pred) => [...walk(n)].filter(pred);
const byCls = (c) => (n) => hasCls(n, c);
const byId = (id) => (n) => attr(n, "id") === id;
const text = (n) =>
  (n.childNodes || [])
    .map((c) => (c.nodeName === "#text" ? c.value : isEl(c) ? text(c) : ""))
    .join("")
    .replace(/\s+/g, " ")
    .trim();
const innerHTML = (n) => parse5.serialize(n).trim();
const children = (n) => (n.childNodes || []).filter(isEl);

const mains = children(doc).filter((n) => n.tagName === "main");
const pageOf = (id) => mains.find((m) => attr(m, "id") === `page-${id}`);
const header = children(doc).find((n) => n.tagName === "header");
const footer = children(doc).find((n) => n.tagName === "footer");
log("pages:", mains.length);

/* ---------------------------------------------------------------- routes */
const ANCHORS = new Set(["cta", "proof", "sectors", "pyzo-proof", "svc-proof", "ind-uses"]);
export function routeFor(nav) {
  if (ANCHORS.has(nav)) return `#${nav}`;
  if (ROUTES[nav]) return ROUTES[nav];
  if (nav.startsWith("blog-")) return `/blog/${blogSlug(nav.slice(5))}/`;
  if (nav.startsWith("cs-")) return `/case-studies/${caseStudySlug(nav.slice(3))}/`;
  throw new Error(`unknown nav target: ${nav}`);
}

/* ------------------------------------------------------------ jsx output */
const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
const INLINE = new Set([
  "a", "abbr", "b", "bdi", "bdo", "br", "button", "cite", "code", "data", "dfn", "em", "i", "img", "input",
  "kbd", "label", "mark", "q", "s", "samp", "select", "small", "span", "strong", "sub", "sup", "svg", "time",
  "u", "var", "wbr", "use", "path", "circle", "rect", "g", "line", "polyline", "polygon", "ellipse", "defs",
  "linearGradient", "radialGradient", "stop", "clipPath", "mask", "text", "tspan", "title",
]);
const ATTR_MAP = {
  class: "className", for: "htmlFor", tabindex: "tabIndex", readonly: "readOnly", maxlength: "maxLength",
  minlength: "minLength", autocomplete: "autoComplete", autofocus: "autoFocus", enctype: "encType",
  novalidate: "noValidate", srcset: "srcSet", crossorigin: "crossOrigin", datetime: "dateTime",
  colspan: "colSpan", rowspan: "rowSpan", accesskey: "accessKey", contenteditable: "contentEditable",
  spellcheck: "spellCheck", inputmode: "inputMode", frameborder: "frameBorder", allowfullscreen: "allowFullScreen",
  playsinline: "playsInline", autoplay: "autoPlay", formnovalidate: "formNoValidate", "accept-charset": "acceptCharset",
  usemap: "useMap", referrerpolicy: "referrerPolicy", hreflang: "hrefLang", "xlink:href": "xlinkHref",
  "xml:space": "xmlSpace", "xmlns:xlink": "xmlnsXlink", checked: "defaultChecked",
};
const BOOL = new Set([
  "hidden", "disabled", "required", "open", "multiple", "readOnly", "autoFocus", "noValidate", "defaultChecked",
  "defer", "async", "loop", "muted", "controls", "autoPlay", "playsInline", "allowFullScreen", "formNoValidate",
]);

const escText = (t) =>
  t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\{/g, "&#123;").replace(/\}/g, "&#125;").replace(/ /g, "&nbsp;");
const escAttr = (v) => `"${v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/\r?\n/g, " ")}"`;

function styleToObj(s) {
  const out = [];
  for (const d of s.split(";")) {
    const i = d.indexOf(":");
    if (i < 0) continue;
    const k = d.slice(0, i).trim();
    const v = d.slice(i + 1).trim();
    if (!k) continue;
    const key = k.startsWith("--")
      ? JSON.stringify(k)
      : k.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out.push(`${key}: ${JSON.stringify(v)}`);
  }
  return `{{ ${out.join(", ")} }}`;
}

function jsxAttrName(raw, inSvg) {
  if (ATTR_MAP[raw]) return ATTR_MAP[raw];
  if (raw.startsWith("data-") || raw.startsWith("aria-")) return raw;
  if (inSvg && raw.includes("-")) return raw.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  return raw;
}

const isInline = (n) => n.nodeName === "#text" || INLINE.has(n.tagName);

/**
 * ctx: { replace(node) -> string | null | undefined, attrs(node, map) -> void, usesLink: bool, buttons: [] }
 */
function serialize(node, ctx, inSvg = false) {
  if (node.nodeName === "#comment") return "";
  if (node.nodeName === "#text") throw new Error("text handled by parent");
  const replaced = ctx.replace?.(node);
  if (replaced === null) return "";
  if (typeof replaced === "string") return replaced;

  let tag = node.tagName;
  const svg = inSvg || tag === "svg";
  const attrs = new Map();
  for (const a of node.attrs) attrs.set(a.prefix ? `${a.prefix}:${a.name}` : a.name, a.value);
  ctx.attrs?.(node, attrs);

  if (tag === "img" && (attrs.get("src") || "").startsWith("/img/")) {
    // local raster through next/image with explicit dimensions (SEO brief, Phase 5.1)
    const { width, height } = dimsOf(attrs.get("src"));
    attrs.set("src", assetPath(attrs.get("src")));
    ctx.usesImage = true;
    const extra = [];
    if (attrs.has("class")) extra.push(`className=${escAttr(attrs.get("class"))}`);
    if (attrs.has("loading")) extra.push(`loading=${escAttr(attrs.get("loading"))}`);
    if (attrs.has("sizes")) extra.push(`sizes=${escAttr(attrs.get("sizes"))}`);
    return `<Image src=${escAttr(attrs.get("src"))} width={${width}} height={${height}} alt=${escAttr(attrs.get("alt") ?? "")} ${extra.join(" ")} />`;
  }
  if (attrs.has("data-wave")) {
    ctx.usesWaveform = true;
    return `<Waveform n={${Number(attrs.get("data-wave"))}} className=${escAttr(attrs.get("class") || "")} />`;
  }
  const nav = attrs.get("data-nav");
  if (nav !== undefined) {
    const href = routeFor(nav);
    attrs.delete("data-nav");
    attrs.delete("type");
    attrs.set("href", href);
    if (href.startsWith("#")) tag = "a";
    else {
      tag = "Link";
      ctx.usesLink = true;
    }
  }
  if (attrs.get("data-sec") === "cta") attrs.set("id", "cta");
  if (tag === "button" && !attrs.has("type")) ctx.buttons?.push(attrs.get("class") || attrs.get("id") || "?");

  const parts = [];
  for (const [k, v] of attrs) {
    const name = jsxAttrName(k, svg);
    if (name === "style") parts.push(`style=${styleToObj(v)}`);
    else if (name === "className") parts.push(`className=${escAttr(v.replace(/\s+/g, " ").trim())}`);
    else if (BOOL.has(name)) parts.push(v === "" || v === name || v === "true" ? name : `${name}={${JSON.stringify(v)}}`);
    else if (name === "value" && (tag === "input" || tag === "textarea")) parts.push(`defaultValue=${escAttr(v)}`);
    else if (name === "selected") log("warn: <option selected> dropped");
    else parts.push(`${name}=${escAttr(v)}`);
  }
  const open = `<${tag}${parts.length ? " " + parts.join(" ") : ""}`;
  const kids = (node.childNodes || []).filter((n) => n.nodeName !== "#comment");
  if (VOID.has(tag) || (svg && kids.length === 0)) return `${open} />`;
  const inner = serializeChildren(node, kids, ctx, svg);
  const block = !isInline(node);
  return block ? `\n${open}>${inner}</${tag}>\n` : `${open}>${inner}</${tag}>`;
}

function serializeChildren(parent, kids, ctx, svg) {
  const pre = parent.tagName === "pre" || parent.tagName === "textarea";
  const out = [];
  for (let i = 0; i < kids.length; i++) {
    const n = kids[i];
    if (n.nodeName !== "#text") {
      out.push(serialize(n, ctx, svg));
      continue;
    }
    if (pre) {
      out.push(`{${JSON.stringify(n.value)}}`);
      continue;
    }
    let t = n.value.replace(/\s+/g, " ");
    if (svg) {
      // whitespace between SVG nodes is never rendered
      if (t.trim()) out.push(escText(t.trim()));
      continue;
    }
    const prev = kids[i - 1];
    const next = kids[i + 1];
    const prevInline = prev ? isInline(prev) : false;
    const nextInline = next ? isInline(next) : false;
    if (t === " ") {
      if (prevInline && nextInline) out.push('{" "}');
      continue;
    }
    const lead = t.startsWith(" ") && prevInline;
    const trail = t.endsWith(" ") && nextInline;
    out.push((lead ? '{" "}' : "") + escText(t.trim()) + (trail ? '{" "}' : ""));
  }
  return out.join("");
}

async function format(code) {
  return prettier.format(code, { parser: "typescript", printWidth: 110 });
}

/* ------------------------------------------------------------ static pages */
const componentName = (id) =>
  id
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join("")
    .replace(/[^A-Za-z0-9]/g, "") + "Page";

/* Meta description per the SEO brief: the hero lede as written, trimmed to whole
   sentences under the limit; otherwise the first body paragraph; otherwise empty and
   listed for a human. Never paraphrased. */
const needsCopy = [];
function describe(id, main) {
  // candidates in page order: every hero lede, then the first body paragraph
  const ledes = qa(main, byCls("lede"));
  const body = q(main, (n) => n.tagName === "p" && hasCls(n.parentNode, "prose"));
  const candidates = [...ledes, ...(body ? [body] : [])];
  for (const c of candidates) {
    const d = firstSentences(text(c));
    if (d) return d;
  }
  needsCopy.push({
    path: ROUTES[id],
    reason: candidates.length
      ? `no sentence under the limit in the lede or first body paragraph (${candidates.map((c) => text(c).length).join(", ")} chars)`
      : "no lede or body paragraph on the page",
  });
  return "";
}
const stripSuffix = (t) => t.replace(/\s*-\s*Es Magico$/, "");

/* The visible breadcrumb becomes <Breadcrumbs items=…/>, which renders the same markup
   and the BreadcrumbList schema from one list (SEO brief, Phase 3). Items are read from
   the prototype's nav exactly as shown: a link, a label that is not a page, or the
   current page. */
function crumbItems(nav) {
  const items = [];
  for (const c of children(nav)) {
    if (hasCls(c, "sep")) continue;
    const nav = attr(c, "data-nav");
    if (nav) items.push({ label: text(c), href: routeFor(nav) });
    else if (c.tagName === "a" && attr(c, "href")) items.push({ label: text(c), href: attr(c, "href") });
    else items.push({ label: text(c) });
  }
  return items;
}
const crumbReplace = (node) => {
  if (node.tagName === "nav" && hasCls(node, "crumb")) {
    return `<Breadcrumbs items={${JSON.stringify(crumbItems(node))}} />`;
  }
};

const pageSchema = { faqs: {}, services: {} };

/* FAQPage from the accordion as rendered: the summary's visible question and the answer. */
function faqItems(main) {
  return qa(main, (n) => n.tagName === "details" && hasCls(n.parentNode, "faq")).map((d) => ({
    question: text(q(d, (n) => n.tagName === "summary"))
      .replace(/\s+$/, "")
      .trim(),
    answer: text(q(d, byCls("ans"))),
  }));
}

async function emitPage(id, { file, replace, attrs, imports = [], noindex = false, faq = false, service = false } = {}) {
  const main = pageOf(id);
  if (!main) throw new Error(`no page ${id}`);
  const ctx = {
    replace: (node) => crumbReplace(node) ?? replace?.(node),
    attrs,
    usesLink: false,
    buttons: [],
  };
  const inner = serializeChildren(main, main.childNodes.filter((n) => n.nodeName !== "#comment"), ctx, false);
  const hasCrumb = !!q(main, (n) => n.tagName === "nav" && hasCls(n, "crumb"));
  const nodes = [];
  if (faq) {
    const items = faqItems(main);
    if (!items.length) throw new Error(`no FAQ on ${id}`);
    pageSchema.faqs[id] = items;
    nodes.push(`faqPage(faqs[${JSON.stringify(id)}])`);
  }
  if (service) {
    const lede = q(main, byCls("lede"));
    pageSchema.services[id] = { name: stripSuffix(TITLES[id]), description: lede ? text(lede) : "", path: ROUTES[id] };
    nodes.push(`service(services[${JSON.stringify(id)}])`);
  }
  const jsonld = nodes.length ? `<JsonLd data={graph(${nodes.join(", ")})} />` : "";
  const imp = [
    `import { pageMetadata } from "@/lib/seo";`,
    hasCrumb ? `import { Breadcrumbs } from "@/components/Breadcrumbs";` : "",
    nodes.length ? `import { JsonLd } from "@/components/JsonLd";` : "",
    nodes.length ? `import { graph${faq ? ", faqPage" : ""}${service ? ", service" : ""} } from "@/lib/jsonld";` : "",
    nodes.length ? `import { ${[faq ? "faqs" : "", service ? "services" : ""].filter(Boolean).join(", ")} } from "@/data/page-schema";` : "",
    ctx.usesLink ? `import Link from "next/link";` : "",
    ctx.usesWaveform ? `import { Waveform } from "@/components/Waveform";` : "",
    ctx.usesImage ? `import Image from "next/image";` : "",
    ...imports,
  ]
    .filter(Boolean)
    .join("\n");
  const seo = {
    title: id === "home" ? TITLES[id] : stripSuffix(TITLES[id]),
    ...(id === "home" ? { absoluteTitle: true } : {}),
    description: describe(id, main),
    path: ROUTES[id],
    ...(noindex ? { noindex: true } : {}),
  };
  const code = `${imp}

export const metadata = pageMetadata(${JSON.stringify(seo, null, 2)});

export default function ${componentName(id)}() {
  return (
    <main className="page" id="page-${id}">${jsonld}${inner}</main>
  );
}
`;
  write(file, await format(code.replace(/\n{2,}/g, "\n")));
  if (ctx.buttons.length) log(`  ${id}: inert <button>s left:`, ctx.buttons.join(", "));
  return ctx;
}

// reference JSX for hand-written components (not imported by the app)
async function emitRef(name, node, opts = {}) {
  const ctx = { usesLink: false, buttons: [], ...opts };
  const code = `import Link from "next/link";\nexport default function ${name}() {\n  return (${serialize(node, ctx)});\n}\n`;
  write(`tools/out/${name}.tsx`, await format(code));
}

/* ------------------------------------------------------------- data files */
let blogPostsOut = [];
let caseStudiesOut = [];
const tsExport = (name, type, value) =>
  `// Generated by tools/convert.mjs — do not edit by hand.\n${type ? `import type { ${type.replace(/\[\]$/, "")} } from "./types";\n\n` : ""}export const ${name}${type ? `: ${type}` : ""} = ${JSON.stringify(value, null, 2)};\n`;

/* Alt text for article figures (SEO brief, Phase 5.4): the images are concept
   illustrations of the section they sit in, so the alt is derived from that section's
   heading (or the article title before the first heading), kept under 125 characters
   and put through the brand rules. Substitutions are logged for review. */
const ALT_LIMIT = 124;
const FORBIDDEN = /[–—]|\b(run|runs|running|build|built|building)\b/i; // brand-rules: allow
const altSubs = [];
function altFor(heading, where) {
  let source = heading;
  if (FORBIDDEN.test(heading)) {
    source = ALT_OVERRIDES[heading];
    if (!source || FORBIDDEN.test(source)) throw new Error(`alt text needs an override for heading: ${heading} (${where})`);
    altSubs.push({ where, before: heading, after: source });
  }
  let alt = `Illustration: ${source}`;
  if (alt.length > ALT_LIMIT) alt = alt.slice(0, ALT_LIMIT).replace(/\s+\S*$/, "");
  return alt;
}

/* The article body: authored HTML with each <figure> lifted out as an image reference,
   so the page can render it through next/image with real dimensions. */
function bodyBlocks(prose, slug, title) {
  const sources = blogImages[slug] ?? [];
  const body = [];
  const images = [];
  let html = "";
  let heading = title;
  const flush = () => {
    if (html.trim()) body.push({ html: html.trim() });
    html = "";
  };
  for (const node of prose.childNodes) {
    if (isEl(node) && node.tagName === "h2") heading = text(node);
    if (isEl(node) && node.tagName === "figure") {
      const src = sources[images.length];
      if (src) {
        flush();
        images.push({ ...src, alt: altFor(heading, `${slug} #${images.length + 1}`) });
        body.push({ image: images.length - 1 });
        continue;
      }
      // no artwork supplied for this slot: the placeholder figure stays as it was
    }
    html += parse5.serialize({ childNodes: [node] });
  }
  flush();
  return { body, images };
}

function extractBlogs() {
  const index = pageOf("blogs");
  const grid = q(index, byId("blGrid"));
  const cardBy = new Map();
  for (const a of children(grid)) cardBy.set(attr(a, "data-nav").slice(5), a);
  const feats = qa(index, byCls("bl-feat")).map((f) => ({
    slug: attr(f, "data-nav").slice(5),
    author: attr(f, "data-feat") || "",
    excerpt: text(q(f, (n) => n.tagName === "p" && hasCls(n, "text-white/45"))),
    node: f,
  }));
  const opts = (id) => children(q(index, byId(id))).map((o) => ({ value: attr(o, "value") ?? "", label: text(o) }));
  const filters = { topics: opts("blTopic"), authors: opts("blAuthor") };

  const posts = [];
  const cards = [];
  for (const m of mains) {
    const id = attr(m, "id");
    if (!id.startsWith("page-blog-")) continue;
    const slug = id.slice("page-blog-".length);
    const key = `blog-${slug}`;
    // the lead post of the "Start here" rail is not repeated in the grid, so its card comes from the rail
    const feat = feats.find((f) => f.slug === slug);
    const card = cardBy.get(slug) || feat?.node;
    if (!card) throw new Error(`no index card for ${slug}`);
    const av = q(m, byCls("av"));
    const metaRow = q(m, (n) => hasCls(n, "bl-tag")).parentNode;
    const date = text(metaRow.childNodes.filter(isEl).find((n) => hasCls(n, "text-white/35")));
    const prose = q(m, byCls("prose"));
    const rail = q(m, byCls("ar-rail"));
    const post = {
      slug: blogSlug(slug),
      ...(blogSlug(slug) !== slug ? { legacySlug: slug } : {}),
      title: text(q(m, (n) => n.tagName === "h1")),
      metaTitle: TITLES[key] || "",
      lede: text(q(m, byCls("lede"))),
      tag: text(q(m, byCls("bl-tag"))),
      date,
      author: {
        name: text(q(m, byCls("by-name"))),
        role: text(q(m, byCls("by-role"))),
        avatar: cls(av).find((c) => c.startsWith("av-")),
      },
      railTitle: rail ? text(q(rail, byCls("ar-h"))) : "",
      sections: rail ? qa(rail, byCls("ar-link")).map((l) => ({ id: attr(l, "data-sec"), label: text(l) })) : [],
      ...bodyBlocks(prose, blogSlug(slug), text(q(m, (n) => n.tagName === "h1"))),
    };
    if (!post.author.avatar) throw new Error(`no avatar for ${slug}`);
    posts.push(post);
    const inGrid = cardBy.has(slug);
    cards.push({
      slug: blogSlug(slug),
      title: text(q(card, (n) => n.tagName === "h3")),
      date: text(q(card, (n) => n.tagName === "span" && hasCls(n, "text-white/35"))),
      tag: text(q(card, byCls("bl-tag"))),
      topic: inGrid ? attr(card, "data-topic") : post.tag,
      author: post.author,
      ts: inGrid ? Number(attr(card, "data-ts")) : -1,
      txt: inGrid ? attr(card, "data-txt") : `${post.title} ${post.tag} ${post.author.name}`.toLowerCase(),
      thumb: post.images[0] ? { src: post.images[0].src, width: post.images[0].width, height: post.images[0].height } : null,
      ...(feat ? { featured: { author: feat.author, excerpt: feat.excerpt } } : {}),
    });
  }
  // the index is ordered newest first, like the original grid
  const order = [...feats.filter((f) => !cardBy.has(f.slug)).map((f) => f.slug), ...cardBy.keys()].map(blogSlug);
  cards.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
  posts.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
  blogPostsOut = posts;
  write("data/blog-posts.ts", tsExport("blogPosts", "BlogPost[]", posts));
  write("data/blog-index.ts", tsExport("blogCards", "BlogCard[]", cards) + `\nexport const blogFilters = ${JSON.stringify(filters, null, 2)};\n`);
  log("blogs:", posts.length, "featured:", feats.length, "without artwork:", cards.filter((c) => !c.thumb).length, "images:", posts.reduce((n, p) => n + p.images.length, 0), "alt substitutions:", altSubs.length);
  write(
    "docs/seo-alt-text-review.md",
    [
      "# Article image alt text",
      "",
      "Generated by `tools/convert.mjs`. Every article figure's alt is `Illustration: <heading of the section it sits in>` (the article title before the first heading), trimmed to " + ALT_LIMIT + " characters on a word boundary. The images are concept illustrations of their section, which is why the heading is the description. Card thumbnails next to a visible title keep `alt=\"\"`.",
      "",
      "## Headings changed by the brand rules",
      "",
      "These headings contain a word the brand rules forbid in text this work produces, so the alt uses the phrasing shown instead; the heading in the article itself is untouched.",
      "",
      "| Image | Heading | Alt source used |",
      "|---|---|---|",
      ...altSubs.map((a) => "| `" + a.where + "` | " + a.before + " | " + a.after + " |"),
      "",
    ].join("\n"),
  );
  return { count: posts.length };
}

function extractCaseStudies() {
  const index = pageOf("case-studies");
  const cardBy = new Map();
  for (const a of children(q(index, byId("csGrid")))) cardBy.set(attr(a, "data-nav").slice(3), a);
  const opts = (id) => children(q(index, byId(id))).map((o) => ({ value: attr(o, "value") ?? "", label: text(o) }));
  const filters = { industries: opts("csInd"), products: opts("csProd") };
  const studies = [];
  for (const m of mains) {
    const id = attr(m, "id");
    if (!id.startsWith("page-cs-")) continue;
    const slug = id.slice("page-cs-".length);
    const card = cardBy.get(slug);
    if (!card) throw new Error(`no case-study card for ${slug}`);
    const mark = q(m, byCls("cs-mark"));
    const copy = children(q(card, byCls("csr-copy")));
    studies.push({
      slug: caseStudySlug(slug),
      prototypeId: slug,
      metaTitle: TITLES[`cs-${slug}`] || "",
      client: attr(mark, "aria-label"),
      logo: cls(mark).find((c) => c.startsWith("logow-")),
      title: text(q(m, (n) => n.tagName === "h1")),
      lede: text(q(m, byCls("lede"))),
      chips: qa(m, byCls("chip")).map(text),
      html: innerHTML(q(m, byCls("prose"))),
      metrics: qa(m, byCls("metric-card")).map((c) => ({ n: text(q(c, byCls("n"))), label: text(q(c, (n) => n.tagName === "p")) })),
      card: {
        name: text(copy[0]),
        line: text(copy[1]),
        industry: attr(card, "data-ind"),
        products: (attr(card, "data-prod") || "").split(",").map((s) => s.trim()).filter(Boolean),
        txt: attr(card, "data-txt"),
        figs: qa(card, byCls("csr-fig")).map((f) => ({ n: text(q(f, byCls("n"))), l: text(q(f, byCls("l"))) })),
      },
    });
  }
  const order = [...cardBy.keys()];
  studies.sort((a, b) => order.indexOf(a.prototypeId) - order.indexOf(b.prototypeId));
  caseStudiesOut = studies;
  write("data/case-studies.ts", tsExport("caseStudies", "CaseStudy[]", studies) + `\nexport const caseStudyFilters = ${JSON.stringify(filters, null, 2)};\n`);
  log("case studies:", studies.length);
}

function extractReports() {
  const page = pageOf("reports");
  const opts = (id) => children(q(page, byId(id))).map((o) => ({ value: attr(o, "value") ?? "", label: text(o) }));
  const reports = qa(page, byCls("rp-card")).map((c) => ({
    id: attr(c, "id"),
    series: attr(c, "data-series"),
    topic: attr(c, "data-topic"),
    txt: attr(c, "data-txt"),
    cover: attr(q(c, (n) => n.tagName === "img"), "src"),
    coverAlt: attr(q(c, (n) => n.tagName === "img"), "alt"),
    seriesLabel: text(q(c, byCls("rp-series"))),
    title: text(q(c, byCls("rp-t"))),
    subtitle: text(q(c, byCls("rp-sub"))),
    tease: text(q(c, byCls("rp-tease"))),
    tags: qa(c, byCls("rp-tag")).map(text),
    name: attr(q(c, byCls("rp-get")), "data-report"),
  }));
  // covers were extracted under a content hash; give them the report's name
  for (const r of reports) {
    const nice = `/img/${r.id}${path.extname(r.cover)}`;
    if (r.cover !== nice) {
      fs.renameSync(path.join(ROOT, "public", r.cover), path.join(ROOT, "public", nice));
      renamedAssets[r.cover] = nice;
    }
    r.cover = nice;
    Object.assign(r, dimsOf(nice));
  }
  // the original select values ("AI in BFSI") never matched the cards ("BFSI"); filter on the card values
  const series = opts("rpSeries").map((o) => (o.value === "all" ? o : { value: reports.find((r) => r.seriesLabel.startsWith(o.value) || o.value.endsWith(r.series))?.series ?? o.value, label: o.label }));
  write("data/reports.ts", tsExport("reports", "Report[]", reports) + `\nexport const reportFilters = ${JSON.stringify({ series, topics: opts("rpTopic") }, null, 2)};\n`);
  log("reports:", reports.length);
}

function extractSiteData() {
  // the original set these with textContent, so entities in the JSON were a latent bug
  const decode = (s) => s.replaceAll("&amp;", "&").replaceAll("&rsquo;", "’").replaceAll("&ldquo;", "“").replaceAll("&rdquo;", "”");
  for (const e of Object.values(DATA.proof)) for (const k of Object.keys(e)) e[k] = decode(e[k]);
  // only the fields the original renderer used are kept
  for (const [k, list] of Object.entries(DATA.panels))
    DATA.panels[k] = list.map((c) => ({ client: decode(c.client), line: decode(c.line), ...(c.logo ? { logo: c.logo } : {}), ...(c.nav ? { href: routeFor(c.nav) } : {}), pair: c.pair }));
  const rail = q(pageOf("case-studies"), byCls("proof-rail"));
  const clients = children(rail).map((b) => ({
    key: attr(b, "data-client"),
    label: attr(b, "aria-label"),
    logo: cls(q(b, byCls("clogo"))).find((c) => c.startsWith("logow-")),
  }));
  const pyzo = pageOf("pyzo");
  const tabs = qa(pyzo, byCls("pp-tab")).map((t) => ({ key: attr(t, "data-pp"), label: text(t) }));
  const fdBar = q(pyzo, byCls("fd-bar"));
  const tally = q(fdBar, byId("fdTally"));
  const ledger = {
    chips: qa(fdBar, byCls("fd-chip")).map((c) => ({ key: attr(c, "data-fd") || "", label: text(c) })),
    common: Number(attr(tally, "data-common")),
    total: Number(attr(tally, "data-total")),
    groups: qa(pyzo, byCls("fd-grp")).map((g) => ({
      title: text(q(g, byCls("fd-k"))),
      rows: qa(g, byCls("fd-row")).map((r) => ({
        n: text(q(r, byCls("fd-n"))),
        title: text(q(r, byCls("fd-t"))),
        products: attr(r, "data-u").split("|"),
      })),
    })),
  };
  write(
    "data/site-data.ts",
    `// Generated by tools/convert.mjs — do not edit by hand.\nimport type { ProofEntry, PanelCard } from "./types";\n\n` +
      `export const proof: Record<string, ProofEntry> = ${JSON.stringify(DATA.proof, null, 2)};\n\n` +
      `export const proofClients = ${JSON.stringify(clients, null, 2)};\n\n` +
      `export const panels: Record<string, PanelCard[]> = ${JSON.stringify(DATA.panels, null, 2)};\n\n` +
      `export const panelTabs = ${JSON.stringify(tabs, null, 2)};\n\n` +
      `export const ledger = ${JSON.stringify(ledger, null, 2)};\n\n` +
      `export const pageTitles: Record<string, string> = ${JSON.stringify(TITLES, null, 2)};\n`,
  );
  log("site data written");
}

/* ------------------------------------------------------------------- run */
fs.rmSync(OUT_REF, { recursive: true, force: true });
extractBlogs();
extractCaseStudies();
extractReports();
extractSiteData();

const simple = {
  "pyzo-atlas": "app/pyzo/atlas/page.tsx",
  "pyzo-compass": "app/pyzo/compass/page.tsx",
  "pyzo-evio": "app/pyzo/evio/page.tsx",
  "pyzo-forge": "app/pyzo/forge/page.tsx",
  "pyzo-loupe": "app/pyzo/loupe/page.tsx",
  "pyzo-prism": "app/pyzo/prism/page.tsx",
  "svc-agentic": "app/engineering/agentic-ai/page.tsx",
  "svc-governance": "app/engineering/ai-governance/page.tsx",
  "svc-modernisation": "app/engineering/enterprise-ai/page.tsx",
  "ind-bfsi": "app/industries/bfsi/page.tsx",
  "ind-healthcare": "app/industries/healthcare/page.tsx",
  "ind-public": "app/industries/public-sector/page.tsx",
  "ind-retail": "app/industries/retail/page.tsx",
  careers: "app/careers/page.tsx",
  stack: "app/technology/page.tsx",
};
const SERVICE_PAGES = new Set(["pyzo-atlas", "pyzo-compass", "pyzo-evio", "pyzo-forge", "pyzo-loupe", "pyzo-prism", "svc-agentic", "svc-governance", "svc-modernisation"]);
const FAQ_PAGES = new Set(["pyzo", "ind-bfsi", "ind-healthcare", "ind-public", "ind-retail"]);
for (const [id, file] of Object.entries(simple)) await emitPage(id, { file, service: SERVICE_PAGES.has(id), faq: FAQ_PAGES.has(id) });

await emitPage("home", { file: "app/page.tsx" });

// legal pages: the contents rail becomes plain anchors; the effects hook highlights the current one
const tocAttrs = (node, attrs) => {
  if (attrs.has("data-toc")) {
    attrs.set("href", `#${attrs.get("data-toc")}`);
  }
};
const tocReplace = (node) => {
  if (node.tagName === "button" && hasCls(node, "lg-toc-link")) {
    const ctx = { usesLink: false };
    const attrs = new Map(node.attrs.map((a) => [a.name, a.value]));
    const inner = serializeChildren(node, node.childNodes, ctx, false);
    return `<a className=${escAttr(attrs.get("class"))} data-toc=${escAttr(attrs.get("data-toc"))} href="#${attrs.get("data-toc")}">${inner}</a>`;
  }
};
await emitPage("privacy", { file: "app/privacy/page.tsx", replace: tocReplace });
await emitPage("terms", { file: "app/terms/page.tsx", replace: tocReplace });

// about: the author bubble opens the blog with that author preselected
await emitPage("who-we-are", {
  file: "app/about/page.tsx",
  replace: (node) => {
    if (node.tagName === "button" && attr(node, "data-author")) {
      const a = new Map(node.attrs.map((x) => [x.name, x.value]));
      const inner = serializeChildren(node, node.childNodes, { usesLink: false }, false);
      return `<Link href={${JSON.stringify(`/blog/?author=${encodeURIComponent(a.get("data-author"))}`)}} className=${escAttr(a.get("class"))} title=${escAttr(a.get("title"))} aria-label=${escAttr(a.get("aria-label"))}>${inner}</Link>`;
    }
  },
  attrs: (node, attrs) => {
    if (node.tagName === "button" && attrs.has("data-author")) attrs.set("data-nav", "blogs");
  },
});

// pyzo: the capability proof tabs and the foundation ledger are stateful
await emitPage("pyzo", {
  file: "app/pyzo/page.tsx",
  faq: true,
  imports: [`import { PyzoPanels } from "@/components/PyzoPanels";`, `import { FoundationLedger } from "@/components/FoundationLedger";`],
  replace: (node) => {
    if (hasCls(node, "fd-bar")) return "<FoundationLedger />";
    if (hasCls(node, "fd-grid")) return null;
    if (q(node, byCls("pp-tab")) && node.tagName === "div" && children(node).every((c) => hasCls(c, "pp-tab"))) return "<PyzoPanels />";
    if (attr(node, "id") === "ppCards") return null;
  },
});

// contact + careers apply: prototype forms
await emitPage("contact", {
  file: "app/contact/page.tsx",
  imports: [`import { ContactForm } from "@/components/ContactForm";`, `import { ProofBlock } from "@/components/ProofBlock";`],
  replace: (node) => {
    if (hasCls(node, "js-form")) return "<ContactForm />";
    if (hasCls(node, "proof-block")) return "<ProofBlock />";
  },
});
await emitPage("careers-apply", {
  file: "app/careers/apply/page.tsx",
  noindex: true,
  imports: [`import { CareersApplyForm } from "@/components/CareersApplyForm";`],
  replace: (node) => {
    if (hasCls(node, "js-form")) return "<CareersApplyForm />";
  },
});

// listing pages: the filterable lists are data-driven client components
await emitPage("blogs", {
  file: "app/blog/page.tsx",
  imports: [`import { BlogIndex } from "@/components/BlogIndex";`],
  replace: (node) => {
    if (node.tagName === "section" && q(node, byId("blFeatHead"))) return null;
    if (hasCls(node, "bl-layout")) return "<BlogIndex />";
  },
});
await emitPage("case-studies", {
  file: "app/case-studies/page.tsx",
  imports: [`import { CaseStudiesIndex } from "@/components/CaseStudiesIndex";`, `import { ProofBlock } from "@/components/ProofBlock";`],
  replace: (node) => {
    if (hasCls(node, "bl-layout")) return "<CaseStudiesIndex />";
    if (hasCls(node, "proof-block")) return "<ProofBlock />";
  },
});
await emitPage("reports", {
  file: "app/reports/page.tsx",
  imports: [`import { ReportsIndex } from "@/components/ReportsIndex";`],
  replace: (node) => {
    if (hasCls(node, "bl-layout")) return "<ReportsIndex />";
    if (attr(node, "id") === "rpEmpty" || attr(node, "id") === "rpModal") return null;
  },
});

// reference markup for the hand-written components
await emitRef("HeaderRef", header);
await emitRef("FooterRef", footer);
await emitRef("ContactFormRef", q(pageOf("contact"), byCls("js-form")));
await emitRef("CareersApplyFormRef", q(pageOf("careers-apply"), byCls("js-form")));
await emitRef("ProofBlockRef", q(pageOf("contact"), byCls("proof-block")));
await emitRef("BlogListRef", q(pageOf("blogs"), byCls("bl-layout")));
await emitRef("BlogFeatRef", q(pageOf("blogs"), byId("blFeatHead")).parentNode);
await emitRef("CaseStudyListRef", q(pageOf("case-studies"), byCls("bl-layout")));
await emitRef("ReportsListRef", q(pageOf("reports"), byCls("bl-layout")));
await emitRef("ReportsModalRef", q(pageOf("reports"), byId("rpModal")));
await emitRef("LedgerRef", q(pageOf("pyzo"), byCls("fd-bar")).parentNode);
await emitRef("BlogPostRef", pageOf("blog-human-in-the-loop-data-capture"));
await emitRef("CaseStudyRef", pageOf("cs-cipla"));
// the human copy list: static pages from above, plus the templated routes under the same rule
for (const p of blogPostsOut)
  if (!firstSentences(p.lede)) needsCopy.push({ path: `/blog/${p.slug}/`, reason: `first sentence of the lede exceeds the limit (${p.lede.length} chars)` });
for (const c of caseStudiesOut)
  if (!firstSentences(c.lede)) needsCopy.push({ path: `/case-studies/${c.slug}/`, reason: `first sentence of the hero lede exceeds the limit (${c.lede.length} chars)` });
const rows = needsCopy.map((n) => "| `" + n.path + "` | " + n.reason + " |").join("\n");
write(
  "docs/seo-needs-copy.md",
  "# Pages that need a meta description written by a human\n\n" +
    "Generated by `tools/convert.mjs`. Rule applied: the description is the page's existing lede (or first body paragraph) trimmed to whole sentences under 155 characters, never paraphrased. These pages have no sentence that fits, so their description is left empty rather than invented.\n\n" +
    `${needsCopy.length} pages.\n\n| Path | Why |\n|---|---|\n${rows}\n`,
);
write(
  "data/page-schema.ts",
  `// Generated by tools/convert.mjs from the page copy. Do not edit by hand.\nimport type { Faq } from "@/lib/jsonld";\n\n` +
    `/** FAQ accordions, as visible on the page, keyed by prototype page id */\nexport const faqs: Record<string, Faq[]> = ${JSON.stringify(pageSchema.faqs, null, 2)};\n\n` +
    `/** Service nodes: the page title and its hero lede */\nexport const services: Record<string, { name: string; description: string; path: string }> = ${JSON.stringify(pageSchema.services, null, 2)};\n`,
);
log("needs copy:", needsCopy.length);
log("done");
