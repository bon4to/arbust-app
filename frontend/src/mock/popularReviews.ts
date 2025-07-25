import type { Review } from "../types.ts";

// Mock data, simulating a future API response for popular community reviews.
// Applies the Review type to the array, ensuring all items match the shape
export const popularReviews: Review[] = [
  {
    id: 1,
    user: { name: "carl123", avatar: "https://i.pravatar.cc/24?img=3" },
    album: { title: "To Pimp a Butterfly", year: 2015, artist: "Kendrick Lamar", cover: "https://placehold.co/120x120" },
    rating: 50,
    likes: 10238,
    comments: 210,
    content: "A masterpiece of modern hip-hop, Kendrick's lyrical depth and production are unparalleled. Still listening it over and over.",
  },
  {
    id: 2,
    user: { name: "bob_is_bob", avatar: "https://i.pravatar.cc/24?img=2" },
    album: { title: "DON'T TAP THE GLASS", year: 2025, artist: "Tyler, the Creator", cover: "https://placehold.co/120x120" },
    rating: 45,
    likes: 4061,
    comments: 85,
    content: "please don't tap the glass.",
  },
  {
    id: 3,
    user: { name: "aliceinwonder", avatar: "https://i.pravatar.cc/24?img=1" },
    album: { title: "The Tortured Poets Department", year: 2024, artist: "Taylor Swift", cover: "https://placehold.co/120x120" },
    rating: 40,
    likes: 3455,
    comments: 43,
    content: "i am a tortured poet and i love this album",
  },
];
