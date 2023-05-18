import { DialogContent } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Product(){

    const {id} = useParams();
    const [product, setProduct] = useState()

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
                <div className="card product-card" style={{margin: "auto", verticalAlign: "center"}}>
                    <div className="card-body">
                        {product.title}
                        {product.price}
                    </div>
                </div>
            </div>
        )
}