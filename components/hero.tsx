"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { image: "/image1.jpg" },
  { image: "/image2.jpg" },
  { image: "/image3.jpg" },
];

const heroTexts = [
  {
    title: "Learn from Industry Experts",
    description:
      "Get hands-on experience with real-world projects guided by experienced professionals.",
  },
  {
    title: "Future Ready Curriculum",
    description:
      "Stay ahead with cutting-edge curriculum designed for tomorrow's technology needs.",
  },
  {
    title: "Build Real Projects",
    description:
      "Work on practical assignments guided by experienced industry mentors.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  // Image Carousel Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  // Text Change Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((i) => (i + 1) % heroTexts.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const active = slides[index];

  return (
    <>
      {/* IAO Banner */}
      <section className="w-full border-b border-[#D9EAF8] bg-[#A9D2F7]">
        <div className="flex w-full items-center justify-between px-6 py-0">

          <p className="whitespace-nowrap text-base font-medium text-[#0B1F5C] md:text-lg">
            The first tech institution in Nepal to be officially recognized and
            accredited by IAO.
          </p>

          <div className="flex items-center bg-white px-4 py-3">
            <Image
              src="/iao.png"
              alt="International Accreditation Organization"
              width={160}
              height={60}
              className="h-auto w-[160px]"
            />
          </div>

        </div>
      </section>


      {/* Hero Section */}
      <section className="w-full bg-[#F5F5F5]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">


          {/* Left Content */}
          <div>

            <h1 className="text-4xl font-extrabold leading-tight text-[#1A1A1A] transition-all duration-500 md:text-5xl">
              {heroTexts[textIndex].title}
            </h1>

            <p className="mt-5 max-w-md text-base text-[#333333] transition-all duration-500 md:text-lg">
              {heroTexts[textIndex].description}
            </p>


            {/* Trustpilot */}
            <div className="mt-6 flex items-center gap-2 text-[#1A1A1A]">

              <span className="text-[#00B67A]">
                ★
              </span>

              <span className="font-medium">
                Trustpilot 4.5
              </span>

              <span className="text-[#F5C518]">
                ★
              </span>

            </div>

          </div>



          {/* Image Carousel */}
          <div className="relative overflow-hidden rounded-xl bg-[#D9D9D9]">

            <div className="relative aspect-[4/3] w-full">

              <Image
                key={active.image}
                src={active.image}
                alt={`Hero Slide ${index + 1}`}
                fill
                priority
                className="object-cover transition-opacity duration-700"
              />

            </div>


            {/* Dots */}
            <div className="absolute bottom-5 left-6 flex gap-2">

              {slides.map((slide, i) => (

                <button
                  key={slide.image}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index
                      ? "bg-[#F5C518]"
                      : "bg-[#0B1F5C]"
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
