import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const AddressContext = createContext();

export function AddressProvider({children}){
    const defaultAddress = {
        id: uuid(),
        name: "adarshbalika",
        mobile:"2719218489",
        pincode:"322583",
        city:"West Demetriusburgh",
        address:"344 Carleton Parks",
        alternateMobile:"3824273294",
        state:"West Bengal"
    }

    const [addresses, setAddresses] = useState([defaultAddress]);
    const [showAddressModal, setShowAddressModal] = useState(false);

    const addAddress = (address) => {
        setAddresses([...addresses, address]);
    }

    return (
        <AddressContext.Provider value={{addresses, addAddress, showAddressModal, setShowAddressModal}}>
            {children}
        </AddressContext.Provider>
    )
}