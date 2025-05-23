import MediaItem from "@/interfaces/media-item";

export default function MediaCard({ title, imageSrc, subtitle }: MediaItem) {
  return (
    <div className="w-[180px] flex-shrink-0">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[270px] object-cover rounded-md shadow"
      />
      {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
      <h3 className="text-white font-semibold text-sm">{title}</h3>
    </div>
  );
}
