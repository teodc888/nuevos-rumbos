import {
  GET_PRODUCTOS_AUTO,
  GET_PRODUCTOS_MOTO,
  GET_PRODUCTOS_REPUESTO,
  BUSCAR_PRODUCTOS_AUTO,
  BUSCAR_PRODUCTOS_MOTO,
  BUSCAR_PRODUCTOS_REPUESTO,
  BUSCAR_TOTAL,
} from "../actions/actionsTypes";

const inicialState = {
  buscados: [],
  buscadosFiltrados: [],
  autos: [],
  autosBuscados: [],
  motos: [],
  motosBuscados: [],
  repuestos: [],
  repuestosBuscados: [],
};

export default function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case GET_PRODUCTOS_AUTO:
      return {
        ...state,
        autos: action.payload,
        autosBuscados: action.payload,
        buscadosFiltrados: [...state.buscadosFiltrados, action.payload],
      };
    case GET_PRODUCTOS_MOTO:
      return {
        ...state,
        motos: action.payload,
        motosBuscados: action.payload,
        buscadosFiltrados: [...state.buscadosFiltrados, action.payload],
      };
    case GET_PRODUCTOS_REPUESTO:
      return {
        ...state,
        repuestos: action.payload,
        repuestosBuscados: action.payload,
        buscadosFiltrados: [...state.buscadosFiltrados, action.payload],
      };
    case BUSCAR_PRODUCTOS_AUTO:
      return {
        ...state,
        autos: state.autosBuscados.filter((producto) => {
          return producto.modelo
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };
    case BUSCAR_PRODUCTOS_MOTO:
      return {
        ...state,
        motos: state.motosBuscados.filter((producto) => {
          return producto.modelo
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };
    case BUSCAR_PRODUCTOS_REPUESTO:
      return {
        ...state,
        repuestos: state.repuestosBuscados.filter((producto) => {
          return producto.modelo
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };
    case BUSCAR_TOTAL:
      let x = state.buscadosFiltrados.flat();
      return {
        ...state,
        buscados: x.filter((producto) => {
          return producto.modelo
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };
    default:
      return state;
  }
}
