import HomeCarousel from "@/components/Carousel/HomeCarousel";
import MediaCarousel from "@/components/Carousel/MediaCarousel";
import heroItems from "@/data/hero-items.json";
import featuredItems from "@/data/featured-items.json";
import recommendedItems from "@/data/recommended-items.json";
import continueWatchingItems from "@/data/continue-watching-items.json";
import topMoviesTodayItems from "@/data/top-movies-today-items.json";
import topSeriesTodayItems from "@/data/top-series-today-items.json";

export default function Home() {
  return (
    <>
      <main className="w-full overflow-x-hidden" >
        <HomeCarousel items={heroItems} />
        <MediaCarousel title="Featured" items={featuredItems} />
        <MediaCarousel title="Recommended for You" items={recommendedItems} />
        <MediaCarousel
          title="Continue Watching"
          items={continueWatchingItems}
          showMediaTitle
          showProgressBar
          horizontalDisplay
        />
        <MediaCarousel
          title="Top 10 Movies Today"
          items={topMoviesTodayItems}
          isTop10
        />
        <MediaCarousel
          title="Top 10 Series Today"
          items={topSeriesTodayItems}
          isTop10
        />
      </main>
    </>
  );
}
