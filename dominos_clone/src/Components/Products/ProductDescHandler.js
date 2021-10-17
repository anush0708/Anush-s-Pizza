import React,{useState} from 'react'
import { ProductDesc } from './ProductElements'

const ProductDescHandler = ({product}) => {

    const [more,setMore]=useState(false)
    const toggleMore=()=>{
        setMore(!more)
    }
    return (
        <div>
               <ProductDesc more ={more}>{product.desc}        
             <button onClick={toggleMore}>{more?"less":"more"}</button>
             </ProductDesc>
        </div>
    )
}

export default ProductDescHandler
