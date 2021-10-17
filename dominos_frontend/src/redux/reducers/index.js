import { combineReducers } from "redux";
import  updateCart  from "./updateCart";
import productDetails from "./productDetails"
import setUserDetails from "./setUserDetails";
import loggedInUser from './loggedInUser'
const allreducers=combineReducers({cart:updateCart,productDetails,setUserDetails,loggedInUser,productDetails})

export default allreducers