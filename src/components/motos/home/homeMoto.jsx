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

//Redux
import { useSelector, useDispatch } from "react-redux";
import { filtroMoto } from "../../../redux/actions/index";

export default function HomeMoto() {
  const dispatch = useDispatch();
  const orden = useSelector((state) => state.orden);

  const [filtro, setFiltro] = useState(orden);

  const motos = useSelector((state) => state.motos);
  const motosBuscados = useSelector((state) => state.motosBuscados);

  useEffect(() => {
    document.title = "Motos";
    dispatch(filtroMoto(filtro));
  }, [dispatch, filtro]);

  // Funcion para filtrar las motos
  function handleChange(e) {
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
  }

  let uniqueArrMarca = ["todos"];
  if (motos.length > 0) {
    const motosFilterMarca = motosBuscados.map((auto) => auto.marca);
    uniqueArrMarca = [...new Set(motosFilterMarca)];
  }

  let uniqueArrCilindrada = ["todos"];
  if (motos.length > 0) {
    const motosFilterCilindrada = motosBuscados.map((moto) => moto.cilindrada);
    uniqueArrCilindrada = [...new Set(motosFilterCilindrada)];
  }

  console.log(motos);
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
        <Carrousel />
        <Buscador opciones="moto" />
        <Box sx={{ width: "100%", marginTop: "10%" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">MARCA</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="marcaM"
                  label="MARCA"
                  value={filtro.marcaM}
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
            <Grid item xs={4} sm={4} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">CILINDRADA</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="cilindrada"
                  label="CILINDRADA"
                  value={filtro.cilindrada}
                  onChange={handleChange}
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
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  KILOMETROS
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="kilometrosM"
                  label="KILOMETROS"
                  value={filtro.kilometrosM}
                  onChange={handleChange}
                >
                  <MenuItem value={"todos"}>Todos</MenuItem>
                  <MenuItem value={"mayor"}>Mayor</MenuItem>
                  <MenuItem value={"menor"}>Menor</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">PRECIO</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="precioM"
                  label="PRECIO"
                  value={filtro.precioM}
                  onChange={handleChange}
                >
                  <MenuItem value={"todos"}>Todos</MenuItem>
                  <MenuItem value={"mayor"}>Mayor</MenuItem>
                  <MenuItem value={"menor"}>Menor</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Stack>

      <Box sx={{ width: "100%", marginTop: "10%" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* //mapeo de las motos para mostrarlos en la pantalla */}
          {motos.map((moto) => (
            <Grid item xs={4} sm={4} md={4} key={moto.id}>
              <CardNR
                marca={moto.marca}
                modelo={moto.modelo}
                imagen={moto.imagen}
                precio={moto.precio}
                id={moto.id}
                descripcion={moto.descripcion}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
