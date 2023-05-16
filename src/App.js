import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom';
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
      <NavLink to="/">Home</NavLink> || 
      <NavLink to="/products">Products</NavLink> || 
      <NavLink to="/cart">Cart</NavLink> || 
      <NavLink to="/wishlist">Wishlist</NavLink> || 
      <NavLink to="/login">Login</NavLink> || 
      <NavLink to="/signup">SignUp</NavLink>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/product/:id" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>

     
    </div>
  );
}

export default App;
