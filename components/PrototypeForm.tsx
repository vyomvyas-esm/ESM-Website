"use client";

import { useRef, useState } from "react";
import { HONEYPOT, sendForm, type FormName } from "@/lib/forms";
import { Arrow } from "./Arrow";

export type Field =
  | { kind: "input"; id: string; label: string; type: string; placeholder: string; autoComplete?: string }
  | { kind: "select"; id: string; label: string; placeholder: string; options: string[] }
  | { kind: "textarea"; id: string; label: string; placeholder: string };

interface Props {
  /** which tab of the Google Sheet the entry goes to */
  form: FormName;
  fields: Field[];
  submitLabel: string;
  doneTitle: string;
  doneText?: string;
}

/* "" is fine; any other value is the message shown under the field. */
type Problem = string;

/* A field whose label says "optional" may be left empty; every other one is required. */
const required = (f: Field) => !/optional/i.test(f.label);

/* Longest entry each kind of field takes. */
const MAX = { name: 80, input: 120, textarea: 1500 };
const isName = (f: Field) => f.kind === "input" && /(^|-)name$/.test(f.id);

function check(f: Field, value: string): Problem {
  const v = value.trim();
  if (!v) {
    if (!required(f)) return "";
    return f.kind === "select" ? "Choose an option." : "This field is required.";
  }
  if (f.kind === "textarea") return v.length > MAX.textarea ? `Keep this under ${MAX.textarea} characters.` : "";
  if (f.kind !== "input") return "";
  if (v.length > (isName(f) ? MAX.name : MAX.input)) return `Keep this under ${isName(f) ? MAX.name : MAX.input} characters.`;
  if (isName(f) && !/^[\p{L}][\p{L}\s.'’-]*$/u.test(v)) return "Letters only, no numbers or symbols.";
  if (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Enter a valid email address.";
  if (f.type === "tel" && (!/^\+?[\d\s().-]+$/.test(v) || v.replace(/\D/g, "").length < 7 || v.replace(/\D/g, "").length > 15))
    return "Enter a valid phone number.";
  if (f.type === "url" && !/^(https?:\/\/)?[^\s.]+\.[^\s]{2,}/i.test(v.replace(/^https?:\/\/$/, ""))) return "Enter a valid web address.";
  return "";
}

/* A field's key in the sheet is the last part of its id: "careers-apply-email" -> "email". */
const keyOf = (f: Field) => f.id.split("-").pop()!;

/* The site's form: it checks every required field, sends the entry to the Google Sheet
   (lib/forms.ts), then turns over to the thank-you. */
export function PrototypeForm({ form: formName, fields, submitLabel, doneTitle, doneText }: Props) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [flip, setFlip] = useState<"" | "is-flip" | "is-flip-in">("");
  const [errors, setErrors] = useState<Record<string, Problem>>({});
  const [msg, setMsg] = useState("");
  const ref = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  const valueOf = (id: string) => (ref.current?.querySelector<HTMLInputElement>(`#${id}`)?.value ?? "");

  const onEdit = (f: Field) => () => {
    if (!errors[f.id] || check(f, valueOf(f.id))) return;
    const next: Record<string, Problem> = { ...errors, [f.id]: "" };
    setErrors(next);
    if (!Object.values(next).some(Boolean)) setMsg("");
  };

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sent || flip || sending) return;
    const found: Record<string, Problem> = {};
    for (const f of fields) found[f.id] = check(f, valueOf(f.id));
    setErrors(found);
    const bad = fields.filter((f) => found[f.id]);
    if (bad.length) {
      setMsg(bad.length === 1 ? "Please fix the field marked below." : `Please fix the ${bad.length} fields marked below.`);
      ref.current?.querySelector<HTMLElement>(`#${bad[0].id}`)?.focus();
      return;
    }
    setMsg("");
    const form = ref.current!;
    const data: Record<string, string> = { [HONEYPOT]: valueOf(`${formName}-${HONEYPOT}`) };
    for (const f of fields) data[keyOf(f)] = valueOf(f.id).trim();
    setSending(true);
    try {
      await sendForm(formName, data);
    } catch (err) {
      setMsg((err as Error).message);
      return;
    } finally {
      setSending(false);
    }
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
      className={`js-form form-panel card flex w-full flex-col p-7 backdrop-blur-md lg:p-8 ${sent ? "form-sent" : ""}${flip ? ` ${flip}` : ""}`}
      onSubmit={send}
      noValidate
    >
      {/* the layout utilities sit in a later CSS layer than .form-sent .form-body, so they would
          keep the form on screen after it is sent; leave them off once it has gone */}
      <div className={sent ? "form-body hidden" : "form-body flex flex-1 flex-col"} aria-hidden={sent || undefined}>
        {fields.map((f) => {
          const err = !!errors[f.id];
          const common = {
            id: f.id,
            "aria-invalid": err || undefined,
            "aria-describedby": err ? `${f.id}-err` : undefined,
            onChange: onEdit(f),
          };
          const maxLength = f.kind === "textarea" ? MAX.textarea : isName(f) ? MAX.name : MAX.input;
          return (
            <div key={f.id} className={`field${err ? " is-err" : ""}`}>
              <label htmlFor={f.id}>{f.label}</label>
              {f.kind === "input" && <input {...common} type={f.type} placeholder={f.placeholder} autoComplete={f.autoComplete} maxLength={maxLength} />}
              {f.kind === "select" && (
                <select {...common} defaultValue="">
                  <option value="">{f.placeholder}</option>
                  {f.options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              )}
              {f.kind === "textarea" && <textarea {...common} placeholder={f.placeholder} maxLength={maxLength}></textarea>}
              {err && (
                <p id={`${f.id}-err`} className="field-err">
                  {errors[f.id]}
                </p>
              )}
            </div>
          );
        })}
        <input
          id={`${formName}-${HONEYPOT}`}
          name={HONEYPOT}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hp-field"
        />
        <p className="form-msg" role="alert" hidden={!msg}>
          {msg}
        </p>
        <button type="submit" className="btn btn-light group mt-auto w-full js-send" disabled={sending} aria-busy={sending}>
          {sending ? "Sending…" : submitLabel}
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
