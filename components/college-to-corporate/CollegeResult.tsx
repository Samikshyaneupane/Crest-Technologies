import Image from "next/image";

export default function CollegeResult() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid min-h-[600px] max-w-[1500px] grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-[60%_40%] lg:px-10">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-[#00135C] font-bold text-3xl md:text-4xl lg:text-5xl">
            The Result?
          </h2>

          {/* YELLOW LINE */}
          <div className="mt-7 h-[7px] w-[245px] bg-[#FFC800]" />

          <p className="mt-14 max-w-[850px] text-[18px] leading-[1.55] text-black md:text-[21px]">
          Graduates of the CToC program don't just learn—they transform. They leave with the skills, confidence, and industry understanding required to transition seamlessly from student life to professional success in the tech world.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[360px] w-full max-w-[500px] overflow-hidden">
            <Image
              src="/college-to-corporate/result.jpg"
              alt="CToC graduate receiving certificate"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-200 ease-in-out "
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}