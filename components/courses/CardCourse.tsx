import Image from "next/image";
import Link from "next/link";
import { Clock3 } from "lucide-react";

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
    <div className="flex h-full flex-col rounded-[4px] border border-gray-300 bg-white p-4">
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

      <div className="flex flex-1 flex-col">
        <h3 className="mt-4 text-[21px] font-bold leading-[1.15] text-black">
          {title}
        </h3>

        <p className="mt-3 text-[14px] leading-[1.55] text-gray-700">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-10">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <Clock3 size={20} className="text-[#1677FF]" />
            <span>{duration}</span>
          </div>

          <Link
            href={href}
            prefetch={false}
            className="text-[13px] font-medium text-[#1677FF] hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}