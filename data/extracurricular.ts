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

// Placeholder image path — every slot renders the single placeholder for now.
const IMG = "/assets/placeholder.jpg";

// Real Art & Craft photos.
const ART_GRID = "/assets/activities/extra_curicular/art_and_craft_grid_image.jpeg";
const ART_1 = "/assets/activities/extra_curicular/arts and crafts/2025/Arts_and_craft1.jpeg";
const ART_2 = "/assets/activities/extra_curicular/arts and crafts/2025/Arts_and_craft2.jpeg";
const ART_3 = "/assets/activities/extra_curicular/arts and crafts/2025/Arts_and_craft3.jpeg";

// Real Panel Class photos.
const PANEL_GRID = "/assets/activities/extra_curicular/panel-class-grid.jpeg";
const PANEL_2025 = "/assets/activities/extra_curicular/pannel_class/2025";

export const extraActivities: ExtraActivity[] = [
  {
    slug: "keyboard-and-vocal",
    title: "Keyboard & Vocal",
    blurb: "Melody and voice training for budding musicians.",
    image: IMG,
    intro:
      "Students explore rhythm, melody and voice through structured keyboard and vocal training, performing at school events.",
    frames: [
      { image: IMG, caption: "Keyboard practice session", date: "10 Jul 2025", time: "3:30 PM", year: 2025 },
      { image: IMG, caption: "Vocal recital", date: "14 Feb 2025", time: "5:30 PM", year: 2025 },
      { image: IMG, caption: "Music showcase", date: "03 Mar 2025", time: "4:00 PM", year: 2025 },
    ],
  },
  {
    slug: "classical-dance",
    title: "Classical Dance",
    blurb: "Grace and tradition in classical dance forms.",
    image: IMG,
    intro:
      "Students train in classical dance, learning poise, expression and tradition while performing at cultural events.",
    frames: [
      { image: IMG, caption: "Annual recital", date: "20 Dec 2025", time: "6:00 PM", year: 2025 },
      { image: IMG, caption: "Dance practice", date: "08 Nov 2025", time: "4:00 PM", year: 2025 },
    ],
  },
  {
    slug: "western-dance",
    title: "Western Dance",
    blurb: "High-energy moves and modern choreography.",
    image: IMG,
    intro:
      "The Western Dance group builds confidence and coordination through contemporary choreography and stage performances.",
    frames: [
      { image: IMG, caption: "Stage performance", date: "21 Dec 2025", time: "7:00 PM", year: 2025 },
      { image: IMG, caption: "Choreography workshop", date: "12 Sep 2025", time: "3:30 PM", year: 2025 },
    ],
  },
  {
    slug: "yoga",
    title: "Yoga",
    blurb: "Balance, breath and mindful well-being.",
    image: IMG,
    intro:
      "Regular yoga sessions help students build flexibility, focus and calm through guided postures and breathing.",
    frames: [
      { image: IMG, caption: "Morning yoga session", date: "21 Jun 2025", time: "7:00 AM", year: 2025 },
      { image: IMG, caption: "International Yoga Day", date: "21 Jun 2025", time: "8:00 AM", year: 2025 },
    ],
  },
  {
    slug: "silambam",
    title: "Silambam",
    blurb: "Traditional Tamil martial art and self-defence.",
    image: IMG,
    intro:
      "Silambam training develops agility, discipline and self-defence skills through this traditional Tamil martial art.",
    frames: [
      { image: IMG, caption: "Silambam demonstration", date: "15 Jan 2025", time: "10:00 AM", year: 2025 },
      { image: IMG, caption: "Training session", date: "09 Oct 2025", time: "4:00 PM", year: 2025 },
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
    image: IMG, // placeholder until a combined grid image is supplied
    blurb: "Mindful balance and the traditional Tamil martial art.",
  },
  toCard("panel-class"),
  toCard("art-and-craft"),
];
