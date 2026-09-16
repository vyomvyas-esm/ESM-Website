import type { Metadata } from "next";
import Link from "next/link";
import { CareersApplyForm } from "@/components/CareersApplyForm";
export const metadata: Metadata = {
  title: "Introduce yourself - Es Magico",
};
export default function CareersApplyPage() {
  return (
    <main className="page" id="page-careers-apply">
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
            <span className="text-white/45">Company</span>
            <span className="sep">·</span>
            <Link href="/careers">Careers</Link>
            <span className="sep">·</span>
            <span aria-current="page">Introduce yourself</span>
          </nav>
          <div className="mt-8 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col rv">
              <h1 className="font-display text-[clamp(1.75rem,3.1vw,2.5rem)] font-normal leading-[1.15] tracking-[-.025em] max-w-[16ch]">
                Tell us what you have shipped.
              </h1>
              <p className="lede hero-lede mt-5 max-w-[560px]">
                Tell us what you have owned in production and what it cost you to learn, and we will keep it
                in front of the people who decide.
              </p>
              <div className="mt-8">
                <h2 className="text-[11px] uppercase tracking-[.16em] text-teal">Talk to us directly</h2>
                <div className="mt-3 max-w-[440px]">
                  <div className="talk-row">
                    <span className="tk">Email</span>
                    <span className="tv">
                      <a href="mailto:careers@esmagico.com">careers@esmagico.com</a>
                    </span>
                  </div>
                  <div className="talk-row">
                    <span className="tk">Offices</span>
                    <span className="tv">Mumbai &amp; Bengaluru</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex rv" data-d="120">
              <CareersApplyForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
