import { combineReducers } from "redux";
import ProductReducers from "./reducers-products";
const allReducers=combineReducers({
    products: ProductReducers
});

export default allReducers;