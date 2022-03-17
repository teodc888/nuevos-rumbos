import React, { useState, useEffect } from "react";

//Mui
import { Typography, Stack, Grid, Box, Card, CardMedia, Container } from "@mui/material";

//Componets
import CardNR from "../../card/card";
import InputBuscador from "../InputBuscador/InputBuscador";

//Redux
import { useSelector } from "react-redux";

export default function Buscador() {
  const [resultado, setResultado] = useState("");
  const buscar = useSelector((state) => state.buscados);

  useEffect(() => {
    document.title = "Buscar";
  }, []);

  return (
    <Container maxWidth="xl">
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ marginTop: "2%" }}
      >
        <Typography variant="h2" component="div" textAlign="center">
          Buscador
        </Typography>
        <Box sx={{ width: "70%" }}>
          <InputBuscador setResultado={setResultado} />
        </Box>
        <Box sx={{ width: "100%", marginTop: "3%" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {buscar.length === 0 && resultado !== "" ? (
              <Grid item xs={4} sm={8} md={12} textAlign="center">
                <Typography variant="h5">
                  No hay publicaciones que coincidan con tu búsqueda.
                </Typography>
                <Typography variant="h5">
                  La búsqueda fue: {resultado}
                </Typography>
                <Card sx={{ maxWidth: 445, margin: "auto" }}>
                  <CardMedia
                    component="img"
                    height="350"
                    image={
                      "https://media0.giphy.com/media/NnSFnC428LRHaxUNzj/giphy.gif?cid=ecf05e47iwvvag667o4fgte95kxhlubf7fzlw61l83vkmbe2&rid=giphy.gif&ct=s"
                    }
                    alt="Image NotFount"
                  />
                </Card>
              </Grid>
            ) : (
              buscar.map((buscar) => (
                <Grid item xs={4} sm={4} md={4} key={buscar.id}>
                  <CardNR
                    marca={buscar.marca}
                    modelo={buscar.modelo}
                    imagen={buscar.imagen}
                    precio={buscar.precio}
                    id={buscar.id}
                    descripcion={buscar.descripcion}
                    favorito="true"
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}
