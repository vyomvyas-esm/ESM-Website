import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { graph, service } from "@/lib/jsonld";
import { services } from "@/data/page-schema";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Atlas, Training Coach - PYZO",
  description:
    "Converts static SOPs and compliance manuals into 24/7 interactive AI video modules and role-play simulations.",
  path: "/pyzo/atlas/",
});
export default function PyzoAtlasPage() {
  return (
    <main className="page" id="page-pyzo-atlas">
      <JsonLd data={graph(service(services["pyzo-atlas"]))} />
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[96px]">
          <div className="grid items-center gap-12">
            <div>
              <Breadcrumbs items={[{ label: "PYZO", href: "/pyzo/" }, { label: "Atlas" }]} />
              <span
                className="pzlogo pz-hero-logo pzlogo-atlas pzh-atlas rv"
                data-d="30"
                role="img"
                aria-label="Atlas"
              ></span>
              <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
                Your best trainer, in every language
              </h1>
              <p className="lede mt-5 max-w-[640px] rv" data-d="120">
                Converts static SOPs and compliance manuals into 24/7 interactive AI video modules and
                role-play simulations.
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
            <div data-pyzo-arch="atlas" data-head="off"></div>
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
                <span className="clogo ca-logo logow-indusind" role="img" aria-label="IndusInd Bank"></span>
                <span className="ca-head">
                  33% increase in process adherence via trainer-independent learning
                </span>
              </div>
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
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Across your industries</span>
          <h2 className="h-sec rv" data-d="60">
            Training that holds a standard, in every industry
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
                  Every branch and contact-centre role certified and current on policy
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Role-based onboarding</h3>
                      <p className="pi-uc-x">
                        New branch and collections staff learn the exact process for their role from an AI
                        avatar of your best trainer, in the language they work in.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Certification before system access</h3>
                      <p className="pi-uc-x">
                        Mandatory certification is assessed on real cases, so nobody goes live on a lending or
                        servicing system until they have shown they can use it correctly.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Policy updates that reach every branch</h3>
                      <p className="pi-uc-x">
                        When a circular or product rule changes, Atlas turns it into a short assessed module,
                        so every branch works from the current version within days.
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
                  Inspection-ready training records across every plant and field team
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">GMP qualification at plant scale</h3>
                      <p className="pi-uc-x">
                        Baseline GMP qualification and annual re-certification are delivered across every
                        site, with each employee’s competence evidenced in a record an inspector can review.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Pharmacovigilance awareness for everyone</h3>
                      <p className="pi-uc-x">
                        Every employee learns to recognise and report an adverse event, and completion is
                        tracked so the evidence is ready whenever an auditor asks.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Medical representative readiness</h3>
                      <p className="pi-uc-x">
                        Representatives practise product conversations through role-play and are certified
                        before they detail a product to a healthcare professional.
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
                  One verified standard for assessors and field staff in every district
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Assessor certification</h3>
                      <p className="pi-uc-x">
                        Assessors are certified against the current version of the standard, with competence
                        evidenced on the record before they assess anyone in the field.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Field-officer training in local languages</h3>
                      <p className="pi-uc-x">
                        Scheme guidelines become short lessons in the languages your officers speak, so every
                        district applies the same rules the same way.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Guideline changes that reach the frontline</h3>
                      <p className="pi-uc-x">
                        When a guideline is revised during the year, the change reaches frontline staff as an
                        assessed update, with completion visible to the department.
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
                  Store and franchise teams productive in days, through every peak
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="pi-ucs">
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Store associate onboarding</h3>
                      <p className="pi-uc-x">
                        Brand standards and product knowledge become short, assessed lessons that make a new
                        associate productive within days of joining.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Seasonal hiring at scale</h3>
                      <p className="pi-uc-x">
                        A surge of seasonal joiners is trained to one standard at the same time, so service
                        quality holds through the busiest weeks of the year.
                      </p>
                    </div>
                    <div className="pi-uc">
                      <h3 className="pi-uc-t">Franchise and seller training</h3>
                      <p className="pi-uc-x">
                        Franchise staff and marketplace sellers learn your processes in short certified
                        modules, so quality stays consistent across every outlet and listing.
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
              data-ts="209"
              data-txt="atlas, explained: turning sops into on-demand learning that sticks about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="0"
              href="/blog/atlas-explained/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/115-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">ATLAS, Explained</h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    24 March 2025
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
              data-topic="Agentic AI"
              data-author="Shardul Singh"
              data-ts="32"
              data-txt="measuring whether training actually stuck: assessment and role-play at scale agentic ai shardul singh"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="60"
              href="/blog/measuring-whether-training-actually-stuck/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <span className="thumb thumb-none">
                  <span>Image to come</span>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Measuring Whether Training Actually Stuck
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">Agentic AI</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">11 May 2026</span>
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
            <Link
              data-topic="Agentic AI"
              data-author="Shardul Singh"
              data-ts="36"
              data-txt="onboarding the workforce onto agentic workflows: adoption that sticks agentic ai shardul singh"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="120"
              href="/blog/onboarding-the-workforce-onto-agentic-workflows/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <span className="thumb thumb-none">
                  <span>Image to come</span>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Onboarding the Workforce Onto Agentic Workflows
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">Agentic AI</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">1 May 2026</span>
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
