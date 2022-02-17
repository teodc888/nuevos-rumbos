import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import persistReducer from "../reducer/index";
const compose = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(persistReducer, compose);
const persistor = persistStore(store);

const exportss = { store, persistor };

export default exportss;