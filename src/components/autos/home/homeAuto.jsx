import React, { useEffect } from "react";

// Mui
import { Typography, Stack, Grid, Box } from "@mui/material";

//Components
import CardNR from "../../card/card";
import Carrousel from "../../carrousel/carrousel";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { getProductosAuto } from "../../../redux/actions/index";

export default function HomeAuto() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductosAuto());
  }, [dispatch]);

  const autos = useSelector((state) => state.autos);


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
      </Stack>

      <Box sx={{ width: "100%", marginTop: "10%" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {
            autos.map((auto) => (
              <Grid item xs={4} sm={4} md={4} key={auto.id}>
                <CardNR
                nombre={auto.nombre}
                imagen={auto.imagen}
                precio={auto.precio}
                />
                </Grid>
            ))
          }
        </Grid>
      </Box>
    </div>
  );
}
