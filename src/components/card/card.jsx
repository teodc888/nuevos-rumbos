import React from "react";
import {
  Card,
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function CardNR({ marca, modelo, imagen, precio, id, setOpen }) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 445, margin: "auto" }}>
      <CardMedia
        component="img"
        height="240"
        image={imagen}
        alt="green iguana"
      />
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
      <CardActions>
        <Link to={`/detalle/${id}`}>
          <Button onClick={handleClose} size="small">Ver</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
