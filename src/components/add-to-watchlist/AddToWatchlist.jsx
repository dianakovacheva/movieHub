import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

export default function AddToWatchlist() {
  return (
    <Box sx={{ display: "flex", gap: 6, flexWrap: "wrap" }} order={5}>
      <Button startDecorator={<BookmarkAddIcon />} color="none">
        Watchlist
      </Button>
    </Box>
  );
}
