import React, {useState} from "react";

//Mui
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Checkbox,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@mui/icons-material/Menu";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../../redux/actions/index";

//Router
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

//Swal
import Swal from "sweetalert2";

//Slider

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 312,
    background: "black",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "red",
  },
  listText: {
    color: "white",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Inicio", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Formulario Autos", listPath: "/formularioAuto" },
  { listIcon: <AssignmentInd />, listText: "Formulario Motos", listPath: "/formularioMoto" },
  { listIcon: <AssignmentInd />, listText: "Formulario Repuestos", listPath: "/formularioRepuesto" },
  { listIcon: <Apps />, listText: "Editar Autos", listPath: "/editarAutos" },
  { listIcon: <Apps />, listText: "Editar Motos", listPath: "/editarMotos" },
  { listIcon: <Apps />, listText: "Editar Repuestos", listPath: "/editarRepuestos" },
];

export default function NavBarAdmin({ setMode }) {
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

  //dark mode
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [setMode]
  );

  //Slider
  const modo = useSelector((state) => state.darkMode);

  // funcion para slider dark mode
  const handleDarkModeBG = () => {
    if (modo === "light") {
      return "white";
    } else {
      return "black";
    }
  };
  const handleDarkModeLetras = () => {
    if (modo === "light") {
      return "black";
    } else {
      return "white";
    }
  };

  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box
      sx={{ background: handleDarkModeBG(), width: 312, height: "100%" }}
      component="div"
    >
      <Avatar
        className={classes.avatar}
        src={
          "https://thumbs.dreamstime.com/b/inicio-de-sesi%C3%B3n-administrador-en-el-icono-del-port%C3%A1til-vector-stock-166205404.jpg"
        }
        alt="Mahmudul Alam"
      />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              primary={item.listText}
              sx={{ color: handleDarkModeLetras() }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: colorElegido }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={handleNavigateHome}>
              ADMIN
            </Typography>
            <Checkbox
              icon={<Brightness4Icon sx={{ color: "white" }} />}
              checkedIcon={<Brightness4OutlinedIcon sx={{ color: "white" }} />}
              onClick={colorMode.toggleColorMode}
            />
            <Button color="inherit" onClick={handleClickLogout}>
              Cerrar Sesion
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {sideList()}
      </Drawer>
    </>
  );
}
