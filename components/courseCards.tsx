"use client";
import Link from "next/link";
import { Calendar, PlayCircle } from "lucide-react";

const courses = [
  {
    title: "Data Science/AI/ML",
    duration: "15 weeks ",
    mode: "Mentor Led online class",
  },
  {
    title: "Frontend Development",
    duration: "10 weeks",
    mode: "Mentor-led online class",
  },
  {
    title: "UI/UX Design",
    duration: "10 weeks ",
    mode: "Mentor-led online class",
  },
  {
    title: "QA Automation",
    duration: "10 weeks",
    mode: "Mentor-led online class",
  },
  {
    title: "Flutter Development",
    duration: "10 weeks",
    mode: "Mentor-led online class",
  },
  {
    title: "Backend Development",
    duration: "10 weeks",
    mode: "Mentor-led online class",
  },
];

export default function CourseCards() {
  return (
    <section id="courses" className="scroll-mt-20 bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3.5 px-6 sm:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.title}
            className="flex min-h-[220px] flex-col justify-between  bg-[#DAEBFF] p-6"
          >
            {/* Course Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F5C]">
                {course.title}
              </h2>

              <div className="mt-6 space-y-3 text-sm text-[#0B1F5C]">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-[#0B1F5C]" strokeWidth={2} />
                  <span>{course.duration}</span>
                </div>

                <div className="flex items-center gap-3">
                  <PlayCircle className="h-5 w-5 text-[#0B1F5C]" strokeWidth={2} />
                  <span>{course.mode}</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-3">
              <Link
                href="#"
                className="flex-1 rounded-full border border-[#3B7DDE] bg-[#DCEBFB]  py-2.5 text-center text-sm font-medium text-[#3B7DDE] "
              >
                View
              </Link>

              <Link
                href="/registration"
                className="flex-1 rounded-full bg-[#3B7DDE] py-2.5 text-center text-sm font-medium text-white hover:bg-[#DCEBFB] hover:text-[#3B7DDE] hover:border hover:border-[#3B7DDE]"
              >
                Apply
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Discover More Button */}
      <div className="flex justify-center pt-16">
        <Link
  href="/courses"
  className="inline-block whitespace-nowrap rounded-2xl border-2 border-[#3B7DDE] bg-[#3B7DDE] px-10 py-3 text-base font-semibold text-white transition duration-300 hover:bg-white hover:text-[#3B7DDE]"
>
  Discover More
</Link>
      </div>
    </section>
  );
}