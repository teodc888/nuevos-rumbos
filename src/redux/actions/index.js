// import axios from "axios";
import {
    GET_PRODUCTOS,
    BUSCAR_PRODUCTOS,
} from './actionsTypes';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig";

export function getProductos() {
    return async function (dispatch) {
        try {
            const res = await getDocs(collection(db, "productos"));

            return dispatch({
                type: GET_PRODUCTOS,
                payload: res.docs.map(doc => doc.data())
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export const buscarProductos = nombre => {
    return {
      type: BUSCAR_PRODUCTOS,
      payload: nombre,
    };
  };