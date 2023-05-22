import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){

    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (product) => {
        if(cart.find((item) => item._id === product._id)){
            setCart(cart.map((item) => ({...item, quantity: item._id === product._id && item.quantity ? ++item.quantity : 1})))
            console.log(cart.map((item) => ({...item, quantity: item._id === product._id && item.quantity ? ++item.quantity : 1})))
        } else {
            setCart([...cart, {...product, quantity: 1}]);
            setCartCount(cartCount + 1);
        }
    }

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item._id !== id));
        setCartCount(cartCount - 1);
    }

    const changeItemQuantity = (id, quantity) => {
        setCart(cart.map(item => ({...item, quantity: item._id === id ? quantity : item.quantity})));
    }

    return(
        <CartContext.Provider value={{cart, cartCount, setCartCount, addToCart, removeFromCart, changeItemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}