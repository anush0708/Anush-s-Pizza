import styled from "styled-components";

export const CartContainer=styled.div`
height: 100%;
width: 100%;
background: black;


`
export const NoItems=styled.div`
min-height: 38.3vh;
justify-content: center;
align-items: center;
p{
    color: white;

}
`

export const CartHeading=styled.h1`
color: white;
text-align:center;

`

export const CartWrap=styled.div`
display: flex;
padding: 40px 40px;
width: 100%;
height:100%;
@media screen and (max-width:1100px){
    flex-direction: column;
}
`
export const CartProducts=styled.div`
display: flex;
flex-direction:column;
flex-wrap: wrap;
height: 100%;
width: 60%;
@media screen and (max-width:1100px){
    width: 100%;
}
`

export const ProductCard=styled.div`
display: flex;
min-height: 100px;
width: 100%;
height:200px;
margin:20px;
`

export const ProductImg=styled.img`
height:100%;
width: 30%;
align-content: center;
background-size:cover;
margin-right: 10px;
`
export const ProductDetails=styled.div`
display: flex;
flex-direction: column;

width:60% ;

`
export const ProductName=styled.h3`
font-size: 1.5rem;
color:white;
`

export const ProductPrice=styled.p`
font-size: 1.5rem;
color:white;
`

export const ProductDesc=styled.p`
font-size: 1.5rem;
color:white;
`

export const ProductDeleteBtn=styled.button`
font-size:1rem;
padding: .5rem 2rem;
border:none;
height: 30%;
justify-content: center;
align-self: center;
background:#e31837;
color: #fff;
transition: 0.2 ease-out;
&:hover{
    background:#ffc500;
    transition:0.2s ease-out;
    cursor: pointer;
    color: #000;
}
`
export const PriceCard=styled.div`
width:50%;
padding :80px;
overflow: hidden;
p{
    color: white;
    padding:10px 10px;
    text-align: center;
    
}
@media screen and (max-width:1100px){
    width: 100%;
}

`

export const TotalPrice=styled.p`
color:white;
text-align: right;

`

export const ItemContent=styled.div`

display: flex;
column-gap: 80px;
`
export const ItemName=styled.p`
color:white;
width:70%;

`
export const ItemPrice=styled.p`
color:white;
width: 30%;


`
export const PriceType=styled.p`
color:white;
width: 70%;
`
export const Amount=styled.p`
color:white;
text-align: right;
width:30%;
`

export const PayButton=styled.button`
height:50px;
font-size: 1rem;
width: 100%;
background:#e31837;
color: #fff;
justify-content: center;
align-items: center;
border: none;
align-self:center;
&:hover{
    background:#ffc500;
    transition:0.2s ease-out;
    cursor: pointer;
    color: #000;
}
`