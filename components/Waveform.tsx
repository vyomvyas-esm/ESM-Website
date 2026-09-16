/** Decorative audio waveform: the same deterministic curve the original site drew. */
export function Waveform({ n, className }: { n: number; className?: string }) {
  const bars = Array.from({ length: n }, (_, i) => {
    const t = i / (n - 1);
    const h = 8 + Math.abs(Math.sin(t * Math.PI * 3.1)) * Math.sin(t * Math.PI) * 74 + (i % 3) * 4;
    const dim = Math.abs(t - 0.5) < 0.13 ? 0.12 : 0.55 - Math.abs(t - 0.5) * 0.35;
    return { h: h.toFixed(0), dim: dim.toFixed(2) };
  });
  return (
    <div className={className} aria-hidden="true">
      {bars.map((b, i) => (
        <span
          key={i}
          style={{ width: "2px", borderRadius: "2px", height: `${b.h}px`, background: "currentColor", opacity: b.dim }}
        />
      ))}
    </div>
  );
}
