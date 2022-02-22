import {
  GET_PRODUCTOS_AUTO,
  GET_PRODUCTOS_MOTO,
  GET_PRODUCTOS_REPUESTO,
  BUSCAR_PRODUCTOS_AUTO,
  BUSCAR_PRODUCTOS_MOTO,
  BUSCAR_PRODUCTOS_REPUESTO,
  BUSCAR_TOTAL,
  FILTRO_GNV,
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
  orden: {
    gnv: "todos",
    combustible: "todos",
    marca: "todos",
    precio: "todos",
    kilometros: "todos",
    carroceria: "todos",
  },
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
    case FILTRO_GNV:
      const { gnv, combustible, marca, precio, kilometros, carroceria } =
        action.payload;
      let autosFiltro = [...state.autosBuscados];

      autosFiltro =
        gnv === "todos"
          ? autosFiltro
          : autosFiltro.filter((producto) => {
              return producto.gnv === gnv;
            });

      autosFiltro =
        combustible === "todos"
          ? autosFiltro
          : autosFiltro.filter((producto) => {
              return producto.combustible === combustible;
            });

      autosFiltro =
        marca === "todos"
          ? autosFiltro
          : autosFiltro.filter((producto) => {
              return producto.marca === marca;
            });

      autosFiltro =
        precio === "todos"
          ? autosFiltro
          : precio === "menor"
          ? autosFiltro.sort(function (a, b) {
              return a.precio - b.precio;
            })
          : autosFiltro.sort(function (a, b) {
              return b.precio - a.precio;
            });

      autosFiltro =
        kilometros === "todos"
          ? autosFiltro
          : kilometros === "menor"
          ? autosFiltro.sort(function (a, b) {
              return a.kilometros - b.kilometros;
            })
          : autosFiltro.sort(function (a, b) {
              return b.kilometros - a.kilometros;
            });

      autosFiltro =
        carroceria === "todos"
          ? autosFiltro
          : autosFiltro.filter((producto) => {
              return producto.carroceria === carroceria;
            });
      return {
        ...state,
        autos: autosFiltro,
      };
    default:
      return state;
  }
}
