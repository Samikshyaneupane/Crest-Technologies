import Image from "next/image";
import type { CourseData } from "@/Data/courses";

type Props = {
  course: CourseData;
};

export default function CourseOverview({ course }: Props) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid min-h-[600px] max-w-[1500px] grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-[1.5fr_0.5fr] lg:px-8">

        {/* LEFT SIDE */}
        <div className="max-w-[900px]">

          {/* YELLOW LINE */}
          <div className="mb-4 h-[6px] w-[150px] bg-[#FFC800]" />

          {/* TITLE */}
          <h2 className="text-[38px] font-bold leading-tight text-black md:text-[30px]">
            Course Overview
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-7 text-[12px] leading-[1.55] text-[#333] md:text-[18px]">
            {course.overview}
          </p>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative h-[380px] w-[500px]">
            <Image
              src="/Courses/course-overview.svg"
              alt="Course Overview"
              fill
              loading="lazy"
              className="object-contain"
              sizes="(max-width: 1024px) 80vw, 500px"
            />
          </div>
        </div>

      </div>
    </section>
  );
}