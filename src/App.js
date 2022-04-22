import "./App.css";

import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// package's
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// components
import NavBar from "./components/navBar/navBar";
import LogIn from "./components/log-in/log-in";
import Landing from "./components/landing/landing";
import HomeAuto from "./components/autos/home/homeAuto";
import HomeMoto from "./components/motos/home/homeMoto";
import HomeRepuestos from "./components/repuestos/home/homeRepuesto";
import Detalle from "./components/detalle/detalle";
import Favoritos from "./components/favoritos/favoritos";
import Error from "./components/error/error";
import Carrito from "./components/carrito/carrito";
import Nosotros from "./components/nosotros/nosotros";

//components Admin
import HomeAdmin from "./components/admin/home/home";
import NavBarAdmin from "./components/admin/navBar/navBar";
import FormularioAuto from "./components/admin/formulario/formularioAuto/formularioAuto";
import FormularioMoto from "./components/admin/formulario/formularioMoto/formularioMoto";
import FormularioRepuesto from "./components/admin/formulario/formularioRepuesto/formularioRepuesto";
import EditarMotos from "./components/admin/editarMotos/editarMotos";
import FormEditarMoto from "./components/admin/editarMotos/formEditarMoto";
import EditarRepuestos from "./components/admin/editarRepuestos/editarRepuestos";
import EditarAutos from "./components/admin/editarAutos/editarAutos";
import FormEditarAuto from "./components/admin/editarAutos/formEditarAuto";
import FormEditarRepuesto from "./components/admin/editarRepuestos/formEditarRepuesto";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getProductosAuto,
  getProductosMoto,
  getProductosRepuesto,
  darkModee,
  repeticiones,
} from "./redux/actions/index";

//MUi modo dark
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//Mui fab
import { Box, Fab } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ShareIcon from "@mui/icons-material/Share";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { useState } from "react";

//persistor
import Store from "./redux/store/index";

