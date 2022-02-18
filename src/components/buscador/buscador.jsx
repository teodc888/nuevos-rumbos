import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import { IconButton, Input } from "@mui/material";
// import { buscarProductos } from "../../redux/actions/index";
import SearchIcon from "@mui/icons-material/Search";

export default function Buscador() {
  // const dispatch = useDispatch();

  const [input, setInput] = useState({
    buscador: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(input);
    // dispatch(buscarProductos(input.buscador));
  }, [ input]);

  return (
    <>
      <IconButton>
        <SearchIcon sx={{ color: "white" }} />
      </IconButton>
      <Input
        id="buscador"
        label="buscador"
        name="buscador"
        variant="filled"
        onChange={handleChange}
        placeholder="Buscar producto"
        sx={{ color: "white" }}
      />
    </>
  );
}
