import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import { CaseStudiesIndex } from "@/components/CaseStudiesIndex";
export const metadata = pageMetadata({
  title: "Case Studies",
  description: "",
  path: "/case-studies/",
});
export default function CaseStudiesPage() {
  return (
    <main className="page" id="page-case-studies">
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[88px]">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Resources" }, { label: "Case Studies" }]}
          />
          <h1 className="h-hero mt-6 max-w-[18ch] rv" data-d="60">
            Proof in production
          </h1>
          <p className="lede mt-5 max-w-[660px] rv" data-d="120">
            Each case study names the business metric we agreed with the client at the start and shows how far
            it moved, with the system behind it still operating in production today.
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
      <section className="relative overflow-hidden bg-ink pb-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <CaseStudiesIndex />
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow rv">In their words</span>
            <h2 className="h-sec rv" data-d="80">
              The proof is in what changed
            </h2>
          </div>
          <div className="tq-grid mt-[54px]">
            <figure className="tq-card rv" data-d="0">
              <blockquote className="tq-q">
                <span className="tq-m">“</span>Es Magico engineered a grievance protocol that any regulated
                bank could adopt, one as accountable as the institutions using it. It is now live across
                multiple banks, and a complaint takes about two minutes to register, in eleven Indic
                languages. Most importantly, every grievance is logged and independently trackable.
                <span className="tq-m">”</span>
              </blockquote>
              <figcaption className="tq-by">
                <span className="tq-name">Ranjeet Rane</span>
                <span className="tq-role">Head of Research, RBI Innovation Hub</span>
              </figcaption>
            </figure>
            <figure className="tq-card rv" data-d="70">
              <blockquote className="tq-q">
                <span className="tq-m">“</span>Es Magico has transformed how we deliver manufacturing and
                quality training globally. Their AI-native multilingual learning, instant query resolution,
                and role-play capabilities have significantly enhanced learner engagement and knowledge
                retention.<span className="tq-m">”</span>
              </blockquote>
              <figcaption className="tq-by">
                <span className="tq-name">Shivam Vig</span>
                <span className="tq-role">Senior Director HR, Cipla</span>
              </figcaption>
            </figure>
            <figure className="tq-card rv" data-d="140">
              <blockquote className="tq-q">
                <span className="tq-m">“</span>Es Magico’s PYZO suite has improved the efficiency of our
                1,500+ employees driving quality standards across education, healthcare, and manufacturing.
                Working with a single partner capable of delivering meaningful transformation across business
                functions has accelerated outcomes.<span className="tq-m">”</span>
              </blockquote>
              <figcaption className="tq-by">
                <span className="tq-name">Aditya Laxman</span>
                <span className="tq-role">Assistant Secretary General, QCI</span>
              </figcaption>
            </figure>
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
                  Tell us the number you need to <span className="text-teal">move</span>
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
