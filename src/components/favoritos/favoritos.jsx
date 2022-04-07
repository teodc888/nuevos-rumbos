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

//Router
import { useNavigate } from "react-router";

export default function Favoritos() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.favoritos);

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

  const handleClickHome = () => {
    navigate("/");
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
            Favoritos
          </Typography>
          {favoritos.length !== 0 && (
            <Button
              sx={{ bgcolor: "red", color: "white" }}
              variant="contained"
              color="error"
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
              <>
                <Grid item xs={12} sm={12} md={12}>
                  <Typography
                    variant="h5"
                    component="div"
                    textAlign="center"
                    sx={{ display: { xs: "none", md: "block" } }}
                  >
                    No hay ningun producto en favoritos
                  </Typography>
                  <Typography
                    variant="h7"
                    component="div"
                    textAlign="center"
                    sx={{ display: { xs: "block", md: "none" } }}
                  >
                    No hay ningun producto en favoritos
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleClickHome}
                    sx={{ mb: "40%", bgcolor: "green", color: "white" }}
                  >
                    Agregar productos a favoritos
                  </Button>
                </Grid>
              </>
            ) : (
              favoritos.map((producto) => (
                <Grid item xs={4} sm={4} md={4} key={producto.id}>
                  <CardNR
                    nombre={producto.nombre}
                    marca={producto.marca}
                    modelo={producto.modelo}
                    imagen={producto.imagen}
                    precio={producto.precio}
                    id={producto.id}
                    descripcion={producto.descripcion}
                    precioDescuento={producto.precioDescuento}
                    detalle={producto.detalle}
                    descuento={producto.descuento}
                    addfav={true}
                    kilometros={producto.kilometros}
                    año={producto.año}
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
