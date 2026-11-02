import type { NextConfig } from "next";
import { readFileSync } from "node:fs";

// read rather than imported: a JSON import in the config breaks Turbopack's font loader
const redirectMap: { generated: Redirect[]; manual: Redirect[] } = JSON.parse(readFileSync(new URL("./data/redirects.json", import.meta.url), "utf8"));
type Redirect = { source: string; destination: string };

/* The canonical origin, matching SITE_URL in lib/seo.ts and proxy.ts; tools/seo-check.mjs
   --redirects fails if the three drift. The site lives on www (confirmed 2 November 2026);
   the bare domain is not an address of its own: every path on it goes to the same path on
   www, and an old path arriving there goes to its new page on www in one hop rather than
   through the www copy of the old path. */
const CANONICAL_ORIGIN = "https://www.esmagico.com";
const onApex = [{ type: "host" as const, value: new URL(CANONICAL_ORIGIN).host.replace(/^www\./, "") }];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // one canonical form for every URL: /path/; the bare form 308s to it from proxy.ts,
  // which also knows the redirect map, so an old URL never takes two hops
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  /* One-hop permanent redirects for every URL the port changed (SEO brief, Phase 6).
     Sources are bare paths so a request with or without the slash lands on the new
     page in a single hop; see tools/redirects.mjs. The bare-domain variants come first so
     a host and a path are settled together. Every other path on the bare domain is sent
     to www by proxy.ts. */
  async redirects() {
    const map = [...redirectMap.generated, ...redirectMap.manual];
    return [
      ...map.flatMap(({ source, destination }) => [
        { source, has: onApex, destination: `${CANONICAL_ORIGIN}${destination}`, permanent: true },
        { source: `${source}/`, has: onApex, destination: `${CANONICAL_ORIGIN}${destination}`, permanent: true },
      ]),
      ...map.flatMap(({ source, destination }) => [
        { source, destination, permanent: true },
        { source: `${source}/`, destination, permanent: true },
      ]),
    ];
  },
  images: {
    // every raster goes through next/image; serve AVIF where the browser accepts it, else WebP
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
