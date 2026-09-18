import { sitemapIndex, xmlResponse } from "@/lib/sitemap";

export const dynamic = "force-static";

/** the sitemap index; robots.txt points here */
export function GET() {
  return xmlResponse(sitemapIndex());
}
