import * as React from "react";
import Stack from "@mui/joy/Stack";
import Divider from "@mui/joy/Divider";

import HeaderCSS from "./HeaderCSS.module.css";
import SearchField from "../search-field/SearchField";
import MenuDropdown from "../menu-dropdown/MenuDropdown";
import AddToWatchlist from "../add-to-watchlist/AddToWatchlist";
import SignInButton from "../sign-in-button/SignInButton";
import SwitchMode from "../switch-mode/SwitchMode";

export default function Header() {
  return (
    <>
      <Stack
        spacing={2}
        sx={{ width: "100%" }}
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        marginBottom={3}
        marginTop={2}
      >
        <p className={HeaderCSS.logo}>MovieHub</p>
        <MenuDropdown />
        <SearchField />
        {/* <Divider orientation="vertical" className={HeaderCSS.divider} /> */}
        <AddToWatchlist />
        <SignInButton />
        <SwitchMode />
      </Stack>
    </>
  );
}
