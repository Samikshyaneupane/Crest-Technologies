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
          <h3 className="mt-4 text-[21px] font-bold leading-[1.15] text-black">
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-3 text-[14px] leading-[1.55] text-gray-700">
            {description}
          </p>

          {/* BOTTOM */}
          <div className="mt-auto flex items-center justify-between pt-10">
            
            {/* DURATION */}
            <div className="flex items-center gap-[7px]">
              <div className="relative h-[23px] w-[23px] shrink-0">
                <Image
                  src="/courses/time.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="25px"
                />
              </div>

              <span className="text-[15px] font-medium text-black">
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