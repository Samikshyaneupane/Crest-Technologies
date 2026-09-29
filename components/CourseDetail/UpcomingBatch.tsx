import Image from "next/image";
import type { CourseData } from "@/Data/courses";

type Props = {
  course: CourseData;
};

export default function UpcomingBatch({ course }: Props) {
  return (
    <section className="relative w-full bg-white pb-10">
      <div className="mx-auto max-w-[1400px] px-6">

        {/* CARD */}
        <div
          className="
            relative
            z-30
            mx-auto
            max-w-[1150px]
            -translate-y-[100px]
            border
            border-[#333]
            bg-white
            px-8
            py-12
            md:px-12
            md:py-14
          "
        >
          {/* TITLE */}
          <h2 className="text-center text-[30px] font-bold text-[#001B69] md:text-[36px]">
            Upcoming New Batch
          </h2>

          {/* DETAILS */}
          <div className="mx-auto mt-10 grid max-w-[820px] grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">

            {/* DATE */}
            <div className="flex items-center gap-4">
              <Image
                src="/Courses/date.svg"
                alt="Date"
                width={42}
                height={42}
                className="h-[42px] w-[42px] shrink-0 object-contain"
              />

              <div>
                <p className="text-[20px] font-bold text-[#333]">
                  Date
                </p>

                <p className="mt-1 whitespace-nowrap text-[16px] text-[#222]">
                  {course.date}
                </p>
              </div>
            </div>

            {/* SCHEDULE */}
            <div className="flex items-center gap-4">
              <Image
                src="/Courses/schedule.svg"
                alt="Schedule"
                width={42}
                height={42}
                className="h-[42px] w-[42px] shrink-0 object-contain"
              />

              <div>
                <p className="text-[20px] font-bold text-[#333]">
                  Schedule
                </p>

                <p className="mt-1 whitespace-nowrap text-[16px] text-[#222]">
                  {course.schedule}
                </p>
              </div>
            </div>

            {/* DURATION */}
            <div className="flex items-center gap-4">
              <Image
                src="/Courses/duration.svg"
                alt="Duration"
                width={42}
                height={42}
                className="h-[42px] w-[42px] shrink-0 object-contain"
              />

              <div>
                <p className="text-[20px] font-bold text-[#333]">
                  Duration
                </p>

                <p className="mt-1 whitespace-nowrap text-[16px] text-[#222]">
                  {course.duration}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}