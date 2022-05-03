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
  Menu,
  MenuItem,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import BuildIcon from "@mui/icons-material/Build";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

//Router
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

// React Router
import { useSelector } from "react-redux";

//Imagenes
import Portada1 from "../../images/nuevoRumbos.png";

import InputBuscador from "../buscador/InputBuscador/InputBuscador";

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
    color: "#bf360c",
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
  { listIcon: <FavoriteIcon />, listText: "Favoritos", listPath: "/favoritos" },
  { listIcon: <ShoppingCartIcon />, listText: "Carrito", listPath: "/carrito" },
];

export default function NavBar({ setMode }) {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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

  const handleInstagram = () => {
    window.open("https://www.instagram.com/");
    setOpen(false);
  };

  const handleWhatsapp = () => {
    window.open("https://wa.me/3512550311");
    setOpen(false);
  };
  const handleFacebook = () => {
    window.open("https://www.facebook.com/");
    setOpen(false);
  };

  const classes = useStyles();

  const sideList = () => (
    <Box
      sx={{ background: handleDarkModeBG(), width: 312, height: "100%" }}
      component="div"
    >
      <Avatar className={classes.avatar} src={Portada1} alt="Nuevo Rumbos" />
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary={"IMPORTADORA"} />
        </ListItem>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            {item.listText === "Favoritos" ? (
              <ListItemIcon className={classes.listItem}>
                <Badge badgeContent={fav.length} color="primary">
                  {item.listIcon}
                </Badge>
              </ListItemIcon>
            ) : item.listText === "Carrito" ? (
              <ListItemIcon className={classes.listItem}>
                <Badge badgeContent={carrito.length} color="error">
                  {item.listIcon}
                </Badge>
              </ListItemIcon>
            ) : (
              <ListItemIcon className={classes.listItem}>
                {item.listIcon}
              </ListItemIcon>
            )}
            <ListItemText
              primary={item.listText}
              sx={{ color: handleDarkModeLetras() }}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="REDES SOCIALES" />
        </ListItem>
        <ListItem button onClick={() => handleWhatsapp()}>
          <ListItemIcon>
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{
                color: "white",
                fontSize: "30px",
                width: "30px",
                height: "30px",
                borderRadius: "40%",
                backgroundColor: "#25d366",
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Whatsapp"
            sx={{ color: handleDarkModeLetras() }}
          />
        </ListItem>
        <ListItem button onClick={() => handleInstagram()}>
          <ListItemIcon>
            <FontAwesomeIcon
              icon={faInstagram}
              style={{
                color: "white",
                fontSize: "30px",
                width: "30px",
                height: "30px",
                borderRadius: "40%",
                background:
                  "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Instagram"
            sx={{ color: handleDarkModeLetras() }}
          />
        </ListItem>
        <ListItem button onClick={() => handleFacebook()}>
          <ListItemIcon>
            <FontAwesomeIcon
              icon={faFacebook}
              style={{
                color: "white",
                fontSize: "30px",
                width: "30px",
                height: "30px",
                borderRadius: "40%",
                background: "#3b5998",
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Facebook"
            sx={{ color: handleDarkModeLetras() }}
          />
        </ListItem>
      </List>
      <Divider />
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
    handleMobileMenuClose();
  };

  const handleCarrito = () => {
    navigate("/carrito");
    handleMobileMenuClose();
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
          onClick={navigateToFavoritos}
          sx={{ mr: "0.1px" }}
        >
          <Badge badgeContent={fav.length} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
          onClick={handleCarrito}
        >
          <Badge badgeContent={carrito.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <Checkbox
          icon={<Brightness4OutlinedIcon sx={{color:"white"}} />}
          checkedIcon={<Brightness4OutlinedIcon sx={{color:"black"}}  />}
          onClick={colorMode.toggleColorMode}
        />
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: colorElegido }}>
        <Toolbar>
          {/* Icono de Slider lateral */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
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
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
              cursor: "pointer",
            }}
            onClick={navigateToLanding}
          >
            IMPORTADORA
          </Typography>

          {/* Normal */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
              ml: 2,
            }}
          >
            <InputBuscador />
          </Box>

          {/* responsivo */}

          <Box
            sx={{
              display: { xs: "block", sm: "none", md: "none", lg: "none" },
            }}
          >
            <InputBuscador />
          </Box>

          {/* iconos */}
          <Box sx={{ flexGrow: 1 }} />

          {/* normal */}
          <Box
            sx={{
              display: { xs: "none", md: "block", sm: "none", lg: "block" },
            }}
          >
            <Checkbox
              icon={<Brightness4OutlinedIcon sx={{ color: "white" }} />}
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
              <Badge badgeContent={fav.length} color="error">
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
              <Badge badgeContent={carrito.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>

          {/* responsivo */}
          <Box
            sx={{
              display: { xs: "block", md: "none", sm: "block", lg: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}

      {/* Slider lateral */}
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {sideList()}
      </Drawer>
    </Box>
  );
}
