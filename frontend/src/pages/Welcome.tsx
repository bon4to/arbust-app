// src/pages/Home.jsx

import BaseLayout from "../layouts/BaseLayout";
import ContentLayout from "../layouts/ContentLayout";
import HeroSection from "../components/home/HeroSection";
import TrendingSection from "../components/home/TrendingSection";

export default function Home() {
  return (
    <BaseLayout>
      <HeroSection />
      <ContentLayout >
        <TrendingSection />
      </ContentLayout>
    </BaseLayout>
  );
}