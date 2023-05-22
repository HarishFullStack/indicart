import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsContext, ProductsProvider } from "./context/ProductsContext";
import { CartProvider, CartContext } from "./context/CartContext";
import { WishlistProvider, WishlistContext } from "./context/WishlistContext";
import { AuthProvider, AuthContext } from "./context/AuthContext";

// Call make Server
makeServer();

export {AuthContext, ProductsContext, CartContext, WishlistContext};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <WishlistProvider>
            <Router>
              <App />
            </Router>
          </WishlistProvider>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  </React.StrictMode>,
);
