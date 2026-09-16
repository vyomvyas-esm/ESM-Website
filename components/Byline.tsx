import type { Author } from "@/data/types";

/** Avatar, name and role, as used on blog cards and article headers. */
export function Byline({ author, size }: { author: Author; size: number }) {
  return (
    <span className="byline">
      <span className={`av ${author.avatar}`} style={{ width: `${size}px`, height: `${size}px` }}></span>
      <span className="by-txt">
        <span className="by-name">{author.name}</span>
        <span className="by-role">{author.role}</span>
      </span>
    </span>
  );
}
