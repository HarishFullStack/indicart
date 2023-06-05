import { useContext } from "react";
import { useNavigate } from "react-router";

import "./Profile.css";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";

export function Profile(){
    const navigate = useNavigate();
    const {setIsLoggedIn, user} = useContext(AuthContext);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("encodedToken");
        localStorage.removeItem("user");
        navigate("/");
    }

    return(
        <div className="profile-card">
            <ul className="nav nav-tabs profile-card-nav">
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/profile/details">Profile Details</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/profile/address">Addresses</NavLink>
                </li>
            </ul>
            <div className="profile-card-content">
                <div><span className="text-xl text-grey d-inline">Name: </span><span className="text-xl">{user.firstName} {user.lastName}</span></div>
                <div><span className="text-xl text-grey d-inline">Email: </span><span className="text-xl">{user.email}</span></div>
            
                <div><button className="btn btn-danger w-25 float-end" onClick={handleLogout}>Logout</button></div>
            </div>
        </div>
    )
}