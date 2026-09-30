"use client";

import { FormEvent } from "react";
import Image from "next/image";
import type { CourseData } from "@/Data/courses";

type Props = {
  course: CourseData;
};

export default function WhatYouWillLearn({ course }: Props) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-[#001B69] py-16 text-white md:py-20">
      <div className="mx-8 grid max-w-[1300px] grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

        {/*LEFT SIDE  */}
        <div>
          <h2 className="mb-10 font-bold text-[22px] md:text-[26px] lg:text-[22px]">
            What You Will Learn
          </h2>

          <div className="mt-8 space-y-5">
            {course.learn.map((item) => (
              <div
                key={item}
                className="group flex cursor-default items-start gap-4"
              >
                {/* IMAGE ANIMATION */}
                <div className="relative mt-[2px] h-[35px] w-[35px] shrink-0 overflow-hidden">

                  {/* FIRST IMAGE */}
                  <Image
                    src="/Courses/learn1.svg"
                    alt=""
                    fill
                    className="
                      object-contain
                      transition-transform
                      duration-500
                      ease-in-out
                      group-hover:-translate-x-full
                    "
                  />

                  {/* SECOND IMAGE */}
                  <Image
                    src="/Courses/learn2.svg"
                    alt=""
                    fill
                    className="
                      absolute
                      left-0
                      top-0
                      translate-x-full
                      object-contain
                      transition-transform
                      duration-500
                      ease-in-out
                      group-hover:translate-x-0
                    "
                  />
                </div>

                {/* TEXT - SHIFTS RIGHT ON HOVER */}
                <p
                  className="
                    pt-[4px]
                    text-[16px]
                    leading-[1.5]
                    transition-transform
                    duration-500
                    ease-in-out
                  group-hover:-translate-x-[6px]
                    md:text-[17px]
                  "
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/*= RIGHT FORM  */}
        <div className="rounded-[12px] max-h-[580px] bg-white p-7 text-black shadow-lg md:p-9">

          <h3 className="text-[27px] font-bold text-[#001B69]">
            Request Information
          </h3>

          <p className="mt-2 text-[14px] text-gray-600">
            Fill in your details and our team will contact you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-7 space-y-4"
          >

            {/* FULL NAME */}
            <input
              type="text"
              placeholder="Full Name"
              required
              className="
                h-[48px]
                w-full
                rounded-[4px]
                border
                border-gray-300
                px-4
                text-[14px]
                outline-none
                transition
                focus:border-[#2478E8]
              "
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              required
              className="
                h-[48px]
                w-full
                rounded-[4px]
                border
                border-gray-300
                px-4
                text-[14px]
                outline-none
                transition
                focus:border-[#2478E8]
              "
            />

            {/* PHONE NUMBER */}
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="
                h-[48px]
                w-full
                rounded-[4px]
                border
                border-gray-300
                px-4
                text-[14px]
                outline-none
                transition
                focus:border-[#2478E8]
              "
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Your Message"
              rows={4}
              className="
                w-full
                resize-none
                rounded-[4px]
                border
                border-gray-300
                px-4
                py-3
                text-[14px]
                outline-none
                transition
                focus:border-[#2478E8]
              "
            />

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-1/2 rounded-3xl bg-[#FFCC00] text-[#00135C] font-normal py-1 transition duration-200 text-[18px] md:text-[22px] lg:text-[24px] hover:bg-transparent hover:text-blue-500 hover:border hover:border-blue-500"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}