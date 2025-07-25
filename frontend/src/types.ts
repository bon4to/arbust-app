export interface News {
  id: number;
  title: string;
  artist: string;
  cover: string;
  summary: string;
}

export interface Review {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  album: {
    title: string;
    year: number;
    artist: string;
    cover: string;
  };
  rating: number;
  likes: number;
  comments: number;
  content: string;
}

export interface Album {
  id: number;
  title: string;
  artist: string;
  cover: string;
}