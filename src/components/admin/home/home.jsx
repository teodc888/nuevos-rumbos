import React, { useEffect } from "react";

//Mui
import { Stack, Typography } from "@mui/material";

export default function HomeAdmin() {
  useEffect(() => {
    document.title = "Admin";
  }, []);
  return (
    <div>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h2" component="div" textAlign="center">
          Bienvenido Admin
        </Typography>
      </Stack>
    </div>
  );
}
