import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import AlumniMemories from "@/components/about/AlumniMemories";
import { readGalleryItemsFromDisk } from "@/lib/photos";
import { ALUMNI_CAPTIONS } from "@/data/alumni";

export const metadata: Metadata = buildMetadata({
  title: "Alumni Memories",
  description:
    "Roots that hold, wings that fly — cherished memories from the alumni of Angels Babyland Matric Higher Secondary School.",
  path: "/alumni",
});

export default function AlumniPage() {
  const alumniRaw = readGalleryItemsFromDisk("assets/about/alumini_section");
  const alumniPhotos = alumniRaw.map((a) => ({
    image: a.image,
    caption: ALUMNI_CAPTIONS[a.image.split("/").pop() ?? ""] ?? a.title,
  }));

  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        align="center"
        flanked
        title="Alumni Memories"
        subtitle="Wherever the years have taken our Babylanders, the memories they made here remain close to every heart."
      />
      <div className="mt-12">
        <AlumniMemories photos={alumniPhotos} cta={false} />
      </div>
    </section>
  );
}
