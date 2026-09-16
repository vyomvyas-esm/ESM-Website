# Conversion tooling

`convert.mjs` turned the original single-file site into this project. It is kept
so the port can be regenerated if a newer export of the original arrives.

    # place the export at tools/src/site.html, then from the repo root:
    cd tools && npm install && cd ..
    node tools/convert.mjs

It rewrites `app/**/page.tsx` (static pages), `data/*.ts` (blog posts, case
studies, reports, proof, PYZO panels), `styles/site.css` and `public/img/*`.
Hand-written files under `components/`, `app/layout.tsx`, `app/globals.css`,
`app/blog/[slug]` and `app/case-studies/[slug]` are never touched.
Blog artwork goes in `public/blog/` (the original site's `assets/blog/`).
