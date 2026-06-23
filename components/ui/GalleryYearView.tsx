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
  const [year, setYear] = useState<number>(GALLERY_YEARS[0]);
  const visible = frames.filter((f) => f.year === year);

  return (
    <div>
      {/* Year filter pinned to the top-right, above the heading. */}
      <div className="mb-8 flex justify-end">
        <YearFilter years={GALLERY_YEARS} selected={year} onSelect={setYear} />
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
