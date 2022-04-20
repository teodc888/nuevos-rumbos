import { useEffect, useState } from "react";
// packages
import { useParams, useNavigate } from "react-router";
import useObtenerRepuesto from "../../../hooks/useObtenerRepuesto";
import Swal from "sweetalert2";
// consulta firebase
import editarRepuesto from "./consultas/editarRepuestoFirebase";
// Mui
import {
  Grid,
  TextField,
  TextareaAutosize,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
// components
import BtnGuardar from "./components/btn-guardar-repuesto";
import DropZone from "../formulario/dropZone/dropZone";

const FormEditarRepuesto = () => {
  const navigate = useNavigate();

  // funcion para obtener los repuestos
  const { id } = useParams();
  const [repuesto] = useObtenerRepuesto(id);

  // states
  useEffect(() => {
    if (repuesto) {
      cambiarNombre(repuesto.nombre);
      cambiarPrecio(repuesto.precio);
      cambiarDescuento(repuesto.descuento);
      cambiarPrecioDescuento(repuesto.precioDescuento);
      cambiarDestacado(repuesto.destacado);
      cambiarDescripcion(repuesto.descripcion);
      cambiarImagen(repuesto.imagen);
    }
  }, [repuesto]);

  const [nombre, cambiarNombre] = useState("");
  const [precio, cambiarPrecio] = useState("");
  const [descuento, cambiarDescuento] = useState("");
  const [precioDescuento, cambiarPrecioDescuento] = useState("");
  const [destacado, cambiarDestacado] = useState("");
  const [descripcion, cambiarDescripcion] = useState("");
  const [imagen, cambiarImagen] = useState("");
  // console.log(descuento);
  // funciones
  const handleSubmit = (e) => {
    e.preventDefault();
    // comprobamos que los campos no esten vacios
    if (nombre !== "" && precio !== "" && descripcion !== "") {
      editarRepuesto({
        id,
        nombre,
        precio,
        descuento,
        destacado,
        descripcion,
        imagen,
        precioDescuento,
      });
      Swal.fire({
        text: "Datos actualizados",
        confirmButtonText: "Ok",
        icon: "success",
        width: "auto",
      });
      navigate("/editarRepuestos");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Hay campos incompletos",
        icon: "error",
        confirmButtonText: "Ok",
        width: "auto",
      });
    }
  };
  // bloqueamos el submit por enter
  const preventEnter = (e) => {
    e.key === "Enter" && e.preventDefault();
  };
  // permitioms modificar el input
  const handleChange = (e) => {
    switch (e.target.name) {
      case "nombre":
        return cambiarNombre(e.target.value);
      case "precio":
        return cambiarPrecio(e.target.value.replace(/[^0-9.]/g, ""));
      case "descuento":
        return cambiarDescuento(e.target.value);
      case "destacado":
        return cambiarDestacado(e.target.value);
      case "descripcion":
        return cambiarDescripcion(e.target.value);
      case "imagen":
        return cambiarImagen(e.target.files);
      default:
        break;
    }
  };

  // funcion calcular descuento

  const handleClickCalcularPrecio = async (e) => {
    if (descuento > 0) {
      const precioPorcentaje = (Number(precio) * Number(descuento)) / 100;
      const precioFinal = Number(precio) - precioPorcentaje;
      const precioF = Math.ceil(precioFinal);
      cambiarPrecioDescuento(precioF);
    } else if (Number(descuento) === 0) {
      cambiarPrecioDescuento(0);
    }
  };

  // estilos
  const containerStyle = {
    padding: "5%",
    margin: "2.5% auto",
    borderRadius: "2px",
    width: "90%",
  };
  const useStyle = makeStyles({
    root: {
      width: "80%",
      margin: "auto",
      backgroundColor: "#8c8c8c",
    },
  });
  const formStyle = useStyle();

  return (
    <form
      align="center"
      id="myform-repuesto"
      className={formStyle.root}
      onSubmit={handleSubmit}
    >
      <Grid container style={containerStyle}>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          // sx={12}
          style={{ padding: "1%" }}
        >
          <TextField
            variant="outlined"
            fullWidth
            label="Nombre"
            type="text"
            value={nombre}
            name="nombre"
            onKeyPress={preventEnter}
            onChange={handleChange}
            sx={{ marginTop: "2%" }}
          />

          <TextField
            variant="outlined"
            fullWidth
            label="Precio"
            type="number"
            value={precio}
            name="precio"
            onKeyPress={preventEnter}
            onChange={handleChange}
            sx={{ marginTop: "2%" }}
          />
          <TextField
            label="descuento"
            variant="outlined"
            name="descuento"
            onKeyPress={preventEnter}
            onChange={handleChange}
            type="number"
            inputProps={{ min: 0 }}
            min={0}
            value={descuento}
            fullWidth
            sx={{ marginTop: "2%" }}
          />
          <Grid
            style={{
              border: " 2px solid",
              borderRadius: "4px",
              marginTop: "2%",
              width: "100%",
            }}
          >
            <Button
              color="success"
              variant="contained"
              sx={{
                color: "white",
                marginBottom: "1%",
                marginTop: "1%",
                width: "60%",
              }}
              onClick={handleClickCalcularPrecio}
            >
              Calcular descuento
            </Button>
            <p>{precioDescuento}</p>
          </Grid>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          // sx={12}
          style={{ padding: "1%" }}
        >
          <TextField
            select
            label="Destacado"
            name="destacado"
            value={destacado}
            onKeyPress={preventEnter}
            onChange={handleChange}
            required
            fullWidth
            sx={{ marginTop: "2%" }}
          >
            <MenuItem name="destacado" value={"si"}>
              Si
            </MenuItem>
            <MenuItem name="destacado" value={"no"}>
              No
            </MenuItem>
          </TextField>
          <InputLabel id="demo-simple-select-label" sx={{ marginTop: "2%" }}>
            Descripcion
          </InputLabel>
          <TextareaAutosize
            variant="outlined"
            id="demo-simple-select-label"
            value={descripcion}
            name="descripcion"
            onKeyPress={preventEnter}
            onChange={handleChange}
            maxRows={10}
            style={{ width: "100%", maxHeight: 150 }}
          />
          <InputLabel sx={{ marginTop: "2%" }}>Imagen</InputLabel>
          <DropZone
            name="imagen"
            onChange={handleChange}
            setInput={cambiarImagen}
            input={imagen}
            tipo={true}
          />
        </Grid>
      </Grid>
      <BtnGuardar />
    </form>
  );
};

export default FormEditarRepuesto;
