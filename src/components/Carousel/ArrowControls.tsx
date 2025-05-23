interface ArrowControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function ArrowControls({ onPrev, onNext }: ArrowControlsProps) {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
        aria-label="Next"
      >
        ›
      </button>
    </>
  );
}
