import Image from "next/image";
import Link from "next/link";

export default function CorporateBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0B1F5C]">
      <div className="mx-auto flex h-[200px] max-w-9xl items-center gap-8  px-3">

        {/* Girl Image */}
        <div className="relative hidden h-full w-[250px] shrink-0 self-end sm:block ">
          <Image
            src="/banner.png"
            alt="Student"
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* Heading */}
        <div className="flex-1">
          <h2 className="text-2xl font-extrabold leading-tight text-[#99CDFF] sm:text-5xl">
            Join our College to
            <br />
            Corporate Program
          </h2>
        </div>

        {/* Subtext */}
        <div className="hidden shrink-0 text-base font-medium leading-snug font :semi-bold text-white md:block opacity:1 transform-none">
          Exclusive for Students and
          <br />
          Recent Graduates
        </div>

        {/* Explore Button */}
        <div className="shrink-0 px-4">
          <Link
            href="/apply"
            className="inline-block whitespace-nowrap rounded-md bg-[#FFCC00]  px-7 py-2.5 text-base font-semibold text-[#0B1F5C] transition duration-200 hover:bg-[#0B1F5C] hover:text-[#99CDFF] hover:border hover:border-white"
          >
            Explore More
          </Link>
        </div>

      </div>
    </section>
  );
}
