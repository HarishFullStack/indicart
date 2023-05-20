import { useContext, useEffect } from "react";
import "./Cart.css";
import { IndicartContext } from "../../context/IndicartContext";
import { CartContext } from "../../context/CartContext";

export function Cart(){
    
    const {setCartCount} = useContext(IndicartContext);
    const {cart, removeFromCart} = useContext(CartContext);

    const handleRemoveFromCart = async (id) => {
        try{
            const response = await fetch(`/api/user/cart/${id}`,{
                method: "DELETE",
                headers: {"authorization": localStorage.getItem("encodedToken")}
            })

            const res = await response.json();
            console.log(res);
            setCartCount(res.cart.length);
            removeFromCart(id);
        } catch(error){
            console.log(error);
        }
    }

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
                                                    <p role="button" className="text-secondary-color" style={{cursor: "pointer"}}><i className="fas fa-minus-circle"></i></p>
                                                    <p className="cart-quantity-number">1</p><p className="text-secondary-color" style={{cursor: "pointer"}}><i className="fas fa-plus-circle"></i></p>
                                                </div>
                                                <div className="product-footer"><button className="btn btn-danger" onClick={() => handleRemoveFromCart(item._id)}><i className="fas fa-shopping-cart"></i> <b>Remove From Cart</b></button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                    )}
                    
                </div>
                <div className="card cart_mngmt-price-details">
                    <div className="card-body card-container cart_mngmt-price-card brd-rd-semi-sq">
                        <div className="mngmt_cart-price-header">
                            <p className="font-wt-semibold">CART PRICE DETAILS</p>
                        </div>
                        <hr className="hr"/>
                        <div className="mngmt_cart-price-item">
                            <p>anayna (1)</p><p>₹ 447</p>   
                        </div>
                        <div className="mngmt_cart-price-item">
                            <p>Akira (1)</p><p>₹ 998</p>
                        </div>
                        <div className="mngmt_cart-price-item">
                            <p>Varanga (1)</p><p>₹ 890</p>
                        </div>
                        <div className="mngmt_cart-price-item">
                            <p className="font-wt-semibold">Total price:</p>
                            <p className="font-wt-semibold">₹ 2335</p>
                        </div>
                        <button className="btn btn-primary background-primary brd-rd-semi-sq text-align-center">CHECKOUT</button>
                    </div>
                </div>
            </div>
        </main>
    )
}