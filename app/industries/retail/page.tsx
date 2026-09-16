import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Consumer & Retail - Es Magico",
};
export default function IndRetailPage() {
  return (
    <main className="page" id="page-ind-retail">
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
            <span aria-current="page">Consumer &amp; Retail</span>
          </nav>
          <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
            Personalisation that holds at real scale.
          </h1>
          <p className="lede mt-5 max-w-[680px] rv" data-d="120">
            We engineer customer experience, demand and inventory that performs under real traffic and real
            margins, at the volume a peak week actually produces.
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
                Performance that survives <span className="text-white/40">real traffic.</span>
              </h2>
              <p className="mt-7 max-w-[48ch] text-[12.5px] leading-[1.9] text-white/45">
                Customer experience and support, demand and inventory intelligence, and personalisation,
                engineered to perform at the scale and margin of live operations.
              </p>
            </div>
            <div className="num-list">
              <div className="num-row rv" data-d="0">
                <span className="num-idx">01</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Performance under real traffic</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Customer experience and support engineered to hold at peak-week volume and real margin.
                  </p>
                </div>
              </div>
              <div className="num-row rv" data-d="70">
                <span className="num-idx">02</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">
                    Personalisation that stays in bounds
                  </h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Relevant offers and journeys inside the consent and conduct limits, so scale never comes
                    at the cost of a compliance gap.
                  </p>
                </div>
              </div>
              <div className="num-row rv" data-d="140">
                <span className="num-idx">03</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">
                    The exceptions, worked end to end
                  </h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Order, returns and inventory exceptions handled across the systems that do not talk to
                    each other, absorbing volume without a proportional headcount rise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ind-retail-proof" className="relative overflow-hidden bg-ink py-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="pf-head">
            <div>
              <span className="eyebrow rv">Proof in consumer &amp; retail</span>
              <h2 className="h-sec rv" data-d="60">
                Live at consumer scale.
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
            <Link className="csr rv" data-d="0" href="/case-studies/indiamart">
              <span
                className="clogo cs-logo csr-logo logow-indiamart opacity-70"
                role="img"
                aria-label="IndiaMART"
              ></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">IndiaMART</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                  Voice and chat agents handling a million marketplace conversations.
                </p>
              </div>
              <div className="csr-figs">
                <div className="csr-fig">
                  <div className="n tally">1M+</div>
                  <div className="l">conversations handled</div>
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
            <Link className="csr rv" data-d="60" href="/case-studies/tataneu">
              <span
                className="clogo cs-logo csr-logo logow-tataneu2 opacity-70"
                role="img"
                aria-label="Tata Neu"
              ></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">Tata Neu</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                  A gamified rewards engine with playable mechanics across verticals.
                </p>
              </div>
              <div className="csr-figs">
                <div className="csr-fig">
                  <div className="n tally">500,000+</div>
                  <div className="l">users engaged</div>
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
            <Link className="csr rv" data-d="120" href="/case-studies/epic">
              <span
                className="clogo cs-logo csr-logo logow-epic opacity-70"
                role="img"
                aria-label="Epic Global Inc."
              ></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">Epic Global Inc.</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                  Compliant listings generated and catalogues migrated across markets.
                </p>
              </div>
              <div className="csr-figs">
                <div className="csr-fig">
                  <div className="n tally">~65%</div>
                  <div className="l">faster listing turnaround</div>
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
          <h2 className="h-sec rv">Six capabilities, one commerce estate.</h2>
          <p className="prose-lede mt-6 max-w-[760px] rv" data-d="60">
            Each one deployed inside your environment, operated by us, and answerable for what it produces.
          </p>
          <div className="us-grid mt-[46px]">
            <article className="us-cell rv" data-d="0">
              <span className="us-n">01</span>
              <div className="us-body">
                <span className="us-tag">Prism</span>
                <h3 className="us-h">High volume judged consistently</h3>
                <p className="us-p">
                  Returns, claims and seller quality adjudicated the same way in a quiet week and in a peak
                  week.
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
                <h3 className="us-h">One answer on every channel</h3>
                <p className="us-p">
                  Product, returns and pricing rules answered identically on chat, on the phone and at the
                  counter.
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
                <h3 className="us-h">Conversations that scale with demand</h3>
                <p className="us-p">
                  Order, delivery and win-back conversations handled end to end at a volume no team is staffed
                  for.
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
                <h3 className="us-h">Forms that people actually finish</h3>
                <p className="us-p">
                  Checkout and seller registration completed without the drop-off a confusing form always
                  causes.
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
                <h3 className="us-h">Service quality that survives attrition</h3>
                <p className="us-p">
                  Frontline and franchise training in short modules, certified and refreshed ahead of a busy
                  season.
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
                <h3 className="us-h">Exceptions worked across every system</h3>
                <p className="us-p">
                  Order, inventory and returns exceptions handled across commerce, the warehouse and the
                  ledger.
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
                Will it hold up at peak-week volume?{" "}
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
                Performance is engineered for real traffic and real margin. The workload a peak week produces
                is the design target, so throughput does not fall over exactly when the business needs it
                most.
              </div>
            </details>
            <details>
              <summary>
                How does personalisation stay within consent and conduct rules?{" "}
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
                Relevance is engineered inside the consent and conduct boundaries from the start, so a lift in
                conversion never comes at the cost of a compliance gap you have to explain later.
              </div>
            </details>
            <details>
              <summary>
                What happens to the cases the system cannot handle?{" "}
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
                They are escalated to a person with the context intact. The system is generous with what it
                resolves and conservative about anything that needs judgement or changes an order’s state.
              </div>
            </details>
            <details>
              <summary>
                What happens on the day traffic is four times a normal Tuesday?{" "}
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
                It is engineered for that day rather than for an average one. Capacity is provisioned against
                peak, degradation is graceful rather than sudden, and the queue for human escalation is
                bounded so it does not silently grow through the night. If a downstream system slows, work is
                held and replayed rather than dropped.
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
            <Link className="oi-row rv" data-d="0" href="/industries/bfsi">
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
            <Link className="oi-row rv" data-d="60" href="/industries/healthcare">
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
            <Link className="oi-row rv" data-d="120" href="/industries/public-sector">
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
