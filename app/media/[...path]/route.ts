import { readFile } from "node:fs/promises";
import path from "node:path";

/*
 * Serves the site's own files (assets/: images, blog artwork, the PYZO scripts) from the
 * application rather than from Next's public/ folder. Hostinger's web server answers any
 * path that exists under public/ itself and, on this hosting, returns 404 for all of them;
 * a path that does not exist there reaches the application. next.config.ts rewrites the
 * public addresses (/img/…, /js/…, /blog/<file>.webp) here, so no URL changes.
 */
const ROOT = path.join(process.cwd(), "assets");

const TYPES: Record<string, string> = {
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".avif": "image/avif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".woff2": "font/woff2",
};

export async function GET(_req: Request, { params }: { params: Promise<{ path: string[] }> }) {
  const parts = (await params).path;
  const file = path.join(ROOT, ...parts);
  const type = TYPES[path.extname(file).toLowerCase()];
  // only known file types, and never a path that climbs out of assets/
  if (!type || !file.startsWith(ROOT + path.sep)) return new Response("Not found", { status: 404 });
  try {
    const body = await readFile(file);
    return new Response(new Uint8Array(body), {
      headers: {
        "Content-Type": type,
        // file names are not content-hashed, so a day rather than a year
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
