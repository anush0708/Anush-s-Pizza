import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartService from '../../services/cartService'
import {deleteCartProduct,incrementCartProduct,decrementCartProduct} from '../../redux/actions/productActions'
import { CartContainer,
    CartHeading,
    CartWrap,
    CartProducts,
    ProductCard,
    ProductImg,
    ProductDetails,
    ProductName,
    ProductPrice,
    PriceCard,
    Amount,
    PriceType,
ItemContent,
ItemName,
ItemPrice,
NoItems} from './CartElements'
import { CounterButton, CounterButtonWrapper } from '../Products/ProductElements'
import Checkout from './Checkout'
const Cart = () => {

     const dispatch = useDispatch()
    
    // const deleteProduct=(e,id)=>{
    //     cartService.deleteCartProduct(`bearer ${JSON.parse(window.localStorage.userDetails).token}`,id)
    //     dispatch(deleteCartProduct(id))
    // }
    const decrementCartProductHandler=(e,product)=>{
        // cartService.decrementCartProduct(`bearer ${JSON.parse(window.localStorage.userDetails).token}`,id)
       const original= e.target.style.background
       e.target.style.background='#FF1493'
       window.setTimeout(function() { e.target.style.background = original; }, 100);

       //delete the product from cart
        if(product.quantity===1)
        {
            cartService.deleteCartProduct(`bearer ${JSON.parse(window.localStorage.userDetails).token}`,product._id)
            dispatch(deleteCartProduct(product._id))

        }

        //decrement cart quantity
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
    let cartInitialAmount=cartElements.reduce((acc,curr)=> acc+(curr.productId.price*curr.quantity),0).toFixed(2)
    let cartTax=(cartInitialAmount*.02).toFixed(2)
    let finalCartValue= Number(cartInitialAmount) +Number(cartTax) 
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
                                    <ItemPrice>{(product.productId.price*product.quantity).toFixed(2)}</ItemPrice>
                                </ItemContent>
                                )
                        })
                    }
                    <ItemContent>
                    <PriceType>Cart Amount </PriceType>
                    <Amount>{cartInitialAmount} </Amount>
                    </ItemContent>
                    <ItemContent>
                    <PriceType>TAX </PriceType>
                    <Amount>{cartTax } </Amount>
                    </ItemContent>
                    <ItemContent>
                    <PriceType>DELEVERY </PriceType>
                    <Amount >FREE </Amount>
                    </ItemContent>
                    <ItemContent>
                    <PriceType>PAY AMOUNT </PriceType>
                    <Amount>{finalCartValue} </Amount>
                    </ItemContent> 
                    <Checkout cartElements={cartElements} finalCartValue={finalCartValue} />
                </PriceCard>
                </CartWrap>
            :
            <NoItems><p>No Items in the cart</p></NoItems>
            }
          
        </CartContainer>
    )
}

export default Cart