export default function App() {
  const login = useSelector((state) => state.login);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductosAuto());
    dispatch(getProductosMoto());
    dispatch(getProductosRepuesto());
  }, [dispatch]);

  //modo dark
  const modo = useSelector((state) => state.darkMode);
  const [mode, setMode] = React.useState(modo);
  dispatch(darkModee(mode));

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: `'Poppins', sans-serif `,
          fontSize: 14,
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 500,
        },
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleSubir = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setOpen(false);
  };

  const handleFacebook = () => {
    window.open("https://www.facebook.com/");
    setOpen(false);
  };

  const handleWhatsapp = () => {
    window.open("https://wa.me/3512550311");
    setOpen(false);
  };

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 90) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  //Restart app

  const repeticion = useSelector((state) => state.repeticion);

  const { persistor } = Store;

  const fecha = new Date();

  const hoy = fecha.getDate();

  if (repeticion === 0) {
    if (hoy === 18 || hoy === 28) {
      dispatch(repeticiones(1));
      persistor.purge();
      console.log("actualizado");
    } else if (hoy === 15 || hoy === 29) {
      dispatch(repeticiones(0));
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {login === true ? (
          <>
            <NavBarAdmin setMode={setMode} />
            <Routes>
              <Route path="/" element={<HomeAdmin />} />
              <Route path="/formularioAuto" element={<FormularioAuto />} />
              <Route path="/formularioMoto" element={<FormularioMoto />} />
              <Route
                path="/formularioRepuesto"
                element={<FormularioRepuesto />}
              />
              <Route path="/editarAutos" element={<EditarAutos />} />
              <Route path="/formEditarAuto/:id" element={<FormEditarAuto />} />
              <Route path="/editarMotos" element={<EditarMotos />} />
              <Route path="/formEditarMoto/:id" element={<FormEditarMoto />} />
              <Route path="/editarRepuestos" element={<EditarRepuestos />} />
              <Route
                path="/formEditarRepuesto/:id"
                element={<FormEditarRepuesto />}
              />
              {/* <Route path="*" element={<Error />} /> */}
            </Routes>
          </>
        ) : (
          <div className="App">
            <NavBar setMode={setMode} />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/autos" element={<HomeAuto />} />
              <Route path="/motos" element={<HomeMoto />} />
              <Route path="/repuestos" element={<HomeRepuestos />} />
              <Route path="/log-in" element={<LogIn />} />
              <Route path="/detalle/:id" element={<Detalle />} />
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="*" element={<Error />} />
            </Routes>

            {/* redes sociales */}
            <Box
              sx={{
                display: { xs: "none", md: "none", sm: "none", lg: "block" },
                position: "fixed",
                bottom: "5%",
                right: "5%",
                zIndex: "3",
              }}
            >
              {open === true ? (
                <>
                  <Fab
                    aria-label="add"
                    sx={{
                      background:
                        "linear-gradient(45deg, #3b5998, #3b5998, #3b5998, #3b5998, #3b5998, #3b5998)",
                      mr: "6px",
                    }}
                    onClick={handleFacebook}
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ fontSize: "42px", color: "white" }}
                    />
                  </Fab>
                  <Fab
                    aria-label="add"
                    sx={{
                      background:
                        "linear-gradient(45deg, #25d366, #25d366, #25d366, #25d366, #25d366, #25d366)",
                      mr: "6px",
                    }}
                    onClick={handleWhatsapp}
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      style={{ fontSize: "42px", color: "white" }}
                    />
                  </Fab>
                </>
              ) : null}
              <Fab
                sx={{
                  background:
                    "linear-gradient(45deg, #bf360c, #bf360c, #bf360c, #bf360c, #bf360c, #bf360c)",
                  color: "white",
                }}
                aria-label="add"
                onClick={handleClickOpen}
              >
                <ShareIcon />
              </Fab>
            </Box>

            {/* Icono subir normal y responsivo*/}

            {visible === true && open === false ? (
              <>
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      md: "none",
                      sm: "none",
                      lg: "block",
                    },
                    position: "fixed",
                    bottom: "5%",
                    right: "92%",
                    zIndex: "3",
                  }}
                >
                  <Fab
                    aria-label="add"
                    sx={{
                      background:
                        "linear-gradient(45deg, #bf360c, #bf360c, #bf360c, #bf360c, #bf360c, #bf360c)",
                      color: "white",
                    }}
                    onClick={handleSubir}
                  >
                    <ArrowUpwardIcon />
                  </Fab>
                </Box>
                <Box
                  sx={{
                    display: {
                      xs: "block",
                      md: "block",
                      sm: "block",
                      lg: "none",
                    },
                    position: "fixed",
                    bottom: "5%",
                    left: "42.5%",
                    zIndex: "3",
                  }}
                >
                  <Fab
                    aria-label="add"
                    sx={{
                      background:
                        "linear-gradient(45deg, #bf360c, #bf360c, #bf360c, #bf360c, #bf360c, #bf360c)",
                      color: "white",
                    }}
                    onClick={handleSubir}
                  >
                    <ArrowUpwardIcon />
                  </Fab>
                </Box>
              </>
            ) : null}

            {/* Redes sociales responsivas    */}
            <Box
              sx={{
                display: { xs: "block", md: "block", sm: "block", lg: "none" },
                position: "fixed",
                bottom: "5%",
                left: "5%",
                zIndex: "3",
              }}
            >
              <Fab
                sx={{
                  background:
                    "linear-gradient(45deg, #bf360c, #bf360c, #bf360c, #bf360c, #bf360c, #bf360c)",
                  mr: "6px",
                  color: "white",
                }}
                aria-label="add"
                onClick={handleClickOpen}
              >
                <ShareIcon />
              </Fab>
              {open === true ? (
                <>
                  <Fab
                    aria-label="add"
                    sx={{
                      background:
                        "linear-gradient(45deg, #3b5998, #3b5998, #3b5998, #3b5998, #3b5998, #3b5998)",
                      mr: "6px",
                    }}
                    onClick={handleFacebook}
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ fontSize: "42px", color: "white" }}
                    />
                  </Fab>
                  <Fab
                    aria-label="add"
                    onClick={handleWhatsapp}
                    sx={{
                      background:
                        "linear-gradient(45deg, #25d366, #25d366, #25d366, #25d366, #25d366, #25d366)",
                      mr: "6px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      style={{ fontSize: "42px", color: "white" }}
                    />
                  </Fab>
                </>
              ) : null}
            </Box>
          </div>
        )}
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}
