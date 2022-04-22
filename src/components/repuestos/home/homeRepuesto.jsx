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
import BuildIcon from "@mui/icons-material/Build";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

//Components
import CardNR from "../../card/card";
import InputBuscador from "../../buscador/InputBuscador/InputBuscador";
import Paginado from "../../paginado/paginado";
import Footer from "../../footer/footer";
import CardDestacado from "../../card/cardDestacado/cardDestacado";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { filtroRepuesto, resetFiltro } from "../../../redux/actions/index";

//toastify
import { toast } from "react-toastify";

//animaciones
import { gsap } from "gsap";

//Pop Up
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HomeRepuestos() {
  //Dispatch
  const dispatch = useDispatch();

  //UseSelector
  const orden = useSelector((state) => state.orden);
  const repuestos = useSelector((state) => state.repuestos);
  const repuestosBuscados = useSelector((state) => state.repuestosBuscados);

  const repuestosDestacados = repuestosBuscados.filter(
    (el) => el.destacado === "si"
  );

  //useState
  const [filtro, setFiltro] = useState(orden);

  // Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [productoPorPagina] = useState(9);
  const indeceDelUltimoProducto = currentPage * productoPorPagina; // 10
  const indiceDelPrimerProducto = indeceDelUltimoProducto - productoPorPagina; // 0
  const currentRepuestos = repuestos.slice(
    indiceDelPrimerProducto,
    indeceDelUltimoProducto
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // Funcion para filtrar las repuestos
  function handleChange(e) {
    setCurrentPage(1);
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
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
      autoClose: 2000,
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

  // UseEffect
  useEffect(() => {
    document.title = "Repuestos";
    dispatch(filtroRepuesto(filtro));
    window.scrollTo(0, 0);

    const izquierda = document.querySelector(".izquierda");
    const derecha = document.querySelector(".derecha");

    gsap.from(izquierda, { opacity: 0, x: -300, duration: 1 });
    gsap.from(derecha, { opacity: 0, x: 300, duration: 1 });
  }, [dispatch, filtro]);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={10} columns={16}>
          <Grid
            item
            xs={5}
            sx={{
              display: { xs: "none", md: "none", sm: "none", lg: "block" },
            }}
            className="izquierda"
          >
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Typography variant="h5" component="div" textAlign="center">
                <BuildIcon /> REPUESTOS
              </Typography>
              <Box sx={{ width: "100%" }}>
                <InputBuscador opciones="repuesto" />
              </Box>
            </Stack>
            <Box sx={{ width: "100%", marginTop: "10%" }}>
              <Grid container spacing={{ md: 6 }} columns={{ md: 12 }}>
                <Grid item xs={6} sm={8} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      PRECIO
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="precioR"
                      label="PRECIO"
                      value={filtro.precioR}
                      onChange={handleChange}
                    >
                      <MenuItem value={"todos"}>Todos</MenuItem>
                      <MenuItem value={"mayor"}>Mayor</MenuItem>
                      <MenuItem value={"menor"}>Menor</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={8} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      DESCUENTO
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="descuento"
                      label="DESCUENTO"
                      value={filtro.descuento}
                      onChange={handleChange}
                    >
                      <MenuItem value={"todos"}>Todos</MenuItem>
                      <MenuItem value={"descuento"}>
                        Productos Con Descuento
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={8} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      ORDENAR DESCUENTO
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="descuentoMax"
                      label="ORDENAR DESCUENTO"
                      value={filtro.descuentoMax}
                      onChange={handleChange}
                    >
                      <MenuItem value={"todos"}>Todos</MenuItem>
                      <MenuItem value={"menor"}>Menor Descuento</MenuItem>
                      <MenuItem value={"mayor"}>Mayor Descuento</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={12}>
                  <Button
                    fullWidth
                    sx={{ color: "white", bgcolor: "#bf360c" }}
                    variant="contained"
                    color="error"
                    onClick={resetFiltros}
                  >
                    Borrar filtros
                  </Button>
                </Grid>
                <Grid item xs={4} sm={4} md={12}>
                  <Typography variant="h5" gutterBottom textAlign="center">
                    <BookmarkAddedIcon /> Destacados
                  </Typography>
                </Grid>
                {repuestosDestacados.map((repuestos) => (
                  <Grid item xs={4} sm={4} md={12} key={repuestos.id}>
                    <CardDestacado
                      nombre={repuestos.nombre}
                      imagen={repuestos.imagen[0]}
                      precio={repuestos.precio}
                      detalle={repuestos.detalle}
                      id={repuestos.id}
                      precioDescuento={repuestos.precioDescuento}
                      descuento={repuestos.descuento}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={16} md={16} sm={16} lg={11} className="derecha">
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
                <Typography
                  variant="h4"
                  component="div"
                  textAlign="center"
                  sx={{ mb: "5%" }}
                >
                  <BuildIcon sx={{ fontSize: "100%" }} /> RESPUESTOS
                </Typography>
                <Box sx={{ width: "100%" }}>
                  <InputBuscador opciones="repuesto" />
                </Box>
              </Box>
              <Box sx={{ width: "100%", marginTop: "3%" }}>
                <Grid
                  container
                  spacing={{ xs: 4, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {/* //mapeo de los repuestos para mostrarlos en la pantalla */}
                  {currentRepuestos.length === 0 ? (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      sx={{ marginBottom: "22%" }}
                    >
                      <Typography
                        variant="h4"
                        component="div"
                        textAlign="center"
                        sx={{ mb: "5%" }}
                      >
                        Al parecer, no hay coincidencias para tu búsqueda
                      </Typography>
                    </Grid>
                  ) : (
                    currentRepuestos.map((repuesto) => (
                      <Grid item xs={4} sm={4} md={4} key={repuesto.id}>
                        <CardNR
                          nombre={repuesto.nombre}
                          imagen={repuesto.imagen}
                          precio={repuesto.precio}
                          id={repuesto.id}
                          detalle={repuesto.detalle}
                          descripcion={repuesto.descripcion}
                          favorito={"true"}
                          descuento={repuesto.descuento}
                          precioDescuento={repuesto.precioDescuento}
                        />
                      </Grid>
                    ))
                  )}
                </Grid>
              </Box>
              <Paginado
                productoPorPagina={productoPorPagina}
                productos={repuestos.length}
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
                  zIndex: "3",
                }}
              >
                <Fab
                  aria-label="edit"
                  onClick={handleClickOpen}
                  sx={{
                    background:
                      "linear-gradient(45deg, #bf360c, #bf360c, #bf360c, #bf360c, #bf360c, #bf360c)",
                    color: "white",
                  }}
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
                        <Grid item xs={6} sm={8} md={12}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              PRECIO
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="precioR"
                              label="PRECIO"
                              value={filtro.precioR}
                              onChange={handleChange}
                            >
                              <MenuItem value={"todos"}>Todos</MenuItem>
                              <MenuItem value={"mayor"}>Mayor</MenuItem>
                              <MenuItem value={"menor"}>Menor</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} sm={8} md={12}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              DESCUENTO
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="descuento"
                              label="DESCUENTO"
                              value={filtro.descuento}
                              onChange={handleChange}
                            >
                              <MenuItem value={"todos"}>Todos</MenuItem>
                              <MenuItem value={"descuento"}>
                                Productos Con Descuento
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} sm={8} md={12}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              ORDENAR DESCUENTO
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="descuentoMax"
                              label="ORDENAR DESCUENTO"
                              value={filtro.descuentoMax}
                              onChange={handleChange}
                            >
                              <MenuItem value={"todos"}>Todos</MenuItem>
                              <MenuItem value={"menor"}>
                                Menor Descuento
                              </MenuItem>
                              <MenuItem value={"mayor"}>
                                Mayor Descuento
                              </MenuItem>
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
