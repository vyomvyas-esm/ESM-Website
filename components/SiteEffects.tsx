"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/*
 * Progressive enhancements that work off class hooks in the design layer:
 *
 *   .rv        fades in the first time it scrolls into view (data-d = delay in ms)
 *   .tally     numbers count up the first time they are seen
 *   .faq       <details> open and close with an animated height
 *   rails      contents lists on articles and legal pages track the current section
 *
 * Everything is idempotent and re-armed on navigation, and a MutationObserver
 * picks up elements that client components render later (filtered cards, tabs).
 */
export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (window.matchMedia("(hover:hover)").matches) document.documentElement.classList.add("can-hover");
    const cleanups: (() => void)[] = [];

    /* ---------- reveals ---------- */
    const reveal = (el: HTMLElement) => {
      el.style.transitionDelay = `${el.getAttribute("data-d") || 0}ms`;
      el.classList.add("in");
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            reveal(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    const watchReveals = () => {
      document.querySelectorAll<HTMLElement>(".rv:not(.in)").forEach((el) => {
        // already on the first screen: show it now rather than waiting for a scroll
        if (el.getBoundingClientRect().top < window.innerHeight) reveal(el);
        else io.observe(el);
      });
    };
    // safety net: anything still unrevealed once the page has settled is shown
    const sweep = () => {
      document.querySelectorAll<HTMLElement>(".rv:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < innerHeight * 1.4 && r.bottom > -200) el.classList.add("in");
      });
    };
    const sweepTimer = setTimeout(sweep, 1200);
    let scrollTimer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(sweep, 400);
    };
    addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => {
      io.disconnect();
      clearTimeout(sweepTimer);
      clearTimeout(scrollTimer);
      removeEventListener("scroll", onScroll);
    });

    /* ---------- count-ups ---------- */
    const seen = new WeakSet<Element>();
    const NUM = /([0-9][0-9,]*(?:[.][0-9]+)?)/;
    const isNum = (s: string) => s.length > 0 && "0123456789".includes(s.charAt(0));
    const fmt = (sample: string, value: number) => {
      const dec = (sample.split(".")[1] || "").length;
      let out = dec ? value.toFixed(dec) : String(Math.round(value));
      if (sample.includes(",")) out = Number(out).toLocaleString("en-US");
      return out;
    };
    const tally = (el: HTMLElement) => {
      const target = el.textContent || "";
      const parts = target.split(NUM);
      if (!parts.some(isNum) || reduce) return;
      let t0: number | null = null;
      const dur = 950;
      const frame = (now: number) => {
        if (!el.isConnected) return;
        if (t0 === null) t0 = now;
        const p = Math.min(1, (now - t0) / dur);
        const k = 1 - Math.pow(1 - p, 3);
        el.textContent = parts.map((s) => (isNum(s) ? fmt(s, parseFloat(s.split(",").join("")) * k) : s)).join("");
        if (p < 1) requestAnimationFrame(frame);
        else el.textContent = target;
      };
      requestAnimationFrame(frame);
    };
    const tallyIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !seen.has(e.target)) {
            seen.add(e.target);
            tally(e.target as HTMLElement);
            tallyIO.unobserve(e.target);
          }
        }
      },
      { threshold: 0.45 },
    );
    const watchTallies = () => {
      document.querySelectorAll<HTMLElement>(".tally").forEach((el) => {
        if (!seen.has(el)) tallyIO.observe(el);
      });
    };
    cleanups.push(() => tallyIO.disconnect());

    /* ---------- accordion: animate the open and the close ---------- */
    const onFaqClick = (ev: MouseEvent) => {
      const sum = (ev.target as Element).closest<HTMLElement>(".faq summary");
      if (!sum) return;
      const det = sum.parentElement as HTMLDetailsElement;
      const ans = det.querySelector<HTMLElement>(".ans");
      if (!ans) return;
      ev.preventDefault();
      if (det.dataset.busy === "1") return;
      if (reduce) {
        det.open = !det.open;
        return;
      }
      det.dataset.busy = "1";
      if (!det.open) {
        det.open = true;
        const end = ans.scrollHeight;
        ans.animate([{ height: "0px", opacity: 0 }, { height: `${end}px`, opacity: 1 }], {
          duration: 340,
          easing: "cubic-bezier(.2,.7,.3,1)",
        }).onfinish = () => {
          ans.style.height = "";
          det.dataset.busy = "0";
        };
      } else {
        const start = ans.getBoundingClientRect().height;
        ans.animate([{ height: `${start}px`, opacity: 1 }, { height: "0px", opacity: 0 }], {
          duration: 270,
          easing: "cubic-bezier(.4,0,.6,1)",
        }).onfinish = () => {
          det.open = false;
          ans.style.height = "";
          det.dataset.busy = "0";
        };
      }
    };
    document.addEventListener("click", onFaqClick);
    cleanups.push(() => document.removeEventListener("click", onFaqClick));

    /* ---------- contents rails ---------- */
    const rail = (links: HTMLElement[], key: string, targets: Element[], rootMargin: string) => {
      if (!links.length || !targets.length) return;
      const rio = new IntersectionObserver(
        (entries) => {
          for (const en of entries) {
            if (!en.isIntersecting) continue;
            links.forEach((l) => l.classList.toggle("current", l.dataset[key] === en.target.id));
          }
        },
        { rootMargin, threshold: 0 },
      );
      targets.forEach((t) => rio.observe(t));
      cleanups.push(() => rio.disconnect());
    };
    rail(
      [...document.querySelectorAll<HTMLElement>(".ar-link[data-sec]")],
      "sec",
      [...document.querySelectorAll(".prose h2[id]")],
      "-110px 0px -72% 0px",
    );
    rail(
      [...document.querySelectorAll<HTMLElement>(".lg-toc-link[data-toc]")],
      "toc",
      [...document.querySelectorAll(".lg-sec")],
      "-110px 0px -70% 0px",
    );

    /* ---------- arm, and re-arm when client components render new hooks ---------- */
    const arm = () => {
      watchReveals();
      watchTallies();
    };
    arm();
    let moTimer: ReturnType<typeof setTimeout>;
    const mo = new MutationObserver(() => {
      clearTimeout(moTimer);
      moTimer = setTimeout(arm, 30);
    });
    mo.observe(document.body, { childList: true, subtree: true });
    cleanups.push(() => {
      mo.disconnect();
      clearTimeout(moTimer);
    });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
