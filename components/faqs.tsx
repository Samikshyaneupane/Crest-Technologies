"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are the qualifications required to do the course?",
    answer:
      "Basic computer knowledge and a strong willingness to learn are the primary requirements. Specific courses may have additional prerequisites which will be mentioned in the course details. ",
  },
  {
    question: "Is the course theoretical or practical?",
    answer:
      "Our courses are designed with a balanced mix of both theoretical concepts and practical applications. We emphasize hands-on learning with real-world projects and exercises.",
  },
  {
    question: "Who will be the trainer for the classroom training?",
    answer:
      "Our trainers are industry experts with extensive practical experience in their respective fields. They are carefully selected based on their expertise and teaching abilities.",
  },
  {
    question: "What are Live Projects Training?",
    answer:
      "Live Projects Training involves working on real-world projects under the guidance of industry experts. This helps students gain practical experience and build a strong portfolio.",
  },
  {
    question: "Is there any project supported with the course?",
    answer:
      "Yes, all our courses include multiple projects. You'll work on both individual and group projects to apply your learning and build a portfolio.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes, we provide comprehensive placement assistance including resume building, interview preparation, and connections with our hiring partners.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f5f6f7] px-3 py-5">
      <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-2">

        {/* LEFT FAQ CARD */}
        <div className="rounded-md bg-[#99CDFF] px-5 py-5 shadow-md">
          <h2 className="mb-5 text-4xl font-bold text-[#172033] md:text-4xl">
            FAQs
          </h2>

          <div>
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="border-b border-[#87b9e8] last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 py-3 text-left"
                >
                  <span className="text-[14px] font-normal text-[#111827]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-[#124a8d] transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="pb-4 pr-8 text-[13px] leading-5 text-[#26364a]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="mt-6 rounded-full bg-[#FFCC00]  px-6 py-2 text-[16px] text-[292929] transition hover:bg-transparent hover:text-blue-500 hover:border hover:border-blue-500">
            For more information contact
          </button>
        </div>

        {/* RIGHT CORPORATE TRAINING CARD */}
        <div className="relative min-h-[405px] overflow-hidden rounded-md shadow-md">
          <Image
            src="/faq.jpg"
            alt="Corporate Training"
            fill
            className="object-cover grayscale"
          />

          {/* White transparent layer */}
          <div className="absolute inset-0 bg-white/50" />

          {/* Content */}
          <div className="relative z-10 flex h-full min-h-[405px] flex-col px-8 py-7">
            <div className="w-fit rounded-md  bg-[#00135C] px-3 py-2 text-[12px] font-bold text-white shadow-md">
              CORPORATE TRAINING
            </div>

            <h2 className="mt-12 max-w-[300px] text-4xl font-bold leading-[0.98] text-[#00135C] ">
              Work place
              <br />
              Learning that
              <br />
              Works
            </h2>

            <p className="mt-5 max-w-[330px] text-[17px] leading-6 text-[#292929]">
              Skill your workforce in new age
              <br />
              technologies with our cutting edge
              <br />
              curriculum.
            </p>

            <button className="mt-6 w-fit rounded-full bg-[#FF5757] px-4 py-1.5 text-[19px] text-white transition rounded-3xl hover:bg-transparent hover:text-blue-500  hover:border-blue-500">
              Connect with us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}