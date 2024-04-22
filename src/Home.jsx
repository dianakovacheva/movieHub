import { useState, useEffect, useRef } from "react";
import Stack from "@mui/joy/Stack";

import "./Home.css";

import MovieCard from "./components/movie-card/MovieCard";
import Header from "./components/header/Header";

const BASE_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=2c97b31d10e9dcecfd977f6061f863d6";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      // abortControllerRef.current?.abort();
      // abortControllerRef.current = new AbortController();

      setIsLoading(true);

      try {
        const res = await fetch(
          BASE_URL
          // , {
          //   signal: abortControllerRef.current?.signal,
          // }
        );

        const resData = await res.json();

        setMovies(resData.results);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
          return;
        }
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (error) {
    return <p>Something went wrong! Please try again.</p>;
  }

  // Add spinner
  // if(isLoading) {

  // }

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="left"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        flexWrap="wrap"
        useFlexGap
      >
        <Header />
        {movies ? <MovieCard movies={movies} /> : <p>No movies to show...</p>}
      </Stack>
    </>
  );
}
