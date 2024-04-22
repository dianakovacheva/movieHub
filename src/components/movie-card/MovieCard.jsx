import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import Icon from "@mui/material/Icon";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

import MovieCardCSS from "./MovieCardCSS.module.css";

export default function MovieCard(movies) {
  const moviesArray = movies.movies;
  const moviePosterURL = "https://image.tmdb.org/t/p/w500/";

  return (
    <>
      {moviesArray.map((movie) => (
        <Card
          key={movie.id}
          variant="soft"
          sx={{
            width: 150,
            height: 300,
          }}
        >
          <CardOverflow>
            <AspectRatio ratio="1">
              <img
                src={`${moviePosterURL}${movie.poster_path}`}
                srcSet={`${moviePosterURL}${movie.poster_path}`}
                loading="lazy"
                alt={movie.title}
              />
            </AspectRatio>
            <IconButton
              aria-label="Like minimal photography"
              size="md"
              variant="solid"
              color="danger"
              sx={{
                position: "absolute",
                zIndex: 2,
                borderRadius: "50%",
                right: "1rem",
                bottom: 0,
                transform: "translateY(50%)",
              }}
            >
              <Favorite />
            </IconButton>
          </CardOverflow>
          <CardContent>
            <Typography level="title-md">
              <Link href="#multiple-actions" overlay underline="none">
                {movie.title}
              </Link>
            </Typography>
          </CardContent>
          <CardOverflow variant="soft">
            <Divider inset="context" />
            <CardContent
              orientation="horizontal"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                gap: 1,
              }}
            >
              <Icon aria-label="Rating" variant="solid">
                <StarIcon fontSize="medium" className={MovieCardCSS.starIcon} />
              </Icon>
              <Typography level="body-md">
                {movie.vote_average.toFixed(2).replace(".", ",")}
              </Typography>
              <Divider orientation="vertical" />
              <Icon aria-label="Rate movie" variant="Outlined" color="primary">
                <StarBorderOutlinedIcon fontSize="small" />
              </Icon>
            </CardContent>
          </CardOverflow>
        </Card>
      ))}
    </>
  );
}
