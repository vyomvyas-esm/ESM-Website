import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Loupe, Application Assistant - PYZO - Es Magico",
};
export default function PyzoLoupePage() {
  return (
    <main className="page" id="page-pyzo-loupe">
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
                <span className="sep">·</span> <Link href="/pyzo">PYZO</Link>
                <span className="sep">·</span> <span aria-current="page">Loupe</span>
              </nav>
              <span
                className="pzlogo pz-hero-logo pzlogo-loupe rv"
                data-d="30"
                role="img"
                aria-label="Loupe"
              ></span>
              <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
                No more half-finished applications.
              </h1>
              <p className="lede mt-5 max-w-[640px] rv" data-d="120">
                Loupe guides an applicant field by field through an application that would otherwise defeat
                them, and validates each entry against the requirement it is meant to satisfy.
              </p>
              <div className="mt-8 rv" data-d="200">
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
                    x="86"
                    y="42"
                    width="148"
                    height="116"
                    rx="9"
                    stroke="#8CEEF7"
                    strokeWidth=".9"
                    opacity=".6"
                  />
                  <path
                    d="M108 72h104M108 94h74M108 116h96"
                    stroke="#8CEEF7"
                    strokeWidth=".7"
                    opacity=".45"
                  />
                  <circle cx="214" cy="128" r="18" stroke="#3ADCC5" strokeWidth="1" />
                  <path d="m227 141 12 12" stroke="#3ADCC5" strokeWidth="1.4" strokeLinecap="round" />
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
                Engineered for applicant and <span className="text-white/40">reviewer alike.</span>
              </h2>
              <p className="mt-7 max-w-[46ch] text-[12.5px] leading-[1.9] text-white/45">
                Loupe checks that each upload is complete and legible before submission. On the reviewer’s
                side it extracts what has been submitted and drafts question-level remarks, so an assessment
                begins from evidence rather than from a pile of documents, with a documented trail behind
                every decision.
              </p>
            </div>
            <ul className="uc-list">
              <li className="uc-row rv" data-d="0">
                <span className="us-n">01</span>
                <span className="uc-t">Accreditation &amp; certification</span>
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
                <span className="uc-t">Loan applications &amp; credit files</span>
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
                <span className="uc-t">Insurance proposals &amp; claims</span>
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
                <span className="uc-t">Onboarding &amp; KYC</span>
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
                <span className="uc-t">Grant &amp; scheme applications</span>
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
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Across your industries</span>
          <h2 className="h-sec max-w-[20ch] rv" data-d="60">
            Applications completed right, in every industry.
          </h2>
          <p className="lede mt-5 max-w-[620px] rv" data-d="100">
            Where Loupe guides and validates the submissions each industry depends on.
          </p>
          <div className="us-grid mt-[46px]">
            <article className="us-cell rv" data-d="0">
              <span className="us-n">01</span>
              <div className="us-body">
                <h3 className="us-h">BFSI</h3>
                <p className="us-p">
                  KYC packs, account opening and loan applications completed correctly at capture, with the
                  right document and consistent details, plus autofill from what you already hold in the core
                  and the bureau.
                </p>
                <Link className="us-go group" href="/industries/bfsi">
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
                  eCRFs, informed consent, batch records and certificates of analysis completed at the point
                  of entry, with missing signatures, versions and out-of-range values caught before anything
                  moves downstream.
                </p>
                <Link className="us-go group" href="/industries/healthcare">
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
                  Applications and self-assessments completed correctly the first time, with the documentary
                  evidence checked at submission rather than at review, and guidance in the applicant's own
                  language.
                </p>
                <Link className="us-go group" href="/industries/public-sector">
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
                  Checkout, seller registration and claim forms completed without the drop-off that comes from
                  a form that does not explain itself, validated at entry rather than rejected days later.
                </p>
                <Link className="us-go group" href="/industries/retail">
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
                How is this different from a form with validation on it?
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
                A validated form tells the applicant a field is wrong. Loupe tells them what the requirement
                actually asks for, checks the document they uploaded against it, and catches a scan that is
                incomplete or illegible before submission instead of eight weeks later in a deficiency notice.
              </div>
            </details>
            <details>
              <summary>
                Does it help the reviewer as well as the applicant?
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
                Yes, and that is where most of the time is recovered. Loupe extracts what has been submitted
                and drafts question-level remarks, so an assessment opens from evidence already mapped to the
                requirement it answers, instead of from a folder of unsorted PDFs.
              </div>
            </details>
            <details>
              <summary>
                Who is accountable for the decision?
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
                The reviewer remains accountable throughout. Loupe prepares and evidences the file, and the
                approval stays with the reviewer. Its remarks are drafts a person edits, accepts or discards,
                and the record shows which ones were changed.
              </div>
            </details>
            <details>
              <summary>
                What about applicants who cannot complete the form themselves?
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
                Guidance is available in the applicant’s own language and can be delivered by voice, which
                matters for grant and scheme applications where the population is least served by a web form.
                The validation logic underneath is identical either way.
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
