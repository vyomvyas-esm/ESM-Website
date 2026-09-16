"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { caseStudies, caseStudyFilters } from "@/data/case-studies";
import { Arrow } from "./Arrow";
import { FilterSelect } from "./FilterSelect";

const STEP = 6;
// the select speaks in industry names; the cards carry short keys
const INDUSTRY_KEY: Record<string, string> = {
  bfsi: "bfsi",
  healthcare: "healthcare",
  "public sector": "public",
  "consumer & retail": "retail",
  others: "others",
};

export function CaseStudiesIndex() {
  const [industry, setIndustry] = useState("all");
  const [product, setProduct] = useState("all");
  const [q, setQ] = useState("");
  const [shown, setShown] = useState(STEP);
  const sentinel = useRef<HTMLDivElement>(null);

  const live = useMemo(() => {
    const k = q.trim().toLowerCase();
    return caseStudies.filter(
      (s) =>
        (industry === "all" || s.card.industry === INDUSTRY_KEY[industry] || s.card.industry === industry) &&
        (product === "all" || s.card.products.includes(product)) &&
        (!k || s.card.txt.includes(k)),
    );
  }, [industry, product, q]);

  // the next batch appears as the reader reaches the end of the current one
  useEffect(() => {
    const el = sentinel.current;
    if (!el || shown >= live.length) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setShown((s) => s + STEP);
      },
      { rootMargin: "0px 0px 120px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown, live.length]);

  const visible = Math.min(shown, live.length);
  const reset = (set: (v: string) => void) => (v: string) => {
    set(v);
    setShown(STEP);
  };

  return (
    <div className="bl-layout">
      <aside className="bl-rail">
        <div className="bl-bar rv">
          <div className="bl-search">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="shrink-0 text-white/35" aria-hidden="true">
              <circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.2" />
              <path d="m10.6 10.6 3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <input
              className="srch"
              type="search"
              placeholder="Search case studies"
              aria-label="Search case studies"
              value={q}
              onChange={(e) => reset(setQ)(e.target.value)}
            />
          </div>
          <div className="bl-selects">
            <FilterSelect label="Industry" value={industry} options={caseStudyFilters.industries} onChange={reset(setIndustry)} />
            <FilterSelect label="Product" value={product} options={caseStudyFilters.products} onChange={reset(setProduct)} />
          </div>
        </div>
      </aside>
      <div className="bl-main">
        <div>
          {live.slice(0, shown).map((s, i) => (
            <Link key={s.slug} className="cs-card csr rv" data-d={(i % 3) * 60} href={`/case-studies/${s.slug}`}>
              <span className={`clogo cs-logo ${s.logo} csr-logo`}></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">{s.card.name}</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">{s.card.line}</p>
              </div>
              <div className="csr-figs">
                {s.card.figs.map((f) => (
                  <div key={f.l} className="csr-fig">
                    <div className="n tally">{f.n}</div>
                    <div className="l">{f.l}</div>
                  </div>
                ))}
              </div>
              <span className="csr-arw text-teal">
                <Arrow />
              </span>
            </Link>
          ))}
        </div>
        <div ref={sentinel} className="h-px w-full"></div>
        {live.length === 0 && <p className="mt-10 text-[13px] text-white/45">No case studies match that filter yet.</p>}
        {live.length > 0 && visible < live.length && (
          <div className="mt-10 flex flex-col items-center gap-3">
            <button type="button" className="btn btn-ghost group" onClick={() => setShown((s) => s + STEP)}>
              Show more case studies
              <Arrow />
            </button>
            <p className="text-[11.5px] text-white/35">
              Showing {visible} of {live.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
