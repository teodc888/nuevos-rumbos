import "./App.css";

import {useEffect} from 'react';
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import Formulario from "./components/formulario/formulario";




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
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario/>} />
      </Routes>


    </div>
  );
}

export default App;
