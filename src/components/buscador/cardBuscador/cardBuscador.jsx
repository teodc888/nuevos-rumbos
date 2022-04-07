import * as React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  CardActionArea,
} from "@mui/material";

import { useNavigate } from "react-router";
export default function CardBuscador({ nombre, precio, imagen, id, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detalle/${id}`);
    onClick();
  };

  return (
    <Card sx={{ display: "flex", margin: "auto" }} onClick={handleClick}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardActionArea>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="subtitle1">
              {nombre}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {precio}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 100, objectFit: "contain", ml: 2 }}
        image={imagen}
        alt="Live from space album cover"
      />
    </Card>
  );
}
