import React from "react";
import {useState} from 'react';
import {Link} from "react-router-dom";

export const ProductList=(props)=>{
    const products = props.products;
    /*const personName = "Me";
    const [name, setName] = useState("Me");
    const [products, setProducts] = useState([
        {id: 1, name: 'RAM', price: 2000, quantity: 3, image: 'RAM.jpg'},
        {id: 2, name: 'GPU', price: 30000, quantity: 3, image: 'RAM.jpg'}, 
        {id: 3, name: 'Heatsink', price: 500, quantity: 3, image: 'RAM.jpg'}
    ]);*/
    return (
       <div>
           {products.map((product)=>(
               <div className="product-info" key={product.id}>
                   <Link to={`/products/${product.id}`}>
                   <h3>{product.title}</h3>
                   <p>Quantity: {product.price}</p>
                   <img src={product.image}/>
                   </Link>
                   <button>Delete?</button>
                   <br/>
               </div>
           ))}
       </div>
    );
}