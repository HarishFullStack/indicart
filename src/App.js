import "./App.css";
import {Routes, Route, NavLink, useNavigate} from "react-router-dom";

import Mockman from "mockman-js";
import {Home} from "./pages/Home/Home";
import {Products} from "./pages/Products";
import {Product} from "./pages/Product";
import {Cart} from "./pages/Cart";
import {Wishlist} from "./pages/Wishlist";
import {Login} from "./pages/Login/Login";
import {SignUp} from "./pages/SignUp/SignUp";

function App() {
  const navigate = useNavigate();
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
            </ul>
              <button className="btn btn-primary" type="submit" onClick={() => navigate("/login")}>Login</button>
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
        <Route path="/mockman" element={<Mockman/>}/>
      </Routes>
    </div>
  );
}

export default App;
