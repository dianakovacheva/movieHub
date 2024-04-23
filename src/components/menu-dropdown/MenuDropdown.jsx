import * as React from "react";
import MenuButton from "@mui/joy/MenuButton";
import Menu from "@mui/joy/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TvIcon from "@mui/icons-material/Tv";
import GroupIcon from "@mui/icons-material/Group";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import { Link } from "react-router-dom";

import MenuDropdownCSS from "./MenuDropdownCSS.module.css";

export default function MenuDropdown() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const createHandleClose = (index) => () => {
    if (typeof index === "number") {
      setSelectedIndex(index);
    }
  };

  return (
    <Dropdown>
      <MenuButton
        className={MenuDropdownCSS.dropdownMenu}
        color="none"
        startDecorator={<MenuIcon />}
      >
        Menu
      </MenuButton>
      <Menu>
        <List>
          {/* Start Movies */}
          <ListItem
            selected={selectedIndex === 1}
            onClick={createHandleClose(1)}
          >
            <ListItemDecorator>
              <LocalMoviesIcon />
            </ListItemDecorator>
            Movies
          </ListItem>
          <MenuItem
            {...(selectedIndex === 1 && { selected: true, variant: "soft" })}
            onClick={createHandleClose(1)}
          >
            <Link to="/popular-movies">Popular Movies</Link>
          </MenuItem>
          <MenuItem
            {...(selectedIndex === 1 && { selected: true, variant: "soft" })}
            onClick={createHandleClose(1)}
          >
            <Link to="/now-playing-movies">Now Playing</Link>
          </MenuItem>
          <MenuItem
            {...(selectedIndex === 1 && { selected: true, variant: "soft" })}
            onClick={createHandleClose(1)}
          >
            <Link to="/upcoming-movies">Upcoming</Link>
          </MenuItem>
          <MenuItem
            {...(selectedIndex === 1 && { selected: true, variant: "soft" })}
            onClick={createHandleClose(1)}
          >
            <Link to="/top-rated-movies">Top Rated</Link>
          </MenuItem>
          {/* End Movies */}

          {/* Start TV Shows */}
          <ListItem
            selected={selectedIndex === 2}
            onClick={createHandleClose(2)}
          >
            <ListItemDecorator>
              <TvIcon />
            </ListItemDecorator>
            TV Shows
          </ListItem>
          <MenuItem
            {...(selectedIndex === 2 && {
              selected: true,
              variant: "soft",
            })}
            onClick={createHandleClose(2)}
          >
            <Link to="/popular-shows">Popular</Link>
          </MenuItem>
          <MenuItem
            {...(selectedIndex === 2 && {
              selected: true,
              variant: "soft",
            })}
            onClick={createHandleClose(2)}
          >
            <Link to="/airing-today-shows">Airing Today</Link>
          </MenuItem>
          <MenuItem
            {...(selectedIndex === 2 && {
              selected: true,
              variant: "soft",
            })}
            onClick={createHandleClose(2)}
          >
            <Link to="/on-tv-shows">On TV</Link>
          </MenuItem>
          <MenuItem
            {...(selectedIndex === 2 && {
              selected: true,
              variant: "soft",
            })}
            onClick={createHandleClose(2)}
          >
            <Link to="/top-rated-shows">Top Rated</Link>
          </MenuItem>
          {/* End TV Shows */}

          {/* Start Celebs */}
          <ListItem
            selected={selectedIndex === 3}
            onClick={createHandleClose(3)}
          >
            <ListItemDecorator>
              <GroupIcon />
            </ListItemDecorator>
            Celebs
          </ListItem>
          <MenuItem
            {...(selectedIndex === 3 && {
              selected: true,
              variant: "soft",
            })}
            onClick={createHandleClose(3)}
          >
            <Link to="/most-popular-celebs">Most Popular Celebs</Link>
          </MenuItem>
          {/* End Celebs */}
        </List>
      </Menu>
    </Dropdown>
  );
}
