import { trendingAlbums } from "../../../../mock/trendingAlbums";
import AlbumCard from "./AlbumCards";
import { SectionTitle } from "../../../common/SectionTitle";

const TrendingSection = () => {
  return (
     <section className="bg-neutral-900 px-4 md:px-8 py-14">
      <SectionTitle title="Trendind Albums" more={true} link="/trending" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {trendingAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;