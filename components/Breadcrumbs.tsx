import { Fragment } from "react";
import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbList, graph, type Crumb } from "@/lib/jsonld";

/* The visible breadcrumb and its BreadcrumbList schema come from the same list, so they
   match item for item. Markup is the design layer's: a Link per page, a plain span for a
   label that is not a page, and the current page as the last item. */
export function Breadcrumbs({ items, className = "crumb rv" }: { items: Crumb[]; className?: string }) {
  return (
    <>
      <nav className={className} aria-label="Breadcrumb">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <Fragment key={i}>
              {i > 0 && <span className="sep">·</span>}
              {c.href ? (
                <Link href={c.href}>{c.label}</Link>
              ) : last ? (
                <span aria-current="page">{c.label}</span>
              ) : (
                <span className="text-white/45">{c.label}</span>
              )}
            </Fragment>
          );
        })}
      </nav>
      <JsonLd data={graph(breadcrumbList(items))} />
    </>
  );
}
