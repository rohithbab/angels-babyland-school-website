import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryYearView from "@/components/ui/GalleryYearView";
import { getHappyProgramFrames } from "@/lib/happyProgram";

export const metadata: Metadata = buildMetadata({
  title: "Happy Program",
  description:
    "A celebration of joy, creativity and togetherness through fun-filled activities.",
  path: "/activities/happy-program",
});

export default function HappyProgramPage() {
  const frames = getHappyProgramFrames();

  return (
    <section className="container-x section-y">
      <GalleryYearView
        align="center"
        flanked
        title="Happy Program"
        intro="Spreading smiles through creative activities, festive celebrations and joyful experiences."
        frames={frames}
      />
    </section>
  );
}
