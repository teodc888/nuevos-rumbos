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
  favoritos: [],
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
  login: "",
  color: "#d50000",
  darkMode: "light",
  carrito: [],
};

export default function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case GET_PRODUCTOS_AUTO:
      return {
        ...state,
        autos: action.payload,
        autosBuscados: action.payload,
      };
    case GET_PRODUCTOS_MOTO:
      return {
        ...state,
        motos: action.payload,
        motosBuscados: action.payload,
      };
    case GET_PRODUCTOS_REPUESTO:
      return {
        ...state,
        repuestos: action.payload,
        repuestosBuscados: action.payload,
      };
    case BUSCAR_PRODUCTOS_AUTO:
      const autosModelo = state.autosBuscados.filter((auto) => {
        return auto.modelo
          .toLowerCase()
          .startsWith(action.payload.toLowerCase());
      });
      const autosMarca = state.autosBuscados.filter((auto) => {
        return auto.marca
          .toLowerCase()
          .startsWith(action.payload.toLowerCase());
      });

      return {
        ...state,
        autos: autosModelo.length > 0 ? autosModelo : autosMarca,
      };
    case BUSCAR_PRODUCTOS_MOTO:
      const motosModelo = state.motosBuscados.filter((producto) => {
        return producto.modelo
          .toLowerCase()
          .startsWith(action.payload.toLowerCase());
      });
      const motosMarca = state.motosBuscados.filter((producto) => {
        return producto.marca
          .toLowerCase()
          .startsWith(action.payload.toLowerCase());
      });

      return {
        ...state,
        motos: motosModelo.length > 0 ? motosModelo : motosMarca,
      };
    case BUSCAR_PRODUCTOS_REPUESTO:
      const repuestosModelo = state.repuestosBuscados.filter((producto) => {
        return producto.nombre
          .toLowerCase()
          .startsWith(action.payload.toLowerCase());
      });
      return {
        ...state,
        repuestos: repuestosModelo,
      };
    case BUSCAR_TOTAL:
      const autosModelo1 = state.autosBuscados.filter((auto) => {
        return auto.modelo
          .toLowerCase()
          .startsWith(action.payload.toLowerCase());
      });
      const autosMarca1 = state.autosBuscados.filter((auto) => {
        return auto.marca
          .toLowerCase()
          .startsWith(action.payload.toLowerCase());
      });

      const motosModelo1 = state.motosBuscados.filter((producto) => {
        return producto.modelo
          .toLowerCase()
          .startsWith(action.payload.toLowerCase());
      });
      const motosMarca1 = state.motosBuscados.filter((producto) => {
        return producto.marca
          .toLowerCase()
          .startsWith(action.payload.toLowerCase());
      });

      const repuestosModelo1 = state.repuestosBuscados.filter((producto) => {
        return producto.nombre
          .toLowerCase()
          .startsWith(action.payload.toLowerCase());
      });

      return {
        ...state,
        buscados:
          action.payload === ""
            ? (state.buscados = [])
            : autosModelo1.length > 0
            ? (state.buscados = autosModelo1)
            : autosMarca1.length > 0
            ? (state.buscados = autosMarca1)
            : motosModelo1.length > 0
            ? (state.buscados = motosModelo1)
            : motosMarca1.length > 0
            ? (state.buscados = motosMarca1)
            : repuestosModelo1.length > 0
            ? (state.buscados = repuestosModelo1)
            : (state.buscados = []),
      };
    case FILTRO_AUTO:
      const { gnv, combustible, marca, precio, kilometros, carroceria } =
        action.payload;
      let autosFiltro = state.autosBuscados;

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
              return producto.nombre === marcaR;
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
    case FAVORITOS:
      return {
        ...state,
        favoritos: [...state.favoritos, action.payload],
      };

    case ELIMINAR_FAVORITOS:
      return {
        ...state,
        favoritos: state.favoritos.filter(
          (producto) => producto.id !== action.payload
        ),
      };
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case COLOR:
      return {
        ...state,
        color: action.payload,
      };
    case DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    case RESET_FILTRO:
      return {
        ...state,
        autos: [...state.autosBuscados],
        motos: [...state.motosBuscados],
        repuestos: [...state.repuestosBuscados],
        buscados: [],
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
    case DELETE_FAVORITOS:
      return {
        ...state,
        favoritos: [],
      };
    case CARRITO:
      return {
        ...state,
        carrito: [...state.carrito, action.payload],
      };

    case DELETE_CARRITO:
      return {
        ...state,
        carrito: state.carrito.filter(
          (producto) => producto.id !== action.payload
        ),
      };
    case BORRAR_CARRITO_TOTAL:
      return {
        ...state,
        carrito: [],
      };

    case CANTIDAD:
      return {
        ...state,
        carrito: state.carrito.map((producto) => {
          if (producto.id === action.payload.id) {
            return {
              ...producto,
              cantidad: action.payload.cantidad,
            };
          }
          return producto;
        }),
      };
    default:
      return state;
  }
}
