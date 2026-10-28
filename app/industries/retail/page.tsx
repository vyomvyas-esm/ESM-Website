import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Consumer & Retail",
  description:
    "We engineer customer experience, demand and inventory that performs under real traffic and real margins, at the volume a peak week actually produces.",
  path: "/industries/retail/",
});
export default function IndRetailPage() {
  return (
    <main className="page" id="page-ind-retail">
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[96px]">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Industries" }, { label: "Consumer & Retail" }]}
          />
          <h1 className="h-hero mt-6 max-w-[18ch] rv" data-d="60">
            Retail operations that hold at peak volume
          </h1>
          <p className="lede mt-5 max-w-[680px] rv" data-d="120">
            We engineer customer experience, demand and inventory that performs under real traffic and real
            margins, at the volume a peak week actually produces.
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
                aria-label="Consumer and retail clients"
                style={{ "--bm-dur": "43s" } as Record<string, string>}
              >
                <li className="bm-item">
                  <span className="clogo logow-tatadigital" role="img" aria-label="Tata Digital"></span>
                </li>
                <li className="bm-item">
                  <span
                    className="clogo logow-tataconsumer"
                    role="img"
                    aria-label="Tata Consumer Products"
                  ></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-abfrl" role="img" aria-label="ABFRL"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-bookmyshow" role="img" aria-label="BookMyShow"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-indiamart" role="img" aria-label="IndiaMART"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-oyo" role="img" aria-label="OYO"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-epic" role="img" aria-label="Epic Global"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-whirlpool" role="img" aria-label="Whirlpool"></span>
                </li>
                <li className="bm-item">
                  <span
                    className="clogo logow-lsc"
                    role="img"
                    aria-label="LSC Freights &amp; Logistics"
                  ></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-tatadigital" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-tataconsumer" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-abfrl" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-bookmyshow" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-indiamart" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-oyo" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-epic" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-whirlpool" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-lsc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-tatadigital" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-tataconsumer" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-abfrl" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-bookmyshow" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-indiamart" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-oyo" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-epic" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-whirlpool" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-lsc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-tatadigital" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-tataconsumer" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-abfrl" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-bookmyshow" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-indiamart" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-oyo" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-epic" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-whirlpool" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-lsc" aria-hidden="true"></span>
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
              <h2 className="h-sec">What retailers are up against</h2>
            </div>
            <div className="ctrl-grid">
              <div className="ctrl-col rv" data-d="0">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Peak weeks that set the standard
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Traffic during a sale or a festive week can multiply overnight, and service has to hold at
                  that volume.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="70">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Margin lost to small errors
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Oversells and manual re-entry each take a little margin, and across thousands of orders they
                  take a great deal.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="140">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Store staff who must be ready fast
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Seasonal hiring brings new associates in large numbers, and each one has to serve customers
                  well within days.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="0">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Listings rejected before they go live
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Every marketplace applies its own content rules, and a rejected listing is lost sales until
                  someone fixes it.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="70">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Customers who expect an answer at once
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Questions about orders and returns arrive at any hour, and an unanswered one quickly becomes
                  a lost customer.
                </p>
              </div>
              <div className="ctrl-col rv" data-d="140">
                <span className="ctrl-rule"></span>
                <h3 className="mt-5 font-display text-[14.5px] font-medium leading-snug">
                  Loyalty that fades after the first purchase
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/45">
                  Customers who complete one purchase often go quiet, and winning them back costs more than
                  keeping them engaged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ind-uses" className="relative overflow-hidden bg-ink pt-[96px] pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Across retail</span>
          <h2 className="h-sec rv" data-d="60">
            Where AI fits in retail
          </h2>
          <div className="iq-grid mt-[46px]">
            <article className="iq-cell rv" data-d="0">
              <div className="iq-top">
                <span className="iq-pzmark pzlogo-atlas" role="img" aria-label="Atlas"></span>
                <h3 className="iq-name">Seasonal hiring without the service dip</h3>
              </div>
              <p className="iq-note">
                Converts your brand standards and product knowledge into short, assessed lessons that make a
                new store associate productive in days, and absorb a seasonal hiring surge without diluting
                service.
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
                <span className="iq-pzmark pzlogo-compass" role="img" aria-label="Compass"></span>
                <h3 className="iq-name">Category reviews drafted for you</h3>
              </div>
              <p className="iq-note">
                Gives a store or category team instant answers from your merchandising and pricing documents,
                and drafts the weekly performance review from the same controlled source.
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
                <span className="iq-pzmark pzlogo-evio" role="img" aria-label="Evio"></span>
                <h3 className="iq-name">Customers answered through every peak</h3>
              </div>
              <p className="iq-note">
                Manages order, delivery and returns conversations at the volume your seasonal peaks create,
                and recovers the carts and renewals that would otherwise go quiet.
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
                <span className="iq-pzmark pzlogo-forge" role="img" aria-label="Forge"></span>
                <h3 className="iq-name">Inventory that reconciles itself</h3>
              </div>
              <p className="iq-note">
                Operates returns and inventory-reconciliation workflows across your store and marketplace
                systems, removing the oversell and manual entry that erode margin.
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
                <span className="iq-pzmark pzlogo-loupe" role="img" aria-label="Loupe"></span>
                <h3 className="iq-name">Sellers onboarded right the first time</h3>
              </div>
              <p className="iq-note">
                Guides a seller or franchise partner through onboarding and product-data entry, validating
                each attribute so listings go live without rejection or rework.
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
                <span className="iq-pzmark pzlogo-prism" role="img" aria-label="Prism"></span>
                <h3 className="iq-name">Vendor and store audits without sampling</h3>
              </div>
              <p className="iq-note">
                Evaluates vendor submissions and store audits against your rubric at a coverage no sampling
                approach reaches, with the reasoning shown and the override left to you.
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
      <section id="ind-retail-proof" className="relative overflow-hidden bg-ink pt-[108px] pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="pf-head">
            <div>
              <span className="eyebrow rv">Proof in retail</span>
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
                <span className="clogo ca-logo logow-tataneu2" role="img" aria-label="Tata Neu"></span>
                <span className="ca-head">
                  27% increase in customer retention with a gamified rewards engine
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">45%</div>
                      <div className="l">Reward redemption</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">0.75M+</div>
                      <div className="l">Users engaged</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">1.8M+</div>
                      <div className="l">Rewards issued</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    A gamified rewards engine turns complex app interactions of user cohorts into
                    high-engagement playable mechanics at enterprise scale.
                  </p>
                  <Link className="ca-link group" href="/case-studies/tata-neu/">
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
                <span className="clogo ca-logo logow-epic" role="img" aria-label="Epic Global"></span>
                <span className="ca-head">
                  86% reduction in redundant manual work across the listing workflow
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">86%</div>
                      <div className="l">Less redundant manual work</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">Under 2 hrs</div>
                      <div className="l">To onboard a brand</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">37%</div>
                      <div className="l">Fields pre-filled</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    A marketplace enablement platform that turns multi-brand catalogue work into automated
                    listing and order operations across three marketplaces.
                  </p>
                  <Link className="ca-link group" href="/case-studies/epic-global/">
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
            <details className="ca-row rv" data-d="120">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="clogo ca-logo logow-whirlpool" role="img" aria-label="Whirlpool"></span>
                <span className="ca-head">
                  54% reduction in procurement cycle time through validation at the point of entry
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">54%</div>
                      <div className="l">Shorter procurement cycle</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">72%</div>
                      <div className="l">Faster data validation</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">Retrievable</div>
                      <div className="l">Recurring faults</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    An intelligent document protocol that turns supplier submissions into validated
                    procurement records, with every error explained at the point of entry.
                  </p>
                  <Link className="ca-link group" href="/case-studies/whirlpool/">
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
              data-topic="EsMagico"
              data-author="Shreyas Sanghvi"
              data-ts="105"
              data-txt="personalisation that holds up at scale: retail ai beyond the pilot about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="0"
              href="/blog/personalisation-that-holds-up-at-scale/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/219-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Personalisation That Holds Up at Scale
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    21 November 2025
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
              data-topic="EsMagico"
              data-author="Shreyas Sanghvi"
              data-ts="93"
              data-txt="demand and inventory intelligence that performs under real margins about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="60"
              href="/blog/demand-and-inventory-intelligence-under-real-margins/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/231-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Demand and Inventory Under Real Margins
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    19 December 2025
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
              data-topic="EsMagico"
              data-author="Shreyas Sanghvi"
              data-ts="98"
              data-txt="order, delivery and returns calls: voice ai for retail operations about es magico shreyas sanghvi"
              className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
              data-d="120"
              href="/blog/order-delivery-and-returns-calls/"
            >
              <div className="relative h-[176px] overflow-hidden">
                <img className="thumb" src="/blog/226-t.webp" alt="" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[13.5px] font-medium leading-snug">
                  Order, Delivery and Returns Calls
                </h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="bl-tag">EsMagico</span>
                  <span className="bl-date shrink-0 text-right text-[10.5px] text-white/35">
                    8 December 2025
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
                  Hold your margins through the <span className="text-teal">peak week</span>
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
