import BaseLayout from "../layouts/BaseLayout";
import ContentLayout from "../layouts/ContentLayout";
import TrendingSection from "../components/home/TrendingSection";
import NewsSection from "../components/home/NewsSection";
import PopularReviews from "../components/home/PopularReviewsSection";

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