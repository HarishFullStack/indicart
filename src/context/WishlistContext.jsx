import { createContext, useState } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({children}){

    const [wishlist, setWishlist] = useState([]);
    const [wishlistCount, setWishlistCount] = useState(0);

    const addToWishlist = (product) => {
        setWishlist([...wishlist, product]);
        setWishlistCount(wishlistCount + 1);
    }

    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter((item) => item._id !== id));
        setWishlistCount(wishlistCount - 1);
    }

    return(
        <WishlistContext.Provider value={{wishlist, wishlistCount, setWishlistCount, addToWishlist, removeFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}