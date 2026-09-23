"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  MapPin,
  Mail,
  Phone,
  Clock3,
} from "lucide-react";

const faqs = [
  {
    question: "What are the qualifications required to do the course?",
    answer:
      "Basic computer knowledge and a strong willingness to learn are the primary requirements. Specific courses may have additional prerequisites which will be mentioned in the course details.",
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
  const [showContact, setShowContact] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ SECTION  */}

      <section className="bg-[#f5f6f7] px-3 py-5">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-2">

          {/*  LEFT FAQ CARD  */}

          <div className="rounded-md bg-[#99CDFF] px-5 py-5 shadow-md">
            <h2 className="mb-5 text-4xl font-bold text-[#172033]">
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

            {/* CONTACT POPUP BUTTON */}

            <button
              onClick={() => setShowContact(true)}
              className="mt-6 rounded-full border border-transparent bg-[#FFCC00] px-6 py-2 text-[16px] text-[#292929] transition hover:border-blue-500 hover:bg-transparent hover:text-blue-500"
            >
              For more information contact
            </button>
          </div>

          {/* RIGHT CORPORATE CARD  */}

          <div className="relative min-h-[405px] overflow-hidden rounded-md shadow-md">
            <Image
              src="/faq.jpg"
              alt="Corporate Training"
              fill
              className="object-cover grayscale"
            />

            {/* WHITE OVERLAY */}

            <div className="absolute inset-0 bg-white/50" />

            {/* CONTENT */}

            <div className="relative z-10 flex h-full min-h-[405px] flex-col px-8 py-7">
              <div className="w-fit rounded-md bg-[#00135C] px-3 py-2 text-[12px] font-bold text-white shadow-md">
                CORPORATE TRAINING
              </div>

              <h2 className="mt-12 max-w-[300px] text-4xl font-bold leading-[0.98] text-[#00135C]">
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

              <button className="mt-6 w-fit rounded-full border border-transparent bg-[#FF5757] px-4 py-1.5 text-[19px] text-white transition hover:border-blue-500 hover:bg-transparent hover:text-blue-500">
                Connect with us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT POPUP */}

      {showContact && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
          onClick={() => setShowContact(false)}
        >
          {/* POPUP CONTAINER  */}

          <div
            className="relative grid w-full max-w-[900px] overflow-hidden rounded-xl bg-white shadow-2xl md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/*  LEFT SIDE */}

            <div className="bg-white px-7 py-6 md:px-9 md:py-7">
              <p className="text-[14px] text-[#4B5563]">
                Contact Details
              </p>

              <h2 className="mt-1 text-3xl font-bold text-[#00135C]">
                Get in Touch
              </h2>

              <p className="mt-3 max-w-[400px] text-[15px] leading-6 text-[#374151]">
                Our experts
              </p>

              {/* CONTACT INFORMATION */}

              <div className="mt-5 space-y-5">

                {/* ADDRESS */}

                <div className="flex items-start gap-4">
                  <MapPin
                    size={24}
                    strokeWidth={2}
                    className="mt-1 shrink-0 text-[#00135C]"
                  />

                  <div>
                    <h3 className="text-[15px] font-bold text-[#00135C]">
                      OUR ADDRESS
                    </h3>

                    <p className="mt-1 text-[15px] text-[#4B5563]">
                      Nepal
                    </p>
                  </div>
                </div>

                {/* EMAIL */}

                <div className="flex items-start gap-4">
                  <Mail
                    size={24}
                    strokeWidth={2}
                    className="mt-1 shrink-0 text-[#00135C]"
                  />

                  <div>
                    <h3 className="text-[15px] font-bold text-[#00135C]">
                      E-MAIL
                    </h3>

                    <p className="mt-1 text-[15px] text-[#4B5563]">
                      info@cresttechhub.com
                    </p>
                  </div>
                </div>

                {/* CONTACT */}

                <div className="flex items-start gap-4">
                  <Phone
                    size={24}
                    strokeWidth={2}
                    className="mt-1 shrink-0 text-[#00135C]"
                  />

                  <div>
                    <h3 className="text-[15px] font-bold text-[#00135C]">
                      CONTACT
                    </h3>

                    <p className="mt-1 text-[15px] text-[#4B5563]">
                      +977 9857084388
                    </p>
                  </div>
                </div>

                {/* OPERATION HOURS */}

                <div className="flex items-start gap-4">
                  <Clock3
                    size={24}
                    strokeWidth={2}
                    className="mt-1 shrink-0 text-[#00135C]"
                  />

                  <div>
                    <h3 className="text-[15px] font-bold text-[#00135C]">
                      OPERATION HOURS
                    </h3>

                    <p className="mt-1 text-[15px] leading-5 text-[#4B5563]">
                      10 AM - 6 PM
                      <br />
                      Sunday - Friday
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*RIGHT SIDE */}

            <div className="relative bg-[#EBF3FF] px-7 py-6 md:px-9 md:py-7">

              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={() => setShowContact(false)}
                className="absolute right-5 top-5 text-[14px] text-[#64748B] transition hover:text-[#00135C]"
              >
                Close
              </button>

              {/* TITLE */}

              <h2 className="pr-20 text-3xl font-bold text-[#292929]">
                Ready to Get Started
              </h2>

              <p className="mt-2 text-[14px] text-[#475569]">
                Your E-mail address will not be published.
              </p>

              {/*  FORM  */}

              <form
                className="mt-5 space-y-3"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* FULL NAME */}

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-[#D8DEE8] bg-white px-4 py-3 text-[15px] text-[#292929] outline-none transition placeholder:text-[#9CA8BA] focus:border-[#00135C]"
                />

                {/* PHONE NUMBER */}

                <input
                  type="tel"
                  placeholder="Number"
                  className="w-full rounded-lg border border-[#D8DEE8] bg-white px-4 py-3 text-[15px] text-[#292929] outline-none transition placeholder:text-[#9CA8BA] focus:border-[#00135C]"
                />

                {/* EMAIL */}

                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full rounded-lg border border-[#D8DEE8] bg-white px-4 py-3 text-[15px] text-[#292929] outline-none transition placeholder:text-[#9CA8BA] focus:border-[#00135C]"
                />

                {/* MESSAGE */}

                <textarea
                  placeholder="Message (Optional)"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-[#D8DEE8] bg-white px-4 py-3 text-[15px] text-[#292929] outline-none transition placeholder:text-[#9CA8BA] focus:border-[#00135C]"
                />

                {/* SUBMIT BUTTON */}

                <button
                  type="submit"
                  className="w-full rounded-lg border border-transparent bg-[#FFCC00] py-3 text-[18px] font-medium text-[#111111] transition hover:border-[#00135C] hover:bg-transparent hover:text-[#00135C]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}