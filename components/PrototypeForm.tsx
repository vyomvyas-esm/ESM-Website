"use client";

import { useRef, useState } from "react";
import { Arrow } from "./Arrow";

export type Field =
  | { kind: "input"; id: string; label: string; type: string; placeholder: string; autoComplete?: string }
  | { kind: "select"; id: string; label: string; placeholder: string; options: string[] }
  | { kind: "textarea"; id: string; label: string; placeholder: string };

interface Props {
  fields: Field[];
  submitLabel: string;
  doneTitle: string;
  doneText: string;
}

/* The site's prototype form: it acknowledges the entry and scrolls the thank-you
   into view. Wire `onSubmit` to a real endpoint when one exists. */
export function PrototypeForm({ fields, submitLabel, doneTitle, doneText }: Props) {
  const [sent, setSent] = useState(false);
  const ref = useRef<HTMLFormElement>(null);
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    ref.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  };
  return (
    <form
      ref={ref}
      className={`js-form form-panel card flex w-full flex-col p-7 backdrop-blur-md lg:p-8${sent ? " form-sent" : ""}`}
      onSubmit={send}
      noValidate
    >
      <div className="form-body flex flex-1 flex-col">
        {fields.map((f) => (
          <div key={f.id} className="field">
            <label htmlFor={f.id}>{f.label}</label>
            {f.kind === "input" && (
              <input id={f.id} type={f.type} placeholder={f.placeholder} autoComplete={f.autoComplete} />
            )}
            {f.kind === "select" && (
              <select id={f.id} defaultValue="">
                <option value="">{f.placeholder}</option>
                {f.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            )}
            {f.kind === "textarea" && <textarea id={f.id} placeholder={f.placeholder}></textarea>}
          </div>
        ))}
        <button type="submit" className="btn btn-light group mt-auto w-full js-send">
          {submitLabel}
          <Arrow />
        </button>
      </div>

      <div className="form-done my-auto text-center">
        <span className="mx-auto grid h-11 w-11 place-items-center rounded-full border border-teal/40 bg-teal/10 text-teal">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="m4.8 10.4 3.4 3.4 7-7.6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-[16px] font-medium">{doneTitle}</h3>
        <p className="mt-3 text-[12.5px] leading-[1.75] text-white/45">{doneText}</p>
      </div>
    </form>
  );
}
