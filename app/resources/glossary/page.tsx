import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { graph } from "@/lib/jsonld";
import { definedTermSet } from "@/lib/jsonld";
import { glossary } from "@/data/glossary";
import Link from "next/link";
import { GlossaryIndex } from "@/components/GlossaryIndex";
export const metadata = pageMetadata({
  title: "AI and Agentic Systems Glossary",
  description:
    "Most of this vocabulary was coined in demonstrations and acquires a different weight once a system is deployed and answerable for what it produces.",
  path: "/resources/glossary/",
});
export default function GlossaryPage() {
  return (
    <main className="page" id="page-glossary">
      <JsonLd data={graph(definedTermSet(glossary))} />
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[88px]">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Resources" }, { label: "Glossary" }]}
          />
          <h1 className="h-hero mt-6 max-w-[17ch] rv" data-d="60">
            The Agentic AI Glossary
          </h1>
          <p className="lede mt-5 max-w-[680px] rv" data-d="120">
            Most of this vocabulary was coined in demonstrations and acquires a different weight once a system
            is deployed and answerable for what it produces. Each definition gives the production meaning.
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
      <section className="relative bg-ink pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <GlossaryIndex />
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
