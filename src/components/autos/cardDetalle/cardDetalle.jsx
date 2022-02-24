import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

export default function CardDetalle({titulo, descripcion}) {
  return (
    <Card sx={{ maxWidth: 345, margin:"auto" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="h7" >
            {descripcion}
        </Typography>
      </CardContent>
    </Card>
  );
}