"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/*
 * Progressive enhancements that work off class hooks in the design layer:
 *
 *   .rv        fades in the first time it scrolls into view (data-d = delay in ms)
 *   .tally     numbers count up the first time they are seen
 *   .faq       <details> open and close with an animated height
 *   .ft-tst    testimonial carousel (contact page)
 *   .hh-rot    the hero's rotating noun
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

    /* ---------- testimonial carousel: a slide every 8s, paused while hovered or focused ---------- */
    document.querySelectorAll<HTMLElement>(".ft-tst").forEach((box) => {
      const slides = [...box.querySelectorAll<HTMLElement>(".ft-slide")];
      const dots = [...box.querySelectorAll<HTMLElement>(".ft-dot")];
      if (slides.length < 2) return;
      let cur = 0;
      let timer: ReturnType<typeof setInterval> | null = null;
      const show = (n: number) => {
        cur = (n + slides.length) % slides.length;
        slides.forEach((s, k) => {
          s.classList.toggle("is-on", k === cur);
          if (k === cur) s.removeAttribute("aria-hidden");
          else s.setAttribute("aria-hidden", "true");
        });
        dots.forEach((d, k) => d.classList.toggle("is-on", k === cur));
      };
      const stop = () => {
        if (timer) clearInterval(timer);
        timer = null;
      };
      const start = () => {
        if (reduce) return;
        stop();
        timer = setInterval(() => show(cur + 1), 8000);
      };
      const onDot = (ev: MouseEvent) => {
        const d = (ev.target as Element).closest<HTMLElement>(".ft-dot");
        if (!d) return;
        show(Number(d.dataset.i));
        start();
      };
      box.addEventListener("click", onDot);
      for (const [ev, fn] of [["mouseenter", stop], ["mouseleave", start], ["focusin", stop], ["focusout", start]] as const)
        box.addEventListener(ev, fn);
      start();
      cleanups.push(() => {
        stop();
        box.removeEventListener("click", onDot);
        for (const [ev, fn] of [["mouseenter", stop], ["mouseleave", start], ["focusin", stop], ["focusout", start]] as const)
          box.removeEventListener(ev, fn);
      });
    });

    /* ---------- hero noun rotation: the box is sized to the word on screen ---------- */
    document.querySelectorAll<HTMLElement>(".hh-rot").forEach((box) => {
      const opts = [...box.querySelectorAll<HTMLElement>(".hh-opt")];
      if (opts.length < 2) return;
      let i = 0;
      let widths: number[] = [];
      let timer: ReturnType<typeof setInterval> | null = null;
      const pending: ReturnType<typeof setTimeout>[] = [];
      // the text itself is measured rather than the element, which stretches to its grid cell
      const measure = () => {
        const prev = box.style.width;
        box.style.width = "auto";
        widths = opts.map((el) => {
          const r = document.createRange();
          r.selectNodeContents(el);
          return Math.ceil(r.getBoundingClientRect().width);
        });
        box.style.width = prev;
        if (widths[i]) box.style.setProperty("--hh-w", `${widths[i]}px`);
      };
      const step = () => {
        const out = opts[i];
        out.classList.remove("is-on");
        out.classList.add("is-out");
        out.setAttribute("aria-hidden", "true");
        i = (i + 1) % opts.length;
        const next = opts[i];
        box.style.setProperty("--hh-w", `${widths[i]}px`);
        pending.push(
          setTimeout(() => {
            next.classList.add("is-on");
            next.removeAttribute("aria-hidden");
          }, 300),
          // park the word that left without animating it back down while invisible
          setTimeout(() => {
            out.classList.add("no-anim");
            out.classList.remove("is-out");
            requestAnimationFrame(() => requestAnimationFrame(() => out.classList.remove("no-anim")));
          }, 700),
        );
      };
      const sync = () => {
        if (!reduce && !document.hidden) timer ??= setInterval(step, 3600);
        else if (timer) {
          clearInterval(timer);
          timer = null;
        }
      };
      measure();
      document.fonts?.ready.then(measure);
      let rt: ReturnType<typeof setTimeout>;
      const onResize = () => {
        clearTimeout(rt);
        rt = setTimeout(measure, 150);
      };
      addEventListener("resize", onResize, { passive: true });
      document.addEventListener("visibilitychange", sync);
      sync();
      cleanups.push(() => {
        if (timer) clearInterval(timer);
        pending.forEach(clearTimeout);
        clearTimeout(rt);
        removeEventListener("resize", onResize);
        document.removeEventListener("visibilitychange", sync);
      });
    });

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
