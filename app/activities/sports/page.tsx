import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import EventSection from "@/components/ui/EventSection";
import { sportsIntro, sportsGroups } from "@/data/activities";

export const metadata: Metadata = buildMetadata({
  title: "Sports & Physical Activities",
  description: sportsIntro.subtitle,
  path: "/activities/sports",
});

export default function SportsPage() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        align="center"
        flanked
        title={sportsIntro.title}
        subtitle={sportsIntro.subtitle}
        className="mb-12"
      />
      <div className="space-y-12 lg:space-y-16">
        {sportsGroups.map((group) => {
          // Preview the most recent year that actually has photos.
          const years = group.events.map((e) => e.year);
          const latest = years.length ? Math.max(...years) : 0;
          const preview = group.events
            .filter((e) => e.year === latest)
            .slice(0, 3);
          return (
            <EventSection
              key={group.slug}
              title={group.title}
              subtitle={group.subtitle}
              events={preview}
              ctaHref={`/activities/sports/${group.slug}`}
            />
          );
        })}
      </div>
    </section>
  );
}
