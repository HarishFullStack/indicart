import jwt from "jwt-decode";
import { useContext } from "react";
import { IndicartContext } from "../../context/IndicartContext";
import { useNavigate } from "react-router";

export function Profile(){
    const navigate = useNavigate();
    const {setIsLoggedIn} = useContext(IndicartContext);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("encodedToken");
        navigate("/");
    }

    return(
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    )
}