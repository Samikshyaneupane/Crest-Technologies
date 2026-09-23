import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const missions = [
  {
    image: "/about/mission-1.svg",
    text: "Strengthen the development of affiliated learning centers by offering high quality, advanced computer literacy programs,",
  },
  {
    image: "/about/mission-2.svg",
    text: "Enhance computer education standards through shared professional expertise and resources.",
  },
  {
    image: "/about/mission-3.svg",
    text: "Develop cutting-edge networking technologies with effective educational programs.",
  },
  {
    image: "/about/mission-4.svg",
    text: "Provide specialized computer education and training opportunities for continuous professional growth and skill enhancement.",
  },
  {
    image: "/about/mission-5.svg",
    text: "Foster self-awareness and global perspective in our students, empowering them to transcend regional, national, and personal boundaries to become part of a unified global society.",
  },
];

const visions = [
  {
    image: "/about/vision-1.svg",
    text: "Establish computer literacy centers nationwide and internationally, with a special focus on urban and semi urban area.",
  },
  {
    image: "/about/vision-2.svg",
    text: "Deliver high-quality, job-oriented courses with well-structured study materials, tailored to students awareness levels and industry advancements-all at an affordable fee.",
  },
  {
    image: "/about/vision-3.svg",
    text: "Offer financial support, including scholarships and stipends, to deserving candidates.",
  },
  {
    image: "/about/vision-4.svg",
    text: "Extend computer education to grassroots levels, ensuring accessibility for all.",
  },
];

export default function MissionVision() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-5 px-6 lg:grid-cols-2 lg:px-8">

        {/* MISSION */}
        <ScrollReveal direction="right">
          <div className="h-full bg-[#EEEEEE] px-8 py-12 md:px-10">
            <h2 className="mb-10 text-[30px] font-bold text-[#001B69]">
              Our mission
            </h2>

            <div className="space-y-8">
              {missions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5"
                >
                  {/* ICON IMAGE */}
                  <div className="relative mt-1 h-[34px] w-[34px] shrink-0">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="34px"
                    />
                  </div>

                  <p className="text-[17px] leading-[1.5] text-black md:text-[18px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* VISION */}
        <ScrollReveal direction="left" delay={150}>
          <div className="h-full bg-[#EEEEEE] px-8 py-12 md:px-10">
            <h2 className="mb-10 text-[30px] font-bold text-[#001B69]">
              Vision
            </h2>

            <div className="space-y-8">
              {visions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5"
                >
                  {/* ICON IMAGE */}
                  <div className="relative mt-1 h-[34px] w-[34px] shrink-0">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="34px"
                    />
                  </div>

                  <p className="text-[17px] leading-[1.5] text-black md:text-[18px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}