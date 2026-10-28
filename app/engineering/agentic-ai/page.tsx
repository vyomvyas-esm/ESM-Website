import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { graph, service } from "@/lib/jsonld";
import { services } from "@/data/page-schema";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Agentic AI",
  description:
    "We engineer agents around one number your business already tracks, then operate them in production and report against that number every month.",
  path: "/engineering/agentic-ai/",
});
export default function SvcAgenticPage() {
  return (
    <main className="page" id="page-svc-agentic">
      <JsonLd data={graph(service(services["svc-agentic"]))} />
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[132px]">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Engineering" }, { label: "Agentic AI" }]}
          />
          <h1 className="h-hero mt-6 max-w-[22ch] rv" data-d="60">
            Engineer AI around the outcomes you measure
          </h1>
          <p className="lede hero-lede mt-5 max-w-[560px] rv" data-d="120">
            We engineer agents around one number your business already tracks, then operate them in production
            and report against that number every month.
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
            Agentic AI that fits the way your enterprise already works
          </h2>
          <div className="mt-[54px] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article className="card we-card group flex flex-col p-5 text-left rv" data-d="0">
              <div className="ct-top">
                <h3 className="ct-t font-display text-[14.5px] font-medium">Work across the stack</h3>
              </div>
              <p className="we-note">
                Agents complete tasks that span several applications in one pass, so the metric moves without
                waiting on hand-offs between teams.
              </p>
            </article>
            <article className="card we-card group flex flex-col p-5 text-left rv" data-d="70">
              <div className="ct-top">
                <h3 className="ct-t font-display text-[14.5px] font-medium">Legacy systems included</h3>
              </div>
              <p className="we-note">
                Agents work through the existing interfaces of older applications, so the processes that weigh
                most on your metric come within reach.
              </p>
            </article>
            <article className="card we-card group flex flex-col p-5 text-left rv" data-d="140">
              <div className="ct-top">
                <h3 className="ct-t font-display text-[14.5px] font-medium">
                  Your definitions, your baseline
                </h3>
              </div>
              <p className="we-note">
                We agree the baseline with you before any agent goes live, using the definition of the metric
                your finance team already trusts.
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
              <span className="eyebrow rv">Why the number moves</span>
              <h2 className="h-sec">Results that hold once live</h2>
            </div>
            <div className="ctrl-grid">
              <div className="ctrl-col rv" data-d="0">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Groundwork that has carried real load
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Each of the sixteen layers has handled production traffic in an earlier deployment, which is
                  why early results tend to last.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="70">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  A baseline worth comparing against
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Because each PYZO product already reports in other deployments, we know what a realistic
                  improvement looks like before we commit to a number.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="140">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Reporting your teams can verify
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Because the agents operate inside your environment, your own teams can reproduce every
                  figure in our monthly report.
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
              <span className="eyebrow rv">Where the number moved</span>
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
                <span className="clogo ca-logo logow-rbi" role="img" aria-label="RBI Innovation Hub"></span>
                <span className="ca-head">
                  81% reduction in TAT with a voice-first grievance protocol for banking
                </span>
              </div>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">81%</div>
                      <div className="l">Lower turnaround time</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">2 min</div>
                      <div className="l">Average registration time</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">12+</div>
                      <div className="l">Indic languages</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    A multilingual, voice-first grievance protocol that ensures audit-ready execution in
                    adherence to complex regulatory mandates for tier-one banking.
                  </p>
                  <Link className="ca-link group" href="/case-studies/rbi-innovation-hub/">
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
              data-topic="EsMagico"
              data-author="Shreyas Sanghvi"
              data-ts="78"
              data-txt="agreeing the number before you start: setting ai outcomes leadership will trust about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="0"
              href="/blog/agreeing-the-number-before-you-start/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/246-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Agreeing the Number Before You Start
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    23 January 2026
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
              data-topic="EsMagico"
              data-author="Shreyas Sanghvi"
              data-ts="52"
              data-txt="what a production-ready agent actually requires (most demos skip half of it) about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="60"
              href="/blog/what-a-production-ready-agent-actually-requires/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/272-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  What a Production-Ready Agent Requires
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    25 March 2026
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
              data-topic="EsMagico"
              data-author="Shreyas Sanghvi"
              data-ts="86"
              data-txt="the cfo test for enterprise ai: if you can't measure it, it won't survive scrutiny about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="120"
              href="/blog/the-cfo-test-for-enterprise-ai/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/238-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  The CFO Test for Enterprise AI
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    5 January 2026
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
                  Name the metric, and we will engineer
                  <br className="hidden sm:block" /> <span className="text-teal">the agents to move it</span>
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
