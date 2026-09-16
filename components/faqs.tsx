"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are the qualifications required to do the course?",
    answer:
      "The qualification requirements depend on the course you choose. Our team can help you select the right program based on your background.",
  },
  {
    question: "Is the course theoretical or practical?",
    answer:
      "Our courses combine theoretical knowledge with practical, hands-on learning.",
  },
  {
    question: "Who will be the trainer for the classroom training?",
    answer:
      "Training is provided by experienced professionals with relevant industry expertise.",
  },
  {
    question: "What are Live Projects Training?",
    answer:
      "Live project training allows students to apply their skills to practical, real-world projects.",
  },
  {
    question: "Is there any project supported with the course?",
    answer:
      "Yes. Selected courses include projects designed to provide practical experience.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes. Placement assistance includes career guidance, interview preparation and support in connecting with potential employers.",
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
        <div className="rounded-md bg-[#91c4f3] px-5 py-5 shadow-md">
          <h2 className="mb-5 text-3xl font-bold text-[#172033] md:text-4xl">
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

          <button className="mt-6 rounded-full bg-[#ffd000] px-6 py-2 text-[16px] text-black transition hover:bg-[#f4c400]">
            For more information contact
          </button>
        </div>

        {/* RIGHT CORPORATE TRAINING CARD */}
        <div className="relative min-h-[405px] overflow-hidden rounded-md shadow-md">
          <Image
            src="/corporate-training.jpg"
            alt="Corporate Training"
            fill
            className="object-cover grayscale"
          />

          {/* White transparent layer like screenshot */}
          <div className="absolute inset-0 bg-white/35" />

          {/* Content */}
          <div className="relative z-10 flex h-full min-h-[405px] flex-col px-8 py-7">
            <div className="w-fit rounded-md bg-[#001b67] px-3 py-2 text-[12px] font-bold text-white shadow">
              CORPORATE TRAINING
            </div>

            <h2 className="mt-12 max-w-[300px] text-4xl font-bold leading-[0.98] text-[#001b67]">
              Work place
              <br />
              Learning that
              <br />
              Works
            </h2>

            <p className="mt-5 max-w-[330px] text-[17px] leading-6 text-[#222]">
              Skill your workforce in new age
              <br />
              technologies with our cutting edge
              <br />
              curriculum.
            </p>

            <button className="mt-6 w-fit rounded-full bg-[#ff5757] px-4 py-1.5 text-[16px] text-white transition hover:bg-[#f04444]">
              Connect with us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}