"use client";

import { useState } from "react";
import CourseCard from "./CardCourse";

type Category = "All" | "Development" | "Design" | "Testing";

const categories: Category[] = [
  "All",
  "Development",
  "Design",
  "Testing",
];

const courses = [
  {
    title: "Frontend Development with ReactJS",
    description:
      "Master modern web development with ReactJS. Learn component-based architecture, state management, and build responsive applications.",
    duration: "10 Weeks",
    image: "/courses/reactjs.png",
    href: "/courses/reactjs.png",
    category: "Development",
  },
  {
    title: "QA with automation",
    description:
      "Comprehensive QA training covering manual and automated testing with Selenium, TestNG, and CI/CD integration.",
    duration: "10 Weeks",
    image: "/courses/qa.jpg",
    href: "/courses/qa-automation",
    category: "Testing",
  },
  {
    title: "Project Management",
    description:
      "Develop essential project management skills including Agile methodologies, Scrum framework, and team leadership.",
    duration: "10 Weeks",
    image: "/courses/pm.jpg",
    href: "/courses/project-management",
    category: "Development",
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive cybersecurity training covering network security, ethical hacking, and security protocols.",
    duration: "12 Weeks",
    image: "/courses/cybersecurity.jpg",
    href: "/courses/cybersecurity",
    category: "Development",
  },
  {
    title: "Data Science/AI/ML",
    description:
      "Comprehensive training in data science, artificial intelligence, and machine learning covering statistical analysis, predictive modeling, and deep learning.",
    duration: "15 Weeks",
    image: "/courses/ai.png",
    href: "/courses/data-science",
    category: "Development",
  },
  {
    title: "Flutter Development",
    description:
      "Learn cross-platform mobile app development with Flutter and Dart for iOS and Android with a single codebase.",
    duration: "10 Weeks",
    image: "/courses/flutter.jpg",
    href: "/courses/flutter-development",
    category: "Development",
  },
  {
    title: "UI/UX Design & Product Design",
    description:
      "Comprehensive design course covering user interface design, user experience principles, and design tools.",
    duration: "10 Weeks",
    image: "/courses/ui.jpg",
    href: "/courses/ui-ux-design",
    category: "Design",
  },
  {
    title: "Full Stack Development (MERN)",
    description:
      "Master the MERN stack to build full-stack web applications with database design, API development, and deployment.",
    duration: "12 Weeks",
    image: "/courses/mern.png",
    href: "/courses/mern-development",
    category: "Development",
  },
  {
    title: "Backend Development",
    description:
      "Comprehensive backend development training covering Node.js, Express, databases, and API design.",
    duration: "10 Weeks",
    image: "/courses/backend.jpg",
    href: "/courses/backend-development",
    category: "Development",
  },
];

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter(
          (course) => course.category === activeCategory
        );

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1500px] px-4 md:px-6 lg:px-8">

        {/* FILTER BUTTONS */}
        <div className="mb-10 flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-8 py-3 text-[17px] font-medium transition-all duration-200 md:px-10 ${
                activeCategory === category
                  ? "bg-[#2176E8] text-white"
                  : "bg-[#DCEBFC] text-black hover:bg-[#cbdff8]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* COURSE GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              description={course.description}
              duration={course.duration}
              image={course.image}
              href={course.href}
            />
          ))}
        </div>

        {/* EMPTY CATEGORY */}
        {filteredCourses.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-[18px] text-gray-500">
              No courses available in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}