"use client";

import { useRef, useState } from "react";
import { HONEYPOT, sendForm } from "@/lib/forms";

/* The footer newsletter sign-up: the address goes to the Newsletter tab of the forms
   sheet (lib/forms.ts). */
export function NewsletterForm() {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState("");
  const ref = useRef<HTMLFormElement>(null);
  if (done) return <p className="mt-3 text-[12px] text-teal">Thank you. We will be in touch.</p>;
  return (
    <>
      <form
        ref={ref}
        className="mt-3 flex max-w-[330px] items-center gap-2 rounded-full border border-hair bg-white/[.03] p-1 pl-4"
        onSubmit={async (e) => {
          e.preventDefault();
          if (sending) return;
          const form = new FormData(ref.current!);
          setSending(true);
          setErr("");
          try {
            await sendForm("newsletter", { email: String(form.get("email") ?? "").trim(), [HONEYPOT]: String(form.get(HONEYPOT) ?? "") });
            setDone(true);
          } catch (x) {
            setErr((x as Error).message);
          } finally {
            setSending(false);
          }
        }}
      >
        <input
          name="email"
          type="email"
          required
          placeholder="name@email.com"
          aria-label="Work email"
          className="w-full bg-transparent text-[12px] text-white placeholder:text-white/35 focus:outline-none"
        />
        <input name={HONEYPOT} type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp-field" />
        <button type="submit" className="btn btn-light btn-sm shrink-0" disabled={sending} aria-busy={sending}>
          {sending ? "Sending…" : "Subscribe"}
        </button>
      </form>
      {err && (
        <p className="mt-2 max-w-[330px] text-[11.5px] leading-[1.5] text-white/55" role="alert">
          {err}
        </p>
      )}
    </>
  );
}
