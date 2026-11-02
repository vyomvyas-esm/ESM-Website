"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  /** entries behind each option, shown beside it; an option with no count shows none */
  counts?: Record<string, number>;
  ariaLabel?: string;
}

/** Entries per option value; "all" and "" count everything. */
export function countBy<T>(items: T[], options: { value: string }[], matches: (item: T, value: string) => boolean) {
  return Object.fromEntries(
    options.map((o) => [o.value, o.value === "" || o.value === "all" ? items.length : items.filter((i) => matches(i, o.value)).length]),
  );
}

/* A filter in the design's markup. In the listing rails the design lays the menu open as
   a labelled list of options with counts and hides the button; elsewhere the button opens
   the same menu as a dropdown. The native <select> stays in the DOM, visually hidden, as
   the keyboard and screen-reader control and the source of truth. */
export function FilterSelect({ label, value, options, onChange, counts, ariaLabel }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = options.find((o) => o.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const close = (e: Event) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  const pick = (v: string) => {
    onChange(v);
    setOpen(false);
  };

  return (
    <div ref={ref} className={`fdd ${open ? "open" : ""}`}>
      <button
        type="button"
        className="fdd-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        tabIndex={-1}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="fdd-k">{label}</span>
        <span className="fdd-v">{current?.label}</span>
        <svg className="fdd-c" width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="m4 6.4 4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="fdd-menu" role="listbox" aria-label={ariaLabel ?? label} data-label={label}>
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            role="option"
            className="fdd-opt"
            aria-selected={o.value === value}
            tabIndex={-1}
            onClick={() => pick(o.value)}
          >
            <span>{o.label}</span>
            <span className="fdd-n">{counts?.[o.value] ?? ""}</span>
          </button>
        ))}
      </div>
      <select aria-label={ariaLabel ?? label} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
