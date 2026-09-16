"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { reportFilters, reports } from "@/data/reports";
import type { Report } from "@/data/types";
import { Arrow } from "./Arrow";
import { FilterSelect } from "./FilterSelect";

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;

/* The report gate: takes an address and acknowledges it. Nothing is sent yet;
   wire the submit handler to a real endpoint when one exists. */
function ReportGate({ report, onClose }: { report: Report; onClose: () => void }) {
  const [err, setErr] = useState(false);
  const [done, setDone] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => emailRef.current?.focus(), 40);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = (emailRef.current?.value || "").trim();
    if (!EMAIL.test(v)) {
      setErr(true);
      emailRef.current?.focus();
      return;
    }
    setErr(false);
    setDone(true);
  };

  return (
    <div className="rp-modal">
      <div className="rp-scrim" onClick={onClose}></div>
      <div className="rp-dialog" role="dialog" aria-modal="true" aria-labelledby="rpTitle">
        <button type="button" className="rp-x" aria-label="Close" onClick={onClose}>
          ×
        </button>
        <p className="rp-kicker">Send me the report</p>
        <h3 className="rp-dt" id="rpTitle">
          {report.name}
        </h3>
        {done ? (
          <div className="rp-done">
            <p className="rp-dt">On its way.</p>
            <p className="rp-note">
              Check your inbox in the next few minutes. If it has not arrived, write to connect@esmagico.com.
            </p>
          </div>
        ) : (
          <form className="rp-form" noValidate onSubmit={submit}>
            <label className="field">
              <span>Work email</span>
              <input ref={emailRef} type="email" required placeholder="jane@company.com" autoComplete="email" />
            </label>
            <label className="field">
              <span>Name</span>
              <input type="text" required placeholder="Jane Doe" autoComplete="name" />
            </label>
            <label className="field">
              <span>Organisation</span>
              <input type="text" placeholder="Company name" autoComplete="organization" />
            </label>
            <button type="submit" className="btn btn-light group w-full justify-center">
              Send it to me
              <Arrow />
            </button>
            <p className="rp-err" hidden={!err}>
              Please enter a work email address.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export function ReportsIndex() {
  const [series, setSeries] = useState("all");
  const [topic, setTopic] = useState("all");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<Report | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  const live = useMemo(() => {
    const k = q.trim().toLowerCase();
    return reports.filter(
      (r) => (series === "all" || r.series === series) && (topic === "all" || r.topic === topic) && (!k || r.txt.includes(k)),
    );
  }, [series, topic, q]);

  const close = useCallback(() => {
    setOpen(null);
    opener.current?.focus();
  }, []);

  return (
    <>
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
                placeholder="Search reports"
                aria-label="Search reports"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
            <div className="bl-selects">
              <FilterSelect label="Series" value={series} options={reportFilters.series} onChange={setSeries} />
              <FilterSelect label="Topic" value={topic} options={reportFilters.topics} onChange={setTopic} />
            </div>
          </div>
        </aside>
        <div className="bl-main">
          <div className="rp-grid">
            {live.map((r, i) => (
              <article key={r.id} className="rp-card rv" data-d={i * 70} id={r.id}>
                <div className="rp-cover">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.cover} alt={r.coverAlt} loading="lazy" decoding="async" />
                </div>
                <div className="rp-body">
                  <p className="rp-series">{r.seriesLabel}</p>
                  <h3 className="rp-t">{r.title}</h3>
                  <p className="rp-sub">{r.subtitle}</p>
                  <p className="rp-tease">{r.tease}</p>
                  <div className="rp-tags">
                    {r.tags.map((t) => (
                      <span key={t} className="rp-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="btn btn-light group rp-get"
                    onClick={(e) => {
                      opener.current = e.currentTarget;
                      setOpen(r);
                    }}
                  >
                    Send me the report
                    <Arrow />
                  </button>
                </div>
              </article>
            ))}
          </div>
          {live.length === 0 && <p className="mt-10 text-[13px] text-white/45">No reports match that filter yet.</p>}
        </div>
      </div>
      {open && <ReportGate report={open} onClose={close} />}
    </>
  );
}
