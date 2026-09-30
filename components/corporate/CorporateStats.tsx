import Image from "next/image";

export default function CorporateStats() {
  return (
    <section className="w-full bg-[#99CDFF] ">
      <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-center gap-8 px-8 py-8 md:grid-cols-3 mb-[100px] lg:px-12">

        {/* 200+ HAPPY CORPORATES */}
        <div className="flex items-center justify-center gap-4">
          {/* happy corporates image */}
          <div className="relative h-[80px] w-[150px] shrink-0">
            <Image
              src="/happycorporates.png"
              alt="Happy corporate clients"
              fill
              className="object-contain"
              sizes="180px"
            />
          </div>

          <div>
            <h3 className="font-bold text-2xl md:text-3xl leading-none text-black">
              200+
            </h3>

            <p className="mt-2 text-[16px] text-[#071A68]">
              Happy Corporates
            </p>
          </div>
        </div>

        {/* 98% SATISFACTION */}
        <div className="flex items-center justify-center gap-4">
          <div className="relative h-[80px] w-[80px] shrink-0">
            <Image
              src="/satisfaction.svg"
              alt="Satisfaction rate"
              fill
              className="object-contain"
              sizes="60px"
            />
          </div>

          <div>
            <h3 className="font-bold text-2xl md:text-3xl leading-none text-black">
              98%
            </h3>

            <p className="mt-2 text-[16px] text-[#071A68]">
              Satisfaction Rate
            </p>
          </div>
        </div>

        {/* 50+ HAPPY CUSTOMERS */}
        <div className="flex items-center justify-center gap-4">
          <div className="relative h-[80px] w-[82px] shrink-0">
            <Image
              src="/hcustomers.svg"
              alt="Happy customers"
              fill
              className="object-contain"
              sizes="60px"
            />
          </div>

          <div>
            <h3 className="font-bold text-2xl md:text-3xl leading-none text-black">
              50+
            </h3>

            <p className="mt-2 text-[16px] text-[#071A68]">
              Happy Customers
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}