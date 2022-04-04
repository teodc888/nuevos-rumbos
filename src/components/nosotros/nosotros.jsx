import React from "react";
import {
  Container,
//   Grid,
//   Box,
  Card,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";

//Imagenes
import NuevosRumbos from "../../images/nuevoRumbos.png";

export default function Nosotros() {
  return (
    <Container>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h4" color="textPrimary">
          Nosotros
        </Typography>
        <Card sx={{ maxWidth: "100%" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100%"
            image={NuevosRumbos}
          />
        </Card>
      </Stack>
    </Container>
  );
}
