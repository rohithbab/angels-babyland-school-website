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

/** Contact placeholders — replaced with real details before launch. */
export const contactInfo = {
  address: "123 School Road, Town Name, District, State – 600000",
  phone: "+91 00000 00000",
  email: "info@angelsbabyland.example",
} as const;
