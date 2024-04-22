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

import MenuDropdownCSS from "./MenuDropdownCSS.module.css";

export default function MenuDropdown() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

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
        <MenuItem
          {...(selectedIndex === 0 && {
            selected: true,
            variant: "soft",
          })}
          onClick={createHandleClose(0)}
        >
          <ListItemDecorator>
            <LocalMoviesIcon />
          </ListItemDecorator>
          Movies
        </MenuItem>
        <MenuItem selected={selectedIndex === 1} onClick={createHandleClose(1)}>
          <ListItemDecorator>
            <TvIcon />
          </ListItemDecorator>
          TV Shows
        </MenuItem>
        <MenuItem selected={selectedIndex === 2} onClick={createHandleClose(2)}>
          <ListItemDecorator>
            <GroupIcon />
          </ListItemDecorator>
          Celebs
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
