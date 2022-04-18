import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  debug: true,
  storage,
  whitelist: ["repeticion","autos", "autosBuscados", "motos", "motosBuscados", "repuestos", "repuestosBuscados", "favoritos", "login", "color", "darkMode", "carrito"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;