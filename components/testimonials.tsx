"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    title: "Industry-standard QA training with expert mentorship",
    course: "QA Automation",
    review:
      "The QA Automation course at Crest Technologies was exceptional. Under Anish Koirala's mentorship, I gained valuable industry insights and practical skills. The curriculum went beyond basics to cover current industry practices. The hands-on approach and expert guidance made this an invaluable learning experience.",
    name: "Rajiv Sapkota",
    image: "/reviews/rajivsapkota.jpg",
  },
  {
    title: "Life-changing React.js training with practical skills",
    course: "Frontend Development With ReactJS",
    review:
      "The React.js course at Crest Technologies was life-changing. The knowledgeable instructors and practical approach helped me build real-world skills. The hands-on projects and internship opportunities boosted my confidence. This training was instrumental in my successful transition to an IT career.",
    name: "Sujan Bhusal",
    image: "/reviews/sujan.jpg",
  },
  {
    title: "Practical and engaging UI/UX learning experience",
    course: "UI/UX Design",
    review:
      "The UI/UX Design course at Crest Technologies was exceptional. The practical approach made learning enjoyable and effective. Real-time demonstrations and hands-on projects helped me apply concepts immediately. The focus on practical skills rather than theory was refreshing. I highly recommend this course for anyone interested in UI/UX design.",
    name: "Shiva Shrestha",
    image: "/reviews/shivashrestha.jpg",
  },
  {
    title:
      "Comprehensive QA Automation training with real-world applications",
    course: "QA Automation",
    review:
      "The QA Automation course at Crest Technologies was outstanding. The curriculum covered essential tools like Cypress and API testing thoroughly. Hands-on sessions and real-world scenarios made learning practical and engaging. The instructor's clear explanations and project support were invaluable. This course significantly enhanced my automation skills.",
    name: "Bharosa Rai",
    image: "/reviews/bharosha.jpg",
  },
  {
    title:"Engaging learning with dedicated instructor support",
    course:"Frontend Development With ReactJS",
    review:"The ReactJS course at Crest Technologies was transformative. Vivek Sir's teaching approach made complex concepts easy to understand. His dedication to student success was evident through extended support and real-world project insights. The practical focus and hands-on experience made learning both engaging and valuable.",
    name:"Sushant Tripathee",
    image:"/reviews/sushant.jpg"
  },
  {
    title:"Exceptional support and collaborative learning experience",
    course:"UI/UX Design",
    review:"Thanks. Crest for the robust support in a creative course. Teachers were ever-ready to assist, course materials helpful and collaborating online was valuable for my upskill",
    name:"Roshan Parajuli",
    image:"/reviews/roshan.jpg"
  },
 
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const maxIndex = reviews.length - 2;

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => {
        if (current >= maxIndex) {
          setDirection(-1);
          return current - 1;
        }

        if (current <= 0) {
          setDirection(1);
          return current + 1;
        }

        return current + direction;
      });
    }, 1800);

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
    <section className="mt-10 flex min-h-[585px] items-center overflow-hidden bg-[#1A71E9] px-6 py-10">

      <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 items-center lg:grid-cols-2">

        {/* LEFT */}
        <div className="w-full">
          <h2 className="text-[36px] font-bold leading-[0.95] text-white">
            Hear from our
            <br />
            learners
          </h2>
        </div>

        {/* RIGHT */}
        <div className="relative mt-10 w-full lg:mt-0">

          {/* VIEWPORT */}
          <div className="overflow-hidden">

            {/* SLIDING TRACK */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * 50}%)`,
              }}
            >
              {reviews.map((review, reviewIndex) => (
                <div
                  key={reviewIndex}
                  className="w-1/2 shrink-0 px-[6px]"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>

          </div>

          {/* LEFT ARROW */}
          <button
            onClick={previousSlide}
            aria-label="Previous review"
            className="absolute left-[-22px] top-1/2 z-10 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#2475e8]"
          >
            <ChevronLeft size={29} strokeWidth={2} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            aria-label="Next review"
            className="absolute right-[-22px] top-1/2 z-10 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#2475e8]"
          >
            <ChevronRight size={29} strokeWidth={2} />
          </button>

          {/* BOTTOM LINE */}
          <div className="mt-3 h-[4px] w-full bg-[#D9D9D9]" />

        </div>
      </div>
    </section>
  );
}

/* REVIEW CARD */

function ReviewCard({
  review,
}: {
  review: (typeof reviews)[number];
}) {
  return (
    <div className="flex h-[418px] w-full flex-col rounded-[6px] bg-white px-[18px] py-[19px]">

      {/* TITLE */}
      <h3 className="text-[17px] font-bold leading-[1.3] text-[#111]">
        {review.title}
      </h3>

      {/* COURSE */}
      <p className="mt-4 text-[12px] font-bold text-[#001b67]">
        {review.course}
      </p>

      {/* REVIEW */}
      <p className="mt-3 text-[11px] leading-[1.45] text-black">
        {review.review}
      </p>

      {/* PERSON */}
      <div className="mt-auto flex items-center gap-3">

        <Image
          src={review.image}
          alt={review.name}
          width={52}
          height={52}
          className="h-[52px] w-[52px] rounded-full object-cover"
        />

        <span className="text-[12px] font-bold text-black">
          {review.name}
        </span>

      </div>
    </div>
  );
}