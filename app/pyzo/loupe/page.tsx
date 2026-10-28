import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { graph, service } from "@/lib/jsonld";
import { services } from "@/data/page-schema";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Loupe, Application Assistant - PYZO",
  description:
    "Guides complex form completion field by field, validating inputs in real time for applicants and compliance reviewers.",
  path: "/pyzo/loupe/",
});
export default function PyzoLoupePage() {
  return (
    <main className="page" id="page-pyzo-loupe">
      <JsonLd data={graph(service(services["pyzo-loupe"]))} />
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[96px]">
          <div className="grid items-center gap-12">
            <div>
              <Breadcrumbs items={[{ label: "PYZO", href: "/pyzo/" }, { label: "Loupe" }]} />
              <span
                className="pzlogo pz-hero-logo pzlogo-loupe pzh-loupe rv"
                data-d="30"
                role="img"
                aria-label="Loupe"
              ></span>
              <h1 className="h-hero mt-6 max-w-[20ch] rv" data-d="60">
                Applications that arrive complete the first time
              </h1>
              <p className="lede mt-5 max-w-[640px] rv" data-d="120">
                Guides complex form completion field by field, validating inputs in real time for applicants
                and compliance reviewers.
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
            <div data-pyzo-arch="loupe" data-head="off"></div>
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
                <span className="clogo ca-logo logow-whirlpool" role="img" aria-label="Whirlpool"></span>
                <span className="ca-head">
                  54% reduction in procurement cycle time through validation at the point of entry
                </span>
              </div>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">54%</div>
                      <div className="l">Shorter procurement cycle</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">72%</div>
                      <div className="l">Faster data validation</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">Retrievable</div>
                      <div className="l">Recurring faults</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    An intelligent document protocol that turns supplier submissions into validated
                    procurement records, with every error explained at the point of entry.
                  </p>
                  <Link className="ca-link group" href="/case-studies/whirlpool/">
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
            Applications completed right, in every industry
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
                  Account and loan applications complete and correct at the point of capture
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">KYC packs completed at capture</h3>
                      <p className="pi-uc-x">
                        Loupe checks each KYC document as it is uploaded, so the right document arrives with
                        consistent details the first time.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Loan and account-opening applications</h3>
                      <p className="pi-uc-x">
                        Applicants are guided field by field through a loan or account-opening form, which
                        lowers the not-in-good-order rate and brings time-to-fund forward.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Autofill from data you already hold</h3>
                      <p className="pi-uc-x">
                        Details already held in the core or the bureau are filled in automatically, so
                        applicants only supply what is genuinely new.
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
                  Clinical and quality forms validated before anything moves downstream
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">eCRFs and informed consent</h3>
                      <p className="pi-uc-x">
                        Clinical forms and consent documents are completed at the point of entry, with missing
                        signatures caught before anything moves downstream.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Batch records and certificates of analysis</h3>
                      <p className="pi-uc-x">
                        Out-of-range values and wrong versions are flagged as a batch record or certificate is
                        filled, long before it reaches review.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Accreditation submissions</h3>
                      <p className="pi-uc-x">
                        Applicants are guided through an accreditation submission with every field and
                        document validated, so approval comes sooner.
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
                  Scheme and tender applications validated before they reach your officers
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Scheme applications completed first time</h3>
                      <p className="pi-uc-x">
                        Citizens are guided through a scheme application in their own language, with each
                        field validated before they submit.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Self-assessments with evidence checked</h3>
                      <p className="pi-uc-x">
                        Documentary evidence for a self-assessment is checked at submission, so reviewers
                        receive complete files every time.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Tender submissions</h3>
                      <p className="pi-uc-x">
                        Vendors complete tender submissions with every document validated, so incomplete
                        filings never reach your officers.
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
                  Seller and product data validated as it is entered, ready to list
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Seller registration</h3>
                      <p className="pi-uc-x">
                        New sellers and franchise partners are guided through registration, with each
                        attribute validated so listings go live without rejection.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Product-data entry</h3>
                      <p className="pi-uc-x">
                        Product attributes are checked against each marketplace’s content rules as they are
                        entered, which avoids rework after a rejection.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Checkout and claim forms</h3>
                      <p className="pi-uc-x">
                        Checkout and claim forms explain themselves as customers fill them, reducing drop-off
                        and catching errors at entry.
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
              data-ts="190"
              data-txt="loupe, explained: guided form-filling for high-stakes submissions about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="0"
              href="/blog/loupe-explained/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/134-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">LOUPE, Explained</h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">7 May 2025</span>
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
              data-ts="5"
              data-txt="the cost of a missing field: engineering complex application journeys that complete agentic ai shardul singh"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="60"
              href="/blog/the-cost-of-a-missing-field/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/319-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  The Cost of a Missing Field
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">Agentic AI</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    13 July 2026
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
              data-ts="27"
              data-txt="how a regulated lender cleared audit on first pass with guided validation about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="120"
              href="/blog/how-a-regulated-lender-cleared-audit-on-first-pass/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/297-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Clearing Audit on First Pass
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">22 May 2026</span>
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
