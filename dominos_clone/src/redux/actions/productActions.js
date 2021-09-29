import { ActionTypes } from "../constants/actionTypes"
export const updateCart=(products)=>{
    const {UPDATE_CART}=ActionTypes
    return {    
        type: UPDATE_CART,
        data:products,
    }
}
export const setUser=(name)=>{
    const {USER_NAME}=ActionTypes
    return {
        type:USER_NAME,
        data:name
    }
}
export const setPassword=(password)=>{
    const {PASSWORD}=ActionTypes
    return {
        type:PASSWORD,
        data:password
    }
}
export const productDetails=(products)=>{
    const {SET_PRODUCTS}=ActionTypes
    return {
        type:SET_PRODUCTS,
        data:products,
    }
}
export const setloggedInUser=(details)=>{
    const {SET_USER}=ActionTypes

    return {
        type:SET_USER,
        data:details,
    }
}