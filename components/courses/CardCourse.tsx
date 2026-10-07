import Image from "next/image";
import Link from "next/link";

type CourseCardProps = {
  title: string;
  description: string;
  duration: string;
  image: string;
  href: string;
};

export default function CourseCard({
  title,
  description,
  duration,
  image,
  href,
}: CourseCardProps) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="block h-full"
    >
      <div className="flex h-full cursor-pointer flex-col rounded-[4px] border border-gray-300 bg-white p-4">
        
        {/* COURSE IMAGE */}
        <div className="relative h-[215px] w-full overflow-hidden rounded-[3px]">
          <Image
            src={image}
            alt={title}
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col">
          
          {/* TITLE */}
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-2 mt-4">
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl text-[#464646] mb-4">
            {description}
          </p>

          {/* BOTTOM */}
          <div className="mt-auto flex items-center justify-between pt-10">
            
            {/* DURATION */}
            <div className="flex items-center gap-[7px]">
              <div className="relative h-[30px] w-[30px] shrink-0">
                <Image
                  src="/courses/time.svg"
                  alt="Time"
                  fill
                  className="object-contain"
                  sizes="30px"
                />
              </div>

              <span className="text-[20px] font-medium text-black">
                {duration}
              </span>
            </div>

            {/* VIEW DETAILS */}
            <span className="text-[#1A71E9] hover:underline ml-auto text-lg md:text-xl">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}