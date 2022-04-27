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

//toastify
import { toast } from "react-toastify";


export default function CardCarrito({
  nombre,
  imagen,
  precio,
  precioDescuento,
  id,
  cantidad,
  descuento,
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
    toast.error("Productos eliminados con éxito", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  let precioo = precio * cantidad;
  let precioDescuentoo = precioDescuento * cantidad;

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
        }}
        display="flex"
      >
        <Card>
          <Box sx={{ float: "right" }}>
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
          </Box>
          <Card sx={{ display: "flex", maxWidth: 800, margin: "auto" }}>
            <CardMedia
              component="img"
              sx={{
                width: 200,
                height: 200,
                objectFit: "contain",
                float: "left",
              }}
              image={imagen[0]}
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h6">
                  {nombre}
                </Typography>

                <Typography variant="h5" color="text.secondary" component="div">
                  {descuento > 0 ? (
                    <>
                      <del>$ {Number(precioo).toLocaleString("es-AR")}</del> ${" "}
                      {Number(precioDescuentoo).toLocaleString("es-AR")}
                    </>
                  ) : (
                    `$ ${Number(precioo).toLocaleString("es-AR")}`
                  )}
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
          </Card>
        </Card>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
        }}
      >
        <Card sx={{ maxWidth: 400, margin: "auto" }}>
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
            height="200"
            sx={{ objectFit: "contain" }}
            image={imagen[0]}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {nombre}
            </Typography>
            <Typography variant="h6" color="text.secondary" component="div">
              {descuento > 0 ? (
                <>
                  <del>$ {precioo}</del> ${" "}
                  {Number(precioDescuentoo).toLocaleString("es-AR")}
                </>
              ) : (
                `$ ${precioo}`
              )}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6" color="text.secondary" component="div">
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
