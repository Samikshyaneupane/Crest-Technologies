"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is corporate training?",
    answer:
      "Corporate training is a specialized form of education provided to employees of a company to improve their skills, knowledge, and performance.",
  },
  {
    question: "Why is it essential?",
    answer:
      "It is essential for staying competitive, improving productivity, boosting employee morale, and adapting to industry changes.",
  },
  {
    question: "Minimum team size??",
    answer:
      "The minimum team size for corporate training can vary depending on the program, but we offer flexible solutions to accommodate different team sizes",
  },
  {
    question:"Learning modes available??",
    answer:
      "We offer various learning modes, including on-site training, virtual instructor-led training, and blended learning options.",
  },
  {
    question: "Certification process??",
    answer:
      "The certification process typically involves completing the training program and passing any required assessments. Specific details vary by course.",
  },
];

export default function CorporateFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="enroll" className="w-full bg-white py-14">
      <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-start gap-8 px-6 lg:grid-cols-2">

        {/* FAQ LEFT */}
        <div className="rounded-[7px] bg-[#D9EAFE] px-6 py-7 shadow-md">
          <h2 className="mb-8 text-[40px] font-bold text-[#001B69] md:text-[46px]">
            FAQs
          </h2>

          <div>
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="border-b border-[#9BC6F8] last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span className="text-[18px] text-black md:text-[19px]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`text-[#001B69] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="pb-4 pr-8 text-[15px] leading-[1.6] text-[#555555]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CONTACT BUTTON */}
          <button
            type="button"
            className="mt-10 rounded-full bg-[#FFCC00] px-8 py-2.5 text-[19px] text-black transition hover:bg-transparent hover:border-blue-500 hover:text-blue-500 hover:border"
          >
            For more information contact
          </button>
        </div>

        {/* FORM RIGHT */}
        <div className="rounded-[7px] bg-[#D9EAFE] px-6 py-7 shadow-md">
          <h2 className="mb-6 text-[34px] font-bold text-[#001B69]">
            Enroll now
          </h2>

          <form className="flex flex-col gap-4">
            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="h-[50px] w-full rounded-[7px] border border-[#cccccc] bg-white px-4 text-[15px] outline-none transition focus:border-[#2475E9]"
            />

            {/* NUMBER */}
            <input
              type="tel"
              name="number"
              placeholder="Number"
              required
              className="h-[50px] w-full rounded-[7px] border border-[#cccccc] bg-white px-4 text-[15px] outline-none transition focus:border-[#2475E9]"
            />

            {/* ADDRESS */}
            <div className="relative">
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="h-[50px] w-full rounded-[7px] border border-[#cccccc] bg-white px-4 pr-24 text-[15px] outline-none transition focus:border-[#2475E9]"
              />

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[13px] text-gray-400">
                (Optional)
              </span>
            </div>

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              className="h-[50px] w-full rounded-[7px] border border-[#cccccc] bg-white px-4 text-[15px] outline-none transition focus:border-[#2475E9]"
            />

            {/* SUBJECT */}
            <input
              type="text"
              name="subject"
              placeholder="Subject of interest"
              required
              className="h-[50px] w-full rounded-[7px] border border-[#cccccc] bg-white px-4 text-[15px] outline-none transition focus:border-[#2475E9]"
            />

            {/* MESSAGE */}
            <div className="relative">
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="min-h-[120px] w-full resize-none rounded-[7px] border border-[#cccccc] bg-white px-4 py-4 pr-24 text-[15px] outline-none transition focus:border-[#2475E9]"
              />

              <span className="pointer-events-none absolute right-4 top-4 text-[13px] text-gray-400">
                (Optional)
              </span>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="bg-[#FFCC00] text-[#292929] transition-colors py-3 rounded-3xl font-myriad text-base md:text-xl lg:text-2xl font-normal w-1/3 hover:bg-transparent hover:border-blue-500 hover:text-blue-500 hover:border"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}