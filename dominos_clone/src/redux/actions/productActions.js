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
export const setMail=(mail)=>{
    const {MAIL}=ActionTypes
    return {
        type:MAIL,
        data:mail
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

export const loginToggle=()=>{
    const {LOGIN_TOGGLE}=ActionTypes
    return{
        type:LOGIN_TOGGLE,
        data:"",
    }
}
export const signUpToggle=()=>{
    const {SIGN_UP_TOGGLE}=ActionTypes
    return{
        type:SIGN_UP_TOGGLE,
        data:"",
    }
}
export const deleteCartProduct=(id)=>{
    const {DELETE_CART_PRODUCT}=ActionTypes
    return{
        type:DELETE_CART_PRODUCT,
        data:id
    }

}
export const incrementCartProduct=(id)=>{
    const {INCREMENT_CART_PRODUCT}=ActionTypes
    return {
        type:INCREMENT_CART_PRODUCT,
        data:id
    }
}
export const decrementCartProduct=(id)=>{
    const {DECREMENT_CART_PRODUCT}=ActionTypes
    return {
        type:DECREMENT_CART_PRODUCT,
        data:id
    }
}