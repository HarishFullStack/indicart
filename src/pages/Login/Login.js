import { NavLink } from "react-router-dom";
import "./Login.css";

export function Login(){
    return (
        <div className="login-container">
            <div className="card login-card">
                <div className="card-body">
                    <div><h3 className="font-bold">Sign In</h3></div>
                    <div className="input-container p-2">
                        <label for="email">Email Address</label>
                        <input type="text" className="text-input"  id="email"/>
                    </div>
                    <div className="input-container p-2">
                        <label for="password">Password</label>
                        <input type="password" className="text-input" id="password"/>
                    </div>
                    <div className="input-container p-2">
                        <button className="btn btn-primary">Login</button>
                        <button className="btn btn-primary">Login as Guest</button>
                    </div>
                    <div className="p-2">
                        <label>Don't have an account?</label> <NavLink to="/signup">sign up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}