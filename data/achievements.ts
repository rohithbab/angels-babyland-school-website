import type { GalleryFrame } from "@/components/ui/GalleryDetail";

/** An achievement category leaf: School, Teachers or Student. */
export interface Achievement {
  slug: string;
  title: string;
  blurb: string;
  intro: string;
  frames: GalleryFrame[];
}

const IMG = "/assets/placeholder.jpg";

export const achievements: Achievement[] = [
  {
    slug: "school",
    title: "School Achievements",
    blurb: "Milestones earned by our institution.",
    intro:
      "Recognitions and milestones earned by Angels Baby Land over three decades of service.",
    frames: [
      { image: IMG, caption: "Best Institution award", date: "10 Oct 2025", time: "11:00 AM" },
      { image: IMG, caption: "Accreditation ceremony", date: "28 Apr 2025", time: "10:00 AM" },
    ],
  },
  {
    slug: "teachers",
    title: "Teacher Achievements",
    blurb: "Excellence recognised among our faculty.",
    intro:
      "Awards and honours earned by our dedicated faculty for excellence in teaching.",
    frames: [
      { image: IMG, caption: "Best Teacher state award", date: "05 Sep 2025", time: "12:00 PM" },
      { image: IMG, caption: "Faculty development honour", date: "19 Jan 2026", time: "2:00 PM" },
    ],
  },
  {
    slug: "student",
    title: "Student Achievements",
    blurb: "Our students shining across fields.",
    intro:
      "Academic, sporting and cultural distinctions earned by our students.",
    frames: [
      { image: IMG, caption: "State topper felicitation", date: "30 May 2025", time: "10:30 AM" },
      { image: IMG, caption: "District sports champions", date: "12 Dec 2025", time: "9:00 AM" },
    ],
  },
];

/** Lookup helper used by the dynamic [slug] route. */
export function getAchievement(slug: string): Achievement | undefined {
  return achievements.find((a) => a.slug === slug);
}
