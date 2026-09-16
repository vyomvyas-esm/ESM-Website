"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PyzoLogo } from "./PyzoLogo";
import { ThemeSwitch } from "./ThemeSwitch";

const NAV: { label: string; items: { label: string; href: string }[] }[] = [
  {
    label: "Engineering",
    items: [
      { label: "Agentic AI", href: "/services/agentic-ai" },
      { label: "AI Governance", href: "/services/ai-governance" },
      { label: "Enterprise AI", href: "/services/enterprise-ai" },
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "Banking & Financial Services", href: "/industries/bfsi" },
      { label: "Healthcare & Life Sciences", href: "/industries/healthcare" },
      { label: "Public Sector & Governance", href: "/industries/public-sector" },
      { label: "Consumer & Retail", href: "/industries/retail" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Reports", href: "/reports" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Technology", href: "/technology" },
    ],
  },
];

const PYZO_ITEMS = ["Atlas", "Compass", "Evio", "Forge", "Loupe", "Prism"].map((p) => ({
  label: p,
  href: `/pyzo/${p.toLowerCase()}`,
}));

function Chevron() {
  return (
    <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* A hover menu that mutes itself once you have picked something, so it is not
   still hanging open over the page you just arrived on. */
function Dropdown({ trigger, items }: { trigger: React.ReactNode; items: { label: string; href: string }[] }) {
  const [muted, setMuted] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.blur();
    setMuted(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setMuted(false), 1200);
  };
  return (
    <div className={`dd${muted ? " dd-mute" : ""}`} onMouseLeave={() => setMuted(false)}>
      {trigger}
      <div className="dd-menu">
        {items.map((it) => (
          <Link key={it.href} className="dd-item w-full text-left" href={it.href} onClick={pick}>
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const progRef = useRef<HTMLElement>(null);
  const progWrapRef = useRef<HTMLDivElement>(null);

  // the menu never outlives the page it was opened on
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    let pending = false;
    const draw = () => {
      pending = false;
      setStuck(window.scrollY > 12);
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 40 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (progRef.current) progRef.current.style.transform = `scaleX(${p.toFixed(4)})`;
      progWrapRef.current?.classList.toggle("on", p > 0.002);
    };
    const queue = () => {
      if (!pending) {
        pending = true;
        requestAnimationFrame(draw);
      }
    };
    draw();
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    return () => {
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
    };
  }, [pathname]);

  return (
    <header id="hdr" className={`site-header fixed top-0 inset-x-0 z-50${stuck ? " is-stuck" : ""}`}>
      <div className="mx-auto max-w-shell px-6 lg:px-8">
        <div className="flex h-[68px] items-center justify-between gap-6">
          <Link aria-label="Es Magico home" className="shrink-0 text-white" href="/">
            <span className="esm-mark nav"></span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            <Dropdown
              trigger={
                <Link className="nav-link is-accent" aria-label="PYZO" href="/pyzo">
                  <PyzoLogo /> <Chevron />
                </Link>
              }
              items={PYZO_ITEMS}
            />
            {NAV.map((g) => (
              <Dropdown
                key={g.label}
                trigger={
                  <span className="nav-link cursor-default">
                    {g.label}
                    <Chevron />
                  </span>
                }
                items={g.items}
              />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeSwitch />{" "}
            <Link className="btn btn-light btn-sm hidden sm:inline-flex" href="/contact">
              Define an Outcome
            </Link>{" "}
            <button
              type="button"
              className="lg:hidden grid h-9 w-9 place-items-center rounded-full border border-hair text-white"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4.5h12M2 8h12M2 11.5h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`mmenu lg:hidden border-t border-hair backdrop-blur-xl${open ? "" : " hidden"}`}>
        <nav className="mx-auto max-w-shell px-6 py-5 flex flex-col gap-3" aria-label="Mobile">
          <Link className="flex text-left" aria-label="PYZO" href="/pyzo">
            <PyzoLogo size="lg" />
          </Link>
          <div className="flex flex-col gap-3 pl-3 border-l border-hair">
            {PYZO_ITEMS.map((it) => (
              <Link key={it.href} className="text-left text-sm text-white/70" href={it.href}>
                {it.label}
              </Link>
            ))}
          </div>
          {NAV.map((g) => (
            <div key={g.label} className="contents">
              <p className="mt-2 text-sm text-white/50">{g.label}</p>
              <div className="flex flex-col gap-3 pl-3 border-l border-hair">
                {g.items.map((it) => (
                  <Link key={it.href} className="text-left text-sm text-white/70" href={it.href}>
                    {it.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <Link className="btn btn-light btn-sm" href="/contact">
              Define an Outcome
            </Link>{" "}
            <span className="text-[12px] text-white/45">Appearance</span> <ThemeSwitch />
          </div>
        </nav>
      </div>

      <div ref={progWrapRef} className="hdr-prog" aria-hidden="true">
        <i ref={progRef}></i>
      </div>
    </header>
  );
}
