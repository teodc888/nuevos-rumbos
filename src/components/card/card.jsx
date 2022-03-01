import React, { useState } from "react";

//MUI
import {
  Card,
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Checkbox,
  IconButton,
} from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

//Router
import { Link } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { favoritos } from "../../redux/actions/index";
import { eliminarFavoritos } from "../../redux/actions/index";

//toastify
import { toast } from "react-toastify";

export default function CardNR({
  marca,
  modelo,
  imagen,
  precio,
  id,
  buscador,
  setOpen,
  favorito,
}) {
  const dispatch = useDispatch();

  //color
  const colorElegido = useSelector((state) => state.color);

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
      dispatch(
        favoritos({
          marca: marca,
          modelo: modelo,
          imagen: imagen,
          precio: precio,
          id: id,
        })
      );
      successSubmitFavorite();
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

  return (
    <Card sx={{ maxWidth: 445, margin: "auto" }}>
      <Link to={`/detalle/${id}`}>
        <CardMedia
          component="img"
          height="240"
          image={imagen}
          alt="green iguana"
          onClick={() => (buscador === true ? setOpen(false) : null)}
        />
      </Link>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
          sx={{ textTransform: "lowercase" }}
        >
          {marca} {modelo}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          ${precio}
        </Typography>
      </CardContent>
      {favorito === "true" ? (
        <CardActions sx={{ float: "right" }}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            icon={<FavoriteBorder sx={{ color: colorElegido }} />}
            checkedIcon={<Favorite sx={{ color: colorElegido }} />}
          />
        </CardActions>
      ) : (
        <CardActions sx={{ float: "right" }}>
          <IconButton onClick={deleteFavorito}>
            <DeleteIcon sx={{ color: colorElegido }} />
          </IconButton>
        </CardActions>
      )}
      <CardActions sx={{ float: "left" }}>
        <Link to={`/detalle/${id}`}>
          <Button
            onClick={() => (buscador === true ? setOpen(false) : null)}
            size="small"
            sx={{ color: colorElegido }}
          >
            Ver
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
