import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Atlas, Training Coach - PYZO",
  description:
    "Where Atlas turns institutional knowledge into evidenced learning across the industries we serve.",
  path: "/pyzo/atlas/",
});
export default function PyzoAtlasPage() {
  return (
    <main className="page" id="page-pyzo-atlas">
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
                <span className="sep">·</span> <span aria-current="page">Atlas</span>
              </nav>
              <span
                className="pzlogo pz-hero-logo pzlogo-atlas rv"
                data-d="30"
                role="img"
                aria-label="Atlas"
              ></span>
              <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
                Your best trainer, in every language.
              </h1>
              <p className="lede mt-5 max-w-[640px] rv" data-d="120">
                Atlas turns SOPs, compliance manuals and knowledge documents into short, structured lessons
                delivered by an AI avatar of your best trainer, refreshing as the underlying procedures
                change, and checking whether the knowledge actually stuck.
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
                    x="60"
                    y="40"
                    width="200"
                    height="120"
                    rx="10"
                    stroke="#8CEEF7"
                    strokeWidth=".9"
                    opacity=".65"
                  />
                  <circle cx="160" cy="86" r="26" stroke="#3ADCC5" strokeWidth=".9" />
                  <path d="M150 78v16l14-8Z" fill="#3ADCC5" opacity=".8" />
                  <path d="M84 132h152" stroke="#8CEEF7" strokeWidth=".7" opacity=".4" />
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
                One training standard, evidenced <span className="text-white/40">on the record.</span>
              </h2>
              <p className="mt-7 max-w-[46ch] text-[12.5px] leading-[1.9] text-white/45">
                Every lesson is generated from a controlled source document, so no site teaches a quietly
                different version of a procedure. Learners are assessed through objective tests, written
                responses and role-play, and can question the material by voice, in their own language, at any
                hour.
              </p>
            </div>
            <ul className="uc-list">
              <li className="uc-row rv" data-d="0">
                <span className="us-n">01</span>
                <span className="uc-t">SOP &amp; compliance training</span>
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
                <span className="uc-t">Frontline &amp; branch onboarding</span>
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
                <span className="uc-t">Manufacturing &amp; quality certification</span>
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
                <span className="uc-t">Product &amp; process rollouts</span>
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
                <span className="uc-t">Refresher &amp; recertification</span>
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
            <Link className="csr rv" data-d="0" href="/case-studies/cipla-global-training-academy/">
              <span
                className="clogo csr-logo logow-cipla opacity-70"
                role="img"
                aria-label="Cipla · Global Training Academy"
              ></span>
              <div className="csr-copy">
                <p className="text-[13px] font-medium text-white">Cipla · Global Training Academy</p>
                <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                  SOPs turned into tracked, self-paced AI lessons for 20,000+ employees.
                </p>
              </div>
              <div className="csr-figs">
                <div className="csr-fig">
                  <div className="n tally">20,000+</div>
                  <div className="l">employees enabled</div>
                </div>
                <div className="csr-fig">
                  <div className="n tally">~70%</div>
                  <div className="l">less content effort</div>
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
            <Link className="csr rv" data-d="70" href="/case-studies/indusind-bank/">
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
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Across your industries</span>
          <h2 className="h-sec max-w-[20ch] rv" data-d="60">
            Training that holds a standard, in every industry.
          </h2>
          <p className="lede mt-5 max-w-[620px] rv" data-d="100">
            Where Atlas turns institutional knowledge into evidenced learning across the industries we serve.
          </p>
          <div className="us-grid mt-[46px]">
            <article className="us-cell rv" data-d="0">
              <span className="us-n">01</span>
              <div className="us-body">
                <h3 className="us-h">BFSI</h3>
                <p className="us-p">
                  Role-based onboarding and mandatory certification for credit, collections, branch and
                  sourcing staff, assessed on cases rather than attendance, with nobody live on a system
                  before they are certified for it.
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
                  GMP baseline qualification and annual re-certification at plant scale, pharmacovigilance
                  awareness for every employee, and medical representative training certified before anyone
                  details a product.
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
                  Assessor and field-officer certification against the current version of the standard,
                  delivered in the languages your staff work in, with competence evidenced rather than
                  assumed.
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
                  Frontline, franchise and seller training that survives high attrition, delivered in short
                  modules and certified, so service quality does not depend on who happens to be on shift that
                  day.
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
                How do you stop two sites teaching different versions of the same procedure?
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
                Every lesson is generated from a controlled source document, so a revision to the SOP
                regenerates the lesson instead of leaving an older deck circulating on a shared drive. The
                record shows which version a learner was trained on and when, which is the part an auditor
                asks for.
              </div>
            </details>
            <details>
              <summary>
                What happens when the underlying procedure changes?
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
                The lesson is regenerated from the updated document and the earlier version is retained, so it
                stays possible to see what was taught before the change and what has been taught since.
                Recertification can be triggered only for the roles the change actually affects, instead of
                putting the whole workforce back through the material.
              </div>
            </details>
            <details>
              <summary>
                Can you evidence that the training landed, rather than that it was delivered?
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
                Completion is the weakest evidence there is. Learners are assessed through objective tests and
                written responses, and through role-play sessions where the standard is behavioural, so the
                record shows performance against the standard. Where someone falls short, the gap is visible
                at the level of the specific requirement.
              </div>
            </details>
            <details>
              <summary>
                Does quality hold up across languages?
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
                Learners work in the language they use on the floor, and query resolution is voice-first in
                that same language. The source document remains the single authority, so a translation cannot
                quietly introduce a different instruction, and answers are scored against one rubric whichever
                language they were given in.
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
