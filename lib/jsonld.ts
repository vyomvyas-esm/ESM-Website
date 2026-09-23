import type { BlogPost } from "@/data/types";
import { SITE_NAME, SITE_URL, isoDateTime } from "./seo";

/* Structured data builders. Every value comes from content that already exists in the
   repo (page copy, the footer, the data files); nothing is invented. Fields the source
   cannot supply are omitted and listed in docs/seo-open-items.md. */

export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;
const abs = (path: string) => new URL(path, SITE_URL).toString();

export type JsonLd = Record<string, unknown>;

/* Offices as listed on /about/ and in the footer. Mumbai is the first named everywhere
   and the Terms name the company as Indian with offices in Mumbai and Bengaluru, so
   Mumbai is the organization's address and the other two are additional locations. */
const OFFICES = [
  {
    name: "Mumbai",
    streetAddress: "Lodha Supremus, 1307, Saki Vihar Road, Tunga Village, Chandivali, Powai",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400072",
    addressCountry: "IN",
  },
  {
    name: "Bengaluru",
    streetAddress: "Unicorn Club 113, 3rd Floor, 19th Main, Sector 4, HSR Layout",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560102",
    addressCountry: "IN",
  },
  {
    name: "New Jersey",
    streetAddress: "2 University Plaza Drive, Suite 100",
    addressLocality: "Hackensack",
    addressRegion: "NJ",
    postalCode: "07601",
    addressCountry: "US",
  },
];
const postalAddress = ({ name, ...a }: (typeof OFFICES)[number]) => ({ "@type": "PostalAddress", ...a });

export function organization(): JsonLd {
  const [head, ...others] = OFFICES;
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: "Es Magico Experiences Private Limited", // footer and legal pages
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: abs("/img/esm-logo.svg") },
    // supplied by the client on 23 September 2026; the site itself does not state it
    foundingDate: "2017",
    sameAs: ["https://x.com/EsMagicoAI", "https://www.linkedin.com/company/esmagico/", "https://www.instagram.com/esmagicoai"],
    address: postalAddress(head),
    // "50+ specialists on the bench" on /about/
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50 },
    location: others.map((o) => ({ "@type": "Place", name: o.name, address: postalAddress(o) })),
    contactPoint: {
      "@type": "ContactPoint",
      email: "connect@esmagico.com", // footer
      telephone: "+91 94074 74888", // footer
      areaServed: ["IN", "US"], // the offices above
      availableLanguage: "en",
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

/* Derived from the same list as the visible breadcrumb. The visible trail keeps its
   section labels (Resources, Company, Engineering, Industries, Trust); they are not
   pages, and Google rejects an intermediate ListItem without a URL ("Missing field
   item", verified in the Rich Results Test), so the schema leaves them out. Every
   linked crumb and the current page appear exactly as shown. Decided 23 September
   2026; see item 14 in docs/seo-open-items.md. */
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

/* A page that states when it was last updated, such as the privacy notice and the terms.
   The date comes from the line printed on the page itself. */
export function webPage(input: { name: string; path: string; dateModified: string }): JsonLd {
  const url = abs(input.path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: input.name,
    dateModified: input.dateModified,
    isPartOf: { "@id": SITE_ID },
    publisher: { "@id": ORG_ID },
  };
}
