import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { graph, service } from "@/lib/jsonld";
import { services } from "@/data/page-schema";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Evio, Voice Operator - PYZO",
  description:
    "Manages high-volume voice conversations across 15+ languages with automated intent routing and seamless human handoff.",
  path: "/pyzo/evio/",
});
export default function PyzoEvioPage() {
  return (
    <main className="page" id="page-pyzo-evio">
      <JsonLd data={graph(service(services["pyzo-evio"]))} />
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[96px]">
          <div className="grid items-center gap-12">
            <div>
              <Breadcrumbs items={[{ label: "PYZO", href: "/pyzo/" }, { label: "Evio" }]} />
              <span
                className="pzlogo pz-hero-logo pzlogo-evio pzh-evio rv"
                data-d="30"
                role="img"
                aria-label="Evio"
              ></span>
              <h1 className="h-hero mt-6 max-w-[22ch] rv" data-d="60">
                Voice conversations in the caller’s own language
              </h1>
              <p className="lede mt-5 max-w-[640px] rv" data-d="120">
                Manages high-volume voice conversations across 15+ languages with automated intent routing and
                seamless human handoff.
              </p>
              <div className="mt-8 rv" data-d="200">
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
      <section className="relative overflow-hidden bg-ink pt-[96px] pb-[96px]">
        <div className="pa-wrap relative px-6 lg:px-8">
          <span className="eyebrow rv">How it works</span>
          <h2 className="h-sec rv" data-d="60">
            Inside your environment
          </h2>
          <div className="mt-[46px] rv" data-d="120">
            <div data-pyzo-arch="evio" data-head="off"></div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink pb-0">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="glow-top" aria-hidden="true"></div>
          <span className="eyebrow rv">Proof in production</span>
          <h2 className="h-sec rv" data-d="60">
            Governed outcomes, proven in production
          </h2>
          <div className="mt-[46px]">
            <div className="ca-row ca-static rv" data-d="0">
              <div className="ca-hd">
                <span className="clogo ca-logo logow-rbi" role="img" aria-label="RBI Innovation Hub"></span>
                <span className="ca-head">
                  81% reduction in TAT with a voice-first grievance protocol for banking
                </span>
              </div>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">81%</div>
                      <div className="l">Lower turnaround time</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">2 min</div>
                      <div className="l">Average registration time</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">12+</div>
                      <div className="l">Indic languages</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    A multilingual, voice-first grievance protocol that ensures audit-ready execution in
                    adherence to complex regulatory mandates for tier-one banking.
                  </p>
                  <Link className="ca-link group" href="/case-studies/rbi-innovation-hub/">
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
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Across your industries</span>
          <h2 className="h-sec rv" data-d="60">
            Conversations that scale, in every industry
          </h2>
          <div className="cs-acc pi-acc mt-[46px]">
            <details className="ca-row pi-row rv" data-d="0" open>
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="pi-ind">
                  <span className="pi-ind-ic">
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 2.6 17 6H3Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 8.4v6M8.3 8.4v6M11.7 8.4v6M15 8.4v6M3 16.4h14"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="pi-ind-n">BFSI</span>
                </span>
                <span className="ca-head">
                  Collections and verification calls at a volume no contact centre could staff
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">EMI and card collections</h3>
                      <p className="pi-uc-x">
                        Evio holds recovery conversations for EMIs and cards in more than fifteen languages,
                        within the conduct rules for collections, and logs every call for review.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Autopay conversion and renewals</h3>
                      <p className="pi-uc-x">
                        Customers are called about autopay set-up and policy renewals at a volume no contact
                        centre could staff, with each outcome recorded.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Suspicious transaction verification</h3>
                      <p className="pi-uc-x">
                        When a transaction looks unusual, Evio calls the customer to verify it in their own
                        language and records the answer against the account.
                      </p>
                    </div>
                  </div>
                  <Link className="ca-link group" href="/industries/bfsi/">
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
                    Explore BFSI
                  </Link>
                </div>
              </div>
            </details>
            <details className="ca-row pi-row rv" data-d="50">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="pi-ind">
                  <span className="pi-ind-ic">
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M2.5 10h3.2l1.6-4 2.6 8.6 2-4.6h5.6"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="pi-ind-n">Healthcare</span>
                </span>
                <span className="ca-head">
                  Patient support calls around the clock, with every adverse event captured
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Adherence and refill calls</h3>
                      <p className="pi-uc-x">
                        Patients in support programmes receive adherence and refill calls around the clock in
                        their own language, with every response logged.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Adverse-event intake on the call</h3>
                      <p className="pi-uc-x">
                        Any mention of an adverse event is captured on the call with the minimum dataset
                        complete, ready for your safety team to process.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Outreach to healthcare professionals</h3>
                      <p className="pi-uc-x">
                        Evio reaches doctors and pharmacists where field coverage does not, sharing approved
                        information and logging each conversation.
                      </p>
                    </div>
                  </div>
                  <Link className="ca-link group" href="/industries/healthcare/">
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
                    Explore Healthcare
                  </Link>
                </div>
              </div>
            </details>
            <details className="ca-row pi-row rv" data-d="100">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="pi-ind">
                  <span className="pi-ind-ic">
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 3v14M4.6 5.4h10.8M6.2 5.4 3.6 11h5.2ZM13.8 5.4 11.2 11h5.2ZM6.5 17h7"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="pi-ind-n">Public Sector</span>
                </span>
                <span className="ca-head">
                  Scheme outreach and grievance intake in the languages citizens speak
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Scheme outreach</h3>
                      <p className="pi-uc-x">
                        Citizens hear about schemes they qualify for in the language they speak, on any
                        handset, with no app required.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Grievance intake by voice</h3>
                      <p className="pi-uc-x">
                        Grievances are registered by voice in more than fifteen languages, and each caller
                        receives a reference they can quote when they follow up.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Eligibility verification and follow-up</h3>
                      <p className="pi-uc-x">
                        Evio verifies beneficiary details and follows up on pending applications, reaching
                        people who are not comfortable with English or online forms.
                      </p>
                    </div>
                  </div>
                  <Link className="ca-link group" href="/industries/public-sector/">
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
                    Explore Public Sector
                  </Link>
                </div>
              </div>
            </details>
            <details className="ca-row pi-row rv" data-d="150">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="pi-ind">
                  <span className="pi-ind-ic">
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4.6 6.4h10.8l-1 10.2H5.6ZM7.4 6.4V5a2.6 2.6 0 0 1 5.2 0v1.4"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="pi-ind-n">Retail</span>
                </span>
                <span className="ca-head">
                  Order and returns conversations that hold through peak-week volume
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Order and delivery updates</h3>
                      <p className="pi-uc-x">
                        Order and delivery conversations are handled end to end at peak-week volume, with each
                        customer told exactly where their order stands.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Returns conversations</h3>
                      <p className="pi-uc-x">
                        Returns requests are taken by voice at any hour, and the details pass straight to the
                        team or system that processes them.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Win-back and renewal calls</h3>
                      <p className="pi-uc-x">
                        Evio reaches customers who have gone quiet after a first purchase and recovers the
                        renewals and carts that would otherwise lapse.
                      </p>
                    </div>
                  </div>
                  <Link className="ca-link group" href="/industries/retail/">
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
                    Explore Retail
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
              data-ts="216"
              data-txt="evio, explained: voice ai that sounds human and holds up under compliance about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="0"
              href="/blog/evio-explained/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/108-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">EVIO, Explained</h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    7 March 2025
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
              data-ts="21"
              data-txt="scaling outbound conversations without adding headcount: a voice ai story about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="60"
              href="/blog/scaling-outbound-conversations-without-adding-headcount/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/303-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Scaling Outbound Without Headcount
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">5 June 2026</span>
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
              data-topic="Agentic AI"
              data-author="Shardul Singh"
              data-ts="16"
              data-txt="multilingual voice agents in production: quality across 15+ languages agentic ai shardul singh"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="120"
              href="/blog/operationalizing-multilingual-voice-agents/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/308-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Multilingual Voice Agents in Production
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">Agentic AI</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    17 June 2026
                  </span>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="byline">
                    <span className="av av-shardul" style={{ width: "26px", height: "26px" }}></span>
                    <span className="by-txt">
                      <span className="by-name">Shardul Singh</span>
                      <span className="by-role">CTO</span>
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
                <h2 className="h-cta max-w-[26ch] lg:max-w-none">
                  <span className="text-teal">AI</span> for enterprises with
                  <br className="hidden sm:block" /> every{" "}
                  <span className="text-teal">decision traceable</span> to its source
                </h2>
              </div>
              <div className="flex flex-col items-start lg:pt-2">
                <button type="button" data-pyzo-central="" className="btn btn-light group">
                  Start free trial
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
