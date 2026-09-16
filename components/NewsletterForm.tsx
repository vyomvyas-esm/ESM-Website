"use client";

import { useState } from "react";

/* Prototype newsletter sign-up: the original site only acknowledged the address.
   Wire the submit handler to a real endpoint when one exists. */
export function NewsletterForm() {
  const [done, setDone] = useState(false);
  if (done) return <p className="mt-3 text-[12px] text-teal">Thank you. We will be in touch.</p>;
  return (
    <form
      className="mt-3 flex max-w-[330px] items-center gap-2 rounded-full border border-hair bg-white/[.03] p-1 pl-4"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="name@email.com"
        aria-label="Work email"
        className="w-full bg-transparent text-[12px] text-white placeholder:text-white/35 focus:outline-none"
      />
      <button type="submit" className="btn btn-light btn-sm shrink-0">
        Subscribe
      </button>
    </form>
  );
}
