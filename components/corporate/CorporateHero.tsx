import Image from "next/image";

export default function CorporateHero() {
  return (
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

          <p className="mt-10 mb-5 text-[18px] leading-[1.55] text-[#6d6d6d]">
            Comprehensive upskilling and talent solutions for
            <br />
            organization of all sizes
          </p>

          <button
            type="button"
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
  );
}