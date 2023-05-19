import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./Products.css";

export function Products(){
    const {category} = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try{
            console.log(category)
            const response = await fetch("/api/products");
            const res = await response.json();
            setProducts(
                category ? res.products.filter((x) => x.categoryName.toLowerCase() === category.toLowerCase()) : res.products);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getProducts();
    },[])

    return (<div style={{display: "inline-flex", width: "100%"}}>
        <div style={{width:"15%", borderRight: "3px solid black", padding: "20px", height:"auto"}}>
            <div className="p-2" style={{display: "inline-flex"}}><p className="font-bold">Filters</p><p style={{textAlign:"right"}}>CLEAR</p></div>
            <div className="p-2">
                <div><p className="font-bold">Price</p></div>
                <div className="slider-label">
                    <p>0</p>
                    <p>905</p>
                    <p>1810</p>
                </div>
                <div><input type="range" name="rangeInput" class="slider cursor-pointer" min="0" max="1810" defaultValue="1810"/></div>
            </div>

            <div className="p-2">
                <div><p className="font-bold">Categories</p></div>
                <div className="filter-category">
                    <div><input type="checkbox" id="category-fiction"/> <label for="category-fiction">Fiction</label></div>
                    <div><input type="checkbox" id="category-non-fiction"/> <label for="category-non-fiction">Non Fiction</label></div>
                    <div><input type="checkbox" id="horror"/> <label for="horror ">Horror</label></div>
                </div>
            </div>

            <div className="p-2">
                <div><p className="font-bold">Ratings</p></div>
                <div className="filter-ratings">
                    <div><input type="radio" id="4-stars" name="ratings"/> <label for="4-stars">4 stars & above</label></div>
                    <div><input type="radio" id="3-stars" name="ratings"/> <label for="3-stars">3 stars & above</label></div>
                    <div><input type="radio" id="2-stars" name="ratings"/> <label for="2-stars ">2 stars & above</label></div>
                    <div><input type="radio" id="1-stars" name="ratings"/> <label for="1-stars ">1 stars & above</label></div>
                </div>
            </div>

            <div className="p-2">
                <div><p className="font-bold">Sort By Price</p></div>
                <div className="sort-price">
                    <div><input type="radio" id="low-to-high" name="sort"/> <label for="low-to-high">price - Low-to-High</label></div>
                    <div><input type="radio" id="high-to-low" name="sort"/> <label for="high-to-low">price - High-to-Low</label></div>
                </div>
            </div>
        </div>
        <div style={{width:"85%", padding: "20px"}}>
            <p className="font-bold">Showing All Products</p>
            <div className="product-container" style={{display: "grid"}}>{ products.map((product) => {
                return (<div className="card product-card" key={product._id}>
                            <img src={product.img} class="card-img-top product-img" alt={product.title} onClick={() => {navigate(`/product/${product._id}`)}}></img>
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
    </div>)
}