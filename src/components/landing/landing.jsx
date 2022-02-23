import React, {useEffect} from "react";
import { Button, Grid, Card, CardMedia, Typography } from "@mui/material";
import Typed from "react-typed";
import {useNavigate} from 'react-router';

export default function Landing() {
  const navigate = useNavigate();

  const navigateToAuto = () => {
    navigate('/autos');
  };

  const navigateToMoto = () => {
    navigate('/motos');
  };

  const navigateToRepuestos = () => {
    navigate('/repuestos');
  };

  useEffect(() => {
    document.title = "Nuevos Rumbos";
  }, []);

  return (
    <>
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
            variant="h3"
            component="div"
            sx={{marginBottom: "3%"}}
          >
            NUEVOS RUMBOS
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ color: "black", marginBottom: "5%" }}
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
            spacing={{ xs: 2, md: 2, sm: 2 }}
            columns={{ xs: 6, sm: 6, md: 6 }}
            sx={{ marginTop: "1%" }}
          >
            <Grid className="App" item xs={6} sm={2} md={2}>
              <Button variant="contained" sx={{ bgcolor: "#4a148c" }} onClick={navigateToAuto}>
                Autos
              </Button>
            </Grid>
            <Grid item xs={6} sm={2} md={2}>
              <Button variant="contained" sx={{ bgcolor: "#4a148c" }} onClick={navigateToMoto}>
                Motos
              </Button>
            </Grid>
            <Grid item xs={6} sm={2} md={2}>
              <Button variant="contained" sx={{ bgcolor: "#4a148c" }} onClick={navigateToRepuestos}>
                Repuestos
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
          <Card sx={{ maxWidth: 800 }}>
            <CardMedia
              component="img"
              height="500"
              image="https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/121409666_3270786793044323_821596622646100409_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LVAoisEStmcAX8zADv0&_nc_ht=scontent.fcor2-2.fna&oh=00_AT8MGj0dVLhO4mNBvUO-eRLpWsk6cyKvV3ONqkCQ_R0WkA&oe=62342CCE"
              alt="green iguana"
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
