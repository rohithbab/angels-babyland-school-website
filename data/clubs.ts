import type { GalleryFrame } from "@/components/ui/GalleryDetail";

/** A club leaf page: landing card data + its GalleryDetail content. */
export interface Club {
  slug: string;
  title: string;
  blurb: string;
  intro: string;
  frames: GalleryFrame[];
}

// Placeholder image path — every slot renders the single placeholder for now.
const IMG = "/assets/placeholder.jpg";

export const clubs: Club[] = [
  {
    slug: "scouts-and-guides",
    title: "Scouts & Guides",
    blurb: "Discipline, service and outdoor leadership.",
    intro:
      "Our Scouts & Guides unit builds character through service, teamwork and outdoor activity.",
    frames: [
      { image: IMG, caption: "Annual scout camp", date: "12 Jan 2026", time: "9:00 AM" },
      { image: IMG, caption: "Community service drive", date: "04 Feb 2026", time: "10:30 AM" },
      { image: IMG, caption: "Flag hoisting ceremony", date: "26 Jan 2026", time: "8:00 AM" },
    ],
  },
  {
    slug: "leo-club",
    title: "Leo Club",
    blurb: "Leadership, experience and opportunity.",
    intro:
      "The Leo Club nurtures young leaders through social initiatives and collaborative projects.",
    frames: [
      { image: IMG, caption: "Installation ceremony", date: "18 Jul 2025", time: "5:00 PM" },
      { image: IMG, caption: "Tree plantation drive", date: "22 Aug 2025", time: "7:30 AM" },
    ],
  },
  {
    slug: "eco-club",
    title: "Eco Club",
    blurb: "Caring for our campus and our planet.",
    intro:
      "The Eco Club promotes environmental awareness through hands-on green initiatives.",
    frames: [
      { image: IMG, caption: "Campus clean-up", date: "05 Jun 2025", time: "9:00 AM" },
      { image: IMG, caption: "Recycling workshop", date: "15 Sep 2025", time: "11:00 AM" },
    ],
  },
  {
    slug: "bharatanatyam",
    title: "Bharatanatyam",
    blurb: "Grace and tradition in classical dance.",
    intro:
      "Students train in the classical art of Bharatanatyam, performing at school and cultural events.",
    frames: [
      { image: IMG, caption: "Annual recital", date: "20 Dec 2025", time: "6:00 PM" },
      { image: IMG, caption: "Arangetram practice", date: "08 Nov 2025", time: "4:00 PM" },
    ],
  },
  {
    slug: "music",
    title: "Music",
    blurb: "Voices and instruments in harmony.",
    intro:
      "The Music club develops vocal and instrumental talent through regular practice and performances.",
    frames: [
      { image: IMG, caption: "School choir performance", date: "14 Feb 2026", time: "5:30 PM" },
      { image: IMG, caption: "Instrumental workshop", date: "03 Mar 2026", time: "3:00 PM" },
    ],
  },
];

/** Lookup helper used by the dynamic [slug] route. */
export function getClub(slug: string): Club | undefined {
  return clubs.find((c) => c.slug === slug);
}
