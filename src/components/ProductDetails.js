import React from "react";
import {useState} from 'react';
import {useParams} from "react-router-dom";

export const ProductDetails=(props)=>{
    //const products = props.products;
    const {id}=useParams();
    return (
       <div>
           <h1>Details for {id}</h1>
       </div>
    );
}