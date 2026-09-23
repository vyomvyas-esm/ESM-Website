import { NextResponse, type NextRequest } from "next/server";
import redirectMap from "@/data/redirects.json";

/* Trailing-slash handling with the redirect map in view (SEO brief, Phase 6: one hop,
   no chains). Next's own slash redirect happens before config redirects, which turned
   a request for an old bare path into two hops; it is switched off in next.config.ts
   (skipTrailingSlashRedirect) and done here instead:
   - an old path, with or without the slash, goes straight to its new page
   - any other page path without a slash gets one; files and Next internals pass through
   The config's redirects() serves the same map, so the old URLs do not depend on this
   file alone. Plain URL objects are used for the targets: NextURL re-normalises the
   trailing slash and would strip it again. */
const destinations = new Map<string, string>();
for (const r of [...redirectMap.generated, ...redirectMap.manual]) destinations.set(r.source, r.destination);

export default function proxy(request: NextRequest) {
  const url = new URL(request.url);
  const { pathname } = url;
  const bare = pathname.replace(/\/+$/, "") || "/";
  const target = destinations.get(bare);
  if (target && pathname !== target) {
    url.pathname = target;
    return NextResponse.redirect(url, 308);
  }
  const isFile = /\.[a-z0-9]+$/i.test(pathname);
  if (pathname !== "/" && !pathname.endsWith("/") && !isFile) {
    url.pathname = `${pathname}/`;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
