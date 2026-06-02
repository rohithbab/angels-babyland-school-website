# Angels Baby Land Matric Higher Secondary School — Website PRD

**Document ref:** ABLMHSS/WEB/PRD/2026-06/001
**Owner:** Valar Digital Commerce Private Limited
**Type:** Static-first marketing/informational website (no auth, no CMS at launch)
**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion (restrained)

---

## 0. How to use this document

This is **one PRD**, but it is split into **build phases** that are meant to be prompted to your code editor **one at a time**, not all at once. Each phase block below is self-contained and can be copied as a prompt. Build Phase 1, verify the skeleton renders, then move to Phase 2, and so on. Do not paste the whole document as a single generation prompt.

Phases:
- **Phase 1 — Project structure, design system, layout shell, shared components**
- **Phase 2 — Home page (all 6 sections)**
- **Phase 3 — Nav features, one route at a time** (About → Our Journey → Academics → Activities tree → Achievements tree → Gallery → Contact)

---

## 1. Product overview

A traditional-yet-modern web portal for a 30+ year old school. The site's two jobs:
1. **Credibility** — look like an established institution, not a generated template.
2. **Conversion** — pull parents toward contacting / visiting the school.

**Design intent (non-negotiable):**
- Theme: **baby pink + white**, clean and institutional.
- **Square cards** (sharp corners), structured 12-column grid, generous spacing.
- **Restraint in motion** — one consistent page transition + disciplined hover micro-interactions only. No heavy/playful animation. This is what separates it from a "vibe-coded" site.
- Mobile-responsive, mobile-first.
- **SEO-ready architecture now**, SEO content later.

---

## 2. Tech stack & architecture decisions

| Decision | Choice | Why |
|---|---|---|
| Framework | Next.js **App Router** (`app/`) | Per-route metadata for SEO, static generation, future-proof |
| Language | TypeScript | Safer component contracts across reused templates |
| Styling | Tailwind CSS + CSS variables for tokens | Consistent design system, fast responsive work |
| Motion | Framer Motion | One page-transition wrapper + small hover states only |
| Rendering | **Static (SSG)** for every page | Content is fixed; fast, crawlable, cheap to host |
| Content | Local TypeScript data files in `/data` | No CMS at launch; clubs/achievements/cards driven by data |
| Images | Single `IMAGE` placeholder from `/public/assets` everywhere | Real assets dropped in later without restructuring |

**Key architecture principle — two templates carry the whole site:**
- **`CardGrid`** — square floating cards that link out. Used by: Activities landing, Clubs landing, Achievements landing, Home preview sections.
- **`GalleryDetail`** — photo frames + content + date/time. Used by: Culturals, Sports, every Club leaf, all 3 Achievement leaves.

Because ~10 leaf pages share one template, the leaf pages are built as **dynamic routes driven by data files**, not 10 hand-written files. This avoids copy-paste drift and keeps every leaf identical in structure.

---

## 3. Design system (apply globally via CSS variables / Tailwind config)

### Color tokens
```
--color-bg:            #FFFFFF   /* primary background */
--color-bg-alt:        #F5F5F5   /* alternate section background */
--color-accent:        #F8BBD0   /* baby pink */
--color-accent-strong: #EC9CBE   /* darker pink for hover/active (suggested) */
--color-text:          #1A1A1A
--color-text-muted:    #5A5A5A
--color-border:        #ECECEC
```

### Typography
- Headings: **Poppins** (bold). Body: **Inter** (regular). Load via `next/font/google`.
- H1 42–48px · H2 30–34px · H3 22–26px · Body 16–18px (scale down on mobile).
- One `<h1>` per page (SEO).

### Layout
- Max content width **1200px**, side padding **80px** desktop (24px mobile).
- Section vertical spacing **90px** desktop (48–56px mobile).
- 12-column grid.

### Cards (the signature element)
- **Square / near-square corners: border-radius 0–4px.** (Overrides any earlier "rounded" note.)
- White card, soft shadow, thin border (`--color-border`).
- Hover: lift `scale(1.03)` + slightly stronger shadow. Nothing else.

