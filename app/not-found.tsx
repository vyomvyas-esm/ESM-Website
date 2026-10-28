import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <main className="page">
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[120px] pb-[120px]">
          <span className="eyebrow rv">404</span>
          <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
            That page is not in production.
          </h1>
          <p className="lede mt-5 max-w-[560px] rv" data-d="120">
            The link may be old, or the page may have moved. Start again from the home page.
          </p>
          <div className="mt-8 rv" data-d="180">
            <Link className="btn btn-light group" href="/">
              Back to home
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
