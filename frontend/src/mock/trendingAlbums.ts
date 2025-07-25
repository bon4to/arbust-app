// Mock data, simulating a future API response.
export interface Album {
  id: number;
  title: string;
  artist: string;
  cover: string;
}

// Applies the Album type to the array, ensuring all items match the shape
export const trendingAlbums: Album[] = [
  { id: 1, title: "The Dark Side of the Moon", artist: "Pink Floyd", cover: "https://placehold.co/300x300/2b2b2b/ffffff?text=Pink+Floyd" },
  { id: 2, title: "OK Computer", artist: "Radiohead", cover: "https://placehold.co/300x300/3c3c3c/ffffff?text=Radiohead" },
  { id: 3, title: "To Pimp a Butterfly", artist: "Kendrick Lamar", cover: "https://placehold.co/300x300/4d4d4d/ffffff?text=Kendrick" },
  { id: 5, title: "Blonde", artist: "Frank Ocean", cover: "https://placehold.co/300x300/5e5e5e/ffffff?text=Blonde" },
  { id: 6, title: "Currents", artist: "Tame Impala", cover: "https://placehold.co/300x300/6f6f6f/ffffff?text=Currents" },
  { id: 7, title: "Discovery", artist: "Daft Punk", cover: "https://placehold.co/300x300/808080/ffffff?text=Daft+Punk" },
];