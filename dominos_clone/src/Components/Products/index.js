import React from 'react'
import ProductButtonHandler from './ProductButtonHandler'
import ProductDescHandler from './ProductDescHandler'
import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductPrice,
    } from './ProductElements'
const Products = ({heading,data,updateCart}) => {
   
    return (
        <ProductsContainer>
            <ProductsHeading>{heading} </ProductsHeading>
            <ProductWrapper>
                {data?.map((product,index)=>{
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDescHandler product={product}/>
                                <ProductPrice>$ {product.price} </ProductPrice>
                                <ProductButtonHandler product={product} updateCart={updateCart}/>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}

            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products
