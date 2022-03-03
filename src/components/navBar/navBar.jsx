import React from "react";

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
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";

//Router
import { useNavigate } from "react-router";

// React Router
import { useSelector } from "react-redux";

// Componetes
import PopUp from "../popUp/popUp";

export default function NavBar({ setMode }) {
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
            onClick={navigateToLanding}
          >
            <HomeIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
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
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Checkbox
              icon={<Brightness4Icon sx={{ color: "white" }} />}
              checkedIcon={<Brightness4OutlinedIcon sx={{ color: "white" }}  />}
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
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
