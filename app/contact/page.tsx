import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ProofBlock } from "@/components/ProofBlock";
export const metadata = pageMetadata({
  title: "Define an Outcome",
  description: "",
  path: "/contact/",
});
export default function ContactPage() {
  return (
    <main className="page" id="page-contact">
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[46px] pb-[76px]">
          <nav className="crumb rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">·</span>
            <span aria-current="page">Define an Outcome</span>
          </nav>
          <div className="mt-8 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col rv">
              <h1 className="font-display text-[clamp(1.75rem,3.1vw,2.5rem)] font-normal leading-[1.15] tracking-[-.025em] max-w-[16ch]">
                Tell us the number you need to move.
              </h1>
              <div className="mt-8">
                <h2 className="text-[11px] uppercase tracking-[.16em] text-teal">Talk to us directly</h2>
                <div className="mt-3 max-w-[440px]">
                  <div className="talk-row">
                    <span className="tk">Email</span>
                    <span className="tv">
                      <a href="mailto:connect@esmagico.com">connect@esmagico.com</a>
                    </span>
                  </div>
                  <div className="talk-row">
                    <span className="tk">Offices</span>
                    <span className="tv">Mumbai &amp; Bengaluru</span>
                  </div>
                  <div className="talk-row">
                    <span className="tk">Phone</span>
                    <span className="tv">+91 94074 74888</span>
                  </div>
                </div>
              </div>
              <div className="mt-7 border-t border-hair pt-6">
                <p className="eyebrow" style={{ textAlign: "left" }}>
                  Featured
                </p>
                <Link className="ft-card rv" href="/case-studies/rbi-innovation-hub/">
                  <p className="ft-k">Newest case study</p>
                  <h3 className="ft-t">A national grievance protocol any regulated bank can adopt.</h3>
                  <div className="ft-figs">
                    <div>
                      <span className="n tally">~80%</span>
                      <span className="l">lower grievance time</span>
                    </div>
                    <div>
                      <span className="n tally">~2 min</span>
                      <span className="l">to register a grievance</span>
                    </div>
                    <div>
                      <span className="n tally">12+</span>
                      <span className="l">Indic languages</span>
                    </div>
                  </div>
                  <span className="ft-go">
                    Read the case study
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
              <div className="mt-6 border-t border-hair pt-5">
                <p className="cert-strip eyebrow" style={{ textAlign: "left" }}>
                  ISO/IEC 27001:2022 · SOC 2 Type II · PII masking · AES-256 encryption · isolated hosting ·
                  role-based access
                </p>
              </div>
            </div>
            <div className="flex rv" data-d="120">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink pt-[96px] pb-[104px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="h-sec rv">Proof in production.</h2>
          </div>
          <ProofBlock />
        </div>
      </section>
    </main>
  );
}
