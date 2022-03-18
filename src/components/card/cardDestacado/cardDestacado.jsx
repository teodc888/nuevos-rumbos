import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CardDestacado({ marca, modelo, precio, imagen, tipo }) {
  return (
    <Card sx={{ display: "flex", maxWidth: 200, margin: "auto" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          {tipo === "repuesto" ? (
            <Typography component="div"  variant="subtitle2">
              {marca}
            </Typography>
          ) : (
            <Typography component="div"  variant="subtitle2">
              {marca} {modelo}
            </Typography>
          )}

          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            $ {precio}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 90, objectFit: "contain", position: "static" }}
        image={imagen}
        alt="Live from space album cover"
      />
    </Card>
  );
}
