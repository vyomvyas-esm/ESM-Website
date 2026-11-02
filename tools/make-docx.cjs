const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle,
  Table, TableRow, TableCell, WidthType, ShadingType, PageBreak, LevelFormat, convertInchesToTwip,
} = require("docx");

const INK = "101819";
const BODY = "33403F";
const MUTED = "647373";
const ACCENT = "0D6F66";
const RULE = "D7E0DF";
const SOFT = "F2F6F5";
const DONE_BG = "E3F0E8";
const DONE_FG = "2C6A4E";

const DISPLAY = "Schibsted Grotesk";
const SANS = "IBM Plex Sans";
const MONO = "IBM Plex Mono";

const PAGE_W = 12240; // US Letter
const MARGIN = 1080; // 0.75in
const CONTENT_W = PAGE_W - MARGIN * 2;

const t = (text, o = {}) => new TextRun({ text, font: o.font ?? SANS, size: o.size ?? 19, color: o.color ?? BODY, bold: o.bold, italics: o.italics, allCaps: o.caps, characterSpacing: o.spacing });

const eyebrow = (text) =>
  new Paragraph({ spacing: { after: 60 }, children: [t(text, { font: SANS, size: 15, color: ACCENT, bold: true, caps: true, spacing: 30 })] });

const h1 = (text) =>
  new Paragraph({ spacing: { after: 120 }, children: [t(text, { font: DISPLAY, size: 40, color: INK, bold: true })] });

const h2 = (text) =>
  new Paragraph({
    spacing: { before: 320, after: 140 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 6 } },
    children: [t(text, { font: DISPLAY, size: 25, color: INK, bold: true })],
  });

const h3 = (text) => new Paragraph({ spacing: { before: 60, after: 40 }, children: [t(text, { font: DISPLAY, size: 20, color: INK, bold: true })] });

const p = (text, o = {}) => new Paragraph({ spacing: { after: o.after ?? 100 }, children: [t(text, o)] });

const bullets = (items) =>
  items.map((text) => new Paragraph({ numbering: { reference: "dots", level: 0 }, spacing: { after: 40 }, children: [t(text)] }));

const cell = (children, o = {}) =>
  new TableCell({
    width: { size: o.w, type: WidthType.DXA },
    margins: { top: 90, bottom: 90, left: 120, right: 120 },
    shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill, color: "auto" } : undefined,
    verticalAlign: o.top ? "top" : undefined,
    children,
  });

const plainTable = (rows, widths) =>
  new Table({
    columnWidths: widths,
    width: { size: widths.reduce((a, b) => a + b, 0), type: WidthType.DXA },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 2, color: RULE },
      bottom: { style: BorderStyle.SINGLE, size: 2, color: RULE },
      left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
      right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: RULE },
      insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    },
    rows,
  });

/* ---------------------------------------------------------------- content */

const figures = [
  ["417", "pages generated, every one static"],
  ["417", "unique titles, canonicals and descriptions"],
  ["1,166", "structured data nodes across seven types"],
  ["0", "orphans, broken links or redirect chains"],
];

const phases = [
  ["Port", "The prototype became a Next.js 16 application", [
    "6.7 MB single file HTML with 359 pages toggled by JavaScript, converted to App Router with Tailwind v4, TypeScript and React 19.",
    "Layout, spacing, colour and typography are unchanged: page heights were compared against the prototype page by page and match exactly.",
  ]],
  ["Phase 0", "Audit", [
    "Router, content storage, route inventory, rendering mode, client components, navigation, crawl files, image handling and font loading, reported before a single edit.",
  ]],
  ["Phase 1", "URL map, approved then applied", [
    "Trailing slashes as the single canonical form across all 417 pages.",
    "/services/ became /engineering/; case studies now carry client names.",
    "31 damaged blog slugs repaired: 27 cut mid word by the prototype, 4 with apostrophe fragments.",
  ]],
  ["Phase 2", "Metadata on every page", [
    "Origin and a single title template central; no page inherits a description.",
    "Self referencing canonical, Open Graph and Twitter cards everywhere; 325 articles carry article type with dates, author and section.",
    "250 descriptions derived from existing page copy under a strict rule, never paraphrased into new claims.",
    "Index exclusion on the careers application page.",
  ]],
  ["Phase 3", "Structured data, server rendered", [
    "Organization and WebSite on every page, BreadcrumbList on all 416 pages below home, BlogPosting on 325 articles, Service on nine, FAQPage on five.",
    "Validated in Google's Rich Results Test and the Schema Markup Validator with zero errors.",
  ]],
  ["Phase 4", "Crawl infrastructure", [
    "Sitemap index with three children; the journal sitemap carries image entries for all 647 figures.",
    "Journal pagination and the six categories became real addresses, so all 325 articles are reachable. Previously only the first 12 were.",
    "Robots file, genuine 404 responses, and internal links from 117 articles to the relevant industry, capability and case study pages.",
  ]],
  ["Phase 5", "Performance and images", [
    "The client's export of 647 images, 640 MB of PNGs, converted to WebP at 49 MB and named after their article.",
    "94 articles that showed placeholders now carry their artwork; every image has explicit dimensions, lazy loading and derived alt text.",
    "No raw image tags and no embedded data URIs remain anywhere in the site.",
  ]],
  ["Phase 6", "Redirects", [
    "40 permanent redirects covering every address the port changed, each reaching its new page in a single hop from either URL form.",
    "Verified against a production server, not assumed.",
  ]],
  ["Copy", "167 descriptions and 28 titles written and applied", [
    "The pages whose own copy could not yield a description, and the titles that were taglines rather than search terms, went back to the site's copywriter with the source text for each.",
    "All 195 came back, passed validation for length, uniqueness and the brand writing rules, and are live in the metadata.",
  ]],
];

