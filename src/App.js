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
} from "./redux/actions/index";

//MUi modo dark
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


function App() {
  const login = useSelector((state) => state.login);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductosAuto());
    dispatch(getProductosMoto());
    dispatch(getProductosRepuesto());
  }, [dispatch]);

  //modo dark
  const [mode, setMode] = React.useState("light");


  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );



  //Color de la pagina

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {login === true ? (
        <>
          <NavBarAdmin />
          <Routes>
            <Route path="/" element={<HomeAdmin />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="*" element={<Error />} />
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
            <Route path="/editarAutos" element={<EditarAutos />} />
            <Route path="/formEditarAuto/:id" element={<FormEditarAuto />} />
            <Route path="*" element={<Error />} />

          </Routes>
        </>
      )}
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
