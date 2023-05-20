import { createContext, useState } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({children}){

    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (product) => {
        setWishlist([...wishlist, product]);
    }

    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter((item) => item._id !== id));
    }

    return(
        <WishlistContext.Provider value={{wishlist, addToWishlist, removeFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}