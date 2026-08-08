"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";

export interface AlumniPhoto {
  image: string;
  caption: string;
}

interface AlumniMemoriesProps {
  photos: AlumniPhoto[];
  /** Show the CTA button to the dedicated alumni page. Default: true. */
  cta?: boolean;
}

/** Slight, deterministic polaroid tilts (alternate directions). */
const ROTATIONS = [
  "rotate-[-2.5deg]",
  "rotate-[1.5deg]",
  "rotate-[2.5deg]",
  "rotate-[-1.5deg]",
  "rotate-[1deg]",
  "rotate-[-2deg]",
];

/**
 * Alumni "Memories" showcase — a mix of two unique treatments:
 *  1. SPOTLIGHT — a large auto-rotating feature photo with the emotional
 *     caption overlay ("Roots that hold, wings that fly").
 *  2. MEMORY WALL — a polaroid scrapbook grid; cards tilt, straighten and
 *     lift on hover, and tap to open a lightbox.
 */
export default function AlumniMemories({
  photos,
  cta = true,
}: AlumniMemoriesProps) {
  const [spot, setSpot] = useState(0);
  const [open, setOpen] = useState<number | null>(null);

  // Auto-rotate the spotlight.
  useEffect(() => {
    if (photos.length < 2) return;
    const id = window.setInterval(
      () => setSpot((s) => (s + 1) % photos.length),
      5000
    );
    return () => window.clearInterval(id);
  }, [photos.length]);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((o) => (o === null ? o : (o - 1 + photos.length) % photos.length)),
    [photos.length]
  );
  const next = useCallback(
    () => setOpen((o) => (o === null ? o : (o + 1) % photos.length)),
    [photos.length]
  );

  // Keyboard + scroll lock while the lightbox is open.
  useEffect(() => {
    if (open === null) return;
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

  const current = open === null ? null : photos[open];

  return (
    <div>
      <SectionHeading
        align="center"
        flanked
        title="Our Alumni"
        subtitle="Roots that hold, wings that fly — wherever life takes them, our Babylanders will always belong here."
      />

      {/* SPOTLIGHT — auto-rotating feature photo */}
      <div className="relative mx-auto mt-12 aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-[var(--radius-card)] border border-border shadow-[var(--shadow-card)] sm:aspect-[16/9]">
        {photos.map((p, i) => (
          <div
            key={p.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === spot ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={p.image}
              alt={p.caption}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              quality={80}
              className="object-cover"
            />
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-8 pt-20 text-center">
          <p className="font-heading text-2xl font-bold leading-tight text-white lg:text-4xl">
            “Roots that hold,
            <br className="hidden sm:block" /> wings that fly”
          </p>
          <p className="mt-2 text-sm text-white/85 lg:text-base">
            {photos[spot]?.caption}
          </p>
        </div>
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show memory ${i + 1}`}
              onClick={() => setSpot(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === spot ? "w-6 bg-white" : "w-1.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* MEMORY WALL — polaroid scrapbook */}
      <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((p, i) => (
          <button
            key={p.image}
            type="button"
            onClick={() => setOpen(i)}
            className="group text-left"
          >
            <div
              className={`bg-white p-2.5 pb-3 shadow-[var(--shadow-card)] transition-transform duration-300 group-hover:scale-[1.04] group-hover:rotate-0 group-hover:shadow-[var(--shadow-card-hover)] ${
                ROTATIONS[i % ROTATIONS.length]
              }`}
            >
              <div className="relative aspect-square overflow-hidden bg-bg-alt">
                <Image
                  src={p.image}
                  alt={p.caption}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={75}
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-center font-body text-xs italic text-text-muted lg:text-sm">
                {p.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {cta && (
        <div className="mt-12 flex justify-center">
          <CTAButton href="/alumni" size="lg">
            Relive the Memories
          </CTAButton>
        </div>
      )}

      {/* LIGHTBOX */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={open === null}
        aria-label="Alumni memory viewer"
        onClick={close}
        className={`fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 transition-opacity duration-200 ${
          open === null ? "pointer-events-none opacity-0" : "opacity-100"
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
              <Image
                src={current.image}
                alt={current.caption}
                fill
                sizes="90vw"
                quality={85}
                className="object-contain"
              />
            </div>
            <div className="mt-3 text-center text-sm text-white/90">
              {current.caption && <p>{current.caption}</p>}
            </div>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous memory"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next memory"
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
