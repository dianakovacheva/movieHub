import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";

export default function SignInButton() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        textWrap: "nowrap",
      }}
      order={6}
    >
      <Button color="none">Sign in</Button>
    </Box>
  );
}
