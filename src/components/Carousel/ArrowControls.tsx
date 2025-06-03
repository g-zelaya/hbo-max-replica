interface ArrowControlsProps {
  onPrev: () => void;
  onNext: () => void;
  showPrev?: boolean;
  showNext?: boolean;
}

export default function ArrowControls({
  onPrev,
  onNext,
  showPrev = true,
  showNext = true,
}: ArrowControlsProps) {
  return (
    <>
      {showPrev && (
        <button
          onClick={onPrev}
          className="
            absolute left-0 top-1/2 -translate-y-1/2 z-10
            bg-black/60 hover:bg-black/80
            p-2 rounded-full
            flex items-center justify-center
            transition
            group
          "
          aria-label="Previous"
        >
          <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
            <polyline
              points="20 8 12 16 20 24"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      {showNext && (
        <button
          onClick={onNext}
          className="
            absolute right-0 top-1/2 -translate-y-1/2 z-10
            bg-black/60 hover:bg-black/80
            p-2 rounded-full
            flex items-center justify-center
            transition
            group
          "
          aria-label="Next"
        >
          <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
            <polyline
              points="12 8 20 16 12 24"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </>
  );
}
