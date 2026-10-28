/*
 * Writes docs/seo-copy-brief.md: a hand-over brief for the copywriter (or the chat that
 * authored the site) with the exact source copy behind every page that needs a meta
 * description or a title rewrite. Regenerate after content changes:
 *
 *   node --experimental-strip-types tools/copy-brief.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const { blogPosts } = await import("../data/blog-posts.ts");
const { caseStudies } = await import("../data/case-studies.ts");
const { CATEGORIES, listingPath, allListings } = await import("../lib/blog.ts");

const needs = [...fs.readFileSync(path.join(ROOT, "docs/seo-needs-copy.md"), "utf8").matchAll(/^\| `([^`]+)` \|/gm)].map((m) => m[1]);
const titleDoc = fs.readFileSync(path.join(ROOT, "docs/seo-title-review.md"), "utf8");
const titleRows = [...titleDoc.matchAll(/^\| `([^`]+)` \| ([^|]+?) \|/gm)].map((m) => ({ path: m[1], title: m[2].trim() }));

// static pages: read H1 and first lede from the generated route file
const routeFile = (p) => {
  const map = {
    "/": "app/page.tsx",
    "/pyzo/": "app/pyzo/page.tsx",
    "/blog/": "app/blog/page.tsx",
    "/contact/": "app/contact/page.tsx",
    "/careers/apply/": "app/careers/apply/page.tsx",
    "/technology/": "app/technology/page.tsx",
    "/reports/": "app/reports/page.tsx",
  };
  if (map[p]) return map[p];
  if (p.startsWith("/industries/")) return `app${p}page.tsx`;
  return null;
};
const strip = (s) => s.replace(/<[^>]+>/g, "").replace(/\{" "\}/g, " ").replace(/\s+/g, " ").replace(/&amp;/g, "&").trim();
const fromRoute = (p) => {
  const f = routeFile(p);
  if (!f || !fs.existsSync(path.join(ROOT, f))) return {};
  const src = fs.readFileSync(path.join(ROOT, f), "utf8");
  const h1 = src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const lede = src.match(/<p className="lede[^"]*"[^>]*>([\s\S]*?)<\/p>/);
  // no lede: the page's other visible copy, so the writer sees what is actually there
  const paras = [...src.matchAll(/<(p|h2|h3|span) className="[^"]*"[^>]*>([\s\S]*?)<\/\1>/g)]
    .map((m) => strip(m[2]))
    .filter((t) => t.length > 12 && t.length < 200 && !/^[\d+~]/.test(t));
  return { h1: h1 ? strip(h1[1]) : "", lede: lede ? strip(lede[1]) : [...new Set(paras)].slice(0, 8).join(" / ") };
};

const postBy = new Map(blogPosts.map((p) => [`/blog/${p.slug}/`, p]));
const csBy = new Map(caseStudies.map((c) => [`/case-studies/${c.slug}/`, c]));
const listingBy = new Map(allListings().map((l) => [listingPath(l.category, l.page), l]));

const sourceFor = (p) => {
  if (postBy.has(p)) {
    const post = postBy.get(p);
    return { kind: "blog article", h1: post.title, source: post.lede, category: post.tag };
  }
  if (csBy.has(p)) {
    const c = csBy.get(p);
    return { kind: "case study", h1: c.title, source: c.lede, client: c.client };
  }
  if (listingBy.has(p)) {
    const l = listingBy.get(p);
    return {
      kind: l.category ? `blog category listing, page ${l.page}` : `blog listing, page ${l.page}`,
      h1: l.category ? l.category.tag : "The AI Operator Journal.",
      source: "(no copy of its own: it lists 12 articles from the category named in the H1)",
    };
  }
  const r = fromRoute(p);
  return { kind: "page", h1: r.h1 ?? "", source: r.lede || "(no copy on the page beyond the H1 and form labels)" };
};

const esc = (s) => String(s ?? "").replace(/\|/g, "\\|");
const descRows = needs.map((p) => {
  const s = sourceFor(p);
  return `| \`${p}\` | ${s.kind}${s.category ? ` (${s.category})` : ""}${s.client ? ` (${s.client})` : ""} | ${esc(s.h1)} | ${esc(s.source)} |`;
});
const titleRowsOut = titleRows.map((t) => {
  const s = sourceFor(t.path);
  return `| \`${t.path}\` | ${esc(t.title)} | ${esc(s.h1)} | ${esc(s.source)} |`;
});

const out = `# Copy brief: meta descriptions and titles for esmagico.com

You wrote the copy for this site. The Next.js port now needs two things only a writer should produce: **${needs.length} meta descriptions** and **${titleRows.length} title rewrites**. Everything else (canonicals, structured data, sitemaps) is done and must not change.

## Rules

Non-negotiable, and a script will reject anything that breaks them:

1. Derive every line from the page's existing copy (the H1 and source text are given below). Do not add positioning, claims, benefits, numbers, client names, quotes or dates that are not already on that page.
2. **No em dashes or en dashes anywhere.** Use an ASCII hyphen, a colon, or the word "to".
3. The words **run, running, runs** must not appear. Use deploy, operate, execute, handle, in production, or live. <!-- brand-rules: allow -->
4. The words **build, built, building** must not appear. Use engineer, engineered, engineering. <!-- brand-rules: allow -->
5. British spelling: operationalise, modernisation, personalisation, prioritise.
6. No hype vocabulary: revolutionary, cutting-edge, game-changing, unlock, seamless, transform-the-way.
7. "Es Magico" is always two words.

### Meta descriptions
- Under 155 characters including spaces. Aim for 120 to 150.
- One or two complete sentences, plain, specific to the page. No trailing ellipsis.
- Every description unique across the ${needs.length}: no two pages may share one.
- Blog listing pages (\`/blog/page/N/\`, \`/blog/<category>/\`) have no copy of their own; describe what the listing is (the journal, the category, the page number) without inventing.

### Titles
- The site template appends " | Es Magico" automatically: **do not include the brand** in the title you return.
- 35 to 60 characters. Lead with a term a buyer would search for; the current titles are taglines.
- Case-study titles must name the client. The client name is given in the "kind" column.
- Blog titles: these are published headlines that contain the forbidden words (rule 3 and 4). Propose a retitle that keeps the meaning; the editor decides whether to adopt it.
- Titles must be unique across the site.

## Output

Return one JSON object, nothing else, keyed by path exactly as given:

\`\`\`json
{
  "descriptions": { "/contact/": "…", "/blog/page/2/": "…" },
  "titles": { "/contact/": "…", "/case-studies/rbi-innovation-hub/": "…" }
}
\`\`\`

Every path in the two tables below must appear. Paths are the keys; do not change them.

## 1. Meta descriptions needed (${needs.length})

| Path | Kind | H1 | Source copy on the page |
|---|---|---|---|
${descRows.join("\n")}

## 2. Titles to rewrite (${titleRows.length})

| Path | Current title | H1 | Source copy on the page |
|---|---|---|---|
${titleRowsOut.join("\n")}
`;
fs.writeFileSync(path.join(ROOT, "docs/seo-copy-brief.md"), out);
console.log(`[copy-brief] ${needs.length} descriptions, ${titleRows.length} titles, ${(out.length / 1024).toFixed(0)} KB`);
