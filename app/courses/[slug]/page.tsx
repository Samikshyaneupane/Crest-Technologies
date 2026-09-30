import { notFound } from "next/navigation";

import { courseData } from "@/Data/courses";

import CourseHero from "@/components/CourseDetail/CourseHero";
import UpcomingBatch from "@/components/CourseDetail/UpcomingBatch";
import CourseOverview from "@/components/CourseDetail/CourseOverview";
import WhatYouWillLearn from "@/components/CourseDetail/WhatYouWillLearn";
import CourseFeatures from "@/components/CourseDetail/CourseFeatures";
import Certification from "@/components/CourseDetail/Certification";
import CareerOutcomes from "@/components/CourseDetail/CareerOutcomes";
import ProjectsAndClasses from "@/components/CourseDetail/ProjectsAndClasses";
import CourseFAQ from "@/components/CourseDetail/CourseFAQ";

import Testimonials from "@/components/testimonials";

type CoursePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CoursePage({
  params,
}: CoursePageProps) {
  const { slug } = await params;

  // Find the course using the URL slug
  const course = courseData[slug];

  // If the course does not exist, show Next.js 404 page
  if (!course) {
    notFound();
  }

  return (
    <main className="w-full overflow-hidden">

      {/* HERO */}
      <CourseHero course={course} />

      {/* UPCOMING NEW BATCH */}
      <UpcomingBatch course={course} />

      {/* COURSE OVERVIEW */}
      <CourseOverview course={course} />

      {/* WHAT YOU WILL LEARN */}
      <WhatYouWillLearn course={course} />

      {/* COURSE FEATURES */}
      <CourseFeatures />

      {/* CERTIFICATION */}
      <Certification course={course} />

      {/* CAREER OUTCOMES */}
      <CareerOutcomes course={course} />

      {/* PROJECTS + CLASS OPTIONS */}
      <ProjectsAndClasses course={course} />

      {/* FAQ*/}
      <CourseFAQ /> 

      {/* SAME TESTIMONIALS USED ON HOMEPAGE */}
      <Testimonials />

    </main>
  );
}