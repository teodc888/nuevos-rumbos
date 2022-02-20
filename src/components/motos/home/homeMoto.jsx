import React from "react";

// Mui
import { Typography, Stack, Grid, Box } from "@mui/material";

//Components
import Carrousel from "../../carrousel/carrousel";
import CardNR from "../../card/card";

//Redux
import { useSelector } from "react-redux";


export default function HomeMoto() {

  const motos = useSelector((state) => state.motos);

  return (
    <div>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h1" component="div">
          MOTOS
        </Typography>
        <Carrousel />
      </Stack>

      <Box sx={{ width: "100%", marginTop: "10%" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* //mapeo de las motos para mostrarlos en la pantalla */}
          {motos.map((moto) => (
            <Grid item xs={4} sm={4} md={4} key={moto.id}>
              <CardNR
                nombre={moto.nombre}
                imagen={moto.imagen}
                precio={moto.precio}
                id={moto.id}
                descripcion={moto.descripcion}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
