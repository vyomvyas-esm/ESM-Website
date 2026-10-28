import Link from "next/link";
import { Arrow } from "./Arrow";

/* The closing band on every page. Pages with bespoke headlines keep their own
   copy inline; the templated routes (blog, case studies) use this one. */
export function Cta({ children }: { children?: React.ReactNode }) {
  return (
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
                {children ?? (
                  <>
                    Tell us the number you need to <span className="text-teal">move.</span>
                  </>
                )}
              </h2>
              <p className="cta-sig mt-7">…outcomes that survive scrutiny.</p>
            </div>
            <div className="flex flex-col items-start lg:pt-2">
              <Link className="btn btn-light group" href="/contact/">
                Define an Outcome
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
