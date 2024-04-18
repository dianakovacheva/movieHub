import { useState, useEffect, useRef } from "react";
import "./Home.css";

const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const API_KEY = "?api_key=2c97b31d10e9dcecfd977f6061f863d6";

export default function Home() {
  const [movies, setMovies] = useState();
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
          `${BASE_URL}${API_KEY}`
          // , {
          //   signal: abortControllerRef.current?.signal,
          // }
        );

        const movies = await res.json();
        setMovies(movies);
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

  return <p>Home</p>;
}
