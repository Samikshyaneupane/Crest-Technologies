"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  "/corporate/CP1.webp",
  "/corporate/CP2.jpg",
  "/corporate/CP3.webp",
  "/corporate/CP4.webp",
];

export default function CollegeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto change image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#DCEEFF]">
      <div className="mx-auto flex min-h-[700px] max-w-[1500px] flex-col items-center justify-between gap-12 px-6 py-16 lg:flex-row lg:px-10 lg:py-20">
        
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[43%]">
          <h1 className="text-[38px] font-bold leading-[1.12] text-[#001B69] md:text-[48px]">
            Join our College to
            <br />
            Corporate Programe
          </h1>

          <p className="mt-7 text-[18px] leading-[1.55] text-black md:text-[21px]">
            Exclusive for Students and Recent Passouts
            <br className="hidden md:block" />
            Join our placement-linked programs and become &apos;day
            <br className="hidden md:block" />
            one job-ready&apos; professionals
          </p>

          <Link
            href="/contact"
            prefetch={false}
            className="mt-7 inline-block rounded-full bg-[#FFC800] px-7 py-3 text-[18px] font-medium text-black transition hover:bg-[#eab800]"
          >
            Contact for more
          </Link>
        </div>

        {/* RIGHT SIDE - IMAGE SLIDER */}
        <div className="w-full lg:w-[50%]">
          <div className="relative h-[320px] w-full overflow-hidden md:h-[450px]">
            <Image
              src={slides[currentSlide]}
              alt="College to Corporate students"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* SLIDER DOTS */}
          <div className="mt-4 flex items-center justify-center gap-5">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-[6px] w-[6px] rounded-full transition ${
                  currentSlide === index
                    ? "bg-[#34495E]"
                    : "bg-[#A8B8C8]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}