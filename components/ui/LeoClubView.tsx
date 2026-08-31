"use client";

import { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import PlaceholderImage from "./PlaceholderImage";
import SectionHeading from "./SectionHeading";
import YearFilter, { GALLERY_YEARS } from "./YearFilter";
import type { GalleryFrame } from "./GalleryDetail";
import type { GalleryCategory } from "@/data/clubs";

interface LeoClubViewProps {
  title: string;
  intro: string;
  /** Legacy flat gallery (older years). */
  flatFrames: GalleryFrame[];
  /** Grouped service projects for the latest year. */
  categories: GalleryCategory[];
  /** Year the grouped categories belong to. */
  groupedYear?: number;
}

/**
 * Leo Club page: a year filter where the latest year shows the club's service
 * projects as labelled sub-sections (Blood Donation, Old Age Home, etc.), while
 * older years fall back to a single flat gallery. One shared lightbox spans
 * whatever is currently on screen.
 */
export default function LeoClubView({
  title,
  intro,
  flatFrames,
  categories,
  groupedYear = 2026,
}: LeoClubViewProps) {
  const years = [...GALLERY_YEARS].sort((a, b) => b - a);
  const hasYear = (y: number) =>
    y === groupedYear
      ? categories.some((c) => c.frames.length > 0)
      : flatFrames.some((f) => f.year === y);
  const defaultYear = years.find(hasYear) ?? years[0];
  const [year, setYear] = useState<number>(defaultYear);

  const grouped = year === groupedYear;

  // Frames currently on screen, in display order (drives the lightbox).
  const visibleFrames: GalleryFrame[] = grouped
    ? categories.flatMap((c) => c.frames)
    : flatFrames.filter((f) => f.year === year);

  // Running start index of each category within visibleFrames.
  const starts: number[] = [];
  let acc = 0;
  for (const c of categories) {
    starts.push(acc);
    acc += c.frames.length;
  }

  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + visibleFrames.length) % visibleFrames.length,
      ),
    [visibleFrames.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % visibleFrames.length)),
    [visibleFrames.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  const current = index === null ? null : visibleFrames[index];

  const renderTile = (frame: GalleryFrame, globalIndex: number) => (
    <li key={`${frame.image}-${globalIndex}`}>
      <button
        type="button"
        onClick={() => setIndex(globalIndex)}
        className="group w-full text-left"
      >
        <Card interactive={false} className="overflow-hidden">
          <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
            <PlaceholderImage
              src={frame.image}
              alt={frame.caption}
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="p-5">
            <p className="font-medium">{frame.caption}</p>
          </div>
        </Card>
      </button>
    </li>
  );

  return (
    <div>
      {/* Year filter pinned to the top-right, above the heading. */}
      <div className="mb-8 flex justify-end">
        <YearFilter
          years={years}
          selected={year}
          onSelect={(y) => {
            setYear(y);
            setIndex(null);
          }}
        />
      </div>

      <SectionHeading
        as="h1"
        align="center"
        flanked
        title={title}
        subtitle={intro}
      />

      {visibleFrames.length === 0 ? (
        <p className="mt-10 text-text-muted">Photos coming soon.</p>
      ) : grouped ? (
        <div className="mt-12 space-y-14">
          {categories.map((cat, idx) => (
            <div key={cat.title}>
              <SectionHeading
                as="h2"
                align="center"
                flanked
                title={cat.title}
                className="mb-8"
              />
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cat.frames.map((frame, i) =>
                  renderTile(frame, starts[idx] + i),
                )}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleFrames.map((frame, i) => renderTile(frame, i))}
        </ul>
      )}

      {/* LIGHTBOX */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Image viewer"
        onClick={close}
        className={`fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20"
        >
          ✕
        </button>

        {current && (
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-card)] bg-bg">
              <PlaceholderImage
                src={current.image}
                alt={current.caption}
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="mt-3 text-center text-sm text-white/90">
              {current.caption && <p>{current.caption}</p>}
            </div>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
