import React, { useState, useEffect } from "react";

//Mui
import { CardActions, TextField, Box, Grid, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

//Redux
import { useDispatch } from "react-redux";
import {
  buscarTotal,
  buscarProductosAuto,
  buscarProductosMotos,
  buscarProductosRepuesto,
} from "../../../redux/actions/index";

//Redux
import { useSelector } from "react-redux";

import CardBuscador from "../cardBuscador/cardBuscador";

export default function InputBuscador({ opciones }) {
  const dispatch = useDispatch();

  const buscar = useSelector((state) => state.buscados);

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

  const handleClick = () => {
    dispatch(buscarTotal(input));
    setInput("");
  };

  return (
    <>
      <Box sx={{ margin: "auto" }}>
        <CardActions sx={{ margin: "auto" }}>
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
          {opciones !== "auto" &&
          opciones !== "moto" &&
          opciones !== "repuesto" &&
          buscar.length > 0 ? (
            <IconButton onClick={() => dispatch(buscarTotal(""))}>
              <ClearIcon sx={{ color: "white" }} />
            </IconButton>
          ) : null}
        </CardActions>

        {opciones !== "auto" &&
        opciones !== "moto" &&
        opciones !== "repuesto" ? (
          <>
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                zIndex: "3",
                maxWidth: 280,
              }}
              textAlign="center"
            >
              <Grid container spacing={1} columns={16}>
                {buscar.length === 0
                  ? null
                  : buscar.map((buscar) => (
                      <Grid item xs={16} key={buscar.id}>
                        <CardBuscador
                          nombre={
                            buscar.modelo
                              ? buscar.marca + " " + buscar.modelo
                              : buscar.nombre
                          }
                          precio={buscar.precio}
                          imagen={buscar.imagen[0]}
                          id={buscar.id}
                          onClick={() => handleClick()}
                        />
                      </Grid>
                    ))}
              </Grid>
            </Box>
          </>
        ) : null}
      </Box>
    </>
  );
}
