import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";
export default function Formulario() {
  const [input, setInput] = useState({
    nombre: "",
    imagen: "",
    precio: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "productos"), {
        nombre: input.nombre,
        imagen: input.imagen,
        precio: input.precio,
      });
    
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  console.log(input);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="App">FORMULARIO</h1>
        <Grid container spacing={2} columns={16} sx={{ marginTop: "2%", textAlign:"center" }}>
          <Grid item xs={16}>
            <TextField
              id="outlined-basic"
              label="nombre"
              variant="outlined"
              name="nombre"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={16}>
            <TextField
              id="outlined-basic"
              label="imagen"
              variant="outlined"
              name="imagen"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={16}>
            <TextField
              id="outlined-basic"
              label="precio"
              variant="outlined"
              name="precio"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={16}>
            <button variant="text">Guardar</button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
