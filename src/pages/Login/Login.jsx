import { NavLink, json, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { AuthContext } from "../../context/AuthContext";

export function Login(){

    const navigate = useNavigate();
    const {setIsLoggedIn, setUser} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (email, password) => {
        const creds = {email, password};
        const response = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify(creds)
        });
        const res = await response.json();
        localStorage.setItem("encodedToken", res.encodedToken);
        localStorage.setItem("user", JSON.stringify(res.foundUser));

        setIsLoggedIn(true);
        setUser(res.foundUser);
        navigate("/");
    }

    return (
        <div className="login-container">
            <div className="card login-card">
                <div className="card-body">
                    <div className="sign-in-header"><h3 className="font-bold">Sign In</h3></div>
                    <div className="input-container p-2">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" className="form-control text-input"  id="email" onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="input-container p-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control text-input" id="password" onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <div className="input-container p-2">
                        <button className="btn btn-primary" disabled={email === "" || password === "" } onClick={() => handleLogin(email, password)}>Login</button>
                        <button className="btn btn-primary btn-login-guest" onClick={() => handleLogin("adarshbalika@gmail.com", "adarshbalika")}>Login as Guest</button>
                    </div>
                    <div className="p-2">
                        <label>Don't have an account?</label> <NavLink to="/signup">sign up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}