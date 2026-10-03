"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

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
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Text Change Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((i) => (i + 1) % heroTexts.length);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const active = slides[index];

  return (
    <>

    {/* IAO BANNER */}
    <ScrollReveal direction="right" delay={150}>
<section className="w-full border-b border-[#D9EAF8] bg-[#99CDFF]">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center py-2 md:py-0 justify-between gap-4">
    <p className="font-normal font-myriad text-2xl leading-none text-[#00135C] py-4 md:py-8 text-center md:text-left flex-1">
      The first tech institution in Nepal to be officially recognized and
      accredited by IAO.
    </p>

    <div className="bg-gray-50 flex justify-center md:justify-end w-full md:w-auto">
      <Image
        src="/home/iao.png"
        alt="International Accreditation Organization"
        width={238}
        height={107}
        className="h-16 w-auto md:h-[107px] md:w-[238px] object-contain loading:lazy"
      />
    </div>
  </div>
</section>
</ScrollReveal>


      {/* HERO SECTION */}
      <ScrollReveal direction="right" delay={160}>
      <section className="w-full bg-white">
        <div
  className="
    mx-auto grid min-h-[520px] max-w-[1750px]
    grid-cols-1 items-center gap-12 px-6 py-8
    md:grid-cols-2
    lg:-translate-y-[5px]
    lg:px-6 lg:py-10
  "
>
       {/* LEFT CONTENT */}
<div className="mb-8 w-full lg:-translate-x-[8px]">
  <div>
    {/* HEADING */}
    <h1
      className="
        mb-4
        max-w-[582px]
        text-3xl
        font-bold
        leading-tight
        tracking-[0]
        text-[#292929]
        md:text-4xl
        md:leading-[44px]
        lg:text-5xl
      "
    >
      {heroTexts[textIndex].title}
    </h1>

    {/* DESCRIPTION */}
    <p
      className="
        mb-6
        max-w-[537px]
        text-lg
        leading-snug
        tracking-[0]
        text-[#292929]
        md:text-[24px]
        md:leading-[100%]
      "
    >
      {heroTexts[textIndex].description}
    </p>
  </div>

  {/* TRUSTPILOT */}
  <div className="mt-2 flex items-center justify-start space-x-2 lg:-translate-x-[8px] lg:-translate-x-[8px]">
    {/* GREEN STAR */}
    <img
      src="/greenstar.svg"
      alt="Green star rating"
      className="h-6 w-6 sm:h-7 sm:w-7"
    />

    {/* TRUSTPILOT */}
    <span
      className="
        mt-[6px]
        max-w-[118px]
        text-center
        font-sans
        text-lg
        font-[500]
        text-[#292929]
        sm:text-2xl
      "
    >
      Trustpilot
    </span>

    {/* RATING */}
    <span
      className="
        mt-[6px]
        text-center
        text-lg
        font-bold
        leading-[100%]
        tracking-[0]
        text-[#292929]
        sm:text-2xl
      "
    >
      4.5
    </span>

    {/* YELLOW STAR */}
    <img
      src="/yellowstar.svg"
      alt="Yellow star rating"
      className="h-6 w-6 sm:h-7 sm:w-7"
    />
  </div>
</div>


       {/* IMAGE CAROUSEL */}
       <ScrollReveal direction="left" delay={160}>
<div className="relative w-full md:max-w-[585px] translate-x-[7px]">
  {/* IMAGE CONTAINER */}
  <div className="relative aspect-[14/9] w-full overflow-hidden rounded-lg shadow-xl">
    <Image
      key={active.image}
      src={active.image}
      alt={`Hero Slide ${index + 1}`}
      fill
      priority={index === 0}
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 585px"
    />
  </div>

  {/* DOTS */}
  <div className="absolute bottom-5 left-6 z-10 flex gap-2">
    {slides.map((slide, i) => (
      <button
        key={slide.image}
        type="button"
        onClick={() => setIndex(i)}
        aria-label={`Go to slide ${i + 1}`}
        className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
          i === index ? "bg-[#F5C518]" : "bg-[#0B1F5C]"
        }`}
      />
    ))}
  </div>
</div>
</ScrollReveal>
        </div>
      </section>
      </ScrollReveal>
    </>
  );
}