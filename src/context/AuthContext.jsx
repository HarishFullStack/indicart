import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("encodedToken") !== null );

    const [user, setUser] = useState(localStorage.getItem("user"));

    return(
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}