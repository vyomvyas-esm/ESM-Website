// Phase 1 proposal generator: writes docs/seo-url-map.md. Proposal only; renames nothing.
//   node --experimental-strip-types tools/url-map.mjs
import fs from "node:fs";
const { blogPosts } = await import("../data/blog-posts.ts");
const { caseStudies } = await import("../data/case-studies.ts");

const titleOf = (file) => (fs.readFileSync(file, "utf8").match(/title: "([^"]+)"/) || [])[1] || "";
const staticRows = [
  ["/", "/", "home", "app/page.tsx"],
  ["/pyzo", "/pyzo/", "pyzo landing", "app/pyzo/page.tsx"],
  ...["atlas", "compass", "evio", "forge", "loupe", "prism"].map((p) => [`/pyzo/${p}`, `/pyzo/${p}/`, "pyzo capability", `app/pyzo/${p}/page.tsx`]),
  ...["agentic-ai", "ai-governance", "enterprise-ai"].map((s) => [`/services/${s}`, `/engineering/${s}/`, "engineering", `app/services/${s}/page.tsx`]),
  ...["bfsi", "healthcare", "public-sector", "retail"].map((s) => [`/industries/${s}`, `/industries/${s}/`, "industry", `app/industries/${s}/page.tsx`]),
  ["/case-studies", "/case-studies/", "listing", "app/case-studies/page.tsx"],
  ["/blog", "/blog/", "listing", "app/blog/page.tsx"],
  ["/reports", "/reports/", "listing", "app/reports/page.tsx"],
  ["/about", "/about/", "company", "app/about/page.tsx"],
  ["/careers", "/careers/", "company", "app/careers/page.tsx"],
  ["/careers/apply", "/careers/apply/", "utility (noindex)", "app/careers/apply/page.tsx"],
  ["/contact", "/contact/", "company", "app/contact/page.tsx"],
  ["/technology", "/technology/", "company", "app/technology/page.tsx"],
  ["/privacy", "/privacy/", "legal", "app/privacy/page.tsx"],
  ["/terms", "/terms/", "legal", "app/terms/page.tsx"],
].map(([cur, prop, type, file]) => ({ cur, prop, type, title: titleOf(file) }));

export const CASE_STUDY_SLUGS = {
  rbi: "rbi-innovation-hub",
  cipla: "cipla-global-training-academy",
  koita: "koita-foundation",
  isb: "indian-school-of-business",
  indusind: "indusind-bank",
  samagra: "samagra",
  indiamart: "indiamart",
  tataneu: "tata-neu",
  epic: "epic-global",
};
const csRows = caseStudies.map((c) => ({
  cur: `/case-studies/${c.slug}`,
  prop: `/case-studies/${CASE_STUDY_SLUGS[c.slug]}/`,
  type: "case study",
  title: c.metaTitle,
}));

