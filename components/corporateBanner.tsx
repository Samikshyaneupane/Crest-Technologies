"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CorporateBanner() {
  const router = useRouter();

  const handleExploreMore = () => {
    router.push("/college-to-corporate");
  };

  return (
    <section className="relative overflow-hidden bg-[#0B1F5C]">
      <div className="mx-auto  flex h-[200px] max-w-9xl items-center gap-8 px-3 ">

        {/* Girl Image */}
        <div className="relative hidden h-full w-[250px] shrink-0 self-end sm:block">
          <Image
            src="/banner.png"
            alt="Student"
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* Heading */}
        <div className="flex-1">
          <h2 className="font-bold text-center lg:text-start text-[30px] md:text-[40px] lg:text-[42px] leading-[44px] tracking-[0%] text-[#99CDFF] lg:w-[511px] lg:absolute lg:left-[16%] top-[17%]">
            Join our College to
            <br />
            Corporate Program
          </h2>
        </div>

{/* Subtext */}
<div
  className="
    lg:absolute text-center lg:text-start lg:left-[55%] lg:top-[36%] px-5 font-normal text-[15px] lg:text-[21px] leading-[1.12] tracking-[0] text-[#FFFFFF]  lg:w-[330px]
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
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 h-10 gap-2 [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover px-10 py-6 lg:absolute text-center lg:text-start lg:top-[35%] lg:left-[80%] lg:w-[218px] lg:h-[53px] rounded-2xl lg:px-[6px] lg:py-[12px] bg-[#FFCC00] text-black font-normal text-[24px] leading-[100%] tracking-[0] transition-colors hover:bg-[#00135C] hover:border hover:border-blue-200 hover:text-[#99CDFF]"
          >
            Explore More
          </button>
        </div>

      </div>
    </section>
  );
}