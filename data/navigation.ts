/** A single navigable link. */
export interface NavLink {
  label: string;
  href: string;
}

/** A top-level navbar item, optionally with a dropdown of children. */
export interface NavItem extends NavLink {
  children?: NavLink[];
}

/** Primary navbar configuration. The Activities item carries a dropdown. */
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Journey", href: "/our-journey" },
  { label: "Academics", href: "/academics" },
  {
    label: "Activities",
    href: "/activities",
    children: [
      { label: "Culturals", href: "/activities/culturals" },
      { label: "Clubs", href: "/activities/clubs" },
      { label: "Sports", href: "/activities/sports" },
      { label: "Extra Curricular", href: "/activities/extra-curricular" },
    ],
  },
  { label: "Achievements", href: "/achievements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/** Condensed quick links shown in the footer. */
export const footerLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Activities", href: "/activities" },
  { label: "Contact", href: "/contact" },
];

/** Real school contact details. */
export const contactInfo = {
  address: "23, Sundaram Pillai Nagar, Thondaiarpet, Chennai – 600081",
  phone: "72999 26973",
  phoneAlt: "044-25923037",
  email: "angelsbabyland@gmail.com",
} as const;

/** Social media profiles shown in the footer. Real URLs added before launch. */
export const socialLinks: NavLink[] = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
];
