# Es Magico — website

The Es Magico marketing site, ported from a single-file build to **Next.js 16**
(App Router, React 19, TypeScript) and **Tailwind CSS v4**. Every page is
statically generated.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export of all 361 routes
```

## Layout

| Path | What lives there |
| --- | --- |
| `app/` | Routes. Most pages are server components generated from the original markup; `blog/[slug]` and `case-studies/[slug]` render from data. |
| `components/` | The shell (`Header`, `Footer`) and the stateful widgets: theme switch, PYZO tabs and ledger, proof carousel, blog / case-study / report indexes with filters, prototype forms, report gate modal. |
| `components/SiteEffects.tsx` | Progressive enhancements driven by class hooks in the design layer: `.rv` scroll reveals, `.tally` count-ups, animated `.faq` accordions, article and legal contents rails. |
| `data/` | Generated content: 325 blog posts, 9 case studies, 4 reports, proof quotes, PYZO panel data. `types.ts` is hand-written. |
| `styles/site.css` | The site's own design layer (tokens on `:root`, light theme under `html[data-theme="light"]`), carried over verbatim with its images moved to `public/img`. |
| `app/globals.css` | Tailwind v4 entry: the theme tokens (`white` maps to the foreground variable so utilities work in both themes), the v3 border-colour default, and the import of `site.css`. |
| `public/blog/` | Blog artwork. 108 of the 325 posts reference images that were not in the source export; those cards show the "Image to come" placeholder until the files are added. |
| `tools/` | The converter used for the port. See `tools/README.md`. |

## Routes

`/`, `/pyzo` and `/pyzo/{atlas,compass,evio,forge,loupe,prism}`,
`/services/{agentic-ai,ai-governance,enterprise-ai}`,
`/industries/{bfsi,healthcare,public-sector,retail}`, `/blog`, `/blog/[slug]`,
`/case-studies`, `/case-studies/[slug]`, `/reports`, `/about`, `/careers`,
`/careers/apply`, `/contact`, `/technology`, `/privacy`, `/terms`.

`/blog?author=Name` opens the journal with that author preselected (used by the
leadership cards on `/about`).

## Theme

Light is the default; the switch stores `esm-theme` in `localStorage` and a
boot script in `app/layout.tsx` applies it before first paint.

## Forms

The contact, careers and newsletter forms and the report gate are prototypes,
exactly as on the original site: they acknowledge the entry but send nothing.
Wire their submit handlers (`components/PrototypeForm.tsx`,
`components/NewsletterForm.tsx`, `components/ReportsIndex.tsx`) to a real
endpoint when one exists.
