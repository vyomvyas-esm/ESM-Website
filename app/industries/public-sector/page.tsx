import { pageMetadata } from "@/lib/seo";
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
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[92px]">
          <nav className="crumb rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">·</span> <span className="text-white/45">Industries</span>
            <span className="sep">·</span>
            <span aria-current="page">Public Sector &amp; Governance</span>
          </nav>
          <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
            Auditable by design, fair by default.
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
              See the use cases
            </a>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="rv">
              <span className="eyebrow rv">What we engineer</span>
              <h2 className="h-sec max-w-[15ch]">
                A documented trail behind <span className="text-white/40">every decision.</span>
              </h2>
              <p className="mt-7 max-w-[48ch] text-[12.5px] leading-[1.9] text-white/45">
                Accreditation and assessment, citizen services and scheme outreach, and institutional
                knowledge, engineered for the fairness, transparency and multilingual access that public
                mandates require.
              </p>
            </div>
            <div className="num-list">
              <div className="num-row rv" data-d="0">
                <span className="num-idx">01</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">A documented trail by design</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Accreditation and assessment scored consistently, with the rationale recorded behind every
                    decision, auditable from the first day rather than after an incident.
                  </p>
                </div>
              </div>
              <div className="num-row rv" data-d="70">
                <span className="num-idx">02</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">
                    Reach in the language people speak
                  </h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Citizen services and scheme outreach delivered across languages and by voice, reaching
                    people a form or an app would leave out.
                  </p>
                </div>
              </div>
              <div className="num-row rv" data-d="140">
                <span className="num-idx">03</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Standards made answerable</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Circulars, standards and scheme rules turned into plain-language answers for assessors,
                    officers and citizens alike, traceable to the clause behind them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ind-public-proof" className="relative overflow-hidden bg-ink py-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="pf-head">
            <div>
              <span className="eyebrow rv">Proof in the public sector</span>
              <h2 className="h-sec rv" data-d="60">
                Live inside public institutions.
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
          <p className="prose-lede mt-6 max-w-[760px] rv" data-d="90">
            Deployed in production, and measured against the number we agreed.
          </p>
          <div className="mt-10">
            <Link className="csr rv" data-d="0" href="/case-studies/samagra/">
              <span
                className="clogo cs-logo csr-logo logow-samagra opacity-70"
                role="img"
                aria-label="Samagra"
              ></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">Samagra</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                  Crop and scheme guidance by voice, in 12 languages, with no app.
                </p>
              </div>
              <div className="csr-figs">
                <div className="csr-fig">
                  <div className="n tally">3x</div>
                  <div className="l">more farmer engagement</div>
                </div>
              </div>
              <span className="csr-arw text-teal">
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
            <Link className="csr rv" data-d="60" href="/case-studies/indian-school-of-business/">
              <span
                className="clogo cs-logo csr-logo logow-isb opacity-70"
                role="img"
                aria-label="Indian School of Business · iVi"
              ></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">Indian School of Business · iVi</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                  A candidate screen that stays consistent, explainable and unbiased.
                </p>
              </div>
              <div className="csr-figs">
                <div className="csr-fig">
                  <div className="n tally">~97%</div>
                  <div className="l">concordance with faculty</div>
                </div>
              </div>
              <span className="csr-arw text-teal">
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
          </div>
        </div>
      </section>
      <section id="ind-uses" className="relative overflow-hidden bg-ink py-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="glow-top" aria-hidden="true"></div>
          <span className="eyebrow rv">Use cases</span>
          <h2 className="h-sec rv">Six capabilities, one public estate.</h2>
          <p className="prose-lede mt-6 max-w-[760px] rv" data-d="60">
            Each one deployed inside your environment, operated by us, and answerable to the standard it is
            held to.
          </p>
          <div className="us-grid mt-[46px]">
            <article className="us-cell rv" data-d="0">
              <span className="us-n">01</span>
              <div className="us-body">
                <span className="us-tag">Prism</span>
                <h3 className="us-h">The same evidence gets the same result</h3>
                <p className="us-p">
                  Accreditation, scheme eligibility and tenders scored consistently whoever happens to review
                  them.
                </p>
                <Link className="us-go group" href="/pyzo/prism/">
                  Explore Prism
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
              </div>
            </article>
            <article className="us-cell rv" data-d="50">
              <span className="us-n">02</span>
              <div className="us-body">
                <span className="us-tag">Compass</span>
                <h3 className="us-h">Standards answered in plain language</h3>
                <p className="us-p">
                  Circulars and scheme rules answered for assessors and citizens, traceable to the clause
                  behind them.
                </p>
                <Link className="us-go group" href="/pyzo/compass/">
                  Explore Compass
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
              </div>
            </article>
            <article className="us-cell rv" data-d="100">
              <span className="us-n">03</span>
              <div className="us-body">
                <span className="us-tag">Evio</span>
                <h3 className="us-h">Citizens reached without an app</h3>
                <p className="us-p">
                  Scheme outreach and eligibility checks by voice in regional languages, from any handset
                  anywhere.
                </p>
                <Link className="us-go group" href="/pyzo/evio/">
                  Explore Evio
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
              </div>
            </article>
            <article className="us-cell rv" data-d="150">
              <span className="us-n">04</span>
              <div className="us-body">
                <span className="us-tag">Loupe</span>
                <h3 className="us-h">Applications complete at submission</h3>
                <p className="us-p">
                  Forms completed right the first time with the evidence checked as it is attached rather than
                  later.
                </p>
                <Link className="us-go group" href="/pyzo/loupe/">
                  Explore Loupe
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
              </div>
            </article>
            <article className="us-cell rv" data-d="200">
              <span className="us-n">05</span>
              <div className="us-body">
                <span className="us-tag">Atlas</span>
                <h3 className="us-h">Assessors held to one standard</h3>
                <p className="us-p">
                  Certification against the current version of the standard, with refreshers delivered within
                  days.
                </p>
                <Link className="us-go group" href="/pyzo/atlas/">
                  Explore Atlas
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
              </div>
            </article>
            <article className="us-cell rv" data-d="250">
              <span className="us-n">06</span>
              <div className="us-body">
                <span className="us-tag">Forge</span>
                <h3 className="us-h">Records moved between departments</h3>
                <p className="us-p">
                  Applications processed across legacy registries so a citizen is never asked twice for the
                  same thing.
                </p>
                <Link className="us-go group" href="/pyzo/forge/">
                  Explore Forge
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">FAQ</span>
          <h2 className="h-sec rv" data-d="60">
            Questions we get asked.
          </h2>
          <div className="faq wide-block mt-9 rv" data-d="100">
            <details>
              <summary>
                How is a decision made auditable?{" "}
                <span className="ic">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1.6v8.8M1.6 6h8.8"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="ans">
                A documented trail sits behind every decision by design: what evidence was seen, which
                standard applied, and the rationale for the result. It is reconstructable from the first day,
                long before anyone asks.
              </div>
            </details>
            <details>
              <summary>
                How do you keep assessments consistent across assessors and regions?{" "}
                <span className="ic">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1.6v8.8M1.6 6h8.8"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="ans">
                Cases are scored against the published standard the same way regardless of who reviews them,
                so the same evidence produces the same result. The clause a decision was scored against
                travels with it.
              </div>
            </details>
            <details>
              <summary>
                Can it reach citizens who are not on an app?{" "}
                <span className="ic">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1.6v8.8M1.6 6h8.8"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="ans">
                Yes. Services and outreach are delivered by voice and across languages, so a form or a
                smartphone is never the barrier between a citizen and the service they are entitled to.
              </div>
            </details>
            <details>
              <summary>
                What does the audit trail look like when a citizen appeals a decision?{" "}
                <span className="ic">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1.6v8.8M1.6 6h8.8"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="ans">
                The complete file: the evidence submitted, the criteria applied, the version of the standard
                in force on that date, the score with its reasoning, and every subsequent change with its
                author. An appeal is reviewed against what was actually in front of the system, and the same
                record answers an RTI request or an audit by the accrediting body.
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink pb-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Elsewhere</span>
          <h2 className="h-sec rv" data-d="60">
            Other industries we serve.
          </h2>
          <div className="oi-grid mt-[40px] grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link className="oi-row rv" data-d="0" href="/industries/bfsi/">
              <span className="oi-ic">
                <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2.6 17 6H3Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  <path
                    d="M5 8.4v6M8.3 8.4v6M11.7 8.4v6M15 8.4v6M3 17h14"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="oi-name">Banking &amp; Financial Services</span>
              <span className="ic ml-auto">
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
            <Link className="oi-row rv" data-d="60" href="/industries/healthcare/">
              <span className="oi-ic">
                <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 10h3.2l1.6-4 2.6 8.6 2-4.6h5.6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="oi-name">Healthcare &amp; Life Sciences</span>
              <span className="ic ml-auto">
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
            <Link className="oi-row rv" data-d="120" href="/industries/retail/">
              <span className="oi-ic">
                <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M4.6 6.4h10.8l-1 10.2H5.6ZM7.4 6.4V5a2.6 2.6 0 0 1 5.2 0v1.4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="oi-name">Consumer &amp; Retail</span>
              <span className="ic ml-auto">
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
                <h2 className="h-cta max-w-[24ch] lg:max-w-none">Tell us the number you need to move.</h2>
                <p className="cta-sig mt-7">…outcomes that survive scrutiny.</p>
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
