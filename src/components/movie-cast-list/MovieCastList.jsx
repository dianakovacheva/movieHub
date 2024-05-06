import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";

// eslint-disable-next-line react/prop-types
export default function MovieCastList({ movieCast }) {
  const imageURL = "https://image.tmdb.org/t/p/w500/";

  return (
    movieCast && (
      <Box sx={{ width: 320 }}>
        <Typography
          id="ellipsis-list-demo"
          level="body-xs"
          textTransform="uppercase"
          sx={{ letterSpacing: "0.15rem" }}
        >
          Top cast
        </Typography>
        <List
          aria-labelledby="ellipsis-list-demo"
          sx={{ "--ListItemDecorator-size": "56px" }}
        >
          {movieCast ? (
            movieCast.map((actor) => (
              <ListItem key={actor.id}>
                <ListItemDecorator>
                  <Avatar src={`${imageURL}${actor.profile_path}`} />
                </ListItemDecorator>
                <ListItemContent>
                  <Typography level="title-sm">{actor.name}</Typography>
                  <Typography level="body-sm" noWrap>
                    {actor.character}
                  </Typography>
                </ListItemContent>
              </ListItem>
            ))
          ) : (
            <Typography>No actors to show...</Typography>
          )}
        </List>
      </Box>
    )
  );
}
