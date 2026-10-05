"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, PlayCircle } from "lucide-react";

const courses = [
  {
    title: "Data Science/AI/ML",
    duration: "15 weeks",
    mode: "Mentor Led online class",
  },
  {
    title: "Frontend Development",
    duration: "10 weeks",
    mode: "Mentor-led online class",
  },
  {
    title: "UI/UX Design",
    duration: "10 weeks",
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
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const openForm = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <>
      {/* COURSES SECTION */}
      <section id="courses" className="scroll-mt-20 bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3.5 px-6 sm:grid-cols-3 ">
          {courses.map((course) => (
            <div
              key={course.title}
              className="flex min-h-[220px] flex-col justify-between bg-[#DAEBFF] p-6"
            >
              {/* Course Info */}
              <div>
                <h2 className="text-2xl font-bold text-[#0B1F5C]">
                  {course.title}
                </h2>

                <div className="mt-4 space-y-3 text-md text-[#0B1F5C]">
                  {/* Duration */}
                  <div className="flex items-center gap-3">
                    <Calendar
                      className="h-6 w-6 text-[#0B1F5C] "
                      strokeWidth={2}
                    />

                    <span>{course.duration}</span>
                  </div>

                  {/* Mode */}
                  <div className="flex items-center gap-3">
                    <PlayCircle
                      className="h-6 w-6  text-[#0B1F5C]"
                      strokeWidth={2}
                    />

                    <span>{course.mode}</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex gap-3">
                {/* View */}
                <Link
                  href="#"
                  className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 gap-2 [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none b bg-default data-[hover=true]:opacity-hover w-[86px] h-[29px] rounded-2xl border border-[#1A71E9] font-normal text-[16px] bg-transparent leading-[100%] tracking-[0] text-[#1A71E9] hover:bg-transparent"
                >
                  View
                </Link>

                {/* Apply */}
                <button
                  type="button"
                  onClick={() => openForm(course.title)}
                  className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 gap-2 [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover w-[86px] h-[29px] rounded-2xl font-normal text-[16px] leading-[100%] tracking-[0] text-[#FFFFFF] bg-[#1A71E9] border border-[#1A71E9] hover:bg-[#DAEBFF] hover:text-[#1A71E9] hover:border-[#1A71E9] transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Discover More */}
        <div className="flex justify-center pt-16">
          <Link
            href="/courses"
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover w-[218px] h-[53px] rounded-2xl px-[6px] py-[12px] gap-[10px] bg-[#1A71E9] text-white font-normal text-[24px] leading-[100%] tracking-[0] hover:bg-white hover:border hover:border-[#1A71E9] hover:text-[#1A71E9] transition-all
duration-300
ease-out
transform-gpu

hover:scale-[1.10]
hover:shadow-[0_14px_30px_rgba(26,113,233,0.30)]
hover:z-20"
          >
            Discover More
          </Link>
        </div>
      </section>

      {/*  ENROLLMENT POPUP */}
     

      {showForm && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 py-3"
          onClick={closeForm}
        >
          {/* Popup Container */}
          <div
            className="relative w-full max-w-[470px] rounded-xl bg-white px-7 py-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-[27px] font-bold text-[#0B1F5C]">
                Enroll now
              </h2>

              <button
                type="button"
                onClick={closeForm}
                className="text-sm text-gray-500 underline transition hover:text-gray-800"
              >
                Close
              </button>
            </div>

            {/* Form */}
            <form className="space-y-3">
              {/* Full Name */}
              <input
                type="text"
                placeholder="Full Name" 
                required
                className="h-[45px] w-full rounded-lg border border-gray-300 px-4 text-sm outline-none transition focus:border-[#3B7DDE]"
              />

              {/* Phone Number */}
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="h-[45px] w-full rounded-lg border border-gray-300 px-4 text-sm outline-none transition focus:border-[#3B7DDE]"
              />

              {/* Address */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Address"
                  className="h-[45px] w-full rounded-lg border border-gray-300 px-4 pr-24 text-sm outline-none transition focus:border-[#3B7DDE]"
                />

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                  (Optional)
                </span>
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                required
                className="h-[45px] w-full rounded-lg border border-gray-300 px-4 text-sm outline-none transition focus:border-[#3B7DDE]"
              />

              {/* Selected Course */}
              <input
                type="text"
                value={selectedCourse}
                readOnly
                className="h-[45px] w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-black outline-none"
              />

              {/* Message */}
              <div className="relative">
                <textarea
                  placeholder="Message"
                  className="h-[80px] w-full resize-none rounded-lg border border-gray-300 px-4 py-3 pr-24 text-sm outline-none transition focus:border-[#3B7DDE]"
                />

                <span className="pointer-events-none absolute right-4 top-3 text-xs text-gray-400">
                  (Optional)
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="h-[46px] w-full rounded-lg bg-[#FFC400] text-[18px] font-medium text-black transition duration-300 hover:bg-[#eeb700]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}