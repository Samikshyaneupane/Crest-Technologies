import Image from "next/image";

const features = [
  {
    icon: "/Courses/features1.svg",
    text: "Hands-on project based learning",
  },
  {
    icon: "/Courses/features2.svg",
    text: "Industry-standard curriculum aligned with job market needs",
  },
  {
    icon: "/Courses/features3.svg",
    text: "Certificate upon course completion",
  },
  {
    icon: "/Courses/features4.svg",
    text: "Both Online and Physical Classes Available",
  },
  {
    icon: "/Courses/features5.svg",
    text: "Guaranteed internship with placement assistance",
  },
  {
    icon: "/Courses/features6.svg",
    text: "Learn from real-world professionals",
  },
];

export default function CourseFeatures() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-8">
        
        {/* HEADING */}
        <h2 className="text-center text-[36px] font-bold text-[#001B69] md:text-[48px]">
          Course Features
        </h2>

        {/* FEATURES */}
        <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-6"
            >
              {/* IMAGE ICON */}
              <div className="relative h-[58px] w-[58px] shrink-0">
                <Image
                  src={feature.icon}
                  alt=""
                  fill
                  loading="lazy"
                  className="object-contain"
                  sizes="58px"
                />
              </div>

              {/* TEXT */}
              <p className="text-[#464646] font-normal text-lg lg:text-[18px]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}