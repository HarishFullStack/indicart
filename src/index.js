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
import { AddressProvider, AddressContext } from "./context/AddressContext";

// Call make Server
makeServer();

export {AuthContext, ProductsContext, CartContext, WishlistContext, AddressContext};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AddressProvider>
        <ProductsProvider>
          <CartProvider>
            <WishlistProvider>
              <Router>
                <App />
              </Router>
            </WishlistProvider>
          </CartProvider>
        </ProductsProvider>
      </AddressProvider>
    </AuthProvider>
  </React.StrictMode>,
);
