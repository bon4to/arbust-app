import BaseLayout from "../layouts/BaseLayout";
import ContentLayout from "../layouts/ContentLayout";
import TrendingSection from "../components/home/TrendingSection";
import NewsSection from "../components/home/NewsSection";

export default function Home() {
  return (
    <BaseLayout>
      <ContentLayout >
        <TrendingSection />
        <NewsSection />
      </ContentLayout>
    </BaseLayout>
  );
}