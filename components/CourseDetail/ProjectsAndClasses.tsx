import { Laptop, Users, CircleCheck } from "lucide-react";
import type { CourseData } from "@/Data/courses";

type Props = {
  course: CourseData;
};

export default function ProjectsAndClasses({ course }: Props) {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 lg:grid-cols-2">

        {/* ================= LEFT - PROJECTS ================= */}
        <div className="flex min-h-[510px] flex-col rounded-[9px] bg-[#1A71E9] px-6 py-10 md:px-10 md:py-12">

          {/* TITLE */}
          <h2 className="text-center text-[26px] font-bold leading-[1.25] text-white md:text-[32px]">
            Hands on Real Projects/
            <br />
            Real-World Projects
          </h2>

          {/* WHITE BOX */}
          <div className="mt-10 flex flex-1 flex-col justify-center bg-white px-5 py-8 md:mt-12 md:px-8">
            <div className="space-y-7">
              {course.projects.map((project) => (
                <div
                  key={project.title}
                  className="flex items-start gap-4"
                >
                  {/* CHECK ICON */}
                  <CircleCheck
                    size={27}
                    strokeWidth={2.2}
                    className="mt-[3px] shrink-0 text-black"
                  />

                  {/* PROJECT TEXT */}
                  <p className="text-[16px] leading-[1.55] text-[#666] md:text-[17px]">
                    <span className="font-medium text-black">
                      {project.title}
                    </span>

                    {project.description && (
                      <>
                        <span className="mx-1 text-[#777]">–</span>
                        {project.description}
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT - CLASS OPTIONS ================= */}
        <div className="flex min-h-[510px] flex-col rounded-[9px] bg-[#2478E8] px-6 py-10 md:px-10 md:py-12">

          {/* TITLE */}
          <h2 className="text-center text-[28px] font-bold text-white md:text-[32px]">
            Class Options
          </h2>

          {/* WHITE BOX */}
          <div className="mt-10 flex flex-1 flex-col justify-center bg-white px-6 py-10 md:mt-[92px] md:px-10">

            <div className="space-y-10">

              {/* =============== LIVE ONLINE CLASS =============== */}
              <div className="flex items-center gap-5 md:gap-6">

                {/* LAPTOP ICON */}
                <div className="flex w-[42px] shrink-0 items-center justify-center">
                  <Laptop
                    size={34}
                    strokeWidth={2}
                    className="text-black"
                  />
                </div>

                {/* TEXT */}
                <div className="min-w-0">
                  <h3 className="text-[17px] font-bold uppercase leading-tight text-black md:text-[19px]">
                    {course.onlineClass.title}
                  </h3>

                  <p className="mt-2 text-[16px] leading-[1.5] text-[#666] md:text-[17px]">
                    {course.onlineClass.description}
                  </p>
                </div>
              </div>

              {/* =============== PHYSICAL CLASS =============== */}
              <div className="flex items-center gap-5 md:gap-6">

                {/* USERS ICON */}
                <div className="flex w-[42px] shrink-0 items-center justify-center">
                  <Users
                    size={36}
                    strokeWidth={2}
                    className="text-black"
                  />
                </div>

                {/* TEXT */}
                <div className="min-w-0">
                  <h3 className="text-[17px] font-bold uppercase leading-tight text-black md:text-[19px]">
                    {course.physicalClass.title}
                  </h3>

                  <p className="mt-2 max-w-[390px] text-[16px] leading-[1.5] text-[#666] md:text-[17px]">
                    {course.physicalClass.description}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}  