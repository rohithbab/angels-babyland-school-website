"use client";

import { useState, type ElementType } from "react";
import EventSection, { type EventItem } from "./EventSection";
import YearFilter, { GALLERY_YEARS } from "./YearFilter";

interface EventYearViewProps {
  title: string;
  subtitle?: string;
  events: EventItem[];
  headingAs?: ElementType;
}

/**
 * EventSection with a year filter (2025 / 2026) at the top. Renders only the
 * events for the selected year; an empty year shows "Photos coming soon."
 */
export default function EventYearView({
  title,
  subtitle,
  events,
  headingAs,
}: EventYearViewProps) {
  const [year, setYear] = useState<number>(GALLERY_YEARS[0]);
  const visible = events.filter((e) => e.year === year);

  return (
    <div>
      {/* Year filter pinned to the top-right, above the heading. */}
      <div className="mb-8 flex justify-end">
        <YearFilter years={GALLERY_YEARS} selected={year} onSelect={setYear} />
      </div>
      <EventSection
        title={title}
        subtitle={subtitle}
        events={visible}
        headingAs={headingAs}
      />
    </div>
  );
}
