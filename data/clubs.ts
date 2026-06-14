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
    slug: "rsp",
    title: "RSP",
    blurb: "Road Safety Patrol — alertness and civic duty.",
    intro:
      "The Road Safety Patrol trains students in traffic awareness, discipline and responsible civic behaviour.",
    frames: [
      { image: IMG, caption: "Road safety awareness rally", date: "11 Sep 2025", time: "9:00 AM" },
      { image: IMG, caption: "Traffic discipline drill", date: "06 Dec 2025", time: "10:00 AM" },
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
    slug: "standard-club",
    title: "Standard Club",
    blurb: "Building values, etiquette and leadership.",
    intro:
      "The Standard Club nurtures discipline, etiquette and leadership through regular activities and group projects.",
    frames: [
      { image: IMG, caption: "Leadership workshop", date: "19 Jul 2025", time: "2:00 PM" },
      { image: IMG, caption: "Group activity session", date: "10 Oct 2025", time: "3:30 PM" },
    ],
  },
  {
    slug: "cubs-and-bulbuls",
    title: "Cubs & Bulbuls",
    blurb: "Scouting fun and values for our youngest.",
    intro:
      "Cubs & Bulbuls introduces our youngest students to scouting through play, teamwork and simple acts of service.",
    frames: [
      { image: IMG, caption: "Cubs & Bulbuls rally", date: "23 Jan 2026", time: "9:30 AM" },
      { image: IMG, caption: "Fun activity day", date: "14 Nov 2025", time: "10:00 AM" },
    ],
  },
];

/** Lookup helper used by the dynamic [slug] route. */
export function getClub(slug: string): Club | undefined {
  return clubs.find((c) => c.slug === slug);
}
