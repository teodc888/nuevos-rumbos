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

//Redux
import { useSelector, useDispatch } from "react-redux";
import { filtroGNV } from "../../../redux/actions/index";

export default function HomeAuto() {
  const dispatch = useDispatch();

  const orden = useSelector((state) => state.orden);

  const [filtro, setFiltro] = useState(orden);

  const autos = useSelector((state) => state.autos);
  const autosBuscados = useSelector((state) => state.autosBuscados);

  useEffect(() => {
    document.title = "Autos";
    dispatch(filtroGNV(filtro));
  }, [dispatch, filtro]);

  // Funcion para filtrar los autos por gnv
  function handleChange(e) {
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
  }

  let uniqueArr = ["todos"];
  if (autos.length > 0) {
    const autosFilterMarca = autosBuscados.map((auto) => auto.marca);
    uniqueArr = [...new Set(autosFilterMarca)];
  }
  console.log(autos);

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
        <Carrousel />
        <Buscador opciones="auto" />

        <Box sx={{ width: "100%", marginTop: "10%" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={2}>
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
            <Grid item xs={4} sm={4} md={2}>
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
            <Grid item xs={4} sm={4} md={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">MARCAS</InputLabel>
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
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">PRECIO</InputLabel>
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
            <Grid item xs={4} sm={4} md={2}>
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
          </Grid>
        </Box>
      </Stack>

      <Box sx={{ width: "100%", marginTop: "3%" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* mapeo de los autos para mostrarlos en la pantalla */}
          {autos.map((auto) => (
            <Grid item xs={4} sm={4} md={4} key={auto.id}>
              <CardNR
                marca={auto.marca}
                modelo={auto.modelo}
                imagen={auto.imagen}
                precio={auto.precio}
                id={auto.id}
                descripcion={auto.descripcion}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
