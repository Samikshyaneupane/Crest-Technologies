import Image from "next/image";

export default function CollegeIntro() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid min-h-[600px] max-w-[1800px] grid-cols-1 items-center gap-8 px-6 py-8 lg:grid-cols-[55%_45%] lg:px-6 lg:py-10">

        {/* LEFT SIDE */}
        <div>
          {/* MAIN TITLE */}
          <h2 className="max-w-[600px] text-[34px] font-bold leading-[1.08] tracking-tight text-[#001B69] md:text-[38px] lg:text-[42px]">
            College to Corporate
            <br />
            (CToC) Program
          </h2>

          {/* YELLOW LINE */}
          <div className="mt-7 h-[6px] w-[245px] bg-[#FFC400]" />

          {/* SUBTITLE */}
          <h3 className="mt-8 text-[20px] font-bold leading-tight text-black md:text-[22px] lg:text-[24px]">
            Empowering Students for Real-World Tech Careers
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-[820px] text-[17px] leading-[1.55] text-black md:text-[18px] lg:text-[20px]">
            The CToC Program is a dynamic training initiative designed to
            prepare students from post-10th graders to undergraduates and
            software college learners for the demands of the modern job
            market. Offered in both online and physical classroom formats, the
            program blends technical training, cognitive skill-building, and
            communication development into one comprehensive, career-focused
            course.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative h-[320px] w-full max-w-[600px] md:h-[380px] lg:h-[430px]">
            <Image
              src="/college-to-corporate/collegeIntro.png"
              alt="College building"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}