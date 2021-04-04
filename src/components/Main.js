import { Component } from "react";
import RAM from './images/RAM.jpg';
export class Main extends Component {
    products = ["RAM", "GPU", "Heatsink", "Motherboard"];
    objectProducts = [{name: 'RAM', price: 2000, quantity: 3, image: 'RAM.jpg'}, {name: 'GPU', price: 30000, quantity: 3, image: 'RAM.jpg'}, {name: 'Heatsink', price: 500, quantity: 3, image: 'RAM.jpg'}];
    render() {
        return(
            <div>
                <ul>
                {this.products.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
                </ul>
                <table>
                    <tr><th>name</th><th>price</th><th>quantity</th><th>image</th></tr>
                    {this.objectProducts.map((value) => {
                    return <tr><td>{value.name}</td><td>{value.price}</td><td>{value.quantity}</td><td><img height={50} width={50} src={`C:/Users/Laptop/Downloads/Docker/React/training-app/src/components/images/${value.image}`}></img></td></tr>
                })}
                </table>
            </div>
        );
    }
}