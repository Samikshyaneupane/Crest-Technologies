import Image from "next/image";

export default function CollegeResult() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid w-full min-h-[600px] max-w-[1500px] grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-[60fr_40fr] lg:px-10">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-[#00135C] font-bold text-3xl md:text-4xl lg:text-5xl translate-x-[-25px]">
            The Result?
          </h2>

          {/* YELLOW LINE */}
          <div className="mt-7 h-[7px] w-[220px] bg-[#FFC800] mb-[30px] translate-x-[-25px]" />

          <p className="font-normal leading-[130%] tracking-[0%] text-lg md:text-xl lg:text-2xl md:max-w-[450px] lg:max-w-[682px] translate-x-[-25px]">
          Graduates of the CToC program don't just learn—they transform. They leave with the skills, confidence, and industry understanding required to transition seamlessly from student life to professional success in the tech world.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[300px] w-full max-w-[380px] overflow-hidden translate-x-[-25px]">
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