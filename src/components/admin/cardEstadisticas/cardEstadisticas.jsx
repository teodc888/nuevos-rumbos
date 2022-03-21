import * as React from "react";

import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function CardEstadisticas({titulo, numero}) {
  return (
    <Card sx={{ maxWidth: "100%"}}>
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          {titulo}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         Cantidad de Productos: {numero}
        </Typography>
      </CardContent>

    </Card>
  );
}
