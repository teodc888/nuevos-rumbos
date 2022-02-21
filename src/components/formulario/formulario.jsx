import React, { useState } from "react";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  TextareaAutosize,
  InputLabel,
  Input,
} from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { v4 as uuidv4 } from "uuid";
export default function Formulario() {
  const [tipo, setTipo] = useState("");
  const [input, setInput] = useState({
    id: uuidv4(),
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = function (e) {
    setInput({ ...input, producto: e.target.value });
    setTipo(e.target.value);
  };

  const handleSelectChangeGnv = function (e) {
    setInput({ ...input, gnv: e.target.value });
  };

  const handleSelectChangeCombustible = function (e) {
    setInput({ ...input, combustible: e.target.value });
  };

  const handleSelectChangeCarroceria = function (e) {
    setInput({ ...input, carroceria: e.target.value });
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
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
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
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">TIPO</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="TIPO"
                name="producto"
                onChange={handleSelectChange}
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
          {tipo === "auto" ? (
            <>
              <Grid item xs={16}>
                <TextField
                  id="outlined-basic"
                  label="marca"
                  variant="outlined"
                  name="marca"
                  onChange={handleChange}
                  type="text"
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
                  required
                />
              </Grid>
              <Grid item xs={16}>
                <TextField
                  id="outlined-basic"
                  label="año"
                  variant="outlined"
                  name="año"
                  onChange={handleChange}
                  type="number"
                  required
                />
              </Grid>
              <Grid item xs={16}>
                <TextField
                  id="outlined-basic"
                  label="kilometros"
                  variant="outlined"
                  name="kilometros"
                  onChange={handleChange}
                  type="number"
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
                  required
                />
              </Grid>
              <Grid item xs={16}>
                <TextField
                  id="outlined-basic"
                  label="puertas"
                  variant="outlined"
                  name="puertas"
                  onChange={handleChange}
                  type="number"
                  required
                />
              </Grid>
              <Grid item xs={16}>
                <TextField
                  id="outlined-basic"
                  label="transmision"
                  variant="outlined"
                  name="transmision"
                  onChange={handleChange}
                  type="text"
                  required
                />
              </Grid>
              <Grid item xs={16}>
                <Input
                  type="file"
                  name="imagen"
                  onChange={handleFiles}
                  required
                />
              </Grid>
              <Grid item xs={16}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-label">GNV</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="GNV"
                    name="gnv"
                    onChange={handleSelectChangeGnv}
                    required
                  >
                    <MenuItem name="gnv" value={"si"}>
                      Si
                    </MenuItem>
                    <MenuItem name="gnv" value={"no"}>
                      No
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={16}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-label">
                    Carroceria
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="carroceria"
                    name="carroceria"
                    onChange={handleSelectChangeCarroceria}
                    required
                  >
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
              <Grid item xs={16}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-label">
                    Combustible
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="combustible"
                    name="combustible"
                    onChange={handleSelectChangeCombustible}
                    required
                  >
                    <MenuItem name="combustible" value={"nafta"}>
                      Nafta
                    </MenuItem>
                    <MenuItem name="combustible" value={"diesel"}>
                      Diesel
                    </MenuItem>
                  </Select>
                </FormControl>
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
            </>
          ) : tipo === "moto" ? (
            <></>
          ) : tipo === "repuesto" ? (
            <></>
          ) : (
            <Grid item xs={16}>
              <h1>Eliga una opcion</h1>
            </Grid>
          )}

          <Grid item xs={16}>
            <button variant="text">Guardar</button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
