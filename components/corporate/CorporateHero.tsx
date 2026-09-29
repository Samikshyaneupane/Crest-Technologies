"use client";

import { useState } from "react";
import Image from "next/image";

export default function CorporateHero() {
  const [showConsultation, setShowConsultation] = useState(false);

  return (
    <>
      {/* ================= CORPORATE HERO ================= */}
      <section className="w-full bg-white">
        <div className="mx-auto flex min-h-[540px] max-w-[1500px] items-center px-4 py-3 lg:px-8">
          {/* LEFT SIDE */}
          <div className="w-[48%]">
            <h1 className="text-[40px] font-bold leading-[1.08] text-[#00135C] lg:text-[40px]">
              Empower your Workforce
              <br />
              with Cutting-Edge
              <br />
              Corporate Training
            </h1>

            <p className="mb-5 mt-10 text-[18px] leading-[1.55] text-[#6d6d6d]">
              Comprehensive upskilling and talent solutions for
              <br />
              organization of all sizes
            </p>

            <button
              type="button"
              onClick={() => setShowConsultation(true)}
              className="mt-8 rounded-full border border-transparent bg-[#FFCC00] px-7 py-2.5 text-[18px] font-medium text-[#00135C] transition-all hover:border-blue-500 hover:bg-transparent hover:text-blue-500"
            >
              Request a Consultation
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="-mr-8 flex w-[52%] items-center justify-start">
            <div className="relative h-[600px] w-[600px] leading-[100%]">
              <Image
                src="/corporateHero.png"
                alt="Corporate Training"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONSULTATION POPUP ================= */}
      {showConsultation && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 py-4"
          onClick={() => setShowConsultation(false)}
        >
          {/* SMALLER POPUP */}
          <div
            className="w-full max-w-[520px] rounded-[10px] bg-white px-7 py-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[26px] font-bold text-[#00135C] md:text-[30px]">
                Request a Consultation
              </h2>

              <button
                type="button"
                onClick={() => setShowConsultation(false)}
                className="shrink-0 text-[15px] text-[#6B7280] underline transition hover:text-black"
              >
                Close
              </button>
            </div>

            {/* FORM */}
            <form
              className="mt-5 space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* FULL NAME */}
              <input
                type="text"
                required
                placeholder="Full Name"
                className="h-[48px] w-full rounded-[7px] border border-[#CBD2DC] px-4 text-[16px] text-[#222] outline-none transition placeholder:text-[#A3ACBC] focus:border-[#00135C]"
              />

              {/* NUMBER */}
              <input
                type="tel"
                required
                placeholder="Number"
                className="h-[48px] w-full rounded-[7px] border border-[#CBD2DC] px-4 text-[16px] text-[#222] outline-none transition placeholder:text-[#A3ACBC] focus:border-[#00135C]"
              />

              {/* ADDRESS */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Address"
                  className="h-[48px] w-full rounded-[7px] border border-[#CBD2DC] px-4 pr-24 text-[16px] text-[#222] outline-none transition placeholder:text-[#A3ACBC] focus:border-[#00135C]"
                />

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[14px] text-[#A3ACBC]">
                  (Optional)
                </span>
              </div>

              {/* EMAIL */}
              <input
                type="email"
                required
                placeholder="E-mail"
                className="h-[48px] w-full rounded-[7px] border border-[#CBD2DC] px-4 text-[16px] text-[#222] outline-none transition placeholder:text-[#A3ACBC] focus:border-[#00135C]"
              />

              {/* SUBJECT */}
              <input
                type="text"
                required
                placeholder="Subject of interest"
                className="h-[48px] w-full rounded-[7px] border border-[#CBD2DC] px-4 text-[16px] text-[#222] outline-none transition placeholder:text-[#A3ACBC] focus:border-[#00135C]"
              />

              {/* MESSAGE */}
              <div className="relative">
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="min-h-[95px] w-full resize-none rounded-[7px] border border-[#CBD2DC] px-4 py-3 pr-24 text-[16px] text-[#222] outline-none transition placeholder:text-[#A3ACBC] focus:border-[#00135C]"
                />

                <span className="pointer-events-none absolute right-4 top-3 text-[14px] text-[#A3ACBC]">
                  (Optional)
                </span>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="h-[48px] w-full rounded-[7px] bg-[#FFCC00] text-[20px] font-medium text-[#00135C] transition hover:bg-[#f0c000]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}