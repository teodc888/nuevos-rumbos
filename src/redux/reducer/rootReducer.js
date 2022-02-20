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
        buscados: action.payload,
        buscadosFiltrados: action.payload,
      };
      case GET_PRODUCTOS_MOTO:
        return {
          ...state,
          motos: action.payload,
          motosBuscados: action.payload,
          buscados: action.payload,
          buscadosFiltrados: action.payload,
        };
        case GET_PRODUCTOS_REPUESTO:
          return {
            ...state,
            repuestos: action.payload,
            repuestosBuscados: action.payload,
            buscados: action.payload,
            buscadosFiltrados: action.payload,
          };
    case BUSCAR_PRODUCTOS_AUTO:
      return {
        ...state,
        autos: state.autosBuscados.filter((producto) => {
          return producto.nombre
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };
      case BUSCAR_PRODUCTOS_MOTO:
      return {
        ...state,
        motos: state.motosBuscados.filter((producto) => {
          return producto.nombre
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };
      case BUSCAR_PRODUCTOS_REPUESTO:
      return {
        ...state,
        repuestos: state.repuestosBuscados.filter((producto) => {
          return producto.nombre
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };
      case BUSCAR_TOTAL:
        return {
          ...state,
          buscados: state.buscadosFiltrados.filter((producto) => {
            return producto.nombre
              .toLowerCase()
              .includes(action.payload.toLowerCase());
          }),
        };
    default:
      return state;
  }
}
