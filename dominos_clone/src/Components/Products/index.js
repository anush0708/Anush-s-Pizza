import React from 'react'
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
                                <ProductDesc>{product.desc} </ProductDesc>
                                <ProductPrice>{product.price} </ProductPrice>
                                <ProductButton onClick={e=>updateCart(product)} >Add to Cart </ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}

            </ProductWrapper>
        </ProdcutsContainer>
    )
}

export default Prodcuts
