import React from "react";

//Mui
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../../redux/actions/index";

//Router
import { useNavigate } from "react-router";

//Swal
import Swal from "sweetalert2";

export default function NavBarAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const colorElegido = useSelector((state) => state.color);

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleClickLogout = () => {
    dispatch(Login(""));
    Swal.fire({
      text: "se cerro sesion",
      confirmButtonText: "Ok",
      icon: "success",
      width: "auto",
      timer: 2500,
    });
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: colorElegido }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleNavigateHome}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ADMIN
          </Typography>
          <Button color="inherit" onClick={handleClickLogout}>
            Cerrar Sesion
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
