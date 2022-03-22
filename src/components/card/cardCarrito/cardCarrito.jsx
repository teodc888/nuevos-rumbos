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
import { deleteCarrito } from "../../../redux/actions/index";
import { useDispatch } from "react-redux";

export default function CardCarrito({
  imagen,
  marca,
  modelo,
  precio,
  precioDescuento,
  id,
}) {
  const dispatch = useDispatch();
  const [contador, setContador] = useState(1);

  const handleClickSuma = () => {
    setContador(contador + 1);
  };

  const handleClickResta = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const eliminar = () => {
    dispatch(deleteCarrito(id));
  };

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
                {marca} {modelo}
              </Typography>

              <Typography variant="h5" color="text.secondary" component="div">
                <del>${precio}</del> $
                {Number(precioDescuento).toLocaleString("es-AR")}
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
            <CardContent>
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
            image={imagen[0]}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {marca} {modelo}
            </Typography>
            <Typography variant="h6" color="text.secondary" component="div">
              <del>${precio}</del> $
              {Number(precioDescuento).toLocaleString("es-AR")}
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
