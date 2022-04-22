import React, { useState, useEffect } from "react";

//Mui
import {
  CardActions,
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
  InputBase,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from '@mui/icons-material/Search';

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

import { useNavigate } from "react-router";

export default function InputBuscador({ opciones }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const buscar = useSelector((state) => state.buscados);
  const colorElegido = useSelector((state) => state.color);

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

  const handleNavigate = (id) => {
    navigate(`/detalle/${id}`);
    setInput("");
    dispatch(buscarTotal(""));
  };

  const handleClickLimpiar = () => {
    setInput("");
    dispatch(buscarTotal(""));
  };

  return (
    <>
      <Box sx={{ margin: "auto" }}>
        <CardActions sx={{ margin: "auto" }}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Buscar..."
              inputProps={{ "aria-label": "Buscar..." }}
              name="text"
              value={input}
              autoComplete="off"
              type="text"
              onChange={(e) => handleInputChange(e)}
            />
            {(opciones !== "auto" &&
              opciones !== "moto" &&
              opciones !== "repuesto" &&
              buscar.length > 0) ||
            input !== "" ? (
              <IconButton
                onClick={() => handleClickLimpiar()}
                sx={{
                  color: "black",
                  backgroundColor: "white",
                  border: "1px solid black",
                  borderRadius: "50%",
                  padding: "0.1rem",
                  margin: "0 0.1rem",
                }}
              >
                <ClearIcon />
              </IconButton>
            ) : null}
          </Paper>
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
              }}
              textAlign="center"
            >
              <Grid
                container
                spacing={1}
                columns={16}
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                    lg: "block",
                  },
                }}
              >
                {buscar.length !== 0 && (
                  <Grid item xs={16}>
                    <List
                      sx={{
                        width: "315px",
                        bgcolor: colorElegido,
                        position: "relative",
                        overflow: "auto",
                        "& ul": { padding: 0 },
                      }}
                      subheader={<li />}
                    >
                      <li>
                        <ul>
                          <ListSubheader
                            sx={{ bgcolor: colorElegido, color: "white" }}
                          >
                            Buscador
                          </ListSubheader>
                          {buscar.length === 0
                            ? null
                            : buscar.map((buscar) => (
                                <ListItem
                                  key={buscar.id}
                                  onClick={() => handleNavigate(buscar.id)}
                                  sx={{ cursor: "pointer" }}
                                >
                                  <ListItemText
                                    sx={{ color: "white" }}
                                    primary={
                                      buscar.modelo
                                        ? buscar.marca + " " + buscar.modelo
                                        : buscar.nombre
                                    }
                                  />
                                </ListItem>
                              ))}
                        </ul>
                      </li>
                    </List>
                  </Grid>
                )}
              </Grid>
              <Grid
                container
                spacing={1}
                columns={16}
                sx={{
                  display: {
                    xs: "block",
                    sm: "none",
                    md: "none",
                    lg: "none",
                  },
                }}
              >
                {buscar.length !== 0 && (
                  <Grid item xs={16}>
                    <List
                      sx={{
                        width: "265px",
                        bgcolor: colorElegido,
                        position: "relative",
                        overflow: "auto",
                        "& ul": { padding: 0 },
                      }}
                      subheader={<li />}
                    >
                      <li>
                        <ul>
                          <ListSubheader
                            sx={{ bgcolor: colorElegido, color: "white" }}
                          >
                            Buscador
                          </ListSubheader>
                          {buscar.length === 0
                            ? null
                            : buscar.map((buscar) => (
                                <ListItem
                                  key={buscar.id}
                                  onClick={() => handleNavigate(buscar.id)}
                                  sx={{ cursor: "pointer" }}
                                >
                                  <ListItemText
                                    sx={{ color: "white" }}
                                    primary={
                                      buscar.modelo
                                        ? buscar.marca + " " + buscar.modelo
                                        : buscar.nombre
                                    }
                                  />
                                </ListItem>
                              ))}
                        </ul>
                      </li>
                    </List>
                  </Grid>
                )}
              </Grid>
            </Box>
          </>
        ) : null}
      </Box>
    </>
  );
}
