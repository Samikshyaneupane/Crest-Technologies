import Image from "next/image";
import { BadgePercent, ContactRound } from "lucide-react";

export default function CorporateStats() {
  return (
    <section className="w-full bg-[#8FC3F1]">
      <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-center gap-10 px-8 py-16 md:grid-cols-3 lg:px-16">

        {/* 200+ Happy Corporates */}
        <div className="flex items-center justify-center gap-5">
          
          {/* Profile Images */}
          <div className="flex -space-x-5">
            <div className="relative h-[70px] w-[70px] overflow-hidden rounded-full border-2 border-white">
              <Image
                src="/corporate1.jpg"
                alt="Corporate client"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[70px] w-[70px] overflow-hidden rounded-full border-2 border-white">
              <Image
                src="/corporate2.jpg"
                alt="Corporate client"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[70px] w-[70px] overflow-hidden rounded-full border-2 border-white">
              <Image
                src="/corporate3.jpg"
                alt="Corporate client"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-[34px] font-bold leading-none text-black">
              200+
            </h3>

            <p className="mt-3 text-[22px] text-[#07175C]">
              Happy Corporates
            </p>
          </div>
        </div>

        {/* 98% Satisfaction Rate */}
        <div className="flex items-center justify-center gap-5">
          <BadgePercent
            size={78}
            strokeWidth={2}
            className="shrink-0 text-[#07175C]"
          />

          <div>
            <h3 className="text-[34px] font-bold leading-none text-black">
              98%
            </h3>

            <p className="mt-3 text-[22px] text-[#07175C]">
              Satisfaction Rate
            </p>
          </div>
        </div>

        {/* 50+ Happy Customers */}
        <div className="flex items-center justify-center gap-5">
          <ContactRound
            size={78}
            strokeWidth={2}
            className="shrink-0 text-[#07175C]"
          />

          <div>
            <h3 className="text-[34px] font-bold leading-none text-black">
              50+
            </h3>

            <p className="mt-3 text-[22px] text-[#07175C]">
              Happy Customers
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}