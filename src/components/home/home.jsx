import React from "react";
import CardNR from "../card/card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

export default function Home() {

  const docs = useSelector((state) => state.productos);
  return (
    <div>
      <Box sx={{ marginTop: "2%" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 4, md: 12 }}
        >
          {docs.map((doc) => (
            <Grid item xs={4} sm={4} md={4} key={doc.id}>
              <CardNR
                nombre={doc.nombre}
                imagen={doc.imagen}
                precio={doc.precio}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
