# Es Magico — website

The Es Magico marketing site, ported from a single-file build to **Next.js 16**
(App Router, React 19, TypeScript) and **Tailwind CSS v4**. Every page is
statically generated.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # prerenders all 413 routes (brand-rules: allow, it is a command)
```

## Layout

| Path | What lives there |
| --- | --- |
| `app/` | Routes. Most pages are server components generated from the original markup; `blog/[slug]` and `case-studies/[slug]` render from data. |
| `components/` | The shell (`Header`, `Footer`) and the stateful widgets: theme switch, PYZO tabs and ledger, proof carousel, blog / case-study / report indexes with filters, prototype forms, report gate modal. |
| `components/SiteEffects.tsx` | Progressive enhancements driven by class hooks in the design layer: `.rv` scroll reveals, `.tally` count-ups, animated `.faq` accordions, article and legal contents rails. |
| `data/` | Generated content: 323 blog posts, 9 case studies, 4 reports, proof quotes, PYZO panel data. `types.ts` is hand-written. |
| `styles/site.css` | The site's own design layer (tokens on `:root`, light theme under `html[data-theme="light"]`), carried over verbatim with its images moved to `public/img`. |
| `app/globals.css` | Tailwind v4 entry: the theme tokens (`white` maps to the foreground variable so utilities work in both themes), the v3 border-colour default, and the import of `site.css`. |
| `public/blog/` | Blog artwork, 646 WebP files named `<post-slug>-<n>.webp`, produced by `tools/images.mjs` from the client's export. Two articles the export had no complete artwork for are left out of the port (`DROPPED_POSTS` in `tools/convert.mjs`; see `docs/seo-open-items.md`). |
| `lib/` | `seo.ts` (metadata builder, description rule), `jsonld.ts` (structured data), `blog.ts` (listing model), `sitemap.ts`. |
| `docs/` | The SEO working papers: URL map, open items, copy the site still needs, title and alt-text reviews, unmapped articles. |
| `tools/` | The converter, the image pipeline and the SEO checks. See `tools/README.md`. |

## Routes

`/`, `/pyzo` and `/pyzo/{atlas,compass,evio,forge,loupe,prism}`,
`/engineering/{agentic-ai,ai-governance,enterprise-ai}`,
`/industries/{bfsi,healthcare,public-sector,retail}`, `/blog/` with `/blog/page/N/`,
`/blog/<category>/` and `/blog/<category>/page/N/`, `/blog/[slug]/`, `/case-studies/`,
`/case-studies/[slug]/`, `/reports/`, `/about/`, `/careers/`, `/careers/apply/`,
`/contact/`, `/technology/`, `/privacy/`, `/terms/`, plus `/sitemap.xml` and `/robots.txt`.

SEO tooling: `node tools/seo-check.mjs` (page assertions), `--crawl` (orphans, broken
links, redirects) and `--brand` (brand-rule grep over the diff), after `next build`.

`/blog?author=Name` opens the journal with that author preselected (used by the
leadership cards on `/about`).

## Hosts, redirects and analytics

The canonical origin is `https://esmagico.com`, declared once in `lib/seo.ts` and
repeated in `next.config.ts` and `proxy.ts`; `node tools/seo-check.mjs --redirects`
fails if the three disagree. Anything arriving on `www.esmagico.com` is sent to the
same path on the apex with a 308, and every URL the port changed
(`data/redirects.json`) reaches its new page in a single hop from either host.

Google Analytics 4 reports to `G-VG2X6BHZJQ`, the property the live site already uses.
It is inert outside a production deployment. `NEXT_PUBLIC_GA_ID` points it at another
property, and setting that variable to an empty string switches analytics off without a
code change. Section 4 of `/privacy/` needs amending before analytics goes live: it
currently states that the site sets no third-party tracking cookies.

## Theme

Light is the default; the switch stores `esm-theme` in `localStorage` and a
boot script in `app/layout.tsx` applies it before first paint.

## Forms

The contact, careers and newsletter forms and the report gate are prototypes,
exactly as on the original site: they acknowledge the entry but send nothing.
Wire their submit handlers (`components/PrototypeForm.tsx`,
`components/NewsletterForm.tsx`, `components/ReportsIndex.tsx`) to a real
endpoint when one exists.
