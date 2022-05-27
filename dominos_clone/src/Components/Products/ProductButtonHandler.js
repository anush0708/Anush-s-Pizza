import React,{useState} from 'react'
import { ProductButton, AddedToCartButton } from './ProductElements'

const ProductButtonHandler = ({product,updateCart} ) => {
    const [counter,setCounter]= useState(0)
    

    const update=(e)=>{
        setCounter(counter+1)
        updateCart(product)

    }

    return (
        <div>
        {
        counter<1
        ?
        <ProductButton onClick={update} >Add to Cart </ProductButton>
        :(localStorage.getItem("userDetails")!==""&&localStorage.getItem("userDetails")!==undefined?<AddedToCartButton>Added to cart</AddedToCartButton>:<p>Please login to add products to cart </p>
        )
        
        }
        </div>
    )
}

export default ProductButtonHandler
