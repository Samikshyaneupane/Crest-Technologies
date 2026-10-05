"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CorporateBanner() {
  const router = useRouter();

  const handleExploreMore = () => {
    router.push("/college-to-corporate");
  };

  return (
    // OUTER AREA - creates left/right margin
    <section className="w-full bg-[#F5F6F7] px-4">
      
      {/* BLUE BANNER */}
      <div className="relative mx-auto overflow-hidden bg-[#0B1F5C]">
        <div className="mx-auto flex h-[190px] items-center gap-8 px-2">

          {/* Girl Image */}
          <div className="relative hidden h-[180px] w-[300px] shrink-0 self-end sm:block translate-x-[-20px]">
            <Image
              src="/banner.png"
              alt="Student"
              fill
              className="object-contain object-bottom"
            />
          </div>

          {/* Heading */}
          <div className="flex-1">
            <h2
              className="
                text-center
                text-[30px]
                font-bold
                leading-[44px]
                tracking-[0%]
                text-[#99CDFF]
                md:text-[40px]
                lg:absolute
                lg:left-[16%]
                lg:top-[17%]
                lg:w-[511px]
                lg:text-start
                lg:text-[50px]
              "
            >
              Join our College to
              <br />
              Corporate Program
            </h2>
          </div>

          {/* Subtext */}
          <div
            className="
              px-5
              text-center
              text-[40px]
      5        font-normal
              leading-[1.12]
              tracking-[0]
              text-[#FFFFFF]
              lg:absolute
              lg:left-[55%]
              lg:top-[36%]
              lg:w-[330px]
              lg:text-start
              lg:text-[21px]
            "
          >
            Exclusive for Students and
            <br />
            Recent Graduates
          </div>

          {/* Explore More Button */}
          <div className="shrink-0 px-4">
            <button
              type="button"
              onClick={handleExploreMore}
              className="
                group
                relative
                z-0
                inline-flex
                h-10
                min-w-20
                items-center
                justify-center
                gap-2
                overflow-hidden
                whitespace-nowrap
                rounded-2xl
                bg-[#FFCC00]
                px-10
                py-6
                text-center
                text-[24px]
                font-normal
                leading-[100%]
                tracking-[0]
                text-black
                transition-colors
                hover:border
                hover:border-blue-200
                hover:bg-[#00135C]
                hover:text-[#99CDFF]
                lg:absolute
                lg:left-[80%]
                lg:top-[35%]
                lg:h-[53px]
                lg:w-[218px] lg:px-[6px] lg:py-[12px]
              "
            >
              Explore More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}