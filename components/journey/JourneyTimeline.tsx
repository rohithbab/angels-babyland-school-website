"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { JourneyMilestone } from "@/data/journey";

/**
 * The milestones laid out as a 2-per-row grid (14 photos → 7 rows). Each card
 * eases up into view as it scrolls in, with a small left/right delay so the
 * two cards in a row arrive one just after the other. Respects reduced motion.
 */
export default function JourneyTimeline({
  items,
}: {
  items: JourneyMilestone[];
}) {
  const reduce = useReducedMotion();

  return (
    <ol className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:gap-8">
      {items.map((m, i) => (
        <motion.li
          key={m.image}
          initial={{ opacity: 0, y: reduce ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: reduce ? 0 : (i % 2) * 0.1,
          }}
        >
          <article className="h-full overflow-hidden rounded-[var(--radius-card)] border border-border bg-bg shadow-[var(--shadow-card)]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={m.image}
                alt={`${m.year} — ${m.title}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
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
        </motion.li>
      ))}
    </ol>
  );
}
