"use client";

import { useSyncExternalStore } from "react";

/* The theme lives on <html data-theme>, set before paint by the boot script in
   the layout. Every switch on the page reads that one attribute. */
function subscribe(cb: () => void) {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}
const isLight = () => document.documentElement.getAttribute("data-theme") === "light";

export function setTheme(next: "light" | "dark") {
  const root = document.documentElement;
  if (next === "dark") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", "light");
  try {
    localStorage.setItem("esm-theme", next);
  } catch {
    /* storage may be unavailable; the choice just will not persist */
  }
}

export function ThemeSwitch() {
  const light = useSyncExternalStore(subscribe, isLight, () => true);
  return (
    <button
      type="button"
      className="tsw"
      role="switch"
      aria-checked={light}
      aria-label="Switch between dark and light mode"
      title="Dark and light mode"
      onClick={() => setTheme(light ? "dark" : "light")}
    >
      <span className="tsw-knob">
        <svg className="tsw-moon" width="10" height="10" viewBox="0 0 16 16" fill="none">
          <path d="M13.4 10.2A5.8 5.8 0 0 1 5.8 2.6a5.8 5.8 0 1 0 7.6 7.6Z" fill="currentColor" />
        </svg>
        <svg className="tsw-sun" width="10" height="10" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="3.1" fill="currentColor" />
          <path
            d="M8 1.2v1.6M8 13.2v1.6M1.2 8h1.6M13.2 8h1.6M3.2 3.2l1.1 1.1M11.7 11.7l1.1 1.1M12.8 3.2l-1.1 1.1M4.3 11.7l-1.1 1.1"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </button>
  );
}
