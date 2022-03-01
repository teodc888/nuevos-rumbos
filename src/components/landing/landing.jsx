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
      <Box sx={{ width: "100%", marginTop: "1%" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2, sm: 2 }}
          columns={{ xs: 16, sm: 16, md: 16 }}
        >
          <Grid
            className="App"
            item
            xs={16}
            sm={8}
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
                >
                  <DirectionsCarIcon sx={{ marginRight: "10%" }} /> Autos
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={2}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: colorElegido, color: "white" }}
                  onClick={navigateToMoto}
                >
                  <TwoWheelerIcon sx={{ marginRight: "10%" }} /> Motos
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={2}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: colorElegido, color: "white" }}
                  onClick={navigateToRepuestos}
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
            sm={8}
            md={8}
            sx={{ marginTop: "6%" }}
          >
            <Card sx={{ maxWidth: 800, margin: "auto" }}>
              <CardMedia
                component="img"
                height="500"
                image="https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/121409666_3270786793044323_821596622646100409_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LVAoisEStmcAX8zADv0&_nc_ht=scontent.fcor2-2.fna&oh=00_AT8MGj0dVLhO4mNBvUO-eRLpWsk6cyKvV3ONqkCQ_R0WkA&oe=62342CCE"
                alt="green iguana"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
