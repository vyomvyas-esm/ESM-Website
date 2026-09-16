import type { Metadata } from "next";
import Link from "next/link";
import { Waveform } from "@/components/Waveform";
import { PyzoPanels } from "@/components/PyzoPanels";
import { FoundationLedger } from "@/components/FoundationLedger";
export const metadata: Metadata = {
  title: "PYZO - Six capabilities. One hardened foundation.",
};
export default function PyzoPage() {
  return (
    <main className="page" id="page-pyzo">
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[96px]">
          <nav className="crumb rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">·</span>
            <span aria-current="page">PYZO</span>
          </nav>
          <h1 className="h-hero mt-6 max-w-[15ch] rv" data-d="60">
            Six capabilities. One hardened foundation.
          </h1>
          <p className="lede mt-5 max-w-[620px] rv" data-d="120">
            A unified agentic AI platform where every product shares the same core services, making
            deployments more reliable, scalable, and easier to govern.
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
            <a className="btn btn-ghost" href="#pyzo-proof">
              See the Proof
            </a>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">The suite</span>
          <h2 className="h-sec rv" data-d="60">
            What each capability does.
          </h2>
          <div className="mt-[62px] grid gap-4 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <Link className="card card-lit flex h-[336px] flex-col p-5 text-left rv" href="/pyzo/atlas">
                <div className="bento-art">
                  <div className="mock mb-4 overflow-hidden">
                    <div className="art-film on-dark relative h-[86px]">
                      <span className="absolute inset-0 grid place-items-center">
                        <span className="grid h-8 w-8 place-items-center rounded-full bg-white/90 text-ink">
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
                            <path d="M3.6 2.2 9.4 6l-5.8 3.8z" />
                          </svg>
                        </span>
                      </span>{" "}
                      <span className="absolute left-2 top-2 rounded bg-black/45 px-1.5 py-0.5 text-[7px] tracking-[.12em] text-white/70">
                        SOP 04 · AI TRAINER
                      </span>{" "}
                      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
                        <span className="block h-full w-[62%] bg-teal"></span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-2">
                      <span className="lang">EN</span>
                      <span className="lang">HI</span>
                      <span className="lang">TA</span>{" "}
                      <span className="ml-auto text-[7.5px] text-white/35">Assessment 8/10</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-[15px] font-medium">
                  <span className="pzlogo pz-card-logo pzlogo-atlas" role="img" aria-label="Atlas"></span>
                </h3>
                <p className="mt-[3px] text-[11.5px] text-teal/85">Training Coach</p>
                <p className="mt-3 text-[11.5px] leading-[1.65] text-white/45">
                  Turns SOPs into on-demand multilingual training, delivered by an AI avatar of your best
                  trainer.
                </p>
              </Link>{" "}
              <Link className="card flex h-[300px] flex-col p-5 text-left rv" href="/pyzo/forge">
                <div className="bento-art">
                  <div className="mock mb-5 p-3">
                    <div className="flex items-center">
                      <span className="node">CRM</span>
                      <span className="hop"></span> <span className="node">ERP</span>
                      <span className="hop"></span> <span className="node">Portal</span>
                    </div>
                    <div className="mt-3 space-y-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="tick ok"></span>
                        <span className="text-[7.5px] text-white/45">Extract claim, 214 rows</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="tick warn"></span>
                        <span className="text-[7.5px] text-white/45">Field moved, selector repaired</span>
                        <span className="ml-auto text-[7px] text-teal">self-healed</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="tick ok"></span>
                        <span className="text-[7.5px] text-white/45">Posted to queue</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-[15px] font-medium">
                  <span className="pzlogo pz-card-logo pzlogo-forge" role="img" aria-label="Forge"></span>
                </h3>
                <p className="mt-[3px] text-[11.5px] text-teal/85">Workflow Executor</p>
                <p className="mt-3 text-[11.5px] leading-[1.65] text-white/45">
                  Automates workflows across desktop and browser applications, and repairs its own broken
                  steps.
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link className="card flex h-[300px] flex-col p-5 text-left rv" href="/pyzo/evio">
                <div className="bento-art">
                  <div className="art-media relative mb-5 h-[118px] overflow-hidden rounded-[8px]">
                    <Waveform
                      n={40}
                      className="absolute inset-0 flex items-center justify-center gap-[3px]"
                    />
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="grid h-10 w-10 place-items-center rounded-full art-dot">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6.6 3.5c.5-.3 1.2-.2 1.6.3l2 2.6c.4.5.3 1.2-.2 1.6l-1.3 1c-.3.2-.4.6-.2.9a12 12 0 0 0 4.6 4.6c.3.2.7.1.9-.2l1-1.3c.4-.5 1.1-.6 1.6-.2l2.6 2c.5.4.6 1.1.3 1.6l-1.2 1.9c-.5.8-1.5 1.2-2.4 1A16.8 16.8 0 0 1 4.4 7.2c-.2-.9.2-1.9 1-2.4Z" />
                        </svg>
                      </span>
                    </div>
                    <span className="art-pill absolute left-2 top-2">LIVE · 15 LANGUAGES</span>
                    <span className="art-pill art-pill-accent absolute bottom-2 right-2">
                      Transfer to human
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-[15px] font-medium">
                  <span className="pzlogo pz-card-logo pzlogo-evio" role="img" aria-label="Evio"></span>
                </h3>
                <p className="mt-[3px] text-[11.5px] text-teal/85">Call Operator</p>
                <p className="mt-3 text-[11.5px] leading-[1.65] text-white/45">
                  Handles inbound and outbound calls in 15+ languages, and transfers to a human when needed.
                </p>
              </Link>{" "}
              <Link className="card flex h-[336px] flex-col p-5 text-left rv" href="/pyzo/loupe">
                <div className="bento-art">
                  <div className="mock mb-5 p-3">
                    <div className="space-y-1.5">
                      <div className="frow">
                        <span className="flab">PAN</span>
                        <span className="fval">ABCDE1234F</span>
                        <span className="tick ok"></span>
                      </div>
                      <div className="frow">
                        <span className="flab">Turnover</span>
                        <span className="fval">₹4.2 Cr</span>
                        <span className="tick ok"></span>
                      </div>
                      <div className="frow is-flagged">
                        <span className="flab">GST cert</span>
                        <span className="fval">expired 03/24</span>
                        <span className="tick warn"></span>
                      </div>
                    </div>
                    <div className="mt-2.5 flex items-center gap-1.5 border-t border-white/10 pt-2">
                      <span className="text-[7px] text-white/35">12 of 14 fields complete</span>{" "}
                      <span className="ml-auto text-[7px] text-teal">2 to fix before submit</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-[15px] font-medium">
                  <span className="pzlogo pz-card-logo pzlogo-loupe" role="img" aria-label="Loupe"></span>
                </h3>
                <p className="mt-[3px] text-[11.5px] text-teal/85">Application Assistant</p>
                <p className="mt-3 text-[11.5px] leading-[1.65] text-white/45">
                  Guides and validates complex applications field by field, for applicant and reviewer alike.
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link className="card card-lit flex h-[354px] flex-col p-5 text-left rv" href="/pyzo/compass">
                <div className="bento-art">
                  <div className="mock mb-4 p-2.5">
                    <div className="flex items-center gap-1.5 rounded-[6px] border border-white/10 bg-white/[.04] px-2 py-1.5">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="shrink-0 text-teal"
                      >
                        <circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.4" />
                        <path
                          d="m10.6 10.6 3 3"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>{" "}
                      <span className="text-[7.5px] text-white/60">
                        Which branches missed SLA last quarter?
                      </span>
                    </div>
                    <div className="mt-3 flex items-end gap-1.5">
                      <span className="cbar" style={{ height: "14px" }}></span>
                      <span className="cbar" style={{ height: "22px" }}></span>
                      <span className="cbar" style={{ height: "11px" }}></span>
                      <span className="cbar" style={{ height: "27px" }}></span>
                      <span className="cbar" style={{ height: "18px" }}></span>
                      <span className="cbar" style={{ height: "31px" }}></span>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5">
                      <span className="src">Policy v4.2</span>
                      <span className="src">Ops ledger</span>{" "}
                      <span className="ml-auto text-[7px] text-teal/80">3 sources cited</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-[15px] font-medium">
                  <span className="pzlogo pz-card-logo pzlogo-compass" role="img" aria-label="Compass"></span>
                </h3>
                <p className="mt-[3px] text-[11.5px] text-teal/85">Business Analyst</p>
                <p className="mt-3 text-[11.5px] leading-[1.65] text-white/45">
                  Retrieves institutional knowledge and leverages it to execute customisable actions across
                  functions.
                </p>
              </Link>{" "}
              <Link className="card flex h-[282px] flex-col p-5 text-left rv" href="/pyzo/prism">
                <div className="bento-art">
                  <div className="mock mb-5 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] tracking-[.12em] text-white/40">RUBRIC v3</span>{" "}
                      <span className="rounded-full border border-teal/40 bg-teal/10 px-2 py-0.5 text-[8px] text-teal">
                        Score 79
                      </span>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-[64px] shrink-0 text-[7.5px] text-white/45">Evidence quality</span>
                        <span className="bar flex-1">
                          <span
                            className="block h-full rounded-[2px] bg-teal/70"
                            style={{ width: "82%" }}
                          ></span>
                        </span>
                        <span className="w-[16px] text-right text-[7.5px] text-white/60">82</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-[64px] shrink-0 text-[7.5px] text-white/45">Policy fit</span>
                        <span className="bar flex-1">
                          <span
                            className="block h-full rounded-[2px] bg-teal/70"
                            style={{ width: "64%" }}
                          ></span>
                        </span>
                        <span className="w-[16px] text-right text-[7.5px] text-white/60">64</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-[64px] shrink-0 text-[7.5px] text-white/45">Risk flags</span>
                        <span className="bar flex-1">
                          <span
                            className="block h-full rounded-[2px] bg-teal/70"
                            style={{ width: "91%" }}
                          ></span>
                        </span>
                        <span className="w-[16px] text-right text-[7.5px] text-white/60">91</span>
                      </div>
                    </div>
                    <p className="mt-3 text-[7px] leading-[1.5] text-white/30">
                      Scored against the rubric you defined, with the reasoning kept.
                    </p>
                  </div>
                </div>
                <h3 className="font-display text-[15px] font-medium">
                  <span className="pzlogo pz-card-logo pzlogo-prism" role="img" aria-label="Prism"></span>
                </h3>
                <p className="mt-[3px] text-[11.5px] text-teal/85">Evaluation Consultant</p>
                <p className="mt-3 text-[11.5px] leading-[1.65] text-white/45">
                  Scores any file against a rubric you define, with judgement you can defend afterwards.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="glow-top" aria-hidden="true"></div>
          <span className="eyebrow rv">Composable by design</span>
          <h2 className="h-sec rv" data-d="60">
            One foundation beneath all six.
          </h2>
          <p className="lede mt-5 max-w-[620px] rv" data-d="100">
            Twelve reusable layers, engineered once and hardened with every deployment since.
          </p>
          <FoundationLedger />
          <p className="mt-12 text-[11.5px] text-teal/85 rv">
            Enterprise-grade by construction:{" "}
            <span className="text-white/45">
              PII masking · AES-256 encryption · isolated hosting · role-based access · ISO 27001 certified
            </span>
          </p>
        </div>
      </section>
      <section id="pyzo-proof" className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Measured in production</span>
          <h2 className="h-sec rv" data-d="60">
            The same capabilities, in production.
          </h2>
          <PyzoPanels />
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
                How is PYZO different from engineering on a raw LLM?{" "}
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
                A capable model wired to a prompt gives you a demo. PYZO is the engineering and operational
                layer on top of it, orchestration, retrieval, guardrails, evaluation and monitoring, so the
                system operates unattended and holds up under audit.
              </div>
            </details>
            <details>
              <summary>
                Do the six capabilities work independently, or together?{" "}
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
                Both. Each capability solves a discrete problem on its own, and all six sit on one shared
                foundation, so they interoperate cleanly and every deployment strengthens the next.
              </div>
            </details>
            <details>
              <summary>
                Can PYZO operate inside our own environment?{" "}
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
                so your data stays where your policies require it to.
              </div>
            </details>
            <details>
              <summary>
                How do you keep it auditable and compliant?{" "}
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
                Every decision is logged and traceable to source, with a person kept on the consequential
                calls. PII masking, AES-256 encryption, role-based access and ISO 27001 certification are
                engineered in from the foundation.
              </div>
            </details>
            <details>
              <summary>
                What does the shared foundation actually give us?{" "}
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
                Twelve reusable layers, hardened across regulated deployments. A new use case inherits proven
                orchestration, safety and governance instead of starting from scratch.
              </div>
            </details>
            <details>
              <summary>
                How quickly can we go live?{" "}
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
                A discovery conversation takes about a week. A proof of concept, engineered in your
                environment, follows in two to three.
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
                  Your Use Case. <span className="text-teal">One Shared Foundation.</span>
                </h2>
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
