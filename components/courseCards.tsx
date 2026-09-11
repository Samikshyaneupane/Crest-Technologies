 "use client";
import Link from "next/link";

const courses = [
  {
    title: "Data Science/AI/ML",
    duration: "15 weeks",
    mode: "Mentor-led online class",
  },
  {
    title: "Web Development",
    duration: "12 weeks",
    mode: "Mentor-led online class",
  },
  {
    title: "UI/UX Design",
    duration: "10 weeks",
    mode: "Mentor-led online class",
  },
  {
    title: "Cyber Security",
    duration: "14 weeks",
    mode: "Mentor-led online class",
  },
  {
    title: "Cloud Computing",
    duration: "12 weeks",
    mode: "Mentor-led online class",
  },
  {
    title: "Digital Marketing",
    duration: "8 weeks",
    mode: "Mentor-led online class",
  },
 
];

export default function CourseCards() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">

        {courses.map((course) => (
          <div
            key={course.title}
            className="flex min-h-[260px] flex-col justify-between rounded-2xl bg-[#DCEBFB] p-6"
          >

            {/* Course Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F5C]">
                {course.title}
              </h2>

              <div className="mt-6 space-y-3 text-sm text-[#333333]">

                <div className="flex items-center gap-3">
                  <span className="text-[#3B7DDE]">
                    📅
                  </span>
                  <span>{course.duration}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#3B7DDE]">
                    ▶️
                  </span>
                  <span>{course.mode}</span>
                </div>

              </div>
            </div>


            {/* Buttons */}
            <div className="mt-8 flex gap-3">

              <Link
                href="#"
                className="flex-1 rounded-full border border-[#3B7DDE] bg-white py-2.5 text-center text-sm font-medium text-[#3B7DDE] hover:bg-[#F0F6FF]"
              >
                View
              </Link>

              <Link
                href="/registration"
                className="flex-1 rounded-full bg-[#3B7DDE] py-2.5 text-center text-sm font-medium text-white hover:bg-[#2866C4]"
              >
                Apply
              </Link>

            </div>

          </div>
        ))}
          </div>
        {/* Discover More Button */}
      
<div className="flex justify-center pt-16">
  <Link
    href="/courses"
    className="group inline-flex rounded-md border border-[#3B7DDE] bg-[#3B7DDE] px-5 py-2 text-sm font-semibold text-white transition duration-300"
  >
    <span className="text-white group-hover:text-[#3B7DDE]">
      Discover More
    </span>
  </Link>
</div>
    </section>
  );
}
