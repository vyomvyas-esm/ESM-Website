import type { Metadata } from "next";

export const SITE_URL = "https://esmagico.com";
export const SITE_NAME = "Es Magico";
export const TITLE_SUFFIX = " | Es Magico";
/** Used when a page has no image of its own. An existing site asset, not new artwork. */
export const DEFAULT_OG_IMAGE = "/img/img-hero.webp";
export const DESCRIPTION_LIMIT = 155;

/** "27 July 2026" -> "2026-07-27". Throws on anything else so bad dates never reach markup. */
export function isoDate(display: string): string {
  const m = display.trim().match(/^(\d{1,2}) ([A-Za-z]+) (\d{4})$/);
  const month = m && MONTHS.indexOf(m[2].toLowerCase());
  if (!m || month === null || month < 0) throw new Error(`unparseable date: ${display}`);
  return `${m[3]}-${String(month + 1).padStart(2, "0")}-${m[1].padStart(2, "0")}`;
}
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

export function pageMetadata(seo: PageSeo): Metadata {
  const url = new URL(seo.path, SITE_URL).toString();
  const image = seo.image === null ? undefined : (seo.image ?? DEFAULT_OG_IMAGE);
  const meta: Metadata = {
    title: seo.absoluteTitle ? { absolute: seo.title } : seo.title,
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
  if (seo.description) meta.description = seo.description;
  if (seo.noindex) meta.robots = { index: false, follow: true };
  return meta;
}
