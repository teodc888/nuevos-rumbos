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
import { filtroRepuesto } from "../../../redux/actions/index";

export default function HomeRepuestos() {
  //Dispatch
  const dispatch = useDispatch();

  //UseSelector
  const orden = useSelector((state) => state.orden);
  const repuestos = useSelector((state) => state.repuestos);
  const repuestosBuscados = useSelector((state) => state.repuestosBuscados);

  //useState
  const [filtro, setFiltro] = useState(orden);

  // UseEffect
  useEffect(() => {
    document.title = "Repuestos";
    dispatch(filtroRepuesto(filtro));
  }, [dispatch, filtro]);

  // Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [productoPorPagina] = useState(3);
  const indeceDelUltimoProducto = currentPage * productoPorPagina; // 10
  const indiceDelPrimerProducto = indeceDelUltimoProducto - productoPorPagina; // 0
  const currentRepuestos = repuestos.slice(
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

  //funcion para que muestre las marcas sin repetirlas
  let uniqueArrMarca = ["todos"];
  if (repuestos.length > 0) {
    const repuestoFilterMarca = repuestosBuscados.map((auto) => auto.marca);
    uniqueArrMarca = [...new Set(repuestoFilterMarca)];
  }

  return (
    <div>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h2" component="div">
          REPUESTOS
        </Typography>
        <Carrousel />
        <Box sx={{ width: "80%" }}>
          <Buscador opciones="repuesto" />
        </Box>

        <Box sx={{ width: "100%", marginTop: "10%" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={6} sm={6} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">PRECIO</InputLabel>
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
            <Grid item xs={6} sm={6} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">MARCA</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="marcaR"
                  label="MARCA"
                  value={filtro.marcaR}
                  onChange={handleChange}
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
          </Grid>
        </Box>
        <Paginado
          productoPorPagina={productoPorPagina}
          productos={repuestos.length}
          paginado={paginado}
        />
      </Stack>

      <Box sx={{ width: "100%", marginTop: "10%" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* //mapeo de los repuestos para mostrarlos en la pantalla */}
          {currentRepuestos.length === 0 ? (
            <Grid item xs={12} sm={12} md={12}>
              <Typography
                variant="h2"
                component="div"
                textAlign="center"
                sx={{ marginBottom: "22%" }}
              >
                No hay Repuestos
              </Typography>
            </Grid>
          ) : (
            currentRepuestos.map((repuesto) => (
              <Grid item xs={4} sm={4} md={4} key={repuesto.id}>
                <CardNR
                  marca={repuesto.marca}
                  modelo={repuesto.modelo}
                  imagen={repuesto.imagen}
                  precio={repuesto.precio}
                  id={repuesto.id}
                  descripcion={repuesto.descripcion}
                  favorito={"true"}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </div>
  );
}
