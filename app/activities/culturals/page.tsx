import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import EventSection from "@/components/ui/EventSection";
import { culturalsIntro, culturalGroups } from "@/data/activities";

export const metadata: Metadata = buildMetadata({
  title: "Cultural Activities",
  description: culturalsIntro.subtitle,
  path: "/activities/culturals",
});

export default function CulturalsPage() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        align="center"
        flanked
        title={culturalsIntro.title}
        subtitle={culturalsIntro.subtitle}
        className="mb-12"
      />
      <div className="space-y-12 lg:space-y-16">
        {culturalGroups.map((group) => (
          <EventSection
            key={group.slug}
            title={group.title}
            subtitle={group.subtitle}
            events={group.events.filter((e) => e.year === 2025).slice(0, 3)}
            ctaHref={`/activities/culturals/${group.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
