import type { BlogPost } from "@/data/types";
import { SITE_NAME, SITE_URL, isoDateTime } from "./seo";

/* Structured data builders. Every value comes from content that already exists in the
   repo (page copy, the footer, the data files); nothing is invented. Fields the source
   cannot supply are omitted and listed in docs/seo-open-items.md. */

export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;
const abs = (path: string) => new URL(path, SITE_URL).toString();

export type JsonLd = Record<string, unknown>;

export function organization(): JsonLd {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: "Es Magico Experiences Private Limited", // footer
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: abs("/img/esm-logo.svg") },
    sameAs: ["https://x.com/EsMagicoAI", "https://www.linkedin.com/company/esmagico/", "https://www.instagram.com/esmagicoai"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "connect@esmagico.com", // footer
      telephone: "+91 94074 74888", // footer
    },
  };
}

export function webSite(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    publisher: { "@id": ORG_ID },
  };
}

export interface Crumb {
  label: string;
  /** absent for a label that is not a page (the visible breadcrumb has these) and for the current page */
  href?: string;
}

/* Derived from the same list as the visible breadcrumb. Google rejects an intermediate
   ListItem without a URL ("Missing field item", verified in the Rich Results Test), so a
   label that is not a page is left out of the schema; every linked crumb and the current
   page appear exactly as shown. See docs/seo-open-items.md for the alternative. */
export function breadcrumbList(items: Crumb[]): JsonLd {
  const kept = items.filter((c, i) => c.href || i === items.length - 1);
  return {
    "@type": "BreadcrumbList",
    itemListElement: kept.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: abs(c.href) } : {}),
    })),
  };
}

export function blogPosting(post: BlogPost, description: string): JsonLd {
  const url = abs(`/blog/${post.slug}/`);
  const published = isoDateTime(post.date);
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline: post.title,
    ...(description ? { description } : {}),
    ...(post.images[0] ? { image: [abs(post.images[0].src)] } : {}),
    datePublished: published,
    // the source carries no modified date; see docs/seo-open-items.md
    dateModified: published,
    inLanguage: "en-GB",
    articleSection: post.tag,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      // no per-author pages exist; the leadership cards live on About
      url: abs("/about/"),
    },
    publisher: { "@id": ORG_ID },
  };
}

export interface Faq {
  question: string;
  answer: string;
}

export function faqPage(faqs: Faq[]): JsonLd {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function service(input: { name: string; description: string; path: string }): JsonLd {
  return {
    "@type": "Service",
    name: input.name,
    ...(input.description ? { description: input.description } : {}),
    url: abs(input.path),
    provider: { "@id": ORG_ID },
  };
}

/** One @graph per page: the Organization and WebSite from the layout plus the page's own nodes. */
export function graph(...nodes: JsonLd[]): JsonLd {
  return { "@context": "https://schema.org", "@graph": nodes };
}
