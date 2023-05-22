import "./App.css";
import {Routes, Route, NavLink, useNavigate, useLocation} from "react-router-dom";

import Mockman from "mockman-js";
import {Home} from "./pages/Home/Home";
import {Products} from "./pages/Products/Products";
import {Product} from "./pages/Product/Product";
import {Cart} from "./pages/Cart/Cart";
import {Wishlist} from "./pages/Wishlist/Wishlist";
import {Login} from "./pages/Login/Login";
import {SignUp} from "./pages/SignUp/SignUp";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "./context/ProductsContext";
import { Profile } from "./pages/Profile/profile";
import { WishlistContext } from "./context/WishlistContext";
import { CartContext } from "./context/CartContext";
import { AuthContext } from "./context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "./component/Header";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:category" element={<Products/>}></Route>
        <Route path="/product/:id" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/profile/details" element={<Profile/>}/>
        <Route path="/mockman" element={<Mockman/>}/>
      </Routes>
    </div>
  );
}

export default App;
