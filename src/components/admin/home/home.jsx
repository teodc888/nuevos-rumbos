import React, { useEffect } from "react";

//Mui
import { Button, Stack, Typography } from "@mui/material";

//Router
import { useNavigate } from "react-router";

export default function HomeAdmin() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Admin";
  }, []);

    const handleClickNavigateFormulario = () => {
        navigate("/formulario");
    };

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
        <Button onClick={handleClickNavigateFormulario}>FORMULARIO</Button>
      </Stack>
    </div>
  );
}
