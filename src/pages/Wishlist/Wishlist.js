import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
import { IndicartContext } from "../../context/IndicartContext";
import { useContext } from "react";

export function Wishlist(){

    const navigate = useNavigate();

    const {setWishlistCount} = useContext(IndicartContext);
    const {wishlist, removeFromWishlist} = useContext(WishlistContext);

    const handleRemoveFromWishlist = async (id) => {
        try{
            const response = await fetch(`/api/user/cart/${id}`,{
                method: "DELETE",
                headers: {"authorization": localStorage.getItem("encodedToken")}
            })

            const res = await response.json();
            console.log(res);
            setWishlistCount(res.cart.length);
            removeFromWishlist(id);
        } catch(error){
            console.log(error);
        }
    }

    return (
        <div style={{padding: "20px"}}>
            <p className="font-wt-semibold text-center">MY WISHLIST</p>
            <div className="product-container" style={{display: "grid"}}>{ wishlist.map((product) => {
                return (<div className="card product-card" key={product._id}>
                            <img src={product.img} className="card-img-top product-img" alt={product.title} onClick={() => {navigate(`/product/${product._id}`)}}></img>
                            <div className="card-body">
                                <div className="product-title">{product.title}</div>
                                <div className="product-price-container">
                                    <p className="product-price">&#x20b9;{product.price}</p>
                                    <p className="original-price">&#x20b9;{product.mrp}</p>
                                    <p className="product-discount">{Math.round(((product.mrp-product.price)/product.mrp)*100)}% OFF</p>
                                </div>
                                <div className="product-footer"><button className="btn btn-primary"><i className="fas fa-shopping-cart"></i> <b>Add To Cart</b></button></div>
                            </div>
                        </div>)
                })
            }</div>
        </div>
    )
}