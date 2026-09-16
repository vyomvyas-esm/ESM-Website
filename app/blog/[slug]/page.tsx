import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Arrow";
import { Byline } from "@/components/Byline";
import { Cta } from "@/components/Cta";
import { blogPosts } from "@/data/blog-posts";

type Params = { params: Promise<{ slug: string }> };

const bySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = bySlug((await params).slug);
  if (!post) return {};
  return { title: post.metaTitle || post.title, description: post.lede };
}

export default async function BlogPostPage({ params }: Params) {
  const post = bySlug((await params).slug);
  if (!post) notFound();

  return (
    <main className="page">
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[70px]">
          <nav className="crumb rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">·</span>
            <span className="text-white/45">Resources</span>
            <span className="sep">·</span>
            <Link href="/blog">Blog</Link>
          </nav>
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
              {/* article bodies are authored HTML carried over from the original site */}
              <div className="prose rv" dangerouslySetInnerHTML={{ __html: post.html }} />
              <div className="mt-12 rv">
                <Link className="btn btn-ghost group" href="/blog">
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
