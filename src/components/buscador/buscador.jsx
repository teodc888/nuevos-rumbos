import React, { useState, useEffect } from "react";

//Mui
import { CardActions, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

//Redux
import { useDispatch } from "react-redux";
import {
  buscarTotal,
  buscarProductosAuto,
  buscarProductosMotos,
  buscarProductosRepuesto,
} from "../../redux/actions/index";

export default function Buscador({ opciones }) {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
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
      <CardActions>
        <SearchIcon />

        <Input
          type="text"
          name="text"
          value={input}
          placeholder="Buscar..."
          onChange={(e) => handleInputChange(e)}
          sx={{
            bgcolor: "#4a148c",
            borderColor: "black",
            width: "100%",
            borderRadius: "10px",
            color: "white",
          }}
        />
      </CardActions>
    </>
  );
}
