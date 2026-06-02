import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import CardGrid, { type CardItem } from "@/components/ui/CardGrid";
import { clubs } from "@/data/clubs";

export const metadata: Metadata = buildMetadata({
  title: "Clubs",
  description: "Student clubs that build skills, character and community.",
  path: "/activities/clubs",
});

const items: CardItem[] = clubs.map((club) => ({
  title: club.title,
  href: `/activities/clubs/${club.slug}`,
  image: "/assets/placeholder.jpg",
  blurb: club.blurb,
}));

export default function ClubsPage() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        title="Clubs"
        subtitle="Where students explore interests beyond the classroom."
        className="mb-10"
      />
      <CardGrid items={items} columns={3} />
    </section>
  );
}
