import React from 'react'
import { useState } from 'react'
import ProductButtonHandler from './ProductButtonHandler'
import ProductDescHandler from './ProductDescHandler'
import {
    ProdcutsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton
    } from './ProductElements'
const Prodcuts = ({heading,data,updateCart}) => {
   
    return (
        <ProdcutsContainer>
            <ProductsHeading>{heading} </ProductsHeading>
            <ProductWrapper>
                {data.map((product,index)=>{
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDescHandler product={product}/>
                                <ProductPrice>{product.price} </ProductPrice>
                                <ProductButtonHandler product={product} updateCart={updateCart}/>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}

            </ProductWrapper>
        </ProdcutsContainer>
    )
}

export default Prodcuts
