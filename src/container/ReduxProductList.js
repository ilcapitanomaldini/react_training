import React from "react";
import {useState} from 'react';
import { connect } from "react-redux";
import {Link} from "react-router-dom";

const ReduxProductList=(props)=>{
    const products = props.products;
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

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

export default connect(mapStateToProps)(ReduxProductList);