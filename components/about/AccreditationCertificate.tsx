import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function AccreditationCertificate() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        
        <ScrollReveal direction="scale">
          <div className="relative mx-auto aspect-[1.35/1] w-full max-w-[900px]">
            <Image
              src="/about/IAO certificate.webp"
              alt="Crest Technologies IAO Certificate of International Accreditation"
              fill
              className="object-contain"
              sizes="(max-width: 1000px) 100vw, 900px"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="mx-auto mt-10 max-w-[900px] text-center t font-bold   md:text-[34px]  text-[19px] md:text-[22px] lg:text-[28px] leading-[100%] tracking-[0] text-[#292929]">
            100% compliance with IAO standards in Academic
            <br className="hidden md:block" />
            &amp; Institutional Performance.
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}