import type { Metadata } from "next";
import copy from "../data/copy-overrides.json" with { type: "json" };

export const SITE_URL = "https://esmagico.com";
export const SITE_NAME = "Es Magico";
export const TITLE_SUFFIX = " | Es Magico";
/** Used when a page has no image of its own: the site's wordmark on its own hero
    backdrop, at the 1200x630 proportion platforms crop link previews to. Composed by
    tools/og-image.mjs from existing assets; a purpose-made card should replace it. */
export const DEFAULT_OG_IMAGE = "/img/og-card.png";
export const DESCRIPTION_LIMIT = 155;

/** "27 July 2026" -> "2026-07-27". Throws on anything else so bad dates never reach markup. */
export function isoDate(display: string): string {
  const m = display.trim().match(/^(\d{1,2}) ([A-Za-z]+) (\d{4})$/);
  const month = m && MONTHS.indexOf(m[2].toLowerCase());
  if (!m || month === null || month < 0) throw new Error(`unparseable date: ${display}`);
  return `${m[3]}-${String(month + 1).padStart(2, "0")}-${m[1].padStart(2, "0")}`;
}
/* The source records dates only. Google's validator wants a time and zone on article
   dates, so they are given as midnight India Standard Time, where the offices are
   (see docs/seo-open-items.md). */
export const isoDateTime = (display: string) => `${isoDate(display)}T00:00:00+05:30`;
const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

/**
 * The meta-description rule from the brief: take the source paragraph as written and
 * keep as many complete sentences as fit under the limit. If not even the first sentence
 * fits, return "" so the page is listed for a human rather than paraphrased.
 */
export function firstSentences(text: string, limit = DESCRIPTION_LIMIT): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length < limit) return clean;
  const sentences = clean.match(/[^.!?]+[.!?]+(?=\s|$)/g) ?? [];
  let out = "";
  for (const s of sentences) {
    const next = (out + " " + s).trim();
    if (next.length >= limit) break;
    out = next;
  }
  return out;
}

export interface PageSeo {
  /** page title without the site suffix (the template adds it) */
  title: string;
  /** home only: use the title as-is, no template */
  absoluteTitle?: boolean;
  description?: string;
  /** canonical path, with trailing slash */
  path: string;
  type?: "website" | "article";
  image?: string | null;
  noindex?: boolean;
  article?: {
    publishedTime: string;
    modifiedTime: string;
    authors: string[];
    section?: string;
    tags?: string[];
  };
}

const overrides = copy as { descriptions: Record<string, string>; titles: Record<string, string> };

export function pageMetadata(seo: PageSeo): Metadata {
  const url = new URL(seo.path, SITE_URL).toString();
  const image = seo.image === null ? undefined : (seo.image ?? DEFAULT_OG_IMAGE);
  // human-written copy (data/copy-overrides.json) replaces a tagline title and fills a
  // description the page's own copy could not supply; a written title takes the template
  const title = overrides.titles[seo.path];
  const description = seo.description || overrides.descriptions[seo.path];
  // the root layout's title template does not reach its own segment, so the home page
  // carries the suffix itself
  const resolvedTitle =
    seo.path === "/" ? { absolute: `${title ?? seo.title}${title ? TITLE_SUFFIX : ""}` } : (title ?? (seo.absoluteTitle ? { absolute: seo.title } : seo.title));
  const meta: Metadata = {
    title: resolvedTitle,
    alternates: { canonical: seo.path },
    openGraph: {
      type: seo.type ?? "website",
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      ...(image ? { images: [{ url: image }] } : {}),
      ...(seo.type === "article" && seo.article ? seo.article : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      ...(image ? { images: [image] } : {}),
    },
  };
  // an absent description must stay absent: nothing may inherit the root layout's
  if (description) meta.description = description;
  if (seo.noindex) meta.robots = { index: false, follow: true };
  return meta;
}
