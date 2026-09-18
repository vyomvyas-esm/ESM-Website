import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Technology",
  description:
    "The components we engineer with, selected for what holds up in production inside a regulated estate.",
  path: "/technology/",
});
export default function StackPage() {
  return (
    <main className="page" id="page-stack">
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[88px]">
          <nav className="crumb rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">·</span>
            <span className="text-white/45">Company</span>
            <span className="sep">·</span>
            <span aria-current="page">Technology</span>
          </nav>
          <h1 className="h-hero mt-6 max-w-[15ch] rv" data-d="60">
            The stack we operate on.
          </h1>
          <p className="lede mt-5 max-w-[660px] rv" data-d="120">
            The components we engineer with, selected for what holds up in production inside a regulated
            estate. We stay deliberately unopinionated at the model layer, because the right choice changes by
            use case, by jurisdiction and by month.
          </p>
          <p className="prose-lede mt-5 max-w-[760px] rv" data-d="90">
            These are components, and a component is not an operating system. The layer we own is the one
            above them: how a model is selected and swapped without a rebuild, how a decision is logged with
            its inputs, how an escalation reaches a person, and who answers when it goes wrong. Vendors
            change. That layer is what we operate, and it is what stays.
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
            </Link>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink pb-[110px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Technology</span>
          <h2 className="h-sec rv" data-d="60">
            What we engineer with.
          </h2>
          <div className="stk-grid mt-[52px]">
            <article className="stk-row rv" data-d="0">
              <div className="stk-head">
                <span className="stk-n">01</span>
                <h3 className="stk-h">Conversational AI</h3>
                <p className="stk-d">
                  Voice is the surface most enterprise AI never reaches. These are the engines behind
                  multilingual calling that holds up on a real line.
                </p>
              </div>
              <ul className="stk-list">
                <li className="stk-item">Sarvam</li>
                <li className="stk-item">Cartesia</li>
                <li className="stk-item">Google Chirp</li>
                <li className="stk-item">Deepgram</li>
              </ul>
            </article>
            <article className="stk-row rv" data-d="60">
              <div className="stk-head">
                <span className="stk-n">02</span>
                <h3 className="stk-h">AI models</h3>
                <p className="stk-d">
                  Routed per task rather than standardised on one. A model can be swapped without touching the
                  workflow above it, which is what keeps a deployment from ageing badly.
                </p>
              </div>
              <ul className="stk-list">
                <li className="stk-item">Claude</li>
                <li className="stk-item">OpenAI</li>
                <li className="stk-item">Gemini</li>
                <li className="stk-item">Llama</li>
                <li className="stk-item">DeepSeek</li>
                <li className="stk-item">Qwen</li>
              </ul>
            </article>
            <article className="stk-row rv" data-d="120">
              <div className="stk-head">
                <span className="stk-n">03</span>
                <h3 className="stk-h">Telephony</h3>
                <p className="stk-d">
                  The carriage layer for inbound and outbound calling, including the numbering, routing and
                  recording obligations that come with it in India.
                </p>
              </div>
              <ul className="stk-list">
                <li className="stk-item">Exotel</li>
                <li className="stk-item">Plivo</li>
              </ul>
            </article>
            <article className="stk-row rv" data-d="180">
              <div className="stk-head">
                <span className="stk-n">04</span>
                <h3 className="stk-h">Agent frameworks and orchestration</h3>
                <p className="stk-d">
                  Where the sequence of an agentic workflow is defined, held and recovered, so a long task
                  survives a failure part of the way through.
                </p>
              </div>
              <ul className="stk-list">
                <li className="stk-item">LangGraph</li>
                <li className="stk-item">LangChain</li>
              </ul>
            </article>
            <article className="stk-row rv" data-d="240">
              <div className="stk-head">
                <span className="stk-n">05</span>
                <h3 className="stk-h">Observability and evaluation</h3>
                <p className="stk-d">
                  Traces, evaluation records and dashboards. This is the layer that turns a claim about
                  performance into something a reviewer can check.
                </p>
              </div>
              <ul className="stk-list">
                <li className="stk-item">Langfuse</li>
                <li className="stk-item">Grafana</li>
              </ul>
            </article>
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
