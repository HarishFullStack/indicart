import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./Products.css";
import { ProductsContext } from "../../context/ProductsContext";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Products(){
    const {category} = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const {cart, addToCart} = useContext(CartContext);
    const {wishlist, addToWishlist, removeFromWishlist} = useContext(WishlistContext);
    const {state, dispatch, products, setProducts} = useContext(ProductsContext);
    const categories = useRef(false);


    //const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try{
            const response = await fetch("/api/products");
            const res = await response.json();
            //const initialProducts = category ? res.products.filter((x) => x.categoryName.toLowerCase() === category.toLowerCase()) : res.products
            setProducts(res.products);
            dispatch({type: "INITIAL", value: res.products});

            if(category){
                dispatch({type: "CLEAR"});
                dispatch({type: "CATEGORIES", checked: true, value: category});
                document.getElementById(`category-${category}`).checked = true;
            }
            setIsLoading(false);
        } catch(error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        setIsLoading(true);
        getProducts();
    },[])

    const handleAddToCart = async (product) => {
        try{
            const response = await fetch("/api/user/cart",{
                method: "POST",
                body: JSON.stringify(product),
                headers: {"authorization": localStorage.getItem("encodedToken")}
            })

            const res = await response.json();
            addToCart(product);
            toast.success('Added To Cart', {position: toast.POSITION.BOTTOM_RIGHT});
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
            toast.success('Added To Wishlist', {position: toast.POSITION.BOTTOM_RIGHT});
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
            toast.warning('Removed From Wishlist', {position: toast.POSITION.BOTTOM_RIGHT});
        } catch(error){
            console.log(error);
        }
    }

    const handleFiltersClear = () => {
        document.getElementById("category-fiction").checked = false;
        document.getElementById("category-non-fiction").checked = false;
        document.getElementById("category-horror").checked = false;

        document.getElementById("4-stars").checked = false;
        document.getElementById("3-stars").checked = false;
        document.getElementById("2-stars").checked = false;
        document.getElementById("1-stars").checked = false;

        document.getElementById("low-to-high").checked = false;
        document.getElementById("high-to-low").checked = false;
    }

    return (
    <>
    {isLoading && <div className="spinner-container">
        <div className="loading-spinner">
        </div>
    </div>}
    {!isLoading && <div style={{display: "inline-flex", width: "100%"}}>
        <div style={{width:"15%", padding: "20px", height:"auto"}}>
            <div className="p-2 d-flex ">
                <p className="font-bold ">Filters</p>
                <a href="#" className="ms-auto text-decoration-none" onClick={() => {dispatch({type: "CLEAR"}); handleFiltersClear() } }>CLEAR</a>
            </div>
            <div className="p-2">
                <div><p className="font-bold">Price</p></div>
                <div className="slider-label">
                    <p>{Math.min(...products.map(item => item.price))}</p>
                    <p>{state.price}</p>
                    <p>{Math.max(...products.map(item => item.price))}</p>
                </div>
                <div><input type="range" name="rangeInput" className="slider cursor-pointer" min={Math.min(...products.map(item => item.price))} max={Math.max(...products.map(item => item.price))} value={state.price} onChange={(event) => dispatch({ type: "PRICE", value: event.target.value })}/></div>
            </div>

            <div className="p-2">
                <div><p className="font-bold">Categories</p></div>
                <div className="filter-category">
                    <div><input type="checkbox" id="category-fiction" ref={categories} onChange={(event) => dispatch({ type: "CATEGORIES", checked: event.target.checked, value: "fiction"})}/> <label htmlFor="category-fiction">Fiction</label></div>
                    <div><input type="checkbox" id="category-non-fiction" ref={categories} onChange={(event) => dispatch({ type: "CATEGORIES", checked: event.target.checked, value: "non-fiction"})}/> <label htmlFor="category-non-fiction">Non Fiction</label></div>
                    <div><input type="checkbox" id="category-horror" ref={categories} onChange={(event) => dispatch({ type: "CATEGORIES", checked: event.target.checked, value: "horror"})}/> <label htmlFor="horror ">Horror</label></div>
                </div>
            </div>

            <div className="p-2">
                <div><p className="font-bold">Ratings</p></div>
                <div className="filter-ratings">
                    <div><input type="radio" id="4-stars" name="ratings" onChange={() => dispatch({ type: "RATINGS", value: "4"})}/> <label htmlFor="4-stars">4 stars & above</label></div>
                    <div><input type="radio" id="3-stars" name="ratings" onChange={() => dispatch({ type: "RATINGS", value: "3"})}/> <label htmlFor="3-stars">3 stars & above</label></div>
                    <div><input type="radio" id="2-stars" name="ratings" onChange={() => dispatch({ type: "RATINGS", value: "2"})}/> <label htmlFor="2-stars ">2 stars & above</label></div>
                    <div><input type="radio" id="1-stars" name="ratings" onChange={() => dispatch({ type: "RATINGS", value: "1"})}/> <label htmlFor="1-stars ">1 stars & above</label></div>
                </div>
            </div>

            <div className="p-2">
                <div><p className="font-bold">Sort By Price</p></div>
                <div className="sort-price">
                    <div><input type="radio" id="low-to-high" name="sort" onChange={() => dispatch({ type: "SORT", value: "lowToHigh"})}/> <label htmlFor="low-to-high">price - Low-to-High</label></div>
                    <div><input type="radio" id="high-to-low" name="sort" onChange={() => dispatch({ type: "SORT", value: "highToLow"})}/> <label htmlFor="high-to-low">price - High-to-Low</label></div>
                </div>
            </div>
        </div>
        <div className="vl"></div>
        <div style={{width:"85%", padding: "20px"}}>
            <p className="font-bold">Showing All Products</p>
            <div className="product-container" style={{display: "grid"}}>{state.filteredProducts && state.filteredProducts.map((product) => {
                return (<div className="card product-card" key={product._id}>
                            <div className="card-img-container cursor-pointer">
                                <img src={product.img} className="card-img-top product-img" alt={product.title} onClick={() => {navigate(`/product/${product._id}`)}}>
                                </img>
                                {/* <button className="card-img-tag-btn productlist-card-img-tag-btn-container" onClick={() => handleAddToWishlist(product)}><span className="material-icons productlist-card-img-tag-btn">favorite_border</span></button> */}
                            </div>
                            <div className="card-body">
                                <div className="product-title">{product.title}</div>
                                <div className="product-price-container">
                                    <p className="product-price">&#x20b9;{product.price}</p>
                                    <p className="original-price">&#x20b9;{product.mrp}</p>
                                    <p className="product-discount">{Math.round(((product.mrp-product.price)/product.mrp)*100)}% OFF</p>
                                </div>
                                <div className="product-footer">
                                    <button type="button" className="btn btn-outline-primary" onClick={() => wishlist.find((item) => item._id === product._id) ? handleRemoveFromWishlist(product._id) : handleAddToWishlist(product)}><i className="fas fa-heart"></i> <b>{wishlist.find((item) => item._id === product._id) ? "Remove From Wishlist" : "Add To Wishlist"}</b></button>

                                    <button className={`btn btn-primary mt-2 ${cart.find((item) => item._id === product._id) ? "btn-success" : ""}`} onClick={() => cart.find((item) => item._id === product._id) ? navigate("/cart") : handleAddToCart(product)}><i className="fas fa-shopping-cart"></i> <b>{cart.find((item) => item._id === product._id) ? "Go To Cart" : "Add To Cart"}</b></button>
                                </div>
                            </div>
                        </div>)
                })
            }</div>
        </div>
    </div>}</>)
    
}