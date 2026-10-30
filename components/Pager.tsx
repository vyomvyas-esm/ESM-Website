import Link from "next/link";

/* Which numbers to show: every page when there are few, otherwise the first, the last and
   the current page with its neighbours, with a gap marker where pages are skipped. */
export function pageWindow(page: number, pages: number): (number | "gap")[] {
  if (pages <= 7) return Array.from({ length: pages }, (_, i) => i + 1);
  const keep = new Set([1, pages, page - 1, page, page + 1].filter((n) => n >= 1 && n <= pages));
  // near either end, show enough numbers that the row does not jump in length
  if (page <= 3) [2, 3, 4].forEach((n) => keep.add(n));
  if (page >= pages - 2) [pages - 3, pages - 2, pages - 1].forEach((n) => keep.add(n));
  const sorted = [...keep].sort((a, b) => a - b);
  const out: (number | "gap")[] = [];
  sorted.forEach((n, i) => {
    if (i > 0 && n - sorted[i - 1] > 1) out.push("gap");
    out.push(n);
  });
  return out;
}

function Chevron({ back }: { back?: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={back ? "M10 3.5 5.5 8l4.5 4.5" : "M6 3.5 10.5 8 6 12.5"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface Props {
  page: number;
  pages: number;
  label: string;
  /** real links, for routes a crawler should follow */
  hrefFor?: (n: number) => string;
  /** in-page paging, for results that exist only in the browser */
  onPick?: (n: number) => void;
}

/* Numbered pages with arrows either side. Given hrefFor it renders links; given onPick,
   buttons. An arrow with nowhere to go stays in place, disabled, so the row never shifts. */
export function Pager({ page, pages, label, hrefFor, onPick }: Props) {
  if (pages < 2) return null;
  const item = (n: number, content: React.ReactNode, className: string, extra: Record<string, string> = {}) =>
    hrefFor ? (
      <Link className={className} href={hrefFor(n)} {...extra}>
        {content}
      </Link>
    ) : (
      <button type="button" className={className} onClick={() => onPick?.(n)} {...extra}>
        {content}
      </button>
    );
  return (
    <nav className="pager" aria-label={label}>
      {page > 1 ? (
        item(page - 1, <Chevron back />, "pager-arrow", { "aria-label": "Previous page", rel: "prev" })
      ) : (
        <span className="pager-arrow is-off" aria-hidden="true">
          <Chevron back />
        </span>
      )}
      {pageWindow(page, pages).map((n, i) =>
        n === "gap" ? (
          <span key={`gap-${i}`} className="pager-gap" aria-hidden="true">
            …
          </span>
        ) : n === page ? (
          <span key={n} className="pager-num is-on" aria-current="page">
            {n}
          </span>
        ) : (
          <span key={n}>{item(n, n, "pager-num", { "aria-label": `Page ${n}` })}</span>
        ),
      )}
      {page < pages ? (
        item(page + 1, <Chevron />, "pager-arrow", { "aria-label": "Next page", rel: "next" })
      ) : (
        <span className="pager-arrow is-off" aria-hidden="true">
          <Chevron />
        </span>
      )}
    </nav>
  );
}
