import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";

import { Link } from "react-router-dom";

import SignInButtonCSS from "./SignInButtonCSS.module.css";

export default function SignInButton() {
  return (
    <Box className={SignInButtonCSS.container}>
      <Link to="/sign-in">
        <Button color="none">Sign In</Button>
      </Link>
    </Box>
  );
}
