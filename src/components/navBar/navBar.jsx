import React, { useState } from "react";

//MUI
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Checkbox,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import BuildIcon from "@mui/icons-material/Build";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

//Router
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

// React Router
import { useSelector } from "react-redux";

//Imagenes
import Portada1 from "../../images/nuevoRumbos.png";

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
  { listIcon: <HomeIcon />, listText: "Home", listPath: "/" },
  { listIcon: <DirectionsCarIcon />, listText: "Autos", listPath: "/autos" },
  { listIcon: <TwoWheelerIcon />, listText: "Motos", listPath: "/motos" },
  { listIcon: <BuildIcon />, listText: "Repuestos", listPath: "/repuestos" },
];

export default function NavBar({ setMode }) {
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

  //slider
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box
      sx={{ background: handleDarkModeBG(), width: 312, height: "100%" }}
      component="div"
    >
      <Avatar className={classes.avatar} src={Portada1} alt="Nuevo Rumbos" />
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

  //dark mode
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [setMode]
  );

  const colorElegido = useSelector((state) => state.color);
  const fav = useSelector((state) => state.favoritos);
  const carrito = useSelector((state) => state.carrito);

  // Funciones

  const navigate = useNavigate();

  const navigateToLanding = () => {
    navigate("/");
  };

  const navigateToFavoritos = () => {
    navigate("/favoritos");
  };

  const handleCarrito = () => {
    navigate("/carrito");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: colorElegido }}>
        <Toolbar>
          {/* Icono de Slider lateral */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* titulo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block", md: "block", lg: "block" },
              cursor: "pointer",
            }}
            onClick={navigateToLanding}
          >
            NUEVOS RUMBOS
          </Typography>
          <Typography
            variant="subtitle2"
            noWrap
            component="div"
            sx={{
              display: { xs: "block", sm: "none", md: "none", lg: "none" },
              cursor: "pointer",
              fontSize: "12.5px",
            }}
            onClick={navigateToLanding}
          >
            NUEVOS RUMBOS
          </Typography>


          {/* iconos */}
          <Box sx={{ flexGrow: 1 }} />

          {/* normal */}
          <Box sx={{ display: { xs: "none", md: "block", sm: "block" } }}>
            <Checkbox
              icon={<Brightness4Icon sx={{ color: "white" }} />}
              checkedIcon={<Brightness4OutlinedIcon sx={{ color: "white" }} />}
              onClick={colorMode.toggleColorMode}
            />
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={navigateToFavoritos}
              sx={{ mr: "0.1px" }}
            >
              <Badge badgeContent={fav.length} color="primary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={handleCarrito}
            >
              <Badge badgeContent={carrito.length} color="success">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>

          {/* responsivo */}
          <Box sx={{ display: { xs: "block", md: "none", sm: "none" } }}>
            <Checkbox
              icon={<Brightness4Icon sx={{ color: "white" }} />}
              checkedIcon={<Brightness4OutlinedIcon sx={{ color: "white" }} />}
              onClick={colorMode.toggleColorMode}
            />
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={navigateToFavoritos}
            >
              <Badge badgeContent={fav.length} color="primary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={handleCarrito}
            >
              <Badge badgeContent={carrito.length} color="success">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Slider lateral */}
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {sideList()}
      </Drawer>
    </Box>
  );
}
