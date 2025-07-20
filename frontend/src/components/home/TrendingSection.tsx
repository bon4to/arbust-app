import { trendingAlbums } from "../../api/mockData";
import AlbumCard from "./AlbumCards";

const TrendingSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-neutral-900">
      <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left">
        Trending Now
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {trendingAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;