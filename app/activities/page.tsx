import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import CardGrid, { type CardItem } from "@/components/ui/CardGrid";

export const metadata: Metadata = buildMetadata({
  title: "Activities",
  description: "Beyond academics — culturals, clubs and sports at our school.",
  path: "/activities",
});

const items: CardItem[] = [
  {
    title: "Culturals",
    href: "/activities/culturals",
    image: "/assets/placeholder.jpg",
    blurb: "Annual day, festivals and stage performances.",
  },
  {
    title: "Clubs",
    href: "/activities/clubs",
    image: "/assets/placeholder.jpg",
    blurb: "Scouts, Leo, RSP, Eco and more.",
  },
  {
    title: "Sports",
    href: "/activities/sports",
    image: "/assets/placeholder.jpg",
    blurb: "Athletics, team games and the annual meet.",
  },
  {
    title: "Extra Curricular",
    href: "/activities/extra-curricular",
    image: "/assets/placeholder.jpg",
    blurb: "Music, dance, yoga, silambam, art and craft.",
  },
];

export default function ActivitiesPage() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        title="Activities & Clubs"
        subtitle="Encouraging creativity, confidence, and holistic development beyond the classroom."
        className="mb-10"
      />
      <CardGrid items={items} columns={4} />
    </section>
  );
}
