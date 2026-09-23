import Image from "next/image";
import { CircleCheckBig } from "lucide-react";

const benefits = [
  "Strong technical foundations (basic to advanced coding and software skills)",
  "Cognitive and logical reasoning skills critical for tech interviews",
  "Effective communication training to thrive in corporate settings",
  "Mock interviews, career mentorship, and resume building",
  "Live project experience and opportunities for internships",
  "Exposure to industry-level coding contests and communication events",
];

export default function WhyChoose() {
  return (
    <section className="w-full bg-white">
      <div className="font-myriad mx-auto max-w-[1500px] px-6 py-20 lg:px-10">

        {/* TITLE */}
        <h2 className="text-center text-[#00135C] font-bold text-2xl md:text-3xl lg:text-5xl">
          Why Choose the CToC Program?
        </h2>

        {/* CONTENT */}
        <div className="mt-20 grid grid-cols-1 items-center gap-14 lg:grid-cols-[42%_58%]">

          {/* LEFT IMAGE */}
          <div className="relative h-[350px] w-full overflow-hidden md:h-[500px]">
            <Image
              src="/college-to-corporate/whychoose.webp"
              alt="Student learning software development"
              fill
              className="object-cover"
              sizes="(max-width:1000px) 100vw, 42vw"
            />
          </div>

          {/* RIGHT BENEFITS */}
          <div className="space-y-8 lg:pl-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-5">

                <CircleCheckBig
                  size={40}
                  strokeWidth={2}
                  className="mt-1 shrink-0 text-black"
                />

                <p className="text-[18px] leading-[1.45] text-black md:text-[21px]">
                  {benefit}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}