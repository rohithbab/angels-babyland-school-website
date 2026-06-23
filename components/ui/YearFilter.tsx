"use client";

/**
 * Years offered by the gallery year filter. 2025 holds all current photos;
 * 2026 is reserved for next year's uploads (empty for now). Add a year here
 * once its folder has photos.
 */
export const GALLERY_YEARS = [2025, 2026] as const;

interface YearFilterProps {
  years: readonly number[];
  selected: number;
  onSelect: (year: number) => void;
  className?: string;
}

/** Minimal centered pill toggle for switching the gallery year. */
export default function YearFilter({
  years,
  selected,
  onSelect,
  className = "",
}: YearFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter gallery by year"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      {years.map((year) => {
        const active = year === selected;
        return (
          <button
            key={year}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onSelect(year)}
            className={[
              "rounded-[var(--radius-card)] px-5 py-2 text-sm font-medium transition-colors duration-200",
              active
                ? "bg-accent text-text"
                : "border border-border bg-bg text-text-muted hover:bg-bg-alt hover:text-text",
            ].join(" ")}
          >
            {year}
          </button>
        );
      })}
    </div>
  );
}
