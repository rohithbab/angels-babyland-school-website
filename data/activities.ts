import type { EventItem } from "@/components/ui/EventSection";

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
      { image: "/assets/activities/events/kids_events/2025/Happy program.jpeg", name: "Happy Program by our Angels", date: "21 Dec 2025", time: "6:00 PM", year: 2025 },
      { image: "/assets/activities/events/kids_events/2025/Independence_day.jpeg", name: "Kids Independence Day Celebration", date: "15 Aug 2025", time: "9:00 AM", year: 2025 },
      { image: "/assets/activities/events/kids_events/2025/investiture_ceremony.jpeg", name: "Investiture Ceremony for Lil Champs", date: "15 Jan 2025", time: "10:00 AM", year: 2025 },
      { image: "/assets/activities/events/kids_events/2025/Onam_celebration.jpeg", name: "Onam Pookalam Celebration", date: "05 Sep 2025", time: "10:00 AM", year: 2025 },
    ],
  },
  {
    slug: "higher-secondary",
    title: "Higher Secondary Cultural Events",
    subtitle:
      "Vibrant stage performances, festivals and annual day celebrations that showcase the talents of our senior students.",
    events: [
      { image: "/assets/activities/events/High_school_events/2025/annual_day.jpeg", name: "Annual Day Celebration", date: "20 Dec 2025", time: "6:00 PM", year: 2025 },
      { image: "/assets/activities/events/High_school_events/2025/pongal_celebration.jpeg", name: "Pongal Celebration", date: "15 Jan 2025", time: "10:00 AM", year: 2025 },
      { image: "/assets/activities/events/High_school_events/2025/Cristmas_day.jpeg", name: "Christmas Celebration", date: "25 Dec 2025", time: "9:00 AM", year: 2025 },
      { image: "/assets/activities/events/High_school_events/2025/Drug Awareness.jpeg", name: "Drug Awareness Programme", date: "26 Jun 2025", time: "11:00 AM", year: 2025 },
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

const KIDS_SPORTS_25 = "/assets/activities/sports/kids_sports/2025";
const KIDS_SPORTS_26 = "/assets/activities/sports/kids_sports/2026";
const HS_SPORTS_26 = "/assets/activities/sports/high_school_sports/2026";

export const sportsGroups: EventGroup[] = [
  {
    slug: "primary",
    title: "Primary Sports Activities",
    subtitle:
      "Playful, energetic games that develop coordination, fitness and a love for sport in our youngest students.",
    events: [
      // Annual Sports Meet 2026
      { image: `${KIDS_SPORTS_26}/BC5A0011.JPG`, name: "Beats of the March — Our Little Band", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${KIDS_SPORTS_26}/BC5A0018.JPG`, name: "A Grand Welcome for the Chief Guest", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${KIDS_SPORTS_26}/BC5A0052.JPG`, name: "Felicitating Our Chief Guest", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${KIDS_SPORTS_26}/BC5A0090.JPG`, name: "Tulip House March Past", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${KIDS_SPORTS_26}/BC5A0094.JPG`, name: "Lily House on Parade", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${KIDS_SPORTS_26}/BC5A0103.JPG`, name: "House Captains Salute the Chief Guest", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${KIDS_SPORTS_26}/BC5A0171.JPG`, name: "Tiny Champions on the Podium", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${KIDS_SPORTS_26}/BC5A0327.JPG`, name: "Little Yogis in Action", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${KIDS_SPORTS_26}/BC5A0419.JPG`, name: "Tricolour at the Top — A Proud Pyramid", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${KIDS_SPORTS_26}/BC5A0423.JPG`, name: "Balance and Teamwork", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${KIDS_SPORTS_26}/BC5A0433.JPG`, name: "Standing Tall Together", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${KIDS_SPORTS_26}/BC5A0470.JPG`, name: "Winning Smiles with the Trophy", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${KIDS_SPORTS_26}/BC5A0476.JPG`, name: "Little Winners Celebrate", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${KIDS_SPORTS_26}/BC5A0487.JPG`, name: "Joy of Winning — Our KG Stars", date: "24 Aug 2026", time: "", year: 2026 },
      // 2025
      { image: `${KIDS_SPORTS_25}/Sports day 4.jpeg`, name: "Overall Championship Trophy", date: "12 Dec 2025", time: "9:00 AM", year: 2025 },
      { image: `${KIDS_SPORTS_25}/Sports day1.jpeg`, name: "School Drill", date: "18 Sep 2025", time: "10:00 AM", year: 2025 },
      { image: `${KIDS_SPORTS_25}/Sports Day3.jpeg`, name: "Prize Distribution", date: "07 Nov 2025", time: "8:00 AM", year: 2025 },
    ],
  },
  {
    slug: "higher-secondary",
    title: "Higher Secondary Sports",
    subtitle:
      "Competitive athletics, mass drills and the annual sports meet that build fitness, discipline and team spirit in our senior students.",
    events: [
      // Annual Sports Meet 2026
      { image: `${HS_SPORTS_26}/BC5A0527.JPG`, name: "Honouring Our Chief Guest", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${HS_SPORTS_26}/BC5A0555.JPG`, name: "Tulip House March Past", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${HS_SPORTS_26}/BC5A0557.JPG`, name: "Save Water Awareness March", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${HS_SPORTS_26}/BC5A0564.JPG`, name: "The Grand March Past of the Houses", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${HS_SPORTS_26}/BC5A0670.JPG`, name: "Champions on the Podium", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${HS_SPORTS_26}/BC5A0714.JPG`, name: "Strength Meets Grace — Mass Yoga Display", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${HS_SPORTS_26}/BC5A0759.JPG`, name: "Rhythm and Discipline — Mass Drill", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${HS_SPORTS_26}/BC5A0765.JPG`, name: "Silambam — Skill, Focus and Tradition", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${HS_SPORTS_26}/BC5A0802.JPG`, name: "Reaching New Heights — Human Pyramid", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${HS_SPORTS_26}/BC5A0863.JPG`, name: "The Thrill of Victory", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${HS_SPORTS_26}/BC5A0878.JPG`, name: "Champions with the Winner's Shield", date: "24 Aug 2026", time: "", year: 2026 },
      { image: `${HS_SPORTS_26}/BC5A0888.JPG`, name: "Behind Every Champion — Our Sports Team", date: "24 Aug 2026", time: "", year: 2026 },
    ],
  },
];

export function getSportsGroup(slug: string): EventGroup | undefined {
  return sportsGroups.find((g) => g.slug === slug);
}
