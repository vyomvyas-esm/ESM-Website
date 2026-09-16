"use client";

import { useState } from "react";
import { ledger } from "@/data/site-data";

/* The twelve-layer foundation, filtered by the product that draws on each layer. */
export function FoundationLedger() {
  const [pick, setPick] = useState("");
  const hit = pick ? ledger.groups.flatMap((g) => g.rows).filter((r) => r.products.includes(pick)).length : 0;
  return (
    <>
      <div className="fd-bar mt-[46px] rv" data-d="60">
        <span className="fd-hint">product</span>
        {ledger.chips.map((c) => (
          <button
            key={c.key}
            type="button"
            className="fd-chip"
            aria-pressed={c.key === pick}
            onClick={() => setPick(c.key)}
          >
            {c.label}
          </button>
        ))}
        <span className="fd-tally">
          {pick ? (
            <>
              {pick} draws on{" "}
              <b>
                {hit} of {ledger.total}
              </b>{" "}
              layers
            </>
          ) : (
            <>
              Every product draws on{" "}
              <b>
                {ledger.common} of {ledger.total}
              </b>{" "}
              layers in common
            </>
          )}
        </span>
      </div>
      <div className="fd-grid mt-9">
        {ledger.groups.map((g, gi) => (
          <div key={g.title} className="fd-grp rv" data-d={gi * 70}>
            <h3 className="fd-k">{g.title}</h3>
            <div className="fd-rows">
              {g.rows.map((r) => (
                <div key={r.n} className={`fd-row${pick && !r.products.includes(pick) ? " fd-dim" : ""}`}>
                  <span className="fd-n">{r.n}</span>
                  <span className="fd-t">{r.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
