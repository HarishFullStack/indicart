import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";

import "./Home.css";

export function Home(){
    const navigate = useNavigate();
    const[categories, setCategories] = useState([]);

    const getCategories = async () => {
        try{
            const response = await fetch("/api/categories");
            const res = await response.json();
            setCategories(res.categories);
        } catch (error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getCategories();
    },[])

    return (
        <div>
            <header className="banner-text"><h1>Books for Everyone</h1></header>
            <div className="home-banner">Book For Everyone</div>
            <div className="category-container">
                {categories.map(category => {
                    return (
                        <div className="card category-card cursor-pointer shadow p-3 mb-5 bg-body rounded" key={category._id} onClick={() => navigate(`/products/${category.categoryName}`)}>
                            <img className="card-img-top" src={category.img} alt={category.categoryName}/>
                            <div className="card-body">
                                <h2>{category.categoryName}</h2>
                                <p>{category.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}