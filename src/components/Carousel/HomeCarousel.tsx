"use client";

import { useState } from "react";
import HeroItem from "@/interfaces/hero-item";
import ArrowControls from "./ArrowControls";

interface HomeCarouselProps {
  items: HeroItem[];
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
    <div className="relative w-full h-[80vh] overflow-hidden">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={item.image}
            className="w-full h-full object-cover"
            alt={item.title}
          />
          <div className="absolute bottom-20 left-20 text-white max-w-xl bg-gradient-to-r from-black/80 to-transparent p-6 rounded">
            <h2 className="text-4xl font-bold">{item.title}</h2>
            <p className="mt-2 text-lg">{item.description}</p>
          </div>
        </div>
      ))}

      <ArrowControls onPrev={prevSlide} onNext={nextSlide} />
    </div>
  );
}
