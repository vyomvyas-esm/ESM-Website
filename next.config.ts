import type { NextConfig } from "next";
import { readFileSync } from "node:fs";

// read rather than imported: a JSON import in the config breaks Turbopack's font loader
const redirectMap: { generated: Redirect[]; manual: Redirect[] } = JSON.parse(readFileSync(new URL("./data/redirects.json", import.meta.url), "utf8"));
type Redirect = { source: string; destination: string };

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // one canonical form for every URL: /path/; the bare form 308s to it from proxy.ts,
  // which also knows the redirect map, so an old URL never takes two hops
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  /* One-hop permanent redirects for every URL the port changed (SEO brief, Phase 6).
     Sources are bare paths so a request with or without the slash lands on the new
     page in a single hop; see tools/redirects.mjs. */
  async redirects() {
    return [...redirectMap.generated, ...redirectMap.manual].flatMap(({ source, destination }) => [
      { source, destination, permanent: true },
      { source: `${source}/`, destination, permanent: true },
    ]);
  },
  images: {
    // every raster goes through next/image; serve AVIF where the browser accepts it, else WebP
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
