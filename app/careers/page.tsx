import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Careers",
  description:
    "We engineer systems that operate inside banks, hospitals and governments, and we answer for what they produce.",
  path: "/careers/",
});
export default function CareersPage() {
  return (
    <main className="page" id="page-careers">
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[88px]">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Company" }, { label: "Careers" }]} />
          <h1 className="h-hero mt-6 max-w-[14ch] rv" data-d="60">
            Engineer systems that matter.
          </h1>
          <p className="lede mt-5 max-w-[660px] rv" data-d="120">
            We engineer systems that operate inside banks, hospitals and governments, and we answer for what
            they produce.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 rv" data-d="180">
            <Link className="btn btn-light group" href="/careers/apply/">
              Introduce yourself
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
      <section className="relative overflow-hidden bg-ink pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="rv">
              <h2 className="h-sec max-w-[15ch]">
                Build what <span className="text-white/40">ships.</span>
              </h2>
              <p className="mt-7 max-w-[48ch] text-[12.5px] leading-[1.9] text-white/45">
                You will engineer and operate AI systems inside banks, hospitals and government bodies, where
                the users, the constraints and the consequences are real.
              </p>
            </div>
            <div className="num-list">
              <div className="num-row rv" data-d="0">
                <span className="num-idx">01</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Prototype to production.</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Take a capability that has been demonstrated and make it something an institution depends
                    on.
                  </p>
                </div>
              </div>
              <div className="num-row rv" data-d="70">
                <span className="num-idx">02</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">Enterprise by default.</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    Security, compliance and operational reality are the starting conditions rather than a
                    later phase.
                  </p>
                </div>
              </div>
              <div className="num-row rv" data-d="140">
                <span className="num-idx">03</span>
                <div>
                  <h3 className="font-display text-[14.5px] font-medium">No demo-ware.</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[12px] leading-[1.75] text-white/45">
                    The work becomes part of how an organisation operates, and it is answerable once it does.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="glow-top" aria-hidden="true"></div>
          <div className="grid gap-12 lg:grid-cols-[minmax(280px,1fr)_2fr] lg:gap-16">
            <h2 className="h-sec max-w-[13ch] rv">
              The kind of operator <span className="text-white/40">this work needs.</span>
            </h2>
            <div className="ctrl-grid">
              <div className="ctrl-col rv" data-d="0">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  You take the hard problems personally.
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  You do not wait for perfect requirements, or for someone else to resolve the difficult part.
                  You identify the gap, you make the call, and you see it through.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="70">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  You think in systems.
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  You look past the immediate task to how a decision affects the model, the product, the
                  customer and everything connected to them.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="140">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  You have a high bar.
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  You care about the details, you challenge a weak assumption when you meet one, and you raise
                  the standard of what leaves the team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <h2 className="h-sec rv">
            Open <span className="text-white/40">roles.</span>
          </h2>
          <div className="mt-[46px] flex flex-col">
            <article className="role-row rv" data-d="0">
              <div className="min-w-0">
                <h3 className="font-display text-[16px] font-medium">AI Engineer</h3>
                <p className="role-desc">
                  Engineer agentic systems that operate inside a client environment, from the evaluation
                  harness to the deployment that answers for itself.
                </p>
              </div>
              <div className="role-meta">
                <span>Mumbai or Bengaluru</span>
                <span className="role-sep">·</span>
                <span>Full time</span>
              </div>
              <Link className="btn btn-ghost btn-sm group" href="/careers/apply/">
                Apply
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
            </article>
            <article className="role-row rv" data-d="0">
              <div className="min-w-0">
                <h3 className="font-display text-[16px] font-medium">Product Manager</h3>
                <p className="role-desc">
                  Own an agentic product end to end, from the outcome agreed with a client to the number it
                  reports after it ships.
                </p>
              </div>
              <div className="role-meta">
                <span>Mumbai or Bengaluru</span>
                <span className="role-sep">·</span>
                <span>Full time</span>
              </div>
              <Link className="btn btn-ghost btn-sm group" href="/careers/apply/">
                Apply
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
            </article>
            <article className="role-row rv" data-d="70">
              <div className="min-w-0">
                <h3 className="font-display text-[16px] font-medium">Human Resources Manager</h3>
                <p className="role-desc">
                  Hiring, onboarding and the day-to-day of a 50+ specialist team that is mostly engineers.
                </p>
              </div>
              <div className="role-meta">
                <span>Mumbai</span>
                <span className="role-sep">·</span>
                <span>Full time</span>
              </div>
              <Link className="btn btn-ghost btn-sm group" href="/careers/apply/">
                Apply
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
            </article>
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
                  We are AI-native operators
                  <br className="hidden sm:block" /> who make enterprises{" "}
                  <span className="text-teal">AI-first.</span>
                </h2>
                <p className="cta-sig mt-7">…outcomes that survive scrutiny.</p>
              </div>
              <div className="flex flex-col items-start lg:pt-2">
                <Link className="btn btn-light group" href="/careers/apply/">
                  Introduce yourself
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
