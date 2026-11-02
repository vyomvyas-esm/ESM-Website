import type { JsonLd as JsonLdData } from "@/lib/jsonld";

/* Server-rendered structured data. The "<" escape keeps a literal "</script>" inside a
   string value from ending the block early. */
export function JsonLd({ data }: { data: JsonLdData }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }} />;
}
