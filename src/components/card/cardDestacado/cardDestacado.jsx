import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import { useNavigate } from "react-router-dom";

export default function CardDestacado({
  marca,
  modelo,
  precio,
  imagen,
  tipo,
  id,
  precioDescuento,
  descuento,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detalle/${id}`);
  };

  return (
    <Card sx={{ display: "flex", maxWidth: "100%", margin: "auto" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardActionArea onClick={handleClick}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            {tipo === "repuesto" ? (
              <Typography component="div" variant="subtitle2">
                {modelo}
              </Typography>
            ) : (
              <Typography
                component="div"
                variant="subtitle2"
                sx={{ fontSize: 14 }}
              >
                {marca} {modelo}
              </Typography>
            )}

            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              sx={{ fontSize: 13 }}
            >
              {tipo === "repuesto" && descuento > 0 ? (
                <>
                  <del>${precio}</del> $
                  {Number(precioDescuento).toLocaleString("es-AR")}
                </>
              ) : (
                <>$ {Number(precio).toLocaleString("es-AR")}</>
              )}
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
