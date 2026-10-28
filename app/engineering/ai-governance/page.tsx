import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { graph, service } from "@/lib/jsonld";
import { services } from "@/data/page-schema";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "AI Governance",
  description: "",
  path: "/engineering/ai-governance/",
});
export default function SvcGovernancePage() {
  return (
    <main className="page" id="page-svc-governance">
      <JsonLd data={graph(service(services["svc-governance"]))} />
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[132px]">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Engineering" }, { label: "AI Governance" }]}
          />
          <h1 className="h-hero mt-6 max-w-[24ch] rv" data-d="60">
            AI governance your regulator can inspect line by line
          </h1>
          <p className="lede hero-lede mt-5 max-w-[560px] rv" data-d="120">
            We engineer governance into the architecture from the first design review, so every decision
            leaves a trail your auditor and your regulator can follow back to its source.
          </p>
          <ul
            className="cs-chips cs-chips--left mt-7 rv"
            data-d="150"
            aria-label="Security and compliance posture"
          >
            <li className="cs-chip">
              <svg
                className="cs-ic"
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="6.4" r="4.1" />
                <path d="M5.6 10.1 4.6 14.4l3.4-1.7 3.4 1.7-1-4.3" />
              </svg>
              <span>ISO/IEC 27001:2022</span>
            </li>
            <li className="cs-chip">
              <svg
                className="cs-ic"
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 1.9 13.3 4v4c0 3.1-2.1 5.4-5.3 6.3C4.8 13.4 2.7 11.1 2.7 8V4Z" />
                <path d="m5.9 7.9 1.5 1.6 2.9-3.1" />
              </svg>
              <span>SOC 2 Type II</span>
            </li>
            <li className="cs-chip">
              <svg
                className="cs-ic"
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.2 8s2.3-3.9 5.8-3.9S13.8 8 13.8 8s-2.3 3.9-5.8 3.9S2.2 8 2.2 8Z" />
                <circle cx="8" cy="8" r="1.6" />
                <path d="M3.2 3.2l9.6 9.6" />
              </svg>
              <span>PII masking</span>
            </li>
            <li className="cs-chip">
              <svg
                className="cs-ic"
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3.1" y="7.1" width="9.8" height="6.6" rx="1.6" />
                <path d="M5.5 7.1V5.2a2.5 2.5 0 0 1 5 0v1.9" />
                <path d="M8 9.8v1.3" />
              </svg>
              <span>AES-256 encryption</span>
            </li>
            <li className="cs-chip">
              <svg
                className="cs-ic"
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2.4" y="2.6" width="11.2" height="4.3" rx="1.3" />
                <rect x="2.4" y="9.1" width="11.2" height="4.3" rx="1.3" />
                <path d="M4.7 4.75h.01M4.7 11.25h.01" />
              </svg>
              <span>Isolated hosting</span>
            </li>
            <li className="cs-chip">
              <svg
                className="cs-ic"
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2.1" y="2.7" width="11.8" height="10.6" rx="2" />
                <circle cx="8" cy="6.6" r="1.7" />
                <path d="M5.2 11.2c.5-1.4 1.6-2.1 2.8-2.1s2.3.7 2.8 2.1" />
              </svg>
              <span>Role-based access</span>
            </li>
          </ul>
          <div className="mt-9 flex flex-wrap gap-3 rv" data-d="180">
            <Link className="btn btn-light group" href="/contact/">
              Define an Outcome
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>{" "}
            <a className="btn btn-ghost" href="#svc-proof">
              See the proof
            </a>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">What we engineer</span>
          <h2 className="h-sec rv" data-d="60">
            Assurance engineered into every stage
          </h2>
          <div className="mt-[54px] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article className="card we-card group flex flex-col p-5 text-left rv" data-d="0">
              <div className="ct-top">
                <h3 className="ct-t font-display text-[14.5px] font-medium">Governance in the design</h3>
              </div>
              <p className="we-note">
                Governance is part of the first design review, with model risk and its evaluation criteria
                agreed before any code reaches production.
              </p>
            </article>
            <article className="card we-card group flex flex-col p-5 text-left rv" data-d="70">
              <div className="ct-top">
                <h3 className="ct-t font-display text-[14.5px] font-medium">A trail an auditor can follow</h3>
              </div>
              <p className="we-note">
                Every decision leaves a documented trail that your internal reviewers and your regulator can
                follow back to its source.
              </p>
            </article>
            <article className="card we-card group flex flex-col p-5 text-left rv" data-d="140">
              <div className="ct-top">
                <h3 className="ct-t font-display text-[14.5px] font-medium">Watched after go-live</h3>
              </div>
              <p className="we-note">
                Monitoring continues for as long as the system is in operation, so a change in behaviour is
                caught and recorded well before any audit.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="glow-top" aria-hidden="true"></div>
          <div className="grid gap-12 lg:grid-cols-[minmax(280px,1fr)_2fr] lg:gap-16">
            <div className="rv">
              <span className="eyebrow rv">Accountability by design</span>
              <h2 className="h-sec">Everything an auditor will ask to see</h2>
            </div>
            <div className="ctrl-grid">
              <div className="ctrl-col rv" data-d="0">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  A complete audit trail
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Every decision is logged with its source, so any action can be reviewed independently after
                  the fact.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="70">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Every answer explained
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Responses that matter carry inline citations and a confidence score, so a reader can check
                  the evidence before acting on it.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="140">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Human in the loop
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Consequential decisions escalate to a person, so the final call on anything that matters
                  stays with your team.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="210">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Secure by default
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Data is encrypted to AES-256 and personal information is masked before any model sees it.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="280">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Role-based access
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Each user sees only the sources their role permits, with least-privilege access as the
                  default.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="350">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  ISO 27001 certified
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  An information-security foundation certified to ISO/IEC 27001:2022 and held to SOC 2 Type
                  II, both independently audited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="svc-proof" className="relative overflow-hidden bg-ink pb-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="pf-head">
            <div>
              <span className="eyebrow rv">Where it operates</span>
              <h2 className="h-sec rv">Governed outcomes, proven in production</h2>
            </div>
            <Link className="btn btn-ghost group rv" data-d="120" href="/case-studies/">
              See all case studies
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="mt-[46px]">
            <div className="ca-row ca-static rv" data-d="0">
              <div className="ca-hd">
                <span
                  className="clogo ca-logo logow-isb"
                  role="img"
                  aria-label="Indian School of Business"
                ></span>
                <span className="ca-head">
                  74% reduction in evaluation time through AI-native candidate screening
                </span>
              </div>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">97%</div>
                      <div className="l">Faculty concordance</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">9,200+</div>
                      <div className="l">Candidates evaluated</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">6,100</div>
                      <div className="l">Person-hours saved a year</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    A rubric-based evaluation methodology for consistent and explainable candidate screening
                    at scale, free of bias.
                  </p>
                  <Link className="ca-link group" href="/case-studies/indian-school-of-business/">
                    <span className="ca-goic">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Read the case study
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">The path to production</span>
          <h2 className="h-sec rv">We operate what we engineer</h2>
          <div className="tl mt-[56px]">
            <div className="tl-step rv" data-d="0">
              <span className="tl-dot"></span>
              <h3 className="mt-2 font-display text-[14px] font-medium">Discovery</h3>
              <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                Discovery ends with a written outcome and the metric we will report against.
              </p>
              <p className="tl-time">~1 week</p>
            </div>
            <div className="tl-step rv" data-d="70">
              <span className="tl-dot"></span>
              <h3 className="mt-2 font-display text-[14px] font-medium">Prove it on real data</h3>
              <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                We engineer against your real workflow, with its actual data and its edge cases.
              </p>
              <p className="tl-time">~2 weeks</p>
            </div>
            <div className="tl-step rv" data-d="140">
              <span className="tl-dot"></span>
              <h3 className="mt-2 font-display text-[14px] font-medium">Go live</h3>
              <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                We move the proven system into production without your data leaving your environment.
              </p>
              <p className="tl-time">~1 week</p>
            </div>
            <div className="tl-step rv" data-d="210">
              <span className="tl-dot"></span>
              <h3 className="mt-2 font-display text-[14px] font-medium">Validate</h3>
              <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                We test under real conditions and record the evidence your reviewers will ask for.
              </p>
              <p className="tl-time">~2 weeks</p>
            </div>
            <div className="tl-step is-last rv" data-d="280">
              <span className="tl-dot"></span>
              <h3 className="mt-2 font-display text-[14px] font-medium">Operate &amp; iterate</h3>
              <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                We operate the system and report against the number agreed at the start.
              </p>
              <p className="tl-time">Recurring</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="pf-head">
            <div>
              <span className="eyebrow rv">From the blog</span>
              <h2 className="h-sec rv" data-d="60">
                Field notes from the people
                <br className="hidden sm:block" /> operating these systems
              </h2>
            </div>
            <Link className="btn btn-ghost group rv" data-d="120" href="/blog/">
              All blogs
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="mt-[46px] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link
              data-topic="Agentic AI"
              data-author="Shardul Singh"
              data-ts="282"
              data-txt="llm cost optimisation: the levers operators underuse agentic ai shardul singh"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="0"
              href="/blog/llm-cost-optimization/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <span className="thumb thumb-none">
                  <span>Image to come</span>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">LLM Cost Optimisation</h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">Agentic AI</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    4 October 2024
                  </span>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="byline">
                    <span className="av av-shardul" style={{ width: "26px", height: "26px" }}></span>
                    <span className="by-txt">
                      <span className="by-name">Shardul Singh</span>
                      <span className="by-role">CTO</span>
                    </span>
                  </span>{" "}
                  <span className="shrink-0 inline-flex items-center gap-1.5 text-[11.5px] text-teal">
                    Read{" "}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </Link>
            <Link
              data-topic="EsMagico"
              data-author="Shreyas Sanghvi"
              data-ts="255"
              data-txt="designing governance into agentic ai from the first sprint about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="60"
              href="/blog/designing-governance-into-agentic-ai-not-bolting-it-on/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/69-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Designing Governance Into Agentic AI
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    6 December 2024
                  </span>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="byline">
                    <span className="av av-shreyas" style={{ width: "26px", height: "26px" }}></span>
                    <span className="by-txt">
                      <span className="by-name">Shreyas Sanghvi</span>
                      <span className="by-role">CEO</span>
                    </span>
                  </span>{" "}
                  <span className="shrink-0 inline-flex items-center gap-1.5 text-[11.5px] text-teal">
                    Read{" "}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </Link>
            <Link
              data-topic="AI Models"
              data-author="Karan Trehan"
              data-ts="166"
              data-txt="llama 4 against qwen 3 for private and sovereign enterprise deployment ai models karan trehan"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="120"
              href="/blog/llama-4-against-qwen-3-for-sovereign-enterprise-deployment/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <span className="thumb thumb-none">
                  <span>Image to come</span>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Llama 4 Against Qwen 3
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">AI Models</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">2 July 2025</span>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="byline">
                    <span className="av av-karan" style={{ width: "26px", height: "26px" }}></span>
                    <span className="by-txt">
                      <span className="by-name">Karan Trehan</span>
                      <span className="by-role">VP, Technology</span>
                    </span>
                  </span>{" "}
                  <span className="shrink-0 inline-flex items-center gap-1.5 text-[11.5px] text-teal">
                    Read{" "}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section data-sec="cta" className="bg-ink" id="cta">
        <div className="cta-full">
          <div
            className="dark-band cta-band relative isolate overflow-hidden"
            style={{ background: "linear-gradient(180deg,#01161A 0%,#020C10 55%,#000508 100%)" }}
          >
            <div className="cta-wash" aria-hidden="true"></div>
            <div className="relative mx-auto grid w-full max-w-shell items-start gap-10 px-6 py-[86px] lg:grid-cols-[1fr_auto] lg:gap-16 lg:px-8">
              <div>
                <h2 className="h-cta max-w-[24ch] lg:max-w-none">
                  Put AI into production and <span className="text-teal">defend it afterwards</span>
                </h2>
              </div>
              <div className="flex flex-col items-start lg:pt-2">
                <Link className="btn btn-light group" href="/contact/">
                  Define an Outcome
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
