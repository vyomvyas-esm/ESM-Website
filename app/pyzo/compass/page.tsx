import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { graph, service } from "@/lib/jsonld";
import { services } from "@/data/page-schema";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Compass, Business Analyst - PYZO",
  description:
    "Unlocks enterprise knowledge repositories to execute complex, multi-system queries and actions with full source traceability.",
  path: "/pyzo/compass/",
});
export default function PyzoCompassPage() {
  return (
    <main className="page" id="page-pyzo-compass">
      <JsonLd data={graph(service(services["pyzo-compass"]))} />
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[96px]">
          <div className="grid items-center gap-12">
            <div>
              <Breadcrumbs items={[{ label: "PYZO", href: "/pyzo/" }, { label: "Compass" }]} />
              <span
                className="pzlogo pz-hero-logo pzlogo-compass pzh-compass rv"
                data-d="30"
                role="img"
                aria-label="Compass"
              ></span>
              <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
                Ask your company anything
              </h1>
              <p className="lede mt-5 max-w-[640px] rv" data-d="120">
                Unlocks enterprise knowledge repositories to execute complex, multi-system queries and actions
                with full source traceability.
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
            <div data-pyzo-arch="compass" data-head="off"></div>
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
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Across your industries</span>
          <h2 className="h-sec rv" data-d="60">
            Institutional knowledge, answerable in every industry
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
                  Policy answers with the source attached, inside every frontline workflow
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Policy answers inside the workflow</h3>
                      <p className="pi-uc-x">
                        Underwriters and tellers ask about credit policy or exception rules and get the answer
                        from the version currently in force, with the source attached.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">KYC thresholds on demand</h3>
                      <p className="pi-uc-x">
                        Frontline staff check KYC thresholds and documentation rules in plain language,
                        without searching through circulars or waiting on the compliance desk.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Audit and inspection preparation</h3>
                      <p className="pi-uc-x">
                        Compass gathers the policy wording and circulars behind each control, compressing the
                        preparation for an audit or inspection from weeks into days.
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
                  Quality and regulatory answers traced to the controlled document
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">SOP answers on the shop floor</h3>
                      <p className="pi-uc-x">
                        Operators and supervisors ask about a current SOP where the work happens and get an
                        answer traced to the controlled document behind it.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Faster deviation investigations</h3>
                      <p className="pi-uc-x">
                        Investigators query quality records and regulatory guidance in plain language, which
                        shortens the time needed to close a deviation.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Labelling and regulatory queries in the field</h3>
                      <p className="pi-uc-x">
                        Field and medical teams check labelling and regulatory guidance on the move, with
                        every answer citing the approved source.
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
                  Scheme rules and standards answerable in the citizen’s own language
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Scheme rules in plain language</h3>
                      <p className="pi-uc-x">
                        Officers and citizens ask about eligibility or scheme rules in their own language and
                        receive an answer that names the clause it came from.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Information request drafting</h3>
                      <p className="pi-uc-x">
                        Compass drafts the response to an information request with every line traceable to its
                        source, ready for an officer to review before it is sent.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Standards on hand for assessors</h3>
                      <p className="pi-uc-x">
                        Assessors look up the exact requirement in the current standard or circular during an
                        assessment, so their findings rest on the right text.
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
                  Product and policy answers that stay identical across every channel
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">One answer across every channel</h3>
                      <p className="pi-uc-x">
                        Product and returns rules are answered identically on chat and at the counter, so the
                        version customers hear never drifts between channels.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Merchandising and pricing answers</h3>
                      <p className="pi-uc-x">
                        Store and category teams get instant answers from your merchandising and pricing
                        documents, without raising a ticket with the policy team.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Weekly performance reviews</h3>
                      <p className="pi-uc-x">
                        Compass drafts the weekly store or category review from the same controlled sources
                        your teams already trust.
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
              data-ts="197"
              data-txt="compass, explained: making institutional knowledge answerable about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="0"
              href="/blog/compass-explained/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/127-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">COMPASS, Explained</h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    21 April 2025
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
              data-ts="228"
              data-txt="getting rag to hold up in a regulated enterprise about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="60"
              href="/blog/getting-rag-to-hold-up-in-a-regulated-enterprise/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/96-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Getting RAG to Hold Up in a Regulated Enterprise
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    7 February 2025
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
              data-ts="69"
              data-txt="selecting a model for enterprise rag: a retrieval-first evaluation framework ai models karan trehan"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="120"
              href="/blog/selecting-a-model-for-enterprise-rag/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/255-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Selecting a Model for Enterprise RAG
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">AI Models</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    13 February 2026
                  </span>
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
