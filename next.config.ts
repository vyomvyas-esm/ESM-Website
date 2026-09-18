import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // one canonical form for every URL: /path/ (the bare form 308s to it)
  trailingSlash: true,
  images: {
    // every raster goes through next/image; serve AVIF where the browser accepts it, else WebP
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
