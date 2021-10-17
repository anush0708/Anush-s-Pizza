import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartService from '../../services/cartService'
import {deleteCartProduct,incrementCartProduct,decrementCartProduct, updateCart} from '../../redux/actions/productActions'
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
ItemPrice,
NoItems} from './CartElements'
import { CounterButton, CounterButtonWrapper } from '../Products/ProductElements'
const Cart = () => {
     const dispatch = useDispatch()
    
    const deleteProduct=(e,id)=>{
        cartService.deleteCartProduct(`bearer ${JSON.parse(window.localStorage.userDetails).token}`,id)
        dispatch(deleteCartProduct(id))
    }
    const decrementCartProductHandler=(e,product)=>{
        // cartService.decrementCartProduct(`bearer ${JSON.parse(window.localStorage.userDetails).token}`,id)
       const original= e.target.style.background
       e.target.style.background='#FF1493'
       window.setTimeout(function() { e.target.style.background = original; }, 100);
        if(product.quantity===1)
        {
            cartService.deleteCartProduct(`bearer ${JSON.parse(window.localStorage.userDetails).token}`,product._id)
            dispatch(deleteCartProduct(product._id))
            console.log(product._id)
        }
        else{
            dispatch(decrementCartProduct(product._id))
        }
        
    }
    const incrementCartProductHandler=(e,id)=>{
        const original= e.target.style.background
       e.target.style.background='#FF1493'
       window.setTimeout(function() { e.target.style.background = original; }, 100);
        dispatch(incrementCartProduct(id))
    }
    const cartElements=useSelector(state=>state.cart)
    
    return (
       
        <CartContainer>
            <CartHeading>CART</CartHeading>
            {
            cartElements.length>0
            ?
            <CartWrap>
                <CartProducts>
                {cartElements.map((product)=>{
                    return (
                        
                        <ProductCard key={product.productId.ProductName}> 
                        <ProductImg src={product.productId.img} alt={product.alt}/>
                        <ProductDetails>
                        <ProductName>{product.productId.name}</ProductName>
                        <ProductPrice>{product.productId.price}</ProductPrice>
                        </ProductDetails>
                        {/* <ProductDeleteBtn onClick={e=>deleteProduct(e,product.productId.id)}>Delete</ProductDeleteBtn> */}
                        <CounterButtonWrapper> 
                            <CounterButton onClick={e=>decrementCartProductHandler(e,product)}>
                                -
                            </CounterButton>
                                {product.quantity}
                            <CounterButton onClick={e=>incrementCartProductHandler(e,product._id)}>
                                +
                            </CounterButton>
                        </CounterButtonWrapper>
                        </ProductCard>
                    )
                })}
                </CartProducts>
                <PriceCard>
                    <p color="white">Price Break up</p>
                    {cartElements.map((product)=>{
                        return (
                                 <ItemContent>
                                    <ItemName>{product.productId.name} * {product.quantity} </ItemName>
                                    <ItemPrice>{product.productId.price*product.quantity}</ItemPrice>
                                </ItemContent>
                                )
                        })
                    }
                    <ItemContent>
                    <PriceType>Cart Amount </PriceType>
                    <Amount>{cartElements.reduce((acc,curr)=> acc+(curr.productId.price*curr.quantity),0)} </Amount>
                    </ItemContent>
                    <ItemContent>
                    <PriceType>TAX </PriceType>
                    <Amount>{ (cartElements.reduce((acc,curr)=> acc+curr.productId.price*curr.quantity,0)*.02).toFixed(2)} </Amount>
                    </ItemContent>
                    <ItemContent>
                    <PriceType>DELEVERY </PriceType>
                    <Amount >FREE </Amount>
                    </ItemContent>
                    <ItemContent>
                    <PriceType>PAY AMOUNT </PriceType>
                    <Amount>{cartElements.reduce((acc,curr) => acc + curr.productId.price,0)*.02+cartElements.reduce((acc,curr)=> acc+curr.productId.price,0) } </Amount>
                    </ItemContent> 

                </PriceCard>
                </CartWrap>
            :
            <NoItems><p>No Items in the cart</p></NoItems>
            }
            
        </CartContainer>
    )
}

export default Cart
