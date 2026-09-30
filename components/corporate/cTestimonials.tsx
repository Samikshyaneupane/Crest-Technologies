"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Saveer Ali",
    company: "Water-comm",
    image: "/corporate/saveerdai.webp",
    rating: "4.5",
    review:
      "Great training! It helped our designers think more clearly about user needs. ",
  },
  {
    name: "Sanam Acharya",
    company: "Water-Comm",
    image: "/corporate/sanamdai.webp",
    rating: "4.5",
    review:
      "The UI/UX Design training by Crest Technologies was insightful and practical. Our team gained hands-on skills that have already improved our product workflows. Highly recommended for teams aiming to enhance user experience. ",
  },
  {
    name: " NIGMA SHERPA",
    company: "Plasma Tech",
    image: "/corporate/nigma.png",
    rating: "4.5",
    review:
      "The course helped streamline our project execution process significantly. ",
  },
];

export default function CorporateTestimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const maxIndex = testimonials.length - 1;

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => {
        // Reached last testimonial -> move backwards
        if (current >= maxIndex) {
          setDirection(-1);
          return current - 1;
        }

        // Reached first testimonial -> move forwards
        if (current <= 0) {
          setDirection(1);
          return current + 1;
        }

        return current + direction;
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [direction, maxIndex]);

  // NEXT
  const nextSlide = () => {
    setDirection(1);

    setIndex((current) => {
      if (current >= maxIndex) {
        return 0;
      }

      return current + 1;
    });
  };

  // PREVIOUS
  const previousSlide = () => {
    setDirection(-1);

    setIndex((current) => {
      if (current <= 0) {
        return maxIndex;
      }

      return current - 1;
    });
  };

  return (
    <section className="w-full overflow-hidden bg-white px-6 py-10">
      <div className="mx-auto max-w-[900px]">

        {/* TITLE */}
        <h2 className="text-center text-[3px] font-bold text-[#001B69] md:text-[52px] mt-[10px]">
          Testimonials
        </h2>

        {/* SLIDER */}
        <div className="relative mx-auto mt-14 w-full max-w-[760px]">

          {/* VIEWPORT */}
          <div className="overflow-hidden">

            {/* SLIDING TRACK */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, testimonialIndex) => (
                <div
                  key={testimonialIndex}
                  className="w-full shrink-0"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>

          </div>

          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous testimonial"
            className="absolute left-[-30px] top-1/2 z-10 flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105"
          >
            <ChevronLeft
              size={36}
              strokeWidth={2}
              className="text-[#2475E8]"
            />
          </button>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-[-30px] top-1/2 z-10 flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105"
          >
            <ChevronRight
              size={36}
              strokeWidth={2}
              className="text-[#2475E8]"
            />
          </button>

            

        </div>
      </div>
    </section>
  );
}






function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="flex min-h-[480px]  w-full flex-col items-center rounded-[8px] bg-[#DAEBFF] px-10 py-5 text-center md:px-16">

      {/* PROFILE IMAGE */}
      <div className="relative h-[130px] w-[130px] overflow-hidden rounded-full ">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
          sizes="130px"
        />
      </div>

      {/* NAME */}
      <h3 className="mt-5 text-[23px] font-bold leading-none text-black">
        {testimonial.name}
      </h3>

      {/* COMPANY */}
      <p className="mt-2 text-[17px] text-[#666666]">
        {testimonial.company}
      </p>

      {/* RATING */}
      <div className="mt-5 flex items-center justify-center gap-2">
        <div className="flex gap-1">
          {[1, 2, 3, 4].map((star) => (
            <Star
              key={star}
              size={20}
              className="fill-[#FFCC00] text-[#FFCC00]"
            />
          ))}

          {/* HALF-STYLE LAST STAR */}
          <Star
            size={20}
            className="fill-[#FFCC00] text-[#FFCC00]"
          />
        </div>

        <span className="ml-1 text-[15px] font-semibold text-[#555555]">
          ({testimonial.rating})
        </span>
      </div>

      {/* REVIEW */}
      <p className="mt-7 max-w-[600px] text-[20px] leading-[1.5] text-black">
        {testimonial.review}
      </p>

    </div>
  );
}