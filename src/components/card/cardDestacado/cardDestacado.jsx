import * as React from "react";
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
  detalle,
  id,
  precioDescuento,
  descuento,
  nombre,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detalle/${id}`);
  };

  return (
    <>
      <Card sx={{ maxWidth: 200, margin: "auto" }}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="120"
            image={imagen}
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{ fontSize: "13px" }}
            >
              {nombre} {marca} {modelo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {detalle === "repuesto" && descuento > 0 ? (
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
      </Card>
    </>
  );
}
