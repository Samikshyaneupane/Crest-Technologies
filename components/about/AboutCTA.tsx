"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutCTA() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="w-full bg-[#DCEEFF] py-20 md:py-24">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6 text-center">
          <ScrollReveal>
            <h2 className="text-[36px] font-bold text-[#252525] md:text-[48px] lg:text-[52px]">
              Ready to Transform Your Career?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={180} direction="scale">
            <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row">
              
              {/* JOIN NOW - OPENS POPUP */}
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 h-10 text-small gap-2 [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover bg-[#1A71E9] rounded-3xl py-[28px] px-[6px] w-[20vh] md:w-[30vh] hover:bg-transparent text-white hover:border hover:border-[#1A71E9] hover:text-[#1A71E9] font-normal text-[18px] md:text-[20px] lg:text-[24px]"
              >
                Join Now
              </button>

              {/* CONTACT US - REDIRECTS TO CONTACT PAGE */}
              <Link
                href="/contact"
                prefetch={false}
                className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 h-10 text-small gap-2 [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none rounded-3xl py-[28px] px-[6px] w-[20vh] md:w-[30vh] bg-transparent border border-[#1A71E9] text-black font-normal text-[18px] md:text-[20px] lg:text-[24px]"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* REGISTRATION FORM POPUP */}
      {showForm && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 px-4 py-4"
          onClick={() => setShowForm(false)}
        >
          <div
            className="relative w-full max-w-[610px] rounded-[12px] bg-white px-8 py-6 shadow-2xl md:px-9"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-[29px] font-bold text-[#001B69] md:text-[34px]">
                Registration Form
              </h2>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-[18px] text-gray-500 underline transition hover:text-black"
              >
                Close
              </button>
            </div>

            {/* FORM */}
            <form className="space-y-4">
              
              {/* FULL NAME */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="h-[52px] w-full rounded-[9px] border border-gray-300 px-5 text-[18px] text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#2478E8]"
              />

              {/* PHONE NUMBER */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="h-[52px] w-full rounded-[9px] border border-gray-300 px-5 text-[18px] text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#2478E8]"
              />

              {/* ADDRESS */}
              <div className="relative">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="h-[52px] w-full rounded-[9px] border border-gray-300 px-5 pr-28 text-[18px] text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#2478E8]"
                />

                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[16px] text-gray-400">
                  (Optional)
                </span>
              </div>

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="h-[52px] w-full rounded-[9px] border border-gray-300 px-5 text-[18px] text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#2478E8]"
              />

              {/* SUBJECT */}
              <input
                type="text"
                name="subject"
                placeholder="Subject of Interest"
                required
                className="h-[52px] w-full rounded-[9px] border border-gray-300 px-5 text-[18px] text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#2478E8]"
              />

              {/* MESSAGE */}
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="h-[120px] w-full resize-none rounded-[9px] border border-gray-300 px-5 py-4 pr-28 text-[18px] text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#2478E8]"
                />

                <span className="pointer-events-none absolute right-5 top-4 text-[16px] text-gray-400">
                  (Optional)
                </span>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="mt-2 h-[54px] w-full rounded-[9px] bg-[#FFC800] text-[24px] font-medium text-[#202020] transition duration-300 hover:bg-[#f0bc00] active:scale-[0.99]"
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