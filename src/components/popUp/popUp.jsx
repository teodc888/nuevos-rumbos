import React from "react";

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
  const [open, setOpen] = React.useState(false);

  const buscar = useSelector((state) => state.buscados);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <AppBar sx={{ position: "relative", bgcolor: "#4a148c" }} >
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
        >
          <Buscador />
        </Stack>

        <Box sx={{ width: "100%", marginTop: "10%" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {
            buscar &&
            buscar.map((buscar) => (
              <Grid item xs={4} sm={4} md={4} key={buscar.id}>
                <CardNR
                  nombre={buscar.nombre}
                  imagen={buscar.imagen}
                  precio={buscar.precio}
                  id={buscar.id}
                  descripcion={buscar.descripcion}
                  setOpen={setOpen}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Dialog>
    </div>
  );
}
