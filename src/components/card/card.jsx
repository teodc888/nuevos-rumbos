import React, { useState } from "react";

//MUI
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Checkbox,
  IconButton,
  CardActionArea,
  Alert,
  Box,
  CardMedia,
} from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

//Router
import { useNavigate } from "react-router";

//Redux
import { useDispatch, useSelector } from "react-redux";
import {
  favoritos,
  eliminarFavoritos,
  agregarCarrito,
  deleteCarrito,
} from "../../redux/actions/index";

//toastify
import { toast } from "react-toastify";

import Carrousel from "../../components/carrousel/carrousel";

export default function CardNR({
  marca,
  modelo,
  imagen,
  precio,
  id,
  año,
  kilometros,
  favorito,
  tipo,
  descuento,
  precioDescuento,
  addfav,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //color
  const colorElegido = useSelector((state) => state.color);
  const darkMode = useSelector((state) => state.darkMode);

  //Favoritos
  const fav = useSelector((state) => state.favoritos);
  let aux = [];
  if (fav.length > 0) {
    aux = fav.map((el) => el.id);
  }

  let [checked, setChecked] = useState(aux?.includes(id) ? true : false);

  //toastify
  const successSubmitFavorite = () => {
    toast.success("Producto guardado con éxito", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  const errorSubmit = () => {
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

  //agregar o eliminar favoritos
  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (checked === false) {
      if (tipo === "repuesto") {
        dispatch(
          favoritos({
            marca: marca,
            modelo: modelo,
            imagen: imagen,
            precio: Number(precio),
            precioDescuento: Number(precioDescuento),
            descuento: Number(descuento),
            id: id,
            tipo: tipo,
          })
        );
        successSubmitFavorite();
      } else {
        dispatch(
          favoritos({
            marca: marca,
            modelo: modelo,
            imagen: imagen,
            precio: Number(precio),
            id: id,
          })
        );
        successSubmitFavorite();
      }
    } else {
      dispatch(eliminarFavoritos(id));
      errorSubmit();
    }
  };

  //Eliminar de favoritos
  const deleteFavorito = (e) => {
    dispatch(eliminarFavoritos(id));
    errorSubmit();
  };

  const handleNavigate = () => {
    navigate(`/detalle/${id}`);
  };

  const darkModeCard = () => {
    if (darkMode === "dark") {
      return "black";
    } else {
      return "white";
    }
  };

  //carrito
  const carrito = useSelector((state) => state.carrito);
  let aux1 = [];
  if (carrito.length > 0) {
    aux1 = carrito.map((el) => el.id);
  }

  let [checked1, setChecked1] = useState(aux1?.includes(id) ? true : false);

  //agregar o eliminar favoritos
  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
    if (checked1 === false) {
      dispatch(
        agregarCarrito({
          marca: marca,
          modelo: modelo,
          imagen: imagen,
          precio: Number(precio),
          id: id,
          precioDescuento: precioDescuento,
          cantidad:1
        })
      );
      successSubmitFavorite();
    } else {
      dispatch(deleteCarrito(id));
      errorSubmit();
    }
  };

  return (
    <Card sx={{ maxWidth: 450, margin: "auto" }}>
      {tipo === "repuesto" ? (
        <>
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
          <CardMedia
            sx={{
              display: { xs: "none", md: "flex" },
              objectFit: "contain",
            }}
            component="img"
            height="190"
            image={imagen}
            alt="green iguana"
          />
          <CardMedia
            sx={{
              display: { xs: "flex", md: "none" },
              objectFit: "contain",
            }}
            component="img"
            height="240"
            image={imagen}
            alt="green iguana"
          />
        </>
      ) : (
        <Carrousel imagen={imagen} tamañoImagen={"180"} velocidad={null} />
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
            >
              {marca} {modelo}
            </Typography>
          ) : (
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              textAlign="center"
              textTransform="capitalize"
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
            ) : addfav === true ? (
              <> ${precio}</>
            ) : (
              <> ${Number(precio).toLocaleString("es-AR")} </>
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
      <CardActions sx={{ float: "left" }}>
        {tipo === "repuesto" && favorito === "true" ? (
          <Checkbox
            checked={checked1}
            onChange={handleChange1}
            icon={<ShoppingCartOutlinedIcon sx={{ color: "green" }} />}
            checkedIcon={<ShoppingCartIcon sx={{ color: "green" }} />}
          />
        ) : null}
      </CardActions>
      <CardActions sx={{ float: "right" }}>
        {favorito === "true" ? (
          <>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              icon={<FavoriteBorder sx={{ color: colorElegido }} />}
              checkedIcon={<Favorite sx={{ color: colorElegido }} />}
            />
          </>
        ) : (
          <IconButton onClick={deleteFavorito}>
            <DeleteIcon sx={{ color: colorElegido }} />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
