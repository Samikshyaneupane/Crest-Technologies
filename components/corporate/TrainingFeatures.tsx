import Image from "next/image";

const features = [
  {
    image: "/corporate/customization.svg",
    title: "Course Customization",
  },
  {
    image: "/corporate/scheduling.svg",
    title: "Flexible Scheduling",
  },
  {
    image: "/corporate/certification.svg",
    title: "Certification Guidance",
  },
  {
    image: "/corporate/experts.svg",
    title: "Expert Trainers",
  },
  {
    image: "/corporate/modes.svg",
    title: "Multiple Learning Modes",
  },
  {
    image: "/corporate/labs.svg",
    title: "Hands on Lab",
  },
];

export default function TrainingFeatures() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-8">

        {/* TITLE */}
        <h2 className="text-[#00135C] font-bold text-center text-3xl md:text-4xl lg:text-5xl mb-12">
          Training Features
        </h2>

        {/* FEATURES */}
        <div className="mt-12 grid grid-cols-1 gap-y-7 md:grid-cols-3">
          {features.map((feature, index) => {
           
            const hasSeparator = index % 3 !== 2;

            return (
              <div
                key={feature.title}
                className="relative flex min-h-[100px] items-center gap-5 px-5 py-4"
              >
                {/* IMAGE ICON */}
                <div className="relative h-[50px] w-[50px] shrink-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="50px"
                    className="object-contain"
                  />
                </div>

                {/* TEXT */}
                <p className="text-lg md:text-xl lg:text-2xl font-normal text-[#6d6d6d]">
                  {feature.title}
                </p>

                {/* YELLOW SEPARATOR */}
                {hasSeparator && (
                  <div className="absolute right-0 top-1/2 hidden h-[70px] w-[2px] -translate-y-1/2 bg-[#FFCC00] md:block" />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}