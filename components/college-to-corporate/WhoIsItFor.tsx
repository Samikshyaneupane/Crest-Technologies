import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const audiences = [
  {
    image: "/college-to-corporate/students.svg",
    text: (
      <>
        Students after 10th or 12th
        <br />
        grade exploring a career in
        <br />
        technology
      </>
    ),
  },
  {
    image: "/college-to-corporate/undergrad.svg",
    text: (
      <>
        Undergraduate students
        <br />
        seeking practical, job-ready
        <br />
        skills
      </>
    ),
  },
  {
    image: "/college-to-corporate/learners.svg",
    text: (
      <>
        Learners in software and
        <br />
        technical colleges
        <br />
        preparing for industry
        <br />
        placements
      </>
    ),
  },
];

export default function WhoIsItFor() {
  return (
    <section className="w-full bg-white">

      {/* TITLE */}
      <div className="px-6 py-10 text-center md:py-12">
        <ScrollReveal>
          <h2 className="text-[36px] font-bold text-[#001B69] md:text-[46px]">
            Who Is It For?
          </h2>
        </ScrollReveal>
      </div>

      {/* BLUE SECTION */}
      <div className="w-full bg-[#DCEEFF]">
        <div className="mx-auto grid max-w-[1700px] grid-cols-1 px-6 py-8 md:grid-cols-3 lg:px-10">

          {audiences.map((item, index) => (
            <ScrollReveal
              key={index}
              delay={index * 120}
              className="h-full"
            >
              <div className="relative flex h-full min-h-[260px] flex-col items-center justify-center px-8 text-center">

                {/* ICON */}
                <div className="relative mb-5 h-[80px] w-[100px]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="100px"
                  />
                </div>

                {/* TEXT */}
                <p className="text-[17px] leading-[1.45] text-black md:text-[19px]">
                  {item.text}
                </p>

                {/* YELLOW DIVIDER */}
                {index !== audiences.length - 1 && (
                  <div
                    className="
                      absolute
                      right-0
                      top-1/2
                      hidden
                      h-[115px]
                      w-[4px]
                      -translate-y-1/2
                      bg-[#FFC800]
                      md:block
                    "
                  />
                )}

              </div>
            </ScrollReveal>
          ))}

        </div>
      </div>
    </section>
  );
}