import { combineReducers } from "redux";
import  updateCart  from "./updateCart";
import productDetails from "./productDetails"
import setUserDetails from "./setUserDetails";
import loggedInUser from './loggedInUser';
import loginToggle from "./loginToggle";
const allreducers=combineReducers({cart:updateCart,productDetails,setUserDetails,loggedInUser,loginToggle})

export default allreducers