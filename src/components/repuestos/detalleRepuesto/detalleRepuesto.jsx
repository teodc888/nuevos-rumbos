import React from "react";

import { Stack, Typography, CardMedia, Card, CardContent } from "@mui/material";

import Footer from "../../footer/footer";

export default function DetalleRepuesto({
  marca,
  modelo,
  imagen,
  descripcion,
}) {
  return (
    <>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h3" component="div">
          {marca} {modelo}
        </Typography>
        <Card sx={{ maxWidth: 645, margin: "auto" }}>
          <CardMedia
            component="img"
            height="440"
            image={imagen}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body1" component="div">
              {descripcion}
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      <Footer />
    </>
  );
}
