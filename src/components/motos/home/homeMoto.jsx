import React, { useEffect, useState } from "react";

// Mui
import {
  Typography,
  Stack,
  Grid,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Fab,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Container,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

//Components
import CardNR from "../../card/card";
import InputBuscador from "../../buscador/InputBuscador/InputBuscador";
import Paginado from "../../paginado/paginado";
import Footer from "../../footer/footer";
import CardDestacado from "../../card/cardDestacado/cardDestacado";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { filtroMoto, resetFiltro } from "../../../redux/actions/index";

//toastify
import { toast } from "react-toastify";

//Pop Up

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HomeMoto() {
  //Dispatch
  const dispatch = useDispatch();

  //UseSelector
  const orden = useSelector((state) => state.orden);
  const motos = useSelector((state) => state.motos);
  const motosBuscados = useSelector((state) => state.motosBuscados);

  const motosDestacadas = motosBuscados.filter((el) => el.destacado === "si");

  //useState
  const [filtro, setFiltro] = useState(orden);

  // UseEffect
  useEffect(() => {
    document.title = "Motos";
    dispatch(filtroMoto(filtro));
    window.scrollTo(0, 0);
  }, [dispatch, filtro]);

  //Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [productoPorPagina] = useState(9);
  const indeceDelUltimoProducto = currentPage * productoPorPagina; // 10
  const indiceDelPrimerProducto = indeceDelUltimoProducto - productoPorPagina; // 0
  const currentMotos = motos.slice(
    indiceDelPrimerProducto,
    indeceDelUltimoProducto
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // Funcion para filtrar las motos
  function handleChange(e) {
    setCurrentPage(1);
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
  }

  // funcion para mostrar las marcas sin repetir
  let uniqueArrMarca = ["todos"];
  if (motos.length > 0) {
    const motosFilterMarca = motosBuscados.map((moto) => moto.marca);
    uniqueArrMarca = [...new Set(motosFilterMarca)];
  }

  // funcion para mostrar las cilindradas sin repetir
  let uniqueArrCilindrada = ["todos"];
  if (motos.length > 0) {
    const motosFilterCilindrada = motos.map((moto) => moto.cilindrada);
    uniqueArrCilindrada = [...new Set(motosFilterCilindrada)];
  }

  //popUp
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //toastify
  const successSubmitFavorite = () => {
    toast.success("Filtros borrados", {
      position: "bottom-right",
      motoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  // Filtros borrados
  const resetFiltros = () => {
    setFiltro(orden);
    dispatch(resetFiltro());
    successSubmitFavorite();
    setOpen(false);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={10} columns={16}>
          <Grid
            item
            xs={4}
            sx={{
              display: { xs: "none", md: "none", sm: "none", lg: "block" },
            }}
          >
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Typography variant="h2" component="div" textAlign="center">
                Motos
              </Typography>
              <Box sx={{ width: "100%" }}>
                <InputBuscador opciones="moto" />
              </Box>
            </Stack>
            <Box sx={{ width: "100%", marginTop: "10%" }}>
              <Grid container spacing={{ md: 6 }} columns={{ md: 12 }}>
                <Grid item xs={4} sm={4} md={12}>
                  <FormControl fullWidth color="secondary">
                    <InputLabel id="demo-simple-select-label" color="secondary">
                      MARCA
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="marcaM"
                      label="MARCA"
                      value={filtro.marcaM}
                      onChange={handleChange}
                      color="secondary"
                    >
                      <MenuItem value={"todos"}>Todos</MenuItem>
                      {uniqueArrMarca.map((marca) => (
                        <MenuItem value={marca} key={marca}>
                          {marca}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={12}>
                  <FormControl fullWidth color="secondary">
                    <InputLabel id="demo-simple-select-label" color="secondary">
                      CILINDRADA
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="cilindrada"
                      label="CILINDRADA"
                      value={filtro.cilindrada}
                      onChange={handleChange}
                      color="secondary"
                    >
                      <MenuItem value={"todos"}>Todos</MenuItem>
                      {uniqueArrCilindrada.map((cilindrada) => (
                        <MenuItem value={cilindrada} key={cilindrada}>
                          {cilindrada}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={12}>
                  <FormControl fullWidth color="secondary">
                    <InputLabel id="demo-simple-select-label" color="secondary">
                      KILOMETROS
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="kilometrosM"
                      label="KILOMETROS"
                      value={filtro.kilometrosM}
                      onChange={handleChange}
                      color="secondary"
                    >
                      <MenuItem value={"todos"}>Todos</MenuItem>
                      <MenuItem value={"mayor"}>Mayor</MenuItem>
                      <MenuItem value={"menor"}>Menor</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={12}>
                  <FormControl fullWidth color="secondary">
                    <InputLabel id="demo-simple-select-label" color="secondary">
                      PRECIO
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="precioM"
                      label="PRECIO"
                      value={filtro.precioM}
                      onChange={handleChange}
                      color="secondary"
                    >
                      <MenuItem value={"todos"}>Todos</MenuItem>
                      <MenuItem value={"mayor"}>Mayor</MenuItem>
                      <MenuItem value={"menor"}>Menor</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={12}>
                  <Button
                    fullWidth
                    sx={{ bgcolor: "green", color: "white" }}
                    variant="contained"
                    onClick={resetFiltros}
                  >
                    Borrar filtros
                  </Button>
                </Grid>
                <Grid item xs={4} sm={4} md={12}>
                  <Typography variant="h5" gutterBottom textAlign="center">
                    Destacados
                  </Typography>
                </Grid>
                {motosDestacadas.map((moto) => (
                  <Grid item xs={4} sm={4} md={12} key={moto.id}>
                    <CardDestacado
                      marca={moto.marca}
                      modelo={moto.modelo}
                      imagen={moto.imagen[0]}
                      precio={moto.precio}
                      id={moto.id}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={16} md={16} sm={16} lg={12}>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Box
                sx={{
                  display: {
                    xs: "block",
                    md: "block",
                    sm: "block",
                    lg: "none",
                  },
                }}
              >
                <Typography variant="h1" component="div" textAlign="center">
                  Motos
                </Typography>
                <Box sx={{ width: "100%" }}>
                  <InputBuscador opciones="moto" />
                </Box>
              </Box>
              <Box sx={{ width: "100%", marginTop: "3%" }}>
                <Grid
                  container
                  spacing={{ xs: 4, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {/* //mapeo de las motos para mostrarlos en la pantalla */}
                  {currentMotos.length === 0 ? (
                    <Grid item xs={12} sm={12} md={12}>
                      <Typography
                        variant="h2"
                        component="div"
                        textAlign="center"
                        sx={{ marginBottom: "22%" }}
                      >
                        No hay Motos
                      </Typography>
                    </Grid>
                  ) : (
                    currentMotos.map((moto) => (
                      <Grid item xs={4} sm={4} md={4} key={moto.id}>
                        <CardNR
                          marca={moto.marca}
                          modelo={moto.modelo}
                          imagen={moto.imagen}
                          precio={moto.precio}
                          id={moto.id}
                          año={moto.año}
                          kilometros={moto.kilometros}
                          descripcion={moto.descripcion}
                          favorito={"true"}
                          detalle={moto.detalle}
                        />
                      </Grid>
                    ))
                  )}
                </Grid>
              </Box>
              <Paginado
                productoPorPagina={productoPorPagina}
                productos={motos.length}
                paginado={paginado}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
              <Box
                sx={{
                  display: {
                    xs: "block",
                    md: "block",
                    sm: "block",
                    lg: "none",
                  },
                  position: "fixed",
                  bottom: "5%",
                  right: "5%",
                }}
              >
                <Fab
                  aria-label="edit"
                  onClick={handleClickOpen}
                  sx={{ bgcolor: "green" }}
                >
                  <FilterListIcon />
                </Fab>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>{"FILTROS"}</DialogTitle>
                  <DialogContent>
                    <Box sx={{ width: "100%", marginTop: "10%" }}>
                      <Grid
                        container
                        spacing={{ xs: 4, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={3}>
                          <FormControl fullWidth color="secondary">
                            <InputLabel
                              id="demo-simple-select-label"
                              color="secondary"
                            >
                              MARCA
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="marcaM"
                              label="MARCA"
                              value={filtro.marcaM}
                              onChange={handleChange}
                              color="secondary"
                            >
                              <MenuItem value={"todos"}>Todos</MenuItem>
                              {uniqueArrMarca.map((marca) => (
                                <MenuItem value={marca} key={marca}>
                                  {marca}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={4} sm={4} md={3}>
                          <FormControl fullWidth color="secondary">
                            <InputLabel
                              id="demo-simple-select-label"
                              color="secondary"
                            >
                              CILINDRADA
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="cilindrada"
                              label="CILINDRADA"
                              value={filtro.cilindrada}
                              onChange={handleChange}
                              color="secondary"
                            >
                              <MenuItem value={"todos"}>Todos</MenuItem>
                              {uniqueArrCilindrada.map((cilindrada) => (
                                <MenuItem value={cilindrada} key={cilindrada}>
                                  {cilindrada}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={4} sm={4} md={3}>
                          <FormControl fullWidth color="secondary">
                            <InputLabel
                              id="demo-simple-select-label"
                              color="secondary"
                            >
                              KILOMETROS
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="kilometrosM"
                              label="KILOMETROS"
                              value={filtro.kilometrosM}
                              onChange={handleChange}
                              color="secondary"
                            >
                              <MenuItem value={"todos"}>Todos</MenuItem>
                              <MenuItem value={"mayor"}>Mayor</MenuItem>
                              <MenuItem value={"menor"}>Menor</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={4} sm={4} md={3}>
                          <FormControl fullWidth color="secondary">
                            <InputLabel
                              id="demo-simple-select-label"
                              color="secondary"
                            >
                              PRECIO
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="precioM"
                              label="PRECIO"
                              value={filtro.precioM}
                              onChange={handleChange}
                              color="secondary"
                            >
                              <MenuItem value={"todos"}>Todos</MenuItem>
                              <MenuItem value={"mayor"}>Mayor</MenuItem>
                              <MenuItem value={"menor"}>Menor</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={resetFiltros}>Borrar Filtros</Button>
                    <Button onClick={handleClose}>Listo</Button>
                  </DialogActions>
                </Dialog>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
