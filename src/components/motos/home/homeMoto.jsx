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
} from "@mui/material";

//Components
import Carrousel from "../../carrousel/carrousel";
import CardNR from "../../card/card";
import Buscador from "../../buscador/buscador";
import Paginado from "../../paginado/paginado";
import Footer from "../../footer/footer";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { filtroMoto } from "../../../redux/actions/index";

export default function HomeMoto() {
  //Dispatch
  const dispatch = useDispatch();

  //UseSelector
  const orden = useSelector((state) => state.orden);
  const motos = useSelector((state) => state.motos);
  const motosBuscados = useSelector((state) => state.motosBuscados);

  //useState
  const [filtro, setFiltro] = useState(orden);

  // UseEffect
  useEffect(() => {
    document.title = "Motos";
    dispatch(filtroMoto(filtro));
  }, [dispatch, filtro]);

  //Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [productoPorPagina] = useState(3);
  const indeceDelUltimoProducto = currentPage * productoPorPagina; // 10
  const indiceDelPrimerProducto = indeceDelUltimoProducto - productoPorPagina; // 0
  const currentMotos = motos.slice(
    indiceDelPrimerProducto,
    indeceDelUltimoProducto
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Funcion para filtrar las motos
  function handleChange(e) {
    setCurrentPage(1);
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
  }

  // funcion para mostrar las marcas sin repetir
  let uniqueArrMarca = ["todos"];
  if (motos.length > 0) {
    const motosFilterMarca = motosBuscados.map((auto) => auto.marca);
    uniqueArrMarca = [...new Set(motosFilterMarca)];
  }

  // funcion para mostrar las cilindradas sin repetir
  let uniqueArrCilindrada = ["todos"];
  if (motos.length > 0) {
    const motosFilterCilindrada = motosBuscados.map((moto) => moto.cilindrada);
    uniqueArrCilindrada = [...new Set(motosFilterCilindrada)];
  }

  return (
    <div>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h1" component="div">
          MOTOS
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Carrousel tamaño="70%" />
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <Carrousel tamaño="100%" />
        </Box>
        <Box sx={{ width: "50%", display: { xs: "none", md: "block" } }}>
          <Buscador opciones="moto" />
        </Box>
        <Box sx={{ width: "80%", display: { xs: "block", md: "none" } }}>
          <Buscador opciones="moto" />
        </Box>

        <Box sx={{ width: "100%", marginTop: "10%" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={3}>
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
            <Grid item xs={4} sm={4} md={3}>
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
            <Grid item xs={4} sm={4} md={3}>
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
            <Grid item xs={4} sm={4} md={3}>
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
          </Grid>
        </Box>
        <Paginado
          productoPorPagina={productoPorPagina}
          productos={motos.length}
          paginado={paginado}
        />
      </Stack>

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
                  descripcion={moto.descripcion}
                  favorito={"true"}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}
