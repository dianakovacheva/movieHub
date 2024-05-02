import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Icon from "@mui/material/Icon";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

import MovieCardCSS from "./MovieCardCSS.module.css";

export default function MovieCard(movie) {
  const moviePosterURL = "https://image.tmdb.org/t/p/w500/";

  return (
    <>
      <Card
        className={MovieCardCSS.cardContainer}
        variant="soft"
        key={movie.id}
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
            aria-label="Add to Watchlist"
            size="lg"
            variant="soft"
            color="neutral"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              opacity: 0.5,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 8,
            }}
          >
            <BookmarkAddIcon />
          </IconButton>
        </CardOverflow>
        <CardContent className={MovieCardCSS.movieTitle}>
          <Typography level="title-md">
            <Link href={movie.id} overlay underline="none">
              {movie.title}
            </Link>
          </Typography>
        </CardContent>
        <CardOverflow variant="soft">
          <Divider inset="context" />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
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
    </>
  );
}
