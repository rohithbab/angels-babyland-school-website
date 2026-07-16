import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import EventSection from "@/components/ui/EventSection";
import { getExtraActivity, type ExtraActivity } from "@/data/extracurricular";

export const metadata: Metadata = buildMetadata({
  title: "Yoga & Silambam",
  description:
    "Mindful balance through yoga and the traditional Tamil martial art of silambam — wellness and discipline side by side.",
  path: "/activities/extra-curricular/yoga-and-silambam",
});

/**
 * Combined hub for Yoga and Silambam — mirrors the Culturals hub: each
 * discipline gets a centred heading + caption, its latest three photos and a
 * See More CTA into its dedicated gallery page.
 */
export default function YogaSilambamPage() {
  const groups = ["yoga", "silambam"]
    .map(getExtraActivity)
    .filter((a): a is ExtraActivity => Boolean(a));

  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        align="center"
        flanked
        title="Yoga & Silambam"
        subtitle="Two traditions, one goal — calm, focus and strength through yoga and the Tamil martial art of silambam."
        className="mb-12"
      />
      <div className="space-y-12 lg:space-y-16">
        {groups.map((activity) => (
          <EventSection
            key={activity.slug}
            align="center"
            title={activity.title}
            subtitle={activity.intro}
            events={activity.frames
              .filter((f) => f.year === 2025)
              .slice(0, 3)
              .map((f) => ({
                image: f.image,
                name: f.caption,
                date: f.date,
                time: f.time,
                year: f.year,
              }))}
            ctaHref={`/activities/extra-curricular/${activity.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