### Motion rules — RESTRAINT
- **Page transition:** ONE consistent route-change effect — a clean fade + 8–12px upward slide, ~250–300ms. Same on every route.
- **Allowed micro-interactions:** card lift on hover, image zoom on hover (`scale(1.05)`), button background fade, nav underline.
- **DO NOT animate:** no entrance animations on every element, no bouncing, no parallax, no staggered fade-ins on scroll for whole sections, no auto-playing motion except the testimonials marquee. When unsure, do less.

### Responsive breakpoints
```
mobile:   < 640px   (default, 1 column)
tablet:   640–1024px (2 columns where grids exist)
desktop:  > 1024px   (full grid, 1200px cap)
```

### SEO-ready architecture (scaffold now, fill later)
- Per-route `export const metadata` stub (title/description placeholders).
- Semantic HTML: `<header> <nav> <main> <section> <footer>`.
- `alt` text on every `IMAGE` (placeholder `alt` for now).
- Clean route slugs (kebab-case). `sitemap.ts` + `robots.ts` stubs at root.

---

## 4. Information architecture & routing map

```
Navbar:  Home | About | Our Journey | Academics | Activities ▾ | Achievements | Gallery | Contact
         Activities dropdown: Culturals · Clubs · Sports

/                         Home
/about                    About
/our-journey              Our Journey (video placeholder + timeline)
/academics                Academics
/activities               Activities landing  → CardGrid {Culturals, Clubs, Sports}
/activities/culturals     GalleryDetail (leaf)
/activities/sports        GalleryDetail (leaf)
/activities/clubs         Clubs landing → CardGrid {Scouts & Guides, Leo, Eco, Bharatanatyam, Music, …}
/activities/clubs/[slug]  GalleryDetail (leaf, data-driven)
/achievements             Achievements landing → CardGrid {School, Teachers, Student}
/achievements/[slug]      GalleryDetail (leaf, data-driven)
/gallery                  General gallery (plain grid + lightbox)
/contact                  Contact (styled form → Google Forms, map, CTA)

DELETED: News & Updates (removed from spec entirely)
```

---

## 5. Project folder structure (Phase 1 deliverable)

