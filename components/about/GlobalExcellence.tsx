import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function GlobalExcellence() {
  return (
    <section className="w-full bg-[#001B69] text-white">
      <div className="mx-auto grid min-h-[550px] max-w-[1500px] grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-[1.55fr_0.45fr] lg:pl-20 lg:pr-10 lg:py-14">

        {/* LEFT SIDE */}
        <div>
          <ScrollReveal>
            <h2 className="text-[30px]  md:text-[40px] lg:text-[38px] font-bold leading-[44px] tracking-[0]">
              Globally Recognized Excellence
            </h2>
          </ScrollReveal>

          {/* CONTENT */}
          <div className="mt-8 space-y-5">

            {/* ITEM 1 */}
            <ScrollReveal delay={100}>
              <div className="flex items-start gap-3">
                <CircleCheckBig
                  className="mt-[2px] shrink-0"
                  size={22}
                  strokeWidth={2}
                />

                <p className="text-[16px] leading-[1.4] md:text-[17px]">
                  First Nepali IT Institution accredited by the International
                  Accreditation Organization (IAO).
                </p>
              </div>
            </ScrollReveal>

            {/* ITEM 2 */}
            <ScrollReveal delay={200}>
              <div className="flex items-start gap-3">
                <CircleCheckBig
                  className="mt-[2px] shrink-0"
                  size={22}
                  strokeWidth={2}
                />

                <div className="text-[16px] leading-[1.4] md:text-[17px]">
                  <p>
                    100% Compliance with IAO&apos;s rigorous standards in:
                  </p>

                  <ul className="mt-1 list-disc pl-7">
                    <li>Academic Management</li>
                    <li>Institutional Performance</li>
                    <li>Global Best Practices</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* ITEM 3 */}
            <ScrollReveal delay={300}>
              <div className="flex items-start gap-3">
                <CircleCheckBig
                  className="mt-[2px] shrink-0"
                  size={22}
                  strokeWidth={2}
                />

                <div className="text-[16px] leading-[1.4] md:text-[17px]">
                  <p>Key Benefits for Students:</p>

                  <ul className="mt-1 list-disc pl-7">
                    <li>
                      Globally Recognized Certifications – Valued by employers
                      worldwide.
                    </li>

                    <li>
                      Quality Assurance – Regular audits to maintain excellence.
                    </li>

                    <li>
                      Competitive Edge – Stand out in Nepal&apos;s growing IT
                      sector.
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* ITEM 4 */}
            <ScrollReveal delay={400}>
              <div className="flex items-start gap-3">
                <CircleCheckBig
                  className="mt-[2px] shrink-0"
                  size={22}
                  strokeWidth={2}
                />

                <div className="text-[16px] leading-[1.4] md:text-[17px]">
                  <p>Our Commitment:</p>

                  <ul className="mt-1 list-disc pl-7">
                    <li>
                      Continuous improvement of programs to meet evolving
                      industry needs.
                    </li>

                    <li>
                      Transparency in operations and educational outcomes.
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <ScrollReveal direction="scale" delay={250}>
          <div className="flex items-center justify-center lg:justify-end lg:pr-8">
            <div className="relative h-[220px] w-[220px] md:h-[250px] md:w-[250px] lg:h-[270px] lg:w-[270px]">
              <Image
                src="/about/iaoglobal.png"
                alt="International Accreditation Organization"
                fill
                className="object-contain"
                sizes="270px"
              />
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}