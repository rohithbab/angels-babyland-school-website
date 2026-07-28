import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GalleryYearView from "@/components/ui/GalleryYearView";
import { listYearImages } from "@/lib/photos";
import { HAPPY_CAPTIONS } from "@/data/happyProgramCaptions";

export const metadata: Metadata = buildMetadata({
  title: "Happy Program",
  description:
    "A celebration of joy, creativity and togetherness through fun-filled activities.",
  path: "/activities/happy-program",
});

export default function HappyProgramPage() {
  const images = listYearImages("assets/activities/happy-program", "2025");
  const frames = images.map((img) => {
    const filename = img.split("/").pop() ?? "";
    return {
      image: img,
      caption: HAPPY_CAPTIONS[filename] ?? "Happy Program Moment",
      date: "",
      time: "",
      year: 2025,
    };
  });

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
