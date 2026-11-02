import { NextResponse, type NextRequest } from "next/server";
import redirectMap from "@/data/redirects.json";

/* Trailing-slash and host handling with the redirect map in view (SEO brief, Phase 6:
   one hop, no chains). Next's own slash redirect happens before config redirects, which
   turned a request for an old bare path into two hops; it is switched off in
   next.config.ts (skipTrailingSlashRedirect) and done here instead:
   - an old path, with or without the slash, goes straight to its new page
   - any other page path without a slash gets one; files and Next internals pass through
   - anything arriving on www goes to the canonical host, carrying the decision above
     with it, so a www request for an old bare path still takes a single hop
   The config's redirects() serves the same map, so the old URLs do not depend on this
   file alone. Plain URL objects are used for the targets: NextURL re-normalises the
   trailing slash and would strip it again. */
const CANONICAL_HOST = "esmagico.com"; // SITE_URL in lib/seo.ts; seo-check --redirects fails on drift
const WWW_HOST = `www.${CANONICAL_HOST}`;

const destinations = new Map<string, string>();
for (const r of [...redirectMap.generated, ...redirectMap.manual]) destinations.set(r.source, r.destination);

export default function proxy(request: NextRequest) {
  const url = new URL(request.url);
  const { pathname } = url;
  const offHost = (request.headers.get("host") ?? url.host).toLowerCase() === WWW_HOST;
  const bare = pathname.replace(/\/+$/, "") || "/";
  const isFile = /\.[a-z0-9]+$/i.test(pathname);
  const mapped = destinations.get(bare);
  const target = mapped ?? (pathname !== "/" && !pathname.endsWith("/") && !isFile ? `${pathname}/` : pathname);
  if (target === pathname && !offHost) return NextResponse.next();
  url.pathname = target;
  if (offHost) {
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    url.port = "";
  }
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
