import { blogPosts } from "@/data/blog-posts";
import { caseStudies } from "@/data/case-studies";
import { allListings, listingPath } from "./blog";
import { SITE_URL, isoDate } from "./seo";

/* Sitemap content (SEO brief, Phase 4.1): an index with children for pages, case studies
   and blog. Everything comes from the same data as the routes. lastModified is set only
   where the source has a date (blog posts); see docs/seo-open-items.md. */

export interface SitemapEntry {
  path: string;
  lastModified?: string;
  images?: string[];
}

/** static pages that are indexable; /careers/apply/ is noindex and left out */
const STATIC_PATHS = [
  "/",
  "/pyzo/",
  "/pyzo/atlas/",
  "/pyzo/compass/",
  "/pyzo/evio/",
  "/pyzo/forge/",
  "/pyzo/loupe/",
  "/pyzo/prism/",
  "/engineering/agentic-ai/",
  "/engineering/ai-governance/",
  "/engineering/enterprise-ai/",
  "/industries/bfsi/",
  "/industries/healthcare/",
  "/industries/public-sector/",
  "/industries/retail/",
  "/case-studies/",
  "/reports/",
  "/about/",
  "/careers/",
  "/contact/",
  "/technology/",
  "/privacy/",
  "/terms/",
];

export const SITEMAPS = ["pages", "case-studies", "blog"] as const;
export type SitemapName = (typeof SITEMAPS)[number];

export function entriesFor(name: SitemapName): SitemapEntry[] {
  switch (name) {
    case "pages":
      return [...STATIC_PATHS.map((path) => ({ path })), ...allListings().map((l) => ({ path: listingPath(l.category, l.page) }))];
    case "case-studies":
      return caseStudies.map((c) => ({ path: `/case-studies/${c.slug}/` }));
    case "blog":
      return blogPosts.map((p) => ({
        path: `/blog/${p.slug}/`,
        lastModified: isoDate(p.date),
        images: p.images.map((i) => i.src),
      }));
  }
}

const abs = (path: string) => `${SITE_URL}${path}`;
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function urlset(entries: SitemapEntry[]): string {
  const hasImages = entries.some((e) => e.images?.length);
  const body = entries
    .map((e) => {
      const images = (e.images ?? []).map((i) => `<image:image><image:loc>${esc(abs(i))}</image:loc></image:image>`).join("");
      return `<url><loc>${esc(abs(e.path))}</loc>${e.lastModified ? `<lastmod>${e.lastModified}</lastmod>` : ""}${images}</url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${hasImages ? ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"' : ""}>\n${body}\n</urlset>\n`;
}

export function sitemapIndex(): string {
  const body = SITEMAPS.map((n) => `<sitemap><loc>${abs(`/sitemap-${n}.xml`)}</loc></sitemap>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>\n`;
}

export const xmlResponse = (xml: string) => new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
