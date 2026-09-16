"use client";

import { useEffect, useRef, useState } from "react";
import { proof, proofClients } from "@/data/site-data";

const ORDER = Object.keys(proof);

/* "Proof in production": one client's numbers and quote at a time. It advances
   on its own while on screen, pauses under the pointer, and any logo picks it. */
export function ProofBlock() {
  const [key, setKey] = useState(ORDER[0]);
  const [running, setRunning] = useState(false);
  const [hover, setHover] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setRunning(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!running || hover) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setKey((k) => ORDER[(ORDER.indexOf(k) + 1) % ORDER.length]), 6000);
    return () => clearInterval(t);
  }, [running, hover, key]);

  const d = proof[key];
  return (
    <div className="proof-block">
      <div ref={wrapRef} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {/* keyed on the client so the swap animation and the count-up run again */}
        <div
          key={key}
          className="proof-feature pf-swap mt-[70px] grid gap-x-16 gap-y-12 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]"
        >
          <div className="rv in">
            <div className="pb-8">
              <p className="tally font-display text-[clamp(2rem,3.2vw,2.8rem)] font-medium leading-none tracking-[-.03em]">
                {d.big}
              </p>
              <p className="mt-3 text-[13px] text-white/45">{d.label}</p>
            </div>
            <div className="border-t border-hair pt-8">
              <p className="tally font-display text-[clamp(2rem,3.2vw,2.8rem)] font-medium leading-none tracking-[-.03em]">
                {d.big2}
              </p>
              <p className="mt-3 text-[13px] text-white/45">{d.label2}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between rv in">
            <blockquote className="max-w-[640px] font-display text-[clamp(.9375rem,1.35vw,1.125rem)] font-normal leading-[1.62] tracking-[-.012em] text-white/90">
              {d.name ? `“${d.text}”` : d.text}
            </blockquote>
            <div className="mt-10 flex items-end justify-between gap-6 border-b border-hair pb-7">
              <div style={{ visibility: d.name ? "visible" : "hidden" }}>
                <p className="text-[13px] font-medium text-white">{d.name}</p>
                <p className="mt-1 text-[12px] text-white/45">{d.title}</p>
              </div>
              <span className={`clogo ${d.lc} h-[26px] opacity-70`}></span>
            </div>
          </div>
        </div>
      </div>
      <div className="proof-rail mt-10 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-5 rv" data-d="180">
        {proofClients.map((c) => (
          <button
            key={c.key}
            type="button"
            className={`plogo${c.key === key ? " active" : ""}`}
            aria-label={c.label}
            aria-pressed={c.key === key}
            onClick={() => setKey(c.key)}
          >
            <span className={`clogo ${c.logo}`}></span>
          </button>
        ))}
      </div>
    </div>
  );
}
