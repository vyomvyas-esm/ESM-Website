"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { blogCards, blogFilters } from "@/data/blog-index";
import type { BlogCard } from "@/data/types";
import { Arrow } from "./Arrow";
import { Byline } from "./Byline";
import { FilterSelect } from "./FilterSelect";

const STEP = 12;

function Thumb({ src, className }: { src: string | null; className: string }) {
  return (
    <div className={className}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="thumb"
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="thumb thumb-none">
          <span>Image to come</span>
        </span>
      )}
    </div>
  );
}

function Featured({ card }: { card: BlogCard }) {
  return (
    <Link
      className="bl-feat card group grid cursor-pointer overflow-hidden md:grid-cols-2 rv"
      href={`/blog/${card.slug}/`}
    >
      <Thumb
        src={card.thumb}
        className="relative min-h-[240px] overflow-hidden"
      />
      <div className="flex flex-col justify-center p-7 lg:p-9">
        <div className="flex items-center gap-3">
          <span className="bl-tag">{card.tag}</span>
          <span className="text-[11px] text-white/35">{card.date}</span>
        </div>
        <h3 className="mt-4 font-display text-[clamp(1.15rem,1.9vw,1.5rem)] font-medium leading-snug tracking-[-.02em]">
          {card.title}
        </h3>
        <p className="mt-3 text-[12.5px] leading-[1.75] text-white/45">
          {card.featured?.excerpt}
        </p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <Byline author={card.author} size={30} />
          <span className="inline-flex items-center gap-2 text-[12px] text-teal">
            Read the blog
            <Arrow />
          </span>
        </div>
      </div>
    </Link>
  );
}

function Card({ card, index }: { card: BlogCard; index: number }) {
  return (
    <Link
      className="bl-card card group flex cursor-pointer flex-col overflow-hidden rv"
      data-d={(index % 3) * 60}
      href={`/blog/${card.slug}/`}
    >
      <Thumb src={card.thumb} className="relative h-[176px] overflow-hidden" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          <span className="bl-tag">{card.tag}</span>
          <span className="text-[10.5px] text-white/35">{card.date}</span>
        </div>
        <h3 className="mt-3 font-display text-[13.5px] font-medium leading-snug">
          {card.title}
        </h3>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <Byline author={card.author} size={26} />
          <span className="shrink-0 inline-flex items-center gap-1.5 text-[11.5px] text-teal">
            Read{" "}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <Arrow />
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export function BlogIndex() {
  const [q, setQ] = useState("");
  const [topic, setTopic] = useState("");
  const [author, setAuthor] = useState("");
  const [sort, setSort] = useState("new");
  const [shown, setShown] = useState(STEP);
  const barRef = useRef<HTMLDivElement>(null);

  // /blog?author=Name, from the leadership bubbles on the About page. Read on the
  // client so the page stays fully static and hydrates in a single pass.
  useEffect(() => {
    const who = new URLSearchParams(window.location.search).get("author");
    if (!who || !blogFilters.authors.some((a) => a.value === who)) return;
    setAuthor(who);
    setShown(STEP);
    barRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const live = useMemo(() => {
    const k = q.trim().toLowerCase();
    const dir = sort === "old" ? -1 : 1;
    return blogCards
      .filter(
        (c) =>
          (!k || c.txt.includes(k)) &&
          (!topic || c.topic === topic) &&
          (!author || c.author.name === author),
      )
      .sort((a, b) => (a.ts - b.ts) * dir);
  }, [q, topic, author, sort]);

  const feats = blogCards.filter((c) => c.featured);
  const featured =
    feats.find((c) => c.featured!.author === author) ??
    feats.find((c) => c.featured!.author === "");
  const featKey = featured?.featured?.author ?? "";
  const visible = Math.min(shown, live.length);
  const reset =
    <T,>(set: (v: T) => void) =>
    (v: T) => {
      set(v);
      setShown(STEP);
    };

  return (
    <>
      <h2 className="h-sec rv">
        {featKey ? `Start with ${featKey}.` : "Start here."}
      </h2>
      <div className="mt-9">
        {featured && <Featured key={featured.slug} card={featured} />}
      </div>

      {/* the original kept the rail in its own section; this wrapper keeps that 70px gap */}
      <div className="mt-[70px]">
        <div className="bl-layout">
          <aside className="bl-rail">
            <div ref={barRef} className="bl-bar rv">
              <div className="bl-search">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0 text-white/35"
                  aria-hidden="true"
                >
                  <circle
                    cx="7"
                    cy="7"
                    r="4.6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="m10.6 10.6 3 3"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  className="srch"
                  type="search"
                  placeholder="Search blogs"
                  aria-label="Search blogs"
                  value={q}
                  onChange={(e) => reset(setQ)(e.target.value)}
                />
              </div>
              <div className="bl-selects">
                <FilterSelect
                  label="Category"
                  value={topic}
                  options={blogFilters.topics}
                  onChange={reset(setTopic)}
                />
                <FilterSelect
                  label="Author"
                  value={author}
                  options={blogFilters.authors}
                  onChange={reset(setAuthor)}
                />
                <FilterSelect
                  label="Sort"
                  value={sort}
                  options={[
                    { value: "new", label: "Newest first" },
                    { value: "old", label: "Oldest first" },
                  ]}
                  onChange={reset(setSort)}
                />
              </div>
            </div>
          </aside>
          <div className="bl-main">
            <div className="grid gap-4 md:grid-cols-2">
              {live.slice(0, shown).map((c, i) => (
                <Card key={c.slug} card={c} index={i} />
              ))}
            </div>
            {live.length === 0 && (
              <p className="mt-10 text-[13px] text-white/45">
                Nothing matches that yet.
              </p>
            )}
            {live.length > 0 && visible < live.length && (
              <div className="mt-10 flex flex-col items-center gap-3">
                <button
                  type="button"
                  className="btn btn-ghost group"
                  onClick={() => setShown((s) => s + STEP)}
                >
                  Show more blogs
                  <Arrow />
                </button>
                <p className="text-[11.5px] text-white/35">
                  Showing {visible} of {live.length}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
