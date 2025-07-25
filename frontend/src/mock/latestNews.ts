// Mock data, simulating a future API response for news articles.
interface News {
  id: number;
  title: string;
  artist: string;
  cover: string;
  summary: string;
}

// Applies the News type to the array, ensuring all items match the shape
export const latestNews: News[] = [
  {
    id: 1,
    title: "Mission Control",
    artist: "Frank Ocean",
    cover: "https://placehold.co/500x300/2b2b2b/ffffff?text=Frank+Ocean",
    summary:
      "As 'Blonde' celebrates its 10th anniversary, critics revisit Frank Ocean's experimental legacy and its impact on modern R&B.",
  },
];