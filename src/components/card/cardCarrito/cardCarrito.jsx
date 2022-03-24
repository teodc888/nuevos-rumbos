import React, { useState } from "react";

//Mui
import {
  Card,
  Typography,
  CardContent,
  Box,
  Button,
  CardMedia,
} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

//Redux
import { deleteCarrito, cantidadStock } from "../../../redux/actions/index";
import { useDispatch } from "react-redux";

export default function CardCarrito({
  nombre,
  imagen,
  precio,
  precioDescuento,
  id,
  cantidad,
}) {
  const dispatch = useDispatch();
  const [contador, setContador] = useState(cantidad);

  const handleClickSuma = () => {
    setContador(contador + 1);
    dispatch(cantidadStock(id, contador + 1));
  };

  const handleClickResta = () => {
    if (contador > 1) {
      setContador(contador - 1);
      dispatch(cantidadStock(id, contador - 1));
    }
  };

  const eliminar = () => {
    dispatch(deleteCarrito(id));
  };

  let precioo = precio * cantidad;
  let precioDescuentoo = precioDescuento * cantidad;

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
        }}
      >
        <Card sx={{ display: "flex", maxWidth: 850, margin: "auto" }}>
          <CardMedia
            component="img"
            sx={{ width: 200, objectFit: "contain", float: "left" }}
            image={imagen[0]}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {nombre}
              </Typography>

              <Typography variant="h5" color="text.secondary" component="div">
                <del>${precioo}</del> $
                {Number(precioDescuentoo).toLocaleString("es-AR")}
              </Typography>
            </CardContent>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h5" color="text.secondary" component="div">
                Cantidad
              </Typography>
              <ArrowLeftIcon onClick={handleClickResta} />
              {contador}
              <ArrowRightIcon onClick={handleClickSuma} />
            </CardContent>
          </Box>
          <CardContent sx={{ justifyContent: "space-between", ml: 21 }}>
            <Button
              sx={{ bgcolor: "red", color: "white" }}
              color="error"
              variant="contained"
              onClick={eliminar}
            >
              Borrar
            </Button>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
        }}
      >
        <Card sx={{ maxWidth: 450, margin: "auto" }}>
          <CardContent sx={{ position: "absolute" }}>
            <Button
              sx={{ bgcolor: "red", color: "white" }}
              color="error"
              variant="contained"
              onClick={eliminar}
            >
              Borrar
            </Button>
          </CardContent>
          <CardMedia
            component="img"
            height="240"
            sx={{ objectFit: "contain" }}
            image={imagen[0]}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {nombre}
            </Typography>
            <Typography variant="h6" color="text.secondary" component="div">
              <del>${precioo}</del> $
              {Number(precioDescuentoo).toLocaleString("es-AR")}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h5" color="text.secondary" component="div">
              Cantidad
            </Typography>
            <ArrowLeftIcon onClick={handleClickResta} />
            {contador}
            <ArrowRightIcon onClick={handleClickSuma} />
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
