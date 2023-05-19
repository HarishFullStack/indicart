import { useNavigate } from "react-router-dom";

export function Wishlist(){

    const navigate = useNavigate();

    const wishlist = [
        {
          _id: "f82bd46c-8855-4a94-9e1a-321686794eb8",
          img: "https://res.cloudinary.com/dkkmc7pub/image/upload/v1684487140/indicart/9781472965882_cjb4hj.jpg",
          title: "You Can WIN",
          author: "Shiv Khera",
          price: "5000",
          mrp: "7000",
          categoryName: "non-fiction",
          reviews: "2900",
          availability: "In Stock",
          deliveryIn: "9",
          description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
          {
          _id: "29b4abc0-da8d-4330-94dd-ec415dabedc7",
          img: "https://res.cloudinary.com/dkkmc7pub/image/upload/v1684488790/indicart/61y04z8SKEL._SX349_BO1_204_203_200__pa9vsq.jpg",
          title: "Think and Grow Rich",
          author: "Shiv Khera",
          price: "1000",
          mrp: "1050",
          categoryName: "fiction",
          reviews: "589",
          availability: "In Stock",
          deliveryIn: "9",
          description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      
        }, 
        {
          _id: "1a4ff52d-bfe5-43d9-932b-4e5b8a3a85a0",
          img: "https://res.cloudinary.com/dkkmc7pub/image/upload/v1684488837/indicart/912-IVfwS-L_ihisbd.jpg",
          title: "The Time Machine",
          author: "H. G. Wells",
          price: "99",
          mrp: "150",
          categoryName: "fiction",
          reviews: "258",
          availability: "In Stock",
          deliveryIn: "9",
          description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        }]

    return (
        <div style={{padding: "20px"}}>
            <p className="font-wt-semibold text-center">MY WISHLIST</p>
            <div className="product-container" style={{display: "grid"}}>{ wishlist.map((product) => {
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
    )
}