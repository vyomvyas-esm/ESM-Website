# Conversion tooling

`convert.mjs` turned the original single-file site into this project. It is kept
so the port can be regenerated if a newer export of the original arrives.

    # place the export at tools/src/site.html and the blog image export under
    # tools/src/blog-src/, then from the repo root:
    cd tools && npm install && cd ..
    node --experimental-strip-types tools/images.mjs     # blog artwork -> public/blog, data/blog-images.ts
    node --experimental-strip-types tools/convert.mjs    # pages, data, css, public/img, docs

`convert.mjs` rewrites `app/**/page.tsx` (static pages), `components/BlogListingPage.tsx`,
`data/*.ts`, `styles/site.css`, `public/img/*` and the generated docs
(`seo-needs-copy.md`, `seo-alt-text-review.md`, `seo-unmapped-articles.md`).
Hand-written files under `components/`, `lib/`, `app/layout.tsx`, `app/globals.css`
and the dynamic routes are never touched. The URL map lives in `slugs.mjs`, the alt-text
phrasing for headings the brand rules reject in `alt-overrides.mjs`.

SEO checks, after `next build`:

    node tools/seo-check.mjs            # routes, titles, canonicals, descriptions, h1, JSON-LD, sitemaps
    node tools/seo-check.mjs --crawl    # orphans, broken links, links that would redirect
    node tools/seo-check.mjs --brand    # dashes and forbidden words in the diff against main
    node tools/seo-check.mjs --redirects # data/redirects.json: one hop, destinations exist

`redirects.mjs` regenerates `data/redirects.json` from the data; rows from the Search
Console export are kept under its `manual` key.

`url-map.mjs` produced `docs/seo-url-map.md` (the Phase 1 proposal). It reads the
pre-port route files, which no longer exist, so it is kept as a record of that phase
rather than as a tool that still executes.

Two articles are left out of the port because the export had no complete artwork for
them: the `DROPPED_POSTS` set above `extractBlogs` in `convert.mjs`. Executing
`images.mjs` again puts their folders back into `data/blog-images.ts`; `convert.mjs`
ignores them for as long as the slugs stay in that set.