const checks = [
  ["Pages generated, all static, none server rendered on request", "424 / 424"],
  ["Unique titles, unique canonicals, duplicate descriptions", "417 / 417 / 0"],
  ["Pages carrying exactly one top level heading", "417"],
  ["Structured data issues across all pages", "0"],
  ["Sitemap against generated pages: missing, stray, image entries", "0 / 0 / 647"],
  ["Link crawl: pages reached, orphans, broken, redirecting", "417 / 0 / 0 / 0"],
  ["Redirect map: entries, issues", "40 / 0"],
  ["Brand rule violations in everything written for this work", "0"],
];

const steps = [
  ["01", "Search Console export of the currently indexed addresses",
    "The 40 redirects cover what this port changed. The addresses the live site has indexed today are unknown to the repository, so links from search results would reach a 404 at launch. The export drops straight into the prepared file and each entry maps to its nearest section.",
    "Marketing. Blocks launch."],
  ["02", "Typefaces",
    "The brief names Archivo and IBM Plex Mono; the design uses Inter and Schibsted Grotesk, both self hosted and subset. Changing families is a visible typography change, so the design's own faces stay until someone decides otherwise.",
    "Design"],
  ["03", "A social image at the proportion platforms crop to",
    "Team size, all three office addresses and the founding year are now in the organisation schema, and the legal pages carry the update date they print. One gap is left: no image on the site is near the 1200 by 630 proportion that social platforms crop link previews to, so a shared link falls back to the hero and crops it awkwardly. The founding year is also worth adding to the About page, so the page and the schema agree.",
    "Marketing"],
  ["04", "Richer internal links on articles, optional",
    "Every article now links to the section that covers its category, so none is without an internal link. Beyond that, a capability page is linked only where the article title names one and a case study only where the industry or capability points at one. No article mentions a capability in its prose, so nothing in the data chooses a second target; a person can add one per article in a file prepared for it.",
    "Content"],
  ["05", "Two gaps in the image export",
    "One article has an empty folder and another has a single image instead of two, so those slots keep the placeholder. One mis numbered folder was reassigned on the evidence of the image itself and needs a second opinion.",
    "Content"],
  ["06", "Merge the stack and confirm the production origin",
    "Five pull requests are open and stacked in order; the sixth is ready to open. The origin is set to the domain without www and needs confirming against the hosting before launch.",
    "Engineering"],
  ["07", "After launch",
    "Submit the sitemap index in Search Console, repeat the Rich Results Test against live addresses rather than pasted markup, watch 404 reports for addresses the export missed, and repeat the link crawl against the deployed site.",
    "Marketing and Engineering"],
];

/* ----------------------------------------------------------------- assemble */

const children = [];

children.push(eyebrow("Status report"));
children.push(h1("Search and technical SEO on esmagico.com"));
children.push(
  new Paragraph({
    spacing: { after: 160 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: INK, space: 10 } },
    children: [t("The marketing site has been ported from the single file HTML prototype to Next.js, and the full SEO brief has been implemented across seven phases. The site is complete on the engineering side and is waiting on two decisions and one data export before launch.", { size: 21 })],
  }),
);
children.push(
  new Paragraph({
    spacing: { after: 200 },
    children: [
      t("Date  ", { font: MONO, size: 16, color: MUTED }), t("23 September 2026", { font: MONO, size: 16, color: INK }),
      t("     Repository  ", { font: MONO, size: 16, color: MUTED }), t("vyomvyas-esm/ESM-Website", { font: MONO, size: 16, color: INK }),
      t("     Branch  ", { font: MONO, size: 16, color: MUTED }), t("seo/phase-6-redirects", { font: MONO, size: 16, color: INK }),
    ],
  }),
);

