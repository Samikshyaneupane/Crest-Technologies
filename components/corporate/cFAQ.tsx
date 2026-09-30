"use client";

import { useState } from "react";
import {
  ChevronDown,
  MapPin,
  Mail,
  Phone,
  Clock3,
  X,
} from "lucide-react";

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
    question: "Minimum team size?",
    answer:
      "The minimum team size for corporate training can vary depending on the program, but we offer flexible solutions to accommodate different team sizes.",
  },
  {
    question: "Learning modes available?",
    answer:
      "We offer various learning modes, including on-site training, virtual instructor-led training, and blended learning options.",
  },
  {
    question: "Certification process?",
    answer:
      "The certification process typically involves completing the training program and passing any required assessments. Specific details vary by course.",
  },
];

export default function CorporateFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showContact, setShowContact] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section id="enroll" className="w-full bg-white py-14">
        <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-start gap-8 px-6 lg:grid-cols-2">
          
          {/* ================= FAQ LEFT ================= */}
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
              onClick={() => setShowContact(true)}
              className="mt-10 rounded-full border border-transparent bg-[#FFCC00] px-8 py-2.5 text-[19px] text-black transition hover:border-blue-500 hover:bg-transparent hover:text-blue-500"
            >
              For more information contact
            </button>
          </div>

          {/* ================= ENROLL FORM RIGHT ================= */}
          <div className="rounded-[7px] bg-[#D9EAFE] px-6 py-7 shadow-md">
            <h2 className="mb-6 text-[34px] font-bold text-[#001B69]">
              Enroll now
            </h2>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
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
                className="w-1/3 rounded-3xl border border-transparent bg-[#FFCC00] py-3 text-base font-normal text-[#292929] transition-colors hover:border-blue-500 hover:bg-transparent hover:text-blue-500 md:text-xl lg:text-2xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= CONTACT POPUP ================= */}
      {showContact && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
          onClick={() => setShowContact(false)}
        >
          <div
            className="relative grid w-full max-w-[900px] overflow-hidden rounded-xl bg-white shadow-2xl md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* LEFT SIDE */}
            <div className="bg-white px-7 py-6 md:px-9 md:py-7">
              <p className="text-[14px] text-[#4B5563]">
                Contact Details
              </p>

              <h2 className="mt-1 text-3xl font-bold text-[#00135C]">
                Get in Touch
              </h2>

              <p className="mt-3 max-w-[400px] text-[15px] leading-6 text-[#374151]">
                Our experts are ready to help you choose the right program.
              </p>

              {/* CONTACT INFORMATION */}
              <div className="mt-6 space-y-5">
                
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

            {/* RIGHT SIDE */}
            <div className="relative bg-[#EBF3FF] px-7 py-6 md:px-9 md:py-7">
              
              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setShowContact(false)}
                className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-[#64748B] transition hover:bg-white hover:text-[#00135C]"
              >
                <X size={20} />
              </button>

              <h2 className="pr-12 text-3xl font-bold text-[#292929]">
                Ready to Get Started
              </h2>

              <p className="mt-2 text-[14px] text-[#475569]">
                Your E-mail address will not be published.
              </p>

              {/* CONTACT FORM */}
              <form
                className="mt-5 space-y-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-lg border border-[#D8DEE8] bg-white px-4 py-3 text-[15px] text-[#292929] outline-none transition placeholder:text-[#9CA8BA] focus:border-[#00135C]"
                />

                <input
                  type="tel"
                  placeholder="Number"
                  required
                  className="w-full rounded-lg border border-[#D8DEE8] bg-white px-4 py-3 text-[15px] text-[#292929] outline-none transition placeholder:text-[#9CA8BA] focus:border-[#00135C]"
                />

                <input
                  type="email"
                  placeholder="E-mail"
                  required
                  className="w-full rounded-lg border border-[#D8DEE8] bg-white px-4 py-3 text-[15px] text-[#292929] outline-none transition placeholder:text-[#9CA8BA] focus:border-[#00135C]"
                />

                <textarea
                  placeholder="Message (Optional)"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-[#D8DEE8] bg-white px-4 py-3 text-[15px] text-[#292929] outline-none transition placeholder:text-[#9CA8BA] focus:border-[#00135C]"
                />

                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-[#FFCC00] py-3 font-normal text-black transition-colors hover:bg-yellow-500"
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