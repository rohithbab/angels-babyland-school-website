import type { GalleryFrame } from "@/components/ui/GalleryDetail";
import type { CardItem } from "@/components/ui/CardGrid";

/** An extra-curricular activity: landing card data + its GalleryDetail content. */
export interface ExtraActivity {
  slug: string;
  title: string;
  blurb: string;
  /** Image shown on the landing-page card. */
  image: string;
  intro: string;
  frames: GalleryFrame[];
}

// Art & Craft photos.
const ART_GRID = "/assets/activities/extra_curicular/art_and_craft_grid_image.jpeg";
const ART_1 = "/assets/activities/extra_curicular/arts and crafts/2025/Arts_and_craft1.jpeg";
const ART_2 = "/assets/activities/extra_curicular/arts and crafts/2025/Arts_and_craft2.jpeg";
const ART_3 = "/assets/activities/extra_curicular/arts and crafts/2025/Arts_and_craft3.jpeg";

// Keyboard & Vocal photos.
const KEYBOARD = "/assets/activities/extra_curicular/Keyboard_vocals/2025";
const KEYBOARD_GRID = "/assets/activities/extra_curicular/Keyboard_vocals_grid.jpeg";

// Panel Class photos.
const PANEL_GRID = "/assets/activities/extra_curicular/panel-class-grid.jpeg";
const PANEL_2025 = "/assets/activities/extra_curicular/pannel_class/2025";

// Classical Dance photos.
const CLASSICAL = "/assets/activities/extra_curicular/classical_dance/2025";
const CLASSICAL_GRID = "/assets/activities/extra_curicular/Classical_dance_grid.jpeg";

// Western Dance photos.
const WESTERN = "/assets/activities/extra_curicular/western_dance/2025";
const WESTERN_GRID = `${WESTERN}/Western_dance_01.jpeg`;

// Yoga photos.
const YOGA = "/assets/activities/extra_curicular/yoga/2025";
const YOGA_GRID = `${YOGA}/Yoga_01.jpeg`;

// Silambam photos.
const SILAMBAM = "/assets/activities/extra_curicular/silambam/2025";
const SILAMBAM_GRID = `${SILAMBAM}/Silambam_01.jpeg`;

