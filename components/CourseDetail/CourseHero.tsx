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
      <section className="w-full bg-[#DCEEFF]">
        <div
  className="
    mx-auto
    grid
    max-w-[1500px]
    grid-cols-1
    items-start
    gap-10
    px-4
    pt-10
    pb-14
    lg:min-h-[650px]
    lg:grid-cols-[1.35fr_0.65fr]
    lg:px-4
    lg:pt-12
    lg:pb-9
  "
>
          {/* LEFT */}
          <div className="min-w-0">
            {/* BREADCRUMB */}
            <p className="font-normal text-[#464646] text-lg md:text-xl inline-block mb-5 ">
              <Link href="/" prefetch={false}>
                Home
              </Link>{" "}
              {" "}
              <Link href="/courses" prefetch={false}>
                 /Courses
              </Link>
              / {course.title}
            </p>

            {/* TITLE */}
            <h1
              className="
              font-bold text-3xl md:text-4xl lg:text-5xl text-black mt-5 mb-5
              "
            >
              {course.title}
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
               text-[#464646] font-normal text-lg md:text-xl
              "
            >
              {course.shortDescription}
            </p>

            {/* RATING + LEARNERS */}
            <div className="mt-8 flex flex-wrap items-center">
              {/* TRUSTPILOT */}
              <div className="min-w-[245px]">
              
               <Image
  src="/Courses/trustpilot.svg"
  alt="Trustpilot"
  width={145}
  height={34}
  className="h-auto w-[145px] object-contain"
/>


                {/* STARS */}
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex items-center gap-[10px]">
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
                      width={24}
                      height={24}
                      className="h-[24px] w-[24px] object-contain"
                    />
                  </div>

                  <span className="text-[18px] text-[#222]">
                    ({course.rating})
                  </span>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="mx-9 hidden h-[92px] w-px bg-[#777] sm:block" />

              {/* LEARNERS */}
              <div className="mt-6 sm:mt-0">
                <p className="text-[18px] font-bold uppercase text-[#555]">
                  Learners Enrolled
                </p>

                <p className="mt-6 text-[18px] text-[#555]">
                  {course.learners}
                </p>
              </div>
            </div>

            {/* ENROLL BUTTON */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="
              z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 h-10 gap-2 [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover bg-[#00135C] text-white font-normal text-lg md:text-xl lg:text-2xl rounded-full px-8 py-3 hover:bg-[#001972] transition-colors duration-200
              "
            >
              Enroll now
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex min-w-0 items-center justify-center">
            <div className="relative h-[420px] w-full max-w-[570px] md:h-[500px]">
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
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/50
            p-4
          "
          onClick={() => setIsOpen(false)}
        >
          <div
            className="
              w-full
              max-w-[500px]
              rounded-[10px]
              bg-white
              px-7
              py-6
              shadow-2xl
              md:px-8
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-[28px] font-bold text-[#001B69] ">
                Enroll now
              </h2>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="
                  text-[14px]
                  text-gray-500
                  underline
                  transition
                  hover:text-black
                "
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
                className="
                  h-[46px]
                  w-full
                  rounded-[7px]
                  border
                  border-gray-300
                  px-4
                  text-[15px]
                  outline-none
                  transition
                  focus:border-[#001B69]
                "
              />

              {/* PHONE */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="
                  h-[46px]
                  w-full
                  rounded-[7px]
                  border
                  border-gray-300
                  px-4
                  text-[15px]
                  outline-none
                  transition
                  focus:border-[#001B69]
                "
              />

              {/* ADDRESS */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Address"
                  className="
                    h-[46px]
                    w-full
                    rounded-[7px]
                    border
                    border-gray-300
                    px-4
                    pr-24
                    text-[15px]
                    outline-none
                    transition
                    focus:border-[#001B69]
                  "
                />

                <span
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-[13px]
                    text-gray-400
                  "
                >
                  (Optional)
                </span>
              </div>

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email"
                className="
                  h-[46px]
                  w-full
                  rounded-[7px]
                  border
                  border-gray-300
                  px-4
                  text-[15px]
                  outline-none
                  transition
                  focus:border-[#001B69]
                "
              />

              {/* COURSE */}
              <input
                type="text"
                value={course.title}
                readOnly
                className="
                  h-[46px]
                  w-full
                  rounded-[7px]
                  border
                  border-gray-300
                  bg-white
                  px-4
                  text-[15px]
                  text-black
                  outline-none
                "
              />

              {/* MESSAGE */}
              <div className="relative">
                <textarea
                  placeholder="Message"
                  className="
                    h-[72px]
                    w-full
                    resize-none
                    rounded-[7px]
                    border
                    border-gray-300
                    px-4
                    py-3
                    pr-24
                    text-[15px]
                    outline-none
                    transition
                    focus:border-[#001B69]
                  "
                />

                <span
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-3
                    text-[13px]
                    text-gray-400
                  "
                >
                  (Optional)
                </span>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="
                  h-[48px]
                  w-full
                  rounded-[7px]
                  bg-[#FFC800]
                  text-[18px]
                  font-medium
                  text-black
                  transition
                  hover:bg-[#eab800]
                "
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