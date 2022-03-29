import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./redux/store/index";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import Container from "@mui/material/Container";

const { persistor, store } = Store;

persistor.purge();

ReactDOM.render(
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Container maxWidth="L">
            <App />
          </Container>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>,
  document.getElementById("root")
);
