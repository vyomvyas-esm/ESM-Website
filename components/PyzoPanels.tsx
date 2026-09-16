"use client";

import Link from "next/link";
import { useState } from "react";
import { panels, panelTabs } from "@/data/site-data";
import { Arrow } from "./Arrow";

const hrefFor = (nav: string) => (nav.startsWith("cs-") ? `/case-studies/${nav.slice(3)}` : `/${nav}`);

/* Capability proof rows on the PYZO page: one tab per product, a row per deployment. */
export function PyzoPanels() {
  const [tab, setTab] = useState(panelTabs[0].key);
  const cards = panels[tab] ?? [];
  return (
    <>
      <div className="mt-9 flex flex-wrap gap-2 rv" data-d="100" role="tablist">
        {panelTabs.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={t.key === tab}
            className={`pp-tab${t.key === tab ? " active" : ""}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {/* keyed on the tab so the rows animate in and their numbers count up afresh */}
      <div key={tab} className="mt-7 pp-swap">
        {cards.map((c, i) => {
          const body = (
            <>
              {c.logo ? <span className={`clogo csr-logo logow-${c.logo} opacity-70`}></span> : <span></span>}
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">{c.client}</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">{c.line}</p>
              </div>
              <div className="csr-figs">
                {c.pair.map((m) => (
                  <div key={m.l} className="csr-fig">
                    <div className="n tally">{m.n}</div>
                    <div className="l">{m.l}</div>
                  </div>
                ))}
              </div>
              <span className="csr-arw text-teal">
                <Arrow />
              </span>
            </>
          );
          return c.nav ? (
            <Link key={i} className="csr" href={hrefFor(c.nav)}>
              {body}
            </Link>
          ) : (
            <article key={i} className="csr">
              {body}
            </article>
          );
        })}
      </div>
    </>
  );
}
