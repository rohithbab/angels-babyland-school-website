"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

const MARQUEE_CSS = `
@keyframes ablMarqueeLightbox {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.abl-marquee-lb__track {
  animation: ablMarqueeLightbox 40s linear infinite;
}
.abl-marquee-lb:hover .abl-marquee-lb__track {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .abl-marquee-lb__track { animation: none; }
  .abl-marquee-lb { overflow-x: auto; }
}
`;

interface MarqueeImage {
  slug: string;
  title: string;
  src: string;
}

interface MarqueeLightboxProps {
  items: MarqueeImage[];
}

export default function MarqueeLightbox({ items }: MarqueeLightboxProps) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
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

  if (items.length === 0) return null;

  const filled: MarqueeImage[] = [];
  while (filled.length < 8) filled.push(...items);
  const loop = [...filled, ...filled];

  const current = index === null ? null : items[index];

  return (
    <>
      <div className="abl-marquee-lb overflow-hidden">
        <style>{MARQUEE_CSS}</style>
        <ul className="abl-marquee-lb__track flex w-max gap-5">
          {loop.map((item, i) => (
            <li
              key={`${item.slug}-${i}`}
              aria-hidden={i >= filled.length}
              className="shrink-0"
            >
              <button
                type="button"
                onClick={() => setIndex(i % items.length)}
                aria-label={`View ${item.title}`}
                className="group relative h-48 w-64 overflow-hidden rounded-[var(--radius-card)] border border-border shadow-[var(--shadow-card)] sm:h-56 sm:w-80"
              >
                <Image
                  src={item.src}
                  alt={`${item.title} at Angels Babyland`}
                  fill
                  quality={85}
                  sizes="(max-width: 640px) 16rem, 20rem"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-3">
                  <span className="font-heading text-sm font-semibold text-white drop-shadow">
                    {item.title}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

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
                src={current.src}
                alt={current.title}
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center text-sm text-white/90">
              {current.title}
            </p>

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
    </>
  );
}