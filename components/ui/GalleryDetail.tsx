"use client";

import { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import PlaceholderImage from "./PlaceholderImage";
import SectionHeading from "./SectionHeading";

/**
 * TEMPLATE 2 — a titled intro followed by a grid of framed photos, each
 * frame showing its content (caption) + date + time. Image zooms on hover.
 * Clicking a frame opens a fullscreen lightbox with prev / next navigation.
 * Reused by every leaf page (Culturals, Sports, Clubs, Achievements).
 * This interface is the canonical contract; data files conform to it.
 */
export interface GalleryFrame {
  /** Future image path; for now every slot renders the placeholder. */
  image: string;
  caption: string;
  date: string;
  time: string;
  /** Gallery year this frame belongs to (drives the year filter). */
  year: number;
  /** Optional object-position override for this frame's image. */
  imagePosition?: string;
}

interface GalleryDetailProps {
  title: string;
  intro: string;
  frames: GalleryFrame[];
  /** Heading alignment. Default: left. */
  align?: "left" | "center";
  /** Show decorative rules on both sides of the title. */
  flanked?: boolean;
}

export default function GalleryDetail({
  title,
  intro,
  frames,
  align = "left",
  flanked = false,
}: GalleryDetailProps) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + frames.length) % frames.length)),
    [frames.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % frames.length)),
    [frames.length],
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

  const current = index === null ? null : frames[index];

  return (
    <div>
      <SectionHeading
        as="h1"
        align={align}
        flanked={flanked}
        title={title}
        subtitle={intro}
      />

      {frames.length === 0 ? (
        <p className="mt-10 text-text-muted">Photos coming soon.</p>
      ) : (
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {frames.map((frame, i) => (
            <li key={`${frame.caption}-${i}`}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group w-full text-left"
              >
                <Card interactive={false} className="overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                    <PlaceholderImage
                      src={frame.image}
                      alt={frame.caption}
                      className={`object-cover transition-transform duration-300 ease-out group-hover:scale-105 ${frame.imagePosition ?? ""}`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-medium">{frame.caption}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-text-muted">
                      <span>{frame.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{frame.time}</span>
                    </div>
                  </div>
                </Card>
              </button>
            </li>
          ))}
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
              {(current.date || current.time) && (
                <p className="mt-1 text-xs text-white/60">
                  {current.date}{current.date && current.time ? " · " : ""}{current.time}
                </p>
              )}
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
