import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { IndicartContext } from "../../context/IndicartContext";

export function Login(){

    const navigate = useNavigate();
    const {setIsLoggedIn, setUser} = useContext(IndicartContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginAsGuest = async () => {
        setEmail("adarshbalika@gmail.com");
        setPassword("adarshbalika");
        await login();
    }

    const login = async () => {
        const creds = {email: "adarshbalika@gmail.com", password: "adarshbalika"};

        const response = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify(creds)
        });

        const res = await response.json();
        localStorage.setItem("encodedToken", res.encodedToken);
        console.log(res);
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
                        <input type="text" className="text-input"  id="email" value={email}/>
                    </div>
                    <div className="input-container p-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="text-input" id="password"  value={password}/>
                    </div>
                    <div className="input-container p-2">
                        <button className="btn btn-primary">Login</button>
                        <button className="btn btn-primary btn-login-guest" onClick={() => handleLoginAsGuest()}>Login as Guest</button>
                    </div>
                    <div className="p-2">
                        <label>Don't have an account?</label> <NavLink to="/signup">sign up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}