import { Box, Typography } from "@mui/joy";
import TrendingToday from "../trending-today/TrendingToday";

import HomeCSS from "./HomeCSS.module.css";
import CarouselComponent from "../carousel/CarouselComponent";

export default function Home() {
  return (
    <>
      <Box className={HomeCSS.homeContainer}>
        <CarouselComponent />
        <TrendingToday />
        <Typography>What to watch</Typography>
        <Typography>Top 10 on movieHub this week</Typography>
        <Typography>Explore what’s streaming</Typography>
      </Box>
    </>
  );
}
