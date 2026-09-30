import Image from "next/image";

export default function StayAhead() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-12 px-6 py-24 lg:flex-row lg:px-6">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-[48%]">
          <h2 className="text-[#00135C] font-bold leading-tight tracking-tight text-1xl md:text-3xl lg:text-4xl xl:text-4xl max-w-[450px]">
            Stay Ahead with Next-
            <br />
            Gen Skills
          </h2>

          {/* YELLOW LINE */}
          <div className="w-[100px] sm:w-[120px] md:w-[151px] h-[4px] sm:h-[5px] md:h-[6px] bg-[#FFCC00] mt-4 sm:mt-5 md:mt-7" />

          {/* DESCRIPTION */}
          <p className="mt-4 sm:mt-5 md:mt-7 font-normal text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed md:leading-relaxed tracking-tight">
            To stay competitive in today's fast-paced world, it's essential to embrace change and innovation. Our training programs focus on emerging technologies that are shaping the future from AI and data science to mobile app development and automation. With flexible mobile learning capabilities, your team can access high-quality content anytime, anywhere, making it easier than ever to upskill and stay ahead in the tech industry.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-full justify-center lg:w-[42%] lg:justify-end">
          <div className="relative h-[450px] w-full max-w-[500px] overflow-hidden md:h-[400px]">
            <Image
              src="/corporate/stayahead.jpg"
              alt="Corporate technology training"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 570px"
            />
          </div>
        </div>

      </div>
    </section>
  );
}