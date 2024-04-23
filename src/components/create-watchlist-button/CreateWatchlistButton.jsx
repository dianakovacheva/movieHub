import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Link } from "react-router-dom";

export default function CreateWatchlistButton() {
  return (
    <Box sx={{ display: "flex", gap: 6, flexWrap: "wrap" }} order={4}>
      <Link to="/create-watchlist">
        <Button startDecorator={<BookmarkAddIcon />} color="none">
          Watchlist
        </Button>
      </Link>
    </Box>
  );
}
