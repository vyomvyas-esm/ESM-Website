import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
export const metadata = pageMetadata({
  title: "Banking & Financial Services",
  description: "",
  path: "/industries/bfsi/",
});
export default function IndBfsiPage() {
  return (
    <main className="page" id="page-ind-bfsi">
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
              { label: "Banking & Financial Services" },
            ]}
          />
          <h1 className="h-hero mt-6 max-w-[20ch] rv" data-d="60">
            AI for banking that a regulator can examine
          </h1>
          <p className="lede mt-5 max-w-[680px] rv" data-d="120">
            From credit decisioning to grievance redressal, we engineer AI that a regulator can examine and
            operate it inside your environment, accountable for every result.
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
                aria-label="Banking and financial services clients"
                style={{ "--bm-dur": "36s", "--bm-gap": "clamp(3rem,10vw,9rem)" } as Record<string, string>}
              >
                <li className="bm-item">
                  <span
                    className="clogo logow-rbi"
                    role="img"
                    aria-label="Reserve Bank Innovation Hub"
                  ></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-indusind" role="img" aria-label="IndusInd Bank"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-hsbc" role="img" aria-label="HSBC"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-hdfc" role="img" aria-label="HDFC Capital"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-rbi" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-indusind" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-hsbc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-hdfc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-rbi" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-indusind" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-hsbc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-hdfc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-rbi" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-indusind" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-hsbc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-hdfc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-rbi" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-indusind" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-hsbc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-hdfc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-rbi" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-indusind" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-hsbc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-hdfc" aria-hidden="true"></span>
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
              <h2 className="h-sec">What every bank is up against</h2>
            </div>
            <div className="ctrl-grid">
              <div className="ctrl-col rv" data-d="0">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Grievances at a volume no desk can staff
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Complaints arrive in many languages and through every channel, and each one has to be logged
                  and closed within the timelines the regulator sets.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="70">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Decisions questioned long after they are made
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  A credit or servicing decision taken today can be examined months later, and the bank has to
                  show the reason it was made.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="140">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Policy that changes faster than training
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Product rules and compliance circulars change often, and every branch has to work from the
                  current version the day it takes effect.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="0">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Customers who will not use a form
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  A large share of customers prefer a regional language or a phone call, and a written web
                  form leaves them unserved.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="70">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Collections that cannot scale with headcount
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Overdue accounts grow faster than recovery teams, and every conversation has to stay within
                  the conduct rules for collections.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="140">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Fraud that moves faster than review
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Mule accounts and scams move money in minutes, so checks have to happen inside the
                  transaction and leave a record behind them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ind-uses" className="relative overflow-hidden bg-ink pt-[96px] pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Across the bank</span>
          <h2 className="h-sec rv" data-d="60">
            Where AI fits in a bank
          </h2>
          <div className="iq-grid mt-[46px]">
            <article className="iq-cell rv" data-d="0">
              <div className="iq-top">
                <span
                  className="iq-ic"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 9 12 4.5 21.5 9 12 13.5Z"/><path d="M6.5 11v4.2c1.6 1.5 3.4 2.3 5.5 2.3s3.9-.8 5.5-2.3V11"/><path d="M21.5 9v5"/></svg>',
                  }}
                />
                <h3 className="iq-name">Every branch trained to one standard</h3>
              </div>
              <p className="iq-note">
                Converts your compliance manuals and product documentation into assessed, multilingual lessons
                led by an AI avatar of your best trainer, so every branch and contact-centre employee reaches
                certified competence before serving a customer.
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
                      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4.5H7.5A1.5 1.5 0 0 0 6 6v13.5A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H15"/><rect x="9" y="3" width="6" height="3" rx="1"/><path d="m9 13 2 2 4-4.5"/></svg>',
                  }}
                />
                <h3 className="iq-name">Audit preparation in days</h3>
              </div>
              <p className="iq-note">
                Answers a frontline question from your own policy wording and regulatory circulars with the
                source attached, and compresses the preparation time for an audit or inspection from weeks to
                days.
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
                      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 5.5h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8l-3 2.5v-2.5H3.5a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z"/><path d="M17.5 9.5h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H19V20l-3-2.5h-4.5a1 1 0 0 1-1-1V16"/></svg>',
                  }}
                />
                <h3 className="iq-name">Collections in the borrower’s language</h3>
              </div>
              <p className="iq-note">
                Holds collections and policy-renewal conversations in more than fifteen languages at a volume
                a call centre could never staff, logging every call for independent review.
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
                      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4" width="19" height="13" rx="1.5"/><path d="M8.5 21h7M12 17v4"/><path d="M15 10.5a3 3 0 1 1-1-2.2"/><path d="M14.5 6.8v1.8h-1.8"/></svg>',
                  }}
                />
                <h3 className="iq-name">Workflows that survive a screen change</h3>
              </div>
              <p className="iq-note">
                Operates your account-opening and reconciliation workflows across the applications your teams
                already use, including legacy systems with no API, and repairs its own steps when a screen
                changes.
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
                      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h8.5L19 7.5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/><path d="m8 12.5 1.3 1.3 2.2-2.4M8 17l1.3 1.3 2.2-2.4M13.5 13h3M13.5 17.5h3"/></svg>',
                  }}
                />
                <h3 className="iq-name">Applications complete the first time</h3>
              </div>
              <p className="iq-note">
                Guides an applicant through a loan or account-opening form and checks every upload for
                completeness, lowering the not-in-good-order rate and bringing time-to-fund forward.
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
                      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M8 20h8M5 7h14"/><path d="m5 7-2.5 6a2.5 2.5 0 0 0 5 0Z"/><path d="m19 7-2.5 6a2.5 2.5 0 0 0 5 0Z"/></svg>',
                  }}
                />
                <h3 className="iq-name">Claims and loans assessed consistently</h3>
              </div>
              <p className="iq-note">
                Assesses every loan application or insurance claim against your own rubric with the reasoning
                attached, so a reviewer sees why each decision was reached and keeps the final call.
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
      <section id="ind-bfsi-proof" className="relative overflow-hidden bg-ink pt-[108px] pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="pf-head">
            <div>
              <span className="eyebrow rv">Proof in banking</span>
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
                <span className="clogo ca-logo logow-rbi" role="img" aria-label="RBI Innovation Hub"></span>
                <span className="ca-head">
                  81% reduction in TAT with a voice-first grievance protocol for banking
                </span>
              </summary>
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
            </details>
            <details className="ca-row rv" data-d="60">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="clogo ca-logo logow-indusind" role="img" aria-label="IndusInd Bank"></span>
                <span className="ca-head">
                  33% increase in process adherence via trainer-independent learning
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">63%</div>
                      <div className="l">Cost reduction in content creation</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">12,000+</div>
                      <div className="l">Employees trained</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">7,800+</div>
                      <div className="l">Person-hours saved</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    Process training for the workforce with AI avatar-led, trainer-independent sessions with
                    role-play simulations and instant query resolution.
                  </p>
                  <Link className="ca-link group" href="/case-studies/indusind-bank/">
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
              data-topic="AI in BFSI"
              data-author="Snehasis Panda"
              data-ts="17"
              data-txt="multilingual ai customer service in banking: consistent quality across languages bfsi snehasis panda"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="0"
              href="/blog/multilingual-ai-customer-service-in-banking/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <Image
                  src="/blog/multilingual-ai-customer-service-in-banking-1.webp"
                  width={1024}
                  height={1024}
                  alt=""
                  className="thumb"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Multilingual AI Customer Service in Banking
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">AI in BFSI</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    15 June 2026
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
              data-topic="AI in BFSI"
              data-author="Snehasis Panda"
              data-ts="127"
              data-txt="explainable credit decisions: generating adverse-action notices from ai models bfsi snehasis panda"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="60"
              href="/blog/explainable-credit-decisions/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <Image
                  src="/blog/explainable-credit-decisions-1.webp"
                  width={1024}
                  height={1024}
                  alt=""
                  className="thumb"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Explainable Credit Decisions
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">AI in BFSI</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    1 October 2025
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
              data-topic="AI in BFSI"
              data-author="Snehasis Panda"
              data-ts="137"
              data-txt="ai for regulatory change management: from obligation to operational control bfsi snehasis panda"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="120"
              href="/blog/ai-for-regulatory-change-management/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <Image
                  src="/blog/ai-for-regulatory-change-management-1.webp"
                  width={1024}
                  height={1024}
                  alt=""
                  className="thumb"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  AI for Regulatory Change Management
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">AI in BFSI</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    8 September 2025
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
                  Tell us which decision has to be <span className="text-teal">defensible</span>
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
