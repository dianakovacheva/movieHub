import * as React from "react";
import { useColorScheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Button from "@mui/joy/Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { CssVarsProvider } from "@mui/joy/styles";
import SwitchModeCSS from "./SwitchModeCSS.module.css";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="none">
        <DarkModeIcon />
      </Button>
    );
  } else {
    <LightModeIcon />;
  }

  return (
    <Button
      variant="none"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </Button>
  );
}

export default function SwitchMode() {
  return (
    <CssVarsProvider>
      <main className={SwitchModeCSS.switchModeContainer}>
        <ModeToggle />
        <CssBaseline />
      </main>
    </CssVarsProvider>
  );
}
