import Image from "next/image";

import {
  BookOpen,
  CircleCheckBig,
  Users,
} from "lucide-react";

// Crest Way items
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

// Crest Advantage items
const crestAdvantage = [
  {
    image: "/crestad/crestad1.png",
    title: "LIVE OR PHYSICAL CLASSES",
    text:
    <> Attend classes as per your convenience online or physical. Online classes are scheduled at evening time for students or professionals' 
    <br/>convenience.    </>
  },
  {
    image: "/crestad/crestad2.png",
    title: "INDUSTRY STANDARD CURRICULUM",
    text: "Validated by industry experts and meticulously structured. One of the best world wide curriculum with focus to ensure excellence.",
  },
  {
    image: "/crestad/crestad3.png",
    title: "MULTIPLE PROJECTS",
    text: "Get hands-on experience with multiple projects to enhance your skills. Believe by seeing your own work.",
  },
  {
    image: "/crestad/crestad4.png",
    title: "INDUSTRY READINESS",
    text: "Resume preparation, career counselling, skill enhancement workshops, mock interviews, soft skills training, Industry networking.",
  },
  {
    image: "/crestad/crestad5.png",
    title: "PLACEMENT ASSISTANCE",
    text: "Actively assist students in securing suitable employment opportunities by connecting with potential employers.",
  },
  {
    image: "/crestad/crestad6.png",
    title: "IAO CERTIFICATION ACCREDITATION",
    text: "Get international accredited certification with online links.",
  },
];

export default function CrestWay() {
  return (
    // Whole section
    <section className="bg-[#f5f6f7] px-2 pt-16 pb-5">

      {/* Container for both cards */}
      <div className="mx-auto flex w-full max-w-[1600px] flex-col lg:min-h-[500px] lg:flex-row">

        {/* Left - The Crest Way */}
     <div className="rounded-md bg-[#ffc20e] px-9 py-10 lg:w-[40%]">

          {/* Crest Way heading */}
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold mb-4 leading-tight tracking-[0%] text-[#292929] py-8">
            The Crest Way
          </h2>

          {/* Crest Way description */}
          <p className="text-base md:text-lg lg:text-[20px] font-normal leading-snug tracking-[0] mb-6 text-[#292929]">
            Learning methodology that focuses on learner&apos;s holistic growth
            and delivers domain-specific information
          </p>

          {/* Crest Way items */}
          <div className="space-y-8">
            {crestWay.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-[20px]"
                >
                  {/* Item icon */}
                  {item.image ? (
                  <Image
  src={item.image}
  alt={item.title || "Crest Way"}
  width={30}
  height={30}
  className="mt-[2px] h-[30px] w-[30px] shrink-0 object-contain"
/>
                  ) : Icon ? (
                   <Icon
  size={30}
  strokeWidth={2}
  className="mt-[2px] shrink-0 text-black"
/> 
                  ) : null}

                  {/* Item text */}
                 <div>
  <h3 className="font-bold text-base md:text-lg lg:text-[20px] leading-tight tracking-[0] text-[#292929] mb-[10px]">
    {item.title}
  </h3>

  <p className="font-normal text-base md:text-lg lg:text-[20px] leading-tight tracking-[0] text-[#292929]">
    {item.text}
  </p>
</div>
                </div>
              );
            })}
          </div>

          {/* Our Approach button */}
          <button className="w-[180px] md:w-[220px] h-[48px] md:h-[53px] text-lg md:text-xl lg:text-[24px] leading-tight tracking-[0] mt-12 md:mt-16 px-[6px] py-[12px] bg-[#1A71E9] text-white rounded-3xl hover:bg-transparent hover:border hover:border-[#1A71E9] hover:text-[#1A71E9]">
            Our Approach
          </button>

        </div>

        {/* Right - The Crest Advantage */}
       <div className="bg-white px-6 py-7 lg:w-[60%] lg:px-8">

          {/* Crest Advantage heading */}
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-[#292929] leading-tight tracking-[0]">
            The Crest Advantage
          </h2>

          {/* Crest Advantage items */}
          <div className="mt-[30px] space-y-[30px]">
            {crestAdvantage.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5"
              >
                {/* Advantage image */}
                <Image
                  src={item.image}
                  alt={item.title || "Crest Advantage"}
                  width={48}
                  height={36}
                  className="w-[48px] h-[36px] object-contain"
                />

                {/* Advantage text */}
                <div>
               <h3 className="font-bold text-[#00135C] leading-tight tracking-[0%] text-base md:text-lg lg:text-[20px] mb-[10px]">
  {item.title}
</h3>

                  <p className="text-base md:text-lg lg:text-[20px] font-normal leading-tight tracking-[0] text-[#292929]">
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