import * as React from "react";
import ReactPlayer from "react-player/youtube";

import MovieVideoCardCSS from "./MovieVideoCardCSS.module.css";

// eslint-disable-next-line react/prop-types
export default function MovieVideoCard({ movieKey }) {
  return (
    movieKey && (
      <ReactPlayer
        controls={true}
        url={`https://www.youtube.com/watch?v=${movieKey}`}
        className={MovieVideoCardCSS.player}
      />
    )
  );
}
