import { NavLink, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export function SignUp() {

    const navigate = useNavigate();

    const {setIsLoggedIn, setUser} = useContext(AuthContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordType, setPasswordType] = useState("password");

    const handleSignUpClick = async () =>{
        const creds = {email, password, firstName: name};

        const response = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(creds)
        });

        const res = await response.json();
        console.log(res.createdUser);
        localStorage.setItem("encodedToken", res.encodedToken);
        localStorage.setItem("user", res.createdUser);

        setIsLoggedIn(true);
        setUser(res.createdUser);
        navigate("/");
    }

    return (
        <div className="signup-container">
            <div className="card signup-card">
                <div className="card-body">
                    <div className="sign-up-header"><h3 className="font-bold">Sign Up</h3></div>
                    <div className="input-container p-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="text-input"  id="name" onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className="input-container p-2">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="text-input"  id="email" onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="input-container p-2">
                        <label htmlFor="password">Password</label>
                        <div className="input-group">
                            <input type={passwordType} className="form-control text-input" id="password" onChange={(event) => setPassword(event.target.value)}/>
                            <span className="input-group-text cursor-pointer" onClick={() => setPasswordType(passwordType === "password" ? "text" : "password")}>{passwordType==="password"? <i className="fa fa-eye-slash"></i> :<i className="fa fa-eye"></i>}</span> 
                        </div>
                    </div>
                    <div className="input-container p-2">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" className="text-input" id="confirm-password" onChange={(event) => setConfirmPassword(event.target.value)}/>
                    </div>
                    <div className="input-container p-2">
                        <button className="btn btn-primary" disabled={ name ==="" || email === "" || password === "" || confirmPassword === "" || password !== confirmPassword } onClick={handleSignUpClick}>Create New Account</button>
                    </div>
                    <div className="p-2">
                        Already have an account? <NavLink to="/login">sign in</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}