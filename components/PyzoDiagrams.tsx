"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/*
 * The PYZO architecture diagrams ([data-pyzo-arch]) and card flows ([data-pyzo-flow])
 * are plain-JavaScript libraries carried over from the design (public/js). They are
 * loaded only on a page that has a mount point, mounted again after each navigation,
 * and bound to the site's theme, since each carries its own light and dark palette.
 */
const LIBS = [
  { attr: "data-pyzo-arch", src: "/js/pyzo-arch.js", global: "PyzoArch", theme: (dark: boolean) => (dark ? "ink" : "paper") },
  { attr: "data-pyzo-flow", src: "/js/pyzo-flow.js", global: "PyzoFlow", theme: (dark: boolean) => (dark ? "dark" : null) },
] as const;

type Lib = { mountAll: (scope?: ParentNode) => void };
const loading = new Map<string, Promise<void>>();

function load(src: string) {
  if (!loading.has(src)) {
    loading.set(
      src,
      new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error(`could not load ${src}`));
        document.head.appendChild(s);
      }),
    );
  }
  return loading.get(src)!;
}

function syncTheme() {
  const dark = document.documentElement.getAttribute("data-theme") !== "light";
  for (const lib of LIBS) {
    const value = lib.theme(dark);
    document.querySelectorAll(`[${lib.attr}]`).forEach((el) => {
      if (value) el.setAttribute("data-theme", value);
      else el.removeAttribute("data-theme");
    });
  }
}

export function PyzoDiagrams() {
  const pathname = usePathname();

  useEffect(() => {
    syncTheme();
    for (const lib of LIBS) {
      if (!document.querySelector(`[${lib.attr}]`)) continue;
      load(lib.src)
        .then(() => (window as unknown as Record<string, Lib | undefined>)[lib.global]?.mountAll())
        .catch(() => {
          /* a diagram that cannot load leaves its empty frame, as with no script */
        });
    }
  }, [pathname]);

  useEffect(() => {
    const mo = new MutationObserver(syncTheme);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, []);

  return null;
}
