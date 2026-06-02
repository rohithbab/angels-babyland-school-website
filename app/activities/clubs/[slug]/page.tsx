import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import GalleryDetail from "@/components/ui/GalleryDetail";
import { clubs, getClub } from "@/data/clubs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-render one static page per club at build time. */
export function generateStaticParams() {
  return clubs.map((club) => ({ slug: club.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const club = getClub(slug);
  if (!club) return buildMetadata({ title: "Club" });
  return buildMetadata({
    title: club.title,
    description: club.intro,
    path: `/activities/clubs/${club.slug}`,
  });
}

export default async function ClubDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const club = getClub(slug);
  if (!club) notFound();

  return (
    <section className="container-x section-y">
      <GalleryDetail title={club.title} intro={club.intro} frames={club.frames} />
    </section>
  );
}
