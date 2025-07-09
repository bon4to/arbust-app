export async function fetchReviews() {
    // To be replaced with the actual API endpoint
    // For now, we are using a mock endpoint
    const res = await fetch("http://localhost:8080/reviews");
    return res.json();
}