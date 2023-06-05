import { useContext } from "react";
import { AddressContext } from "../context/AddressContext";

export function AddressModal(){
    
    const {addAddress} = useContext(AddressContext);

    return(
        <div className="modal" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add Address Modal</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <input type="text" className="form-control text-input"  id="name" />
                        <input type="text" className="form-control text-input"  id="mobile" />
                    </div>
                    <input type="text" className="form-control text-input"  id="pincode" />
                    <input type="text" className="form-control text-input"  id="city" />
                    <input type="textarea" className="form-control text-input"  id="address" />
                    <input type="text" className="form-control text-input"  id="alternateMobile" />
                    <select className="form-control" >
                        <option disabled>select state</option>
                    </select>
                </div>
                <div className="modal-footer">
                    {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                    <button type="button" className="btn btn-primary">Add</button>
                </div>
                </div>
            </div>
    </div>
    )
}