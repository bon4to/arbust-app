import { popularReviews } from "../../mock/popularReviews";
import { SectionTitle } from "../ui/SectionTitle";
import { ReviewCard } from "./ReviewCards";

const PopularReviews = () => (
  <section className="py-14 px-4 md:px-8 bg-neutral-900">
    <SectionTitle title="Popular Reviews" more={true} link="/news" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {popularReviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  </section>
);

export default PopularReviews;