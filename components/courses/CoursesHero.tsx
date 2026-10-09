import Image from "next/image";
import Link from "next/link";

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
          <Link href="/">Home</Link> / Courses
        </p>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-[1200px] text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
            Our Courses
          </h1>

          <p className="mx-auto max-w-[850px] text-lg md:text-xl">
            Explore our industry-focused courses and develop
            the skills you need to advance your career.
          </p>
        </div>
      </div>
    </section>
  );
}