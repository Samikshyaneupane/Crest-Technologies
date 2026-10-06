"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const partners = [
  {
    name: "WaterComm",
    image: "/home/partners/watercomm.svg",
  },
  {
    name:"PlasmaTech",
    image:"/home/partners/plasmatech.png",
  },
  {
    name:"Virtuosway",
    image:"/home/partners/virtuosway.png",
  },
  {
    name:"Yuwasoft",
    image:"/home/partners/yuwasoft.svg",
  },
  {
    name:"Eeposit",
    image:"/home/partners/eeposit.png",
  }
 
];

export default function HiringPartners() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => {
        if (current >= partners.length - 1) {
          return 0;
        }

        return current + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="overflow-hidden bg-white py-16">

      {/* TITLE */}
      <h2 className="font-normal text-[35px] md:text-[40px] leading-[40px] tracking-[0] mb-[25px] text-center ">
        Our Hiring Partners
      </h2>

      {/* SLIDER VIEW */}
      <div className="mx-auto max-w-[1100px] overflow-hidden">

        {/* SLIDING TRACK */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 220}px)`,
          }}
        >
          {/* FIRST COPY */}
          {partners.map((partner, partnerIndex) => (
            <PartnerLogo
              key={`first-${partnerIndex}`}
              partner={partner}
            />
          ))}

          {/* SECOND COPY */}
          {partners.map((partner, partnerIndex) => (
            <PartnerLogo
              key={`second-${partnerIndex}`}
              partner={partner}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


/* PARTNER LOGO */

function PartnerLogo({
  partner,
}: {
  partner: (typeof partners)[number];
}) {
  return (
    <div className="flex w-[280px] shrink-0 items-center justify-center px-8">
      <Image
        src={partner.image}
        alt={partner.name}
        width={280}
        height={140}
        className="h-[140px] w-[240px] object-contain"
      />
    </div>
  );
}