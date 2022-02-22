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
} from "./actionsTypes";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export function getProductosAuto() {
  return async function (dispatch) {
    try {
      const res = await getDocs(collection(db, "auto"));

      return dispatch({
        type: GET_PRODUCTOS_AUTO,
        payload: res.docs.map((doc) => doc.data()),
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
        payload: res.docs.map((doc) => doc.data()),
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
        payload: res.docs.map((doc) => doc.data()),
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
}

export const filtroMoto = (nombre) => {
  return {
    type: FILTRO_MOTO,
    payload: nombre,
  };
}

export const filtroRepuesto = (nombre) => {
  return {
    type: FILTRO_REPUESTO,
    payload: nombre,
  };
}