/*
 * The phone version of a PYZO "How it works" architecture diagram (client request,
 * 3 November 2026). The design's library (assets/js/pyzo-arch.js) draws the diagram as
 * lanes side by side, and on a phone its stacked mode still crowds the canvas. Below
 * 768px the page shows this instead: the same diagram, read top to bottom, built from the
 * library's own product data (PyzoArch.products), so the two can never disagree. The
 * laptop and tablet drawings are untouched; app/globals.css switches between them.
 */

type Node = { id: string; lane: string; row: number; t: string; s: string; kind: string; steps?: { llm: string[]; none: string[]; svc: string[] } };
export type ArchProduct = {
  key: string;
  name: string;
  role: string;
  line: string;
  lanes: Record<string, string>;
  nodes: Node[];
  journey: string[];
  stages: { cap: string }[];
};

/* Lanes in reading order, the stage that introduces each (as the library numbers them),
   and the names of the two lanes the product data leaves unnamed. */
const ORDER = ["users", "entry", "core", "ai", "data", "systems", "rail", "es"];
const LANE_STAGE: Record<string, number> = { users: 2, entry: 2, core: 3, ai: 4, data: 5, systems: 5, rail: 6, es: 7 };
const EXTRA_LANES: Record<string, string> = { users: "Your people", rail: "Your controls", es: "Es Magico, outside your environment" };

/* The library's node glyphs, keyed by node kind. */
const ICON: Record<string, string> = {
  pyzo: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><rect x="8.5" y="8.5" width="7" height="7" rx="1"/>',
  ai: '<path d="M12 3c.6 4.6 3.4 7.4 9 9-5.6 1.6-8.4 4.4-9 9-.6-4.6-3.4-7.4-9-9 5.6-1.6 8.4-4.4 9-9z"/>',
  store: '<ellipse cx="12" cy="5.5" rx="7.5" ry="2.8"/><path d="M4.5 5.5v13c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-13"/><path d="M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8"/>',
  client: '<rect x="3.5" y="4" width="17" height="7" rx="1.5"/><rect x="3.5" y="13" width="17" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  shield: '<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8-7.5 9.5-4.3-1.5-7.5-4.9-7.5-9.5V6z"/><path d="M8.8 12l2.2 2.2 4.2-4.4"/>',
  user: '<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20.5c.8-4 3.8-6 7.5-6s6.7 2 7.5 6"/>',
  es: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5s1.2-6.1 3.6-8.5z"/>',
};

const el = (tag: string, cls?: string, text?: string) => {
  const x = document.createElement(tag);
  if (cls) x.className = cls;
  if (text) x.textContent = text;
  return x;
};
const glyph = (kind: string) => {
  const x = el("span", "pav-ic");
  x.setAttribute("aria-hidden", "true");
  x.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ICON[kind] ?? ICON.pyzo}</svg>`;
  return x;
};

export function buildVertical(p: ArchProduct): HTMLElement {
  const root = el("div", "pav");
  root.setAttribute("aria-label", `How ${p.name} works`);

  const head = el("div", "pav-head");
  head.append(el("p", "pav-k", `${p.name} · ${p.role}`), el("p", "pav-line", p.line));
  root.append(head, el("p", "pav-cap", p.stages[0]?.cap ?? ""));

  const byId = new Map(p.nodes.map((n) => [n.id, n]));
  const said = new Set<number>([1]);
  const lanes = ORDER.filter((lane) => p.nodes.some((n) => n.lane === lane));
  lanes.forEach((lane, i) => {
    // the stage caption that introduces this lane, once, before its first lane
    const stage = LANE_STAGE[lane];
    if (stage && !said.has(stage) && p.stages[stage - 1]?.cap) {
      said.add(stage);
      root.append(el("p", "pav-cap", p.stages[stage - 1].cap));
    }
    const box = el("section", `pav-lane pav-lane--${lane}`);
    box.append(el("h4", "pav-lane-t", p.lanes[lane] ?? EXTRA_LANES[lane] ?? lane));
    const list = el("ul", "pav-nodes");
    for (const n of p.nodes.filter((x) => x.lane === lane).sort((a, b) => a.row - b.row)) {
      const li = el("li", `pav-node pav-node--${n.kind}`);
      const text = el("div", "pav-node-x");
      text.append(el("p", "pav-node-t", n.t), el("p", "pav-node-s", n.s));
      const steps = n.steps ? [...n.steps.llm, ...n.steps.none, ...n.steps.svc] : [];
      if (steps.length) {
        const chips = el("p", "pav-steps");
        steps.forEach((s) => chips.append(el("span", "pav-step", s)));
        text.append(chips);
      }
      li.append(glyph(n.kind), text);
      list.append(li);
    }
    box.append(list);
    root.append(box);
    if (i < lanes.length - 1) {
      const arrow = el("span", "pav-arrow");
      arrow.setAttribute("aria-hidden", "true");
      root.append(arrow);
    }
  });

  // the closing stage follows one request through the diagram, step by step
  const path = (p.journey ?? []).map((hop) => hop.split(">").map((id) => byId.get(id)?.t ?? id));
  if (path.length) {
    const end = el("section", "pav-journey");
    end.append(el("h4", "pav-lane-t", "One request, end to end"), el("p", "pav-cap", p.stages[p.stages.length - 1]?.cap ?? ""));
    const ol = el("ol", "pav-hops");
    path.forEach(([from, to]) => {
      const li = el("li", "pav-hop");
      li.append(el("span", "pav-hop-a", from), el("span", "pav-hop-to", "→"), el("span", "pav-hop-b", to));
      ol.append(li);
    });
    end.append(ol);
    root.append(end);
  }
  return root;
}
