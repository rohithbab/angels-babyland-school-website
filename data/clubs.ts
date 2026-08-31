import type { GalleryFrame } from "@/components/ui/GalleryDetail";

/** A club leaf page: landing card data + its GalleryDetail content. */
export interface Club {
  slug: string;
  title: string;
  blurb: string;
  intro: string;
  frames: GalleryFrame[];
}

// Real club photo folders (2025 gallery).
const SCOUTS = "/assets/activities/clubs/scouts_guides_folder/2025";
const LEO = "/assets/activities/clubs/leo_club/2025";
const CUBS = "/assets/activities/clubs/culbs_and_bulbuls/2025";
const RSP = "/assets/activities/clubs/Rsp/2025";

export const clubs: Club[] = [
  {
    slug: "scouts-and-guides",
    title: "Scouts & Guides",
    blurb: "Discipline, service and outdoor leadership.",
    intro:
      "Our Scouts & Guides unit builds character through service, teamwork and outdoor activity.",
    frames: [
      { image: `${SCOUTS}/troop-assembly.jpeg`, caption: "Troop assembly", date: "26 Jan 2025", time: "8:00 AM", year: 2025 },
      { image: `${SCOUTS}/camp-drill.jpeg`, caption: "Camp drill and inspection", date: "11 Jan 2025", time: "7:30 AM", year: 2025 },
      { image: `${SCOUTS}/camp-group-portrait.jpeg`, caption: "Group portrait at the annual camp", date: "12 Jan 2025", time: "9:00 AM", year: 2025 },
      { image: `${SCOUTS}/guides-camp-portrait.jpeg`, caption: "Guides troop at camp", date: "12 Jan 2025", time: "9:30 AM", year: 2025 },
      { image: `${SCOUTS}/campus-training.jpeg`, caption: "Training session on campus", date: "04 Feb 2025", time: "10:30 AM", year: 2025 },
      { image: `${SCOUTS}/rally-assembly.jpeg`, caption: "Scouts & Guides rally", date: "22 Feb 2025", time: "9:00 AM", year: 2025 },
    ],
  },
  {
    slug: "leo-club",
    title: "Leo Club",
    blurb: "Leadership, experience and opportunity.",
    intro:
      "The Leo Club nurtures young leaders through social initiatives and collaborative projects.",
    frames: [
      { image: `${LEO}/womens-day-walkathon.jpeg`, caption: "Women's Day Walkathon", date: "08 Mar 2025", time: "6:30 AM", year: 2025 },
      { image: `${LEO}/food-donation-drive.jpeg`, caption: "Food donation drive", date: "18 Jul 2025", time: "11:00 AM", year: 2025 },
      { image: `${LEO}/community-food-drive.jpeg`, caption: "Community food distribution", date: "22 Aug 2025", time: "8:00 AM", year: 2025 },
      { image: `${LEO}/road-safety-awareness.jpeg`, caption: "Road safety awareness campaign", date: "11 Sep 2025", time: "9:00 AM", year: 2025 },
    ],
  },
  {
    slug: "rsp",
    title: "RSP",
    blurb: "Road Safety Patrol — alertness and civic duty.",
    intro:
      "The Road Safety Patrol trains students in traffic awareness, discipline and responsible civic behaviour.",
    frames: [
      { image: `${RSP}/RSP_01.jpeg`, caption: "Road Safety Patrol — On Duty", date: "", time: "", year: 2025 },
    ],
  },
  {
    slug: "eco-club",
    title: "Eco Club",
    blurb: "Caring for our campus and our planet.",
    intro:
      "The Eco Club promotes environmental awareness through hands-on green initiatives.",
    frames: [
      { image: "/assets/activities/clubs/eco_club/2025/Eco_club_01.jpeg", caption: "Green Warriors in Action — Caring for Our Planet", date: "", time: "", year: 2025 },
      { image: "/assets/activities/clubs/eco_club/2025/Eco_club_02.jpeg", caption: "Nurturing Nature — A Day of Green Activities", date: "", time: "", year: 2025 },
      { image: "/assets/activities/clubs/eco_club/2025/Eco_club_03.jpeg", caption: "Planting Hope — Growing a Greener Tomorrow", date: "", time: "", year: 2025 },
      { image: "/assets/activities/clubs/eco_club/2025/Eco_club_04.jpeg", caption: "Hands-On Earth Care — Small Steps, Big Impact", date: "", time: "", year: 2025 },
      { image: "/assets/activities/clubs/eco_club/2025/Eco_club_05.jpeg", caption: "Protecting Our Planet — Eco Awareness Activity", date: "", time: "", year: 2025 },
      { image: "/assets/activities/clubs/eco_club/2025/Eco_club_06.jpeg", caption: "Together for a Cleaner Campus — Eco Day Highlights", date: "", time: "", year: 2025 },
    ],
  },
  {
    slug: "standard-club",
    title: "Standard Club",
    blurb: "Building values, etiquette and leadership.",
    intro:
      "The Standard Club nurtures discipline, etiquette and leadership through regular activities and group projects.",
    frames: [
      { image: "/assets/activities/clubs/standard_club/2025/Standard_club_01.jpeg", caption: "Dream Big, Lead Strong — Inspiring Young Leaders", date: "", time: "", year: 2025 },
      { image: "/assets/activities/clubs/standard_club/2025/Standard_club_02.jpeg", caption: "Discipline Meets Dedication — Shaping Future Champions", date: "", time: "", year: 2025 },
      { image: "/assets/activities/clubs/standard_club/2025/Standard_club_03.jpeg", caption: "Together We Rise — Building Character, One Step at a Time", date: "", time: "", year: 2025 },
    ],
  },
  {
    slug: "cubs-and-bulbuls",
    title: "Cubs & Bulbuls",
    blurb: "Scouting fun and values for our youngest.",
    intro:
      "Cubs & Bulbuls introduces our youngest students to scouting through play, teamwork and simple acts of service.",
    frames: [
      { image: `${CUBS}/state-award-ceremony.jpeg`, caption: "State-level award ceremony", date: "08 Aug 2025", time: "10:00 AM", year: 2025 },
      { image: `${CUBS}/certificate-day.jpeg`, caption: "Certificate day", date: "08 Aug 2025", time: "11:00 AM", year: 2025 },
      { image: `${CUBS}/cubs-pack-portrait.jpeg`, caption: "Cubs & Bulbuls pack portrait", date: "23 Jan 2025", time: "9:30 AM", year: 2025 },
      { image: `${CUBS}/investiture-ceremony.jpeg`, caption: "Investiture ceremony", date: "14 Nov 2025", time: "10:00 AM", year: 2025 },
      { image: `${CUBS}/scout-promise-ceremony.jpeg`, caption: "Reciting the scout promise", date: "14 Nov 2025", time: "9:30 AM", year: 2025 },
      { image: `${CUBS}/welcoming-the-guest.jpeg`, caption: "Welcoming the chief guest", date: "14 Nov 2025", time: "9:00 AM", year: 2025 },
      { image: `${CUBS}/annual-rally.jpeg`, caption: "Annual rally", date: "14 Nov 2025", time: "9:15 AM", year: 2025 },
      { image: `${CUBS}/jungle-theme-activity.jpeg`, caption: "Jungle-theme mask activity", date: "22 Feb 2025", time: "10:30 AM", year: 2025 },
      { image: `${CUBS}/troop-flag-activity.jpeg`, caption: "Troop flag activity", date: "22 Feb 2025", time: "11:00 AM", year: 2025 },
      { image: `${CUBS}/adventure-obstacle-course.jpeg`, caption: "Adventure obstacle course", date: "05 Jun 2025", time: "9:00 AM", year: 2025 },
      { image: `${CUBS}/heritage-excursion.jpeg`, caption: "Heritage excursion", date: "20 Dec 2025", time: "10:00 AM", year: 2025 },
    ],
  },
];

