import type { Album } from "../types";

// Mock data, simulating a future API response for news articles.
// Applies the Album type to the array, ensuring all items match the shape
export const albumInfo: Album = {
  id: 7,
  title: "Discovery",
  artist: "Daft Punk",
  cover: "https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png",
  background: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgroove.de%2Fwp-content%2Fuploads%2F2021%2F02%2Fdaft-punk-press.jpg&f=1&nofb=1&ipt=34e38883765626cab98ff15af1986cfee0d469fc17696d05594c781c210e2932",
  description: "Released in 2001...",
  releaseDate: "2001-03-12",
  genre: "Electronic / Disco",
  duration: "60:00",
  label: "Virgin Records",
  averageNote: 4.6,
  tracks: [
    "One More Time",
    "Aerodynamic",
    "Digital Love",
    "Harder, Better, Faster, Stronger",
    "Crescendolls",
    "Nightvision",
    "Superheroes",
    "High Life",
    "Something About Us",
    "Voyager",
    "Veridis Quo",
    "Short Circuit",
    "Face to Face",
    "Too Long",
  ],
};