import { GET_PRODUCTOS, BUSCAR_PRODUCTOS } from "../actions/actionsTypes";

const inicialState = {
  productos: [],
  productosBuscados: [],
};

export default function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case GET_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
        productosBuscados: action.payload,
      };
    case BUSCAR_PRODUCTOS:
      return {
        ...state,
        productos: state.productosBuscados.filter((producto) => {
          return producto.nombre
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };
    default:
      return state;
  }
}
