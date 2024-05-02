import { useEffect, useState } from "react";
import { getTrendingMoviesToday } from "../../moviesAPI/MoviesAPI";
import { Typography, Box } from "@mui/joy";
import MovieCard from "../movie-card/MovieCard";

import TrendingTodayCSS from "./TrendingTodayCSS.module.css";

export default function TrendingToday() {
  const [trendingMoviesToday, setTrendingMoviesToday] = useState([]);

  useEffect(() => {
    try {
      getTrendingMoviesToday().then((res) =>
        setTrendingMoviesToday(res.results)
      );
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <>
      <Box className={TrendingTodayCSS.box}>
        <Typography className={TrendingTodayCSS.sectionTitle}>
          Featured today
        </Typography>
        <Box className={TrendingTodayCSS.trendingTodayContainer}>
          {trendingMoviesToday ? (
            trendingMoviesToday.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))
          ) : (
            <Typography>No movies to show...</Typography>
          )}
        </Box>
      </Box>
    </>
  );
}
