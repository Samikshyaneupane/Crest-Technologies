"use client";

import { useState } from "react";
import Image from "next/image";

export default function CorporateHero() {
  const [showConsultation, setShowConsultation] = useState(false);

  return (
    <>
      {/*  CORPORATE HERO  */}
      <section className="w-full bg-white">
        <div className="mx-auto flex min-h-[540px] max-w-[1500px] items-center px-4 py-2 lg:px-4">
          {/* LEFT SIDE */}
          <div className="w-[50%]">
         <h1 className="font-bold text-[#00135C] text-3xl md:text-4xl lg:text-5xl mt-4 mb-5">
  Empower Your  Workforce
  <br />
  with Cutting-Edge
  <br />
 Corporate Training
</h1>

            <p className="text-[#6d6d6d] text-lg md:text-xl lg:text-2xl mb-[36px]">
              Comprehensive upskilling and talent solutions for
              <br />
              organizations of all sizes
            </p>

            <button
              type="button"
              onClick={() => setShowConsultation(true)}
              className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 h-10 text-small gap-2 [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover bg-[#FFCC00] rounded-3xl px-6 py-6 hover:bg-transparent hover:border hover:border-blue-500 text-[#00135C] hover:text-blue-500 font-normal text-lg md:text-xl lg:text-2xl"
            >
              Request a Consultation
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="-mr-8 flex w-[50%] items-center justify-start">
            <div className="relative h-[600px] w-[600px] leading-[100%] translate-x-[38px] ">
              <Image
                src="/corporate/corporateHero.png"
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

      {/*CONSULTATION POPUP  */}
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