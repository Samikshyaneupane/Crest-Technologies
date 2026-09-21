import Image from "next/image";
import Link from "next/link";

const teamCourses = [
  {
    title: "AI & Machine Learning\nTraining",
    image: "/ai.png",
  },
  {
    title: "Cloud Computing\nCertification",
    image: "/empower-2.png",
  },
  {
    title: "Cybersecurity\nSpecializations",
    image: "/empower-3.png",
  },
  {
    title: "Programming Languages\n(python, Java, Etc.)",
    image: "/empower-4.png",
  },
  {
    title: "Data Science & Analytics",
    image: "/empower-5.png",
  },
  {
    title: "Web Development &\nDesign",
    image: "/empower-5.png",
  },
  {
    title: "DevOps & Cloud Architecture",
    image: "/empower-6.png",
  },
  {
    title: "Mobile App Development",
    image: "/empower-7.png",
  },
];

export default function EmpowerTeams() {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-[1500px] px-4 lg:px-8">

        {/* TITLE */}
        <h2 className="mb-12 text-center text-[36px] font-bold text-[#001B62] md:text-[42px]">
          How We Empower Your Teams
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {teamCourses.map((course) => (
            <div
              key={course.title}
              className="flex min-h-[275px] flex-col items-center justify-between bg-[#EEF9FA] px-5 py-6"
            >
              {/* IMAGE */}
              <div className="flex h-[150px] w-full items-center justify-center">
                <Image
                  src={course.image}
                  alt={course.title.replace("\n", " ")}
                  width={180}
                  height={150}
                  loading="lazy"
                  className="h-[135px] w-auto object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="whitespace-pre-line text-center text-[19px] font-bold leading-[1.35] text-[#001B62] md:text-[21px]">
                {course.title}
              </h3>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/courses"
            prefetch={false}
            className="rounded-full bg-[#1478F2] px-7 py-2.5 text-[17px] font-medium text-white transition hover:bg-[white] hover:text-[#1478F2] border-2 border-[#3B7DDE]"
          >
            View All Courses
          </Link>
        </div>

      </div>
    </section>
  );
}