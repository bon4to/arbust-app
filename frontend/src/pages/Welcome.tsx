import BaseLayout from "../layouts/BaseLayout";
import ContentLayout from "../layouts/ContentLayout";
import HeroSection from "../components/features/home/HeroSection";
import TrendingSection from "../components/features/home/trending-albums/TrendingAlbumsSection";
import NewsSection from "../components/features/home/news/NewsSection";
import PopularReviews from "../components/features/home/popular-reviews/PopularReviewsSection";

export default function Welcome() {
  return (
    <BaseLayout>
      <HeroSection />
      <ContentLayout >
        <TrendingSection />
        <NewsSection />
        <PopularReviews />
      </ContentLayout>
    </BaseLayout>
  );
}