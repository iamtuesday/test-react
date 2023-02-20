import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { FiltersProvider } from "./context/filters.context";
import { CartProvider } from "./context/cart.context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </CartProvider>
  </React.StrictMode>
);
