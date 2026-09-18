import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Compass, Business Analyst - PYZO",
  description: "Where Compass makes a body of knowledge queryable, and puts it to work.",
  path: "/pyzo/compass/",
});
export default function PyzoCompassPage() {
  return (
    <main className="page" id="page-pyzo-compass">
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
                <span className="sep">·</span> <span aria-current="page">Compass</span>
              </nav>
              <span
                className="pzlogo pz-hero-logo pzlogo-compass rv"
                data-d="30"
                role="img"
                aria-label="Compass"
              ></span>
              <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
                Ask your company anything.
              </h1>
              <p className="lede mt-5 max-w-[640px] rv" data-d="120">
                Compass unifies institutional knowledge scattered across documents, systems and conversations
                into a single retrievable layer, then answers in plain language with an inline citation and a
                confidence score attached.
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
                  <circle cx="160" cy="100" r="52" stroke="#8CEEF7" strokeWidth=".9" opacity=".6" />
                  <path d="m140 120 26-46 14 46-40 0Z" fill="#3ADCC5" opacity=".55" />
                  <circle cx="160" cy="100" r="4" fill="#3ADCC5" />
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
                Corporate memory, <span className="text-white/40">made queryable.</span>
              </h2>
              <p className="mt-7 max-w-[46ch] text-[12.5px] leading-[1.9] text-white/45">
                The same reasoning engine works downstream, drafting reports, preparing compliance audits, and
                turning meeting outcomes into tracked items in Jira or GitHub. Answers stay traceable to
                source, so a reviewer can check the work rather than trust it.
              </p>
            </div>
            <ul className="uc-list">
              <li className="uc-row rv" data-d="0">
                <span className="us-n">01</span>
                <span className="uc-t">Policy &amp; product knowledge</span>
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
                <span className="uc-t">Compliance audit preparation</span>
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
                <span className="uc-t">Research &amp; literature discovery</span>
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
                <span className="uc-t">Meeting outcomes into delivery tools</span>
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
                <span className="uc-t">Proposal &amp; report drafting</span>
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
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Across your industries</span>
          <h2 className="h-sec max-w-[20ch] rv" data-d="60">
            Institutional knowledge, answerable in every industry.
          </h2>
          <p className="lede mt-5 max-w-[620px] rv" data-d="100">
            Where Compass makes a body of knowledge queryable, and puts it to work.
          </p>
          <div className="us-grid mt-[46px]">
            <article className="us-cell rv" data-d="0">
              <span className="us-n">01</span>
              <div className="us-body">
                <h3 className="us-h">BFSI</h3>
                <p className="us-p">
                  Credit policy, exception rules, KYC thresholds and branch SOPs answered inside the workflow,
                  so an underwriter, a teller or an agent is working from the version currently in force.
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
                  GMP procedures, current SOPs, regulatory guidance and labelling answered on the floor and in
                  the field, with every answer traceable to the controlled document behind it.
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
                  Standards, circulars and scheme rules made answerable in plain language for assessors,
                  officers and citizens, with a documented trail behind every answer and the clause it was
                  drawn from.
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
                  Product, returns and promotion rules answered the same way on chat, on the phone and at the
                  counter, without a ticket to the policy team and without the version drifting between
                  channels.
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
                How do we know an answer is right?
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
                Every answer carries an inline citation and a confidence score, so a reviewer opens the source
                passage and checks it instead of taking the phrasing on trust. Where the underlying material
                does not support an answer, Compass says so.
              </div>
            </details>
            <details>
              <summary>
                Does it respect who is allowed to see what?
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
                Retrieval inherits the entitlements you already have in the source systems, and they are
                enforced at retrieval time rather than filtered afterwards. A person asking a question sees
                only what they were already cleared to see, so a restricted document cannot surface inside a
                summary.
              </div>
            </details>
            <details>
              <summary>
                What happens when two documents contradict each other?
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
                Compass surfaces the conflict and cites both. A policy superseded in one circular and still
                live in another is precisely the situation a reviewer needs to know about, and resolving it is
                a governance decision. The system makes the disagreement visible instead of silently picking a
                side.
              </div>
            </details>
            <details>
              <summary>
                What does it do beyond answering questions?
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
                The same reasoning engine prepares compliance audits and drafts reports from material it has
                already indexed, and it turns the outcomes of a virtual meeting into tracked items in Jira or
                GitHub. Everything downstream stays traceable to the same sources.
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
