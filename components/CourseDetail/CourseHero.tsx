"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CourseData } from "@/Data/courses";

type Props = {
  course: CourseData;
};

export default function CourseHero({ course }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-[#DCEEFF] ">
        <div className="mx-auto grid min-h-[650px] max-w-[1500px] grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          {/* LEFT */}
          <div>
            {/* BREADCRUMB */}
            <p className="text-[16px] text-[#333] md:text-[18px]">
              <Link href="/" prefetch={false}>
                Home
              </Link>{" "}
              /{" "}
              <Link href="/courses" prefetch={false}>
                Courses
              </Link>{" "}
              / {course.title}
            </p>

            {/* TITLE */}
            <h1 className="mt-10 max-w-[760px] text-[38px] font-bold leading-[1.08] text-black md:text-[48px] lg:text-[55px]">
              {course.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[760px] text-[17px] leading-[1.6] text-[#333] md:text-[19px]">
              {course.shortDescription}
            </p>

            {/* RATING + LEARNERS */}
            <div className="mt-8 flex flex-wrap items-center gap-8">
              {/* TRUSTPILOT */}
              <div>
                <p className="text-[18px] font-bold text-black">
                  ★ Trustpilot
                </p>

                <div className="mt-2 flex items-center gap-2">
                  {/* STAR IMAGES */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Image
                        key={star}
                        src="/Courses/stars.svg"
                        alt="Trustpilot star"
                        width={24}
                        height={24}
                        className="h-[24px] w-[24px] object-contain"
                      />
                    ))}

                    <Image
                      src="/Courses/halfstars.svg"
                      alt="Trustpilot half star"
                      width={19}
                      height={19}
                      className="h-[19px] w-[19px] object-contain"
                    />
                  </div>

                  {/* RATING */}
                  <span className="text-[15px] text-black">
                    ({course.rating})
                  </span>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="hidden h-[70px] w-px bg-[#8A8A8A] sm:block" />

              {/* LEARNERS */}
              <div>
                <p className="text-[14px] font-bold uppercase tracking-wide text-[#555]">
                  Learners Enrolled
                </p>

                <p className="mt-2 text-[17px] text-[#555]">
                  {course.learners}
                </p>
              </div>
            </div>

            {/* ENROLL BUTTON */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="mt-8 rounded-full bg-[#001B69] px-10 py-3 text-[18px] font-medium text-white transition hover:bg-[#00298f]"
            >
              Enroll now
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full max-w-[500px] md:h-[430px]">
              <Image
                src={course.heroImage}
                alt={course.title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ENROLLMENT POPUP */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-[500px] rounded-[10px] bg-white px-7 py-6 shadow-2xl md:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-[28px] font-bold text-[#001B69]">
                Enroll now
              </h2>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[14px] text-gray-500 underline transition hover:text-black"
              >
                Close
              </button>
            </div>

            {/* FORM */}
            <form className="space-y-3">
              {/* FULL NAME */}
              <input
                type="text"
                placeholder="Full Name"
                className="h-[46px] w-full rounded-[7px] border border-gray-300 px-4 text-[15px] outline-none transition focus:border-[#001B69]"
              />

              {/* PHONE */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="h-[46px] w-full rounded-[7px] border border-gray-300 px-4 text-[15px] outline-none transition focus:border-[#001B69]"
              />

              {/* ADDRESS */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Address"
                  className="h-[46px] w-full rounded-[7px] border border-gray-300 px-4 pr-24 text-[15px] outline-none transition focus:border-[#001B69]"
                />

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[13px] text-gray-400">
                  (Optional)
                </span>
              </div>

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email"
                className="h-[46px] w-full rounded-[7px] border border-gray-300 px-4 text-[15px] outline-none transition focus:border-[#001B69]"
              />

              {/* COURSE */}
              <input
                type="text"
                value={course.title}
                readOnly
                className="h-[46px] w-full rounded-[7px] border border-gray-300 bg-white px-4 text-[15px] text-black outline-none"
              />

              {/* MESSAGE */}
              <div className="relative">
                <textarea
                  placeholder="Message"
                  className="h-[72px] w-full resize-none rounded-[7px] border border-gray-300 px-4 py-3 pr-24 text-[15px] outline-none transition focus:border-[#001B69]"
                />

                <span className="pointer-events-none absolute right-4 top-3 text-[13px] text-gray-400">
                  (Optional)
                </span>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="h-[48px] w-full rounded-[7px] bg-[#FFC800] text-[18px] font-medium text-black transition hover:bg-[#eab800]"
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