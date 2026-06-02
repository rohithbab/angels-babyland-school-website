import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GalleryDetail from "@/components/ui/GalleryDetail";
import { sports } from "@/data/activities";

export const metadata: Metadata = buildMetadata({
  title: "Sports & Physical Activities",
  description: sports.intro,
  path: "/activities/sports",
});

export default function SportsPage() {
  return (
    <section className="container-x section-y">
      <GalleryDetail
        title={sports.title}
        intro={sports.intro}
        frames={sports.frames}
      />
    </section>
  );
}
