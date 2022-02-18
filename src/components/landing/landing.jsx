import React from "react";
import { Button, Grid, Card, CardMedia, Typography } from "@mui/material";
import Typed from "react-typed";
export default function Landing() {
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
          <h1>NUEVOS RUMBOS</h1>
          <Typography variant="h5" component="div" sx={{ color: "black" }}>
          La mejor pagina de importaciones de :
            <Typed
              strings={[
                "AUTOS",
                "MOTOS",
                "REPUESTOS",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, md: 2, sm: 2 }}
            columns={{ xs: 6, sm: 6, md: 6 }}
            sx={{ marginTop: "1%" }}
          >
            <Grid item xs={6} sm={2} md={2}>
              <Button variant="contained" sx={{ bgcolor: "#4a148c" }}>
                Autos
              </Button>
            </Grid>
            <Grid item xs={6} sm={2} md={2}>
              <Button variant="contained" sx={{ bgcolor: "#4a148c" }}>
                Motos
              </Button>
            </Grid>
            <Grid item xs={6} sm={2} md={2}>
              <Button variant="contained" sx={{ bgcolor: "#4a148c" }}>
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
              image="https://kinsta.com/es/wp-content/uploads/sites/8/2019/02/plugins-de-landing-pages-para-wordpress-1024x512.png"
              alt="green iguana"
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
