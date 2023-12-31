import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store.ts";
import { FormContextProvider } from "./context/FormContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </Provider>
  </BrowserRouter>
);
