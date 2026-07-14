"use client";

import Image from "next/image";

/**
 * Right-to-left floating photo marquee for the About page's "Our
 * Infrastructure" section. Same mechanics as the testimonials marquee:
 * continuous scroll, PAUSES ON HOVER, and honours prefers-reduced-motion
 * (stops + becomes manually scrollable). Tiles are a uniform size.
 */
const MARQUEE_CSS = `
@keyframes ablInfraMarquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.abl-infra-marquee__track {
  animation: ablInfraMarquee 40s linear infinite;
}
.abl-infra-marquee:hover .abl-infra-marquee__track {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .abl-infra-marquee__track { animation: none; }
  .abl-infra-marquee { overflow-x: auto; }
}
`;

export interface MarqueeItem {
  slug: string;
  title: string;
  src: string;
}

export default function InfrastructureMarquee({
  items,
}: {
  items: MarqueeItem[];
}) {
  if (items.length === 0) return null;

  // Repeat until there are enough tiles to fill a wide viewport, then duplicate
  // the whole run once so translateX(-50%) loops seamlessly.
  const filled: MarqueeItem[] = [];
  while (filled.length < 8) filled.push(...items);
  const loop = [...filled, ...filled];

  return (
    <div className="abl-infra-marquee overflow-hidden">
      <style>{MARQUEE_CSS}</style>
      <ul className="abl-infra-marquee__track flex w-max gap-5">
        {loop.map((item, i) => (
          <li
            key={`${item.slug}-${i}`}
            aria-hidden={i >= filled.length}
            className="shrink-0"
          >
            <div className="group relative h-48 w-64 overflow-hidden rounded-[var(--radius-card)] border border-border shadow-[var(--shadow-card)] sm:h-56 sm:w-80">
              <Image
                src={item.src}
                alt={`${item.title} at Angels Babyland`}
                fill
                quality={85}
                sizes="(max-width: 640px) 16rem, 20rem"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Bottom gradient + label */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-3">
                <span className="font-heading text-sm font-semibold text-white drop-shadow">
                  {item.title}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
