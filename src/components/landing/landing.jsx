import React, { useEffect } from "react";

//Mui
import {
  Button,
  Grid,
  Typography,
  Box,
  Container,
  Stack,
  Card,
  CardMedia,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import BuildIcon from "@mui/icons-material/Build";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

//imagen
import Portada from "../../images/portada.png";
import Portada1 from "../../images/portada1.png";

//Router
import { useNavigate } from "react-router";

// //Redux
// import { useSelector } from "react-redux";

import CarrouselCad from "../carrousel/carrouselCard/carrouselCard";
import Footer from "../footer/footer";

export default function Landing() {
  const navigate = useNavigate();

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
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        width="100%"
      >
        <Card sx={{ maxWidth: "100%" }}>
          <CardMedia
            sx={{ display:{ xs:"none", md:"block"} }}
            component="img"
            height="100%"
            image={Portada}
            alt="green iguana"
          />
          <CardMedia
             sx={{  display:{ xs:"block", md:"none"} }}
            component="img"
            height="100%"
            image={Portada1}
            alt="green iguana"
          />
        </Card>
        <Container maxWidth="lg">
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              spacing={{ xs: 2, md: 2, sm: 2 }}
              columns={{ xs: 4, sm: 8, md: 16 }}
            >
              <Grid item xs={4} sm={8} md={5.33}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    width: "100%",
                    height: "60px",
                    mt: "6%",
                    bgcolor: "black",
                    color: "white",
                  }}
                  onClick={navigateToAuto}
                >
                  <DirectionsCarIcon sx={{ mr: "5%", color: "white" }} />
                  <Typography variant="h5">Autos</Typography>
                </Button>
              </Grid>
              <Grid item xs={4} sm={8} md={5.33}>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    height: "60px",
                    mt: "6%",
                    bgcolor: "black",
                    color: "white",
                  }}
                  onClick={navigateToMoto}
                >
                  <TwoWheelerIcon sx={{ mr: "5%", color: "white" }} />
                  <Typography variant="h5">Motos</Typography>
                </Button>
              </Grid>
              <Grid item xs={4} sm={8} md={5.33}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    width: "100%",
                    height: "60px",
                    mt: "6%",
                    bgcolor: "black",
                    color: "white",
                  }}
                  onClick={navigateToRepuestos}
                >
                  <BuildIcon sx={{ mr: "5%", color: "white" }} />{" "}
                  <Typography variant="h5">Repuestos</Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h5" component="div" sx={{ mt: "4%" }}>
              Autos destacados <BookmarkAddedIcon  />
            </Typography>
            <CarrouselCad tipo="auto" />
            <Typography variant="h5" component="div" sx={{ mt: "4%" }}>
              Motos destacados <BookmarkAddedIcon  />
            </Typography>
            <CarrouselCad tipo="moto" />
            <Typography variant="h5" component="div" sx={{ mt: "4%" }}>
              Repuestos destacados <BookmarkAddedIcon  />
            </Typography>
            <CarrouselCad tipo="repuesto" />
          </Box>
        </Container>
      </Stack>
      <Footer />
    </>
  );
}
