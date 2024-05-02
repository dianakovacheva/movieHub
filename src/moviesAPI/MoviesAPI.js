const trendingMoviesTodayURL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${
  import.meta.env.VITE_API_KEY
}`;

// const trendingMoviesTodayURL =
//   "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=2c97b31d10e9dcecfd977f6061f863d6";

export const getTrendingMoviesToday = async () => {
  try {
    const res = await fetch(trendingMoviesTodayURL);
    const resData = await res.json();

    return resData;
  } catch (error) {
    throw new Error(error.message);
  }
};
