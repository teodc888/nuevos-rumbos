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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

//Components
import Footer from "../../footer/footer";
import CarrouselCard from "../../carrousel/carrouselCard/carrouselCard";

//Redux
import { useDispatch, useSelector } from "react-redux";
import {
  favoritos,
  eliminarFavoritos,
  agregarCarrito,
  deleteCarrito,
} from "../../../redux/actions/index";

//iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

//toastify
import { toast } from "react-toastify";

export default function DetalleRepuesto({
  nombre,
  imagen,
  descripcion,
  id,
  precio,
  descuento,
  precioDescuento,
  detalle,
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
        nombre: nombre,
        imagen: imagen,
        precio: Number(precio),
        precioDescuento: Number(precioDescuento),
        descuento: Number(descuento),
        id: id,
        detalle: detalle,
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

  const carrito = useSelector((state) => state.carrito);
  let aux1 = [];
  if (carrito.length > 0) {
    aux1 = carrito.map((el) => el.id);
  }

  const [cart, setCart] = useState(aux1?.includes(id) ? true : false);

  console.log(cart);
  //agregar o eliminar favoritos
  const agregarCarritos = () => {
    dispatch(
      agregarCarrito({
        nombre: nombre,
        imagen: imagen,
        precio: Number(precio),
        id: id,
        precioDescuento: precioDescuento,
        descuento: descuento,
        cantidad: 1,
      })
    );
    setCart(true);
    successSubmitFavorite();
  };

  const eliminarDeCarrito = () => {
    dispatch(deleteCarrito(id));
    errorSubmit();
    setCart(false);
  };

  useEffect(() => {
    document.title = nombre;
    window.scrollTo(0, 0);
  }, [nombre]);

  const handleWhatsapp = () => {
    window.open(
      "https://wa.me/543512550311?text=Hola,%20me%20gustaria%20obtener%20mas%20informacion%20sobre%20" +
        nombre
    );
  };

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
              <Grid item xs={4} sm={8} md={4}>
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
                      {nombre}
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
                      {nombre}
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
                  <CardActions>
                    <Button
                      variant="contained"
                      onClick={handleWhatsapp}
                      color="success"
                      sx={{ bgcolor: "green", color: "white", width: "100%" }}
                    >
                      Consultar por Whatsapp
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        style={{ marginLeft: "2%" }}
                      />
                    </Button>
                  </CardActions>
                  <CardActions sx={{ mt: "2%" }}>
                    {fav === false ? (
                      <Button
                        variant="contained"
                        onClick={addFavoritos}
                        sx={{
                          bgcolor: "#2196f3",
                          color: "white",
                          width: "100%",
                        }}
                      >
                        Agregar a favoritos
                        <FavoriteIcon sx={{ marginLeft: "2%" }} />
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
                        <FavoriteIcon sx={{ marginLeft: "2%" }} />
                      </Button>
                    )}
                    {cart === false ? (
                      <Button
                        variant="contained"
                        onClick={agregarCarritos}
                        sx={{
                          bgcolor: "#2196f3",
                          color: "white",
                          width: "100%",
                        }}
                      >
                        Agregar al carrito
                        <ShoppingCartIcon sx={{ marginLeft: "2%" }} />
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={eliminarDeCarrito}
                        color="error"
                        sx={{
                          bgcolor: colorElegido,
                          color: "white",
                          width: "100%",
                        }}
                      >
                        Eliminar de carrito
                        <ShoppingCartIcon sx={{ marginLeft: "2%" }} />
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
              variant="h4"
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
