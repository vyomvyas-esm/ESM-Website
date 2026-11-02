import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { glossary } from "@/data/glossary";
import { GLOSSARY_PATH, definedTerm, graph } from "@/lib/jsonld";
import { firstSentences, pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ term: string }> };

const bySlug = (slug: string) => glossary.find((t) => t.slug === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return glossary.map((t) => ({ term: t.slug }));
}

/* Each term carries a title and description written for it in the design. */
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const t = bySlug((await params).term);
  if (!t) return {};
  // the written description where it fits the limit, otherwise its leading sentences, then the lede's
  const description = firstSentences(t.metaDescription) || firstSentences(t.lede) || firstSentences(t.def);
  return pageMetadata({ title: t.metaTitle || t.term, description, path: `${GLOSSARY_PATH}${t.slug}/` });
}

export default async function GlossaryTermPage({ params }: Params) {
  const t = bySlug((await params).term);
  if (!t) notFound();
  const related = t.related.map((slug) => bySlug(slug)!);

  return (
    <main className="page glt" id={`page-gl-${t.slug}`}>
      <JsonLd data={graph(definedTerm(t))} />
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[80px]">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Resources" }, { label: "Glossary", href: GLOSSARY_PATH }, { label: t.term }]}
          />
          <div className="gt-lock mt-6 rv" data-d="60">
            <h1 className="h-sec">{t.term}</h1>
            <Link className="gt-badge" href={t.capability.href}>
              {t.capability.label}
            </Link>
          </div>
          <p className="lede mt-5 max-w-[680px] rv" data-d="120">
            {t.lede}
          </p>
        </div>
      </section>
      <section className="relative bg-ink pb-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <article className="gt-body rv" dangerouslySetInnerHTML={{ __html: t.html }} />
          {related.length > 0 && (
            <div className="gt-rel rv">
              <h2>Related terms</h2>
              <div className="gt-relgrid">
                {related.map((r) => (
                  <Link key={r.slug} className="gt-relcard" href={`${GLOSSARY_PATH}${r.slug}/`}>
                    <span className="t">{r.term}</span>
                    <span className="d">{r.def}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <p className="gt-back rv">
            <Link href={GLOSSARY_PATH}>All {glossary.length} terms</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
