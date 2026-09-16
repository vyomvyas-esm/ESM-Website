import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Arrow";
import { Cta } from "@/components/Cta";
import { caseStudies } from "@/data/case-studies";

type Params = { params: Promise<{ slug: string }> };

const bySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const cs = bySlug((await params).slug);
  if (!cs) return {};
  return { title: cs.metaTitle || cs.title, description: cs.lede };
}

export default async function CaseStudyPage({ params }: Params) {
  const cs = bySlug((await params).slug);
  if (!cs) notFound();

  return (
    <main className="page">
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[80px]">
          <nav className="crumb rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">·</span>
            <span className="text-white/45">Resources</span>
            <span className="sep">·</span>
            <Link href="/case-studies">Case Studies</Link>
            <span className="sep">·</span>
            <span aria-current="page">{cs.client}</span>
          </nav>
          <div className="cs-mark-wrap rv" data-d="30">
            <span className={`clogo cs-mark ${cs.logo}`} role="img" aria-label={cs.client}></span>
          </div>
          <h1 className="h-hero mt-6 max-w-[18ch] rv" data-d="60">
            {cs.title}
          </h1>
          <p className="lede mt-5 max-w-[680px] rv" data-d="120">
            {cs.lede}
          </p>
          <div className="mt-7 flex flex-wrap gap-2 rv" data-d="160">
            {cs.chips.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink pb-[80px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          {/* authored HTML carried over from the original site */}
          <div className="prose max-w-[72ch] rv" dangerouslySetInnerHTML={{ __html: cs.html }} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink pb-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="glow-top" aria-hidden="true"></div>
          <span className="eyebrow rv">The outcomes we own</span>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cs.metrics.map((m, i) => (
              <div key={m.label} className="metric-card rv" data-d={i * 50}>
                <div className="n tally">{m.n}</div>
                <p>{m.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rv">
            <Link className="btn btn-ghost group" href="/case-studies">
              All case studies
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <Cta>Tell us the number you need to move.</Cta>
    </main>
  );
}
