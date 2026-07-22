import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GalleryYearView from "@/components/ui/GalleryYearView";
import { readFramesFromDisk } from "@/lib/photos";

export const metadata: Metadata = buildMetadata({
  title: "Happy Program",
  description:
    "A celebration of joy, creativity and togetherness through fun-filled activities.",
  path: "/activities/happy-program",
});

export default function HappyProgramPage() {
  const frames = readFramesFromDisk("assets/activities/happy-program");

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
