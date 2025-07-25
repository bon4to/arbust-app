import { NewsCard } from "./NewsCard";
import { latestNews } from "../../../../mock/latestNews";
import { SectionTitle } from "../../../common/SectionTitle";

export default function NewsSection() {
  return (
    <section className="bg-neutral-900 px-4 md:px-8 py-14">
      <SectionTitle title="Latest News" more={true} link="/news" />

      <NewsCard news={latestNews[0]} />
    </section>
  );
}