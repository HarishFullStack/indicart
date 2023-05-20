import { NavLink } from "react-router-dom";
import "./SignUp.css";

export function SignUp(){
    return (
        <div className="signup-container">
            <div className="card signup-card">
                <div className="card-body">
                    <div className="sign-up-header"><h3 className="font-bold">Sign Up</h3></div>
                    <div className="input-container p-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="text-input"  id="name"/>
                    </div>
                    <div className="input-container p-2">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="text-input"  id="email"/>
                    </div>
                    <div className="input-container p-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="text-input" id="password"/>
                    </div>
                    <div className="input-container p-2">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" className="text-input" id="confirm-password"/>
                    </div>
                    <div className="input-container p-2">
                        <button className="btn btn-primary">Create New Account</button>
                    </div>
                    <div className="p-2">
                        Already have an account? <NavLink to="/login">sign in</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}