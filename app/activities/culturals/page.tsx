import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GalleryDetail from "@/components/ui/GalleryDetail";
import { culturals } from "@/data/activities";

export const metadata: Metadata = buildMetadata({
  title: "Culturals",
  description: culturals.intro,
  path: "/activities/culturals",
});

export default function CulturalsPage() {
  return (
    <section className="container-x section-y">
      <GalleryDetail
        title={culturals.title}
        intro={culturals.intro}
        frames={culturals.frames}
      />
    </section>
  );
}
