import React, { useState } from "react";
import { Grid, TextField, Select, MenuItem, FormControl, TextareaAutosize } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
export default function Formulario() {
  const [input, setInput] = useState({
    nombre: "",
    imagen: "",
    precio: "",
    producto: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = function (e) {
    setInput({ ...input, producto: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, input.producto), {
        nombre: input.nombre,
        imagen: input.imagen,
        precio: input.precio,
        descripcion: input.descripcion,
      });
      setInput({
        nombre: "",
        imagen: "",
        precio: "",
        producto: "",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  console.log(input);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="App">FORMULARIO</h1>
        <Grid
          container
          spacing={2}
          columns={16}
          sx={{ marginTop: "2%", textAlign: "center" }}
        >
          <Grid item xs={16}>
            <TextField
              id="outlined-basic"
              label="nombre"
              variant="outlined"
              name="nombre"
              onChange={handleChange}
              value={input.nombre}
            />
          </Grid>
          <Grid item xs={16}>
            <TextField
              id="outlined-basic"
              label="imagen"
              variant="outlined"
              name="imagen"
              onChange={handleChange}
              value={input.imagen}
            />
          </Grid>
          <Grid item xs={16}>
            <TextField
              id="outlined-basic"
              label="precio"
              variant="outlined"
              name="precio"
              onChange={handleChange}
              value={input.precio}
            />
          </Grid>
          <Grid item xs={16}>
            <TextareaAutosize
               minRows={7}
              aria-label="maximum height"
              style={{ width: 200 }}
              onChange={handleChange}
              name="descripcion"
              value={input.descripcion}
            />
          </Grid>
          <Grid item xs={16}>
            <FormControl>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="TIPO"
                name="producto"
                onChange={handleSelectChange}
                value={input.producto}
              >
                <MenuItem name="producto" value={"auto"}>
                  AUTO
                </MenuItem>
                <MenuItem name="producto" value={"moto"}>
                  MOTO
                </MenuItem>
                <MenuItem name="producto" value={"repuesto"}>
                  REPUESTO
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={16}>
            <button variant="text">Guardar</button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
