/**
 * Parent testimonials — consumed by the Home page marquee (built in a LATER
 * phase, not now). Placeholder entries only.
 */
export interface Testimonial {
  quote: string;
  author: string;
  /** Relationship to the school, e.g. "Parent of Grade 5 student". */
  relation: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The teachers genuinely care about every child. My daughter has grown in confidence and discipline.",
    author: "Lakshmi R.",
    relation: "Parent of Grade 5 student",
  },
  {
    quote:
      "A school that balances academics with values. We are proud to be part of this family.",
    author: "Suresh K.",
    relation: "Parent of Grade 9 student",
  },
  {
    quote:
      "Wonderful facilities and a warm environment. The activities keep my son engaged and happy.",
    author: "Priya M.",
    relation: "Parent of LKG student",
  },
  {
    quote:
      "Thirty years of trust in our community speaks for itself. Excellent guidance throughout.",
    author: "Anand V.",
    relation: "Parent of Grade 12 student",
  },
];
