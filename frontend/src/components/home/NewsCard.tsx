interface News {
  id: number;
  title: string;
  artist: string;
  cover: string;
  summary: string;
}

export const NewsCard = ({ news }: { news: News }) => {
  return (
    <div className="flex flex-col md:flex-row bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
      {/* Album/cover image */}
      <img
        src={news.cover}
        alt={news.title}
        className="w-full md:w-1/3 object-cover"
      />

      {/* Content */}
      <div className="p-6 flex flex-col justify-center md:w-2/3">
        <h3 className="text-2xl font-bold text-white mb-2">{news.title}</h3>
        <p className="text-sm text-neutral-400 italic mb-2">{news.artist}</p>
        <p className="text-neutral-300 mb-4">{news.summary}</p>
        <button className="text-sm font-semibold text-white hover:text-primary transition">
          READ MORE
        </button>
      </div>
    </div>
  );
};