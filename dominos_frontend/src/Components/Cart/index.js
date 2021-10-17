import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartService from '../../services/cartService'
import {updateCart} from '../../redux/actions/productActions'
import { CartContainer,
    CartHeading,
    CartWrap,
    CartProducts,
    ProductCard,
    ProductImg,
    ProductDetails,
    ProductName,
    ProductDesc,
    ProductPrice,
    ProductDeleteBtn,
    PriceCard,
    TotalPrice,
    Amount,
    PriceType,
ItemContent,
ItemName,
ItemPrice} from './CartElements'
const Cart = () => {
     const dispatch = useDispatch()
     if(useSelector(state => state.loggedInUser.token)!="")
        {
          cartService.getCartProducts(`bearer ${JSON.parse(window.localStorage.userDetails).token}`).then(products=>dispatch(updateCart(products)))
        }  
         
    const deleteProduct=()=>{

    }
    
    const cartElemets=useSelector(state=>state.cart)
    return (
        <CartContainer>
            <CartHeading>CART</CartHeading>
            <CartWrap>
                <CartProducts>
                {cartElemets.map((product)=>{
                    return (
                        <ProductCard key={product.ProductName}> 
                        <ProductImg src={product.img} alt={product.alt}/>
                        <ProductDetails>
                        <ProductName>{product.name}</ProductName>
                        <ProductPrice>{product.price}</ProductPrice>
                        </ProductDetails>
                        <ProductDeleteBtn onClick={deleteProduct}>Delete</ProductDeleteBtn>
                        </ProductCard>
                    )
                })}
                </CartProducts>
                <PriceCard>
                    <p color="white">Price Break up</p>
                    {cartElemets.map((product)=>{
                        return (
                                 <ItemContent>
                                    <ItemName>{product.name}</ItemName>
                                    <ItemPrice>{product.price}</ItemPrice>
                                    </ItemContent>
                                )
                        })
                    }
                    <ItemContent>
                    <PriceType>Cart Amount </PriceType>
                    <Amount>{cartElemets.reduce((acc,curr)=> acc+curr.price,0)} </Amount>
                    </ItemContent>
                    <ItemContent>
                    <PriceType>TAX </PriceType>
                    <Amount>{cartElemets.reduce((acc,curr)=> acc+curr.price,0)*.02} </Amount>
                    </ItemContent>
                    <ItemContent>
                    <PriceType>DELEVERY </PriceType>
                    <Amount >FREE </Amount>
                    </ItemContent>
                    <ItemContent>
                    <PriceType>PAY AMOUNT </PriceType>
                    <Amount>{cartElemets.reduce((acc,curr)=> acc+curr.price,0)*.02+cartElemets.reduce((acc,curr)=> acc+curr.price,0) } </Amount>
                    </ItemContent>

                </PriceCard>
            </CartWrap>

        </CartContainer>
    )
}

export default Cart
