import BaseLayout from "../layouts/BaseLayout";
import ContentLayout from "../layouts/ContentLayout";
import TrendingSection from "../components/features/home/trending-albums/TrendingAlbumsSection";
import NewsSection from "../components/features/home/news/NewsSection";
import PopularReviews from "../components/features/home/popular-reviews/PopularReviewsSection";

export default function Home() {
  return (
    <BaseLayout>
      <ContentLayout >
        <TrendingSection />
        <NewsSection />
        <PopularReviews />
      </ContentLayout>
    </BaseLayout>
  );
}