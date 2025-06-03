import Image from "next/image";
import ImageBadge from "../ImageBadge";

interface CarouselItemProps {
  title: string;
  multimediaSrc: string;
  badge?: string;
  idxNumber?: number;
  type?: string;
  horizontalDisplay?: boolean;
  onClick?: () => void;
}

export default function CarouselItem({
  title,
  multimediaSrc,
  badge,
  onClick,
  idxNumber,
  type,
  horizontalDisplay,
}: CarouselItemProps) {
  return (
    <div
      className="
        flex-none cursor-pointer
        min-w-[33vw] sm:min-w-[25vw] md:min-w-[16.6vw] lg:min-w-[12.5vw]
        aspect-[2/3]
        transition-all duration-300
        py-2
        group
      "
      onClick={onClick}
    >
      {typeof idxNumber !== "undefined" && (
        <span>
          <img
            src={`/img/top-numbers/before/top${idxNumber}-before.png`}
            alt={`${type} Top Number ${idxNumber}`}
            className="absolute top-2 left-2 z-20 w-6 h-6"
          />
        </span>
      )}
      <div
        className="
          w-full h-full relative overflow-hidden shadow-md
          border-4 border-transparent
          group-hover:border-white
          transition-all duration-300
          rounded-lg
        "
      >
        <Image
          src={multimediaSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width:1024px)12.5vw, (min-width:768px)16.66vw, (min-width:640px)25vw, 33.33vw"
        />
        {badge && (
          <div className="absolute z-10">
            <ImageBadge label={badge} />
          </div>
        )}
        <div className="absolute top-2 right-2 z-20">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="5" r="1.5" fill="#fff" />
            <circle cx="11" cy="11" r="1.5" fill="#fff" />
            <circle cx="11" cy="17" r="1.5" fill="#fff" />
          </svg>
        </div>
      </div>
    </div>
  );
}
