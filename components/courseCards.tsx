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
        <div className="mx-5 grid grid-cols-1 gap-[14px] md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="flex h-[213px] flex-col gap-[30px] bg-[#DAEBFF] p-[24px] font-myriad"
            >
              {/* COURSE INFO */}
              <div>
                <h3 className="text-[28px] font-bold leading-[100%] tracking-[0] text-[#00135C]">
                  {course.title}
                </h3>

                <div className="mt-[20px] flex flex-col gap-[12px]">
                  {/* DURATION */}
                  <div className="flex items-center text-sm text-[#002D62]">
                    <Calendar
                      className="mr-2 h-[24px] w-[24px]"
                      strokeWidth={2}
                    />

                    <span className="text-[16px] font-normal leading-[100%] tracking-[0] text-[#292929]">
                      {course.duration}
                    </span>
                  </div>

                  {/* MODE */}
                  <div className="flex items-center text-sm text-[#002D62]">
                    <PlayCircle
                      className="mr-2 h-[24px] w-[24px]"
                      strokeWidth={2}
                    />

                    <span className="text-[16px] font-normal leading-[100%] tracking-[0] text-[#292929]">
                      {course.mode}
                    </span>
                  </div>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex space-x-[12px] px-[6px] py-[8px]">
                {/* VIEW */}
                <Link
                  href="#"
                  className="
                    z-0
                    group
                    relative
                    inline-flex
                    h-[29px]
                    w-[86px]
                    min-w-20
                    items-center
                    justify-center
                    gap-2
                    whitespace-nowrap
                    rounded-2xl
                    border
                    border-[#1A71E9]
                    bg-transparent
                    px-4
                    text-[16px]
                    font-normal
                    leading-[100%]
                    tracking-[0]
                    text-[#1A71E9]
                    transition-colors
                    hover:bg-transparent
                  "
                >
                  View
                </Link>

                {/* APPLY */}
                <button
                  type="button"
                  onClick={() => openForm(course.title)}
                  className="
                    z-0
                    group
                    relative
                    inline-flex
                    h-[29px]
                    w-[86px]
                    min-w-20
                    items-center
                    justify-center
                    gap-2
                    whitespace-nowrap
                    rounded-2xl
                    border
                    border-[#1A71E9]
                    bg-[#1A71E9]
                    px-4
                    text-[16px]
                    font-normal
                    leading-[100%]
                    tracking-[0]
                    text-white
                    transition-colors
                    hover:bg-[#DAEBFF]
                    hover:text-[#1A71E9]
                  "
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* DISCOVER MORE */}
        <div className="flex justify-center pt-16">
          <Link
            href="/courses"
            className="
              inline-flex
              h-[53px]
              w-[218px]
              items-center
              justify-center
              gap-[10px]
              rounded-2xl
              bg-[#1A71E9]
              px-[6px]
              py-[12px]
              text-[24px]
              font-normal
              leading-[100%]
              tracking-[0]
              text-white
              transition-colors
              hover:border
              hover:border-[#1A71E9]
              hover:bg-white
              hover:text-[#1A71E9]
            "
          >
            Discover More
          </Link>
        </div>
      </section>

      {/* ENROLLMENT POPUP */}
      {showForm && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 py-3"
          onClick={closeForm}
        >
          {/* POPUP CONTAINER */}
          <div
            className="relative w-full max-w-[470px] rounded-xl bg-white px-7 py-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
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

            {/* FORM */}
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="h-[45px] w-full rounded-lg border border-gray-300 px-4 text-sm outline-none transition focus:border-[#3B7DDE]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="h-[45px] w-full rounded-lg border border-gray-300 px-4 text-sm outline-none transition focus:border-[#3B7DDE]"
              />

              {/* ADDRESS */}
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

              <input
                type="email"
                placeholder="Email"
                required
                className="h-[45px] w-full rounded-lg border border-gray-300 px-4 text-sm outline-none transition focus:border-[#3B7DDE]"
              />

              {/* SELECTED COURSE */}
              <input
                type="text"
                value={selectedCourse}
                readOnly
                className="h-[45px] w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-black outline-none"
              />

              {/* MESSAGE */}
              <div className="relative">
                <textarea
                  placeholder="Message"
                  className="h-[80px] w-full resize-none rounded-lg border border-gray-300 px-4 py-3 pr-24 text-sm outline-none transition focus:border-[#3B7DDE]"
                />

                <span className="pointer-events-none absolute right-4 top-3 text-xs text-gray-400">
                  (Optional)
                </span>
              </div>

              {/* SUBMIT */}
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