"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const images = [
  "/about/who.webp",
  "/about/who2.webp",
  "/about/who3.webp",
];

export default function WhoWeAre() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4 font-myriad sm:px-6 lg:px-8">

        {/* TITLE */}
        <ScrollReveal>
          <h2 className="text-[30px] font-bold leading-tight text-[#292929] md:text-[36px]">
            Who We Are
          </h2>
        </ScrollReveal>

        {/* CONTENT */}
        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">

          {/* LEFT */}
          <div>
            <ScrollReveal delay={100}>
              <p className="text-[15px] leading-[1.55] text-[#303030] md:text-[18px]">
                Crest Technologies is the first Nepali IT institution accredited
                by the International Accreditation Organization (IAO), offering
                globally recognized certifications that open doors to exciting
                career opportunities. We are dedicated to empowering Nepalese
                youth in the IT sector by providing them with relevant knowledge
                and practical experience.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-6 text-[15px] leading-[1.55] text-[#303030] md:text-[18px]">
                Our programs aspire to empower Nepalese youths in the IT sector
                by furnishing them with essential tools for success. Through a
                comprehensive approach encompassing knowledge, practical
                application, project engagement, exposure, and guidance, these
                individuals are fortified to thrive in the dynamic realm of
                technology. By instilling pertinent skills and industry
                insights, they develop the confidence and capabilities required
                to excel in their professional journeys. Emphasizing not only
                theoretical understanding but also hands-on application, the
                program enables participants to gain practical experience in
                authentic IT projects.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300} direction="scale">
              <Link
                href="/courses"
                prefetch={false}
                className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 h-10 gap-2 [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover mt-6 sm:mt-8 font-normal rounded-full bg-[#1A71E9] text-white text-base sm:text-lg md:text-xl px-6 py-3 sm:px-10 sm:py-6 hover:bg-transparent hover:border-2 hover:border-[#1A71E9] hover:text-[#1A71E9]"
              >
                Explore Our Programs
              </Link>
            </ScrollReveal>
          </div>

          {/* RIGHT */}
          <div>
            <ScrollReveal direction="left" delay={150}>
              <div className="relative h-[330px] w-full overflow-hidden rounded-[10px] sm:h-[380px] lg:h-[455px]">
                <Image
                  src={images[current]}
                  alt="Crest Technologies training"
                  fill
                  className="object-cover transition-opacity duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* DOTS */}
              <div className="mt-4 flex justify-center gap-6">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`View image ${index + 1}`}
                    onClick={() => setCurrent(index)}
                    className={`h-[7px] w-[7px] rounded-full transition-all ${
                      current === index
                        ? "bg-[#444]"
                        : "bg-[#c5c5c5]"
                    }`}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}