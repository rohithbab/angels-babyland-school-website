import type { GalleryFrame } from "@/components/ui/GalleryDetail";

/** Content for a single-leaf activity GalleryDetail page. */
export interface ActivitySection {
  title: string;
  intro: string;
  frames: GalleryFrame[];
}

const IMG = "/assets/placeholder.jpg";

/** Culturals leaf — /activities/culturals */
export const culturals: ActivitySection = {
  title: "Cultural Activities",
  intro:
    "Annual day, festivals and stage performances that celebrate our students' creativity.",
  frames: [
    { image: IMG, caption: "Annual Day celebration", date: "21 Dec 2025", time: "6:00 PM" },
    { image: IMG, caption: "Independence Day cultural show", date: "15 Aug 2025", time: "9:00 AM" },
    { image: IMG, caption: "Pongal festival event", date: "15 Jan 2026", time: "10:00 AM" },
  ],
};

/** Sports leaf — /activities/sports */
export const sports: ActivitySection = {
  title: "Sports & Physical Activities",
  intro:
    "Athletics, team games and the annual sports meet that build fitness and team spirit.",
  frames: [
    { image: IMG, caption: "Annual Sports Meet", date: "07 Feb 2026", time: "8:00 AM" },
    { image: IMG, caption: "Inter-house football final", date: "23 Nov 2025", time: "3:30 PM" },
    { image: IMG, caption: "District athletics meet", date: "11 Oct 2025", time: "7:00 AM" },
  ],
};
