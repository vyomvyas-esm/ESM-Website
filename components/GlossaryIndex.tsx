"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { glossary, glossarySets } from "@/data/glossary";
import { GLOSSARY_PATH } from "@/lib/jsonld";
import { FilterSelect } from "./FilterSelect";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const letterOf = (term: string) => term.charAt(0).toUpperCase();

/* The glossary index: every term grouped by letter, with search, a capability filter
   and a letter row that jumps to a group and marks the one being read. All terms are
   in the server-rendered markup, so each term page has a crawlable link from here. */
export function GlossaryIndex() {
  const [q, setQ] = useState("");
  const [set, setSet] = useState("all");
  const [current, setCurrent] = useState<string | null>(null);

  const groups = useMemo(() => {
    const k = q.trim().toLowerCase();
    const live = glossary.filter((t) => (set === "all" || t.set === set) && (!k || t.txt.includes(k)));
    const by = new Map<string, typeof live>();
    for (const t of live) by.set(letterOf(t.term), [...(by.get(letterOf(t.term)) ?? []), t]);
    return by;
  }, [q, set]);

  // scroll spy: the last visible group whose head has passed under the fixed header
  useEffect(() => {
    let tick = false;
    const spy = () => {
      tick = false;
      let cur: string | null = null;
      document.querySelectorAll<HTMLElement>(".gl-group").forEach((g) => {
        if (g.getBoundingClientRect().top <= 150) cur = g.dataset.letter ?? null;
      });
      setCurrent(cur ?? document.querySelector<HTMLElement>(".gl-group")?.dataset.letter ?? null);
    };
    const onScroll = () => {
      if (tick) return;
      tick = true;
      requestAnimationFrame(spy);
    };
    spy();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, [groups]);

  const jump = (letter: string) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(`gl-${letter}`)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className="bl-layout gl-layout">
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
              placeholder="Search the glossary"
              aria-label="Search the glossary"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <div className="bl-selects">
            <FilterSelect label="Capability" value={set} options={glossarySets} onChange={setSet} />
          </div>
          <div className="gl-jump">
            <p className="gl-jump-k">Jump to a letter</p>
            {/* a letter with nothing behind it dims rather than disappearing, so the row never reflows */}
            <div className="gl-letters" role="group" aria-label="Jump to a letter">
              {LETTERS.map((l) => {
                const live = groups.has(l);
                return (
                  <button
                    key={l}
                    type="button"
                    className={`gl-ltr${live ? "" : " is-dim"}${live && l === current ? " is-on" : ""}`}
                    disabled={!live}
                    onClick={() => jump(l)}
                  >
                    {l}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
      <div className="bl-main">
        <p className="gl-empty" hidden={groups.size > 0}>
          No term matches that. Try a shorter word, or clear the capability filter.
        </p>
        <div>
          {[...groups].map(([letter, terms]) => (
            <section key={letter} className="gl-group" id={`gl-${letter}`} data-letter={letter}>
              <div className="gl-head">
                <h3 className="gl-letter">{letter}</h3>
                <p className="gl-count">
                  {terms.length} {terms.length === 1 ? "term" : "terms"}
                </p>
              </div>
              <dl className="gl-list">
                {terms.map((t) => (
                  <div key={t.slug} className="gl-row">
                    <dt className="gl-term">
                      <Link className="gl-link" href={`${GLOSSARY_PATH}${t.slug}/`}>
                        {t.term}
                      </Link>
                      <Link className="gl-tag" href={t.capability.href}>
                        {t.capability.label}
                      </Link>
                    </dt>
                    <dd className="gl-def">{t.def}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
