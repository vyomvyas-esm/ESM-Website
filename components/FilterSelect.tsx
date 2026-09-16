"use client";

interface Props {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  ariaLabel?: string;
}

/* A filter select styled like the nav dropdown. The native <select> sits on top
   of the styled face, so keyboard, screen readers and touch all get the real control. */
export function FilterSelect({ label, value, options, onChange, ariaLabel }: Props) {
  const current = options.find((o) => o.value === value) ?? options[0];
  return (
    <div className="fdd">
      <span className="fdd-btn" aria-hidden="true">
        <span className="fdd-k">{label}</span>
        <span className="fdd-v">{current?.label}</span>
        <svg className="fdd-c" width="11" height="11" viewBox="0 0 16 16" fill="none">
          <path d="m4 6.4 4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <select aria-label={ariaLabel ?? label} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