export const extraActivities: ExtraActivity[] = [
  {
    slug: "keyboard-and-vocal",
    title: "Keyboard & Vocal",
    blurb: "Melody and voice training for budding musicians.",
    image: KEYBOARD_GRID,
    intro:
      "Students explore rhythm, melody and voice through structured keyboard and vocal training, performing at school events.",
    frames: [
      { image: `${KEYBOARD}/Keyboard_vocals1.jpeg`, caption: "Keyboard Practice — Tuning Young Musicians", date: "", time: "", year: 2025 },
      { image: `${KEYBOARD}/Keyboard_vocals2.jpeg`, caption: "Melody in the Making — Keyboard & Vocal Session", date: "", time: "", year: 2025 },
    ],
  },
  {
    slug: "classical-dance",
    title: "Classical Dance",
    blurb: "Grace and tradition in classical dance forms.",
    image: CLASSICAL_GRID,
    intro:
      "Students train in classical dance, learning poise, expression and tradition while performing at cultural events.",
    frames: [
      { image: `${CLASSICAL}/Classical_dance_01.jpeg`, caption: "Bharatanatyam — Grace in Motion", date: "", time: "", year: 2025 },
      { image: `${CLASSICAL}/Classical_dance_02.jpeg`, caption: "Classical Dance Practice Session", date: "", time: "", year: 2025 },
      { image: `${CLASSICAL}/Classical_dance_03.jpeg`, caption: "Classical Dance Floor Practice", date: "", time: "", year: 2025 },
      { image: `${CLASSICAL}/Classical_dance_04.jpeg`, caption: "Classical Dance Recital", date: "", time: "", year: 2025 },
    ],
  },
  {
    slug: "western-dance",
    title: "Western Dance",
    blurb: "High-energy moves and modern choreography.",
    image: WESTERN_GRID,
    intro:
      "The Western Dance group builds confidence and coordination through contemporary choreography and stage performances.",
    frames: [
      { image: `${WESTERN}/Western_dance_01.jpeg`, caption: "Western Dance Performance", date: "21 Dec 2025", time: "7:00 PM", year: 2025 },
      { image: `${WESTERN}/Western_dance_02.jpeg`, caption: "Western Dance Practice", date: "12 Sep 2025", time: "3:30 PM", year: 2025 },
    ],
  },
  {
    slug: "yoga",
    title: "Yoga",
    blurb: "Balance, breath and mindful well-being.",
    image: YOGA_GRID,
    intro:
      "Regular yoga sessions help students build flexibility, focus and calm through guided postures and breathing.",
    frames: [
      { image: `${YOGA}/Yoga_01.jpeg`, caption: "Morning Yoga Session", date: "21 Jun 2025", time: "7:00 AM", year: 2025 },
      { image: `${YOGA}/Yoga_02.JPG`, caption: "International Yoga Day", date: "21 Jun 2025", time: "8:00 AM", year: 2025 },
      { image: `${YOGA}/Yoga_03.JPG`, caption: "Yoga Practice", date: "15 Jul 2025", time: "7:30 AM", year: 2025 },
    ],
  },
  {
    slug: "silambam",
    title: "Silambam",
    blurb: "Traditional Tamil martial art and self-defence.",
    image: SILAMBAM_GRID,
    intro:
      "Silambam training develops agility, discipline and self-defence skills through this traditional Tamil martial art.",
    frames: [
      { image: `${SILAMBAM}/Silambam_01.jpeg`, caption: "Silambam Demonstration", date: "15 Jan 2025", time: "10:00 AM", year: 2025 },
      { image: `${SILAMBAM}/Silambam_02.jpeg`, caption: "Silambam Training Session", date: "09 Oct 2025", time: "4:00 PM", year: 2025 },
      { image: `${SILAMBAM}/Silambam_03.jpeg`, caption: "Silambam Performance", date: "20 Dec 2025", time: "5:00 PM", year: 2025 },
    ],
  },
  {
    slug: "panel-class",
    title: "Panel Class",
    blurb: "Interactive digital-panel lessons that bring subjects to life.",
    image: PANEL_GRID,
    intro:
      "Our smart interactive panels turn every lesson into a vivid, hands-on experience — from guided digital activities to student-led presentations.",
    frames: [
      { image: `${PANEL_2025}/panel-class-01.jpg`, caption: "Interactive lesson on the smart panel", date: "08 Jul 2025", time: "10:00 AM", year: 2025 },
      { image: `${PANEL_2025}/panel-class-02.jpg`, caption: "Digital learning activity", date: "22 Jul 2025", time: "11:30 AM", year: 2025 },
      { image: `${PANEL_2025}/panel-class-03.jpg`, caption: "Student presentation on the panel", date: "05 Aug 2025", time: "2:00 PM", year: 2025 },
    ],
  },
  {
    slug: "art-and-craft",
    title: "Art & Craft",
    blurb: "Imagination at work with colour and craft.",
    image: ART_GRID,
    intro:
      "Students express creativity through drawing, painting and hands-on craft, with their work displayed at school exhibitions.",
    frames: [
      { image: ART_1, caption: "Creative Thumb Painting", date: "16 Aug 2025", time: "2:00 PM", year: 2025 },
      { image: ART_2, caption: "Origami & Paper Craft", date: "28 Feb 2025", time: "11:00 AM", year: 2025 },
      { image: ART_3, caption: "Arts & Craft with Student Engagement", date: "12 Mar 2025", time: "10:00 AM", year: 2025 },
    ],
  },
];

/** Lookup helper used by the dynamic [slug] route. */
export function getExtraActivity(slug: string): ExtraActivity | undefined {
  return extraActivities.find((a) => a.slug === slug);
}

/** Landing card for one activity slug. */
function toCard(slug: string): CardItem {
  const a = getExtraActivity(slug)!;
  return {
    title: a.title,
    href: `/activities/extra-curricular/${a.slug}`,
    image: a.image,
    blurb: a.blurb,
  };
}

/**
 * Cards for the Extra Curricular landing grid. Yoga and Silambam share one
 * combined card pointing to their hub page (which previews both and links to
 * each dedicated gallery); Panel Class fills the freed slot.
 */
export const extraLandingCards: CardItem[] = [
  toCard("keyboard-and-vocal"),
  toCard("classical-dance"),
  toCard("western-dance"),
  {
    title: "Yoga & Silambam",
    href: "/activities/extra-curricular/yoga-and-silambam",
    image: YOGA_GRID,
    blurb: "Mindful balance and the traditional Tamil martial art.",
  },
  toCard("panel-class"),
  toCard("art-and-craft"),
];
