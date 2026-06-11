import type { Metadata } from "next";
import { buildMetadata, SITE } from "@/lib/seo";
import Hero from "@/components/home/Hero";
import AboutCurtains from "@/components/home/AboutCurtains";
import AcademicExcellence from "@/components/home/AcademicExcellence";
import ActivitiesPeek from "@/components/home/ActivitiesPeek";
import AchievementsPeek from "@/components/home/AchievementsPeek";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = buildMetadata({
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutCurtains />
      <AcademicExcellence />
      <ActivitiesPeek />
      <AchievementsPeek />
      <Testimonials />
    </>
  );
}
