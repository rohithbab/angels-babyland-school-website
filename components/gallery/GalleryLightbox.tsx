"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import type { GalleryItem } from "@/data/gallery";

/**
 * General gallery grid + fullscreen lightbox. Square-framed thumbnails with
 * hover zoom; clicking opens a fading overlay with Prev / Next / Close and
 * keyboard support (Esc to close, ← / → to navigate). Motion = a simple fade.
 */
export default function GalleryLightbox({ images }: { images: GalleryItem[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
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

  const current = index === null ? null : images[index];

  return (
    <>
      {/* GRID */}
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: (i % 4) * 0.08 }}
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View image: ${img.title}`}
              className="group relative block aspect-square w-full overflow-hidden rounded-[var(--radius-card)] border border-border"
            >
              <PlaceholderImage
                src={img.image}
                alt={img.alt}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
              {/* Title overlay — slides up on hover / focus. */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-3 text-left text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                {img.title}
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      {/* LIGHTBOX */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Image gallery viewer"
        onClick={close}
        className={`fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Close */}
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20"
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
                alt={current.alt}
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center text-sm text-white/90">
              {current.title}
            </p>

            {/* Prev */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
            >
              ‹
            </button>
            {/* Next */}
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
