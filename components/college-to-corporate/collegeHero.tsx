"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Clock3, Mail, MapPin, Phone, X } from "lucide-react";

const slides = [
  "/corporate/CP1.webp",
  "/corporate/CP2.webp",
  "/corporate/CP3.webp",
  "/corporate/CP4.webp",
];

export default function CollegeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Contact popup state
  const [showContact, setShowContact] = useState(false);

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="w-full bg-[#DCEEFF]">
        <div className="mx-auto flex min-h-[700px] max-w-[1500px] flex-col items-center justify-between gap-6 px-6 py-16 lg:flex-row lg:px-10 lg:py-20">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[45%]">

            {/* HEADING */}
            <h1 className="mb-[30px] text-4xl font-bold leading-[100%] tracking-[0] text-[#00135C] md:text-4xl lg:text-5xl">
              Join our College to
              <br />
              Corporate Programme
            </h1>

            {/* DESCRIPTION */}
            <p className="mb-[30px] text-xl font-normal leading-[150%] tracking-[0%] md:text-2xl lg:text-lg">
              Exclusive for Students and Recent Passouts
              <br className="hidden md:block" />
              Join our placement-linked programs and become &apos;day
              <br className="hidden md:block" />
              one job-ready&apos; professionals
            </p>

            {/* CONTACT FOR MORE BUTTON */}
            <button
              type="button"
              onClick={() => setShowContact(true)}
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#FFCC00] px-7 text-[18px] font-medium text-black transition-all duration-300 hover:border hover:border-blue-500 hover:bg-transparent hover:text-blue-500"
            >
              Contact for more
            </button>
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

      {/* CONTACT POPUP  */}

      {showContact && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
          onClick={() => setShowContact(false)}
        >
          {/* POPUP */}
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
                className="absolute right-5 top-5 text-[14px] text-[#64748B] transition hover:text-[#00135C]"
              >
                Close
              </button>

              {/* TITLE */}
              <h2 className="pr-12 text-3xl font-bold text-[#292929]">
                Ready to Get Started
              </h2>

              <p className="mt-2 text-[14px] text-[#475569]">
                Your E-mail address will not be published.
              </p>

              {/* FORM */}
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
                  className="w-full bg-[#FFCC00] text-black font-normal py-3 mt-6 rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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