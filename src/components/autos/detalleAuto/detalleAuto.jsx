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
  Container,
} from "@mui/material";

//Componentes
import CardDetalle from "../../detalle/cardDetalle/cardDetalle";
import Footer from "../../footer/footer";
import Carrousel from "../../carrousel/carrousel";
import CarrouselCard from "../../carrousel/carrouselCard/carrouselCard";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { favoritos } from "../../../redux/actions/index";
import { eliminarFavoritos } from "../../../redux/actions/index";

//toastify
import { toast } from "react-toastify";

export default function DetalleAuto({
  marca,
  modelo,
  imagen,
  descripcion,
  año,
  carroceria,
  motor,
  transmision,
  precio,
  combustible,
  kilometros,
  cv,
  puertas,
  gnv,
  id,
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
                      tamañoImagen={"500"}
                      velocidad={"3000"}
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
                      velocidad={"3000"}
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
                      velocidad={"3000"}
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
                      tamañoImagen={"290"}
                      velocidad={"3000"}
                    />
                  </Card>
                </Box>
              </Grid>
              <Grid
                item
                xs={4}
                sm={8}
                md={4}
              >
                <Card sx={{ maxWidth: 445, margin: "auto" }}>
                  <CardContent>
                    <Typography variant="body1" color="text.secondary">
                      {año} | {kilometros} Km
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h4"
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
          <Box
            textAlign="center"
            sx={{ display: { xs: "none", md: "block" } }}
            width="65%"
          >
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              textAlign="center"
              sx={{ marginTop: "5%" }}
            >
              Características principales
            </Typography>
            <CardDetalle
              tipo="auto"
              carroceria={carroceria}
              motor={motor}
              puertas={puertas}
              cv={cv}
              transmision={transmision}
              combustible={combustible}
              gnv={gnv}
              marca={marca}
              modelo={modelo}
              kilometros={kilometros}
              año={año}
            />
          </Box>
          <Box
            textAlign="center"
            sx={{
              display: { xs: "block", md: "none", sm: "block" },
              width: "100%",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="center"
              sx={{ marginTop: "5%" }}
            >
              Características principales
            </Typography>
            <CardDetalle
              tipo="auto"
              carroceria={carroceria}
              motor={motor}
              puertas={puertas}
              cv={cv}
              transmision={transmision}
              combustible={combustible}
              gnv={gnv}
              marca={marca}
              modelo={modelo}
              kilometros={kilometros}
              año={año}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              textAlign="center"
              sx={{ mt: "2%", display: { xs: "none", md: "block" } }}
            >
              Productos relacionados
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="center"
              sx={{ mt: "2%", display: { xs: "block", md: "none" } }}
            >
              Productos relacionados
            </Typography>
            <CarrouselCard tipo="auto" />
          </Box>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
