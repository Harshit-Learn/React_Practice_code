import React from 'react'
import {useParams , useNavigate } from "react-router-dom";

const SingleProducts = () => {
    const {id} = useParams();
 
    const navigate = useNavigate();
    const handleBack =()=>{
       navigate(-2); // -2 means 2 step back or -1 means 1 step back
    };
 


  return (
    <div>
      <h1>Single Product{id}</h1>
      <button onClick = {handleBack}>Go Back</button>
    </div>
  )
}

export default SingleProducts
