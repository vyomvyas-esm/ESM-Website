"use client";

import Link from "next/link";
import { useState } from "react";
import { capabilityProof, panelTabs } from "@/data/site-data";
import { Arrow } from "./Arrow";

/* Capability proof on the PYZO page: one tab per product, and under it the one case
   study cleared for that product, in the same open card the product pages use. */
export function PyzoPanels() {
  const [tab, setTab] = useState(panelTabs[0].key);
  const c = capabilityProof[tab];
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
      {/* keyed on the tab so the card animates in and its numbers count up afresh */}
      <div key={tab} className="mt-7 pp-swap">
        {c ? (
          <div className="ca-row ca-static">
            <div className="ca-hd">
              <span className={`clogo ca-logo ${c.logo}`} role="img" aria-label={c.aria}></span>
              <span className="ca-head">{c.head}</span>
            </div>
            <div className="ca-body">
              <div className="ca-left">
                <div className="ca-figs">
                  {c.figs.map((f) => (
                    <div key={f.l} className="ca-fig">
                      <div className="n tally">{f.n}</div>
                      <div className="l">{f.l}</div>
                    </div>
                  ))}
                </div>
                <p className="ca-copy">{c.copy}</p>
                <Link className="ca-link group" href={c.href}>
                  <span className="ca-goic">
                    <Arrow size={10} weight={1.8} />
                  </span>
                  Read the case study
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* a product with no cleared case study says so rather than showing an empty panel */
          <p className="text-[12.5px] leading-[1.7] text-white/40">Case study in preparation.</p>
        )}
      </div>
    </>
  );
}
