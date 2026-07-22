import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import GalleryYearView from "@/components/ui/GalleryYearView";
import { achievements, getAchievement } from "@/data/achievements";
import { ACHIEVEMENT_FOLDERS } from "@/data/photoFolders";
import { readFramesFromDisk } from "@/lib/photos";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-render one static page per achievement category at build time. */
export function generateStaticParams() {
  return achievements.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getAchievement(slug);
  if (!item) return buildMetadata({ title: "Achievements" });
  return buildMetadata({
    title: item.title,
    description: item.intro,
    path: `/achievements/${item.slug}`,
  });
}

export default async function AchievementDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getAchievement(slug);
  if (!item) notFound();

  const folder = ACHIEVEMENT_FOLDERS[slug];
  const diskFrames = folder ? readFramesFromDisk(folder) : [];
  const allFrames =
    diskFrames.length > 0 ? diskFrames : item.frames;

  return (
    <section className="container-x section-y">
      <GalleryYearView
        align="center"
        flanked
        title={item.title}
        intro={item.intro}
        frames={allFrames}
      />
    </section>
  );
}
