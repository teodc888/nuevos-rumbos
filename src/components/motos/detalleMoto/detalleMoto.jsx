import React, { useState, useEffect } from "react";

//Mui
import {
  Stack,
  Typography,
  Card,
  Box,
  Grid,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

//Componentes
import Footer from "../../footer/footer";
import Carrousel from "../../carrousel/carrousel";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { favoritos } from "../../../redux/actions/index";
import { eliminarFavoritos } from "../../../redux/actions/index";

//toastify
import { toast } from "react-toastify";

export default function DetalleMoto({
  marca,
  modelo,
  imagen,
  descripcion,
  id,
  año,
  precio,
  cilindrada,
  cv,
  kilometros,
}) {
  //color
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

  return (
    <>
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
              <Box sx={{ width: "100%" }}>
                <Card
                  sx={{
                    maxWidth: "100%",
                    margin: "auto",
                    display: {
                      xs: "none",
                      md: "none",
                      sm: "none",
                      lg: "block",
                    },
                  }}
                >
                  <Carrousel
                    imagen={imagen}
                    tamañoImagen={"740"}
                    velocidad={"2000"}
                  />
                </Card>
                <Card
                  sx={{
                    maxWidth: "100%",
                    margin: "auto",
                    display: {
                      xs: "none",
                      md: "none",
                      sm: "block",
                      lg: "none",
                    },
                  }}
                >
                  <Carrousel
                    imagen={imagen}
                    tamañoImagen={"340"}
                    velocidad={"2000"}
                  />
                </Card>
                <Card
                  sx={{
                    maxWidth: "100%",
                    margin: "auto",
                    display: {
                      xs: "none",
                      md: "block",
                      sm: "none",
                      lg: "none",
                    },
                  }}
                >
                  <Carrousel
                    imagen={imagen}
                    tamañoImagen={"540"}
                    velocidad={"2000"}
                  />
                </Card>
                <Card
                  sx={{
                    maxWidth: "100%",
                    margin: "auto",
                    display: {
                      xs: "block",
                      md: "none",
                      sm: "none",
                      lg: "none",
                    },
                  }}
                >
                  <Carrousel
                    imagen={imagen}
                    tamañoImagen={"240"}
                    velocidad={"2000"}
                  />
                </Card>
              </Box>
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <Card sx={{ maxWidth: 445, height: "100%", margin: "auto" }}>
                <CardContent>
                  <Typography variant="body1" color="text.secondary">
                    {año} | {kilometros} Km
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    textAlign="center"
                    sx={{ marginTop: "5%" }}
                  >
                    {marca} {modelo}
                  </Typography>
                  <Typography variant="h4" sx={{ marginTop: "10%" }}>
                    ${precio}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ marginTop: "10%" }}
                  >
                    Descripcion: {descripcion}
                  </Typography>
                </CardContent>
                <CardActions>
                  {fav === false ? (
                    <Button
                      variant="contained"
                      onClick={addFavoritos}
                      sx={{ bgcolor: "green", color: "white" }}
                    >
                      Agregar a favoritos
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="error"
                      onClick={deleteFavoritos}
                      sx={{ bgcolor: colorElegido, color: "white" }}
                    >
                      Eliminar de favoritos
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
        {/* <Box textAlign="center">
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            textAlign="center"
          >
            Características principales
          </Typography>
          <Box sx={{ width: "100%", marginTop: "3%" }}>
            <Grid
              container
              spacing={{ xs: 4, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={4} sm={4} md={4}>
                <CardDetalle titulo="cilindrada" descripcion={cilindrada} />
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <CardDetalle titulo="Cv" descripcion={cv} />
              </Grid>
            </Grid>
          </Box>
        </Box> */}
        <Box sx={{ width: "100%", marginTop: "3%" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={8} md={6}>
              <Card sx={{ maxWidth: 700, height: "100%", margin: "auto" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    textAlign="center"
                  >
                    CILINDRADA
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    textAlign="center"
                    sx={{ marginTop: "5%" }}
                  >
                    {cilindrada}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ marginTop: "5%" }}
                  >
                    Cilindrada es la denominación que se da a la suma del
                    volumen útil de todos los cilindros de un motor alternativo.
                    Es muy usual que se mida en centímetros cúbicos pero los
                    vehículos norteamericanos usaban el sistema inglés de
                    pulgadas cúbicas.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} sm={8} md={6}>
              <Card sx={{ maxWidth: "100%", margin: "auto" }}>
                <CardMedia
                  sx={{ display: { xs: "none", md: "block" } }}
                  component="img"
                  height="450"
                  image={imagen[1]}
                  alt="green iguana"
                />
                <CardMedia
                  sx={{ display: { xs: "block", md: "none" } }}
                  component="img"
                  height="240"
                  image={imagen[1]}
                  alt="green iguana"
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: "100%", marginTop: "10%" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid
              item
              xs={4}
              sm={8}
              md={6}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Card sx={{ maxWidth: "100%", margin: "auto" }}>
                <CardMedia
                  sx={{ display: { xs: "none", md: "block" } }}
                  component="img"
                  height="450"
                  image={imagen[2]}
                  alt="green iguana"
                />
                <CardMedia
                  sx={{ display: { xs: "block", md: "none" } }}
                  component="img"
                  height="240"
                  image={imagen[2]}
                  alt="green iguana"
                />
              </Card>
            </Grid>
            <Grid item xs={4} sm={8} md={6}>
              <Card sx={{ maxWidth: 700, height: "100%", margin: "auto" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    textAlign="center"
                  >
                    CV
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    textAlign="center"
                    sx={{ marginTop: "5%" }}
                  >
                    {cv} cv
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ marginTop: "5%" }}
                  >
                    Caballo de vapor (CV): Esta unidad de potencia proviene del
                    sistema métrico decimal nacido en Francia al buscar en
                    Europa una medida similar al HP inglés pero aplicando las
                    unidades decimales. En su caso se refiere a la potencia
                    necesaria para levantar 75 kgf (kilogramos-fuerza; 1 kgf = 1
                    kg) a 1 metro en 1 segundo.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={4}
              sm={8}
              md={6}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Card sx={{ maxWidth: "100%", margin: "auto" }}>
                <CardMedia
                  sx={{ display: { xs: "none", md: "block" } }}
                  component="img"
                  height="450"
                  image={imagen[2]}
                  alt="green iguana"
                />
                <CardMedia
                  sx={{ display: { xs: "block", md: "none" } }}
                  component="img"
                  height="240"
                  image={imagen[2]}
                  alt="green iguana"
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Stack>
      <Footer />
    </>
  );
}
