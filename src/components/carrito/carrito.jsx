import React from "react";

import { Stack, Typography, Grid, Box, Button, Container } from "@mui/material";

import Footer from "../footer/footer";
import CardCarrito from "../card/cardCarrito/cardCarrito";

import { useSelector } from "react-redux";

export default function Carrito() {
  const carrito = useSelector((state) => state.carrito);

  console.log(carrito);

  return (
    <>
      <Container maxWidth="lg">
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Typography variant="h3" component="div" textAlign="center">
            Carrito
          </Typography>
        </Stack>
        <Box sx={{ width: "100%", marginTop: "3%" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            
          >
            {/* mapeo de los productos para mostrarlos en la pantalla */}
            {carrito.length === 0 ? (
              <Grid item xs={12} sm={12} md={12}>
                <Typography
                  variant="h4"
                  component="div"
                  textAlign="center"
                  sx={{ mb: "40%" }}
                >
                  No hay ningun producto en carrito
                </Typography>
              </Grid>
            ) : (
                carrito.map((producto) => (
                <Grid item xs={4} sm={4} md={12} key={producto.id}  >
                  <CardCarrito
                    marca={producto.marca}
                    modelo={producto.modelo}
                    imagen={producto.imagen}
                    precio={Number(producto.precio)}
                    id={producto.id}
                    descripcion={producto.descripcion}
                    tipo="carrito"
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
