import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import CardGrid, { type CardItem } from "@/components/ui/CardGrid";
import { extraActivities } from "@/data/extracurricular";

export const metadata: Metadata = buildMetadata({
  title: "Extra Curricular",
  description:
    "Music, dance, yoga, silambam, art and craft — activities that nurture every talent.",
  path: "/activities/extra-curricular",
});

const items: CardItem[] = extraActivities.map((activity) => ({
  title: activity.title,
  href: `/activities/extra-curricular/${activity.slug}`,
  image: "/assets/placeholder.jpg",
  blurb: activity.blurb,
}));

export default function ExtraCurricularPage() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        title="Extra Curricular Activities"
        subtitle="Nurturing every talent beyond the classroom — from music and dance to yoga, silambam and art."
        className="mb-10"
      />
      <CardGrid items={items} columns={3} />
    </section>
  );
}
