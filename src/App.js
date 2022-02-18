import "./App.css";
// package's
// import {useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
// components
import NavBar from "./components/navBar/navBar";
import Formulario from "./components/formulario/formulario";
import LogIn from './components/LogIn/LogIn';
import Landing from "./components/landing/landing";
import HomeAuto from "./components/autos/home/homeAuto";
import HomeMoto from "./components/motos/home/homeMoto";
import HomeRepuestos from "./components/repuestos/home/homeRepuesto";

// Redux
// import { useDispatch } from "react-redux";


function App() {
  // const dispatch = useDispatch();




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
      </Routes>


    </div>
  );
}

export default App;
