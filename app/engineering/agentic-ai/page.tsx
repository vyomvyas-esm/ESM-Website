import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { graph, service } from "@/lib/jsonld";
import { services } from "@/data/page-schema";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Agentic AI",
  description:
    "We engineer agentic systems that execute real workflows across your applications, resolve what they can, and escalate what they can’t.",
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
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[86px] pb-[132px]">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Engineering" }, { label: "Agentic AI" }]}
          />
          <h1 className="h-hero mt-6 max-w-[15ch] rv" data-d="60">
            Agents that do the work, and escalate.
          </h1>
          <p className="lede hero-lede mt-5 max-w-[560px] rv" data-d="120">
            We engineer agentic systems that execute real workflows across your applications, resolve what
            they can, and escalate what they can’t.
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
              See the Proof
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
                Your enterprise doesn’t need to <span className="text-white/40">change for AI.</span>
              </h2>
              <p className="mt-7 max-w-[48ch] text-[12.5px] leading-[1.9] text-white/45">
                Agentic systems that work with the technology, processes and infrastructure you already have,
                from modern APIs to legacy applications, browsers and voice, without requiring the business to
                rebuild everything around AI.
              </p>
            </div>
            <div className="num-list">
              <div className="num-row rv" data-d="0">
                <span className="num-idx">01</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Work across the stack.</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Agents can move between applications, databases, browsers, documents and internal tools to
                    complete work across fragmented enterprise environments.
                  </p>
                </div>
              </div>
              <div className="num-row rv" data-d="70">
                <span className="num-idx">02</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Bring intelligence to legacy.</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    No API doesn’t mean no automation. Agents can interact with older systems through the same
                    interfaces people already use, extending automation to processes that were previously
                    difficult to integrate.
                  </p>
                </div>
              </div>
              <div className="num-row rv" data-d="140">
                <span className="num-idx">03</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Fit the way work happens.</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Agents can work within existing approvals, controls and escalation paths, adapting to the
                    realities of each business instead of forcing teams into a new operating model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="glow-top" aria-hidden="true"></div>
          <div className="grid gap-12 lg:grid-cols-[minmax(280px,1fr)_2fr] lg:gap-16">
            <div className="rv">
              <span className="eyebrow rv">How it holds up under scrutiny</span>
              <h2 className="h-sec">
                Engineered to be reconstructed <span className="text-white/40">after the fact.</span>
              </h2>
            </div>
            <div className="ctrl-grid">
              <div className="ctrl-col rv" data-d="0">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Logged &amp; traceable
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Every decision recorded and traceable to source, so an action can be explained after it is
                  taken.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="70">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">Confidence-aware</h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Confidence scoring, with a human escalation path the moment certainty drops below the bar
                  you set.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="140">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Guarded by design
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Guardrails on data, access and output, designed in from the first sprint and hardened before
                  anything reaches production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="svc-proof" className="relative overflow-hidden bg-ink pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="pf-head">
            <div>
              <span className="eyebrow rv">Where it operates</span>
              <h2 className="h-sec rv">
                Work an agent <span className="text-white/40">can carry.</span>
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
          <p className="lede mt-4 max-w-[620px] rv" data-d="60">
            Deployed in production, and measured against the number we agreed.
          </p>
          <div className="mt-[52px]">
            <Link className="csr rv" data-d="0" href="/case-studies/rbi-innovation-hub/">
              <span
                className="clogo csr-logo logow-rbi opacity-70"
                role="img"
                aria-label="RBI · Innovation Hub"
              ></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">RBI · Innovation Hub</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                  A multilingual, voice-first grievance protocol any regulated bank can adopt.
                </p>
              </div>
              <div className="csr-figs">
                <div className="csr-fig">
                  <div className="n tally">~80%</div>
                  <div className="l">lower grievance turnaround</div>
                </div>
                <div className="csr-fig">
                  <div className="n tally">~2 min</div>
                  <div className="l">to register a grievance</div>
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
            <Link className="csr rv" data-d="80" href="/case-studies/samagra/">
              <span
                className="clogo csr-logo logow-samagra opacity-70"
                role="img"
                aria-label="Samagra"
              ></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">Samagra</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                  Crop, weather and scheme guidance by voice, in 12 languages, no app required.
                </p>
              </div>
              <div className="csr-figs">
                <div className="csr-fig">
                  <div className="n tally">3x</div>
                  <div className="l">more farmer engagement</div>
                </div>
                <div className="csr-fig">
                  <div className="n tally">50,000+</div>
                  <div className="l">farmers engaged</div>
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
      <section className="relative overflow-hidden bg-ink pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Our approach</span>
          <h2 className="h-sec rv">
            We operate <span className="text-white/40">what we engineer.</span>
          </h2>
          <p className="lede mt-4 max-w-[660px] rv" data-d="60">
            A short path from discovery to a system deployed in production, and then the part most stop short
            of. We keep operating it, and remain accountable for what it produces.
          </p>
          <div className="tl mt-[56px]">
            <div className="tl-step rv" data-d="0">
              <span className="tl-dot"></span> <span className="tl-idx">01</span>
              <h3 className="mt-2 font-display text-[14px] font-medium">Discovery</h3>
              <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                Agree the problem, and agree the number.
              </p>
              <p className="tl-time">~1 week</p>
            </div>
            <div className="tl-step rv" data-d="70">
              <span className="tl-dot"></span> <span className="tl-idx">02</span>
              <h3 className="mt-2 font-display text-[14px] font-medium">Proof of concept</h3>
              <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                Engineer against the real workflow, with its data and its edge cases.
              </p>
              <p className="tl-time">2 weeks</p>
            </div>
            <div className="tl-step rv" data-d="140">
              <span className="tl-dot"></span> <span className="tl-idx">03</span>
              <h3 className="mt-2 font-display text-[14px] font-medium">Deploy</h3>
              <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                Into production, inside your environment.
              </p>
              <p className="tl-time">~1 week</p>
            </div>
            <div className="tl-step rv" data-d="210">
              <span className="tl-dot"></span> <span className="tl-idx">04</span>
              <h3 className="mt-2 font-display text-[14px] font-medium">Test</h3>
              <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                Against audit, risk and governance review.
              </p>
              <p className="tl-time">2 weeks</p>
            </div>
            <div className="tl-step is-last rv" data-d="280">
              <span className="tl-dot"></span> <span className="tl-idx">05</span>
              <h3 className="mt-2 font-display text-[14px] font-medium">Operate &amp; iterate</h3>
              <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                We operate it, and report against the number.
              </p>
              <p className="tl-time">Recurring</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">FAQ</span>
          <h2 className="h-sec rv" data-d="60">
            Questions we get asked.
          </h2>
          <div className="faq wide-block mt-9 rv" data-d="100">
            <details>
              <summary>
                What does an agent do when it is not confident?
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
                It escalates rather than proceeding. Thresholds are set by you, per workflow, and the handover
                carries full context so the person picking it up is not starting cold. You decide how much
                autonomy each workflow is given.
              </div>
            </details>
            <details>
              <summary>
                How do we reconstruct what an agent did?
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
                Every decision is logged with its inputs and traced to source, so a specific case can be
                replayed and defended long after the fact. That is a design requirement here, which is why the
                evidence exists before anyone asks for it.
              </div>
            </details>
            <details>
              <summary>
                Will this reach systems that expose no API?
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
                Agents operate desktop and browser applications directly, which is how a mainframe terminal or
                a vendor product with no integration surface comes into scope. Voice is handled on the same
                terms, including lines that are rarely clean.
              </div>
            </details>
            <details>
              <summary>
                Who operates it once it is live?
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
                We do, inside your environment, and we answer for what it produces. The working system is the
                deliverable, and the number agreed at the start is the one reported against afterwards.
              </div>
            </details>
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
                  Tell us the number you need to <span className="text-teal">move.</span>
                </h2>
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
