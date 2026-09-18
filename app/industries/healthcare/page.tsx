import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { graph, faqPage } from "@/lib/jsonld";
import { faqs } from "@/data/page-schema";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Healthcare & Life Sciences",
  description: "",
  path: "/industries/healthcare/",
});
export default function IndHealthcarePage() {
  return (
    <main className="page" id="page-ind-healthcare">
      <JsonLd data={graph(faqPage(faqs["ind-healthcare"]))} />
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[92px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries" },
              { label: "Healthcare & Life Sciences" },
            ]}
          />
          <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
            The clinician stays in the loop.
          </h1>
          <p className="lede mt-5 max-w-[680px] rv" data-d="120">
            We engineer decision support, care coordination and training that give clinical and quality teams
            their time back, without taking them off the decisions that matter.
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
                Time given back, without giving <span className="text-white/40">up the decision.</span>
              </h2>
              <p className="mt-7 max-w-[48ch] text-[12.5px] leading-[1.9] text-white/45">
                Clinical and quality decision support, care coordination, SOP and compliance training, and
                institutional knowledge made answerable, every answer traceable to source, and every
                consequential decision left with a person.
              </p>
            </div>
            <div className="num-list">
              <div className="num-row rv" data-d="0">
                <span className="num-idx">01</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">
                    Decision support under clinical authority
                  </h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Clinical and quality support that gives teams their time back while the consequential call
                    stays with a person, every answer traceable to its source.
                  </p>
                </div>
              </div>
              <div className="num-row rv" data-d="70">
                <span className="num-idx">02</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Knowledge made answerable</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    SOPs, guidelines and institutional knowledge turned into answers in plain language,
                    refreshing as the underlying documents change.
                  </p>
                </div>
              </div>
              <div className="num-row rv" data-d="140">
                <span className="num-idx">03</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Training that holds a standard</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    SOP and compliance learning delivered and evidenced across sites, so no location quietly
                    teaches a different version of a procedure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ind-healthcare-proof" className="relative overflow-hidden bg-ink py-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="pf-head">
            <div>
              <span className="eyebrow rv">Proof in healthcare</span>
              <h2 className="h-sec rv" data-d="60">
                Live inside regulated healthcare.
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
            <Link className="csr rv" data-d="0" href="/case-studies/cipla-global-training-academy/">
              <span
                className="clogo cs-logo csr-logo logow-cipla opacity-70"
                role="img"
                aria-label="Cipla · Global Training Academy"
              ></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">Cipla · Global Training Academy</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                  SOPs turned into tracked, self-paced AI lessons for 20,000+ employees.
                </p>
              </div>
              <div className="csr-figs">
                <div className="csr-fig">
                  <div className="n tally">20,000+</div>
                  <div className="l">employees enabled</div>
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
            <Link className="csr rv" data-d="60" href="/case-studies/koita-foundation/">
              <span
                className="clogo cs-logo csr-logo logow-koita opacity-70"
                role="img"
                aria-label="Koita Foundation"
              ></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">Koita Foundation</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                  A body of digital-health material made answerable and traceable.
                </p>
              </div>
              <div className="csr-figs">
                <div className="csr-fig">
                  <div className="n tally">~80%</div>
                  <div className="l">less information-discovery time</div>
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
          <h2 className="h-sec rv">Six capabilities, one regulated estate.</h2>
          <p className="prose-lede mt-6 max-w-[760px] rv" data-d="60">
            Each one deployed inside your environment, operated by us, and answerable for what it produces.
          </p>
          <div className="us-grid mt-[46px]">
            <article className="us-cell rv" data-d="0">
              <span className="us-n">01</span>
              <div className="us-body">
                <span className="us-tag">Prism</span>
                <h3 className="us-h">Every case judged the same way</h3>
                <p className="us-p">
                  Batch records, deviations and safety cases scored against the standard that applies to each
                  one.
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
                <h3 className="us-h">The current procedure answered on the floor</h3>
                <p className="us-p">
                  GMP procedures and the current SOP for every role, with labelling and guidance returned by
                  market.
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
                <h3 className="us-h">Patients and prescribers reached by phone</h3>
                <p className="us-p">
                  Adherence and refill calls across patient support, with adverse events captured during the
                  call.
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
                <h3 className="us-h">Records completed correctly at entry</h3>
                <p className="us-p">
                  Source data and consent validated at site, well before queries accumulate ahead of database
                  lock.
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
                <h3 className="us-h">Staff qualified and the evidence kept</h3>
                <p className="us-p">
                  GMP qualification and annual re-certification at plant scale, with the record held per
                  person.
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
                <h3 className="us-h">Handoffs between systems done for you</h3>
                <p className="us-p">
                  Submission assembly and deviation records moved between the QMS, the LIMS and the ERP
                  untouched.
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
                Does the AI make the clinical decision?{" "}
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
                No. It supports the decision and the consequential call stays with a qualified clinician. The
                system is engineered so the clinician’s sign-off is a real review, and diagnostic
                accountability is never transferred to a model.
              </div>
            </details>
            <details>
              <summary>
                How do you stop a fluent but wrong output reaching the record?{" "}
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
                Every answer is traceable to the source it came from, so a reviewer checks the work rather
                than trusting it. High-stakes fields are surfaced for explicit attention, and the system flags
                where it is uncertain instead of phrasing a guess as a fact.
              </div>
            </details>
            <details>
              <summary>
                Will it hold up to validation on our own population?{" "}
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
                We validate on your setting, your patient mix and your equipment rather than a vendor
                benchmark, and we monitor for drift, because performance shifts when inputs shift. Evaluation
                stays an ongoing discipline for as long as the system is live.
              </div>
            </details>
            <details>
              <summary>
                How does this stand up to a GxP audit and our pharmacovigilance obligations?{" "}
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
                Every action is written to a validated audit trail: the inputs, the model version, the
                reviewer and the timestamp. Systems are qualified before use and requalified after a change,
                so the record supports IQ, OQ and PQ. Adverse event intake captures the minimum dataset during
                the call, in the format your safety database expects.
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
            <Link className="oi-row rv" data-d="60" href="/industries/public-sector/">
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
