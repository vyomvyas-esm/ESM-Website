export interface Author {
  name: string;
  role: string;
  /** avatar class from the design layer, e.g. "av-shardul" */
  avatar: string;
}

export interface BlogPost {
  slug: string;
  /** the prototype's slug, kept where Phase 1 repaired it (for the redirect map) */
  legacySlug?: string;
  title: string;
  metaTitle: string;
  lede: string;
  tag: string;
  date: string;
  author: Author;
  railTitle: string;
  sections: { id: string; label: string }[];
  /** article body, sanitised at build time from the original site */
  html: string;
}

export interface BlogCard {
  slug: string;
  title: string;
  date: string;
  tag: string;
  topic: string;
  author: Author;
  /** sort key, newest = 0 */
  ts: number;
  /** lower-cased search haystack */
  txt: string;
  /** null when the artwork is still to come */
  thumb: string | null;
  /** present when the post leads the "Start here" rail; author is "" for the default pick */
  featured?: { author: string; excerpt: string };
}

export interface CaseStudy {
  slug: string;
  /** the prototype's short id, e.g. "rbi" (for the redirect map) */
  prototypeId: string;
  metaTitle: string;
  client: string;
  logo: string;
  title: string;
  lede: string;
  chips: string[];
  html: string;
  metrics: { n: string; label: string }[];
  card: {
    name: string;
    line: string;
    industry: string;
    products: string[];
    txt: string;
    figs: { n: string; l: string }[];
  };
}

export interface Report {
  id: string;
  series: string;
  topic: string;
  txt: string;
  cover: string;
  coverAlt: string;
  seriesLabel: string;
  title: string;
  subtitle: string;
  tease: string;
  tags: string[];
  name: string;
}

export interface ProofEntry {
  big: string;
  label: string;
  big2: string;
  label2: string;
  text: string;
  name: string;
  title: string;
  lc: string;
}

export interface PanelCard {
  client: string;
  line: string;
  logo?: string;
  href?: string;
  pair: { n: string; l: string }[];
}
