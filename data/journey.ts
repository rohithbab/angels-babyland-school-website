/** A single milestone on the Our Journey timeline. */
export interface JourneyMilestone {
  year: string;
  title: string;
  blurb: string;
  /** Future image path; for now every slot renders the placeholder. */
  image: string;
}

const IMG = "/assets/placeholder.jpg";

/** Placeholder timeline — real years/copy/images supplied before launch. */
export const journey: JourneyMilestone[] = [
  {
    year: "1993",
    title: "Our Beginning",
    blurb:
      "Angels Baby Land opened its doors with a handful of classrooms and a vision for value-based education.",
    image: IMG,
  },
  {
    year: "2001",
    title: "Growing Campus",
    blurb:
      "Expanded facilities welcomed primary and middle school students as enrolment steadily grew.",
    image: IMG,
  },
  {
    year: "2010",
    title: "Higher Secondary",
    blurb:
      "The school extended to Higher Secondary, completing the journey from LKG to Class 12.",
    image: IMG,
  },
  {
    year: "2018",
    title: "Modern Facilities",
    blurb:
      "New laboratories, a computer lab and a library brought modern learning to every student.",
    image: IMG,
  },
  {
    year: "2023",
    title: "Three Decades Strong",
    blurb:
      "Celebrating over 30 years of nurturing confident, responsible and accomplished students.",
    image: IMG,
  },
];
