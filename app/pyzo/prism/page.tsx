import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Prism, Evaluation Consultant - PYZO",
  description:
    "Prism parses almost any input, audio, video, images or documents, and evaluates it against a rubric you define and defend.",
  path: "/pyzo/prism/",
});
export default function PyzoPrismPage() {
  return (
    <main className="page" id="page-pyzo-prism">
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
                <span className="sep">·</span> <span aria-current="page">Prism</span>
              </nav>
              <span
                className="pzlogo pz-hero-logo pzlogo-prism rv"
                data-d="30"
                role="img"
                aria-label="Prism"
              ></span>
              <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
                One fair rubric, applied identically every time.
              </h1>
              <p className="lede mt-5 max-w-[640px] rv" data-d="120">
                Prism parses almost any input, audio, video, images or documents, and evaluates it against a
                rubric you define and defend.
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
                  <path d="m160 44 62 108H98Z" stroke="#8CEEF7" strokeWidth=".9" opacity=".6" />
                  <path d="M120 118h80M136 96h48" stroke="#3ADCC5" strokeWidth=".9" opacity=".8" />
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
                Judgement you can <span className="text-white/40">defend afterwards.</span>
              </h2>
              <p className="mt-7 max-w-[46ch] text-[12.5px] leading-[1.9] text-white/45">
                Where an assessment needs a conversation, Prism conducts an asynchronous interview. It
                attaches its reasoning to every score, so a reviewer can see why a judgement was reached and
                can overturn it. The consequential decision stays with a person.
              </p>
            </div>
            <ul className="uc-list">
              <li className="uc-row rv" data-d="0">
                <span className="us-n">01</span>
                <span className="uc-t">Admissions &amp; candidate screening</span>
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
                <span className="uc-t">Loan application assessment</span>
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
                <span className="uc-t">Insurance claim evaluation</span>
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
                <span className="uc-t">Startup &amp; investment screening</span>
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
                <span className="uc-t">Trainer &amp; teacher session quality</span>
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
            <Link className="csr rv" data-d="0" href="/case-studies/indian-school-of-business/">
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
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Across your industries</span>
          <h2 className="h-sec max-w-[20ch] rv" data-d="60">
            Defensible judgement, in every industry.
          </h2>
          <p className="lede mt-5 max-w-[620px] rv" data-d="100">
            Where Prism applies one rubric, consistently, across the decisions each industry has to defend.
          </p>
          <div className="us-grid mt-[46px]">
            <article className="us-cell rv" data-d="0">
              <span className="us-n">01</span>
              <div className="us-body">
                <h3 className="us-h">BFSI</h3>
                <p className="us-p">
                  Underwriting, claims, disputes and collections scored against one standard, including the
                  thin-file and edge cases where policy is easiest to bend, with reasoning documented well
                  enough to defend at audit.
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
                  Batch records, deviations, safety cases and dossiers evaluated against the standard that
                  applies, with a consistent and inspectable rationale behind every call and the marginal ones
                  escalated.
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
                  Accreditation assessments, scheme eligibility and tender responses scored consistently, so
                  the same evidence produces the same result regardless of who reviews it or which state it
                  arrives from.
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
                  Returns, claims, seller quality and catalogue compliance evaluated at volume, with the
                  marginal cases escalated rather than waved through, in a quiet week and in peak week alike.
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
                Whose rubric does it apply?
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
                The rubric is yours. Prism evaluates against the criteria your institution already defends,
                and where nothing is written down we help you make the implicit rubric explicit, which is
                usually the more valuable half of the exercise.
              </div>
            </details>
            <details>
              <summary>
                What can it actually read?
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
                Audio, video, images and documents, which is what lets one rubric cover a recorded classroom
                session, a submitted loan file and a scanned certificate. The criteria hold whatever format
                the input arrives in.
              </div>
            </details>
            <details>
              <summary>
                How do we defend a score to the person it affects?
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
                Prism attaches its reasoning to every score at the level of the individual criterion, so a
                reviewer can see why a judgement was reached and can overturn it. The consequential decision
                stays with a person, and the record shows where a human differed from the system.
              </div>
            </details>
            <details>
              <summary>
                How do you keep it from drifting into bias?
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
                Scoring is checked across cohorts against thresholds you set, with the same seriousness as
                accuracy, so a rubric growing quietly harder on one group surfaces as an event. Because
                reasoning is attached to each score, a disputed pattern can be traced to the criterion
                producing it.
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
