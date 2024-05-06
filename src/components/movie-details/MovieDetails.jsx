import { useEffect, useState } from "react";
import {
  getMovieCredits,
  getMovieDetails,
  getMovieVideo,
} from "../../moviesAPI/MoviesAPI";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/joy";
import MovieVideoCard from "../movie-video-card/MovieVideoCard";
import MovieCastList from "../movie-cast-list/MovieCastList";

function convertMinsToHrsMins(minutes) {
  let h = Math.floor(minutes / 60);
  let m = minutes % 60;
  return h + "h" + " " + m + "m";
}

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [movieVideo, setMovieVideo] = useState();
  const [movieCredits, setMovieCredits] = useState([]);
  const { id } = useParams();

  const moviePosterURL = "https://image.tmdb.org/t/p/w500/";
  let movieGenres = [];
  let releaseYear = "";
  let popularity = 0;
  let voteCount = "";
  let movieKey = "";
  let country = [];
  let productionCompanies = [];
  let movieCast;
  let movieCrew;
  let directors = [];
  let writers = [];

  useEffect(() => {
    try {
      getMovieDetails(id).then((res) => setMovie(res));
      getMovieVideo(id).then((res) => setMovieVideo(res));
      getMovieCredits(id).then((res) => setMovieCredits(res));
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  if (movie.genres) {
    movie.genres.map((genre) => {
      movieGenres.push(genre.name);
    });
  }

  if (movieGenres.length > 1) {
    movieGenres = movieGenres.join(", ");
  }

  if (movie.release_date) {
    releaseYear = movie.release_date.split("-")[0];
  }

  if (movie.vote_average) {
    popularity = Number(movie.vote_average).toFixed(1) + "/10";
  }

  if (movie.vote_count) {
    if (movie.vote_count > 1000) {
      voteCount = `${movie.vote_count}K`;
    } else if (movie.vote_count > 1000000) {
      voteCount = `${movie.vote_count}M`;
    } else {
      voteCount = movie.vote_count;
    }
  }

  if (movie.origin_country) {
    movie.origin_country.forEach((c) => country.push(c));
  }

  if (country.length > 1) {
    country = country.join(", ");
  }

  if (movie.production_companies) {
    movie.production_companies.map((company) => {
      productionCompanies.push(company.name);
    });
  }

  if (productionCompanies.length > 1) {
    productionCompanies = productionCompanies.join(", ");
  }

  if (movieCredits.cast) {
    movieCast = movieCredits.cast;
  }

  if (movieCredits.crew) {
    movieCrew = movieCredits.crew;
  }

  if (movieCredits.crew) {
    movieCrew.map((crew) => {
      crew.job === "Director" && directors.push(crew.name);
    });
  }

  if (directors.length > 1) {
    directors = directors.join(", ");
  }

  if (movieCredits.crew) {
    movieCrew.map((crew) => {
      crew.department === "Writing" && writers.push(crew.name);
    });
  }

  if (writers.length > 1) {
    writers = writers.join(", ");
  }

  if (movieVideo) {
    movieVideo.results.map((movieData) => {
      if (movieData.type.toLowerCase() === "trailer") {
        movieKey = movieData.key;
      }
    });
  }

  return (
    movie && (
      <Box>
        <img src={`${moviePosterURL}${movie.poster_path}`} alt={movie.title} />
        <Typography>{movie.title}</Typography>
        <Typography>Tagline: {movie.tagline}</Typography>
        <Typography>{`${releaseYear} (${country})`}</Typography>
        <Typography>{movieGenres}</Typography>
        <Typography>{convertMinsToHrsMins(movie.runtime)}</Typography>
        <Typography>{popularity}</Typography>
        <Typography>{voteCount}</Typography>
        <Typography>{movie.overview}</Typography>

        {productionCompanies.length > 1 ? (
          <Typography>Companies: {productionCompanies}</Typography>
        ) : (
          <Typography>Company: {productionCompanies}</Typography>
        )}

        {directors.length > 1 ? (
          <Typography>Directors: {directors}</Typography>
        ) : (
          <Typography>Director: {directors}</Typography>
        )}

        {writers.length > 1 ? (
          <Typography>Writers: {writers}</Typography>
        ) : (
          <Typography>Writer: {writers}</Typography>
        )}

        {movieGenres.length > 1 ? (
          <Typography>Genres: {movieGenres}</Typography>
        ) : (
          <Typography>Genre: {movieGenres}</Typography>
        )}

        <MovieVideoCard key={movie.id} movieKey={movieKey} />
        <MovieCastList movieCast={movieCast} />
      </Box>
    )
  );
}
