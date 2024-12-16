import React, { useRef } from "react";
import { addNewProduct, getAllproduct } from "../services/producService";
import { useNavigate } from "react-router-dom";

function AddComponent(){
    //su dung useref
    let idRef = useRef();
    let nameRef = useRef();
    const naviGate = useNavigate();
    const handleAddNewProduct =()=>{
        const product = {
            id: idRef.current.value,
            name: nameRef.current.value
        }
        // goi API de them moi
        addNewProduct(product);
        naviGate('/listproduct')
    }
    return (
        <>
        <input ref={idRef} placeholder="Enter ID"></input>
        <input ref={nameRef} placeholder="Enter Name"></input>
        <button onClick={handleAddNewProduct}>Save</button>
        </>
    )
}
export default AddComponent;