import BaseLayout from "../layouts/BaseLayout";
import ContentLayout from "../layouts/ContentLayout";
import HeroSection from "../components/home/HeroSection";
import TrendingSection from "../components/home/TrendingSection";
import NewsSection from "../components/home/NewsSection";

export default function Welcome() {
  return (
    <BaseLayout>
      <HeroSection />
      <ContentLayout >
        <TrendingSection />
        <NewsSection />
      </ContentLayout>
    </BaseLayout>
  );
}