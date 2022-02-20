import React from "react";

// Mui
import { Typography, Stack, Grid, Box } from "@mui/material";

//Components
import CardNR from "../../card/card";
import Carrousel from "../../carrousel/carrousel";


//Redux
import { useSelector } from "react-redux";


export default function HomeRepuestos() {

  const repuestos = useSelector((state) => state.repuestos);

  
  return (
    <div>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h1" component="div">
          REPUESTOS
        </Typography>
        <Carrousel />
      </Stack>

      <Box sx={{ width: "100%", marginTop: "10%" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* //mapeo de los repuestos para mostrarlos en la pantalla */}
          {repuestos.map((repuesto) => (
            <Grid item xs={4} sm={4} md={4} key={repuesto.id}>
              <CardNR
                nombre={repuesto.nombre}
                imagen={repuesto.imagen}
                precio={repuesto.precio}
                id={repuesto.id}
                descripcion={repuesto.descripcion}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
