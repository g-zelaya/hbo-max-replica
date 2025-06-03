"use client";

import MediaItem from "@/interfaces/media-item";
import { useEffect, useRef, useState } from "react";
import CarouselItem from "./CarouselItem";
import ArrowControls from "./ArrowControls";
import ProgressBar from "../ProgressBar";

interface MediaCarouselProps {
  title: string;
  items: MediaItem[];
  showProgressBar?: boolean;
  showMediaTitle?: boolean;
  isTop10?: boolean;
}

export default function MediaCarousel({
  title,
  items,
  showProgressBar = false,
  showMediaTitle = false,
  isTop10 = false,
}: MediaCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState<boolean>(false);
  const [showNext, setShowNext] = useState<boolean>(false);

  const updateArrowVisibility = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowPrev(scrollLeft > 0);
    setShowNext(scrollLeft + clientWidth < scrollWidth - 2);
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    updateArrowVisibility();

    element.addEventListener("scroll", updateArrowVisibility);
    window.addEventListener("resize", updateArrowVisibility);

    return () => {
      element.removeEventListener("scroll", updateArrowVisibility);
      window.removeEventListener("resize", updateArrowVisibility);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const pageWidth = container.clientWidth;
    container.scrollBy({
      left: dir === "right" ? pageWidth : -pageWidth,
      behavior: "smooth",
    });
    setTimeout(updateArrowVisibility, 400);
  };

  const handleCarouselTitle = (title: string) => {
    if (title === "Top 10 Movies Today")
      return (
        <span>
          <img
            src="/img/top10-movies.png.webp"
            alt="Top 10 Movies Today"
            className="w-[300px] md:w-[400px] my-4"
          />
        </span>
      );
    else if (title === "Top 10 Series Today")
      return (
        <span>
          <img
            src="/img/top10-series.png.webp"
            alt="Top 10 Movies Today"
            className="w-[300px] md:w-[400px] my-4"
          />
        </span>
      );
    else return <h2 className="text-xl text-white font-bold mb-4">{title}</h2>;
  };

  return (
    <section
      className="
        relative w-full mt-8
        px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
      "
    >
      {handleCarouselTitle(title)}
      <div
        ref={scrollRef}
        className="flex flex-row w-full overflow-x-auto gap-6 no-scrollbar"
      >
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            {isTop10 ? (
              <CarouselItem {...item} idxNumber={idx + 1} />
            ) : (
              <CarouselItem {...item} />
            )}
            {showProgressBar && <ProgressBar progress={item.progress!} />}
            {showMediaTitle && (
              <>
                <h3 className="mt-2 text-white font-semibold text-sm truncate">
                  {item.type === "Movie" ? item.title : item.subtitle}
                </h3>
                <p className="text-gray-400 text-xs">{item.tags}</p>
              </>
            )}
          </div>
        ))}
      </div>
      <ArrowControls
        onPrev={() => scroll("left")}
        onNext={() => scroll("right")}
        showPrev={showPrev}
        showNext={showNext}
      />
    </section>
  );
}
