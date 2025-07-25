import type { Review } from '../../mock/popularReviews';
import { Star, ThumbsUp } from "lucide-react";


const RatingStars = ( rating: number ) => {
  // Normalize rating to a 0-5 scale
  if (rating <= 50 && rating >= 0) rating = rating / 10; else rating = 0;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-0.5 text-primary">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
      ))}
      {hasHalfStar && "½"}
    </div>
  );
};

export const ReviewCard = ({ review }: { review: Review }) => (
  <div className="flex gap-4 bg-neutral-800 rounded-lg overflow-hidden group transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-primary/20 p-4">
    <div>
      <img src={review.album.cover} alt={review.album.title} className="w-28 h-28 object-cover rounded" />
      <p className="text-sm text-neutral-400 mt-1 w-24 text-left">{review.album.artist}</p>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2 text-white font-semibold">
        <img src={review.user.avatar} className="w-6 h-6 rounded-full" alt="avatar" />
        <span>{review.user.name}</span>
      </div>
      <h3 className="text-lg font-bold text-white mt-1">
        {review.album.title} <span className="text-neutral-400">{review.album.year}</span>
      </h3>
      <div className="flex items-center gap-2 mt-1">
        {RatingStars(review.rating)}
        <span className="text-neutral-400 text-sm">{review.comments} comments</span>
      </div>
      <p className="text-sm text-neutral-300 mt-2 line-clamp-2">{review.content}</p>
      <button className="mt-2 flex items-center text-neutral-400 text-xs hover:text-primary transition">
        <ThumbsUp size={14} className="mr-1" />
        <span> Like review ⋅ {review.likes.toLocaleString()} likes</span>
      </button>
    </div>
  </div>
);
