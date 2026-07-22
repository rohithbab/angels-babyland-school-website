import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import CardGrid, { type CardItem } from "@/components/ui/CardGrid";
import CTAButton from "@/components/ui/CTAButton";
import MarqueeLightbox from "@/components/ui/MarqueeLightbox";
import { getHappyProgramHighlights } from "@/lib/happyProgram";

export const metadata: Metadata = buildMetadata({
  title: "Activities",
  description: "Beyond academics — culturals, clubs and sports at our school.",
  path: "/activities",
});

const items: CardItem[] = [
  {
    title: "Culturals",
    href: "/activities/culturals",
    image: "/assets/activities/events_grid.jpeg",
    blurb: "Annual day, festivals and stage performances.",
  },
  {
    title: "Clubs",
    href: "/activities/clubs",
    image: "/assets/activities/Clubs_grid.jpeg",
    blurb: "Scouts, Leo, RSP, Eco and more.",
  },
  {
    title: "Sports",
    href: "/activities/sports",
    image: "/assets/activities/Sports_day_grid.jpeg",
    blurb: "Athletics, team games and the annual meet.",
  },
  {
    title: "Extra Curricular",
    href: "/activities/extra-curricular",
    image: "/assets/activities/extra_curicullar_grid.jpeg",
    blurb: "Music, dance, yoga, silambam, art and craft.",
  },
];

export default function ActivitiesPage() {
  const highlights = getHappyProgramHighlights();

  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        align="center"
        flanked
        title="Activities & Clubs"
        subtitle="Encouraging creativity, confidence, and holistic development beyond the classroom."
        className="mb-10"
      />
      <CardGrid items={items} columns={4} />

      {/* Happy Program — photo marquee with CTA */}
      <div className="mt-16">
        <SectionHeading
          align="center"
          flanked
          title="Happy Program"
        />
        <p className="mx-auto mt-5 max-w-3xl text-center text-text-muted">
          Spreading smiles through creative activities, festive celebrations and
          joyful experiences that nurture happiness and belonging.
        </p>

        {highlights.length > 0 && (
          <div className="mt-10">
            <MarqueeLightbox items={highlights} />
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <CTAButton href="/activities/happy-program" size="lg">
            Have a look
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