children.push(h2("Where the site stands"));
const figW = Math.floor(CONTENT_W / 4);
children.push(
  plainTable(
    [
      new TableRow({
        children: figures.map(([v, k]) =>
          cell(
            [
              new Paragraph({ spacing: { after: 20 }, children: [t(v, { font: DISPLAY, size: 28, color: INK, bold: true })] }),
              new Paragraph({ children: [t(k, { size: 16, color: MUTED })] }),
            ],
            { w: figW, fill: SOFT, top: true },
          ),
        ),
      }),
    ],
    [figW, figW, figW, CONTENT_W - figW * 3],
  ),
);
children.push(p("Every figure in this report comes from the verification script in the repository, which is executed against the generated HTML after every change. Four separate checks cover pages, links, redirects and the brand writing rules; they are part of the repository and can be repeated by anyone.", { after: 160, color: MUTED, size: 18 }));

children.push(h2("What has been completed"));
const idW = 1200;
children.push(
  plainTable(
    phases.map(([id, title, points]) =>
      new TableRow({
        children: [
          cell([new Paragraph({ children: [t(id, { font: MONO, size: 16, color: MUTED })] })], { w: idW, top: true }),
          cell(
            [
              new Paragraph({ spacing: { after: 40 }, children: [t(title, { font: DISPLAY, size: 19, color: INK, bold: true })] }),
              ...points.map((x, i) => new Paragraph({ spacing: { after: i === points.length - 1 ? 0 : 40 }, children: [t(x, { size: 18 })] })),
            ],
            { w: CONTENT_W - idW - 900, top: true },
          ),
          cell([new Paragraph({ alignment: AlignmentType.RIGHT, children: [t("Done", { size: 15, color: DONE_FG, bold: true, caps: true, spacing: 20 })] })], { w: 900, top: true }),
        ],
      }),
    ),
    [idW, CONTENT_W - idW - 900, 900],
  ),
);

children.push(new Paragraph({ children: [new PageBreak()] }));

children.push(h2("Verification, repeatable on demand"));
const resW = 1900;
children.push(
  plainTable(
    checks.map(([what, result]) =>
      new TableRow({
        children: [
          cell([new Paragraph({ children: [t(what, { size: 18 })] })], { w: CONTENT_W - resW }),
          cell([new Paragraph({ alignment: AlignmentType.RIGHT, children: [t(result, { font: MONO, size: 17, color: INK })] })], { w: resW }),
        ],
      }),
    ),
    [CONTENT_W - resW, resW],
  ),
);

children.push(h2("Future steps"));
children.push(p("Seventeen items remain open. The seven below are the ones that need a person; the first holds up launch.", { after: 140, color: MUTED, size: 18 }));
const snW = 620;
const ownW = 2100;
children.push(
  plainTable(
    steps.map(([n, title, detail, owner]) =>
      new TableRow({
        children: [
          cell([new Paragraph({ children: [t(n, { font: MONO, size: 16, color: ACCENT })] })], { w: snW, top: true }),
          cell(
            [
              new Paragraph({ spacing: { after: 40 }, children: [t(title, { font: DISPLAY, size: 19, color: INK, bold: true })] }),
              new Paragraph({ children: [t(detail, { size: 18 })] }),
            ],
            { w: CONTENT_W - snW - ownW, top: true },
          ),
          cell([new Paragraph({ alignment: AlignmentType.RIGHT, children: [t(owner, { size: 16, color: MUTED })] })], { w: ownW, top: true }),
        ],
      }),
    ),
    [snW, CONTENT_W - snW - ownW, ownW],
  ),
);
children.push(p("Everything above, along with ten further assumptions recorded during the work, is tracked in docs/seo-open-items.md in the repository, with the phase it came from and its current state.", { after: 60, color: MUTED, size: 18 }));

const doc = new Document({
  creator: "Es Magico",
  title: "Es Magico: search and technical SEO status",
  description: "Status report on the search and technical SEO work for esmagico.com",
  numbering: {
    config: [{ reference: "dots", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: convertInchesToTwip(0.25), hanging: convertInchesToTwip(0.15) } } } }] }],
  },
  styles: { default: { document: { run: { font: SANS, size: 19, color: BODY } } } }, // brand-rules: allow (docx-js property name)
  sections: [
    {
      properties: { page: { size: { width: PAGE_W, height: 15840 }, margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN } } },
      children,
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(process.argv[2], buf);
  console.log("written", process.argv[2], buf.length, "bytes");
});
