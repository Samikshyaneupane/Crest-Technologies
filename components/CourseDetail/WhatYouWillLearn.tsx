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

      

{/* LEFT SIDE */}
<div>
  <h2 className="mb-10 text-[22px] font-bold md:text-[26px] lg:text-[22px]">
    What You Will Learn
  </h2>

  <div className="mt-8">
    {course.learn.map((item, index) => {
      const isLast = index === course.learn.length - 1;

      return (
        <div
          key={index}
          className="group flex min-h-[55px] cursor-default items-start gap-5"
        >
          {/* SVG ANIMATION */}
          <div className="relative h-[55px] w-[40px] shrink-0 overflow-hidden">
       
{isLast ? (
  <>
    {/*  CIRCLE */}
    <Image
      src="/Courses/circle.svg"
      alt=""
      fill
      className="
        scale-[0.4]
        object-contain
        transition-transform
        duration-500
        ease-in-out
        group-hover:-translate-x-full
      "
    />

    {/* HOLLOW CIRCLE */}
    <Image
      src="/Courses/hollowcircle.svg"
      alt=""
      fill
      className="
        translate-x-full
        scale-[0.4]
        object-contain
        transition-transform
        duration-500
        ease-in-out
        group-hover:translate-x-0
      "
    />
  </>
) : (
  <>
    {/* FIRST SVG */}
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

    {/* SECOND SVG */}
    <Image
      src="/Courses/learn2.svg"
      alt=""
      fill
      className="
        translate-x-full
        object-contain
        transition-transform
        duration-500
        ease-in-out
        group-hover:translate-x-0
      "
    />
  </>
)}

          </div>

          {/* TEXT - ALIGNED WITH SVG CIRCLE */}
          <p
            className="
              mt-[15px]
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
      );
    })}
  </div>
</div>


        {/*= RIGHT FORM  */
        <div className="rounded-[12px] max-h-[520px] bg-white p-7 text-black shadow-lg md:p-7">

          <h3 className="text-[#00135C] font-bold text-[22px] lg:text-[28px] mb-6">
            Request more Information
          </h3>

       

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
               w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-[16px]
              "
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              required
              className="
              w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-[16px]
              "
            />

            {/* PHONE NUMBER */}
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="
               w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-[16px]
              "
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Your Message"
              rows={4}
              className="
               w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-[16px]
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

}
      </div>
        
    </section>
  );
}