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
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import BuildIcon from "@mui/icons-material/Build";
import HomeIcon from "@mui/icons-material/Home";

//Router
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

// React Router
import { useSelector } from "react-redux";

// Componetes
import PopUp from "../popUp/popUp";

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
      },
    }),
    [setMode]
  );

  const colorElegido = useSelector((state) => state.color);

  // Funciones

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const navigateToLogin = () => {
    navigate("/log-in");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const navigateToLanding = () => {
    navigate("/");
  };

  const navigateToFavoritos = () => {
    navigate("/favoritos");
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const navigateToEditarAutos = () => {
    navigate("/editarautos");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={navigateToLogin}>Login</MenuItem>
      <MenuItem onClick={navigateToEditarAutos}>EditarAutos</MenuItem>
    </Menu>
  );
  const fav = useSelector((state) => state.favoritos);
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
      <MenuItem onClick={navigateToEditarAutos}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AddIcon />
        </IconButton>
        <p>EditarAutos</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: colorElegido }}>
        <Toolbar>
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", md:"block", lg:"block" }, cursor: "pointer" }}
            onClick={navigateToLanding}
          >
            NUEVOS RUMBOS
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "flex", sm: "block" }, marginLeft: "1%" }}
          >
            <PopUp />
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          {/* Normal */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
          </Box>

          {/* Responsive */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Checkbox
              icon={<Brightness4Icon sx={{ color: "white" }} />}
              checkedIcon={<Brightness4OutlinedIcon sx={{ color: "white" }} />}
              onClick={colorMode.toggleColorMode}
              sx={{ color: "white" }}
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
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
