import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
export const metadata = pageMetadata({
  title: "Healthcare & Life Sciences",
  description: "",
  path: "/industries/healthcare/",
});
export default function IndHealthcarePage() {
  return (
    <main className="page" id="page-ind-healthcare">
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[96px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries" },
              { label: "Healthcare & Life Sciences" },
            ]}
          />
          <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
            The clinician stays in the loop
          </h1>
          <p className="lede mt-5 max-w-[680px] rv" data-d="120">
            We engineer decision support, care coordination and training that give clinical and quality teams
            their time back, without taking them off the decisions that matter.
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
            </Link>{" "}
            <a className="btn btn-ghost" href="#ind-uses">
              See where AI fits
            </a>
          </div>
        </div>
        <div className="brand-band relative rv" data-d="240">
          <div className="mx-auto max-w-shell px-6 lg:px-8">
            <div className="bm-rail">
              <ul
                className="bm-track"
                aria-label="Healthcare and life sciences clients"
                style={{ "--bm-dur": "36s", "--bm-gap": "clamp(3rem,10vw,9rem)" } as Record<string, string>}
              >
                <li className="bm-item">
                  <span className="clogo logow-cipla" role="img" aria-label="Cipla"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-nabh" role="img" aria-label="NABH"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-m3" role="img" aria-label="M3 Inc."></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-koita" role="img" aria-label="Koita Foundation"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-cipla" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-nabh" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-m3" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-koita" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-cipla" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-nabh" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-m3" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-koita" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-cipla" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-nabh" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-m3" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-koita" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-cipla" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-nabh" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-m3" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-koita" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-cipla" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-nabh" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-m3" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-koita" aria-hidden="true"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="glow-top" aria-hidden="true"></div>
          <div className="grid gap-12 lg:grid-cols-[minmax(280px,1fr)_2fr] lg:gap-16">
            <div className="rv">
              <span className="eyebrow rv">The pressures</span>
              <h2 className="h-sec">What healthcare teams are up against</h2>
            </div>
            <div className="ctrl-grid">
              <div className="ctrl-col rv" data-d="0">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Inspections that can ask for any record
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  An inspector can request any batch record or training log, and the site has to produce it
                  complete on the day it is asked for.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="70">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Accreditation that never pauses
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Accreditation and renewal demand documented evidence against hundreds of requirements,
                  prepared alongside the daily work of care.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="140">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Knowledge held in too many places
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Clinical standards and published research are spread across separate repositories, and
                  finding the right one takes time few teams have.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="0">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Procedures that change faster than training
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Quality procedures are revised often, and every site has to train its people on the current
                  version before an inspector asks.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="70">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Patients who need support at any hour
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Adherence and support questions arrive outside clinic hours and in many languages, and every
                  adverse-event mention has to be captured.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="140">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Submissions slowed by manual transcription
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Batch-release and regulatory paperwork is still copied between systems by hand, and every
                  copy is another chance for error.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ind-uses" className="relative overflow-hidden bg-ink pt-[96px] pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Across healthcare</span>
          <h2 className="h-sec rv" data-d="60">
            Where AI fits in healthcare
          </h2>
          <div className="iq-grid mt-[46px]">
            <article className="iq-cell rv" data-d="0">
              <div className="iq-top">
                <span
                  className="iq-ic"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5.5"/><path d="m9.5 9 1.7 1.7 3.3-3.4"/><path d="M8.6 13.4 7 21l5-2.6 5 2.6-1.6-7.6"/></svg>',
                  }}
                />
                <h3 className="iq-name">Training an inspector will accept</h3>
              </div>
              <p className="iq-note">
                Converts your cGMP and quality SOPs into role-play-assessed training that evidences each
                employee’s competence for an inspector, in every language your sites operate in.
              </p>
              <Link className="iq-go group" href="/pyzo/atlas/">
                Explore Atlas
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
              </Link>
            </article>
            <article className="iq-cell rv" data-d="50">
              <div className="iq-top">
                <span
                  className="iq-ic"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.3 15.3 5.2 5.2"/><path d="m7.8 10.6 1.9 1.9 3.6-3.8"/></svg>',
                  }}
                />
                <h3 className="iq-name">Inspection readiness in less time</h3>
              </div>
              <p className="iq-note">
                Makes your quality and regulatory knowledge answerable in plain language with citations, and
                shortens the time to close a deviation investigation or ready a site for inspection.
              </p>
              <Link className="iq-go group" href="/pyzo/compass/">
                Explore Compass
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
              </Link>
            </article>
            <article className="iq-cell rv" data-d="100">
              <div className="iq-top">
                <span
                  className="iq-ic"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="13.5" width="3.5" height="5.5" rx="1.2"/><rect x="17.5" y="13.5" width="3.5" height="5.5" rx="1.2"/><path d="M19.2 19v.5a2.5 2.5 0 0 1-2.5 2.5H13"/><path d="M12 8.5v3l2 1.2"/></svg>',
                  }}
                />
                <h3 className="iq-name">Patient support at any hour</h3>
              </div>
              <p className="iq-note">
                Operates patient-support and medication-adherence lines around the clock in the patient’s own
                language, capturing every adverse-event mention in a complete, reviewable record.
              </p>
              <Link className="iq-go group" href="/pyzo/evio/">
                Explore Evio
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
              </Link>
            </article>
            <article className="iq-cell rv" data-d="150">
              <div className="iq-top">
                <span
                  className="iq-ic"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h6M9 3v6.2L4.6 17.5A2.3 2.3 0 0 0 6.6 21h8.8a2.3 2.3 0 0 0 2-3.5L13 9.2V3"/><path d="M6.4 15h9.2"/><path d="M17.5 6.5h4M19.8 4.5l1.7 2-1.7 2"/></svg>',
                  }}
                />
                <h3 className="iq-name">Faster batch release</h3>
              </div>
              <p className="iq-note">
                Operates batch-release and regulatory-submission workflows across your quality and legacy
                systems, removing the manual transcription that slows every release.
              </p>
              <Link className="iq-go group" href="/pyzo/forge/">
                Explore Forge
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
              </Link>
            </article>
            <article className="iq-cell rv" data-d="200">
              <div className="iq-top">
                <span
                  className="iq-ic"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h8.5L19 7.5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/><path d="M12 18v-7M9 13.5 12 10.5l3 3"/></svg>',
                  }}
                />
                <h3 className="iq-name">Submissions complete before review</h3>
              </div>
              <p className="iq-note">
                Guides an applicant through an accreditation or regulatory submission and validates every
                field and document, so incomplete files stop reaching reviewers and approval comes sooner.
              </p>
              <Link className="iq-go group" href="/pyzo/loupe/">
                Explore Loupe
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
              </Link>
            </article>
            <article className="iq-cell rv" data-d="250">
              <div className="iq-top">
                <span
                  className="iq-ic"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="5" rx="1"/><rect x="4" y="9.5" width="16" height="5" rx="1"/><rect x="4" y="16" width="16" height="5" rx="1"/><path d="m7 5.5.9.9L9.5 4.8M7 12l.9.9 1.6-1.6M7 18.5l.9.9 1.6-1.6M12 5.5h5M12 12h5M12 18.5h5"/></svg>',
                  }}
                />
                <h3 className="iq-name">Every batch record reviewed in full</h3>
              </div>
              <p className="iq-note">
                Reviews batch records and pharmacovigilance cases against your rubric at full coverage,
                attaching a defensible trail behind every judgement.
              </p>
              <Link className="iq-go group" href="/pyzo/prism/">
                Explore Prism
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
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section id="ind-healthcare-proof" className="relative overflow-hidden bg-ink pt-[108px] pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="pf-head">
            <div>
              <span className="eyebrow rv">Proof in healthcare</span>
              <h2 className="h-sec rv" data-d="60">
                Governed outcomes, proven in production
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
          <div className="cs-acc mt-[46px]">
            <details className="ca-row rv" data-d="0">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="clogo ca-logo logow-koita" role="img" aria-label="Koita Foundation"></span>
                <span className="ca-head">
                  83% reduction in discovery time with citation-backed retrieval across seven repositories
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">83%</div>
                      <div className="l">Less discovery time</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">95%</div>
                      <div className="l">Source traceability</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">7+</div>
                      <div className="l">Repositories unified</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    A citation-backed retrieval layer that turns seven separate digital health repositories
                    into one answerable source for practitioners and the public.
                  </p>
                  <Link className="ca-link group" href="/case-studies/koita-foundation/">
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
            </details>
            <details className="ca-row rv" data-d="60">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span
                  className="clogo ca-logo logow-qci"
                  role="img"
                  aria-label="Quality Council of India"
                ></span>
                <span className="ca-head">
                  78% reduction in application filing time through guided AI assistance
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">78%</div>
                      <div className="l">Less application filing time</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">63%</div>
                      <div className="l">Less assessor review time</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">910+</div>
                      <div className="l">Requirements automated</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    AI-powered assistance to evaluate accreditation documents for completeness and
                    correctness, against strict standards to accelerate compliance checks at public scale.
                  </p>
                  <Link className="ca-link group" href="/case-studies/">
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
              data-topic="AI in Healthcare"
              data-author="Snehasis Panda"
              data-ts="-12"
              data-txt="nabh accreditation readiness: keeping evidence audit-ready all year ai in healthcare snehasis panda"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="0"
              href="/blog/nabh-accreditation-readiness/"
            >
              <div className="bl-ph relative h-[176px] overflow-hidden">
                <span className="bl-ph-k">AI in Healthcare</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  NABH Accreditation Readiness
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">AI in Healthcare</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    24 August 2026
                  </span>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="byline">
                    <span className="av av-snehasis" style={{ width: "26px", height: "26px" }}></span>
                    <span className="by-txt">
                      <span className="by-name">Snehasis Panda</span>
                      <span className="by-role">CBO</span>
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
              data-topic="AI in Healthcare"
              data-author="Shreyas Sanghvi"
              data-ts="22"
              data-txt="ai in pharma manufacturing and quality: gxp-aligned models in production healthcare shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="60"
              href="/blog/ai-in-pharma-manufacturing-and-quality/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <Image
                  src="/blog/ai-in-pharma-manufacturing-and-quality-1.webp"
                  width={1024}
                  height={1024}
                  alt=""
                  className="thumb"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  AI in Pharma Manufacturing and Quality
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">AI in Healthcare</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">3 June 2026</span>
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
              data-topic="AI in Healthcare"
              data-author="Shreyas Sanghvi"
              data-ts="256"
              data-txt="rag for clinical knowledge: building guideline assistants clinicians can trust healthcare shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="120"
              href="/blog/rag-for-clinical-knowledge/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <Image
                  src="/blog/rag-for-clinical-knowledge-1.webp"
                  width={1024}
                  height={1024}
                  alt=""
                  className="thumb"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  RAG for Clinical Knowledge
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">AI in Healthcare</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    4 December 2024
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
                  Give your clinical teams their <span className="text-teal">time back</span>
                </h2>
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
