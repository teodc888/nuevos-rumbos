import React, { useState } from "react";

//Mui
import {
  AppBar,
  Dialog,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Grid,
  Box,
  Card,
  CardMedia,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import SearchIcon from "@mui/icons-material/Search";

//Componets
import Buscador from "../buscador/buscador";
import CardNR from "../card/card";

//Redux
import { useSelector } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function PopUp() {
  const [resultado, setResultado] = useState("");

  const [open, setOpen] = useState(false);

  const buscar = useSelector((state) => state.buscados);
  const colorElegido = useSelector((state) => state.color);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(buscar.length);

  return (
    <div>
      <IconButton sx={{ color: "white" }} onClick={handleClickOpen}>
        <SearchIcon />
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          Buscar
        </Typography>
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", bgcolor: colorElegido }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Buscador
            </Typography>
          </Toolbar>
        </AppBar>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ marginTop: "2%" }}
        >
          <Buscador setResultado={setResultado} />
        </Stack>

        <Box sx={{ width: "100%", marginTop: "3%" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {buscar.length === 0 && resultado !== "" ? (
              <Grid item xs={4} sm={8} md={12} textAlign="center">
                <Typography variant="h5">
                  No hay publicaciones que coincidan con tu búsqueda.
                </Typography>
                <Typography variant="h5">
                  La búsqueda fue: {resultado}
                </Typography>
                <Card sx={{ maxWidth: 445, margin: "auto" }}>
                  <CardMedia
                    component="img"
                    height="350"
                    image={"https://media0.giphy.com/media/NnSFnC428LRHaxUNzj/giphy.gif?cid=ecf05e47iwvvag667o4fgte95kxhlubf7fzlw61l83vkmbe2&rid=giphy.gif&ct=s"}
                    alt="Image NotFount"
                  />
                </Card>
              </Grid>
            ) : (
              buscar.map((buscar) => (
                <Grid item xs={4} sm={4} md={4} key={buscar.id}>
                  <CardNR
                    marca={buscar.marca}
                    modelo={buscar.modelo}
                    imagen={buscar.imagen}
                    precio={buscar.precio}
                    id={buscar.id}
                    descripcion={buscar.descripcion}
                    setOpen={setOpen}
                    buscador={true}
                    favorito="true"
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Dialog>
    </div>
  );
}
