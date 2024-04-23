import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import Stack from "@mui/joy/Stack";
import Autocomplete from "@mui/joy/Autocomplete";

export default function SearchField() {
  return (
    <Stack spacing={2} sx={{ width: "60%", flexGrow: "1" }} order={3}>
      <FormControl id="free-solo-2-demo">
        <Autocomplete
          placeholder="Search anything..."
          type="search"
          freeSolo
          disableClearable
          options={top100Films.map((option) => option.title)}
        />
      </FormControl>
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
];
