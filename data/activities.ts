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
      { image: "/assets/activities/events/kids_events/Happy program.jpeg", name: "Happy Program by our Angels", date: "21 Dec 2025", time: "6:00 PM" },
      { image: "/assets/activities/events/kids_events/Independence_day.jpeg", name: "Kids Independence Day Celebration", date: "15 Aug 2025", time: "9:00 AM" },
      { image: "/assets/activities/events/kids_events/investiture_ceremony.jpeg", name: "Investiture Ceremony for Lil Champs", date: "15 Jan 2026", time: "10:00 AM" },
    ],
  },
  {
    slug: "higher-secondary",
    title: "Higher Secondary Cultural Events",
    subtitle:
      "Vibrant stage performances, festivals and annual day celebrations that showcase the talents of our senior students.",
    events: [
      { image: "/assets/activities/events/High_school_events/annual_day.jpeg", name: "Annual Day Celebration", date: "20 Dec 2025", time: "6:00 PM" },
      { image: "/assets/activities/events/High_school_events/pongal_celebration.jpeg", name: "Pongal Celebration", date: "15 Jan 2026", time: "10:00 AM" },
      { image: "/assets/activities/events/High_school_events/Cristmas_day.jpeg", name: "Christmas Celebration", date: "25 Dec 2025", time: "9:00 AM" },
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
