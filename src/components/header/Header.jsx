import * as React from "react";
import Stack from "@mui/joy/Stack";

import HeaderCSS from "./HeaderCSS.module.css";

import Logo from "../logo/Logo";
import MenuDropdown from "../menu-dropdown/MenuDropdown";
import SearchField from "../search-field/SearchField";
import CreateWatchlistButton from "../create-watchlist-button/CreateWatchlistButton";
import SignInButton from "../sign-in-button/SignInButton";
import SwitchMode from "../switch-mode/SwitchMode";

import Sheet from "@mui/joy/Sheet";

export default function Header() {
  return (
    <>
      <Sheet
        sx={{ backgroundColor: "neutral" }}
        className={HeaderCSS.container}
      >
        <Stack className={HeaderCSS.navigation}>
          <Logo />
          <MenuDropdown />
          <SearchField />
          <CreateWatchlistButton />
          <SignInButton />
          <SwitchMode />
        </Stack>
      </Sheet>
    </>
  );
}
