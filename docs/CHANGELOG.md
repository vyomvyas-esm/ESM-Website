# Changelog

## v63.1 (3 November 2026)

- **"Start Free Trial"** on the PYZO page (hero and closing band) now opens the PYZO
  dashboard, https://staging-dashboard.pyzo.ai/, instead of the contact page. The header's
  "Define an Outcome" still leads to the contact page.
- **pyzo.ai**: `tools/pyzo-ai.mjs` packages the PYZO page as its own small Node.js app
  for pyzo.ai, from the main build. Every link on it points to www.esmagico.com, its
  canonical stays www.esmagico.com/pyzo/, and any other pyzo.ai address is sent
  permanently to the same address on www.esmagico.com.

## v63 (3 November 2026)

Built on the live site (main after PR #15). Every mobile change was checked at 390px and
360px, every laptop change at 1440px, and a full-page sweep (31 page types × 3 widths: no
sideways scroll, no overlapping text, no squeezed text, no broken images) ran before release.

### Mobile
1. **PYZO "How it works" diagrams** (Atlas, Compass, Evio, Forge, Loupe, Prism). Below 768px
   a vertical version replaces the drawing: the product line, then each lane top to bottom
   (Your people, Secure entry, the product core, Private AI, Your data, Your systems, Your
   controls, Es Magico) joined by teal arrows, every node with its description and model
   steps, each stage's caption beside its lane, and the request path end to end. It is built
   from the diagram library's own data, so every node of the laptop diagram is present
   (verified per product). Tablet and laptop drawings unchanged.
2. **Menu** scrolls within the screen, so every section and sub-menu is reachable (892px of
   links in a 742px panel at 390px); the page behind stays still while it is open.
3. **Engineering timeline** (Agentic AI, AI Governance, Data Architecture) is vertical below
   1024px: one line down the left from dot to dot. Horizontal on laptop as before.
4. **Case study cards** on the Case Studies page were laid out in four desktop columns on a
   phone, with the description in a 0px column running through the figures. The phone card
   now reads logo, then client and description, then the figures on their own line. Case
   cards on the home, product, engineering and industry pages (stacked figures, v62 fix)
   re-checked.
5. **Reports**: the same rail rule gave each report's text a 0px column and stretched the
   cover into a tall blank. Cover, title and description now stack, as the design intends.

### Laptop
6. **Filters** on Case Studies, Blogs and Reports stay pinned while the list scrolls, as on
   the Glossary. They had been scrolling away because their section clipped its overflow.

### Both
7. **Card images** on the product, engineering and industry pages: 28 "related reading" blog
   cards pointed at the export's numbered thumbnails (`/blog/108-t.webp`), which do not
   exist. Each now shows its article's own first image. No card was removed: every one of
   the 28 articles has artwork. All case-study logos load and show in both themes.
8. **Blog order** is oldest first everywhere the journal is listed (journal pages, category
   pages, and the default of the Sort filter; "Newest first" is still available), by
   publication date.
9. **Topic bubbles** under the page numbers are removed. The Category options in the filter
   rail are now links, so search engines still reach every category page.
10. **Industry "Where AI fits"**: the 24 product logos before the use-case headings are
    replaced with line icons of the use case (a mortarboard for training, a balance for
    consistent assessment, a ledger for reconciliation, and so on), teal in both themes.
