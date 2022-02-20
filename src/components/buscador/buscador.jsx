import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

//Mui
import { CardActions, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

//Redux
import { buscarTotal } from "../../redux/actions/index";

export default function Buscador() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  useEffect(() => {
    dispatch(buscarTotal(input));
  }, [input, dispatch]);


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
