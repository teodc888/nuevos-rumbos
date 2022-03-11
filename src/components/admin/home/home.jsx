import React, { useEffect } from "react";

//Mui
import { Stack, Typography, Box, Grid } from "@mui/material";

import CardAdmin from "../cardAdmin/cardAdmin";

const admin = [
  {
    titulo: "Formulario Autos",
    imagen:
      "https://cdn.motor1.com/images/mgl/4JyZA/s1/lamborghini-aventador-lp-780-4-ultimae.webp",
    boton: "/formularioAuto",
  },
  {
    titulo: "Formulario Motos",
    imagen:
      "https://i0.wp.com/minutomotor.com.ar/wp-content/uploads/2020/10/DucatiPanigaleV12.jpg?resize=829%2C548&ssl=1",
    boton: "/formularioMoto",
  },
  {
    titulo: "Formulario Repuestos",
    imagen:
      "https://fotos.perfil.com/2021/09/29/trim/1280/720/gnc-1236972.jpg",
    boton: "/formularioRepuesto",
  },
  {
    titulo: "Editar Autos",
    imagen:
      "https://cdn.motor1.com/images/mgl/4JyZA/s1/lamborghini-aventador-lp-780-4-ultimae.webp",
    boton: "/editarAutos",
  },
  {
    titulo: "Editar Motos",
    imagen:
      "https://i0.wp.com/minutomotor.com.ar/wp-content/uploads/2020/10/DucatiPanigaleV12.jpg?resize=829%2C548&ssl=1",
    boton: "/editarMotos",
  },
  {
    titulo: "Editar Repuestos",
    imagen:
      "https://fotos.perfil.com/2021/09/29/trim/1280/720/gnc-1236972.jpg",
    boton: "/editarRepuestos",
  },
];

export default function HomeAdmin() {
  useEffect(() => {
    document.title = "Admin";
  }, []);

  return (
    <div>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h2" component="div" textAlign="center">
          Bienvenido Admin
        </Typography>
        <Box sx={{ width: "100%", marginTop: "3%" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {admin &&
              admin.map((producto) => (
                <Grid item xs={4} sm={4} md={4}>
                  <CardAdmin
                    titulo={producto.titulo}
                    imagen={producto.imagen}
                    boton={producto.boton}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Stack>
    </div>
  );
}
