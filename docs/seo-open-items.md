# SEO open items

Running log for the SEO implementation: what could not be resolved from the repo, what needs copywriting, and every assumption made. Newest entries at the bottom of each section.

## Needs a human decision

| # | Item | Phase | Status |
|---|---|---|---|
| 1 | Six blog slugs keep run/build words inherited from their published titles (`the-economics-of-running-enterprise-ai`, `the-real-cost-of-running-ai-agents`, `durable-execution-for-long-running-agents`, `buy-build-or-operate`, `build-or-buy-your-agent-stack`, `building-a-golden-dataset-for-llm-evaluation`). Kept for stability; rename on request. | 1 | open |
| 2 | ISB case-study slug is `indian-school-of-business`; `isb-ivi` is the alternative. | 1 | assumed, open |
| 3 | The brief's shape lists `/people/`; no such page exists (the prototype aliased it to About). Not created. | 1 | open |
| 4 | Titles that are positioning lines rather than search terms: see `docs/seo-title-review.md` (17 pages) plus 12 blog titles containing brand-rule words. Not rewritten. | 2 | open |
| 5 | 109 pages have no meta description because no sentence of the source paragraph fits under 155 characters (96 blog articles, 8 of 9 case studies, 3 industry pages, contact). Listed in `docs/seo-needs-copy.md`. A human can either write them or relax the rule to a clause boundary; the code applies the rule as written. | 2 | open |
| 6 | Blog `modifiedTime` equals `publishedTime`: the source has no modified date. Supply one per article (a `modified` field in `data/blog-posts.ts`) or accept the equality. | 2 | open |
| 7 | Open Graph image fallback is the existing hero background `/img/img-hero.webp` (1:1 is not ideal; a purpose-made 1200x630 asset would be better). Blog posts use their own thumbnail where one exists; 108 posts have none and fall back. | 2 | assumed, open |
| 8 | Production origin assumed to be `https://esmagico.com` (no `www`). Set in `lib/seo.ts`. | 2 | assumed |

## Needs copywriting

- `docs/seo-needs-copy.md`: 109 meta descriptions.
- `docs/seo-title-review.md`: 17 page titles, 12 blog titles.

## Assumptions and conventions

- Trailing slashes everywhere (`trailingSlash: true`); all internal hrefs are written in the slash form so no crawl hits a redirect.
- Title template `%s | Es Magico` is applied once in the root layout. The home page uses an absolute title because it already starts with the brand.
- The root layout sets no description; a page with no description has none rather than inheriting one.
- Blog dates in the source are display strings (`27 July 2026`); `lib/seo.ts#isoDate` converts them and throws on anything it cannot parse.
- Blog `article:author` is the author's name (no author pages exist yet; see Phase 3).
- `data/blog-posts.ts` keeps `legacySlug` and `data/case-studies.ts` keeps `prototypeId` so the Phase 6 redirect map can be generated rather than hand-written.
- `noindex, follow` applied to `/careers/apply/` only. Form confirmation states are client-side state on the same URL, not routes, so nothing else to exclude. Report gate is a modal on `/reports/`.
- Two prototype bugs were fixed during the port rather than carried over: the reports "Series" filter values and case-study batching CSS.

## Known content gaps carried from the prototype (not SEO work)

- 108 blog cards and 323 in-article image references point to files that were not in the export.
- The brief names Archivo and IBM Plex Mono; the design layer uses Inter and Schibsted Grotesk. Changing families would be a visible typography change, so the current families stay unless told otherwise.