```
angels-baby-land/
├── app/
│   ├── layout.tsx                 # fonts, <Navbar>, <Footer>, <PageTransition> wrapper
│   ├── globals.css                # Tailwind + design tokens (CSS vars)
│   ├── page.tsx                   # Home
│   ├── sitemap.ts                 # SEO stub
│   ├── robots.ts                  # SEO stub
│   ├── about/page.tsx
│   ├── our-journey/page.tsx
│   ├── academics/page.tsx
│   ├── activities/
│   │   ├── page.tsx               # CardGrid: Culturals, Clubs, Sports
│   │   ├── culturals/page.tsx     # GalleryDetail
│   │   ├── sports/page.tsx        # GalleryDetail
│   │   └── clubs/
│   │       ├── page.tsx           # CardGrid of clubs (from data)
│   │       └── [slug]/page.tsx    # GalleryDetail; generateStaticParams from data
│   ├── achievements/
│   │   ├── page.tsx               # CardGrid: School, Teachers, Student
│   │   └── [slug]/page.tsx        # GalleryDetail; generateStaticParams from data
│   ├── gallery/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx             # sticky, dropdown on Activities, active highlight
│   │   ├── Footer.tsx             # school info, address, email
│   │   └── PageTransition.tsx     # single route-change effect
│   ├── ui/
│   │   ├── Card.tsx               # square card primitive
│   │   ├── CardGrid.tsx           # TEMPLATE 1: grid of linking cards
│   │   ├── GalleryDetail.tsx      # TEMPLATE 2: photo frames + content + date/time
│   │   ├── SectionHeading.tsx     # heading + subtext block
│   │   ├── CTAButton.tsx
│   │   └── PlaceholderImage.tsx   # wraps the single IMAGE asset + alt
│   └── home/
│       ├── Hero.tsx
│       ├── AboutCurtains.tsx      # Mission/Vision curtain-reveal cards
│       ├── ActivitiesPeek.tsx
│       ├── AchievementsPeek.tsx
│       └── Testimonials.tsx       # horizontal marquee, pause on hover
├── data/
│   ├── clubs.ts                   # [{slug, title, blurb, frames:[{img,caption,date,time}]}]
│   ├── achievements.ts            # School/Teachers/Student leaves
│   ├── activities.ts              # culturals/sports frame data
│   ├── testimonials.ts
│   └── navigation.ts              # navbar + dropdown config
├── lib/
│   └── seo.ts                     # metadata helper
├── public/
│   └── assets/
│       └── placeholder.jpg        # the single IMAGE used everywhere for now
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

**Standing instruction to the code editor (applies to ALL phases):**
> Every image slot site-wide must use the single placeholder image from `/public/assets` via the `PlaceholderImage` component. Do not source stock images or generate images. Real images will be supplied later and swapped in. Give every image a descriptive `alt`.

---

## 6. Shared components spec

### `Navbar` (sticky)
- Links per the routing map. **Activities** has a dropdown: Culturals, Clubs, Sports.
- Hover underline; active route highlighted in baby pink.
- Mobile: hamburger → slide-in panel; Activities expands inline.

### `Footer` (global)
- School name + tagline "From Darkness, Lead Unto Light".
- Quick links (About, Academics, Activities, Contact).
- Contact info: address, phone, email.

### `PageTransition`
- Wraps `{children}` in root layout. Single fade+slide on route change. Same everywhere.

### `CardGrid` (TEMPLATE 1)
- Props: `items: {title, href, image, blurb?}[]`, `columns`.
- Square cards, hover lift, link out. Used by Activities, Clubs, Achievements landings, and Home previews.

### `GalleryDetail` (TEMPLATE 2)
- Props: `title`, `intro`, `frames: {image, caption, date, time}[]`.
- Hero strip (title + intro), then a grid of **framed** photos; each frame shows content + date + time. Hover zoom on image. Used by every leaf page.

---

## 7. PHASE 1 — Structure & foundation (PROMPT THIS FIRST)

**Goal:** scaffold the project, design system, layout shell, and the two reusable templates with placeholder data so every route renders an empty-but-styled page.

Build:
1. Next.js App Router + TypeScript + Tailwind project per the folder structure in §5.
2. `globals.css` with all design tokens from §3. Configure Poppins + Inter via `next/font`.
3. `Navbar` (with Activities dropdown), `Footer`, `PageTransition` — wired into `app/layout.tsx`.
4. UI primitives: `Card`, `CardGrid`, `GalleryDetail`, `SectionHeading`, `CTAButton`, `PlaceholderImage`.
5. Create every route file from §5 as a styled placeholder (correct heading + one section) so navigation works end-to-end.
6. `data/` files with sample/placeholder entries. `lib/seo.ts` + `metadata` stubs + `sitemap.ts`/`robots.ts`.
7. Confirm: all navbar links route correctly, dropdown works, page transition fires, mobile menu works, square cards + pink/white theme visible.

**Acceptance:** every URL in the routing map loads, themed, responsive, with working nav and one consistent transition.

---

## 8. PHASE 2 — Home page (PROMPT SECOND)

Route: `/`. Sections in this exact order:

**8.1 Hero (landing)**
- Full-width background `IMAGE` of school + dark transparent overlay (40–50%).
- Content left-aligned (~40% width), right side breathing space.
- H1: *Angels Baby Land Matric Higher Secondary School*
- Tagline (italic/medium): *"From Darkness, Lead Unto Light"*
- Supporting line: *Building a legacy of excellence in education for over 30 years, shaping young minds with knowledge, discipline, and values.*
- CTA buttons: **Explore Campus**, **Get in Touch** (→ /contact).
- Spacing: heading→tagline 12px, tagline→para 16px, para→buttons 24px.

**8.2 About (curtain cards)**
- Layout: 1×2 — two square cards side by side: **Our Mission** and **Our Vision**.
- Each card shows the big title by default; on hover (cursor over) the card reveals like a **curtain** sliding to expose the mission/vision content underneath.
- Mission content and Vision content from the About page copy (§9.2). Mobile: tap-to-reveal fallback.

**8.3 Activities sneak peek**
- `SectionHeading`: "Beyond Academics" + short subtext.
- Written content + placeholder image, **"Check More"** button → **/activities**.
- Text + `IMAGE` only — not a live mini-gallery.

**8.4 Achievements sneak peek**
- `SectionHeading`: "Our Achievements" + subtext.
- Written content + placeholder image, **"Check More"** button → **/achievements**.
- Text + `IMAGE` only.

**8.5 Testimonials**
- Heading: "What Parents Say".
- **Horizontal marquee** of square testimonial cards, auto-scrolling. **Pause on hover** (cursor over the strip stops movement). Data from `data/testimonials.ts`.

**8.6 Footer** — global component (already built Phase 1).

**Acceptance:** home renders all 6 sections in order; curtains reveal on hover; marquee pauses on hover; both "Check More" buttons route correctly.

---

## 9. PHASE 3 — Nav features (PROMPT ONE ROUTE AT A TIME)

> Prompt these individually in the listed order. Each is independent.

### 9.1 About — `/about`
Sections: Hero (H1 "About Us" + subtext) · Who We Are · Vision · Mission · Principal's Message · Infrastructure (Spacious Classrooms, Science Laboratories, Library, Playground, Computer Lab) · Faculty. Copy as supplied in the source brief; `IMAGE` placeholders throughout.

### 9.2 Our Journey — `/our-journey` (DEDICATED PAGE)
- Hero: H1 "Our Journey" + subtext (*A journey of growth, dedication, and excellence spanning over 30 years.*)
- **Video placeholder** block (reserved space for an edited video the team will produce from school images).
- **Timeline**: year + image entries (data-driven, `IMAGE` placeholders). Vertical on mobile, horizontal/stepped on desktop.

### 9.3 Academics — `/academics`
Sections: Hero · Overview · Curriculum (State Board) · Classes (LKG & UKG; Primary 1–5; Middle 6–8; High & Higher Secondary 9–12) · Teaching (Concept-Based, Interactive, Individual Attention, Activity-Based) · Evaluation (Regular Tests, Performance Tracking, Parent Communication, Remedial Support).

### 9.4 Activities tree
**`/activities`** — Hero + `CardGrid` of 3 square cards: **Culturals**, **Clubs**, **Sports**, each linking to its page.
- **`/activities/culturals`** — `GalleryDetail`: framed photos + content + date/time.
- **`/activities/sports`** — `GalleryDetail`.
- **`/activities/clubs`** — `CardGrid` of club cards from `data/clubs.ts` (Scouts & Guides, Leo Club, Eco Club, Bharatanatyam, Music — extensible).
- **`/activities/clubs/[slug]`** — `GalleryDetail`, `generateStaticParams` from `data/clubs.ts`.
- Navbar Activities **dropdown** (Culturals/Clubs/Sports) already wired in Phase 1 — verify deep links.

### 9.5 Achievements tree
**`/achievements`** — Hero + `CardGrid` of 3 cards: **School**, **Teachers**, **Student**.
- **`/achievements/[slug]`** — `GalleryDetail` per category, `generateStaticParams` from `data/achievements.ts` (framed photos + content + date/time).

### 9.6 Gallery — `/gallery`
- Hero + a **plain general image grid** (3–4 columns, square framing), hover zoom, click → **lightbox** (fullscreen, prev/next, close). General campus images only — distinct from the activity/achievement galleries. No category filter bar (kept simple).

### 9.7 Contact — `/contact`
- Hero + overview · Contact details (Address, Phone, Email, Working Hours) · **Styled contact form** · embedded Google Map · final CTA ("Visit Our Campus").
- **Form (styled, on-brand) → Google Forms backend:**
  - Fields: Name, Phone, Email, Message. Client-side validation.
  - Build the form to match the design system (not an iframe embed).
  - `action` set to a placeholder; mark `// TODO: wire Google Form formResponse endpoint + entry.XXXX field IDs`.
  - Until wired, **Send** shows an on-brand success message (stub). No backend logic now.

---

## 10. Pre-launch checklist (before deploy, future)

- [ ] Replace `IMAGE` placeholder with real school assets (and real `alt` text).
- [ ] Wire Google Form endpoint + entry IDs into the contact form; **submit one real test and confirm it lands in the linked Google Sheet** (Google's no-cors POST returns no readable success — silent failure is the risk).
- [ ] Fill per-route SEO `metadata` (titles, descriptions, OG tags) with real copy/keywords.
- [ ] Add real testimonials, club content, achievement entries, timeline years.
- [ ] Lighthouse pass: mobile responsiveness, accessibility, performance.
- [ ] Embed correct Google Map location.

---

## 11. Out of scope at launch
News & Updates page (deleted), CMS/admin, authentication, multi-language, blog, online admissions/payments.
