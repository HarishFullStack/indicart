import "./App.css";
import {Routes, Route} from "react-router-dom";

import Mockman from "mockman-js";
import {Home} from "./pages/Home";
import {Products} from "./pages/Products";
import {Product} from "./pages/Product";
import {Cart} from "./pages/Cart";
import {Wishlist} from "./pages/Wishlist";
import {Login} from "./pages/Login";
import {SignUp} from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Hi</h1>}/>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
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
