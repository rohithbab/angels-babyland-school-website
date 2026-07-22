import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import GalleryYearView from "@/components/ui/GalleryYearView";
import { extraActivities, getExtraActivity } from "@/data/extracurricular";
import { EXTRA_FOLDERS } from "@/data/photoFolders";
import { readFramesFromDisk, mergeFrames } from "@/lib/photos";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-render one static page per extra-curricular activity at build time. */
export function generateStaticParams() {
  return extraActivities.map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = getExtraActivity(slug);
  if (!activity) return buildMetadata({ title: "Extra Curricular" });
  return buildMetadata({
    title: activity.title,
    description: activity.intro,
    path: `/activities/extra-curricular/${activity.slug}`,
  });
}

export default async function ExtraActivityPage({ params }: PageProps) {
  const { slug } = await params;
  const activity = getExtraActivity(slug);
  if (!activity) notFound();

  const folder = EXTRA_FOLDERS[slug];
  const diskFrames = folder ? readFramesFromDisk(folder) : [];
  const allFrames = mergeFrames(activity.frames, diskFrames);

  return (
    <section className="container-x section-y">
      <GalleryYearView
        align="center"
        flanked
        title={activity.title}
        intro={activity.intro}
        frames={allFrames}
      />
    </section>
  );
}
