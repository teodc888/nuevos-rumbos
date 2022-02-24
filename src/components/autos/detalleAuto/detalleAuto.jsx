import React from "react";

//Mui
import { Stack, Typography, Card, CardMedia, Box, Grid } from "@mui/material";

//Componentes
import CardDetalle from "../cardDetalle/cardDetalle";
import Footer from "../../footer/footer";

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
            sx={{ display: { xs: "none", md: "flex" } }}
            component="img"
            height="540"
            image={imagen}
            alt="green iguana"
          />
          <CardMedia
            sx={{ display: { xs: "flex", md: "none" } }}
            component="img"
            height="340"
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
          <Box sx={{ width: "100%", marginTop: "3%" }}>
            <Grid
              container
              spacing={{ xs: 4, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={4} sm={4} md={2.4}>
                <CardDetalle titulo="Año" descripcion={año} />
              </Grid>
              <Grid item xs={4} sm={4} md={2.4}>
                <CardDetalle titulo="Carroceria" descripcion={carroceria} />
              </Grid>
              <Grid item xs={4} sm={4} md={2.4}>
                <CardDetalle titulo="Motor" descripcion={motor} />
              </Grid>
              <Grid item xs={4} sm={4} md={2.4}>
                <CardDetalle titulo="Transmision" descripcion={transmision} />
              </Grid>
              <Grid item xs={4} sm={4} md={2.4}>
                <CardDetalle titulo="Precio" descripcion={`$${precio}`} />
              </Grid>
              <Grid item xs={4} sm={4} md={2.4}>
                <CardDetalle titulo="Combustible" descripcion={combustible} />
              </Grid>
              <Grid item xs={4} sm={4} md={2.4}>
                <CardDetalle titulo="Kilometros" descripcion={kilometros} />
              </Grid>
              <Grid item xs={4} sm={4} md={2.4}>
                <CardDetalle titulo="Cv" descripcion={cv} />
              </Grid>
              <Grid item xs={4} sm={4} md={2.4}>
                <CardDetalle titulo="Puertas" descripcion={puertas} />
              </Grid>
              <Grid item xs={4} sm={4} md={2.4}>
                <CardDetalle titulo="Gnv" descripcion={gnv} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Stack>
      <Footer />
    </>
  );
}
