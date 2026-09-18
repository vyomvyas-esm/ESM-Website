import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // one canonical form for every URL: /path/ (the bare form 308s to it)
  trailingSlash: true,
};

export default nextConfig;
