import React, { useEffect } from "react";

//Mui
import { Stack, Typography, Box, Grid } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ConstructionIcon from "@mui/icons-material/Construction";

//Componentes
import CardAdmin from "../cardAdmin/cardAdmin";
import CardEstadisticas from "../cardEstadisticas/cardEstadisticas";


//Redux
import { useSelector } from "react-redux";
const admin = [
  {
    titulo: "Formulario Autos",
    imagen: <DirectionsCarIcon />,

    boton: "/formularioAuto",
  },
  {
    titulo: "Formulario Motos",
    imagen: <TwoWheelerIcon />,
    boton: "/formularioMoto",
  },
  {
    titulo: "Formulario Repuestos",
    imagen: <ConstructionIcon />,
    boton: "/formularioRepuesto",
  },
  {
    titulo: "Editar Autos",
    imagen: <DirectionsCarIcon />,
    boton: "/editarAutos",
  },
  {
    titulo: "Editar Motos",
    imagen: <TwoWheelerIcon />,
    boton: "/editarMotos",
  },
  {
    titulo: "Editar Repuestos",
    imagen: <ConstructionIcon />,
    boton: "/editarRepuestos",
  },
];

export default function HomeAdmin() {
  useEffect(() => {
    document.title = "Admin";
  }, []);

  const autos = useSelector((state) => state.autos);
  const motos = useSelector((state) => state.motos);
  const repuestos = useSelector((state) => state.repuestos);

  return (
    <div>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h2" component="div" textAlign="center">
          Bienvenido Admin
        </Typography>
        <Box sx={{ width: "100%", marginTop: "3%" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {admin &&
              admin.map((producto) => (
                <Grid item xs={4} sm={4} md={2}>
                  <CardAdmin
                    titulo={producto.titulo}
                    imagen={producto.imagen}
                    boton={producto.boton}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
        <Box sx={{ width: "100%", marginTop: "3%" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={4}>
              <CardEstadisticas titulo={"Auto"} numero={autos.length} />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <CardEstadisticas titulo={"Motos"} numero={motos.length}  />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <CardEstadisticas titulo={"Repuestos"} numero={repuestos.length} />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </div>
  );
}
