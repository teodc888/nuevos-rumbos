import React, { useState, useEffect } from "react";

//Mui
import {
  Stack,
  Typography,
  Card,
  Box,
  Grid,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";

//Componentes
import CardDetalle from "../cardDetalle/cardDetalle";
import Footer from "../../footer/footer";
import Carrousel from "../../carrousel/carrousel";

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

  console.log(transmision);

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
                    tamañoImagen={"290"}
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
        <Box width="100%">
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
              <Grid item xs={4} sm={8} md={6}>
                <Card sx={{ maxWidth: 700, height: "100%", margin: "auto" }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h3"
                      component="div"
                      textAlign="center"
                    >
                      CARROCERIA
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      textAlign="center"
                      sx={{ marginTop: "5%" }}
                      textTransform="capitalize"
                      textOverflow="ellipsis"
                    >
                      {carroceria}
                    </Typography>
                    {carroceria === "sedan" ? (
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ marginTop: "5%" }}
                      >
                        Sedán​ o berlina​ es un tipo de carrocería típica de un
                        automóvil de turismo. Es un tres volúmenes en el que la
                        tapa del maletero no incluye el vidrio trasero, por lo
                        que este está fijo y el maletero está separado de la
                        cabina.
                      </Typography>
                    ) : carroceria === "compacto" ? (
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ marginTop: "5%" }}
                      >
                        Carrocería de tres o cinco puertas en la que el portón
                        trasero incluye la luneta, haciendo posible el acceso al
                        habitáculo de los pasajeros.
                      </Typography>
                    ) : carroceria === "familiar" ? (
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ marginTop: "5%" }}
                      >
                        Familiar es un tipo de carrocería utilizada en
                        automóviles de turismo. Es una carrocería de dos
                        volúmenes simples en la que el acceso al maletero es una
                        puerta o portón con vidrio trasero, y "cinco puertas"
                        suele ser la norma general.
                      </Typography>
                    ) : carroceria === "Coupe" ? (
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ marginTop: "5%" }}
                      >
                        Se trata de un tipo de carrocería de coche, que puede
                        contar con dos o tres volúmenes y con solo dos puertas.
                        Se caracterizan por contar con un estilo y unas
                        prestaciones muy deportivas. En la actualidad, el
                        término coupé es más un reclamo de publicidad que la
                        definición de un tipo de carrocería.
                      </Typography>
                    ) : carroceria === "todoterreno" ? (
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ marginTop: "5%" }}
                      >
                        Diseñado para ofrecer sus mejores prestaciones fuera de
                        las carreteras asfaltadas y dotado de una mayor altura
                        al suelo, así como interior en el habitáculo.
                      </Typography>
                    ) : carroceria === "descapotable" ? (
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ marginTop: "5%" }}
                      >
                        Un descapotable es un tipo de carrocería de automóvil
                        sin techo o cuyo techo puede o bien quitarse o bien
                        plegarse y guardarse en el maletero.
                      </Typography>
                    ) : carroceria === "suv" ? (
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ marginTop: "5%" }}
                      >
                        La carrocería de moda actualmente, parte de la base de
                        un turismo, pero gana altura con respecto al suelo e
                        interior, aunque no permite un uso en campo equiparable
                        al de los todoterreno.
                      </Typography>
                    ) : null}
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
          <Box sx={{ width: "100%", marginTop: "3%" }}>
            <Grid
              container
              spacing={{ xs: 4, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={4} sm={8} md={6}>
                <Card sx={{ maxWidth: "100%", margin: "auto" }}>
                  <CardMedia
                    sx={{ display: { xs: "none", md: "block" } }}
                    component="img"
                    height="450"
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
                      TRANSMISION
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      textAlign="center"
                      sx={{ marginTop: "5%" }}
                    >
                      {transmision === "automatico" ? "Automatica" : "Manual"}
                    </Typography>
                    {transmision === "manual" ? (
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ marginTop: "5%" }}
                      >
                        Una transmisión manual es una caja de cambios que no
                        puede alterar la relación de cambio por sí sola,
                        requiriendo la intervención del conductor para hacer
                        esto. Por lo tanto, se diferencia de una transmisión
                        automática en que esta última sí puede cambiar de marcha
                        de forma autónoma.
                      </Typography>
                    ) : transmision === "automatico" ? (
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ marginTop: "5%" }}
                      >
                        Una transmisión automática o caja automática, es una
                        caja de cambios de automóviles u otro tipo de vehículos
                        que puede encargarse por sí misma de cambiar la relación
                        de cambio automáticamente a medida que el vehículo se
                        mueve, liberando así al conductor de la tarea de cambiar
                        de marcha manualmente.
                      </Typography>
                    ) : (
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ marginTop: "5%" }}
                      >
                        Una transmisión manual es una caja de cambios que no
                        puede alterar la relación de cambio por sí sola,
                        requiriendo la intervención del conductor para hacer
                        esto. Por lo tanto, se diferencia de una transmisión
                        automática en que esta última sí puede cambiar de marcha
                        de forma autónoma.
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={4}
                sm={8}
                md={6}
                sx={{ display: { xs: "block", md: "none" }, mb: "6%" }}
              >
                <Card sx={{ maxWidth: "100%", margin: "auto" }}>
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
                      COMBUSTIBLE
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      textAlign="center"
                      sx={{ marginTop: "5%" }}
                    >
                      {combustible === "nafta" && gnv === "si"
                        ? "Gasolina/Nafta con GNV"
                        : combustible === "nafta"
                        ? "Gasolina/Nafta"
                        : combustible === "diesel" && gnv === "si"
                        ? "Diesel con GNV"
                        : "Diesel"}
                    </Typography>
                    {combustible === "nafta" ? (
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ marginTop: "5%" }}
                      >
                        Normalmente se considera nafta/gasolina a la fracción
                        del petróleo cuyo punto de ebullición se encuentra
                        aproximadamente entre 28 y 177 °C (umbral que varía en
                        función de las necesidades comerciales de la refinería).
                        A su vez, este subproducto se subdivide en nafta ligera
                        (hasta unos 100°C) y nafta pesada (el resto).
                      </Typography>
                    ) : transmision === "diesel" ? (
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ marginTop: "5%" }}
                      >
                        El gasóleo o diésel —también denominado gasoil o dísel—
                        es un hidrocarburo líquido de densidad sobre 850 kg/m³
                        (0,850 g/cm³ a 15 °C), compuesto fundamentalmente por
                        parafinas y utilizado principalmente como combustible en
                        calefacción y en motores diésel.
                      </Typography>
                    ) : (
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ marginTop: "5%" }}
                      >
                        Una transmisión manual es una caja de cambios que no
                        puede alterar la relación de cambio por sí sola,
                        requiriendo la intervención del conductor para hacer
                        esto. Por lo tanto, se diferencia de una transmisión
                        automática en que esta última sí puede cambiar de marcha
                        de forma autónoma.
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4} sm={8} md={6}>
                <Card sx={{ maxWidth: "100%", margin: "auto" }}>
                  <CardMedia
                    sx={{ display: { xs: "none", md: "block" } }}
                    component="img"
                    height="450"
                    image={imagen[3]}
                    alt="green iguana"
                  />
                  <CardMedia
                    sx={{ display: { xs: "block", md: "none" } }}
                    component="img"
                    height="240"
                    image={imagen[3]}
                    alt="green iguana"
                  />
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box textAlign="center" width="100%">
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            textAlign="center"
          >
            Otras Caracteristicas
          </Typography>
          <Box sx={{ width: "100%", marginTop: "3%" }}>
            <Grid
              container
              spacing={{ xs: 4, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={4} sm={4} md={4}>
                <CardDetalle titulo="Motor" descripcion={motor} />
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <CardDetalle titulo="Cv" descripcion={cv} />
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <CardDetalle titulo="Puertas" descripcion={puertas} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Stack>
      <Footer />
    </>
  );
}
