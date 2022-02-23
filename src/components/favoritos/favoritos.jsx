import React from "react";

//Mui
import { Stack, Typography, Grid, Box } from "@mui/material";

//Redux
import { useSelector } from "react-redux";


//components
import CardNR from "../card/card";





export default function Favoritos() {
  const favoritos = useSelector((state) => state.favoritos);




  return (
    <>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h3" component="div">
          FAVORITOS
        </Typography>
      </Stack>

      <Box sx={{ width: "100%", marginTop: "3%" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* mapeo de los productos para mostrarlos en la pantalla */}
          {favoritos.length === 0 ? (
            <Grid item xs={12} sm={12} md={12} >
              <Typography variant="h2" component="div" textAlign="center">
                No hay Favoritos
              </Typography>
            </Grid>
          ) : (
            favoritos.map((producto) => (
              <Grid item xs={4} sm={4} md={4} key={producto.id}>
                <CardNR
                  marca={producto.marca}
                  modelo={producto.modelo}
                  imagen={producto.imagen}
                  precio={producto.precio}
                  id={producto.id}
                  descripcion={producto.descripcion}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </>
  );
}
