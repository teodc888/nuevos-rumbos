import * as React from "react";

import {
  Button,
  Card,
  CardActions,
  Avatar,
  Box,
} from "@mui/material";


import { useNavigate } from "react-router-dom";

export default function CardAdmin({ titulo, imagen, boton }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(boton);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt:"10%" }}
      >
        <Avatar>
          {imagen}
        </Avatar>
      </Box>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt:"10%", mb:"10%" }}
      >
        <Button size="small" onClick={handleClick}>
          {titulo}
        </Button>
      </CardActions>
    </Card>
  );
}
