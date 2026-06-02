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
    blurb: "Scouts, Leo, Eco, dance, music and more.",
  },
  {
    title: "Sports",
    href: "/activities/sports",
    image: "/assets/placeholder.jpg",
    blurb: "Athletics, team games and the annual meet.",
  },
];

export default function ActivitiesPage() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        title="Beyond Academics"
        subtitle="The activities that shape well-rounded students."
        className="mb-10"
      />
      <CardGrid items={items} columns={3} />
    </section>
  );
}
