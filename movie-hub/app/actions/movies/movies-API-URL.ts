import baseApiURL from "./base-API-URL";

// Trending movies today
const trendingMoviesTodayURL = `${baseApiURL}/trending/movie/day?language=en-US&api_key=${process.env.API_KEY}`;

export default trendingMoviesTodayURL;
