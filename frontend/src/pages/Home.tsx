import BaseLayout from "../layouts/BaseLayout";
import ContentLayout from "../layouts/ContentLayout";
import TrendingSection from "../components/home/TrendingSection";

export default function Home() {
  return (
    <BaseLayout>
      <ContentLayout >
        <TrendingSection />
      </ContentLayout>
    </BaseLayout>
  );
}