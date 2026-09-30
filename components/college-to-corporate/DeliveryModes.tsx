import Image from "next/image";

const modes = [
  {
    title: "Online Learning",
    image: "/college-to-corporate/online.svg",
  },
  {
    title: "In-Person Training",
    image: "/college-to-corporate/in-person.svg",
  },
  {
    title: "Hybrid",
    image: "/college-to-corporate/hybrid.svg",
  },
];

export default function DeliveryModes() {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-8">

        {/* TITLE */}
        <h2 className="text-center text-[32px] font-bold leading-tight text-[#00135C] md:text-[38px] lg:text-[42px]">
          Delivery Modes
        </h2>

        {/* CARDS */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {modes.map((mode) => (
            <div
              key={mode.title}
              className="flex h-[250px] flex-col items-center justify-center rounded-[9px] bg-[#DCEEFF] px-5 py-5 transition-colors duration-300 hover:bg-[#C7DDF4]"
            >
              {/* IMAGE */}
              <div className="relative h-[130px] w-[180px]">
                <Image
                  src={mode.image}
                  alt={mode.title}
                  fill
                  className="object-contain"
                  sizes="180px"
                />
              </div>

              {/* CARD TITLE */}
              <h3 className="mt-3 text-center text-[18px] font-bold text-[#00135C] md:text-[20px]">
                {mode.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}