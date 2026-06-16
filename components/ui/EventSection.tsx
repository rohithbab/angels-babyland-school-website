import type { ElementType } from "react";
import Card from "./Card";
import CTAButton from "./CTAButton";
import PlaceholderImage from "./PlaceholderImage";

/** A single event tile: image + name + date (and optional time). */
export interface EventItem {
  /** Future image path; for now every slot renders the placeholder. */
  image: string;
  name: string;
  date: string;
  time?: string;
}

interface EventSectionProps {
  title: string;
  subtitle?: string;
  events: EventItem[];
  /** When set, a centered CTA below the grid links here. */
  ctaHref?: string;
  ctaLabel?: string;
  /** Heading tag for the section title. Default: h2. */
  headingAs?: ElementType;
}

/**
 * A grey, rounded section card wrapping a heading + a grid of event tiles,
 * with an optional centered "See More" CTA. Reused on the Culturals / Sports
 * hubs (preview + CTA) and on their dedicated leaf pages (no CTA).
 */
export default function EventSection({
  title,
  subtitle,
  events,
  ctaHref,
  ctaLabel = "See More",
  headingAs: Heading = "h2",
}: EventSectionProps) {
  return (
    <div className="rounded-[var(--radius-card)] border border-border bg-bg-alt p-6 lg:p-10">
      <Heading>{title}</Heading>
      {subtitle && <p className="mt-3 max-w-3xl text-text-muted">{subtitle}</p>}

      <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((ev, i) => (
          <li key={`${ev.name}-${i}`}>
            <Card interactive={false} className="group h-full overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                <PlaceholderImage
                  src={ev.image}
                  alt={ev.name}
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold">{ev.name}</h3>
                <div className="mt-3 flex items-center gap-3 text-xs text-text-muted">
                  <span>{ev.date}</span>
                  {ev.time && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{ev.time}</span>
                    </>
                  )}
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>

      {ctaHref && (
        <div className="mt-8 flex justify-center">
          <CTAButton href={ctaHref}>{ctaLabel}</CTAButton>
        </div>
      )}
    </div>
  );
}
