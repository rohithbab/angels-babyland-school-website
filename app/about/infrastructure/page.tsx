import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import InfrastructureGallery from "@/components/about/InfrastructureGallery";
import { getInfrastructure } from "@/lib/infrastructure";

export const metadata: Metadata = buildMetadata({
  title: "Our Infrastructure",
  description:
    "Explore the classrooms, subject laboratories, robotics lab, library and playground at Angels Babyland Matric Higher Secondary School.",
  path: "/about/infrastructure",
});

export default function InfrastructurePage() {
  const categories = getInfrastructure();

  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        align="center"
        flanked
        title="Our Infrastructure"
        subtitle="Pick a facility to browse its photos — from spacious classrooms and subject labs to our robotics lab, library and playground."
        className="mb-12"
      />
      <InfrastructureGallery categories={categories} />
    </section>
  );
}
