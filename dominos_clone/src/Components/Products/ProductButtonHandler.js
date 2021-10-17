import React,{useState} from 'react'

import { ProductButton,CounterButton,CounterButtonWrapper, AddedToCartButton } from './ProductElements'

const ProductButtonHandler = ({product,updateCart} ) => {
    const [counter,setCounter]= useState(0)
    

    const update=(e)=>{
        setCounter(counter+1)
        updateCart(product)

    }
    const decrement=()=>{
        setCounter(counter-1)
    }
    const increment=()=>{
        setCounter(counter+1)
    }
    console.log(counter>0)
    return (
        <div>
        {
        counter<1
        ?
        <ProductButton onClick={update} >Add to Cart </ProductButton>
        :
        <AddedToCartButton>Added to cart</AddedToCartButton>
        }
        </div>
    )
}

export default ProductButtonHandler
