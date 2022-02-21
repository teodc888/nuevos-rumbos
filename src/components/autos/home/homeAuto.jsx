import React, {useEffect} from "react";

// Mui
import { Typography, Stack, Grid, Box } from "@mui/material";

//Components
import CardNR from "../../card/card";
import Carrousel from "../../carrousel/carrousel";
import Buscador from "../../buscador/buscador";

//Redux
import { useSelector } from "react-redux";


export default function HomeAuto() {

  const autos = useSelector((state) => state.autos);

  useEffect(() => {
    document.title = "Autos";
  }, []);

  return (
    <div>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h1" component="div">
          Autos
        </Typography>
        <Carrousel />
        <Buscador opciones="auto" />

      </Stack>

      <Box sx={{ width: "100%", marginTop: "10%" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
        {/* mapeo de los autos para mostrarlos en la pantalla */}
          {
            autos.map((auto) => (
              <Grid item xs={4} sm={4} md={4} key={auto.id}>
                <CardNR
                nombre={auto.nombre}
                imagen={auto.imagen}
                precio={auto.precio}
                id={auto.id}
                descripcion={auto.descripcion}
                />
                </Grid>
            ))
          }
        </Grid>
      </Box>
    </div>
  );
}
