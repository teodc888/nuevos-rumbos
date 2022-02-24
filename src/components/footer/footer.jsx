import React from "react";

import { Container, Grid, Box, Link } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
        sx={{ marginTop: "5%", bgcolor: "#4a148c" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Nosotros</Box>
              <Box>
                <Link href="/" color="inherit">
                  contactar
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  soporte
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  privacidad
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Admin</Box>
              <Box>
                <Link href="/log-in" color="inherit">
                  Login
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Redes</Box>
              <Box>
                <Link href="/" color="inherit">
                  Instagram
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Facebook
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Twitter
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            NUEVOS RUMBOS &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
