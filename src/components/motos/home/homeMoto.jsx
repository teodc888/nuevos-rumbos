import React, { useEffect } from "react";

// Mui
import { Typography, Stack, Grid, Box } from "@mui/material";

//Components

import CardNR from "../../card/card";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { getProductosMoto } from "../../../redux/actions/index";

export default function HomeMoto() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductosMoto());
  }, [dispatch]);

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
      </Stack>

      <Box sx={{ width: "100%", marginTop: "50px" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {motos.map((moto) => (
            <Grid item xs={4} sm={4} md={4} key={moto.id}>
              <CardNR
                nombre={moto.nombre}
                imagen={moto.imagen}
                precio={moto.precio}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
