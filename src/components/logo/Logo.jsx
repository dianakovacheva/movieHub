import * as React from "react";
import { Link } from "react-router-dom";

import LogoCSS from "./LogoCSS.module.css";

export default function Logo() {
  return (
    <Link to="/" className={LogoCSS.logo}>
      MovieHub
    </Link>
  );
}
