import React from "react";
import {useState} from 'react';

export const Create=(props)=>{
    //const products = props.products;
    const [product, setProduct]=useState({
        description:"", title: "", image:"", price: "", category: ""
    });
    
    const set=(title)=>{
        return ({target:{value}})=>{
            setProduct((oldValues)=>({...oldValues,[title]:value}));
        };
    }

    const saveFormData=async()=> {
        const response=await fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(product)
        });
        if (response.status!=200) {
            throw new Error("Request failed");
        }
    }

    const onSubmit= async (event)=>{
        event.preventDefault();
        try {
            await saveFormData();
            alert("Product Added");
            setProduct({id:"", title: "", image:"", price: ""});
        }
        catch(e){
            alert(`Product creation failed: ${e.message}`);
        }
    }
    
    return (
       <div>
           <h1>Add Product</h1>
           <form onSubmit={onSubmit}>
            <label>Description: </label>
            <input value={product.description} onChange={set("description")}></input>
            <br/>
            <label>Name: </label>
            <input value={product.name} onChange={set("name")}></input>
            <br/>
            <label>Picture: </label>
            <input value={product.image} onChange={set("image")}></input>
            <br/>
            <label>Price: </label>
            <input value={product.price} onChange={set("price")}></input>
            <br/>
            <label>Category: </label>
            <input value={product.category} onChange={set("category")}></input>
            <br/>
            <button type="submit">Submit</button>
           </form>
           
       </div>
    );
}