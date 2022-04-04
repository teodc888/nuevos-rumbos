import React from "react";

import { Container, Grid, Box, Link, Avatar, Typography } from "@mui/material";

//Redux
import { useSelector } from "react-redux";

//Fab
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

//Imagenes
import NuevosRumbos from "../../images/nuevoRumbos.png";

export default function Footer() {
  const colorElegido = useSelector((state) => state.color);
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
        sx={{ marginTop: "5%", bgcolor: colorElegido }}
        // sx={{ marginTop: "5%", background:"rgb(2,0,36)", background:" linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,0,0.9023984593837535) 0%, rgba(0,12,222,0.9360119047619048) 48%, rgba(0,255,46,0.8715861344537815) 100%)" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Nosotros</Box>
              <Box>
                <Link href="/nosotros" color="inherit">
                  Nosotros
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  soporte
                </Link>
              </Box>
              <Box>
                <Link href="/log-in" color="inherit">
                  Login
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Desarrolladores</Box>
              <Box>
                <Link
                  href="https://www.linkedin.com/in/santiagoclemenzi-fullstack/"
                  color="inherit"
                >
                  Santiago Clemenzi
                </Link>
                <Box>
                  <Link
                    href="https://www.linkedin.com/in/mateo-dellacqua-castro/"
                    color="inherit"
                  >
                    Mateo Dell'Acqua
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Redes</Box>
              <Box>
                <Link href="https://www.instagram.com/" color="inherit">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            textAlign="center"
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Avatar
              src={NuevosRumbos}
              sx={{ position: "static", mr: "1.5%" }}
              alt="Nuevos rumbos"
            />
            <Typography variant="h6" color="textPrimary" sx={{mt:"0.5%"}}>
              NUEVOS RUMBOS &reg; {new Date().getFullYear()}
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
