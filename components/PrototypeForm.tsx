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
  doneText?: string;
}

type Problem = "empty" | "format" | "";

/* A field whose label says "optional" may be left empty; every other one is required. */
const required = (f: Field) => !/optional/i.test(f.label);

function check(f: Field, value: string): Problem {
  const v = value.trim();
  if (!v) return required(f) ? "empty" : "";
  if (f.kind !== "input") return "";
  if (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "format";
  if (f.type === "url" && !/^(https?:\/\/)?[^\s.]+\.[^\s]{2,}/i.test(v.replace(/^https?:\/\/$/, ""))) return "format";
  return "";
}

/* The site's prototype form: it checks every required field, then turns over to the
   thank-you. It sends nothing; wire `send` to a real endpoint when one exists. */
export function PrototypeForm({ fields, submitLabel, doneTitle, doneText }: Props) {
  const [sent, setSent] = useState(false);
  const [flip, setFlip] = useState<"" | "is-flip" | "is-flip-in">("");
  const [errors, setErrors] = useState<Record<string, Problem>>({});
  const [msg, setMsg] = useState("");
  const ref = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  const valueOf = (id: string) => (ref.current?.querySelector<HTMLInputElement>(`#${id}`)?.value ?? "");

  const onEdit = (f: Field) => () => {
    if (!errors[f.id] || check(f, valueOf(f.id))) return;
    const next = { ...errors, [f.id]: "" as Problem };
    setErrors(next);
    if (!Object.values(next).some(Boolean)) setMsg("");
  };

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (sent || flip) return;
    const found: Record<string, Problem> = {};
    for (const f of fields) found[f.id] = check(f, valueOf(f.id));
    setErrors(found);
    const bad = fields.filter((f) => found[f.id]);
    if (bad.length) {
      setMsg(
        bad.some((f) => found[f.id] === "empty")
          ? "Please complete every field before you submit the form."
          : "Please check the address you entered, it does not look right.",
      );
      ref.current?.querySelector<HTMLElement>(`#${bad[0].id}`)?.focus();
      return;
    }
    setMsg("");
    const form = ref.current!;
    // hold the height so the panel does not jump when its content changes
    form.style.minHeight = `${form.offsetHeight}px`;
    const done = () => {
      setSent(true);
      requestAnimationFrame(() => doneRef.current?.focus({ preventScroll: true }));
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return done();
    setFlip("is-flip");
    setTimeout(() => {
      done();
      setFlip("is-flip-in");
      // two frames so the turned-away state paints before it turns back
      requestAnimationFrame(() => requestAnimationFrame(() => setFlip("")));
    }, 340);
  };

  return (
    <form
      ref={ref}
      className={`js-form form-panel card flex w-full flex-col p-7 backdrop-blur-md lg:p-8${sent ? " form-sent" : ""}${flip ? ` ${flip}` : ""}`}
      onSubmit={send}
      noValidate
    >
      <div className="form-body flex flex-1 flex-col">
        {fields.map((f) => {
          const err = !!errors[f.id];
          const common = { id: f.id, "aria-invalid": err || undefined, onChange: onEdit(f) };
          return (
            <div key={f.id} className={`field${err ? " is-err" : ""}`}>
              <label htmlFor={f.id}>{f.label}</label>
              {f.kind === "input" && <input {...common} type={f.type} placeholder={f.placeholder} autoComplete={f.autoComplete} />}
              {f.kind === "select" && (
                <select {...common} defaultValue="">
                  <option value="">{f.placeholder}</option>
                  {f.options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              )}
              {f.kind === "textarea" && <textarea {...common} placeholder={f.placeholder}></textarea>}
            </div>
          );
        })}
        <p className="form-msg" role="alert" hidden={!msg}>
          {msg}
        </p>
        <button type="submit" className="btn btn-light group mt-auto w-full js-send">
          {submitLabel}
          <Arrow />
        </button>
      </div>

      <div ref={doneRef} tabIndex={-1} className="form-done my-auto text-center">
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
        {doneText && <p className="mt-3 text-[12.5px] leading-[1.75] text-white/45">{doneText}</p>}
      </div>
    </form>
  );
}
