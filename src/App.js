import "./App.css";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

// package's
import {useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
// components
import NavBar from "./components/navBar/navBar";
import Formulario from "./components/formulario/formulario";
import LogIn from './components/log-in/log-in';
import Landing from "./components/landing/landing";
import HomeAuto from "./components/autos/home/homeAuto";
import HomeMoto from "./components/motos/home/homeMoto";
import HomeRepuestos from "./components/repuestos/home/homeRepuesto";
import Detalle from "./components/detalle/detalle";
import Favoritos from "./components/favoritos/favoritos";
// Redux
import { useDispatch } from "react-redux";
import { getProductosAuto, getProductosMoto, getProductosRepuesto } from "./redux/actions/index";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductosAuto());
    dispatch(getProductosMoto());
    dispatch(getProductosRepuesto());
  }, [dispatch]);



  return (
    <div >
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/autos" element={<HomeAuto />} />
        <Route path="/motos" element={<HomeMoto />} />
        <Route path="/repuestos" element={<HomeRepuestos />} />
        <Route path="/formulario" element={<Formulario/>} />
        <Route path="/formulario" element={<Formulario/>} />
        <Route path="/log-in" element={<LogIn/>} />
        <Route path="/detalle/:id" element={<Detalle/>} />
        <Route path="/favoritos" element={<Favoritos/>} />

      </Routes>

    <ToastContainer/>
    </div>
  );
}

export default App;
