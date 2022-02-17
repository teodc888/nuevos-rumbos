import "./App.css";

import {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import Formulario from "./components/formulario/formulario";


import { collection, getDocs } from "firebase/firestore";
import db from "./firebase/firebaseConfig";

function App() {
  const [docs, setDocs] = useState([]);
  
  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await getDocs(collection(db, "productos"));
      setDocs(datos.docs.map(doc => doc.data()));
    }
    obtenerDatos();
  },[]);

  console.log(docs);
  return (
    <div >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home docs={docs}/>} />
        <Route path="/formulario" element={<Formulario/>} />
      </Routes>
    </div>
  );
}

export default App;
