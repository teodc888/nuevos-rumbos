import "./App.css";
// package's
import {useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
// components
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import Formulario from "./components/formulario/formulario";
import LogIn from './components/LogIn/LogIn';
import Landing from "./components/landing/landing";


// Redux
import { useDispatch } from "react-redux";
import {getProductos} from "./redux/actions/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductos());
  },[dispatch]);


  return (
    <div >
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/formulario" element={<Formulario/>} />
        <Route path="/formulario" element={<Formulario/>} />
        <Route path="/log-in" element={<LogIn/>} />
      </Routes>


    </div>
  );
}

export default App;
