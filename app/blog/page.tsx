import { BlogListingPage } from "@/components/BlogListingPage";
import { listingTitle } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: listingTitle(null, 1),
  description: "Field notes from the teams engineering AI that delivers enterprise value.",
  path: "/blog/",
});

export default function BlogPage() {
  return <BlogListingPage category={null} page={1} />;
}
