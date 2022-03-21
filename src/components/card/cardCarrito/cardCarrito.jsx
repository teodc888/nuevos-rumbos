import React, {useState} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function CardCarrito({ imagen, marca, modelo, precio }) {
  return (
    <>
      <Card sx={{ display: "flex", maxWidth: "100%", margin: "auto" }}>
        <CardMedia
          component="img"
          sx={{ width: 250, objectFit: "contain", float: "left" }}
          image={imagen}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h5"

              >
                {marca} {modelo}
              </Typography>

              <Typography
                variant="h5"
                color="text.secondary"
                component="div"

              >
                $ {Number(precio).toLocaleString("es-AR")}
              </Typography>
            </CardContent>
            <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="h5" color="text.secondary" component="div">
                    Cantidad
                </Typography>
                <ArrowLeftIcon />
                1
                <ArrowRightIcon />
                </CardContent>
        </Box>
      </Card>
    </>
  );
}
