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
}: CarouselItemProps) {
  return (
    <div
      className="
        flex flex-row items-end shrink-0 py-2 cursor-pointer 
        w-[33.33vw] sm:w-[25vw] md:w-[16.66vw] lg:w-[12.5vw]
        group transition-all duration-300
      "
      onClick={onClick}
    >
      {typeof idxNumber !== "undefined" && (
        <img
          src={`/img/top-numbers/before/top${idxNumber}-before.png`}
          alt={`${type} Top Number ${idxNumber}`}
          className="
            flex-shrink-0 z-20 -mr-4
            w-8 md:w-10 lg:w-12 xl:w-14 
            -translate-y-1/2
            -translate-x-1/2
            drop-shadow-lg
            pointer-events-none select-none 
            transition-all duration-300
          "
          draggable={false}
        />
      )}
      <div
        className="
          relative flex-1 overflow-hidden shadow-md 
          rounded-lg aspect-[2/3] z-30
          border-4 border-transparent
          group-hover:border-white
          transition-all duration-300
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
          <div className="absolute z-40">
            <ImageBadge label={badge} />
          </div>
        )}
        <div className="absolute top-2 right-2 z-40">
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
