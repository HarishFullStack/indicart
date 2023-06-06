import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./Product.css";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

export function Product(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [product, setProduct] = useState();
    const {cart, setCartCount, addToCart} = useContext(CartContext);
    const {wishlist, setWishlistCount, addToWishlist, removeFromWishlist} = useContext(WishlistContext);


    const getProductDetails = async () => {
        const response = await fetch(`/api/products/${id}`);
        const res = await response.json();
        setProduct(res.product);
    }

    useEffect(()=>{
        getProductDetails();
    }, [])

    const handleAddToCart = async (product) => {
        try{
            const response = await fetch("/api/user/cart",{
                method: "POST",
                body: JSON.stringify(product),
                headers: {"authorization": localStorage.getItem("encodedToken")}
            })

            const res = await response.json();
            addToCart(product);
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
    
    return (product && <div className="single-product-container">
                <div className="card mb-3 p-3 single-product-card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={product.img} className="img-fluid rounded-start" alt={product.title}/>
                        </div>
                        <div className="single-product-content col-md-8">
                            <div className="card-body">
                                <h2 className="card-title text-xl font-wt-semibold">{product.title}</h2>
                                <small>{product.reviews} reviews</small>

                                <div className="product-price-container">
                                    <p className="product-price text-xl font-wt-semibold">&#x20b9;{product.price}</p>
                                    <p className="original-price text-xl font-wt-semibold">&#x20b9;{product.mrp}</p>
                                    <p className="product-discount text-xl font-wt-semibold">{Math.round(((product.mrp-product.price)/product.mrp)*100)}% OFF</p>
                                </div>
                                <hr/>
                                <p><b>Availability: </b>{product.availability}</p>
                                <p><b>Description: </b>{product.description}</p>
                                <p><b>Delivery: </b>in {product.deliveryIn} days</p>

                                <div className="product-footer">
                                    <button type="button" className="btn btn-outline-primary" onClick={() => wishlist.find((item) => item._id === product._id) ? handleRemoveFromWishlist(product._id) : handleAddToWishlist(product)}><i className="fas fa-heart"></i> <b>{wishlist.find((item) => item._id === product._id) ? "Remove From Wishlist" : "Add To Wishlist"}</b></button>

                                    <button className={`btn btn-primary mt-2 ${cart.find((item) => item._id === product._id) ? "btn-success" : ""}`} onClick={() => cart.find((item) => item._id === product._id) ? navigate("/cart") : handleAddToCart(product)}><i className="fas fa-shopping-cart"></i> <b>{cart.find((item) => item._id === product._id) ? "Go To Cart" : "Add To Cart"}</b></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}