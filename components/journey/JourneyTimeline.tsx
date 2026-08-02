"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { JourneyMilestone } from "@/data/journey";

/**
 * A vertical, alternating ("zig-zag") timeline. On desktop, cards sit on
 * opposite sides of a central spine; on mobile they stack to the right of a
 * left-hand spine. Each card eases in from its own side as it scrolls into
 * view (respecting the user's reduced-motion preference).
 */
export default function JourneyTimeline({
  items,
}: {
  items: JourneyMilestone[];
}) {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto mt-10 max-w-5xl lg:mt-14">
      {/* Central spine — left on mobile, centred on desktop */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-border to-transparent lg:left-1/2 lg:-translate-x-1/2"
      />

      <ol className="space-y-10 lg:space-y-16">
        {items.map((m, i) => {
          const left = i % 2 === 0; // desktop: even index → left, odd → right
          const fromX = reduce ? 0 : left ? -48 : 48;

          return (
            <li key={m.year} className="relative">
              {/* Node on the spine */}
              <span
                aria-hidden
                className="absolute left-5 top-3 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-bg bg-accent-strong shadow-[var(--shadow-card)] lg:left-1/2"
              />

              <motion.div
                initial={{ opacity: 0, x: fromX, y: reduce ? 0 : 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`ml-12 lg:ml-0 lg:w-[calc(50%-2.5rem)] ${
                  left ? "" : "lg:ml-auto"
                }`}
              >
                <article className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-bg shadow-[var(--shadow-card)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={m.image}
                      alt={`${m.year} — ${m.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 font-heading text-sm font-bold text-text shadow-[var(--shadow-card)]">
                      {m.year}
                    </span>
                  </div>
                  <div className="p-5 lg:p-6">
                    <h3 className="text-lg font-bold">{m.title}</h3>
                    <p className="mt-2 text-sm text-text-muted">{m.blurb}</p>
                  </div>
                </article>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
