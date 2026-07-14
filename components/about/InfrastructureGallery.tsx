"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { InfraCategoryWithImages } from "@/lib/infrastructure";

/**
 * Dedicated infrastructure page: a horizontally scrollable category carousel
 * (moves both directions via arrows, swipe or scroll) that filters a
 * single-column, one-photo-per-row gallery below it.
 */
export default function InfrastructureGallery({
  categories,
}: {
  categories: InfraCategoryWithImages[];
}) {
  // Default to the first category that actually has photos, else the first.
  const firstWithPhotos =
    categories.find((c) => c.images.length > 0) ?? categories[0];
  const [selected, setSelected] = useState(firstWithPhotos?.slug ?? "");

  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  const active = categories.find((c) => c.slug === selected);

  return (
    <div>
      {/* CATEGORY CAROUSEL */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Scroll categories left"
          onClick={() => scrollByCards(-1)}
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg text-text shadow-[var(--shadow-card)] transition-colors hover:bg-bg-alt sm:flex"
        >
          <span aria-hidden className="text-xl leading-none">
            ‹
          </span>
        </button>

        <div
          ref={trackRef}
          className="flex flex-1 gap-3 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((c) => {
            const isActive = c.slug === selected;
            return (
              <button
                key={c.slug}
                type="button"
                onClick={() => setSelected(c.slug)}
                aria-pressed={isActive}
                className={`group w-44 shrink-0 snap-start overflow-hidden rounded-[var(--radius-card)] border text-left transition-colors sm:w-52 ${
                  isActive
                    ? "border-accent-strong bg-accent/40"
                    : "border-border bg-bg hover:bg-bg-alt"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-bg-alt">
                  {c.images[0] ? (
                    <Image
                      src={c.images[0]}
                      alt={c.title}
                      fill
                      sizes="13rem"
                      className="object-cover"
                    />
                  ) : (
                    <span className="flex h-full items-center justify-center px-2 text-center text-xs text-text-muted">
                      Photos coming soon
                    </span>
                  )}
                </div>
                <span className="block px-3 py-2 font-heading text-sm font-semibold">
                  {c.title}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Scroll categories right"
          onClick={() => scrollByCards(1)}
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg text-text shadow-[var(--shadow-card)] transition-colors hover:bg-bg-alt sm:flex"
        >
          <span aria-hidden className="text-xl leading-none">
            ›
          </span>
        </button>
      </div>

      {/* SELECTED CATEGORY — single-column gallery */}
      {active && (
        <div className="mt-10">
          <h2 className="text-center">{active.title}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-text-muted">
            {active.blurb}
          </p>

          {active.images.length > 0 ? (
            <div className="mx-auto mt-8 flex max-w-4xl flex-col gap-6">
              {active.images.map((src, i) => (
                <div
                  key={src}
                  className="group relative aspect-[3/2] w-full overflow-hidden rounded-[var(--radius-card)] border border-border shadow-[var(--shadow-card)]"
                >
                  <Image
                    src={src}
                    alt={`${active.title} — photo ${i + 1}`}
                    fill
                    quality={88}
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-8 max-w-4xl rounded-[var(--radius-card)] border border-dashed border-border bg-bg-alt px-6 py-16 text-center text-text-muted">
              Photos for {active.title} are coming soon.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
