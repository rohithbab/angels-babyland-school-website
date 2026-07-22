import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import EventYearView from "@/components/ui/EventYearView";
import { sportsGroups, getSportsGroup } from "@/data/activities";
import { SPORTS_FOLDERS } from "@/data/photoFolders";
import { readEventsFromDisk, mergeEvents } from "@/lib/photos";

interface PageProps {
  params: Promise<{ group: string }>;
}

/** Pre-render one static page per sports group (primary, higher-secondary). */
export function generateStaticParams() {
  return sportsGroups.map((g) => ({ group: g.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { group: slug } = await params;
  const group = getSportsGroup(slug);
  if (!group) return buildMetadata({ title: "Sports & Physical Activities" });
  return buildMetadata({
    title: group.title,
    description: group.subtitle,
    path: `/activities/sports/${group.slug}`,
  });
}

export default async function SportsGroupPage({ params }: PageProps) {
  const { group: slug } = await params;
  const group = getSportsGroup(slug);
  if (!group) notFound();

  const folder = SPORTS_FOLDERS[slug];
  const diskEvents = folder ? readEventsFromDisk(folder) : [];
  const allEvents = mergeEvents(group.events, diskEvents);

  return (
    <section className="container-x section-y">
      <EventYearView
        headingAs="h1"
        title={group.title}
        subtitle={group.subtitle}
        events={allEvents}
      />
    </section>
  );
}
