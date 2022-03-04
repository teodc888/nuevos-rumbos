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
import EditarAutos from "./components/admin/editarAutos/editarAutos";
import FormEditarAuto from "./components/admin/editarAutos/formEditarAuto";
import Error from "./components/error/error";

//components Admin
import HomeAdmin from "./components/admin/home/home";
import NavBarAdmin from "./components/admin/navBar/navBar";
import Formulario from "./components/admin/formulario/formulario";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getProductosAuto,
  getProductosMoto,
  getProductosRepuesto,
  darkModee,
} from "./redux/actions/index";

//MUi modo dark
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//Mui fab
import { Box, Fab } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ShareIcon from "@mui/icons-material/Share";

import { useState } from "react";

function App() {
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

  const handleClose = () => {
    setOpen(false);
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/");
    setOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {login === true ? (
          <>
            <NavBarAdmin setMode={setMode} />
            <Routes>
              <Route path="/" element={<HomeAdmin />} />
              <Route path="/formulario" element={<Formulario />} />
              <Route path="/editarAutos" element={<EditarAutos />} />
              <Route path="/formEditarAuto/:id" element={<FormEditarAuto />} />
              {/* <Route path="*" element={<Error />} /> */}
            </Routes>
          </>
        ) : (
          <>
            <NavBar setMode={setMode} />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/autos" element={<HomeAuto />} />
              <Route path="/motos" element={<HomeMoto />} />
              <Route path="/repuestos" element={<HomeRepuestos />} />
              <Route path="/log-in" element={<LogIn />} />
              <Route path="/detalle/:id" element={<Detalle />} />
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Box
              sx={{
                display: { xs: "none", md: "none", sm: "none", lg: "block" },
                position: "fixed",
                bottom: "5%",
                right: "5%",
              }}
            >
              {open === true ? (
                <>
                  <Fab
                    aria-label="add"
                    sx={{ bgcolor: "pink" }}
                    onClick={handleInstagram}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Fab>
                  <Fab
                    aria-label="add"
                    sx={{ bgcolor: "green" }}
                    onClick={handleClose}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </Fab>
                </>
              ) : null}
              <Fab
                sx={{ bgcolor: "#2196f3" }}
                aria-label="add"
                onClick={handleClickOpen}
              >
                <ShareIcon />
              </Fab>
            </Box>

            <Box
              sx={{
                display: { xs: "block", md: "block", sm: "block", lg: "none" },
                position: "fixed",
                bottom: "5%",
                left: "5%",
              }}
            >
              <Fab
                sx={{ bgcolor: "#2196f3" }}
                aria-label="add"
                onClick={handleClickOpen}
              >
                <ShareIcon />
              </Fab>
              {open === true ? (
                <>
                  <Fab
                    aria-label="add"
                    sx={{ bgcolor: "pink" }}
                    onClick={handleInstagram}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Fab>
                  <Fab
                    aria-label="add"
                    sx={{ bgcolor: "green" }}
                    onClick={handleClose}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </Fab>
                </>
              ) : null}
            </Box>
          </>
        )}
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
