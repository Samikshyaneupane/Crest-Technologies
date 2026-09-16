import Image from "next/image";

import {
  BookOpen,
  CircleCheckBig,
  Users,
} from "lucide-react";

const crestWay = [
  {
    icon: BookOpen,
    image: "",
    title: "LEARN",
    text: "Mentored online learning",
  },
  {
    icon: CircleCheckBig,
    image: "",
    title: "PRACTICE",
    text: "Material for easy learning",
  },
  {
    icon: Users,
    image: "",
    title: "APPLY",
    text: "Assignments for first-hand experience",
  },
  {
    icon: null,
    image: "/image.png",
    title: "ASSESSMENT",
    text: "Personalized progress assessment and feedback",
  },
];

const crestAdvantage = [
  {
    image: "/crestad1.png",
    title: "LIVE OR PHYSICAL CLASSES",
    text: "Attend classes as per your convenience online or physical. Online classes are scheduled at evening time for students or professionals' convenience.",
  },
  {
    image: "/crestad2.png",
    title: "INDUSTRY STANDARD CURRICULUM",
    text: "Validated by industry experts and meticulously structured. One of the best world wide curriculum with focus to ensure excellence.",
  },
  {
    image: "/crestad3.png",
    title: "MULTIPLE PROJECTS",
    text: "Get hands-on experience with multiple projects to enhance your skills. Believe by seeing your own work.",
  },
  {
    image: "/crestad4.png",
    title: "INDUSTRY READINESS",
    text: "Resume preparation, career counselling, skill enhancement workshops, mock interviews, soft skills training, Industry networking.",
  },
  {
    image: "/crestad5.png",
    title: "PLACEMENT ASSISTANCE",
    text: "Actively assist students in securing suitable employment opportunities by connecting with potential employers.",
  },
  {
    image: "/crestad6.png",
    title: "IAO CERTIFICATION ACCREDITATION",
    text: "Get international accredited certification with online links.",
  },
];

export default function CrestWay() {
  return (
    <section className="bg-[#f5f6f7] px-4 pt-16 pb-5">

      {/* both cards control here */}
      <div className="mx-auto flex max-w-[1200px] flex-col lg:min-h-[500px] lg:flex-row">

        {/* LEFT - THE CREST WAY */}
        <div className="rounded-md bg-[#ffc20e] px-9 py-10 lg:w-[40%]">

          <h2 className="mb-9 mt-6 text-3xl font-bold text-[#111827] md:text-4xl ">
            The Crest Way
          </h2>

          <p className="mb-8 max-w-[330px] pb-7 text-[16px] leading-[1.55] font-semi-bold text-black">
            Learning methodology that focuses on learner&apos;s  holistic growth
            and delivers domain-specific information
          </p>

          <div className="space-y-5">

            {crestWay.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-[10px]"
                >

                  {/* IMAGE */}
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title || "Crest Way"}
                      width={18}
                      height={18}
                      className="mt-[2px] shrink-0 object-contain"
                    />
                  ) : Icon ? (

                    /* if no image then icons */
                    <Icon
                      size={18}
                      strokeWidth={2}
                      className="mt-[2px] shrink-0 text-black"
                    />

                  ) : null}

                  <div>
                    <h3 className="text-[18px] font-bold text-black">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[14px] leading-5 text-black">
                      {item.text}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

          <button className="mt-12 rounded-full bg-[#1A71E9] px-7 py-2 text-[20px] text-white transition hover:bg-[#ffc20e] hover:text-[#1A71E9] hover:border hover:border-[#1A71E9]
         >">
            Our Approach
          </button>

        </div>

        {/* RIGHT - THE CREST ADVANTAGE */}
        <div className="bg-white px-6 py-7 lg:w-[60%] lg:px-8">

          <h2 className="mb-9 text-3xl font-bold text-[#111827] md:text-4xl">
            The Crest Advantage
          </h2>

          <div className="space-y-6">

            {crestAdvantage.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5"
              >

                {/* CREST ADVANTAGE IMAGES */}
                <Image
                  src={item.image}
                  alt={item.title || "Crest Advantage"}
                  width={30}
                  height={35}
                  className="mt-1 shrink-0 object-contain"
                />

                <div>
                  <h3 className="text-[18px] font-bold text-[#001b67]">
                    {item.title}
                  </h3>
  
                  <p className="mt-2 text-[14px] leading-[1.55] text-black">
                    {item.text}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}