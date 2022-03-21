import React, { useState, useEffect } from "react";

//Mui
import { CardActions, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

//Redux
import { useDispatch } from "react-redux";
import {
  buscarTotal,
  buscarProductosAuto,
  buscarProductosMotos,
  buscarProductosRepuesto,
} from "../../../redux/actions/index";

export default function InputBuscador({ opciones, setResultado }) {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    if(opciones !== "auto" && opciones !== "moto" && opciones !== "repuesto"){
      setResultado(e.target.value);
    }
  };

  useEffect(() => {
    if (opciones === "auto") {
      dispatch(buscarProductosAuto(input));
    } else if (opciones === "moto") {
      dispatch(buscarProductosMotos(input));
    } else if (opciones === "repuesto") {
      dispatch(buscarProductosRepuesto(input));
    } else {
      dispatch(buscarTotal(input));
    }
  }, [input, dispatch, opciones]);

  return (
    <>
      <CardActions sx={{margin:"auto"}}>
        <SearchIcon />

        <TextField
          type="text"
          label="Buscar..." 
          name="text"
          value={input}
          onChange={(e) => handleInputChange(e)}
          sx={{
            width: "100%",
            color: "white",
          }}
        />
      </CardActions>
    </>
  );
}
