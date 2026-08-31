"use client";

import { useState } from "react";
import GalleryDetail, { type GalleryFrame } from "./GalleryDetail";
import YearFilter, { GALLERY_YEARS } from "./YearFilter";

interface GalleryYearViewProps {
  title: string;
  intro: string;
  frames: GalleryFrame[];
  align?: "left" | "center";
  flanked?: boolean;
}

/**
 * GalleryDetail with a year filter (2025 / 2026) at the top. Renders only the
 * frames for the selected year; an empty year shows "Photos coming soon."
 */
export default function GalleryYearView({
  title,
  intro,
  frames,
  align,
  flanked,
}: GalleryYearViewProps) {
  // Open on the most recent year that has photos; newest year shown first.
  const years = [...GALLERY_YEARS].sort((a, b) => b - a);
  const defaultYear =
    years.find((y) => frames.some((f) => f.year === y)) ?? years[0];
  const [year, setYear] = useState<number>(defaultYear);
  const visible = frames.filter((f) => f.year === year);

  return (
    <div>
      {/* Year filter pinned to the top-right, above the heading. */}
      <div className="mb-8 flex justify-end">
        <YearFilter years={years} selected={year} onSelect={setYear} />
      </div>
      <GalleryDetail
        title={title}
        intro={intro}
        frames={visible}
        align={align}
        flanked={flanked}
      />
    </div>
  );
}
