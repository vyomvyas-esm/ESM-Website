import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { graph, service } from "@/lib/jsonld";
import { services } from "@/data/page-schema";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Prism, Evaluation Consultant - PYZO",
  description:
    "Evaluates documents and applications against defined rubrics, providing explainable scoring ready for audit scrutiny.",
  path: "/pyzo/prism/",
});
export default function PyzoPrismPage() {
  return (
    <main className="page" id="page-pyzo-prism">
      <JsonLd data={graph(service(services["pyzo-prism"]))} />
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[96px]">
          <div className="grid items-center gap-12">
            <div>
              <Breadcrumbs items={[{ label: "PYZO", href: "/pyzo/" }, { label: "Prism" }]} />
              <span
                className="pzlogo pz-hero-logo pzlogo-prism pzh-prism rv"
                data-d="30"
                role="img"
                aria-label="Prism"
              ></span>
              <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
                One fair rubric, applied identically every time
              </h1>
              <p className="lede mt-5 max-w-[640px] rv" data-d="120">
                Evaluates documents and applications against defined rubrics, providing explainable scoring
                ready for audit scrutiny.
              </p>
              <div className="mt-8 rv" data-d="200">
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
      <section className="relative overflow-hidden bg-ink pt-[96px] pb-[96px]">
        <div className="pa-wrap relative px-6 lg:px-8">
          <span className="eyebrow rv">How it works</span>
          <h2 className="h-sec rv" data-d="60">
            Inside your environment
          </h2>
          <div className="mt-[46px] rv" data-d="120">
            <div data-pyzo-arch="prism" data-head="off"></div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink pb-0">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="glow-top" aria-hidden="true"></div>
          <span className="eyebrow rv">Proof in production</span>
          <h2 className="h-sec rv" data-d="60">
            Governed outcomes, proven in production
          </h2>
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
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Across your industries</span>
          <h2 className="h-sec rv" data-d="60">
            Defensible judgement, in every industry
          </h2>
          <div className="cs-acc pi-acc mt-[46px]">
            <details className="ca-row pi-row rv" data-d="0" open>
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="pi-ind">
                  <span className="pi-ind-ic">
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 2.6 17 6H3Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 8.4v6M8.3 8.4v6M11.7 8.4v6M15 8.4v6M3 16.4h14"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="pi-ind-n">BFSI</span>
                </span>
                <span className="ca-head">
                  Claims and disputes scored to one standard, with the reasoning attached
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Loan application assessment</h3>
                      <p className="pi-uc-x">
                        Every loan application is assessed against your own rubric with the reasoning
                        attached, and the reviewer keeps the final call.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Claims and disputes</h3>
                      <p className="pi-uc-x">
                        Insurance claims and customer disputes are scored to one standard, including the edge
                        cases where policy is easiest to bend.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Collections quality review</h3>
                      <p className="pi-uc-x">
                        Collections calls and case notes are reviewed at full coverage for conduct, with the
                        reasoning documented well enough to defend at audit.
                      </p>
                    </div>
                  </div>
                  <Link className="ca-link group" href="/industries/bfsi/">
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
                    Explore BFSI
                  </Link>
                </div>
              </div>
            </details>
            <details className="ca-row pi-row rv" data-d="50">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="pi-ind">
                  <span className="pi-ind-ic">
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M2.5 10h3.2l1.6-4 2.6 8.6 2-4.6h5.6"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="pi-ind-n">Healthcare</span>
                </span>
                <span className="ca-head">
                  Batch and safety reviews at full coverage, each with a defensible trail
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Batch record review</h3>
                      <p className="pi-uc-x">
                        Batch records are reviewed against your rubric at full coverage, with a defensible
                        trail behind every judgement.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Pharmacovigilance case assessment</h3>
                      <p className="pi-uc-x">
                        Safety cases are evaluated against the standard that applies, so every assessment
                        carries a consistent and inspectable rationale.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Dossier and deviation evaluation</h3>
                      <p className="pi-uc-x">
                        Dossiers and deviations are evaluated consistently, with the marginal ones flagged for
                        an expert to decide.
                      </p>
                    </div>
                  </div>
                  <Link className="ca-link group" href="/industries/healthcare/">
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
                    Explore Healthcare
                  </Link>
                </div>
              </div>
            </details>
            <details className="ca-row pi-row rv" data-d="100">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="pi-ind">
                  <span className="pi-ind-ic">
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 3v14M4.6 5.4h10.8M6.2 5.4 3.6 11h5.2ZM13.8 5.4 11.2 11h5.2ZM6.5 17h7"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="pi-ind-n">Public Sector</span>
                </span>
                <span className="ca-head">
                  Accreditation and tender decisions scored the same way, whoever reviews them
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Accreditation assessments</h3>
                      <p className="pi-uc-x">
                        Accreditation assessments are scored consistently, so the same evidence produces the
                        same result whoever reviews it.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Grant and scheme eligibility</h3>
                      <p className="pi-uc-x">
                        Grant applications and eligibility checks are evaluated against a rubric you own, with
                        the reasoning behind each score shown.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Tender evaluation</h3>
                      <p className="pi-uc-x">
                        Tender bids are scored to one standard whichever state they arrive from, giving every
                        vendor a decision they can see the basis for.
                      </p>
                    </div>
                  </div>
                  <Link className="ca-link group" href="/industries/public-sector/">
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
                    Explore Public Sector
                  </Link>
                </div>
              </div>
            </details>
            <details className="ca-row pi-row rv" data-d="150">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="pi-ind">
                  <span className="pi-ind-ic">
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4.6 6.4h10.8l-1 10.2H5.6ZM7.4 6.4V5a2.6 2.6 0 0 1 5.2 0v1.4"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="pi-ind-n">Retail</span>
                </span>
                <span className="ca-head">
                  Returns and vendor submissions evaluated against your policy at full volume
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Returns and claims evaluation</h3>
                      <p className="pi-uc-x">
                        Returns and claims are evaluated at volume against your policy, in a quiet week and a
                        peak week alike.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Vendor submission review</h3>
                      <p className="pi-uc-x">
                        Vendor submissions are reviewed against your rubric at a coverage no sampling approach
                        reaches.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Store audits and catalogue compliance</h3>
                      <p className="pi-uc-x">
                        Store audits and catalogue listings are checked for compliance, with the reasoning
                        shown and the override left to your team.
                      </p>
                    </div>
                  </div>
                  <Link className="ca-link group" href="/industries/retail/">
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
                    Explore Retail
                  </Link>
                </div>
              </div>
            </details>
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
              data-ts="203"
              data-txt="prism, explained: defensible evaluation at enterprise scale about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="0"
              href="/blog/prism-explained/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/121-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">PRISM, Explained</h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    7 April 2025
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
              data-ts="-30"
              data-txt="one rubric for every applicant: prism in isb's ivi admissions esmagico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="60"
              href="/blog/prism-in-isb-ivi-admissions/"
            >
              <div className="bl-ph relative h-[176px] overflow-hidden">
                <span className="bl-ph-k">EsMagico</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  One Rubric for Every Applicant
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    5 October 2026
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
              data-topic="Agentic AI"
              data-author="Shardul Singh"
              data-ts="-10"
              data-txt="scoring video and written submissions to the same standard agentic ai shardul singh"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="120"
              href="/blog/scoring-video-and-written-submissions/"
            >
              <div className="bl-ph relative h-[176px] overflow-hidden">
                <span className="bl-ph-k">Agentic AI</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Scoring Video and Written Submissions to the Same Standard
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">Agentic AI</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    19 August 2026
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
                <h2 className="h-cta max-w-[26ch] lg:max-w-none">
                  <span className="text-teal">AI</span> for enterprises with
                  <br className="hidden sm:block" /> every{" "}
                  <span className="text-teal">decision traceable</span> to its source
                </h2>
              </div>
              <div className="flex flex-col items-start lg:pt-2">
                <button type="button" data-pyzo-central="" className="btn btn-light group">
                  Start free trial
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
