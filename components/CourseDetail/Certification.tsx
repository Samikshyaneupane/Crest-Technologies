import Image from "next/image";
import type { CourseData } from "@/Data/courses";

type Props = {
  course: CourseData;
};

export default function Certification({ course }: Props) {
  return (
    <section className="w-full bg-[#DCEEFF]">
      <div className="mx-auto grid min-h-[500px] max-w-[1400px] grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-20">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">

          {/* HEADING */}
          <h2 className="text-3xl font-bold leading-none tracking-[0%] text-black md:text-4xl lg:text-5xl">
            Certification
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-11 max-w-[780px] font-myriad text-[22px] leading-[1.55] text-[#222] md:text-[25px]">
            Receive a professional{" "}
            <span className="font-bold">
              Course Completion Certificate and badge
            </span>{" "}
            Accredited by IAO
          </p>

          {/* IAO ACCREDITATION */}
          <div className="mt-20 flex items-center gap-6">

            {/* IAO LOGO */}
            <div className="relative h-[90px] w-[90px] shrink-0 md:h-[100px] md:w-[100px]">
              <Image
                src="/iao-seal.png"
                alt="IAO Accreditation"
                fill
                className="object-contain"
                sizes="100px"
              />
            </div>

            {/* VERTICAL LINE */}
            <div className="h-[95px] w-[3px] bg-[#001B69]" />

            {/* TEXT */}
            <div className="text-md font-normal text-[#464646]">
              <p>Nepal&apos;s First</p>
              <p>IAO Accredited</p>
              <p>Institution</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - COURSE SPECIFIC CERTIFICATE */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative h-[300px] w-full max-w-[520px] md:h-[470px] lg:h-[450px]">

            <Image
              src={course.certificateImage}
              alt={`${course.title} certificate`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

          </div>
        </div>

      </div>
    </section>
  );
}