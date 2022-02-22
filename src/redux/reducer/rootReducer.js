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
    kilometrosM: "todos",
    precioM: "todos",
    marcaM: "todos",
    cilindrada: "todos",
    precioR: "todos",
    marcaR: "todos",
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
    case FILTRO_AUTO:
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

    case FILTRO_MOTO:
      const { kilometrosM, precioM, marcaM, cilindrada } = action.payload;
      let motosFiltro = [...state.motosBuscados];

      motosFiltro =
        kilometrosM === "todos"
          ? motosFiltro
          : kilometrosM === "menor"
          ? motosFiltro.sort(function (a, b) {
              return a.kilometros - b.kilometros;
            })
          : motosFiltro.sort(function (a, b) {
              return b.kilometros - a.kilometros;
            });

      motosFiltro =
        precioM === "todos"
          ? motosFiltro
          : precioM === "menor"
          ? motosFiltro.sort(function (a, b) {
              return a.precio - b.precio;
            })
          : motosFiltro.sort(function (a, b) {
              return b.precio - a.precio;
            });

      motosFiltro =
        marcaM === "todos"
          ? motosFiltro
          : motosFiltro.filter((producto) => {
              return producto.marca === marcaM;
            });

      motosFiltro =
        cilindrada === "todos"
          ? motosFiltro
          : motosFiltro.filter((producto) => {
              return producto.cilindrada === cilindrada;
            });
      return {
        ...state,
        motos: motosFiltro,
      };

    case FILTRO_REPUESTO:
      const { marcaR, precioR } = action.payload;
      let repuestosFiltro = [...state.repuestosBuscados];

      repuestosFiltro =
        marcaR === "todos"
          ? repuestosFiltro
          : repuestosFiltro.filter((producto) => {
              return producto.marca === marcaR;
            });

      repuestosFiltro =
        precioR === "todos"
          ? repuestosFiltro
          : precioR === "menor"
          ? repuestosFiltro.sort(function (a, b) {
              return a.precio - b.precio;
            })
          : repuestosFiltro.sort(function (a, b) {
              return b.precio - a.precio;
            });
      return {
        ...state,
        repuestos: repuestosFiltro,
      };

    default:
      return state;
  }
}
