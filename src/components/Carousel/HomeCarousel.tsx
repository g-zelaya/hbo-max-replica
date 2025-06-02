"use client";

import { useState } from "react";
import ArrowControls from "./ArrowControls";
import Image from "next/image";
import MediaItem from "@/interfaces/media-item";

interface HomeCarouselProps {
  items: MediaItem[];
}

export default function HomeCarousel({ items }: HomeCarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div
      className="
        relative 
        w-full 
        h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] 
        overflow-hidden
        mt-0
      "
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`
            absolute inset-0 
            transition-opacity duration-700 ease-in-out 
            ${idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          <Image
            src={item.multimediaSrc}
            className="w-full h-full object-cover"
            alt={item.title}
            width={1920}
            height={1080}
          />
          <div
            className="
              absolute 
              bottom-20 left-20 
              text-white 
              max-w-xl 
              bg-gradient-to-r from-black/80 to-transparent 
              p-6
            "
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {item.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base lg:text-lg">
              {item.description}
            </p>
            <button
              className="
              mt-4
              inline-block
              bg-gray-800 hover:bg-gray-700
              text-white font-semibold
              py-2 px-4
              rounded
              text-sm sm:text-base
            "
            >
              {`Go to ${item.type}`}
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {items.map((_, dotIdx) => (
              <span
                key={dotIdx}
                className={
                  dotIdx === activeIndex
                    ? "h-3 w-3 rounded-full bg-white"
                    : "h-3 w-3 rounded-full bg-white/50"
                }
                onClick={() => setActiveIndex(dotIdx)}
              ></span>
            ))}
          </div>
        </div>
      ))}

      <ArrowControls onPrev={prevSlide} onNext={nextSlide} />
    </div>
  );
}
