import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import { BlogIndex } from "@/components/BlogIndex";
import { cardsFor, pageCount, PAGE_SIZE, type Category } from "@/lib/blog";
/* The journal listing, shared by /blog/, /blog/page/N/ and /blog/<category>/ (SEO
   brief, Phase 4.6). The hero is the blog page's; a category page takes its name as
   the heading and adds itself to the breadcrumb. */
export function BlogListingPage({ category, page }: { category: Category | null; page: number }) {
  const all = cardsFor(category);
  const pages = pageCount(all);
  const cards = all.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const crumbs = category
    ? [
        { label: "Home", href: "/" },
        { label: "Resources" },
        { label: "Blog", href: "/blog/" },
        { label: category.tag },
      ]
    : [{ label: "Home", href: "/" }, { label: "Resources" }, { label: "Blog" }];
  return (
    <main className="page" id="page-blogs">
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[88px]">
          <Breadcrumbs items={crumbs} />
          <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
            {category ? category.tag : "The AI Operator Journal."}
          </h1>
          <p className="lede mt-5 max-w-[660px] rv" data-d="120">
            Field notes from the teams engineering AI that delivers enterprise value.
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
          <BlogIndex cards={cards} page={page} pages={pages} category={category} />
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
                  Tell us the number you need to <span className="text-teal">move.</span>
                </h2>
                <p className="cta-sig mt-7">…outcomes that survive scrutiny.</p>
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
