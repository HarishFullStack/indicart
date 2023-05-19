import "./Cart.css";

export function Cart(){
    
    const cart = [
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
        <main className="cart-main">
                <p className="font-wt-semibold text-center">MY CART({cart.length})</p>
            <div className="cart-main-container">
                <div className="cart-container" style={{display: "grid"}}> 
                    {cart.map((item) => {
                        return (<div className="card cart-product-card">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item.img} class="img-fluid rounded-start" alt={item.title}/>
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
                                                <div class="cart_mngmt-card-item">
                                                    <p>Quantity:</p>
                                                    <p role="button" class="text-secondary-color" style={{cursor: "pointer"}}><i class="fas fa-minus-circle"></i></p>
                                                    <p class="cart-quantity-number">1</p><p class="text-secondary-color" style={{cursor: "pointer"}}><i class="fas fa-plus-circle"></i></p>
                                                </div>
                                                <div className="product-footer"><button className="btn btn-primary"><i className="fas fa-shopping-cart"></i> <b>Remove From Cart</b></button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                    )}
                    
                </div>
                <div class="card cart_mngmt-price-details">
                    <div class="card-body card-container cart_mngmt-price-card brd-rd-semi-sq">
                        <div class="mngmt_cart-price-header">
                            <p class="font-wt-semibold">CART PRICE DETAILS</p>
                        </div>
                        <hr class="hr"/>
                        <div class="mngmt_cart-price-item">
                            <p>anayna (1)</p><p>₹ 447</p>   
                        </div>
                        <div class="mngmt_cart-price-item">
                            <p>Akira (1)</p><p>₹ 998</p>
                        </div>
                        <div class="mngmt_cart-price-item">
                            <p>Varanga (1)</p><p>₹ 890</p>
                        </div>
                        <div class="mngmt_cart-price-item">
                            <p class="font-wt-semibold">Total price:</p>
                            <p class="font-wt-semibold">₹ 2335</p>
                        </div>
                        <button class="btn btn-primary background-primary brd-rd-semi-sq text-align-center">CHECKOUT</button>
                    </div>
                </div>
            </div>
        </main>
    )
}