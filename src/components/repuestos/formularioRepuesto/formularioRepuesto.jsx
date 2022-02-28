import React, { useState } from "react";
import {
  Grid,
  TextField,
  TextareaAutosize,
  Input,
} from "@mui/material";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import Swal from "sweetalert2";

export default function FormularioRepuesto({setTipo}) {
  const [input, setInput] = useState({
    detalle:"repuesto"
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
      const docRef = await addDoc(collection(db, "repuesto"), input);
      setInput("");
      setTipo("");
      Swal.fire({
        text: "se Cargo con exito",
        confirmButtonText: "Ok",
        icon: "success",
        width: "30%",
        timer: 2500,
      });
      console.log("Document written with ID: ", docRef.id);
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

  const handleFiles = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Product_photo ");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/djtkn6o7r/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setInput({ ...input, imagen: file.secure_url });
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="App">Repuesto</h1>
        <Grid
          container
          spacing={2}
          columns={16}
          sx={{ marginTop: "2%", textAlign: "center" }}
        >
          <Grid item xs={16}>
            <TextField
              id="outlined-basic"
              label="marca"
              variant="outlined"
              name="marca"
              onChange={handleChange}
              type="text"
              value={input.marca}
              required
            />
          </Grid>
          <Grid item xs={16}>
            <TextField
              id="outlined-basic"
              label="modelo"
              variant="outlined"
              name="modelo"
              onChange={handleChange}
              type="text"
              value={input.modelo}
              required
            />
          </Grid>
          <Grid item xs={16}>
            <TextField
              id="outlined-basic"
              label="precio"
              variant="outlined"
              name="precio"
              onChange={handleChange}
              type="number"
              value={input.precio}
              required
            />
          </Grid>
          <Grid item xs={16}>
            <Input type="file" name="imagen" onChange={handleFiles} required />
          </Grid>
          <Grid item xs={16}>
            <TextareaAutosize
              minRows={7}
              aria-label="maximum height"
              style={{ width: 200 }}
              onChange={handleChange}
              name="descripcion"
              required
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
