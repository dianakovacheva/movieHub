import trendingMoviesTodayURL from "./movies-API-URL";

export async function getTrendingMoviesToday() {
  try {
    const res = await fetch(trendingMoviesTodayURL);
    const resData = await res.json();
    const moviesData = Object.values(resData.results);

    return moviesData;
  } catch (error) {
    throw error;
  }
}

// export const getMovieDetails = async (id) => {
//   try {
//     const res = await fetch(
//       `${baseApiURL}/movie/${id}?language=en-US&api_key=${
//         import.meta.env.VITE_API_KEY
//       }`
//     );

//     const resData = await res.json();
//     return resData;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// export const getMovieVideo = async (id) => {
//   try {
//     const res = await fetch(
//       `${baseApiURL}/movie/${id}/videos?language=en-US&api_key=${
//         import.meta.env.VITE_API_KEY
//       }`
//     );

//     const resData = await res.json();
//     return resData;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// export const getMovieCredits = async (id) => {
//   try {
//     const res = await fetch(
//       `${baseApiURL}/movie/${id}/credits?language=en-US&api_key=${
//         import.meta.env.VITE_API_KEY
//       }`
//     );

//     const resData = await res.json();

//     return resData;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };
