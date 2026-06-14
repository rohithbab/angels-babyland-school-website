import type { EventItem } from "@/components/ui/EventSection";

const IMG = "/assets/placeholder.jpg";

/** A page-level intro (centered heading + subtitle) for an activity hub. */
export interface ActivityIntro {
  title: string;
  subtitle: string;
}

/** One audience group (e.g. Kids / Higher Secondary) shown as an EventSection. */
export interface EventGroup {
  /** URL segment under the parent hub. */
  slug: string;
  title: string;
  subtitle: string;
  events: EventItem[];
}

/* ----------------------------- CULTURALS ----------------------------- */

export const culturalsIntro: ActivityIntro = {
  title: "Cultural Activities",
  subtitle:
    "Celebrating creativity, traditions, and talents through vibrant cultural events conducted for both kindergarten and higher secondary students.",
};

export const culturalGroups: EventGroup[] = [
  {
    slug: "kids",
    title: "Kids Cultural Celebrations",
    subtitle:
      "Fun-filled celebrations designed for our kindergarten and primary students to build confidence, creativity, and joyful learning.",
    events: [
      { image: IMG, name: "Kids Annual Day Celebration", date: "21 Dec 2025", time: "6:00 PM" },
      { image: IMG, name: "Kids Independence Day Celebration", date: "15 Aug 2025", time: "9:00 AM" },
      { image: IMG, name: "Kids Pongal Festival", date: "15 Jan 2026", time: "10:00 AM" },
    ],
  },
  {
    slug: "higher-secondary",
    title: "Higher Secondary Cultural Events",
    subtitle:
      "Vibrant stage performances, festivals and annual day celebrations that showcase the talents of our senior students.",
    events: [
      { image: IMG, name: "Annual Day Celebration", date: "20 Dec 2025", time: "6:00 PM" },
      { image: IMG, name: "Independence Day Cultural Show", date: "15 Aug 2025", time: "9:00 AM" },
      { image: IMG, name: "Pongal Festival", date: "15 Jan 2026", time: "10:00 AM" },
    ],
  },
];

export function getCulturalGroup(slug: string): EventGroup | undefined {
  return culturalGroups.find((g) => g.slug === slug);
}

/* ------------------------------- SPORTS ------------------------------ */

export const sportsIntro: ActivityIntro = {
  title: "Sports & Physical Activities",
  subtitle:
    "Building fitness, discipline and team spirit through games and athletics for every age group — from our youngest learners to higher secondary students.",
};

export const sportsGroups: EventGroup[] = [
  {
    slug: "primary",
    title: "Primary Sports Activities",
    subtitle:
      "Playful, energetic games that develop coordination, fitness and a love for sport in our youngest students.",
    events: [
      { image: IMG, name: "Primary Sports Day", date: "12 Dec 2025", time: "9:00 AM" },
      { image: IMG, name: "Fun Field Games", date: "18 Sep 2025", time: "10:00 AM" },
      { image: IMG, name: "Mini Marathon", date: "07 Nov 2025", time: "8:00 AM" },
    ],
  },
  {
    slug: "higher-secondary",
    title: "Higher Secondary Sports",
    subtitle:
      "Competitive athletics, team games and the annual sports meet that build fitness, discipline and team spirit.",
    events: [
      { image: IMG, name: "Annual Sports Meet", date: "07 Feb 2026", time: "8:00 AM" },
      { image: IMG, name: "Inter-house Football Final", date: "23 Nov 2025", time: "3:30 PM" },
      { image: IMG, name: "District Athletics Meet", date: "11 Oct 2025", time: "7:00 AM" },
    ],
  },
];

export function getSportsGroup(slug: string): EventGroup | undefined {
  return sportsGroups.find((g) => g.slug === slug);
}
