import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import EventYearView from "@/components/ui/EventYearView";
import { culturalGroups, getCulturalGroup } from "@/data/activities";

interface PageProps {
  params: Promise<{ group: string }>;
}

/** Pre-render one static page per cultural group (kids, higher-secondary). */
export function generateStaticParams() {
  return culturalGroups.map((g) => ({ group: g.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { group: slug } = await params;
  const group = getCulturalGroup(slug);
  if (!group) return buildMetadata({ title: "Cultural Activities" });
  return buildMetadata({
    title: group.title,
    description: group.subtitle,
    path: `/activities/culturals/${group.slug}`,
  });
}

export default async function CulturalGroupPage({ params }: PageProps) {
  const { group: slug } = await params;
  const group = getCulturalGroup(slug);
  if (!group) notFound();

  return (
    <section className="container-x section-y">
      <EventYearView
        headingAs="h1"
        title={group.title}
        subtitle={group.subtitle}
        events={group.events}
      />
    </section>
  );
}
