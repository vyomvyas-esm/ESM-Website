import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListingPage } from "@/components/BlogListingPage";
import { cardsFor, listingPath, listingTitle, pageCount } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ n: string }> };

/* Page 1 is /blog/ itself; only the later pages live here. */
export function generateStaticParams() {
  const pages = pageCount(cardsFor(null));
  return Array.from({ length: pages - 1 }, (_, i) => ({ n: String(i + 2) }));
}

const pageOf = (n: string) => {
  const page = Number(n);
  return Number.isInteger(page) && page >= 2 && page <= pageCount(cardsFor(null)) ? page : null;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const page = pageOf((await params).n);
  if (!page) return {};
  return pageMetadata({ title: listingTitle(null, page), path: listingPath(null, page) });
}

export default async function BlogPageN({ params }: Params) {
  const page = pageOf((await params).n);
  if (!page) notFound();
  return <BlogListingPage category={null} page={page} />;
}
