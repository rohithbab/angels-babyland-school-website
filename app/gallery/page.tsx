import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import GalleryIntro from "@/components/gallery/GalleryIntro";
import { galleryImages } from "@/data/gallery";
import { GALLERY_FOLDER } from "@/data/photoFolders";
import { readGalleryItemsFromDisk } from "@/lib/photos";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description:
    "A glimpse into the vibrant life and memorable moments at our school.",
  path: "/gallery",
});

export default function GalleryPage() {
  const diskItems = readGalleryItemsFromDisk(GALLERY_FOLDER);
  const images = diskItems.length > 0 ? diskItems : galleryImages;

  return (
    <section className="container-x section-y">
      <GalleryIntro />
      <SectionHeading
        as="h1"
        align="center"
        flanked
        title="Gallery"
        subtitle="A glimpse into the vibrant life and memorable moments at our school."
      />

      <div className="mt-10">
        <GalleryLightbox images={images} />
      </div>
    </section>
  );
}
