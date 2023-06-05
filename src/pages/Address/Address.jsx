import { Fragment, useContext, useReducer, useState } from "react";
import { AddressContext } from "../../context/AddressContext";
import { NavLink } from "react-router-dom";
import "./Address.css";
import {Modal, Button} from 'react-bootstrap';
import {states} from '../../assets/states';
import { v4 as uuid } from "uuid";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Address(){
    
    const {addresses, addAddress, updateAddress, deleteAddress, showAddressModal, setShowAddressModal} = useContext(AddressContext);
    const handleClose = () => setShowAddressModal(false);

    const reducer = (state, action) => {
        switch(action.type){
            case "NAME":
                return {...state, name: action.value}

            case "MOBILE":
                return {...state, mobile: action.value}

            case "PINCODE":
                return {...state, pincode: action.value}

            case "CITY":
                return {...state, city: action.value}

            case "ADDRESS":
                return {...state, address: action.value}

            case "ALTERNATENO.":
                return {...state, alternateMobile: action.value}

            case "STATE":
                return {...state, state: action.value === "select state" ? "" : action.value}

            case "CLEAR":
                return {
                    id: "",
                    name: "",
                    mobile:"",
                    pincode:"",
                    city:"",
                    address:"",
                    alternateMobile:"",
                    state:""}

            case "SETSTATE":
                return {
                    id: action.value.id,
                    name: action.value.name,
                    mobile: action.value.mobile,
                    pincode: action.value.pincode,
                    city: action.value.city,
                    address: action.value.address,
                    alternateMobile: action.value.alternateMobile,
                    state: action.value.state}

            default:
            
            return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        id: "",
        name: "",
        mobile:"",
        pincode:"",
        city:"",
        address:"",
        alternateMobile:"",
        state:""
    })

    const handleShowAddress = () => {
        setShowAddressModal(true);
    }

    const handleAddAddress = () => {
        if(state.id){
            updateAddress(state);
            toast.success('Address Updated', {position: toast.POSITION.BOTTOM_RIGHT});
        }else{
            addAddress({...state, id: uuid()});
            toast.success('Address Added', {position: toast.POSITION.BOTTOM_RIGHT});
        }

        dispatch({type: "CLEAR"});
        handleClose();
    }

    const handleAddressDelete = (id) => {
        deleteAddress(id);
        toast.warning('Address Deleted', {position: toast.POSITION.BOTTOM_RIGHT});
    }

    const handleAddressEdit = (id) => {
        dispatch({type: "SETSTATE", value: addresses.find((x) => x.id === id)});
        setShowAddressModal(true);
    }

    return(
        <Fragment>
            <Modal show={showAddressModal} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add Address Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row pb-4">
                        <div className="col-md-6">
                            <input type="text" className="form-control col-md-6"  id="name" placeholder="name" value={state.name} onChange={(event) => dispatch({type: "NAME", value: event.target.value})}/>
                        </div>
                        <div className="col-md-6">
                            <input type="number" className="form-control"  id="mobile"  placeholder="mobile no."  value={state.mobile} max="9999999999" onChange={(event) => dispatch({type: "MOBILE", value: event.target.value})}/>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col-md-6">
                            <input type="number" className="form-control"  id="pincode"  placeholder="pincode"  value={state.pincode} onChange={(event) => dispatch({type: "PINCODE", value: event.target.value})}/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control"  id="city"  placeholder="city" value={state.city} onChange={(event) => dispatch({type: "CITY", value: event.target.value})}/>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col-md-12">
                            <textarea rows="5" className="form-control" id="address"  placeholder="address" value={state.address}  onChange={(event) => dispatch({type: "ADDRESS", value: event.target.value})}/>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col-md-6">
                            <input type="number" className="form-control"  id="alternateMobile"  placeholder="alternate ph(optional)" max="9999999999"  value={state.alternateMobile}  onChange={(event) => dispatch({type: "ALTERNATENO.", value: event.target.value})}/>
                        </div>
                        <div className="col-md-6">
                            <select className="form-control"  value={state.state}  onChange={(event) => dispatch({type: "STATE", value: event.target.value})}>
                                <option selected>select state</option>
                                {
                                    states.map((state) => {
                                        return(
                                            <option value={state.name}>{state.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                    <button type="button" className="btn btn-primary" disabled={state.name === "" || state.mobile === "" || state.pincode === "" || state.city === "" || state.address === "" || state.state === ""}  onClick={handleAddAddress}>{ state.id ? 'Update' : 'Add'}</button>
                </Modal.Footer>
            </Modal>
            <div className="profile-card">
                <ul className="nav nav-tabs profile-card-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile/details">Profile Details</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/profile/address">Addresses</NavLink>
                    </li>
                </ul>
                <div className="profile-card-content">
                    {addresses.map(address => {
                        return(
                            <div className="address-card" key = {address.id}>
                                <div className="text-xl">{address.name}</div>
                                <div className="mt-2"><div className="d-inline"><b>{address.mobile}</b></div><div className="d-inline ms-4"><b>{address.alternateMobile}</b></div></div>
                                <div className="mt-2">{address.address}</div>
                                <div className="mt-2"><b>{address.pincode}</b></div>
                                <div className="mt-2"><div className="d-inline">{address.city}</div><div className="d-inline ms-4">{address.state}</div></div>
                                <div className="mt-2"><div className="d-inline"><button className="col-md-4 btn btn-primary"  onClick={() => handleAddressEdit(address.id)}>Edit</button>
                                    <button className="col-md-4 btn btn-danger mx-2" onClick={() => handleAddressDelete(address.id)}>Delete</button></div>
                                </div>
                            </div>
                        )
                    })}
                
                    <div><button className="btn btn-success w-25 float-end" onClick={handleShowAddress}>Add Address</button></div>
                </div>
            </div>
        </Fragment>
    )
}
