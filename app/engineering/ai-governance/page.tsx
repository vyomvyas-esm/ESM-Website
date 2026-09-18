import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { graph, service } from "@/lib/jsonld";
import { services } from "@/data/page-schema";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "AI Governance",
  description:
    "We engineer the governance, traceability and human oversight that let an enterprise put AI into production and defend it afterwards.",
  path: "/engineering/ai-governance/",
});
export default function SvcGovernancePage() {
  return (
    <main className="page" id="page-svc-governance">
      <JsonLd data={graph(service(services["svc-governance"]))} />
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[86px] pb-[132px]">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Engineering" }, { label: "AI Governance" }]}
          />
          <h1 className="h-hero mt-6 max-w-[15ch] rv" data-d="60">
            Governance a regulator will accept.
          </h1>
          <p className="lede hero-lede mt-5 max-w-[560px] rv" data-d="120">
            We engineer the governance, traceability and human oversight that let an enterprise put AI into
            production and defend it afterwards.
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
                Assurance your enterprise can <span className="text-white/40">stand behind.</span>
              </h2>
              <p className="mt-7 max-w-[48ch] text-[12.5px] leading-[1.9] text-white/45">
                An operating architecture and risk framework shaped by how your institution is actually
                governed. Controls, evaluations and evidence are engineered into the system from the start and
                remain visible throughout its operation.
              </p>
            </div>
            <div className="num-list">
              <div className="num-row rv" data-d="0">
                <span className="num-idx">01</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Designed in from the start.</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Model risk, evaluation criteria and red teaming are engineered into the system from the
                    first sprint and carried through deployment.
                  </p>
                </div>
              </div>
              <div className="num-row rv" data-d="70">
                <span className="num-idx">02</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Evidence when it matters.</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Every decision, evaluation and control leaves a documented trail that can support internal
                    review, audit and regulatory scrutiny.
                  </p>
                </div>
              </div>
              <div className="num-row rv" data-d="140">
                <span className="num-idx">03</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Monitored in operation.</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Systems are continuously tested and monitored, with checks recorded over time so
                    performance and compliance remain visible.
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
              <span className="eyebrow rv">The scrutiny stack</span>
              <h2 className="h-sec">
                Six controls, designed in <span className="text-white/40">from the start.</span>
              </h2>
            </div>
            <div className="ctrl-grid">
              <div className="ctrl-col rv" data-d="0">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Governance &amp; audit trails
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Every decision logged, every action traceable and independently reviewable after the fact.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="70">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">Explainability</h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Inline citations, confidence scoring and source attribution on the responses that matter.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="140">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">Human oversight</h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Consequential decisions escalate to a person, so a human is always in the loop.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="210">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Security &amp; privacy
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  AES-256 encryption, PII masking, and isolated hosting environments by default.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="280">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Role-based access
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Controlled admission of sources, with least-privilege access designed in from the start.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="350">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  ISO 27001 certified
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  An information-security foundation that is independently audited and actively maintained.
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
                The reviews AI has <span className="text-white/40">to pass.</span>
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
            <Link className="csr rv" data-d="80" href="/case-studies/indian-school-of-business/">
              <span
                className="clogo csr-logo logow-isb opacity-70"
                role="img"
                aria-label="Indian School of Business · iVi"
              ></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">Indian School of Business · iVi</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                  A candidate screen that stays consistent, explainable and blind to fluency bias.
                </p>
              </div>
              <div className="csr-figs">
                <div className="csr-fig">
                  <div className="n tally">~97%</div>
                  <div className="l">concordance with faculty</div>
                </div>
                <div className="csr-fig">
                  <div className="n tally">~80%</div>
                  <div className="l">less evaluation time</div>
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
                Is this a policy document or a working control?
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
                It is a working control. The framework maps to how your institution is actually governed, and
                the controls are the ones the system operates inside, so a claim made in the policy can be
                evidenced from the system instead of asserted about it.
              </div>
            </details>
            <details>
              <summary>
                What does an auditor or a regulator actually receive?
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
                The decision record for the case in question, with its inputs, the model version that acted
                and the policy that governed it. Evidence is emitted at decision time, which is what makes it
                available months later when the question finally arrives.
              </div>
            </details>
            <details>
              <summary>
                How does this sit with our model-risk function?
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
                Explainability, monitoring and red-teaming are designed in, so model risk reviews artefacts
                the system produces continuously instead of commissioning a study each cycle. Drift and
                fairness are tracked against thresholds you define, and a breach surfaces as an event.
              </div>
            </details>
            <details>
              <summary>
                Can this cover AI we did not engineer?
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
                Often it can be done. The controls attach to decisions and their evidence, so an existing
                system can be brought inside the same audit trail and oversight regime, provided it can expose
                what it did and why.
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
