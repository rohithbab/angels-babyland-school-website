/** A single milestone on the Our Journey timeline. */
export interface JourneyMilestone {
  year: string;
  title: string;
  blurb: string;
  /** Image shown on the milestone card. */
  image: string;
}

const IMG = "/assets/journey";

/**
 * The Angels Babyland story, told through archive photographs. Years are
 * anchored by the school's own event banners (e.g. "Annual Day 2011",
 * "Kids Annual Day 2014") and the sequence the school provided.
 */
export const journey: JourneyMilestone[] = [
  {
    year: "1996",
    title: "Where It All Began",
    blurb:
      "Our very first young graduates in caps and gowns — the humble first chapter of Angels Babyland.",
    image: `${IMG}/journey-01.jpg`,
  },
  {
    year: "1997",
    title: "Finding Our Voice",
    blurb:
      "Proud graduates stepped forward at an open-air convocation — the young school growing in confidence.",
    image: `${IMG}/journey-03.jpg`,
  },
  {
    year: "2000",
    title: "Little Hands, Big Dreams",
    blurb:
      "Classrooms alive with craft, colour and curiosity as our earliest students discovered the joy of learning.",
    image: `${IMG}/journey-02.jpg`,
  },
  {
    year: "2005",
    title: "Champions of the Field",
    blurb:
      "Sports Day 2005 — a beaming young winner steps up under the evening lights to receive their prize, every hard-won effort on the field honoured with pride.",
    image: `${IMG}/journey-15.jpg`,
  },
  {
    year: "2005",
    title: "A Moment of Honour",
    blurb:
      "Sports Day 2005 — a guest of honour felicitated with warmth and gratitude, the whole school gathered to celebrate discipline, teamwork and sporting spirit.",
    image: `${IMG}/journey-16.jpg`,
  },
  {
    year: "2008",
    title: "Rooted in Culture",
    blurb:
      "Students celebrated language, nation and tradition on stage, wearing our heritage with pride.",
    image: `${IMG}/journey-04.jpg`,
  },
  {
    year: "2009",
    title: "Celebrating Together",
    blurb:
      "Tiny dancers welcomed the New Year in sparkling white — joy and togetherness at the heart of every festival.",
    image: `${IMG}/journey-05.jpg`,
  },
  {
    year: "2010",
    title: "A Growing Family",
    blurb:
      "Year after year our celebrations grew larger, our little community dancing into each new beginning.",
    image: `${IMG}/journey-06.jpg`,
  },
  {
    year: "2011",
    title: "Annual Day Takes the Stage",
    blurb:
      "The stage came alive with rhythm and energy as students shone at our grand Annual Day.",
    image: `${IMG}/journey-07.jpg`,
  },
  {
    year: "2012",
    title: "Festivals of Joy",
    blurb:
      "From Christmas trees to community gatherings, every season became a chance to share, learn and celebrate.",
    image: `${IMG}/journey-08.jpg`,
  },
  {
    year: "2013",
    title: "Proud Beginnings",
    blurb:
      "Our Kindergarten graduates received their honours — the first big step in a lifelong journey of learning.",
    image: `${IMG}/journey-09.jpg`,
  },
  {
    year: "2014",
    title: "Rewarding Excellence",
    blurb:
      "Hard work met recognition as young achievers were honoured on the Annual Day stage.",
    image: `${IMG}/journey-10.jpg`,
  },
  {
    year: "2015",
    title: "Champions in the Making",
    blurb:
      "First, second and third — Sports Day taught our children to strive, compete and celebrate every effort.",
    image: `${IMG}/journey-11.jpg`,
  },
  {
    year: "2016",
    title: "A Legacy of Achievers",
    blurb:
      "Another proud winner takes the stage, adding to a growing tradition of excellence and recognition.",
    image: `${IMG}/journey-12.jpg`,
  },
  {
    year: "2017",
    title: "A Pledge to Serve",
    blurb:
      "Our Scouts and Guides took their oath — building discipline, courage and a spirit of service.",
    image: `${IMG}/journey-13.jpg`,
  },
  {
    year: "2018",
    title: "Leaders of Tomorrow",
    blurb:
      "Badges pinned with pride, nurturing character, teamwork and leadership through scouting.",
    image: `${IMG}/journey-14.jpg`,
  },
];
