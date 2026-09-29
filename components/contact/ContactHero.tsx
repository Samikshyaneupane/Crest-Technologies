"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const images = [
 "/contact/contact.webp",
 "/contact/contact2.webp",
 "/contact/contact3.webp"
];

export default function ContactHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="font:myaid w-full bg-[#DCEEFF]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:px-10 lg:py-24">

        {/* LEFT */}
        <div>
          <h1 className="md:text-[68px] lg:text-[82px]flex flex-col gap-[20px] lg:gap-[28px] text-[#00135C] font-bold leading-[70px] text-[45px] md:text-[60px] lg:text-[76px]">
            Contact Us
          </h1>

          <div className="mt-12 max-w-[650px] space-y-8">

            {/* PHONE */}
            <div className="bg-white px-4 py-4">
              <div className="flex items-center gap-3 ">
                <div className="flex h-[40px] w-[40px] items-center justify-center bg-[#DAEBFF]">
                  <Phone size={26} strokeWidth={2} />
                </div>

                <h2 className="text-[24px] font-bold text-black">
                  Phone Number
                </h2>
              </div>

              <p className="mt-7 text-[20px] text-[#666666]">
                +977-9857084388
              </p>
            </div>

            {/* EMAIL */}
            <div className="bg-white px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-[40px] w-[40px] items-center justify-center bg-[#DCEEFF]">
                  <Mail size={27} strokeWidth={2} />
                </div>

                <h2 className="text-[24px] font-bold text-black">
                  E-mail
                </h2>
              </div>

              <p className="mt-7 text-[20px] text-[#666666]">
                info@cresttechhub.com
              </p>
            </div>

            {/* ADDRESS */}
            <div className="bg-white px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-[40px] w-[40px] items-center justify-center bg-[#DCEEFF]">
                  <MapPin size={27} strokeWidth={2} />
                </div>

                <h2 className="text-[24px] font-bold text-black">
                  Address
                </h2>
              </div>

              <p className="mt-7 text-[20px] text-[#666666]">
                Old Baneshwor, Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="flex items-center justify-center lg:pt-14">
          <div className="w-full max-w-[500px]">

            <div className="relative h-[500px] w-full overflow-hidden">
              {images.map((image, index) => (
                <Image
                  key={image}
                  src={image}
                  alt="Crest Technologies"
                  fill
                  className={`object-cover transition-opacity duration-700 ${
                    current === index ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              ))}
            </div>

            {/* DOTS */}
            <div className="mt-6 flex justify-center gap-7">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show image ${index + 1}`}
                  onClick={() => setCurrent(index)}
                  className={`h-[7px] w-[7px] rounded-full transition ${
                    current === index
                      ? "bg-[#444444]"
                      : "bg-[#9AA9B5]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}