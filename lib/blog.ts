import { blogCards } from "../data/blog-index.ts";
import type { BlogCard } from "../data/types.ts";

/* The journal's listing model: real pages and real category routes (SEO brief, Phase 4.6)
   in place of a client-side "show more" over every post. An article slug is never a bare
   number (the converter's slugs are words), so /blog/<n>/ is free for page n. */

export const PAGE_SIZE = 12;

export interface Category {
  slug: string;
  /** the tag as it appears on the cards */
  tag: string;
}

export const CATEGORIES: Category[] = [
  { slug: "agentic-ai", tag: "Agentic AI" },
  { slug: "bfsi", tag: "AI in BFSI" },
  { slug: "healthcare", tag: "AI in Healthcare" },
  { slug: "ai-models", tag: "AI Models" },
  { slug: "ai-tools", tag: "AI Tools" },
  { slug: "es-magico", tag: "EsMagico" },
];

export const categoryBySlug = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const categoryByTag = (tag: string) => CATEGORIES.find((c) => c.tag === tag);

/** all cards, newest first, optionally within one category */
export function cardsFor(category?: Category | null): BlogCard[] {
  return blogCards.filter((c) => !category || c.topic === category.tag).sort((a, b) => a.ts - b.ts);
}

export const pageCount = (cards: BlogCard[]) => Math.max(1, Math.ceil(cards.length / PAGE_SIZE));

/** /blog/, /blog/2/, /blog/<category>/ and /blog/<category>/2/: the number alone, no "page" segment */
export function listingPath(category: Category | null | undefined, page: number): string {
  const base = category ? `/blog/${category.slug}/` : "/blog/";
  return page > 1 ? `${base}${page}/` : base;
}

/** a listing page number from a URL segment, or null when it is not one */
export function pageNumber(segment: string, category: Category | null): number | null {
  if (!/^[0-9]+$/.test(segment)) return null;
  const page = Number(segment);
  return page >= 2 && page <= pageCount(cardsFor(category)) ? page : null;
}

/** every listing route, for static params and the sitemap */
export function allListings(): { category: Category | null; page: number }[] {
  const out: { category: Category | null; page: number }[] = [];
  for (const category of [null, ...CATEGORIES]) {
    const pages = pageCount(cardsFor(category));
    for (let page = 1; page <= pages; page++) out.push({ category, page });
  }
  return out;
}

/** page title for a listing route; the journal name is the blog page's own title */
export function listingTitle(category: Category | null | undefined, page: number): string {
  const base = category ? `Blog: ${category.tag}` : "The AI Operator Journal";
  return page > 1 ? `${base}, page ${page}` : base;
}
