import React, {useEffect} from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Stack, Typography, CardMedia, Card, CardContent } from "@mui/material";
export default function Detalle() {
  // trae el id del producto
  const { id } = useParams();

  // Traer todos los productos
  let producto = [];
  const autos = useSelector((state) => state.autos);
  const motos = useSelector((state) => state.motos);
  const repuestos = useSelector((state) => state.repuestos);

  // pushear a la variable producto
  producto = [...producto, ...autos, ...motos, ...repuestos];

  //flat sirve para reducir arrays
  let productoFlat = producto.flat();

  // busca el producto segun el id
  const productoSeleccionado = productoFlat.find(
    (producto) => producto.id === id
  );

  console.log(productoSeleccionado)
    useEffect(() => {
      document.title = productoSeleccionado.modelo;
    }, [productoSeleccionado.modelo]);

  return (
    <div>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h3" component="div">
        {productoSeleccionado.marca} {productoSeleccionado.modelo}
        </Typography>
        <Card sx={{ maxWidth: 645, margin: "auto" }}>
          <CardMedia
            component="img"
            height="440"
            image={productoSeleccionado.imagen}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body1" component="div">
              {productoSeleccionado.descripcion}
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
}