import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Forge, Workflow Executor - PYZO",
  description: "Where Forge executes real work across the applications each industry actually relies on.",
  path: "/pyzo/forge/",
});
export default function PyzoForgePage() {
  return (
    <main className="page" id="page-pyzo-forge">
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[92px]">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_360px]">
            <div>
              <nav className="crumb rv" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span className="sep">·</span> <Link href="/pyzo/">PYZO</Link>
                <span className="sep">·</span> <span aria-current="page">Forge</span>
              </nav>
              <span
                className="pzlogo pz-hero-logo pzlogo-forge rv"
                data-d="30"
                role="img"
                aria-label="Forge"
              ></span>
              <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
                Automation that doesn’t fall over.
              </h1>
              <p className="lede mt-5 max-w-[640px] rv" data-d="120">
                Forge executes real workflows on a device, moving across desktop and browser applications the
                way an operator would, including the legacy systems that expose no API to call.
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
            <div className="hidden lg:block rv" data-d="140">
              <div className="ph relative h-[260px] w-full overflow-hidden rounded-[14px] border border-hair">
                <div className="ph-grid"></div>
                <svg
                  className="absolute inset-0 h-full w-full opacity-80"
                  viewBox="0 0 320 200"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="52"
                    y="56"
                    width="92"
                    height="86"
                    rx="8"
                    stroke="#8CEEF7"
                    strokeWidth=".9"
                    opacity=".6"
                  />
                  <rect
                    x="176"
                    y="56"
                    width="92"
                    height="86"
                    rx="8"
                    stroke="#8CEEF7"
                    strokeWidth=".9"
                    opacity=".6"
                  />
                  <path d="M144 99h32" stroke="#3ADCC5" strokeWidth="1" />
                  <circle cx="160" cy="99" r="5" fill="#3ADCC5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(280px,1fr)_2fr] lg:gap-16">
            <div className="rv">
              <span className="eyebrow rv">What it delivers</span>
              <h2 className="h-sec max-w-[13ch]">
                It repairs itself instead of <span className="text-white/40">stopping the queue.</span>
              </h2>
              <p className="mt-7 max-w-[46ch] text-[12.5px] leading-[1.9] text-white/45">
                When an interface or a step changes, Forge heals rather than breaking quietly. Every action is
                logged, so the work can be reviewed after the fact, and routine transcription errors
                disappear, because each step executes identically every time.
              </p>
            </div>
            <ul className="uc-list">
              <li className="uc-row rv" data-d="0">
                <span className="us-n">01</span>
                <span className="uc-t">Quote &amp; order processing</span>
                <span className="uc-a">
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
              </li>
              <li className="uc-row rv" data-d="60">
                <span className="us-n">02</span>
                <span className="uc-t">Reconciliation &amp; settlement</span>
                <span className="uc-a">
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
              </li>
              <li className="uc-row rv" data-d="120">
                <span className="us-n">03</span>
                <span className="uc-t">Filing across legacy systems</span>
                <span className="uc-a">
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
              </li>
              <li className="uc-row rv" data-d="180">
                <span className="us-n">04</span>
                <span className="uc-t">Back-office data entry</span>
                <span className="uc-a">
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
              </li>
              <li className="uc-row rv" data-d="240">
                <span className="us-n">05</span>
                <span className="uc-t">Claims &amp; document processing</span>
                <span className="uc-a">
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
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink pb-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="glow-top" aria-hidden="true"></div>
          <span className="eyebrow rv">In production</span>
          <h2 className="h-sec rv" data-d="60">
            Deployed, and measured.
          </h2>
          <div className="mt-[46px]">
            <Link className="csr rv" data-d="0" href="/case-studies/epic-global/">
              <span
                className="clogo csr-logo logow-epic opacity-70"
                role="img"
                aria-label="Epic Global Inc."
              ></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">Epic Global Inc.</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                  Compliant listings generated and catalogues migrated across global marketplaces.
                </p>
              </div>
              <div className="csr-figs">
                <div className="csr-fig">
                  <div className="n tally">~65%</div>
                  <div className="l">faster listing turnaround</div>
                </div>
                <div className="csr-fig">
                  <div className="n tally">~80%</div>
                  <div className="l">fewer redundant man-hours</div>
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
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Across your industries</span>
          <h2 className="h-sec max-w-[20ch] rv" data-d="60">
            Workflows that execute on their own, in every industry.
          </h2>
          <p className="lede mt-5 max-w-[620px] rv" data-d="100">
            Where Forge executes real work across the applications each industry actually relies on.
          </p>
          <div className="us-grid mt-[46px]">
            <article className="us-cell rv" data-d="0">
              <span className="us-n">01</span>
              <div className="us-body">
                <h3 className="us-h">BFSI</h3>
                <p className="us-p">
                  Reconciliation breaks, disbursement steps and case routing executed across core banking, the
                  LMS and the CRM, including the systems that were never designed to talk to one another.
                </p>
                <Link className="us-go group" href="/industries/bfsi/">
                  Explore BFSI
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
                <h3 className="us-h">Healthcare</h3>
                <p className="us-p">
                  Submission assembly, deviation and complaint records, and training reconciliation moved
                  across the QMS, the LIMS and the ERP without a person retyping between them or a record
                  falling behind.
                </p>
                <Link className="us-go group" href="/industries/healthcare/">
                  Explore Healthcare
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
                <h3 className="us-h">Public Sector</h3>
                <p className="us-p">
                  Records and applications moved between departmental systems, so a citizen is never asked for
                  what one department already holds, with the status returned to the channel they used.
                </p>
                <Link className="us-go group" href="/industries/public-sector/">
                  Explore Public Sector
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
                <h3 className="us-h">Retail</h3>
                <p className="us-p">
                  Order, inventory and returns exceptions worked end to end across commerce, the WMS and the
                  ERP, at the volume a peak week actually produces rather than the volume a demo assumes.
                </p>
                <Link className="us-go group" href="/industries/retail/">
                  Explore Retail
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
      <section className="relative overflow-hidden bg-ink pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">FAQ</span>
          <h2 className="h-sec rv" data-d="60">
            Questions we get asked.
          </h2>
          <div className="faq wide-block mt-9 rv" data-d="100">
            <details>
              <summary>
                What happens when a screen or a step changes?
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
                Forge repairs itself and keeps the queue moving, which is the difference between an automation
                that survives a vendor’s interface update and one that stops overnight. Where it cannot repair
                itself it halts on that item and raises it, instead of continuing against a changed screen and
                doing quiet damage.
              </div>
            </details>
            <details>
              <summary>
                Do our legacy systems need to expose an API?
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
                No, and that is usually the point. Forge operates the application the way an operator would,
                across desktop and browser, so a mainframe terminal or a vendor product with no integration
                surface is still reachable. Where an API does exist, it gets used.
              </div>
            </details>
            <details>
              <summary>
                How is the work reviewed after the fact?
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
                Every action is logged at step level with what was read and what was written, so a completed
                item can be reconstructed and a disputed one examined. Transcription errors largely disappear,
                because each step executes identically however long the queue has been open.
              </div>
            </details>
            <details>
              <summary>
                Where does a person stay involved?
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
                On exceptions, and on anything you designate as consequential. The queue clears the routine
                volume and a named human owns the items that carry real cost, which is also what keeps the
                audit trail meaningful.
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
