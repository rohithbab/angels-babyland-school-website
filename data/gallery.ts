/** A single general-campus gallery image. */
export interface GalleryItem {
  /** Image path under /public. */
  image: string;
  /** Impressive heading shown as the caption / hover title. */
  title: string;
  /** Descriptive alt text for accessibility / SEO. */
  alt: string;
}

const DIR = "/assets/gallery";

/** General campus images — distinct from activity/achievement galleries.
 *  Ordered for a balanced 4×4 grid that mixes themes across each row. */
export const galleryImages: GalleryItem[] = [
  {
    image: `${DIR}/blue day.jpeg`,
    title: "Blue Day Celebrations",
    alt: "Children dressed in blue for Blue Day celebrations",
  },
  {
    image: `${DIR}/green day.jpeg`,
    title: "Green Day — A Tribute to Nature",
    alt: "Students celebrating Green Day surrounded by greenery",
  },
  {
    image: `${DIR}/colors day.jpeg`,
    title: "A Splash of Colours",
    alt: "Colourfully dressed children on Colours Day",
  },
  {
    image: `${DIR}/colors day1 with correspondent mam.jpeg`,
    title: "Colours Day with Our Correspondent",
    alt: "Children and the school correspondent on Colours Day",
  },
  {
    image: `${DIR}/doctors day.jpeg`,
    title: "Honouring Our Doctors",
    alt: "Doctor's Day celebration at school",
  },
  {
    image: `${DIR}/Doctors day speech by secretary.jpeg`,
    title: "Doctor's Day Address by Our Secretary",
    alt: "School secretary delivering a Doctor's Day speech",
  },
  {
    image: `${DIR}/no to drugs.jpeg`,
    title: "Say No to Drugs Awareness",
    alt: "Anti-drug awareness programme at school",
  },
  {
    image: `${DIR}/Crafts.jpeg`,
    title: "Little Hands, Big Imagination",
    alt: "Children showcasing their handmade crafts",
  },
  {
    image: `${DIR}/Kinder Garden activity.jpeg`,
    title: "Kindergarten Discovery",
    alt: "Kindergarten children engaged in a classroom activity",
  },
  {
    image: `${DIR}/Kinder Garden activity2.jpeg`,
    title: "Learning Through Play",
    alt: "Young learners during a hands-on kindergarten session",
  },
  {
    image: `${DIR}/Kinder Garden activity3.jpeg`,
    title: "Joyful Kindergarten Moments",
    alt: "Kindergarten children enjoying an activity together",
  },
  {
    image: `${DIR}/Happy program .jpeg`,
    title: "A Programme Full of Smiles",
    alt: "Students performing in a joyful school programme",
  },
  {
    image: `${DIR}/blue day 2.jpeg`,
    title: "Dressed in Blue",
    alt: "Little ones dressed in blue for the theme day",
  },
  {
    image: `${DIR}/blue day 3.jpeg`,
    title: "Our Little Stars in Blue",
    alt: "Group of children celebrating Blue Day",
  },
  {
    image: `${DIR}/Parents meet.jpeg`,
    title: "Parents' Meet — Partners in Growth",
    alt: "Parents and teachers at the school parents' meet",
  },
  {
    image: `${DIR}/Parents meet2.jpeg`,
    title: "Connecting with Our Parents",
    alt: "Interactive session during the parents' meet",
  },
];
