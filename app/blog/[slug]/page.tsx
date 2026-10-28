import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Arrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Byline } from "@/components/Byline";
import { Cta } from "@/components/Cta";
import { blogCards } from "@/data/blog-index";
import { blogPosts } from "@/data/blog-posts";
import { BlogListingPage } from "@/components/BlogListingPage";
import { CATEGORIES, categoryBySlug, listingTitle } from "@/lib/blog";
import { blogPosting, graph } from "@/lib/jsonld";
import { firstSentences, isoDateTime, pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

const bySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);

/* /blog/<slug>/ is an article, or a category listing for the six category slugs
   (no article shares a slug with a category; the converter's data keeps it that way). */
export function generateStaticParams() {
  return [...CATEGORIES.map((c) => ({ slug: c.slug })), ...blogPosts.map((p) => ({ slug: p.slug }))];
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (category) return pageMetadata({ title: listingTitle(category, 1), path: `/blog/${category.slug}/` });
  const post = bySlug(slug);
  if (!post) return {};
  const card = blogCards.find((c) => c.slug === post.slug);
  const published = isoDateTime(post.date);
  return pageMetadata({
    title: post.title,
    description: firstSentences(post.lede),
    path: `/blog/${post.slug}/`,
    type: "article",
    image: card?.thumb?.src,
    article: {
      publishedTime: published,
      // no modified date exists in the source; see docs/seo-open-items.md
      modifiedTime: published,
      authors: [post.author.name],
      section: post.tag,
      tags: [post.tag],
    },
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (category) return <BlogListingPage category={category} page={1} />;
  const post = bySlug(slug);
  if (!post) notFound();

  return (
    <main className="page">
      <JsonLd data={graph(blogPosting(post, firstSentences(post.lede)))} />
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[70px]">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }, { label: "Blog", href: "/blog/" }]} />
          <h1
            className="mt-6 max-w-[22ch] font-display text-[clamp(1.75rem,3.2vw,2.8rem)] font-normal leading-[1.18] tracking-[-.025em] rv"
            data-d="60"
          >
            {post.title}
          </h1>
          <p className="lede hero-lede mt-5 max-w-[760px] rv" data-d="120">
            {post.lede}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4 rv" data-d="140">
            <span className="bl-tag">{post.tag}</span> <span className="text-[11.5px] text-white/35">{post.date}</span>{" "}
            <Byline author={post.author} size={28} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink pb-[80px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="ar-layout">
            {post.sections.length > 0 && (
              <aside className="ar-rail">
                <p className="ar-h">{post.railTitle}</p>
                <ol className="ar-list">
                  {post.sections.map((s) => (
                    <li key={s.id}>
                      <a className="ar-link" data-sec={s.id} href={`#${s.id}`}>
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </aside>
            )}
            <div className="ar-body">
              {/* article bodies are authored HTML carried over from the original site;
                  figures are lifted out so the artwork renders through next/image */}
              <div className="prose rv">
                {post.body.map((block, i) =>
                  "html" in block ? (
                    <div key={i} dangerouslySetInnerHTML={{ __html: block.html }} />
                  ) : (
                    <figure key={i} className="art">
                      <Image
                        src={post.images[block.image].src}
                        width={post.images[block.image].width}
                        height={post.images[block.image].height}
                        alt={post.images[block.image].alt}
                        sizes="(min-width: 1024px) 700px, 100vw"
                        loading="lazy"
                      />
                    </figure>
                  ),
                )}
              </div>
              {(post.related.section || post.related.capability || post.related.caseStudies.length > 0) && (
                <p className="mt-10 text-[12.5px] leading-[1.75] text-white/45 rv">
                  Related:{" "}
                  {[post.related.capability, post.related.section, ...post.related.caseStudies]
                    .filter((l): l is NonNullable<typeof l> => !!l)
                    .map((l, i) => (
                      <span key={l.href}>
                        {i > 0 && " · "}
                        <Link className="text-teal" href={l.href}>
                          {l.label}
                        </Link>
                      </span>
                    ))}
                </p>
              )}
              <div className="mt-12 rv">
                <Link className="btn btn-ghost group" href="/blog/">
                  All blogs
                  <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
