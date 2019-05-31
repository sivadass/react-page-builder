import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { StoreProvider } from "./store";
import App from "./app";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
