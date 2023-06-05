import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router";
import { AddressContext } from "../../context/AddressContext";
import './Checkout.css';
import { useEffect } from "react";
import { useState } from "react";

export function Checkout(){
    const navigate = useNavigate();

    const {cart, setCartCount, changeItemQuantity, removeFromCart} = useContext(CartContext);
    const {addresses, addAddress, updateAddress, deleteAddress, showAddressModal, setShowAddressModal} = useContext(AddressContext);

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [addressSelected, setAddressesSelected] = useState(""); 

    useEffect(() => {
        handleInitialLoad();
    }, []);

    const handleInitialLoad = () => {
        const price = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setPrice(price);
        setDiscount(price > 1000 ? price * 0.25 : price * 0.1);
    }

    return(
        <main className="cart-main">
            <div className="cart-main-container w-100">
                <div className="checkout-container" style={{display: "grid"}}> 
                    <h2>Select Address For Delivery</h2>
                    {addresses.map((address) => {
                        return(
                            <div className="card">
                                <div className="card-body">
                                    <div className="individual-address">
                                        <input type="radio" id={address.id} name="address" value={address.id} onChange={(event) => setAddressesSelected(event.target.value)}/>
                                        <label htmlFor={address.id}>
                                            <h2 className="card-title">{address.name}</h2>
                                            <p><i>{address.address}, {address.city}, {address.pincode}, {address.state}</i></p>
                                            <p>Mobile: {address.mobile}</p>
                                        </label>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        )
                    })
                    }
                    <div><button className="btn btn-success w-25 float-end" onClick={() => navigate('/profile/address')}>Add Address</button></div>
                </div>
                <div className="card cart_mngmt-price-details">
                    <div className="card-body card-container cart_mngmt-price-card brd-rd-semi-sq">
                        <div className="mngmt_cart-price-header">
                            <p className="font-wt-semibold">ORDER SUMMARY</p>
                        </div>
                        <hr className="hr"/>
                            {/* {cart.map(item => {
                                return(
                                    <div key={item._id} className="mngmt_cart-price-item">
                                        <p>{item.title} ({item.quantity})</p><p>₹ {item.quantity * item.price}</p>   
                                    </div>
                                )
                            })} */}
                            <div className="mngmt_cart-price-item">
                                <p className="">Price: ({cart.reduce((acc, item) => acc + (item.quantity), 0)} items)</p>
                                <p className="">₹ {price.toFixed(2)}</p>
                            </div>
                            <div className="mngmt_cart-price-item">
                                <p className="">Discount: </p>
                                <p className="">(-)₹ {discount.toFixed(2)}</p>
                            </div>
                            <div className="mngmt_cart-price-item">
                                <p className="">Delivery Charges: </p>
                                <p className="text-success">FREE</p>
                            </div>
                        <hr className="hr"/>

                           <div className="mngmt_cart-price-item">
                            <p className="font-wt-semibold">Total price:</p>
                            <p className="font-wt-semibold">₹ {(price-discount).toFixed(2)}</p>
                        </div>
                        <button className="btn btn-primary background-primary brd-rd-semi-sq text-align-center" disabled={addressSelected === ""}>PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </main>
    )
}