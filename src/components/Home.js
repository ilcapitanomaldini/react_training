import React from "react";
import {useState, useEffect} from 'react';
import ReduxProductList from "../container/ReduxProductList";
import { Navbar } from "../Navbar";
import {ProductList} from './ProductList';

export const Home=(props)=>{
    
    const personName = "Me";
    const [name, setName] = useState("Me");
    /*const [products, setProducts] = useState([
        {id: 1, name: 'RAM', price: 2000, quantity: 3, image: 'RAM.jpg'},
        {id: 2, name: 'GPU', price: 30000, quantity: 3, image: 'RAM.jpg'}, 
        {id: 3, name: 'Heatsink', price: 500, quantity: 3, image: 'RAM.jpg'}
    ]);*/

    const handleClick=()=>{
        alert("Hey there!");
        setName("Guest");
        console.log("click handled");
    }
    const handleClickArgs=(name,e)=>{
        alert("Hey there "+name+" , "+e.target);
        console.log("click handled");
    }

    const [products, setProducts] = useState(null); 

    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products')
    //         .then((res)=>{return res.json()})
    //         .then((data)=>{setProducts(data);})
    // },[]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/")
            .then(
                    (res)=>{return res.json()}
                )
            .then((data)=>
            {
                setProducts(data);  
            })
    },[]);

    return (
       <div className="home">
           <h2>
               Home Page
           </h2>
           <button onClick={handleClick}>Clicker</button>
           <p>{name}</p>
           {/*products.map((product)=>(
               <div className="product-info" key={product.id}>
                   <h3>{product.name}</h3>
                   <p>Quantity: {product.quantity}</p>
                   <button>Delete?</button>
                   <br/>
               </div>
           ))*/}
           {//products && (<ProductList products={products}></ProductList>)
           }
           {products && (<ReduxProductList products={products}></ReduxProductList>)}
           {/*<button onClick={(e)=>{handleClickArgs(personName,e)}}>Why argue?</button>
           <p>
               Name: {personName}
            </p>*/}
       </div>
    );
}