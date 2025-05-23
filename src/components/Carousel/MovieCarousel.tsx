"use client";

import MediaItem from "@/interfaces/media-item";
import { useRef } from "react";
import CarouselItem from "./CarouselItem";
import ArrowControls from "./ArrowControls";

interface MovieCarouselProps {
  title: string;
  items: MediaItem[];
}

export default function MovieCarousel({ title, items }: MovieCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const amount = container.offsetWidth * 0.8;
      container.scrollBy({
        left: dir === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative px-6 py-8">
      <h2 className="text-xl text-white font-bold mb-4">{title}</h2>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {items.map((item, idx) => (
          <CarouselItem key={idx} {...item} />
        ))}
      </div>
      <ArrowControls
        onPrev={() => scroll("left")}
        onNext={() => scroll("right")}
      />
    </section>
  );
}
