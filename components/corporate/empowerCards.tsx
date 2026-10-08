import Image from "next/image";
import Link from "next/link";

const teamCourses = [
  {
    title: "Ai & Machine Learning\nTraining",
    image: "/corporate/empower-1.png",
  },
  {
    title: "Cloud Computing\nCertification",
    image: "/corporate/empower-2.png",
  },
  {
    title: "Cybersecurity\nSpecializations",
    image: "/corporate/empower-3.png",
  },
  {
    title: "Programming Languages\n(python, Java, Etc.)",
    image: "/corporate/empower-4.png",
  },
  {
    title: "Data Science & Analytics",
    image: "/corporate/empower-5.png",
  },
  {
    title: "Web Development &\nDesign",
    image: "/corporate/empower-6.png",
  },
  {
    title: "DevOps & Cloud Architecture",
    image: "/corporate/empower-7.png",
  },
  {
    title: "Mobile App Development",
    image: "/corporate/empower-8.png",
  },
];

export default function EmpowerTeams() {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-[1500px] px-4 lg:px-8">
{/* TITLE */}
<h2 className="text-center text-[#00135C] font-bold text-3xl md:text-4xl lg:text-5xl mt-[30px] mb-[45px]">
  How We Empower Your Teams
</h2>

{/* CARDS */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[17px] w-full mt-[5px]">

  {teamCourses.map((course) => (
    <div
      key={course.title}
      className="
        w-full 
        h-[280px]
        bg-[#EEF9FA]
        flex flex-col
        items-center
        justify-between
        p-5
        overflow-hidden
      "
    >
      {/* IMAGE */}
      <div className="flex flex-1 w-full items-center justify-center">
        <Image
          src={course.image}
          alt={course.title.replace("\n", " ")}
          width={180}
          height={150}
          loading="lazy"
          className="h-[135px] w-[180px] object-contain"
        />
      </div>

      {/* TITLE */}
      <h3
        className="
          w-full
          min-h-[75px]
          flex
          items-center
          justify-center
          text-center
          font-bold
          text-lg
          md:text-xl
          lg:text-2xl
          leading-tight
          text-[#00135C]
          whitespace-pre-line
        "
      >
        {course.title}
      </h3>
    </div>
  ))}
</div>

        {/* BUTTON */}
        <div className=" group flex mt-14  justify-center">
          <Link
            href="/courses"
            prefetch={false}
            className="z-0 group text-[25px] relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 h-10 text-small gap-2 [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover bg-[#1A71E9] rounded-3xl px-6 py-6 hover:bg-transparent hover:border hover:border-blue-500 text-white hover:text-blue-500 group-hover:-translate-y-[2px] group-hover:scale-[1.05]"
          >
            View All Courses
          </Link>
        </div>

      </div>
    </section>
  );
}