"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { InfraCategoryWithImages } from "@/lib/infrastructure";

/**
 * Dedicated infrastructure page.
 *
 * A COVERFLOW 3D carousel of the categories: the centered card faces the
 * viewer, the side cards angle back in perspective. Advancing by scroll/swipe/
 * arrow rotates the next card into the centre, and the centred category drives
 * the single-column, one-photo-per-row gallery below (thick-framed images).
 */
export default function InfrastructureGallery({
  categories,
}: {
  categories: InfraCategoryWithImages[];
}) {
  const N = categories.length;

  // Start on the first category that actually has photos.
  const initial = Math.max(
    0,
    categories.findIndex((c) => c.images.length > 0)
  );
  const [active, setActive] = useState(initial === -1 ? 0 : initial);

  const stageRef = useRef<HTMLDivElement>(null);
  const lock = useRef(false);
  const touchX = useRef<number | null>(null);

  const step = (dir: 1 | -1) =>
    setActive((a) => ((a + dir) % N + N) % N);

  // Scroll-to-advance. Non-passive wheel listener so we can consume the gesture
  // while the pointer is over the reel (loops, so the page never gets stuck).
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 6) return;
      e.preventDefault();
      if (lock.current) return;
      lock.current = true;
      step(delta > 0 ? 1 : -1);
      window.setTimeout(() => (lock.current = false), 320);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [N]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") step(1);
    else if (e.key === "ArrowLeft") step(-1);
  };

  const activeCat = categories[active];

  return (
    <div>
      {/* COVERFLOW REEL */}
      <div className="flex items-center justify-center gap-1 sm:gap-3">
        <button
          type="button"
          aria-label="Previous facility"
          onClick={() => step(-1)}
          className="z-20 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-bg text-text shadow-[var(--shadow-card)] transition-colors hover:bg-bg-alt sm:flex"
        >
          <span aria-hidden className="text-2xl leading-none">
            ‹
          </span>
        </button>

        <div
          ref={stageRef}
          role="listbox"
          aria-label="Infrastructure categories"
          tabIndex={0}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onKeyDown={onKeyDown}
          className="relative h-64 w-full max-w-3xl touch-pan-y select-none overflow-hidden outline-none [perspective:1200px] sm:h-72"
        >
          {categories.map((c, i) => {
            // Signed distance from the active card, wrapped into a ring.
            let pos = i - active;
            if (pos > N / 2) pos -= N;
            if (pos < -N / 2) pos += N;
            const abs = Math.abs(pos);
            const visible = abs <= 2;

            const translateX = pos * 150;
            const rotateY = Math.max(-52, Math.min(52, pos * -42));
            const scale = pos === 0 ? 1 : Math.max(0.72, 0.86 - (abs - 1) * 0.08);
            const translateZ = -abs * 90;

            return (
              <button
                key={c.slug}
                type="button"
                role="option"
                aria-selected={pos === 0}
                aria-label={c.title}
                tabIndex={-1}
                onClick={() => (pos === 0 ? undefined : setActive(i))}
                className="absolute left-1/2 top-1/2 h-52 w-64 overflow-hidden rounded-[var(--radius-card)] bg-bg-alt transition-[transform,opacity,box-shadow] duration-500 ease-out sm:h-60 sm:w-72"
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex: 50 - abs,
                  opacity: visible ? (abs === 2 ? 0.55 : 1) : 0,
                  pointerEvents: visible ? "auto" : "none",
                  boxShadow:
                    pos === 0
                      ? "0 22px 50px rgba(0,0,0,0.28)"
                      : "0 10px 26px rgba(0,0,0,0.18)",
                  border:
                    pos === 0
                      ? "4px solid var(--color-accent-strong)"
                      : "1px solid var(--color-border)",
                }}
              >
                {c.thumbnail ? (
                  <Image
                    src={c.thumbnail}
                    alt={c.title}
                    fill
                    sizes="18rem"
                    className="object-cover"
                    draggable={false}
                  />
                ) : (
                  <span className="flex h-full items-center justify-center px-3 text-center text-sm text-text-muted">
                    Photos coming soon
                  </span>
                )}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-8 text-left font-heading text-base font-semibold text-white">
                  {c.title}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Next facility"
          onClick={() => step(1)}
          className="z-20 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-bg text-text shadow-[var(--shadow-card)] transition-colors hover:bg-bg-alt sm:flex"
        >
          <span aria-hidden className="text-2xl leading-none">
            ›
          </span>
        </button>
      </div>

      {/* Dots — also tap targets on mobile */}
      <div className="mt-6 flex justify-center gap-2">
        {categories.map((c, i) => (
          <button
            key={c.slug}
            type="button"
            aria-label={`Show ${c.title}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === active
                ? "w-6 bg-accent-strong"
                : "w-2.5 bg-border hover:bg-accent-strong/50"
            }`}
          />
        ))}
      </div>

      {/* SELECTED CATEGORY — single-column, thick-framed gallery */}
      {activeCat && (
        <div className="mt-12">
          <h2 className="text-center">{activeCat.title}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-text-muted">
            {activeCat.blurb}
          </p>

          {activeCat.images.length > 0 ? (
            <div className="mx-auto mt-8 flex max-w-4xl flex-col gap-8">
              {activeCat.images.map((src, i) => (
                <div
                  key={src}
                  className="group relative aspect-[3/2] w-full overflow-hidden rounded-[var(--radius-card)] border-[6px] border-accent-strong bg-bg-alt shadow-[var(--shadow-card)]"
                >
                  <Image
                    src={src}
                    alt={`${activeCat.title} — photo ${i + 1}`}
                    fill
                    quality={88}
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-8 max-w-4xl rounded-[var(--radius-card)] border-4 border-dashed border-border bg-bg-alt px-6 py-16 text-center text-text-muted">
              Photos for {activeCat.title} are coming soon.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
