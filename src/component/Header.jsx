import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { ProductsContext } from "../context/ProductsContext";

export function Header(){
  const navigate = useNavigate();
  const location = useLocation();
  const {cartCount} = useContext(CartContext);
  const {wishlistCount} = useContext(WishlistContext);
  const {state, dispatch} = useContext(ProductsContext);
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

    return(
        <nav className="navbar navbar-expand-lg shadow">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand"><img src="https://res.cloudinary.com/dkkmc7pub/image/upload/v1684427467/indicart/indicart-logo_eb6gg0.png" alt="IndiCart" height="40"/></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {location.pathname.includes("products") && <div className="search-box"><input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => dispatch({ type: "SEARCH", value: event.target.value})}/></div>}
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
    )
}