import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

export function Cart(){
    
    const {cart, setCartCount, changeItemQuantity, removeFromCart} = useContext(CartContext);
    const {wishlist, setWishlistCount, addToWishlist, removeFromWishlist} = useContext(WishlistContext);
    
    const handleRemoveFromCart = async (id) => {
        try{
            const response = await fetch(`/api/user/cart/${id}`,{
                method: "DELETE",
                headers: {"authorization": localStorage.getItem("encodedToken")}
            })

            const res = await response.json();
            removeFromCart(id);
        } catch(error){
            console.log(error);
        }
    }

    const handleAddToWishlist = async (product) => {
        try{
            const response = await fetch("/api/user/wishlist",{
                method: "POST",
                body: JSON.stringify(product),
                headers: {"authorization": localStorage.getItem("encodedToken")}
            })

            const res = await response.json();
            addToWishlist(product);
        } catch(error){
            console.log(error);
        }
    }

    const handleRemoveFromWishlist = async (id) => {
        try{
            const response = await fetch(`/api/user/wishlist/${id}`,{
                method: "DELETE",
                headers: {"authorization": localStorage.getItem("encodedToken")}
            })

            const res = await response.json();
            removeFromWishlist(id);
        } catch(error){
            console.log(error);
        }
    }

    const handleChangeQuantity = (id, quantity) => {
        if(quantity > 0){
            changeItemQuantity(id, quantity);
        }
    }

    // const handleIncreamentQuantity = (id) => {
    //     changeItemQuantity(id);
    // }

    return (
        <main className="cart-main">
                <p className="font-wt-semibold text-center">MY CART({cart.length})</p>
            <div className="cart-main-container">
                <div className="cart-container" style={{display: "grid"}}> 
                    {cart.map((item) => {
                        return (<div className="card cart-product-card" key={item._id}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item.img} className="img-fluid rounded-start" alt={item.title}/>
                                        </div>
                                        <div className="cart-product-content col-md-8">
                                            <div className="card-body">
                                                <p className="cart-card-item font-wt-semibold">{item.title}</p>

                                                <div className="cart-price-container">
                                                    <p className="cart-card-item font-wt-semibold">&#x20b9;{item.price}</p>
                                                    <p className="cart-card-item text-grey"><del>&#x20b9;{item.mrp}</del></p>
                                                </div>
                                                <div>
                                                    <p className="cart-card-item font-wt-semibold text-grey">{Math.round(((item.mrp-item.price)/item.mrp)*100)}% OFF</p>
                                                </div>
                                                <div className="cart_mngmt-card-item">
                                                    <p>Quantity:</p>
                                                    <p role="button" className="text-secondary-color" style={{cursor: "pointer"}} onClick={() => handleChangeQuantity(item._id, item.quantity - 1)}><i className="fas fa-minus-circle"></i></p>
                                                    <p className="cart-quantity-number">{item.quantity}</p>
                                                    <p className="text-secondary-color" style={{cursor: "pointer"}} onClick={() => handleChangeQuantity(item._id, item.quantity + 1)}><i className="fas fa-plus-circle"></i></p>
                                                </div>
                                                <div className="product-footer">
                                                    <button type="button" className="btn btn-outline-primary" onClick={() => wishlist.find((wish) => wish._id === item._id) ? handleRemoveFromWishlist(item._id) : handleAddToWishlist(item)}><i className="fas fa-heart"></i> <b>{wishlist.find((item) => item._id === item._id) ? "Remove From Wishlist" : "Add To Wishlist"}</b></button>
                                                    <button className="btn btn-danger mt-2" onClick={() => handleRemoveFromCart(item._id)}><i className="fas fa-shopping-cart"></i> <b>Remove From Cart</b></button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                    )}
                    
                </div>
                {cart.length > 0 && <div className="card cart_mngmt-price-details">
                    <div className="card-body card-container cart_mngmt-price-card brd-rd-semi-sq">
                        <div className="mngmt_cart-price-header">
                            <p className="font-wt-semibold">CART PRICE DETAILS</p>
                        </div>
                        <hr className="hr"/>
                            {cart.map(item => {
                                return(
                                    <div key={item._id} className="mngmt_cart-price-item">
                                        <p>{item.title} ({item.quantity})</p><p>₹ {item.quantity * item.price}</p>   
                                    </div>
                                )
                            })}
                           <div className="mngmt_cart-price-item">
                            <p className="font-wt-semibold">Total price:</p>
                            <p className="font-wt-semibold">₹ {cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</p>
                        </div>
                        <button className="btn btn-primary background-primary brd-rd-semi-sq text-align-center">CHECKOUT</button>
                    </div>
                </div>}
            </div>
        </main>
    )
}