import { createContext, useState } from "react";

export const IndicartContext = createContext();

export function IndicartProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("encodedToken") !== null );
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);
    const [user, setUser] = useState({});

    return(
        <IndicartContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser, cartCount, wishlistCount, setCartCount, setWishlistCount}}>
            {children}
        </IndicartContext.Provider>
    )
}