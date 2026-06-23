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

const clubImages: Record<string, string> = {
  "scouts-and-guides": "/assets/activities/clubs/scouts_and_guides_grid_pic.jpeg",
  "leo-club": "/assets/activities/clubs/leo_club_grid.jpeg",
  "cubs-and-bulbuls": "/assets/activities/clubs/culbs_and_bulbul_grid.jpeg",
};

const items: CardItem[] = clubs.map((club) => ({
  title: club.title,
  href: `/activities/clubs/${club.slug}`,
  image: clubImages[club.slug] ?? "/assets/placeholder.jpg",
  blurb: club.blurb,
}));

export default function ClubsPage() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        align="center"
        flanked
        title="Clubs"
        subtitle="Where students explore interests beyond the classroom."
        className="mb-10"
      />
      <CardGrid items={items} columns={3} />
    </section>
  );
}
