import Image from "next/image";

interface CarouselItemProps {
  title: string;
  imageSrc: string;
  subtitle?: string;
  onClick?: () => void;
}

export default function CarouselItem({
  title,
  imageSrc,
  subtitle,
  onClick,
}: CarouselItemProps) {
  return (
    <div className="w-[180px] flex-shrink-0 cursor-pointer" onClick={onClick}>
      <div className="w-full h-[270px] relative rounded overflow-hidden shadow-md">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="180px"
        />
      </div>
      {subtitle && (
        <span className="text-xs text-gray-400 mt-1 block">{subtitle}</span>
      )}
      <h3 className="text-white font-semibold text-sm">{title}</h3>
    </div>
  );
}
