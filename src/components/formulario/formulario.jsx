import React, { useState } from "react";

import FormularioAuto from "../autos/formularioAuto/formularioAuto";
import FormularioMoto from "../motos/formularioMoto/formularioMoto";
import FormularioRepuesto from "../repuestos/formularioRepuesto/formularioRepuesto";

import { Button, Stack, Typography } from "@mui/material";
export default function Formulario() {
  const [tipo, setTipo] = useState("");

  const handleClickAuto = (e) => {
    e.preventDefault();
    setTipo("auto");
  };

  const handleClickMoto = (e) => {
    e.preventDefault();
    setTipo("moto");
    };

    const handleClickRepuesto = (e) => {
      e.preventDefault();
      setTipo("repuesto");
      };

  console.log(tipo);
  return (
    <>
      {tipo === "auto" ? (
        <FormularioAuto />
      ) : tipo === "moto" ? (
        <FormularioMoto setTipo={setTipo}/>
      ) : tipo === "repuesto" ? (
        <FormularioRepuesto setTipo={setTipo}/>
        
      ) : (
        <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h2" component="div">
          Formulario
        </Typography>
        <Button onClick={handleClickAuto}>Autos</Button>
        <Button onClick={handleClickMoto}>Motos</Button>
        <Button onClick={handleClickRepuesto}>Repuestos</Button>
      </Stack>
      )}
      
    </>
  );
}
