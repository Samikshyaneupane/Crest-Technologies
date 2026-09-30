import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[650px] w-full items-center justify-center overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <Image
        src="/about/aboutHero.webp"
        alt="Crest Technologies students"
        fill
        priority
        className="object-cover"
        sizes="120vw"
      />

      {/* WHITE OVERLAY */}
      <div className="absolute inset-0 bg-white/60" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-col items-center justify-center px-6 text-center">

        {/* HEADING */}
        <ScrollReveal>
          <h1 className="text-[34px] font-bold leading-[1.15] text-[#252525] md:text-[46px] lg:text-[52px]">
            Empowering Nepal&apos;s{" "}
            <span className="text-[#2478E8]">IT Future</span>
          </h1>
        </ScrollReveal>

        {/* DESCRIPTION */}
        <ScrollReveal delay={150}>
          <p className="mt-7 max-w-[850px] px-2 text-[16px] font-normal leading-[1.5] text-[#464646] sm:text-[18px] md:text-[22px] lg:text-[24px]">
            First Nepali IT institution accredited by IAO, delivering
            <br className="hidden md:block" />
            globally recognized certifications.
          </p>
        </ScrollReveal>

        {/* IAO LOGO */}
        <ScrollReveal delay={300} direction="scale">
          <div className="relative mt-20 h-[95px] w-[95px] md:h-[125px] md:w-[125px]">
            <Image
              src="/about/iao.png"
              alt="IAO Accredited Institution"
              fill
              className="object-contain"
              sizes="125px"
            />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}