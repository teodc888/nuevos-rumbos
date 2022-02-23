import React from "react";

import { Stack, Typography, Card, CardMedia, Box } from "@mui/material";

export default function DetalleAuto({
  marca,
  modelo,
  imagen,
  descripcion,
  año,
  carroceria,
  motor,
  transmision,
  precio,
  combustible,
  kilometros,
  cv,
  puertas,
  gnv,
}) {
  return (
    <>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Card sx={{ maxWidth: "100%", margin: "auto" }}>
          <CardMedia
            component="img"
            height="640"
            image={imagen}
            alt="green iguana"
          />
        </Card>
        <Box textAlign="center">
          <Typography variant="h3" component="div" textAlign="center">
            {marca} {modelo}
          </Typography>
          <Typography variant="body1" component="div">
            {descripcion}
          </Typography>
          <Typography variant="h5" component="div">
            Año: {año}
          </Typography>

          <Typography variant="h5" component="div">
            Carroceria: {carroceria}
          </Typography>

          <Typography variant="h5" component="div">
            Motor: {motor}
          </Typography>

          <Typography variant="h5" component="div">
            Transmision: {transmision}
          </Typography>

          <Typography variant="h5" component="div">
            Precio: {precio}
          </Typography>

          <Typography variant="h5" component="div">
            Combustible: {combustible}
          </Typography>

          <Typography variant="h5" component="div">
            Kilometros: {kilometros}
          </Typography>

          <Typography variant="h5" component="div">
            Cv: {cv}
          </Typography> 

          <Typography variant="h5" component="div">
            Puertas: {puertas}
          </Typography>

          <Typography variant="h5" component="div">
            Gnv: {gnv}
          </Typography>

          
        </Box>
      </Stack>
    </>
  );
}
