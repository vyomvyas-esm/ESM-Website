import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { graph, service } from "@/lib/jsonld";
import { services } from "@/data/page-schema";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Data Architecture",
  description:
    "We turn scattered enterprise data into one governed layer that every agent draws on, so accuracy improves and the investment compounds.",
  path: "/engineering/enterprise-ai/",
});
export default function SvcModernisationPage() {
  return (
    <main className="page" id="page-svc-modernisation">
      <JsonLd data={graph(service(services["svc-modernisation"]))} />
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[132px]">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Engineering" }, { label: "Data Architecture" }]}
          />
          <h1 className="h-hero mt-6 max-w-[18ch] rv" data-d="60">
            Engineer the data your AI depends on
          </h1>
          <p className="lede hero-lede mt-5 max-w-[560px] rv" data-d="120">
            We turn scattered enterprise data into one governed layer that every agent draws on, so accuracy
            improves and the investment compounds.
          </p>
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
            Accuracy starts with the data beneath it
          </h2>
          <div className="mt-[54px] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article className="card we-card group flex flex-col p-5 text-left rv" data-d="0">
              <div className="ct-top">
                <h3 className="ct-t font-display text-[14.5px] font-medium">Engineered for every source</h3>
              </div>
              <p className="we-note">
                Scanned files and legacy records are extracted and classified, so every source becomes data an
                AI can read accurately.
              </p>
            </article>
            <article className="card we-card group flex flex-col p-5 text-left rv" data-d="70">
              <div className="ct-top">
                <h3 className="ct-t font-display text-[14.5px] font-medium">Knowledge that keeps up</h3>
              </div>
              <p className="we-note">
                Change detection picks up every revision to a source document and updates the knowledge layer
                before anyone queries it.
              </p>
            </article>
            <article className="card we-card group flex flex-col p-5 text-left rv" data-d="140">
              <div className="ct-top">
                <h3 className="ct-t font-display text-[14.5px] font-medium">Grounded in your documents</h3>
              </div>
              <p className="we-note">
                Retrieval finds the passage that answers the question, and every response cites the document
                it came from.
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
              <span className="eyebrow rv">Where the answers come from</span>
              <h2 className="h-sec">An answer is only useful if it is right</h2>
            </div>
            <div className="ctrl-grid">
              <div className="ctrl-col rv" data-d="0">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Knows what it cannot answer
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Where the sources cannot support an answer, the system says so and points to the closest
                  material it has.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="70">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Accuracy measured before go-live
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Before launch, the system is tested against questions your experts have already answered,
                  and the results decide whether it is ready.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="140">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Conflicting sources resolved
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  A knowledge graph maps how your documents relate, so when two sources disagree the system
                  draws on the one that governs.
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
                <span className="clogo ca-logo logow-koita" role="img" aria-label="Koita Foundation"></span>
                <span className="ca-head">
                  83% reduction in discovery time with citation-backed retrieval across seven repositories
                </span>
              </div>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">83%</div>
                      <div className="l">Less discovery time</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">95%</div>
                      <div className="l">Source traceability</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">7+</div>
                      <div className="l">Repositories unified</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    A citation-backed retrieval layer that turns seven separate digital health repositories
                    into one answerable source for practitioners and the public.
                  </p>
                  <Link className="ca-link group" href="/case-studies/koita-foundation/">
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
              data-ts="-41"
              data-txt="grounding agents in live enterprise data without copying it agentic ai shardul singh"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="0"
              href="/blog/grounding-agents-in-live-enterprise-data/"
            >
              <div className="bl-ph relative h-[176px] overflow-hidden">
                <span className="bl-ph-k">Agentic AI</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Grounding Agents in Live Enterprise Data Without Copying It
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">Agentic AI</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    30 October 2026
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
              data-topic="Agentic AI"
              data-author="Shardul Singh"
              data-ts="59"
              data-txt="data governance for agentic ai: controlling what agents can see and send agentic ai shardul singh"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="60"
              href="/blog/data-governance-for-agentic-ai/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <span className="thumb thumb-none">
                  <span>Image to come</span>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Data Governance for Agentic AI
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">Agentic AI</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    9 March 2026
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
              data-topic="Agentic AI"
              data-author="Shardul Singh"
              data-ts="238"
              data-txt="measuring rag quality: grounding, faithfulness, and retrieval metrics agentic ai shardul singh"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="120"
              href="/blog/measuring-rag-quality/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <span className="thumb thumb-none">
                  <span>Image to come</span>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">Measuring RAG Quality</h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">Agentic AI</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    15 January 2025
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
                  Make every answer <span className="text-teal">right the first time</span>
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
