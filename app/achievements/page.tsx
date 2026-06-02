import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import CardGrid, { type CardItem } from "@/components/ui/CardGrid";
import { achievements } from "@/data/achievements";

export const metadata: Metadata = buildMetadata({
  title: "Achievements",
  description: "Milestones earned by our school, teachers and students.",
  path: "/achievements",
});

const items: CardItem[] = achievements.map((a) => ({
  title: a.title,
  href: `/achievements/${a.slug}`,
  image: "/assets/placeholder.jpg",
  blurb: a.blurb,
}));

export default function AchievementsPage() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        title="Achievements"
        subtitle="Celebrating excellence, dedication, and success across academics and beyond."
        className="mb-10"
      />
      <CardGrid items={items} columns={3} />
    </section>
  );
}
