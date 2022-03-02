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
import CardNR from "../../card/card";
import Carrousel from "../../carrousel/carrousel";
import Buscador from "../../buscador/buscador";
import Paginado from "../../paginado/paginado";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { filtroAuto } from "../../../redux/actions/index";
import Footer from "../../footer/footer";

export default function HomeAuto() {
  //Dispatch
  const dispatch = useDispatch();

  //UseSelector
  const orden = useSelector((state) => state.orden);
  const autos = useSelector((state) => state.autos);
  const autosBuscados = useSelector((state) => state.autosBuscados);

  //useState
  const [filtro, setFiltro] = useState(orden);

  console.log(autos);

  // UseEffect
  useEffect(() => {
    document.title = "Autos";
    dispatch(filtroAuto(filtro));
  }, [dispatch, filtro]);

  //Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [productoPorPagina] = useState(6);
  const indeceDelUltimoProducto = currentPage * productoPorPagina; // 10
  const indiceDelPrimerProducto = indeceDelUltimoProducto - productoPorPagina; // 0
  const currentAutos = autos.slice(
    indiceDelPrimerProducto,
    indeceDelUltimoProducto
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Funcion para filtrar los autos por gnv
  function handleChange(e) {
    setCurrentPage(1);
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
  }

  // funcion para mostrar las marcas sin repetir
  let uniqueArr = ["todos"];
  if (autos.length > 0) {
    const autosFilterMarca = autosBuscados.map((auto) => auto.marca);
    uniqueArr = [...new Set(autosFilterMarca)];
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
          Autos
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Carrousel tamaño="70%" />
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <Carrousel tamaño="100%" />
        </Box>
        <Box sx={{ width: "50%", display: { xs: "none", md: "block" } }}>
          <Buscador opciones="auto" />
        </Box>
        <Box sx={{ width: "80%", display: { xs: "block", md: "none" } }}>
          <Buscador opciones="auto" />
        </Box>

        <Box sx={{ width: "100%", marginTop: "10%" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={2}>
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label" >
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
            <Grid item xs={4} sm={4} md={2}>
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label" >
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
            <Grid item xs={4} sm={4} md={2}>
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label" >
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
            <Grid item xs={4} sm={4} md={2}>
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label" >
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
            <Grid item xs={4} sm={4} md={2}>
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label" >
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
            <Grid item xs={4} sm={4} md={2}>
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label" >
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
          </Grid>
        </Box>
        <Paginado
          productoPorPagina={productoPorPagina}
          productos={autos.length}
          paginado={paginado}
        />
      </Stack>

      <Box sx={{ width: "100%", marginTop: "3%" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
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
              <Grid item xs={4} sm={4} md={4} key={auto.id}>
                <CardNR
                  marca={auto.marca}
                  modelo={auto.modelo}
                  imagen={auto.imagen}
                  precio={auto.precio}
                  id={auto.id}
                  descripcion={auto.descripcion}
                  setOpen={"false"}
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
