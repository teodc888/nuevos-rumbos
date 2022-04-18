// import axios from "axios";
import {
  GET_PRODUCTOS_AUTO,
  GET_PRODUCTOS_MOTO,
  GET_PRODUCTOS_REPUESTO,
  BUSCAR_PRODUCTOS_AUTO,
  BUSCAR_PRODUCTOS_MOTO,
  BUSCAR_PRODUCTOS_REPUESTO,
  BUSCAR_TOTAL,
  FILTRO_AUTO,
  FILTRO_MOTO,
  FILTRO_REPUESTO,
  FAVORITOS,
  ELIMINAR_FAVORITOS,
  LOGIN,
  COLOR,
  DARK_MODE,
  RESET_FILTRO,
  DELETE_FAVORITOS,
  CARRITO,
  DELETE_CARRITO,
  BORRAR_CARRITO_TOTAL,
  CANTIDAD,
  REPETICIONES
} from "./actionsTypes";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export function getProductosAuto() {
  return async function (dispatch) {
    try {
      const res = await getDocs(collection(db, "auto"));
      
      return dispatch({
        type: GET_PRODUCTOS_AUTO,
        payload: res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getProductosMoto() {
  return async function (dispatch) {
    try {
      const res = await getDocs(collection(db, "moto"));

      return dispatch({
        type: GET_PRODUCTOS_MOTO,
        payload: res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getProductosRepuesto() {
  return async function (dispatch) {
    try {
      const res = await getDocs(collection(db, "repuesto"));

      return dispatch({
        type: GET_PRODUCTOS_REPUESTO,
        payload: res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const buscarProductosAuto = (nombre) => {
  return {
    type: BUSCAR_PRODUCTOS_AUTO,
    payload: nombre,
  };
};

export const buscarProductosMotos = (nombre) => {
  return {
    type: BUSCAR_PRODUCTOS_MOTO,
    payload: nombre,
  };
};
export const buscarProductosRepuesto = (nombre) => {
  return {
    type: BUSCAR_PRODUCTOS_REPUESTO,
    payload: nombre,
  };
};

export const buscarTotal = (nombre) => {
  return {
    type: BUSCAR_TOTAL,
    payload: nombre,
  };
};

export const filtroAuto = (nombre) => {
  return {
    type: FILTRO_AUTO,
    payload: nombre,
  };
};

export const filtroMoto = (nombre) => {
  return {
    type: FILTRO_MOTO,
    payload: nombre,
  };
};

export const filtroRepuesto = (nombre) => {
  return {
    type: FILTRO_REPUESTO,
    payload: nombre,
  };
};

export const favoritos = (payload) => {
  return {
    type: FAVORITOS,
    payload,
  };
};

export const eliminarFavoritos = (id) => {
  return {
    type: ELIMINAR_FAVORITOS,
    payload: id,
  };
};

export const Login = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

export const eleccionColor = (payload) => {
  return {
    type: COLOR,
    payload,
  };
};

export const darkModee = (payload) => {
  return {
    type: DARK_MODE,
    payload,
  };
};

export const resetFiltro = (payload) => {
  return {
    type: RESET_FILTRO,
    payload,
  };
};

export const deleteFavoritos = (payload) => {
  return {
    type: DELETE_FAVORITOS,
    payload,
  };
};

export const agregarCarrito = (payload) => {
  return {
    type: CARRITO,
    payload,
  };
};

export const deleteCarrito = (id) => {
  return {
    type: DELETE_CARRITO,
    payload: id,
  };
};

export const borrarCarritoTotal = () => {
  return {
    type: BORRAR_CARRITO_TOTAL,
  };
}

export const cantidadStock = (id, cantidad) => {
  return {
    type: CANTIDAD,
    payload: { id, cantidad },
  };
}

export const repeticiones = (payload) => {
  return {
    type: REPETICIONES,
    payload,
  };
};
