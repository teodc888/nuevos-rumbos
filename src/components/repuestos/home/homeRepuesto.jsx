import React, { useEffect } from "react";

// Mui
import { Typography, Stack, Grid, Box } from "@mui/material";

//Components

import CardNR from "../../card/card";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { getProductosRepuesto } from "../../../redux/actions/index";

export default function HomeRepuestos() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductosRepuesto());
  }, [dispatch]);

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
      </Stack>

      <Box sx={{ width: "100%", marginTop: "50px" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {repuestos.map((repuesto) => (
            <Grid item xs={4} sm={4} md={4} key={repuesto.id}>
              <CardNR
                nombre={repuesto.nombre}
                imagen={repuesto.imagen}
                precio={repuesto.precio}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
