import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { IndicartContext, IndicartProvider } from "./context/IndicartContext";
import { CartProvider, CartContext } from "./context/CartContext";
import { WishlistProvider, WishlistContext } from "./context/WishlistContext";

// Call make Server
makeServer();

export {IndicartContext, CartContext, WishlistContext};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IndicartProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <App />
          </Router>
        </WishlistProvider>
      </CartProvider>
    </IndicartProvider>
  </React.StrictMode>,
);
