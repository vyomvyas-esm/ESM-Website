import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Banking & Financial Services - Es Magico",
};
export default function IndBfsiPage() {
  return (
    <main className="page" id="page-ind-bfsi">
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
            <span aria-current="page">Banking &amp; Financial Services</span>
          </nav>
          <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
            Every decision here has to be defensible.
          </h1>
          <p className="lede mt-5 max-w-[680px] rv" data-d="120">
            We engineer underwriting, servicing, compliance and grievance work to be questioned, because here
            it will be, and we operate it inside your environment, accountable for what it produces.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 rv" data-d="180">
            <Link className="btn btn-light group" href="/contact">
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
                Decisions that hold up <span className="text-white/40">under audit.</span>
              </h2>
              <p className="mt-7 max-w-[48ch] text-[12.5px] leading-[1.9] text-white/45">
                Credit and underwriting decisioning, servicing and collections, fraud and compliance, and
                grievance redressal, each one explainable, logged, and traceable to source, so it can be
                defended long after it is made.
              </p>
            </div>
            <div className="num-list">
              <div className="num-row rv" data-d="0">
                <span className="num-idx">01</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Decisioning that defends itself</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Credit, underwriting and claims scored against one standard, each decision logged with the
                    reason it was made, so it holds up when a regulator asks months later.
                  </p>
                </div>
              </div>
              <div className="num-row rv" data-d="70">
                <span className="num-idx">02</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Servicing and recovery at volume</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Grievance redressal, collections and servicing conversations handled at a scale no team
                    can staff, with the difficult cases escalated to a person.
                  </p>
                </div>
              </div>
              <div className="num-row rv" data-d="140">
                <span className="num-idx">03</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">
                    Fraud and compliance in the load path
                  </h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Fraud scoring, sanctions and KYC checks engineered into the decision itself, with a
                    documented trail behind every call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ind-bfsi-proof" className="relative overflow-hidden bg-ink py-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="pf-head">
            <div>
              <span className="eyebrow rv">Proof in BFSI</span>
              <h2 className="h-sec rv" data-d="60">
                Live inside regulated banks.
              </h2>
            </div>
            <Link className="btn btn-ghost group rv" data-d="120" href="/case-studies">
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
            <Link className="csr rv" data-d="0" href="/case-studies/rbi">
              <span
                className="clogo cs-logo csr-logo logow-rbi opacity-70"
                role="img"
                aria-label="RBI · Innovation Hub"
              ></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">RBI · Innovation Hub</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                  A voice-first grievance protocol any regulated bank can adopt.
                </p>
              </div>
              <div className="csr-figs">
                <div className="csr-fig">
                  <div className="n tally">~80%</div>
                  <div className="l">lower grievance turnaround</div>
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
            <Link className="csr rv" data-d="60" href="/case-studies/indusind">
              <span
                className="clogo cs-logo csr-logo logow-indusind opacity-70"
                role="img"
                aria-label="IndusInd Bank"
              ></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">IndusInd Bank</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                  Policy documents turned into 150+ AI video modules, no trainer.
                </p>
              </div>
              <div className="csr-figs">
                <div className="csr-fig">
                  <div className="n tally">50,000+</div>
                  <div className="l">employees trained</div>
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
          <h2 className="h-sec rv">Six capabilities, one banking estate.</h2>
          <p className="prose-lede mt-6 max-w-[760px] rv" data-d="60">
            Each one deployed inside your environment, operated by us, and answerable for what it produces.
          </p>
          <div className="us-grid mt-[46px]">
            <article className="us-cell rv" data-d="0">
              <span className="us-n">01</span>
              <div className="us-body">
                <span className="us-tag">Prism</span>
                <h3 className="us-h">Every file scored the same way</h3>
                <p className="us-p">
                  Underwriting, claims and SME lending judged against one rubric, with the marginal cases
                  escalated.
                </p>
                <Link className="us-go group" href="/pyzo/prism">
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
                <h3 className="us-h">Policy answered where the work happens</h3>
                <p className="us-p">
                  Credit policy, exception rules and KYC thresholds answered from the version currently in
                  force.
                </p>
                <Link className="us-go group" href="/pyzo/compass">
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
                <h3 className="us-h">Calls made at a volume you cannot staff</h3>
                <p className="us-p">
                  Overdue recovery and settlement conversations that adapt to the borrower and the bucket they
                  sit in.
                </p>
                <Link className="us-go group" href="/pyzo/evio">
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
                <h3 className="us-h">Applications that clear the first time</h3>
                <p className="us-p">
                  KYC packs and loan files checked as they are captured and validated against the proof
                  supplied.
                </p>
                <Link className="us-go group" href="/pyzo/loupe">
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
                <h3 className="us-h">Staff certified before they go live</h3>
                <p className="us-p">
                  Onboarding and mandatory certification for credit, collections and branch staff, assessed on
                  cases.
                </p>
                <Link className="us-go group" href="/pyzo/atlas">
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
                <h3 className="us-h">Work moved between systems that do not talk</h3>
                <p className="us-p">
                  Reconciliation breaks, disbursement steps and case routing executed across core banking and
                  the CRM.
                </p>
                <Link className="us-go group" href="/pyzo/forge">
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
                Will an automated decision hold up in a model-risk review?{" "}
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
                That is the design goal from the first sprint. Every decision is logged with its inputs, the
                score and the policy that acted on it, so a specific case can be reconstructed and defended to
                an examiner months later. Reason codes are emitted at decision time and held with the record.
              </div>
            </details>
            <details>
              <summary>
                Where does a person stay in the loop?{" "}
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
                On the marginal and high-consequence cases: the thin-file application near the threshold, the
                flagged transaction a policy held, the exception a rule cannot judge. Automation clears the
                clear cases; a named human owns the ones that carry real cost.
              </div>
            </details>
            <details>
              <summary>
                How do you keep a model fair across customer segments?{" "}
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
                Fairness is monitored continuously across segments against defined thresholds, with the same
                seriousness as performance. A model that quietly grows harder on one group over two quarters
                is surfaced as an event months before an audit would reach it.
              </div>
            </details>
            <details>
              <summary>
                Can this run inside our VPC, under our IAM and our change process?{" "}
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
                Yes. We deploy into your environment with isolated hosting, role-based access and encryption,
                so customer data stays where your policies and the regulator require it to.
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
            <Link className="oi-row rv" data-d="0" href="/industries/healthcare">
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
            <Link className="oi-row rv" data-d="60" href="/industries/public-sector">
              <span className="oi-ic">
                <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M10 3v14M4.6 5.4h10.8M6.2 5.4 3.6 11h5.2ZM13.8 5.4 11.2 11h5.2ZM6.5 17h7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="oi-name">Public Sector &amp; Governance</span>
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
            <Link className="oi-row rv" data-d="120" href="/industries/retail">
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
                <Link className="btn btn-light group" href="/contact">
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