export const BLOG_SLUG_REPAIRS = {
  // truncated at 58 characters by the prototype
  "why-accountable-ai-will-outlast-generative-ai-as-the-phras": "why-accountable-ai-will-outlast-generative-ai",
  "migrating-between-foundation-models-without-rewriting-your": "migrating-between-foundation-models-without-rewriting-your-stack",
  "how-a-regulated-lender-cleared-audit-on-first-pass-with-gu": "how-a-regulated-lender-cleared-audit-on-first-pass",
  "myth-a-more-powerful-model-solves-the-enterprise-ai-proble": "myth-a-more-powerful-model-solves-the-enterprise-ai-problem",
  "claude-opus-4-5-cheaper-frontier-coding-and-what-the-price": "claude-opus-4-5-cheaper-frontier-coding",
  "what-a-production-ready-agent-actually-requires-most-demos": "what-a-production-ready-agent-actually-requires",
  "building-an-ai-operating-model-your-risk-committee-will-ap": "ai-operating-model-your-risk-committee-will-approve",
  "claude-haiku-4-5-and-the-economics-of-small-fast-models-in": "claude-haiku-4-5-economics-of-small-fast-models",
  "credit-model-monitoring-and-drift-detection-through-the-ec": "credit-model-monitoring-and-drift-detection-through-the-economic-cycle",
  "demand-and-inventory-intelligence-that-performs-under-real": "demand-and-inventory-intelligence-under-real-margins",
  "preserving-institutional-knowledge-in-government-with-agen": "preserving-institutional-knowledge-in-government-with-agentic-ai",
  "are-frontier-models-becoming-commodities-an-operator-s-vie": "are-frontier-models-becoming-commodities",
  "ai-in-the-ehr-reducing-click-burden-without-compromising-t": "ai-in-the-ehr-reducing-click-burden",
  "llama-4-against-qwen-3-for-private-and-sovereign-enterpris": "llama-4-against-qwen-3-for-sovereign-enterprise-deployment",
  "automating-loan-document-checks-without-breaking-your-audi": "automating-loan-document-checks-without-breaking-your-audit-trail",
  "why-benchmark-scores-don-t-survive-contact-with-production": "why-benchmark-scores-dont-survive-contact-with-production",
  "is-open-source-catching-up-deepseek-against-gpt-and-claude": "is-open-source-catching-up-deepseek-against-gpt-and-claude",
  "gemini-2-0-flash-and-the-economics-of-an-agentic-multimoda": "gemini-2-0-flash-agentic-multimodal-default",
  "what-hardened-means-in-enterprise-ai-and-how-reusable-bloc": "what-hardened-means-in-enterprise-ai",
  "building-an-llm-evaluation-framework-your-team-will-actual": "llm-evaluation-framework-your-team-will-actually-use",
  "the-operating-principles-behind-every-es-magico-engagement": "operating-principles-behind-every-es-magico-engagement",
  "open-or-closed-a-practitioner-s-framework-for-choosing-fou": "open-or-closed-framework-for-choosing-foundation-models",
  "why-enterprises-choose-es-magico-to-run-ai-in-regulated-en": "why-enterprises-choose-es-magico-in-regulated-environments",
  "agentic-rag-when-retrieval-becomes-a-decision-not-a-lookup": "agentic-rag-when-retrieval-becomes-a-decision",
  "why-most-enterprise-ai-stalls-after-the-pilot-and-what-ope": "why-most-enterprise-ai-stalls-after-the-pilot",
  "llama-3-1-405b-and-the-case-for-open-weight-models-in-regu": "llama-3-1-405b-and-the-case-for-open-weight-models",
  "what-is-an-ai-operator-the-category-built-for-the-work-aft": "what-is-an-ai-operator",
  // apostrophes rendered as "-s-" / "-t"
  "notion-s-workspace-agents": "notions-workspace-agents",
  "why-ai-benchmarks-don-t-predict-production-performance": "why-ai-benchmarks-dont-predict-production-performance",
  "genspark-s-multi-agent-approach": "gensparks-multi-agent-approach",
  "computer-use-is-here-but-agentic-readiness-isn-t": "computer-use-is-here-but-agentic-readiness-isnt",
};
const blogRows = blogPosts.map((p) => {
  const fix = BLOG_SLUG_REPAIRS[p.slug];
  return {
    cur: `/blog/${p.slug}`,
    prop: `/blog/${fix || p.slug}/`,
    type: fix ? (p.slug.length >= 58 ? "blog (repaired: truncated)" : "blog (repaired: apostrophe)") : "blog",
    title: p.metaTitle,
  };
});

const all = [...staticRows, ...csRows, ...blogRows];
const dup = all.map((r) => r.prop).filter((v, i, a) => a.indexOf(v) !== i);
if (dup.length) throw new Error("duplicate proposed URLs: " + dup);
const esc = (s) => s.replace(/\|/g, "\\|");
const table = (rows) =>
  ["| Current route | Proposed URL | Page type | Current title |", "|---|---|---|---|", ...rows.map((r) => `| \`${r.cur}\` | \`${r.prop}\` | ${r.type} | ${esc(r.title)} |`)].join("\n");
const changed = all.filter((r) => r.prop !== r.cur + "/" && r.cur !== "/");
const repaired = blogRows.filter((r) => r.type !== "blog");
const out = `# SEO Phase 1: URL map (proposal)

Status: **proposal, awaiting sign-off. Nothing has been renamed.**
Generated by \`tools/url-map.mjs\` from the content in \`data/\` and the route files in \`app/\`.

Totals: ${all.length} routes (${staticRows.length} static pages, ${csRows.length} case studies, ${blogRows.length} blog articles). ${all.length} unique proposed URLs. ${changed.length} routes change beyond the trailing slash.

## Decisions embedded in this map

1. **Trailing slash: on.** \`trailingSlash: true\` in \`next.config.ts\`; every canonical, sitemap entry and internal link uses the slash form. Next.js 308-redirects the bare form.
2. \`/services/*\` becomes \`/engineering/*\` to match the navigation label and the brief's shape.
3. Case-study slugs become the client name rather than the prototype id.
4. Blog slugs are kept as they are except where the prototype damaged them: 27 truncated at 58 characters, 4 with apostrophe fragments (\`-s-\`, \`-t\`). No category segment, no dates.
5. \`/people/\` is not proposed: there is no people page in the prototype (its \`people\` id aliased to About, and the leadership cards live on \`/about/\`).
6. \`/reports/\` is not in the brief's shape but exists as a page; kept.

## Static pages and case studies

${table([...staticRows, ...csRows])}

## Blog articles with a repaired slug (${repaired.length})

${table(repaired)}

## Blog articles, unchanged slug (${blogRows.length - repaired.length})

${table(blogRows.filter((r) => r.type === "blog"))}
`;
fs.mkdirSync("docs", { recursive: true });
fs.writeFileSync("docs/seo-url-map.md", out);
console.log({ total: all.length, changed: changed.length, repaired: repaired.length });
