import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function CardDetalle({ titulo, descripcion }) {
  return (
    <Card
      sx={{
        maxWidth: 700,
        height: "100%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          textAlign="center"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          {titulo}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {titulo}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
          sx={{ marginTop: "5%", display: { xs: "none", md: "block" } }}
          
        >
          {descripcion}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          textAlign="center"
          sx={{ marginTop: "5%", display: { xs: "block", md: "none" } }}
        >
          {descripcion}
        </Typography>
      </CardContent>
    </Card>
  );
}
