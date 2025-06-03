interface ProgressBarProps {
  progress: number; // between 0 and 100
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="relative w-full h-[4px] bg-gray-700 rounded mt-2">
      <div
        className="absolute top-0 left-0 h-full bg-purple-600 rounded"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
