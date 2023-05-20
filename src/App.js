import "./App.css";
import {Routes, Route, NavLink, useNavigate} from "react-router-dom";

import Mockman from "mockman-js";
import {Home} from "./pages/Home/Home";
import {Products} from "./pages/Products/Products";
import {Product} from "./pages/Product/Product";
import {Cart} from "./pages/Cart/Cart";
import {Wishlist} from "./pages/Wishlist/Wishlist";
import {Login} from "./pages/Login/Login";
import {SignUp} from "./pages/SignUp/SignUp";
import { useContext, useState } from "react";
import { IndicartContext } from "./context/IndicartContext";
import { Profile } from "./pages/Profile/profile";

function App() {
  const navigate = useNavigate();
  const {isLoggedIn, setIsLoggedIn, cartCount, wishlistCount} = useContext(IndicartContext);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg shadow">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand"><img src="https://res.cloudinary.com/dkkmc7pub/image/upload/v1684427467/indicart/indicart-logo_eb6gg0.png" alt="IndiCart" height="40"/></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="nav ">
              <li className="nav-item">
                <NavLink to="/products" className="nav-link active"><b>Explore</b></NavLink>
              </li>
              {!isLoggedIn && <button className="btn btn-primary" type="submit" onClick={() => navigate("/login")}>Login</button>}
              {isLoggedIn && <li className="nav-item">
                <NavLink to="/profile/details" className="nav-link active"><i className="fa fa-user fa-2x" aria-hidden="true" size="lg"></i></NavLink>
              </li>}
              {isLoggedIn && <li className="nav-item">
                <NavLink to="/wishlist" className="nav-link active"><i className="fa fa-heart fa-2x" aria-hidden="true" size="lg"></i>
                  {wishlistCount > 0  && <span className="position-absolute translate-middle badge rounded-pill bg-danger">{wishlistCount}</span>}
                </NavLink>
              </li>}
              
              {isLoggedIn && <li className="nav-item">
                <NavLink to="/cart" className="nav-link active position-relative"><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                  {cartCount > 0  && <span className="position-absolute translate-middle badge rounded-pill bg-danger">{cartCount}</span>}
                </NavLink>
                
              </li>}
              </ul>

          </div>
        </div>
      </nav>

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
