import Image from "next/image";

export default function CoursesHero() {
  return (
    <section className="font-myriad relative h-[550px] w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/Courses/courseHero.webp"
        alt="CREST Technologies Courses"
        fill
        priority
        className="object-cover grayscale"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* BREADCRUMB */}
      <div className="absolute left-5 top-4 z-10">
        <p className="text-[20px] font-medium text-white md:text-[24px]">
          Home / Courses
        </p>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-[1200px] text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Our Courses
          </h1>

          <p className="text-lg md:text-xl">
        Master the skills to build fast, responsive, and scalable web applications using ReactJS. This beginner-
        <br/>
        friendly to advanced course offers hands-on experience, expert mentorship, and career support to make
        <br/> you job-ready in just 10 weeks.
          </p>

   
        
        </div>
      </div>
    </section>
  );
}