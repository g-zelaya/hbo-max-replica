interface ImageBadgeProps {
  label: string;
}

export default function ImageBadge({ label }: ImageBadgeProps) {
  return (
    <div className="relative w-full">
      <span className="absolute bg-white text-black text-xs font-semibold p-1 whitespace-nowrap shadow">
        {label}
      </span>
    </div>
  );
}
