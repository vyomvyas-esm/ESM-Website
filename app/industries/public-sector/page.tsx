import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Public Sector & Governance",
  description: "",
  path: "/industries/public-sector/",
});
export default function IndPublicPage() {
  return (
    <main className="page" id="page-ind-public">
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[96px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries" },
              { label: "Public Sector & Governance" },
            ]}
          />
          <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
            Auditable by design
          </h1>
          <p className="lede mt-5 max-w-[680px] rv" data-d="120">
            We engineer accreditation, citizen services and institutional knowledge with the procedural rigour
            these mandates demand, auditable from the first decision the system makes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 rv" data-d="180">
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
            <a className="btn btn-ghost" href="#ind-uses">
              See where AI fits
            </a>
          </div>
        </div>
        <div className="brand-band relative rv" data-d="240">
          <div className="mx-auto max-w-shell px-6 lg:px-8">
            <div className="bm-rail">
              <ul
                className="bm-track"
                aria-label="Public sector clients"
                style={{ "--bm-dur": "34s" } as Record<string, string>}
              >
                <li className="bm-item">
                  <span className="clogo logow-up" role="img" aria-label="Government of Uttar Pradesh"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-odisha" role="img" aria-label="Government of Odisha"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-qci" role="img" aria-label="Quality Council of India"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-msrdc" role="img" aria-label="MSRDC"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-dsci" role="img" aria-label="DSCI"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-egov" role="img" aria-label="eGov Foundation"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-samagra" role="img" aria-label="Samagra Governance"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-up" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-odisha" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-qci" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-msrdc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-dsci" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-egov" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-samagra" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-up" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-odisha" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-qci" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-msrdc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-dsci" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-egov" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-samagra" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-up" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-odisha" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-qci" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-msrdc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-dsci" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-egov" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-samagra" aria-hidden="true"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="glow-top" aria-hidden="true"></div>
          <div className="grid gap-12 lg:grid-cols-[minmax(280px,1fr)_2fr] lg:gap-16">
            <div className="rv">
              <span className="eyebrow rv">The pressures</span>
              <h2 className="h-sec">What the public sector is up against</h2>
            </div>
            <div className="ctrl-grid">
              <div className="ctrl-col rv" data-d="0">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Citizens who are not on apps
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Many of the people a scheme is meant for prefer a regional language or a phone call, and an
                  online portal never reaches them.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="70">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Decisions that must be fair on the record
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Every grant, tender or eligibility decision can be challenged, so the same standard has to
                  be applied to every file and shown.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="140">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Volumes that rise around every deadline
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Grievances and enrolment requests arrive in surges around deadlines and announcements that
                  no department can staff for.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="0">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Guidelines that change across districts
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Frontline officers in every district have to apply the same guidelines, even as those
                  guidelines are revised during the year.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="70">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Legacy systems that stay in place
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Departmental records are held in systems decades old, and replacing them is rarely possible
                  within a budget cycle.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="140">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Information requests with deadlines
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Requests for information carry statutory deadlines, and every response has to be traceable
                  to the documents behind it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ind-uses" className="relative overflow-hidden bg-ink pt-[96px] pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Across government</span>
          <h2 className="h-sec rv" data-d="60">
            Where AI fits in government
          </h2>
          <div className="iq-grid mt-[46px]">
            <article className="iq-cell rv" data-d="0">
              <div className="iq-top">
                <span className="iq-pzmark pzlogo-atlas" role="img" aria-label="Atlas"></span>
                <h3 className="iq-name">Field staff trained to one standard</h3>
              </div>
              <p className="iq-note">
                Converts scheme guidelines and operating procedures into assessed, multilingual learning that
                brings field and frontline staff to one verified standard across every district.
              </p>
              <Link className="iq-go group" href="/pyzo/atlas/">
                Explore Atlas
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
              </Link>
            </article>
            <article className="iq-cell rv" data-d="50">
              <div className="iq-top">
                <span className="iq-pzmark pzlogo-compass" role="img" aria-label="Compass"></span>
                <h3 className="iq-name">Information requests answered on the record</h3>
              </div>
              <p className="iq-note">
                Answers a citizen’s or officer’s query from your scheme documents in their own language, and
                drafts the response to an information request with every line traceable to its source.
              </p>
              <Link className="iq-go group" href="/pyzo/compass/">
                Explore Compass
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
              </Link>
            </article>
            <article className="iq-cell rv" data-d="100">
              <div className="iq-top">
                <span className="iq-pzmark pzlogo-evio" role="img" aria-label="Evio"></span>
                <h3 className="iq-name">Grievances heard in every language</h3>
              </div>
              <p className="iq-note">
                Handles citizen grievance and scheme-enrolment calls in more than fifteen languages, reaching
                the people who are not on apps or comfortable in English.
              </p>
              <Link className="iq-go group" href="/pyzo/evio/">
                Explore Evio
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
              </Link>
            </article>
            <article className="iq-cell rv" data-d="150">
              <div className="iq-top">
                <span className="iq-pzmark pzlogo-forge" role="img" aria-label="Forge"></span>
                <h3 className="iq-name">Processing that keeps its schedule</h3>
              </div>
              <p className="iq-note">
                Operates high-volume processing such as payments and record updates across departmental and
                legacy systems, completing each cycle on time without a migration.
              </p>
              <Link className="iq-go group" href="/pyzo/forge/">
                Explore Forge
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
              </Link>
            </article>
            <article className="iq-cell rv" data-d="200">
              <div className="iq-top">
                <span className="iq-pzmark pzlogo-loupe" role="img" aria-label="Loupe"></span>
                <h3 className="iq-name">Scheme applications that arrive complete</h3>
              </div>
              <p className="iq-note">
                Guides a citizen or vendor through a scheme application or tender submission, validating each
                field and document so incomplete filings never reach your officers.
              </p>
              <Link className="iq-go group" href="/pyzo/loupe/">
                Explore Loupe
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
              </Link>
            </article>
            <article className="iq-cell rv" data-d="250">
              <div className="iq-top">
                <span className="iq-pzmark pzlogo-prism" role="img" aria-label="Prism"></span>
                <h3 className="iq-name">Grants and tenders judged consistently</h3>
              </div>
              <p className="iq-note">
                Evaluates grant applications and tender bids against a rubric you own, applying one standard
                to every file and showing the reasoning behind each score.
              </p>
              <Link className="iq-go group" href="/pyzo/prism/">
                Explore Prism
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
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section id="ind-public-proof" className="relative overflow-hidden bg-ink pt-[108px] pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="pf-head">
            <div>
              <span className="eyebrow rv">Proof in the public sector</span>
              <h2 className="h-sec rv" data-d="60">
                Governed outcomes, proven in production
              </h2>
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
          <div className="cs-acc mt-[46px]">
            <details className="ca-row rv" data-d="0">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span
                  className="clogo ca-logo logow-up"
                  role="img"
                  aria-label="Government of Uttar Pradesh"
                ></span>
                <span className="ca-head">7.2M+ assessments made retrievable in a single day at peak</span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">7.2M+</div>
                      <div className="l">Assessments in a day at peak</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">46%</div>
                      <div className="l">Less assessment time</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">22%</div>
                      <div className="l">Fewer invalid records</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    A statewide knowledge repository with automated assessment workflows, every record
                    attributable to the child, the teacher and the assessor.
                  </p>
                  <Link className="ca-link group" href="/case-studies/government-of-uttar-pradesh/">
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
            </details>
            <details className="ca-row rv" data-d="60">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span
                  className="clogo ca-logo logow-odisha"
                  role="img"
                  aria-label="Government of Odisha"
                ></span>
                <span className="ca-head">
                  72% first-contact resolution for farmers asking aloud in twelve languages
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">72%</div>
                      <div className="l">First-contact resolution</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">27%</div>
                      <div className="l">Faster scheme adoption</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">35%</div>
                      <div className="l">Better weather preparedness</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    Agricultural, weather, soil and scheme data unified behind a voice line that a farmer can
                    call from a feature phone.
                  </p>
                  <Link className="ca-link group" href="/case-studies/government-of-odisha/">
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
            </details>
            <details className="ca-row rv" data-d="120">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="clogo ca-logo logow-dsci" role="img" aria-label="DSCI"></span>
                <span className="ca-head">450+ grant applications scored on one rubric, with no gaps</span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">450+</div>
                      <div className="l">Applications scored</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">320+</div>
                      <div className="l">Review hours saved</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">8/10</div>
                      <div className="l">Credibility rating</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    Startup grant applications assessed against a weighted rubric, with every submission
                    scored in full and the same standard applied to each.
                  </p>
                  <Link className="ca-link group" href="/case-studies/data-security-council-of-india/">
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
              data-ts="112"
              data-txt="preserving institutional knowledge in government with agentic ai about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="0"
              href="/blog/preserving-institutional-knowledge-in-government-with-agentic-ai/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/212-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Institutional Knowledge in Government
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    5 November 2025
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
              data-ts="118"
              data-txt="ai for accreditation and citizen services: procedural rigour by design about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="60"
              href="/blog/ai-for-accreditation-and-citizen-services/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/206-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  AI for Accreditation and Citizen Services
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    22 October 2025
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
              data-ts="34"
              data-txt="generic ai vs sector-fluent ai: why domain context decides the outcome about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="120"
              href="/blog/generic-ai-vs-sector-fluent-ai/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/290-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Generic AI vs Sector-Fluent AI
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">6 May 2026</span>
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
                  Make the mandate <span className="text-teal">auditable</span> from the first decision
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
