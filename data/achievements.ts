import type { GalleryFrame } from "@/components/ui/GalleryDetail";

/** An achievement category leaf: School, Teachers or Student. */
export interface Achievement {
  slug: string;
  title: string;
  blurb: string;
  /** Image shown on the landing-page card. */
  image: string;
  intro: string;
  frames: GalleryFrame[];
}

const SCHOOL_GRID = "/assets/achievements/school_achievements_grid_image.jpeg";
const TEACHER_GRID = "/assets/achievements/teacher_achievements_grid_image.jpeg";

const STUDENTS = "/assets/achievements/students_achievements";
const STUDENT_GRID = `${STUDENTS}/Students_achievements_04.jpeg`;

export const achievements: Achievement[] = [
  {
    slug: "school",
    title: "School Achievements",
    blurb: "Milestones earned by our institution.",
    image: SCHOOL_GRID,
    intro:
      "Recognitions and milestones earned by Angels Babyland over three decades of service.",
    frames: [
      { image: "/assets/achievements/school_achievements/School_achievements_01.jpeg", caption: "Prestigious Honour — School Award Ceremony", date: "", time: "", year: 2025 },
    ],
  },
  {
    slug: "teachers",
    title: "Teacher Achievements",
    blurb: "Excellence recognised among our faculty.",
    image: TEACHER_GRID,
    intro:
      "Awards and honours earned by our dedicated faculty for excellence in teaching.",
    frames: [
      { image: "/assets/achievements/teacher_achievements/Teachers_achievement_01.jpeg", caption: "Excellence in Teaching — Faculty Felicitation", date: "", time: "", year: 2025 },
      { image: "/assets/achievements/teacher_achievements/Teachers_achievement_02.jpeg", caption: "Honouring Dedication — Teacher Achievement Award", date: "", time: "", year: 2025 },
      { image: "/assets/achievements/teacher_achievements/Teachers_achievement_03.jpeg", caption: "Proud Moments — Recognising Our Outstanding Educators", date: "", time: "", year: 2025 },
    ],
  },
  {
    slug: "student",
    title: "Student Achievements",
    blurb: "Our students shining across fields.",
    image: STUDENT_GRID,
    intro:
      "Academic, sporting and cultural distinctions earned by our students.",
    frames: [
      { image: `${STUDENTS}/Students_achievements_01.jpeg`, caption: "Champion Athletes — District Level Winners", date: "20 Jan 2026", time: "10:00 AM", year: 2026 },
      { image: `${STUDENTS}/Students_achievements_02.jpeg`, caption: "Proud Moments — Sports Award Ceremony", date: "20 Jan 2026", time: "11:00 AM", year: 2026 },
      { image: `${STUDENTS}/Students_achievements_03.jpeg`, caption: "Team Spirit — Celebrating the Victory", date: "20 Jan 2026", time: "12:00 PM", year: 2026 },
      { image: `${STUDENTS}/Students_achievements_04.jpeg`, caption: "Sports Excellence — Medal Winners", date: "20 Jan 2026", time: "1:00 PM", year: 2026 },
      { image: `${STUDENTS}/Students_achievements_05.jpeg`, caption: "Triumph and Joy — Achievement Unlocked", date: "20 Jan 2026", time: "2:00 PM", year: 2026 },
      { image: `${STUDENTS}/Students_achievements_06.jpeg`, caption: "Rising Stars — Student Achievers in Sports", date: "20 Jan 2026", time: "3:00 PM", year: 2026 },
    ],
  },
];

/** Lookup helper used by the dynamic [slug] route. */
export function getAchievement(slug: string): Achievement | undefined {
  return achievements.find((a) => a.slug === slug);
}
