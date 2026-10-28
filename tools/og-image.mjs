/*
 * Composes the social card at the proportion platforms crop link previews to.
 *
 *   node tools/og-image.mjs
 *
 * Nothing new is drawn: the site's own hero backdrop is cropped to 1200 by 630 and the
 * site's own wordmark is placed on it. A purpose-made card from a designer should
 * replace this; until one exists, a shared link shows the brand rather than an
 * arbitrary crop of the hero. Referenced by DEFAULT_OG_IMAGE in lib/seo.ts.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "public/img/og-card.png");
const W = 1200;
const H = 630;
const LOGO_W = 560;

const logo = await sharp(path.join(ROOT, "public/img/esm-logo.svg"), { density: 300 })
  .resize({ width: LOGO_W })
  .toBuffer();

// the light hero is the site default and its wordmark is near-black, so the two agree;
// 1920x1280 cropped to the upper band, where the artwork is quietest behind type
const background = await sharp(path.join(ROOT, "public/img/img-hero-light.webp"))
  .resize({ width: W, height: H, fit: "cover", position: "top" })
  .toBuffer();

await sharp(background)
  .composite([{ input: logo, gravity: "centre" }])
  .png({ compressionLevel: 9 })
  .toFile(OUT);

const { size } = fs.statSync(OUT);
const meta = await sharp(OUT).metadata();
console.log(`[og-image] ${path.relative(ROOT, OUT)} ${meta.width}x${meta.height}, ${(size / 1024).toFixed(0)} KB`);