/** Lookup helper used by the dynamic [slug] route. */
export function getClub(slug: string): Club | undefined {
  return clubs.find((c) => c.slug === slug);
}

/** A titled group of frames shown as its own sub-section on a club page. */
export interface GalleryCategory {
  title: string;
  frames: GalleryFrame[];
}

const LEO_26 = "/assets/activities/clubs/leo_club/2026";

/**
 * Leo Club 2026 service projects, grouped into categories. Rendered as
 * labelled sub-sections by LeoClubView; the 2025 gallery stays flat.
 */
export const leoCategories2026: GalleryCategory[] = [
  {
    title: "Blood Donation Camp",
    frames: [
      { image: `${LEO_26}/blood_donation_02.jpeg`, caption: "Every Drop Counts — Donate Blood, Donate Life", date: "", time: "", year: 2026 },
      { image: `${LEO_26}/blood_donation_01.jpeg`, caption: "Honoured for a Noble Cause", date: "", time: "", year: 2026 },
      { image: `${LEO_26}/blood_donation_03.jpeg`, caption: "A Gift of Life — Certificate of Appreciation", date: "", time: "", year: 2026 },
    ],
  },
  {
    title: "Food Donation for Cancer Patients",
    frames: [
      { image: `${LEO_26}/Food donation for cancer awareness_02.jpeg`, caption: "Free Food for Cancer Patients — Serving with Compassion", date: "", time: "", year: 2026 },
      { image: `${LEO_26}/Food donation for cancer awareness_01.jpeg`, caption: "A Warm Meal, A Kind Heart", date: "", time: "", year: 2026 },
    ],
  },
  {
    title: "Old Age Home Visit",
    frames: [
      { image: `${LEO_26}/Old age hoem _01.jpeg`, caption: "Small Gifts, Big Smiles — A Visit to Vuyiroli Home", date: "", time: "", year: 2026 },
      { image: `${LEO_26}/Old age hoem _02.jpeg`, caption: "Serving with Love — Sharing a Meal with Our Elders", date: "", time: "", year: 2026 },
      { image: `${LEO_26}/Old age hoem _03.jpeg`, caption: "Nourishing Bonds — Lunch Served with Care", date: "", time: "", year: 2026 },
      { image: `${LEO_26}/Old age hoem _04.jpeg`, caption: "A Moment of Togetherness", date: "", time: "", year: 2026 },
      { image: `${LEO_26}/Old age hoem _05.jpeg`, caption: "Time Well Spent — Listening, Sharing, Caring", date: "", time: "", year: 2026 },
      { image: `${LEO_26}/Old age hoem _06.jpeg`, caption: "Hands That Serve — Compassion in Action", date: "", time: "", year: 2026 },
    ],
  },
  {
    title: "Club Meetings & Installation",
    frames: [
      { image: `${LEO_26}/leo_club_03.jpeg`, caption: "Leo Club Installation — A New Year of Service Begins", date: "", time: "", year: 2026 },
      { image: `${LEO_26}/leo_club_02.jpeg`, caption: "Leos with a Purpose — Our Club, Our Community", date: "", time: "", year: 2026 },
      { image: `${LEO_26}/leo_club_04.jpeg`, caption: "Pinned with Pride — New Leos Take the Pledge", date: "", time: "", year: 2026 },
      { image: `${LEO_26}/leo_club_05.jpeg`, caption: "A Badge of Service — Investiture of Young Leaders", date: "", time: "", year: 2026 },
    ],
  },
];
