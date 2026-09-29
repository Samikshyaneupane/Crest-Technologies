"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are the qualifications required to do the course?",
    answer:
      "The qualifications vary by course. Please check the specific course details page for prerequisites.s",
  },
  {
    question: "Is the course theoretical or practical?",
    answer:
      "Our courses blend theoretical knowledge with extensive hands-on practical sessions and real-world projects.",
  },
  {
    question: "Who will be the trainer for the classroom training?",
    answer:
      "Our trainers are experienced industry professionals with expertise in their respective fields.",
  },
  {
    question: "What are Live Projects Training?",
    answer:
      "Live Projects Training involves working on real-world projects under the guidance of experienced mentors to gain practical experience.",
  },
  {
    question: "Is there any project supported with the course?",
    answer:
      "Yes, most of our courses include guided projects to help you apply your learning and build your portfolio.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes, we provide placement assistance including resume building, interview preparation, and connecting you with potential employers.",
  },
];

export default function CourseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1750px] px-5 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

          {/* LEFT FAQ BOX */}
          <div className="rounded-[12px] bg-[#E4F2FF] px-7 py-10 md:px-11 md:py-12 lg:px-12 lg:py-14">
            {/* TITLE */}
            <h2 className="text-[36px] font-bold leading-none text-[#171E63] md:text-[44px] lg:text-[48px]">
              FAQs
            </h2>

            {/* FAQ QUESTIONS */}
            <div className="mt-10">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="border-b border-[#C5DFF4] last:border-b-0"
                  >
                    {/* QUESTION */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="pr-4 text-[18px] font-medium leading-[1.4] text-black md:text-[20px] lg:text-[21px]">
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={23}
                        strokeWidth={2.5}
                        className={`shrink-0 text-[#101A5C] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* ANSWER */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pr-10 text-[16px] leading-[1.7] text-[#4D4D4D] md:text-[17px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CONTACT BUTTON */}
            <div className="mt-12">
              <Link
                href="/contact"
                prefetch={false}
                className="mt-8 w-full md:w-auto px-6 py-3 bg-[#FFCC00] text-black font-normal rounded-3xl text-lg hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500"
              >
                For more information contact
              </Link>
            </div>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="flex items-center justify-center">
            <div className="relative h-[330px] w-full max-w-[400px] md:h-[430px] lg:h-[500px]">
              <Image
                src="/Courses/manthinking.svg"
                alt="Frequently Asked Questions"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 90vw, 600px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}