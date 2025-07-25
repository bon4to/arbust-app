import BaseLayout from "../layouts/BaseLayout";
import ContentLayout from "../layouts/ContentLayout";
import HeroSection from "../components/welcome/HeroSection";
import TrendingSection from "../components/welcome/TrendingSection";

export default function Welcome() {
  return (
    <BaseLayout>
      <HeroSection />
      <ContentLayout >
        <TrendingSection />
      </ContentLayout>
    </BaseLayout>
  );
}