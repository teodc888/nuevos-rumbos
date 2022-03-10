import * as React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Checkbox,
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  Drawer,
  Divider,
} from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../../redux/actions/index";

//Router
import { useNavigate } from "react-router";

//Swal
import Swal from "sweetalert2";

const drawerWidth = 240;

function NavBarAdmin(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const colorElegido = useSelector((state) => state.color);

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

  const { setMode } = props;
  //dark mode
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [setMode]
  );

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClickNavigateFormularioAutos = () => {
    navigate("/formularioAuto");
  };
  const handleClickNavigateFormularioMotos = () => {
    navigate("/formularioMoto");
  };
  const handleClickNavigateFormularioRepuestos = () => {
    navigate("/formularioAuto");
  };

  const handleClickNavigateEditarAutos = () => {
    navigate("/editarAutos");
  };

  const handleClickNavigateEditarMotos = () => {
    navigate("/editarMotos");
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <Typography variant="h4" component="h6" textAlign="center">
        ADMIN
      </Typography>

      <Toolbar />
      <Divider />
      <Typography variant="h6" component="h6" textAlign="center">
        Formulario
      </Typography>
      <List>
        <ListItem button>
          <Button onClick={handleClickNavigateFormularioAutos}>
            Formulario Auto
          </Button>
        </ListItem>
        <ListItem button>
          <Button onClick={handleClickNavigateFormularioMotos}>
            Formulario Moto
          </Button>
        </ListItem>
        <ListItem button>
          <Button onClick={handleClickNavigateFormularioRepuestos}>
            Formulario Repuesto
          </Button>
        </ListItem>
      </List>
      <Divider />
      <Typography variant="h6" component="h6" textAlign="center">
        Editar
      </Typography>
      <List>
        <ListItem button>
          <Button
            container={container}
            onClose={handleDrawerToggle}
            onClick={handleClickNavigateEditarAutos}
          >
            Editar Autos
          </Button>
        </ListItem>
        <ListItem button>
          <Button
            container={container}
            onClose={handleDrawerToggle}
            onClick={handleClickNavigateEditarMotos}
          >
            Editar Motos
          </Button>
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "block" }}>
      <CssBaseline />
      <Box>
        <AppBar position="static" sx={{ bgcolor: colorElegido }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

NavBarAdmin.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBarAdmin;
