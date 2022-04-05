import React from "react";

//MUI
import {
  Card,
  Typography,
  CardContent,
  CardActionArea,
  Alert,
  Box,
  CardMedia,
} from "@mui/material";

//Router
import { useNavigate } from "react-router";

//Redux
import { useSelector } from "react-redux";

export default function CardCarrousel({
  nombre,
  marca,
  modelo,
  imagen,
  precio,
  id,
  año,
  kilometros,
  tipo,
  descuento,
  precioDescuento,
}) {
  const navigate = useNavigate();

  const darkMode = useSelector((state) => state.darkMode);

  const handleNavigate = () => {
    navigate(`/detalle/${id}`);
    window.scrollTo(0, 0);
  };

  const darkModeCard = () => {
    if (darkMode === "dark") {
      return "black";
    } else {
      return "white";
    }
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 280,
          margin: "auto",
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
        }}
      >
        {descuento > 0 ? (
          <Box sx={{ position: "absolute" }}>
            <Alert
              variant="outlined"
              severity="success"
              sx={{ bgcolor: darkModeCard() }}
            >
              {descuento}% descuento
            </Alert>
          </Box>
        ) : null}

        {tipo === "carrito" ? (
          <CardMedia
            sx={{
              objectFit: "contain",
            }}
            component="img"
            height="200"
            image={imagen}
            alt="green iguana"
          />
        ) : (
          <CardMedia
            sx={{
              display: { xs: "none", md: "block" },
              objectFit: "contain",
            }}
            component="img"
            height="200"
            image={imagen[0]}
            alt="green iguana"
          />
        )}

        <CardActionArea onClick={handleNavigate}>
          <CardContent>
            {tipo === "repuesto" ? (
              <Typography
                gutterBottom
                variant="h7"
                component="div"
                textAlign="center"
                textTransform="capitalize"
                textOverflow="ellipsis"
                sx={{
                  textTransform: "capitalize",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {nombre}
              </Typography>
            ) : (
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                textAlign="center"
                textTransform="capitalize"
                textOverflow="ellipsis"
              >
                {marca} {modelo}
              </Typography>
            )}

            <Typography gutterBottom variant="h6" component="div">
              {tipo === "repuesto" && descuento > 0 ? (
                <>
                  <del>${precio}</del> $
                  {Number(precioDescuento).toLocaleString("es-AR")}
                </>
              ) : (
                <>$ {Number(precio).toLocaleString("es-AR")}</>
              )}
            </Typography>
            {tipo === "auto" ? (
              <Typography variant="body2" color="text.secondary">
                {año} | {Number(kilometros).toLocaleString("es-AR")} Km
              </Typography>
            ) : tipo === "moto" ? (
              <Typography variant="body2" color="text.secondary">
                {año} | {Number(kilometros).toLocaleString("es-AR")} Km
              </Typography>
            ) : tipo === "repuesto" ? (
              <Typography variant="body2" color="text.secondary">
                {año}
              </Typography>
            ) : null}
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{
          maxWidth: 180,
          margin: "auto",
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
        }}
      >
        {descuento > 0 ? (
          <Box sx={{ position: "absolute" }}>
            <Alert
              variant="outlined"
              severity="success"
              sx={{ bgcolor: darkModeCard() }}
            >
              {descuento}% descuento
            </Alert>
          </Box>
        ) : null}

        {tipo === "carrito" ? (
          <CardMedia
            sx={{
              display: { xs: "block", md: "none" },
              objectFit: "contain",
            }}
            component="img"
            height="150"
            image={imagen}
            alt="green iguana"
          />
        ) : (
          <CardMedia
            sx={{
              display: { xs: "block", md: "none" },
              objectFit: "contain",
            }}
            component="img"
            height="120"
            image={imagen[0]}
            alt="green iguana"
          />
        )}

        <CardActionArea onClick={handleNavigate}>
          <CardContent>
            {tipo === "repuesto" ? (
              <Typography
                gutterBottom
                variant="h7"
                component="div"
                textAlign="center"
                textTransform="capitalize"
                textOverflow="ellipsis"
                sx={{
                  textTransform: "capitalize",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {nombre}
              </Typography>
            ) : (
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                textAlign="center"
                textTransform="capitalize"
                textOverflow="ellipsis"
              >
                {marca} {modelo}
              </Typography>
            )}

            <Typography gutterBottom variant="h6" component="div">
              {tipo === "repuesto" && descuento > 0 ? (
                <>
                  <del>${precio}</del> $
                  {Number(precioDescuento).toLocaleString("es-AR")}
                </>
              ) : (
                <>$ {Number(precio).toLocaleString("es-AR")}</>
              )}
            </Typography>
            {tipo === "auto" ? (
              <Typography variant="body2" color="text.secondary">
                {año} | {Number(kilometros).toLocaleString("es-AR")} Km
              </Typography>
            ) : tipo === "moto" ? (
              <Typography variant="body2" color="text.secondary">
                {año} | {Number(kilometros).toLocaleString("es-AR")} Km
              </Typography>
            ) : tipo === "repuesto" ? (
              <Typography variant="body2" color="text.secondary">
                {año}
              </Typography>
            ) : null}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
