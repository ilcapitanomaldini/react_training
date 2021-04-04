import React from "react";
import './Navbar.css';
import {Link} from "react-router-dom";

export const Navbar=(props)=>{
    const personName = "Me";
    return (
       <div className="navbar">
           <h1>
               Menus
           </h1>
           <div className="links">
               <Link to="/">Home</Link>
               <Link to="/create">Add Product</Link>
               <Link to="/products/1">Product Details</Link>
                {/*<a href="/">Home</a>
                <a href="/create">Add Product</a>*/}
           </div>
       </div>
    );
}