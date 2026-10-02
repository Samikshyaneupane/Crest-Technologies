"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { image: "/home/herocara/image1.webp" },
  { image: "/home/herocara/image2.webp" },
  { image: "/home/herocara/image3.webp" },
];

const heroTexts = [
  {
    title: "Elevate Your Skills, Accelerate Your Career",
    description:
      "Maximize your career opportunities with our new age skill programs, designed to ensure you're job-ready from day one.",
  },
  {
    title: "Learn from Industry Experts",
    description:
      "Get hands-on experience with real-world projects guided by experienced professionals.",
  },
  {
    title: "Future Ready Training",
    description:
      "Stay ahead with cutting-edge curriculum designed for tomorrow's technology needs.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  // Image Carousel Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  // Text Change Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((i) => (i + 1) % heroTexts.length);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  const active = slides[index];

  return (
    <>
      {/* IAO BANNER */}
      <section className="w-full border-b border-[#D9EAF8] bg-[#99CDFF]">
        <div className="flex w-full items-center justify-between pl-6 pr-5">
          <p className="font-normal font-myriad text-2xl leading-none text-[#00135C] py-4 md:py-8 text-center md:text-left flex-1">
            The first tech institution in Nepal to be officially recognized and
            accredited by IAO.
          </p>

          <div className="flex h-[120px] items-center bg-white px-5">
            <Image
              src="/iao.png"
              alt="International Accreditation Organization"
              width={190}
              height={80}
              className="h-auto w-[190px]"
            />
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="w-full bg-white">
        <div
          className=" mx-auto grid min-h-[520px] max-w-[1750px] grid-cols-1 items-center gap-12 px-6 py-8 md:grid-cols-2 lg:px-6 lg:py-10
          "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-[680px]">
            <h1
              className=" mb-4 max-w-[582px] text-3xl font-bold leading-tight tracking-[0] text-[#292929] md:text-4xl md:leading-[44px] lg:text-5xl
              "
            >
              {heroTexts[textIndex].title}
            </h1>

            <p
              className="
                mt-5 max-w-[620px] text-[17px] leading-[1.45] text-[#333333] transition-all duration-500  md:text-[19px]
              "
            >
              {heroTexts[textIndex].description}
            </p>

            {/* TRUSTPILOT */}
            <div className="mt-2 flex items-center justify-start space-x-2">
              {/* GREEN STAR */}
              <div className="mt-2 flex items-center justify-start">
                <img
                  src="/greenstar.svg"
                  alt="Trustpilot star"
                  className="h-[30px] w-[30px] object-contain"
                />
              </div>

              {/* TRUSTPILOT TEXT */}
              <span className="mt-[6px] text-center font-sans text-lg font-[500] text-[#292929] sm:text-2xl">
                Trustpilot
              </span>

              {/* RATING */}
              <span className="mt-[6px] text-center text-lg font-bold leading-[100%] tracking-[0] text-[#292929] sm:text-2xl">
                4.5
              </span>

              {/* YELLOW STAR */}
              <div className="mt-2 flex items-center justify-start">
                <img
                  src="/yellowstar.svg"
                  alt="Rating star"
                  className="h-[30px] w-[30px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* IMAGE CAROUSEL */}
          <div className="relative ml-auto bg-[#D9D9D9]  w-full md:max-w-[585px]">
            <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden  shadow-xl md:ml-auto">
              <Image
                key={active.image}
                src={active.image}
                alt={`Hero Slide ${index + 1}`}
                fill
                priority
                className="object-cover transition-opacity duration-700 aspect-[14/9] h-full w-full flex-shrink-0 rounded-lg "
                sizes="( max-height:500px max-width: 800px) 100vw, 50vw"
              />
            </div>

            {/* DOTS */}
            <div className="absolute bottom-5 left-6 flex gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.image}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index ? "bg-[#F5C518]" : "bg-[#0B1F5C]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}