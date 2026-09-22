import Image from "next/image";
import Link from "next/link";

const trainingModes = [
  {
    title: "LIVE ONLINE TRAINING",
    image: "/corporate/livetraining.svg",
    description: (
      <> Virtual instructor-led
      <br/>
      Real time collaboration
    
      </>
    ),
    button: "Learn More",
    href: "#",
    primary: true,
  },
  {
    title: "ON-SITE TRAINING",
    image: "/corporate/onsitetraining.svg",
    description: (
      <>
       Face-to-face intercation
       <br/>
       Dedicated Learning Environment
      </>
    ),
    button: "Request Quote",
    href: "#enroll",
    primary: false,
  },
  {
    title: "HYBRID LEARNING",
    image: "/corporate/hybrid.svg",
    description: (
      <>
       Combination of online
       <br/>
       and in-person
       <br/>
       Flexible Scheduling
      </>
    ),
    button: "Get Details",
    href: "#enroll",
    primary: false,
  },
];

export default function TrainingModes() {
  return (
    <section className="font-myriad w-full bg-[#DAEBFF] py-10 md:py-12">
      <div className="mx-auto max-w-[1500px] px-4">

        {/* TITLE */}
        <h2 className="text-center text-[38px] font-bold text-[#001B69] md:text-[52px]">
          Training Delivery Modes
        </h2>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 gap-9 md:grid-cols-3">
          {trainingModes.map((mode) => (
            <div
              key={mode.title}
              className="flex min-h-[610px] flex-col items-center bg-white px-6 py-10 text-center"
            >
              {/* CARD TITLE */}
              <h3 className="text-[20px] font-bold text-black md:text-[21px]">
                {mode.title}
              </h3>

              {/* IMAGE */}
              <div className="relative mt-12 h-[256px] w-full max-w-[300px]">
                <Image
                  src={mode.image}
                  alt={mode.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 300px"
                />
              </div>

              {/* DESCRIPTION */}
              <div className="mt-8 text-[17px] leading-[1.15] text-black">
                {mode.description}
              </div>

              {/* BUTTON */}
              <Link
                href={mode.href}
                prefetch={false}
                className={`mt-auto rounded-full px-9 py-3 text-[20px] transition ${
                  mode.primary
                    ? "mt-auto px-8 py-3 rounded-full font-normal text-xl bg-[#1A71E9] text-white hover:border hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-transparent"
                    : "mt-auto px-8 py-3 rounded-full font-normal text-xl border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
                }`}
              >
                {mode.button}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}