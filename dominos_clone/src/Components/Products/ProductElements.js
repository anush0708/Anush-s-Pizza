import styled from "styled-components";

export const ProductsContainer=styled.div`
@keyframes ProductsSlide{
    0% {
        opacity:0;
        transform:translateY(3%);
    }
  
    100% {opacity:1;
        transform:translateY(0%);
    }
}
width:100vw;
font-family:'Times New Roman', Times, serifc ;
min-height: 100vh;
padding :5rem calc((100vw-1300px)/2);
background:#150f0f;
width: 100%;
color:#fff;
overflow: hidden;
animation-name:ProductsSlide;
animation-duration: 1.5s;


`
export const ProductWrapper =styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;

`
export const ProductCard=styled.div`
margin:0 2rem;
line-height: 2rem;
min-height:500px;
width:300px;

`
export const ProductImg=styled.img`
height :300px;
width:100%;
box-shadow: 8px 8px #fdc500;
`

export const ProductsHeading=styled.h1`
font-size: clamp(2rem,2.5vw,3rem);
text-align:center;
margin-bottom: 5rem;
`

export const ProductTitle=styled.h2`
font-weight: 400;
font-size:1.5rem;
min-height: 60px;

`

export const ProductInfo=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
text-align:center;
`
export const ProductDesc=styled.p`
margin-bottom: 1rem;
display: -webkit-box;
-webkit-line-clamp: 2;
overflow:${({more})=>(more?'visible':'hidden')};
max-height:${({more})=>(more?'200px':'60px')};

position: relative;
button{
    position: absolute;
    background:#150f0f;
    color: white;
    border:none;
    padding-left: 2px;
    right:${({more})=>(more?'auto':'1px')};;
    font-style:italic;
    bottom:${({more})=>(more?'4px':'2px')};;;
    &:hover{
        cursor: pointer;
    }
}

`
export const ProductPrice=styled.p`
margin-bottom: 1rem;
font-size: 2rem;
`

export const ProductButton=styled.button`
font-size:1rem;
padding: 1rem 4rem;
border:none;
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
export const CounterButtonWrapper=styled.div`
width: 100%;
color:white;
`
export const CounterButton=styled.button`
font-size:1.5rem;
padding: 0.5rem 0.5rem;
border:none;
width:20%;
margin:15px;
background:#ffc500;
color: #000;
border-radius: 0.2rem;
transition: 0.2 ease-out;
&:hover{
    background:#e31837;
    transition:0.2s ease-out;
    cursor: pointer;
    color: #000;
}
`
export const AddedToCartButton=styled.button`
font-size:1rem;
padding: 1rem 4rem;
border:black;
border-radius: 2px;
background:white;
color: #000;
transition: 0.2 ease-out;


`