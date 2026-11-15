import { preload } from "react-dom";

/* Starts downloading a PYZO diagram script as soon as the page's HTML arrives, rather
   than after the page has hydrated (components/PyzoDiagrams.tsx loads it from there).
   Render it on any page that has a [data-pyzo-arch] or [data-pyzo-flow] mount point:
   the browser then holds the file ready, and the diagram starts without a download. */
export function PreloadPyzoScript({ lib }: { lib: "arch" | "flow" }) {
  preload(`/js/pyzo-${lib}.js`, { as: "script" });
  return null;
}
