import React, { useState } from "react";

//MUI
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  Checkbox,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Button,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import BuildIcon from "@mui/icons-material/Build";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

//Router
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

// React Router
import { useSelector } from "react-redux";

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
      <Avatar
        className={classes.avatar}
        src={
          "https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/121409666_3270786793044323_821596622646100409_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=MLqKlfTlQQcAX_l2lBA&_nc_ht=scontent.fcor2-2.fna&oh=00_AT_QoJzmkwuUnkdyfk1LuYQJyFazBiMVOJP0j3Hg9Bl2wg&oe=6247F34E"
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

  //dark mode
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        handleMobileMenuClose();
      },
    }),
    [setMode]
  );

  const colorElegido = useSelector((state) => state.color);

  // Funciones

  const navigate = useNavigate();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const navigateToLogin = () => {
    navigate("/log-in");
    handleMobileMenuClose();
  };

  const navigateToLanding = () => {
    navigate("/");
  };

  const navigateToFavoritos = () => {
    navigate("/favoritos");
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleBuscador = () => {
    navigate("/buscador");
    window.location.reload();
  };

  const handleCarrito = () => {
    navigate("/carrito");
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const fav = useSelector((state) => state.favoritos);
  const carrito = useSelector((state) => state.carrito);

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
      <MenuItem onClick={navigateToLogin}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge color="error">
            <AccountCircle />
          </Badge>
        </IconButton>
        <p>Login</p>
      </MenuItem>

      <MenuItem onClick={colorMode.toggleColorMode}>
        <Checkbox
          icon={<Brightness4Icon sx={{ color: "black" }} />}
          checkedIcon={<Brightness4OutlinedIcon sx={{ color: "white" }} />}
        />
        <p>Dark Mode</p>
      </MenuItem>

      <MenuItem onClick={navigateToFavoritos}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={fav.length} color="primary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Favoritos</p>
      </MenuItem>

      <MenuItem onClick={handleCarrito}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={carrito.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Carritos</p>
      </MenuItem>
    </Menu>
  );

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

          {/* buscador */}
          <Typography variant="h6" component="div" sx={{ marginLeft: "1%" }}>
            <Button onClick={handleBuscador} sx={{ color: "white" }}>
              <SearchIcon sx={{ mr: "10%", color: "white" }} /> Buscar
            </Button>
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
              <Badge badgeContent={carrito.length} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={navigateToLogin}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

          {/* responsivo */}
          <Box sx={{ display: { xs: "block", md: "none", sm: "none" } }}>
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

      {/* Slider lateral */}
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {sideList()}
      </Drawer>
      {/* menu responsivo    */}
      {renderMobileMenu}
    </Box>
  );
}
