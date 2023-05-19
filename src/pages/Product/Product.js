import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Product.css";

export function Product(){

    const {id} = useParams();
    const [product, setProduct] = useState();

    const getProductDetails = async () => {
        console.log(`id: ${id}`)
        const response = await fetch(`/api/products/${id}`);
        const res = await response.json();
        setProduct(res.product);
    }

    useEffect(()=>{
        getProductDetails();
    }, [])

    return (product && <div className="single-product-container">
                <div className="card mb-3 p-3 single-product-card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={product.img} class="img-fluid rounded-start" alt={product.title}/>
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
                                <div className="product-footer"><button className="btn btn-primary"><i className="fas fa-shopping-cart"></i> <b>Add To Cart</b></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}