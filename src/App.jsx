import { useState, useEffect, useRef } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Stack from "@mui/joy/Stack";

import Sheet from "@mui/joy/Sheet";

import PageNotFound from "./components/page-not-found/PageNotFound";
import PopularMovies from "./components/popular-movies/PopularMovies";
import SignInForm from "./components/signIn-form/SignInForm.jsx";
import Watchlist from "./components/watchlist/Watchlist";

import "./App.css";

import Header from "./components/header/Header";
import MovieCard from "./components/movie-card/MovieCard";
import CircularProgressSpinner from "./components/circular-progress/CircularProgressSpinner";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home.jsx";
import MovieDetails from "./components/movie-details/MovieDetails.jsx";

const BASE_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=2c97b31d10e9dcecfd977f6061f863d6";

export default function App() {
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

  if (isLoading) {
    return <CircularProgressSpinner />;
  }

  const routers = (
    <>
      <Routes class="routesContainer">
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/popular-movies" element={<PopularMovies />} />
        <Route path="/create-watchlist" element={<Watchlist />} />
        <Route path="/:id" element={<MovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "column" }}
        alignItems="center"
        justifyContent="space-between"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        flexWrap="wrap"
        useFlexGap
      >
        <Header />
        <Sheet sx={{ backgroundColor: "neutral" }}>{routers}</Sheet>
        <Footer />
      </Stack>
    </>
  );
}
