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
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Button,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";

//Router
import { useNavigate } from "react-router";

// React Router
import { useSelector, useDispatch } from "react-redux";
import { eleccionColor } from "../../redux/actions/index";

// Componetes
import PopUp from "../popUp/popUp";

//color
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

  //Color
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const eleccionColorr = (e) => {
    dispatch(eleccionColor(e.target.value));
    handleClose();
  };

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
      <MenuItem onClick={navigateToFavoritos}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Badge badgeContent={fav.length} color="secondary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Favoritos</p>
      </MenuItem>
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
            <IconButton onClick={handleClickOpen}>
              <FormatPaintIcon sx={{ color: "white" }} />
            </IconButton>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Elija un color para la pagina"}</DialogTitle>
              <DialogContent>
                <Button name="color" value="#d50000" onClick={eleccionColorr}>
                  Rojo
                </Button>
                <Button name="color" value="#1a237e" onClick={eleccionColorr}>
                  Azul
                </Button>
                <Button name="color" value="#311b92" onClick={eleccionColorr}>
                  Violeta
                </Button>
                <Button name="color" value="#212121" onClick={eleccionColorr}>
                  Negro
                </Button>
                <Button name="color" value="#263238" onClick={eleccionColorr}>
                  Gris
                </Button>
                <Button name="color" value="#3e2723" onClick={eleccionColorr}>
                  Marron
                </Button>
                <Button name="color" value="#4fc3f7" onClick={eleccionColorr}>
                  Turquesa
                </Button>
                <Button name="color" value="#880e4f" onClick={eleccionColorr}>
                  Rosa
                </Button>
              </DialogContent>
            </Dialog>
            <Checkbox
              icon={<Brightness4Icon sx={{ color: "white" }} />}
              checkedIcon={<Brightness4OutlinedIcon />}
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
              <Badge badgeContent={fav.length} color="secondary">
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
            <IconButton onClick={handleClickOpen}>
              <FormatPaintIcon sx={{ color: "white" }} />
            </IconButton>
            <Checkbox
              icon={<Brightness4Icon />}
              checkedIcon={<Brightness4OutlinedIcon />}
              onClick={colorMode.toggleColorMode}
              sx={{ color: "white" }}
            />
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
