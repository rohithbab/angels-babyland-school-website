import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import CardGrid from "@/components/ui/CardGrid";
import { extraLandingCards } from "@/data/extracurricular";

export const metadata: Metadata = buildMetadata({
  title: "Extra Curricular",
  description:
    "Music, dance, yoga, silambam, panel classes, art and craft — activities that nurture every talent.",
  path: "/activities/extra-curricular",
});

export default function ExtraCurricularPage() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        align="center"
        flanked
        title="Extra Curricular Activities"
        subtitle="Nurturing every talent beyond the classroom — from music and dance to yoga, silambam and art."
        className="mb-10"
      />
      <CardGrid items={extraLandingCards} columns={3} />
    </section>
  );
}
