"use client";

import { FormEvent } from "react";

export default function ContactEnquiry() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">

        {/* LEFT - FORM */}
        <div>
          <h2 className=" leading-tight font-bold leading-[1.2] tracking-[0] text-black text-[25px] md:text-[40px] lg:text-[48px] mb-6 md:mb-8 ">
            Send us your enquiry
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-10 max-w-[620px]"
          >
            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="mb-5 h-[62px] w-full rounded-[9px] border-2 border-[#B5B5B5] bg-white px-5 text-[18px] text-black outline-none transition placeholder:text-[#9AA4B8] focus:border-[#2478E8]"
            />

            {/* NUMBER */}
            <input
              type="tel"
              name="phone"
              placeholder="Number"
              required
              className="mb-5 h-[62px] w-full rounded-[9px] border-2 border-[#B5B5B5] bg-white px-5 text-[18px] text-black outline-none transition placeholder:text-[#9AA4B8] focus:border-[#2478E8]"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="mb-5 h-[62px] w-full rounded-[9px] border-2 border-[#B5B5B5] bg-white px-5 text-[18px] text-black outline-none transition placeholder:text-[#9AA4B8] focus:border-[#2478E8]"
            />

            {/* MESSAGE */}
            <div className="relative">
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                className="min-h-[190px] w-full resize-none rounded-[9px] border-2 border-[#B5B5B5] bg-white px-5 py-4 pr-28 text-[18px] text-black outline-none transition placeholder:text-[#555555] focus:border-[#2478E8]"
              />

              <span className="pointer-events-none absolute right-5 top-4 text-[16px] text-[#B5B5B5]">
                (Optional)
              </span>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className=" text-[20px] z-0 group relative box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 h-10 text-small gap-2 [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover flex justify-center items-center mt-[30px] bg-[#1A71E9] text-white rounded-3xl py-3 px-6 transition-colors duration-200 w-[218px] hover:text-[#1557b5] hover:bg-transparent hover:border-2 hover:border-[#1557b5]"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT - GOOGLE MAP */}
        <div className="flex items-start justify-center lg:pt-3">
          <div className="h-[600px] w-full max-w-[620px] overflow-hidden">
            <iframe
              title="Crest Technologies Location"
              src="https://www.google.com/maps?q=Crest%20Technologies%20Old%20Baneshwor%20Kathmandu%20Nepal&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
        </div>

      </div>
    </section>
  );
}