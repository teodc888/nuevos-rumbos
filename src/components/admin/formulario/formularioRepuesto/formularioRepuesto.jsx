import React, { useState } from "react";
import {
  Grid,
  TextField,
  TextareaAutosize,
  Button,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseConfig";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
// components
import BtnGuardar from "./btnFormularioRepuesto";
import DropZone from "../dropZone/dropZone";

export default function FormularioRepuesto() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    detalle: "repuesto",
    descuento: "0",
    precioDescuento: 0,
    destacado: "no",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChangeDestacado = function (e) {
    setInput({ ...input, destacado: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "repuesto"), input);
      setInput("");
      Swal.fire({
        text: "se Cargo con exito",
        confirmButtonText: "Ok",
        icon: "success",
        width: "30%",
        timer: 2500,
      });
      console.log("Document written with ID: ", docRef.id);
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "completa todos los campos",
        icon: "error",
        confirmButtonText: "Ok",
        width: "30%",
      });
      console.error("Error adding document: ", error);
    }
  };

  const handleClickCalcularPrecio = async (e) => {
    if (input.descuento > 0) {
      const precio = (Number(input.precio) * Number(input.descuento)) / 100;
      const precioDescuento = Number(input.precio) - precio;
      setInput({ ...input, precioDescuento: precioDescuento });
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
    <>
      <form
        align="center"
        id="myform-formRepuesto"
        className={formStyle.root}
        onSubmit={handleSubmit}
      >
        <Grid container style={containerStyle}>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            // sx={12}
            style={{ padding: "1%" }}
          >
            <h1 className="App">Repuesto</h1>
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
              label="nombre"
              variant="outlined"
              name="nombre"
              onChange={handleChange}
              type="text"
              value={input.nombre}
              required
              fullWidth
              sx={{ marginTop: "2%" }}
            />
            <TextField
              label="precio"
              variant="outlined"
              name="precio"
              onChange={handleChange}
              type="number"
              inputProps={{ min: 0 }}
              min={0}
              value={input.precio}
              required
              fullWidth
              sx={{ marginTop: "2%" }}
            />
            <TextField
              select
              label="destacado"
              name="destacado"
              value={input.destacado}
              onChange={handleSelectChangeDestacado}
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
            <TextField
              label="descuento"
              variant="outlined"
              name="descuento"
              onChange={handleChange}
              type="number"
              inputProps={{ min: 0 }}
              min={0}
              value={input.descuento}
              required
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
            <InputLabel sx={{ marginTop: "2%" }}>Descripcion</InputLabel>
            <TextareaAutosize
              onChange={handleChange}
              name="descripcion"
              required
              maxRows={10}
              minRows={3}
              style={{ width: "100%", maxHeight: 150 }}
            />
            <InputLabel sx={{ marginTop: "2%" }}>Imagen</InputLabel>
            <DropZone setInput={setInput} input={input} tipo={false} />
          </Grid>
        </Grid>
        <BtnGuardar setInput={setInput} input={input} />
      </form>
    </>
  );
}
