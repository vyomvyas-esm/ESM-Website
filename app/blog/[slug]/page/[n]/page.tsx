import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListingPage } from "@/components/BlogListingPage";
import { CATEGORIES, cardsFor, categoryBySlug, listingPath, listingTitle, pageCount } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string; n: string }> };

/* /blog/<category>/page/N/ for N >= 2; page 1 is /blog/<category>/ */
export function generateStaticParams() {
  return CATEGORIES.flatMap((c) => {
    const pages = pageCount(cardsFor(c));
    return Array.from({ length: pages - 1 }, (_, i) => ({ slug: c.slug, n: String(i + 2) }));
  });
}

const resolve = (slug: string, n: string) => {
  const category = categoryBySlug(slug);
  const page = Number(n);
  if (!category || !Number.isInteger(page) || page < 2 || page > pageCount(cardsFor(category))) return null;
  return { category, page };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug, n } = await params;
  const r = resolve(slug, n);
  if (!r) return {};
  return pageMetadata({ title: listingTitle(r.category, r.page), path: listingPath(r.category, r.page) });
}

export default async function CategoryPageN({ params }: Params) {
  const { slug, n } = await params;
  const r = resolve(slug, n);
  if (!r) notFound();
  return <BlogListingPage category={r.category} page={r.page} />;
}
