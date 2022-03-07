import React, { useEffect } from "react";

//Mui
import { Button, Grid, Card, CardMedia, Typography, Box } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import BuildIcon from "@mui/icons-material/Build";

//Type
import Typed from "react-typed";

//Router
import { useNavigate } from "react-router";

//Redux
import { useSelector } from "react-redux";

export default function Landing() {
  const navigate = useNavigate();

  const colorElegido = useSelector((state) => state.color);

  const navigateToAuto = () => {
    navigate("/autos");
  };

  const navigateToMoto = () => {
    navigate("/motos");
  };

  const navigateToRepuestos = () => {
    navigate("/repuestos");
  };

  useEffect(() => {
    document.title = "Nuevos Rumbos";
  }, []);

  return (
    <>
      <Box sx={{ width: "100%", marginTop:"1%" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2, sm: 2 }}
          columns={{ xs: 16, sm: 16, md: 16 }}
        >
          <Grid
            className="App"
            item
            xs={16}
            sm={16}
            md={8}
            sx={{ margin: "auto" }}
          >
            <Typography
              variant="h2"
              component="div"
              sx={{ marginBottom: "3%", display: { xs: "none", md: "block" } }}
              fontFamily="Segoe UI Symbol"
            >
              NUEVOS RUMBOS
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{
                marginBottom: "5%",
                display: { xs: "block", md: "none", sm: "none" },
                marginTop: "3%",
              }}
              fontFamily="Segoe UI Symbol"
            >
              NUEVOS RUMBOS
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{
                marginBottom: "3%",
                display: { xs: "none", md: "none", sm: "block" },
              }}
              fontFamily="Segoe UI Symbol"
            >
              NUEVOS RUMBOS
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ marginBottom: "5%", display: { xs: "none", md: "block" } }}
            >
              La mejor pagina de importaciones de -
              <Typed
                strings={[" AUTOS", "  MOTOS", "  REPUESTOS"]}
                typeSpeed={65}
                backSpeed={65}
                loop
              />
            </Typography>
            <Typography
              variant="h9"
              component="div"
              sx={{ marginBottom: "5%", display: { xs: "block", md: "none" } }}
            >
              La mejor pagina de importaciones de -
              <Typed
                strings={[" AUTOS", "  MOTOS", "  REPUESTOS"]}
                typeSpeed={65}
                backSpeed={65}
                loop
              />
            </Typography>

            <Grid
              container
              spacing={{ xs: 3, md: 2, sm: 2 }}
              columns={{ xs: 6, sm: 6, md: 6 }}
              sx={{ marginTop: "1%" }}
            >
              <Grid className="App" item xs={6} sm={6} md={2}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: colorElegido, color: "white" }}
                  onClick={navigateToAuto}
                  color="error"
                >
                  <DirectionsCarIcon sx={{ marginRight: "10%" }} /> Autos
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={2}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: colorElegido, color: "white" }}
                  onClick={navigateToMoto}
                  color="error"
                >
                  <TwoWheelerIcon sx={{ marginRight: "10%" }} /> Motos
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={2}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: colorElegido, color: "white" }}
                  onClick={navigateToRepuestos}
                  color="error"
                >
                  <BuildIcon sx={{ marginRight: "10%" }} /> Repuestos
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            className="App"
            item
            xs={16}
            sm={16}
            md={8}
          >
            <Card sx={{ maxWidth: "100%", maxHeight:"100%",margin: "auto", marginTop:"5%", display: { xs: "block", sm:"none" ,md: "none" } }}>
              <CardMedia
                component="img"
                image="https://w0.peakpx.com/wallpaper/575/190/HD-wallpaper-488-wheel-ferrari-red-silver-car-supercar-sports-america.jpg"
                alt="green iguana"
              />
            </Card>
            <Card sx={{ maxWidth: "100%", maxHeight:"100%",margin: "auto", marginTop:"3.5%", display: { xs: "none", sm:"block" ,md: "block" } }}>
              <CardMedia
                component="img"
                image="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2013/12/02/13859743417025.jpg"
                alt="green iguana"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

