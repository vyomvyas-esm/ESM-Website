import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Enterprise AI",
  description:
    "We unify knowledge, data, and workflows into a foundation AI can reason over, ensuring every answer is traceable to source.",
  path: "/engineering/enterprise-ai/",
});
export default function SvcModernisationPage() {
  return (
    <main className="page" id="page-svc-modernisation">
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[86px] pb-[132px]">
          <nav className="crumb rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">·</span> <span className="text-white/45">Engineering</span>
            <span className="sep">·</span>
            <span aria-current="page">Enterprise AI</span>
          </nav>
          <h1 className="h-hero mt-6 max-w-[15ch] rv" data-d="60">
            A foundation your AI can operate on.
          </h1>
          <p className="lede hero-lede mt-5 max-w-[560px] rv" data-d="120">
            We unify knowledge, data, and workflows into a foundation AI can reason over, ensuring every
            answer is traceable to source.
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
                A foundation your enterprise <span className="text-white/40">can extend.</span>
              </h2>
              <p className="mt-7 max-w-[48ch] text-[12.5px] leading-[1.9] text-white/45">
                Turn fragmented institutional knowledge into a reliable, usable layer across documents,
                systems and conversations. Make information searchable, traceable and actionable without
                forcing teams to replace the systems they already depend on.
              </p>
            </div>
            <div className="num-list">
              <div className="num-row rv" data-d="0">
                <span className="num-idx">01</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Knowledge that drives work.</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Turn scattered information into useful outputs, from reports and audits to decisions and
                    actions across the tools your teams already use.
                  </p>
                </div>
              </div>
              <div className="num-row rv" data-d="70">
                <span className="num-idx">02</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Engineered for every source.</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Bring together documents, structured data, conversations and legacy systems through OCR,
                    extraction and intelligent retrieval.
                  </p>
                </div>
              </div>
              <div className="num-row rv" data-d="140">
                <span className="num-idx">03</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Connected to the workflow.</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Move beyond search by connecting knowledge directly to the processes where work happens,
                    so information can drive decisions and action.
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
              <span className="eyebrow rv">Where the answers come from</span>
              <h2 className="h-sec">
                A confident wrong answer is <span className="text-white/40">the expensive kind.</span>
              </h2>
            </div>
            <div className="ctrl-grid">
              <div className="ctrl-col rv" data-d="0">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Traceable to source
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Every answer traced to the source document, so a reviewer can check the work rather than
                  take it on trust.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="70">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Controlled admission
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Sources admitted under role-based access and PII filtering, so the system reasons only over
                  what it should.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="140">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Checked in the path
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Hallucination checks and confidence scoring in the answer path, because an unchecked answer
                  is a liability.
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
                Knowledge the enterprise keeps <span className="text-white/40">searching by hand.</span>
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
            <Link className="csr rv" data-d="0" href="/case-studies/koita-foundation/">
              <span
                className="clogo csr-logo logow-koita opacity-70"
                role="img"
                aria-label="Koita Foundation"
              ></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">Koita Foundation</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                  A large body of digital-health material made answerable, traceable to source.
                </p>
              </div>
              <div className="csr-figs">
                <div className="csr-fig">
                  <div className="n tally">~80%</div>
                  <div className="l">less information-discovery time</div>
                </div>
                <div className="csr-fig">
                  <div className="n tally">7+</div>
                  <div className="l">repositories unified</div>
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
            <Link className="csr rv" data-d="80" href="/case-studies/indusind-bank/">
              <span
                className="clogo csr-logo logow-indusind opacity-70"
                role="img"
                aria-label="IndusInd Bank"
              ></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">IndusInd Bank</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                  Policy documents turned into 150+ AI video modules, with no trainer dependency.
                </p>
              </div>
              <div className="csr-figs">
                <div className="csr-fig">
                  <div className="n tally">50,000+</div>
                  <div className="l">employees trained</div>
                </div>
                <div className="csr-fig">
                  <div className="n tally">150+</div>
                  <div className="l">AI training videos</div>
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
                Do we have to move our data anywhere?
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
                Nothing has to move. The retrieval layer sits over what you already hold, inside your
                environment, and entitlements are inherited from the source systems. A migration programme is
                usually the reason this work stalls for two years before anything reaches production.
              </div>
            </details>
            <details>
              <summary>
                What stops a confident wrong answer?
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
                Grounding, and a citation attached to every response. Each answer is traced to the source
                document and carries a confidence score, so a reviewer checks the passage instead of trusting
                the phrasing. Where the material does not support an answer, the system says so.
              </div>
            </details>
            <details>
              <summary>
                What about the material that was never structured?
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
                That is most of the estate. Scans, handwritten annotations, tables buried inside PDFs and
                recordings of meetings are processed into the same retrievable layer, which is what makes
                institutional knowledge answerable instead of merely stored.
              </div>
            </details>
            <details>
              <summary>
                How does this connect to systems that predate all of it?
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
                Through whatever surface exists, including screen-level operation where no API does. The
                foundation is judged by whether an answer traces back to something authoritative, whatever the
                age of the system it came from.
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
