import type { GalleryFrame } from "@/components/ui/GalleryDetail";

/** An extra-curricular activity: landing card data + its GalleryDetail content. */
export interface ExtraActivity {
  slug: string;
  title: string;
  blurb: string;
  intro: string;
  frames: GalleryFrame[];
}

// Placeholder image path — every slot renders the single placeholder for now.
const IMG = "/assets/placeholder.jpg";

export const extraActivities: ExtraActivity[] = [
  {
    slug: "keyboard-and-vocal",
    title: "Keyboard & Vocal",
    blurb: "Melody and voice training for budding musicians.",
    intro:
      "Students explore rhythm, melody and voice through structured keyboard and vocal training, performing at school events.",
    frames: [
      { image: IMG, caption: "Keyboard practice session", date: "10 Jul 2025", time: "3:30 PM" },
      { image: IMG, caption: "Vocal recital", date: "14 Feb 2026", time: "5:30 PM" },
      { image: IMG, caption: "Music showcase", date: "03 Mar 2026", time: "4:00 PM" },
    ],
  },
  {
    slug: "classical-dance",
    title: "Classical Dance",
    blurb: "Grace and tradition in classical dance forms.",
    intro:
      "Students train in classical dance, learning poise, expression and tradition while performing at cultural events.",
    frames: [
      { image: IMG, caption: "Annual recital", date: "20 Dec 2025", time: "6:00 PM" },
      { image: IMG, caption: "Dance practice", date: "08 Nov 2025", time: "4:00 PM" },
    ],
  },
  {
    slug: "western-dance",
    title: "Western Dance",
    blurb: "High-energy moves and modern choreography.",
    intro:
      "The Western Dance group builds confidence and coordination through contemporary choreography and stage performances.",
    frames: [
      { image: IMG, caption: "Stage performance", date: "21 Dec 2025", time: "7:00 PM" },
      { image: IMG, caption: "Choreography workshop", date: "12 Sep 2025", time: "3:30 PM" },
    ],
  },
  {
    slug: "yoga",
    title: "Yoga",
    blurb: "Balance, breath and mindful well-being.",
    intro:
      "Regular yoga sessions help students build flexibility, focus and calm through guided postures and breathing.",
    frames: [
      { image: IMG, caption: "Morning yoga session", date: "21 Jun 2025", time: "7:00 AM" },
      { image: IMG, caption: "International Yoga Day", date: "21 Jun 2025", time: "8:00 AM" },
    ],
  },
  {
    slug: "silambam",
    title: "Silambam",
    blurb: "Traditional Tamil martial art and self-defence.",
    intro:
      "Silambam training develops agility, discipline and self-defence skills through this traditional Tamil martial art.",
    frames: [
      { image: IMG, caption: "Silambam demonstration", date: "15 Jan 2026", time: "10:00 AM" },
      { image: IMG, caption: "Training session", date: "09 Oct 2025", time: "4:00 PM" },
    ],
  },
  {
    slug: "art-and-craft",
    title: "Art & Craft",
    blurb: "Imagination at work with colour and craft.",
    intro:
      "Students express creativity through drawing, painting and hands-on craft, with their work displayed at school exhibitions.",
    frames: [
      { image: IMG, caption: "Art exhibition", date: "28 Feb 2026", time: "11:00 AM" },
      { image: IMG, caption: "Craft workshop", date: "16 Aug 2025", time: "2:00 PM" },
    ],
  },
];

/** Lookup helper used by the dynamic [slug] route. */
export function getExtraActivity(slug: string): ExtraActivity | undefined {
  return extraActivities.find((a) => a.slug === slug);
}
