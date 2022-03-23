import React, { useEffect } from "react";

//Mui
import { Stack, Typography, Grid, Box, Button, Container } from "@mui/material";

//Redux
import { deleteFavoritos } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

//components
import CardNR from "../card/card";
import Footer from "../footer/footer";

//toastify
import { toast } from "react-toastify";

export default function Favoritos() {
  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.favoritos);

  console.log(favoritos);

  const errorSubmit = () => {
    toast.error("Productos eliminados con éxito", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const handleClickDelete = () => {
    dispatch(deleteFavoritos());
    errorSubmit();
  };

  useEffect(() => {
    document.title = "Favoritos";
  }, []);

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
            FAVORITOS
          </Typography>
          {favoritos.length !== 0 && (
            <Button
              sx={{ bgcolor: "green", color: "white" }}
              variant="contained"
              onClick={() => handleClickDelete()}
            >
              Borrar Todo
            </Button>
          )}
        </Stack>

        <Box sx={{ width: "100%", marginTop: "3%" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {/* mapeo de los productos para mostrarlos en la pantalla */}
            {favoritos.length === 0 ? (
              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h4" component="div" textAlign="center" sx={{mb:"40%"}}>
                  No hay ningun producto en favoritos
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
                    precioDescuento={producto.precioDescuento}
                    tipo={producto.tipo}
                    descuento={producto.descuento}
                    addfav={true}
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
