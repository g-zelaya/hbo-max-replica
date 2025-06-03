"use client";

import { useState } from "react";
import Image from "next/image";
import MediaItem from "@/interfaces/media-item";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HomeCarouselProps {
  items: MediaItem[];
}

export default function HomeCarousel({ items }: HomeCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full h-[99vh] overflow-hidden z-0">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === activeIndex
              ? "opacity-100 z-10 pointer-events-auto"
              : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={item.multimediaSrc}
            alt={item.title}
            fill
            className="object-cover w-full h-full"
            priority={idx === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          <div className="absolute bottom-20 left-6 sm:left-16 text-white max-w-xl p-4">
            {item.badge && (
              <span className="inline-block bg-white text-black text-xs font-semibold px-2 py-1 mb-2 rounded">
                {item.badge}
              </span>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {item.title}
            </h2>
            <div className="flex gap-4 mt-2 text-sm text-white/80 font-medium">
              {item.tags?.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <p className="mt-2 text-sm sm:text-base lg:text-lg line-clamp-3">
              {item.description}
            </p>
            <button
              className="
                mt-4
                bg-gray-800 hover:bg-gray-700
                text-white
                font-semibold
                py-2 px-4
                rounded
                text-sm sm:text-base
                transition-colors
              "
            >
              {`Go to ${item.type}`}
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:scale-110 transition z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:scale-110 transition z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
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
  );
}
