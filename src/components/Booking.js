import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Product.css"

export default function Booking(){
    let count=0;
    const navigate= useNavigate();
    const {id} = useParams();
    
    function handleSubmit(e){
        e.preventDefault();
        fetch("https://good-will-cargo-spark-production.up.railway.app/user_cargos",{
            headers: {"Authorization": `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify({count: count, cargo_ship_id: id})
        })
        .then(r=>r.json())
        .then(data=>{
            console.log(data)
            navigate("/products")
        })
    }
    
    return(
        <>
        <form className="request-button" style={{marginTop:"17rem"}} onSubmit={handleSubmit}>
            <input placeholder="No. of Containers" type="number" onChange={e=>{count=e.target.value}}/>
            <button className="send-request">Send Request</button>
        </form>
        </>
    );
}