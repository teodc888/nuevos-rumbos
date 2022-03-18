import React, { useState, useEffect } from "react";

//Mui
import {
  Stack,
  Typography,
  CardMedia,
  Card,
  CardContent,
  Grid,
  Box,
  Button,
  CardActions,
  Alert,
  Container,
} from "@mui/material";

//Components
import Footer from "../../footer/footer";
import CarrouselCard from "../../carrousel/carrouselCard/carrouselCard";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { favoritos } from "../../../redux/actions/index";
import { eliminarFavoritos } from "../../../redux/actions/index";

//toastify
import { toast } from "react-toastify";

export default function DetalleRepuesto({
  marca,
  modelo,
  imagen,
  descripcion,
  id,
  precio,
  descuento,
  precioDescuento,
}) {
  // //color
  const colorElegido = useSelector((state) => state.color);

  const favorite = useSelector((state) => state.favoritos);
  let aux = [];
  if (favorite.length > 0) {
    aux = favorite.map((el) => el.id);
  }
  const [fav, setFav] = useState(aux?.includes(id) ? true : false);
  const dispatch = useDispatch();

  //toastify
  const successSubmitFavorite = () => {
    toast.success("Producto guardado con éxito", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
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

  const addFavoritos = () => {
    dispatch(
      favoritos({
        marca: marca,
        modelo: modelo,
        imagen: imagen,
        precio: precio,
        id: id,
      })
    );
    setFav(true);
    successSubmitFavorite();
  };
  const deleteFavoritos = () => {
    dispatch(eliminarFavoritos(id));
    setFav(false);
    errorSubmit();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const darkMode = useSelector((state) => state.darkMode);

  const darkModeCard = () => {
    if (darkMode === "dark") {
      return "black";
    } else {
      return "white";
    }
  };

  return (
    <>
      <Container maxWidth="lg">
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Box sx={{ width: "100%", marginTop: "1%" }}>
            <Grid
              container
              spacing={{ xs: 4, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={4} sm={8} md={8}>
                {descuento > 0 ? (
                  <Box sx={{ position: "absolute" }}>
                    <Alert
                      variant="outlined"
                      severity="success"
                      sx={{ bgcolor: darkModeCard() }}
                    >
                      {descuento}% descuento
                    </Alert>
                  </Box>
                ) : null}
                <Card sx={{ maxWidth: "100%", margin: "auto" }}>
                  <CardMedia
                    sx={{
                      display: { xs: "none", md: "flex" },
                      objectFit: "contain",
                    }}
                    component="img"
                    height="450"
                    image={imagen[0]}
                    alt="green iguana"
                  />
                  <CardMedia
                    sx={{
                      display: { xs: "flex", md: "none" },
                      objectFit: "contain",
                    }}
                    component="img"
                    height="240"
                    image={imagen[0]}
                    alt="green iguana"
                  />
                </Card>
              </Grid>
              <Grid
                item
                xs={4}
                sm={8}
                md={4}
              >
                <Card sx={{ maxWidth: 445, margin: "auto" }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      textAlign="center"
                      sx={{
                        marginTop: "1%",
                        display: { xs: "block", md: "none" },
                      }}
                    >
                      {marca} {modelo}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      textAlign="center"
                      sx={{
                        marginTop: "1%",
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      {marca} {modelo}
                    </Typography>
                    <Typography variant="h5" sx={{ marginTop: "10%" }}>
                      {descuento > 0 ? (
                        <>
                          <del>${precio}</del> ${precioDescuento}
                        </>
                      ) : (
                        <>${precio}</>
                      )}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{ marginTop: "10%" }}
                    >
                      Descripcion: {descripcion}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ mt: "5%" }}>
                    {fav === false ? (
                      <Button
                        variant="contained"
                        onClick={addFavoritos}
                        sx={{ bgcolor: "green", color: "white", width: "100%" }}
                      >
                        Agregar a favoritos
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="error"
                        onClick={deleteFavoritos}
                        sx={{
                          bgcolor: colorElegido,
                          color: "white",
                          width: "100%",
                        }}
                      >
                        Eliminar de favoritos
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              textAlign="center"
              sx={{ mt: "2%", display: { xs: "none", md: "block" } }}
            >
              Repuestos Destacados
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="center"
              sx={{ mt: "2%", display: { xs: "block", md: "none" } }}
            >
              Repuestos Destacados
            </Typography>
            <CarrouselCard tipo="repuesto" />
          </Box>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
