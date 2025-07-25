import { trendingAlbums } from "../mock/trendingAlbums";
import { latestNews } from "../mock/latestNews";

export async function fetchReviews() {
    // To be replaced with the actual API endpoint
    // For now, we are using a mock endpoint
    // const res = await fetch("http://localhost:8080/reviews");
    const res = trendingAlbums
    return res;
}

export async function fetchTrendingAlbums() {
    // To be replaced with the actual API endpoint
    // For now, we are using a mock endpoint
    const res = await fetch("http://localhost:8080/trending-albums");
    return res;
}

export async function fetchLatestNews() {
    // To be replaced with the actual API endpoint
    // For now, we are using a mock endpoint
    // const res = await fetch("http://localhost:8080/latest-news");
    const res = latestNews;
    return res;
}
