import styled from 'styled-components';
import { IoChevronForwardOutline, IoChevronBackOutline } from 'react-icons/io5';

export const SlideContainer = styled.div`
position: relative;
height: 60vh;
padding:2rem 2rem;
width:100%;
overflow: hidden;
background:white;
display: flex;
justify-content: space-around;
align-items: center;



`;
export const SliderHeader = styled.h3`
max-width: 100%;
height: 20vh;
background: ivory;
color: black;
padding-top: 2rem;
justify-content: center;
text-align: center;
font-size: 30px;
font-weight: 90;
`;
export const FwdIcon = styled(IoChevronForwardOutline)` 
right: 2px;
position: absolute;
height: 3rem;
width: 3rem;
top:50%;
:hover{
    cursor: pointer;
}


`;
export const BwdIcon = styled(IoChevronBackOutline)` 
height: 3rem;
width: 3rem;
left: 2px;
position: absolute;
top:50%;
:hover{
    cursor: pointer;
}

`;
export const ProductContainer = styled.div`
height: 100%;
min-width:80vw;
overflow: hidden;
display: flex;
justify-content:space-between;
align-items: center;



`;

export const ProductImage = styled.img`
@keyframes slidesAnimation{
    0% {
        opacity:0.8;
        transform:translateX(-50%);
    }
    100% {opacity:1;
        transform:translateX(0%);
    }
}
width: 50%;
height:100%;
object-fit: cover;
margin-right:1rem ;
align-items: center;
margin-bottom: 5rem;
animation-name: slidesAnimation;
animation-duration: 2s;
::before{
    z-index:2;
    background: black;
    transform:translateX(-100%);
    transition-duration: 1s;
}
`;
export const ProductContent = styled.div` 
@keyframes slidesAnimation1{
    0% {
        opacity:0.8;
        transform:translateX(50%);
    }
    100% {opacity:1;
        transform:translateX(0%);
    }

}
margin-top: 10rem;
width: 50%;
height:100%;
padding:2rem 2rem;
transition-duration: 1s ease;
animation-name: slidesAnimation1;
animation-duration: 2s;
color: white;
background: black;

`;
