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
import CardDestacado from "../../card/cardDestacado/cardDestacado";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { filtroAuto, resetFiltro } from "../../../redux/actions/index";
import Footer from "../../footer/footer";

//toastify
import { toast } from "react-toastify";

//Pop Up

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//Funcion
export default function HomeAuto() {
  //Dispatch
  const dispatch = useDispatch();

  //UseSelector
  const orden = useSelector((state) => state.orden);
  const autos = useSelector((state) => state.autos);
  const autosBuscados = useSelector((state) => state.autosBuscados);

  const autosDestacados = autosBuscados.filter((el) => el.destacado === "si");

  //useState
  const [filtro, setFiltro] = useState(orden);

  // UseEffect
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Autos";
    dispatch(filtroAuto(filtro));
  }, [dispatch, filtro]);

  //Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [productoPorPagina] = useState(9);
  const indeceDelUltimoProducto = currentPage * productoPorPagina; // 10
  const indiceDelPrimerProducto = indeceDelUltimoProducto - productoPorPagina; // 0
  const currentAutos = autos.slice(
    indiceDelPrimerProducto,
    indeceDelUltimoProducto
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // Funcion para filtrar los autos por gnv
  function handleChange(e) {
    setCurrentPage(1);
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
  }

  // funcion para mostrar las marcas sin repetir
  let uniqueArr = ["todos"];
  if (autos.length > 0) {
    const autosFilterMarca = autos.map((auto) => auto.marca);
    uniqueArr = [...new Set(autosFilterMarca)];
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
              <Typography variant="h3" component="div">
                Autos
              </Typography>
              <Box sx={{ width: "100%" }}>
                <InputBuscador opciones="auto" />
              </Box>
            </Stack>
            <Box sx={{ width: "100%", marginTop: "10%" }}>
              <Grid
                container
                spacing={{ xs: 3, md: 6 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={4} sm={4} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">GNV</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="gnv"
                      label="gnv"
                      value={filtro.gnv}
                      onChange={handleChange}
                    >
                      <MenuItem value={"todos"}>todos</MenuItem>
                      <MenuItem value={"si"}>Si</MenuItem>
                      <MenuItem value={"no"}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      COMBUSTIBLE
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="combustible"
                      label="COMBUSTIBLE"
                      value={filtro.combustible}
                      onChange={handleChange}
                    >
                      <MenuItem value={"todos"}>todos</MenuItem>
                      <MenuItem value={"nafta"}>Nafta</MenuItem>
                      <MenuItem value={"diesel"}>Diesel</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      MARCAS
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="marca"
                      label="MARCAS"
                      value={filtro.marca}
                      onChange={handleChange}
                    >
                      <MenuItem value={"todos"}>todos</MenuItem>
                      {uniqueArr.map((marca) => {
                        return (
                          <MenuItem value={marca} key={marca}>
                            {marca}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      PRECIO
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="precio"
                      label="PRECIO"
                      value={filtro.precio}
                      onChange={handleChange}
                    >
                      <MenuItem value={"todos"}>todos</MenuItem>
                      <MenuItem value={"mayor"}>Mayor</MenuItem>
                      <MenuItem value={"menor"}>Menor</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      KILOMETROS
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="kilometros"
                      label="KILOMETROS"
                      value={filtro.kilometros}
                      onChange={handleChange}
                    >
                      <MenuItem value={"todos"}>todos</MenuItem>
                      <MenuItem value={"mayor"}>Mayor</MenuItem>
                      <MenuItem value={"menor"}>Menor</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      CARROCERIA
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="carroceria"
                      label="CARROCERIA"
                      value={filtro.carroceria}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value={"todos"}>todos</MenuItem>
                      <MenuItem name="carroceria" value={"sedan"}>
                        Sedán
                      </MenuItem>
                      <MenuItem name="carroceria" value={"compacto"}>
                        Compacto
                      </MenuItem>
                      <MenuItem name="carroceria" value={"familiar"}>
                        Familiar
                      </MenuItem>
                      <MenuItem name="carroceria" value={"Coupe"}>
                        Coupé
                      </MenuItem>
                      <MenuItem name="carroceria" value={"todoterreno"}>
                        Todoterreno
                      </MenuItem>
                      <MenuItem name="carroceria" value={"descapotable"}>
                        Descapotable
                      </MenuItem>
                      <MenuItem name="carroceria" value={"suv"}>
                        SUV
                      </MenuItem>
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
                {autosDestacados.map((auto) => (
                  <Grid item xs={4} sm={4} md={12} key={auto.id} >
                    <CardDestacado
                      marca={auto.marca}
                      modelo={auto.modelo}
                      imagen={auto.imagen[0]}
                      precio={auto.precio}
                      id={auto.id}
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
                  Autos
                </Typography>
                <Box sx={{ width: "100%" }}>
                  <InputBuscador opciones="auto" />
                </Box>
              </Box>

              <Box sx={{ width: "100%", marginTop: "3%" }}>
                <Grid
                  container
                  spacing={{ xs: 4, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
                >
                  {/* mapeo de los autos para mostrarlos en la pantalla */}
                  {currentAutos.length === 0 ? (
                    <Grid item xs={12} sm={12} md={12}>
                      <Typography
                        variant="h2"
                        component="div"
                        textAlign="center"
                        sx={{ marginBottom: "22%" }}
                      >
                        No hay Autos
                      </Typography>
                    </Grid>
                  ) : (
                    currentAutos.map((auto) => (
                      <Grid item xs={4} sm={4} md={4} lg={4} key={auto.id}>
                        <CardNR
                          marca={auto.marca}
                          modelo={auto.modelo}
                          imagen={auto.imagen}
                          precio={auto.precio}
                          id={auto.id}
                          descripcion={auto.descripcion}
                          año={auto.año}
                          kilometros={auto.kilometros}
                          tipo={"auto"}
                          setOpen={"false"}
                          favorito={"true"}
                        />
                      </Grid>
                    ))
                  )}
                </Grid>
              </Box>
              <Paginado
                productoPorPagina={productoPorPagina}
                productos={autos.length}
                paginado={paginado}
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
                        spacing={{ xs: 3, md: 6 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        <Grid item xs={4} sm={4} md={12}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              GNV
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="gnv"
                              label="gnv"
                              value={filtro.gnv}
                              onChange={handleChange}
                            >
                              <MenuItem value={"todos"}>todos</MenuItem>
                              <MenuItem value={"si"}>Si</MenuItem>
                              <MenuItem value={"no"}>No</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={4} sm={4} md={12}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              COMBUSTIBLE
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="combustible"
                              label="COMBUSTIBLE"
                              value={filtro.combustible}
                              onChange={handleChange}
                            >
                              <MenuItem value={"todos"}>todos</MenuItem>
                              <MenuItem value={"nafta"}>Nafta</MenuItem>
                              <MenuItem value={"diesel"}>Diesel</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={4} sm={4} md={12}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              MARCAS
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="marca"
                              label="MARCAS"
                              value={filtro.marca}
                              onChange={handleChange}
                            >
                              <MenuItem value={"todos"}>todos</MenuItem>
                              {uniqueArr.map((marca) => {
                                return (
                                  <MenuItem value={marca} key={marca}>
                                    {marca}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={4} sm={4} md={12}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              PRECIO
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="precio"
                              label="PRECIO"
                              value={filtro.precio}
                              onChange={handleChange}
                            >
                              <MenuItem value={"todos"}>todos</MenuItem>
                              <MenuItem value={"mayor"}>Mayor</MenuItem>
                              <MenuItem value={"menor"}>Menor</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={4} sm={4} md={12}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              KILOMETROS
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="kilometros"
                              label="KILOMETROS"
                              value={filtro.kilometros}
                              onChange={handleChange}
                            >
                              <MenuItem value={"todos"}>todos</MenuItem>
                              <MenuItem value={"mayor"}>Mayor</MenuItem>
                              <MenuItem value={"menor"}>Menor</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={4} sm={4} md={12}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              CARROCERIA
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="carroceria"
                              label="CARROCERIA"
                              value={filtro.carroceria}
                              onChange={handleChange}
                              required
                            >
                              <MenuItem value={"todos"}>todos</MenuItem>
                              <MenuItem name="carroceria" value={"sedan"}>
                                Sedán
                              </MenuItem>
                              <MenuItem name="carroceria" value={"compacto"}>
                                Compacto
                              </MenuItem>
                              <MenuItem name="carroceria" value={"familiar"}>
                                Familiar
                              </MenuItem>
                              <MenuItem name="carroceria" value={"Coupe"}>
                                Coupé
                              </MenuItem>
                              <MenuItem name="carroceria" value={"todoterreno"}>
                                Todoterreno
                              </MenuItem>
                              <MenuItem
                                name="carroceria"
                                value={"descapotable"}
                              >
                                Descapotable
                              </MenuItem>
                              <MenuItem name="carroceria" value={"suv"}>
                                SUV
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
