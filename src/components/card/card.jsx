import React from 'react';
import {Card, Typography, Button, CardMedia, CardContent, CardActions} from '@mui/material';

export default function CardNR({nombre, imagen, precio}) {
  return (
    <Card sx={{ maxWidth: 445, margin:"auto" }}>
      <CardMedia
        component="img"
        height="240"
        image={imagen}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center" sx={{textTransform:"lowercase"}}>
        {nombre}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" >
          ${precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver</Button>
      </CardActions>
    </Card>
  );
}