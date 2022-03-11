import * as React from 'react';

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';


import {useNavigate} from 'react-router-dom';

export default function CardAdmin({titulo, imagen, boton}) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(boton);
    }

  return (
    <Card sx={{ maxWidth: 445, margin:"auto" }}>
      <CardMedia
        component="img"
        height="240"
        image={imagen}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Editar</Button>
      </CardActions>
    </Card>
  );
}