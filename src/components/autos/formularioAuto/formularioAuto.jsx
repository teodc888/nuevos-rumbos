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
  IconButton,
  Popover,
  Typography,
} from "@mui/material";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import InfoIcon from "@mui/icons-material/Info";
export default function FormularioAuto() {
  const [input, setInput] = useState({
    id: uuidv4(),
    gnv:"no",
    carroceria:"Coupe",
    combustible:"nafta",
    detalle:"auto"

  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
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
      const docRef = await addDoc(collection(db, "auto"), input);
      setInput("");
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  console.log(input)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="App">Auto</h1>
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
              label="motor"
              variant="outlined"
              name="motor"
              onChange={handleChange}
              type="text"
              value={input.motor}
              required
            />
          </Grid>
          <Grid item xs={16}>
            <TextField
              id="outlined-basic"
              label="cv"
              variant="outlined"
              name="cv"
              onChange={handleChange}
              type="text"
              value={input.cv}
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
              value={input.año}
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
              value={input.kilometros}
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
            <TextField
              id="outlined-basic"
              label="puertas"
              variant="outlined"
              name="puertas"
              onChange={handleChange}
              type="number"
              value={input.puertas}
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
              value={input.transmision}
              required
            />
          </Grid>
          <Grid item xs={16}>
            <Input type="file" name="imagen" onChange={handleFiles} required />
          </Grid>
          <Grid item xs={16}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">GNV</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="GNV"
                name="gnv"
                value={input.gnv}
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
                  value={input.carroceria}
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
              <IconButton
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <InfoIcon />
              </IconButton>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography sx={{ p: 1 }}>
                  Sedán o berlina: carrocería de tres volúmenes.
                </Typography>
                <Typography sx={{ p: 1 }}>
                  Compacto: carrocería de tres o cinco puertas en la que el
                  portón trasero incluye la luneta, haciendo posible el acceso
                  al habitáculo de los pasajeros.
                </Typography>
                <Typography sx={{ p: 1 }}>
                  Familiar: Carrocería de techo elevado hasta el portón trasero
                  que permite un amplio espacio de acceso y carga.
                </Typography>
                <Typography sx={{ p: 1 }}>
                  Coupé: carrocería de dos o tres volúmenes con dos puertas
                  acristaladas.
                </Typography>
                <Typography sx={{ p: 1 }}>
                  Todoterreno: diseñado para ofrecer sus mejores prestaciones
                  fuera de las carreteras asfaltadas y dotado de una mayor
                  altura al suelo, así como interior en el habitáculo.
                </Typography>
                <Typography sx={{ p: 1 }}>
                  Descapotable: techo plegable o capota, generalmente de tela o
                  rígida articulada.
                </Typography>
                <Typography sx={{ p: 1 }}>
                  SUV: la carrocería de moda actualmente, parte de la base de un
                  turismo, pero gana altura con respecto al suelo e interior,
                  aunque no permite un uso en campo equiparable al de los
                  todoterreno.
                </Typography>
              </Popover>
            </Grid>
          </Grid>
          <Grid item xs={16}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Combustible</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="combustible"
                name="combustible"
                value={input.combustible}
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

          <Grid item xs={16}>
            <button variant="text">Guardar</button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
