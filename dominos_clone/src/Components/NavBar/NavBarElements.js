import { NavLink as Link} from 'react-router-dom'
import styled from 'styled-components'
import { FaShoppingBag } from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import imgbg from '../../Assets/icons/pizzaBg.jpg'
export const Nav=styled.nav`
background : ${({headerColor})=>headerColor};
position: relative;
z-index:5;
height :4.5rem;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: ${({headerColor})=>(headerColor==="transparent"?"relative":"fixed")};
` 
export const MainHeader=styled.div`
display:flex;
justify-content:space-around;
flex-grow: 3;
font-weight: bold;
`
export const SideBarHeaders=styled.div`

font-weight: normal;
display: flex;
width: auto;
flex-grow: 1;
flex-wrap:wrap;
justify-content: space-evenly;
@media screen and (max-width:700px){
    display: none;

}
`
export const NavLink=styled(Link)`
color: #fff;
font-size: 2rem;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
@media screen and (max-width:400px){
    position: absolute;
    top: 10;
    left: 25;
}
`
export const NavLinkCart=styled(Link)`
color: #fff;
font-size: 2rem;
display: flex;
position: relative;
align-items: center;
row-gap:10px;
text-decoration: none;
cursor: pointer;
@media screen and (max-width:400px){
    position: absolute;
    top: 10;
    left: 25;
}
>p{
  position: absolute;
  top:-5px;
  right:-10px;
  height: 24px;
  width: 24px;
  font-size: 18px;
  font-weight:lighter;
  border-radius:10px;
  background: #e31837;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
`

export const NavIcon=styled(FaShoppingBag)`
display:block;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: #fff;
p{
    transform: translate(-175%,100%);
    font-weight: bold;
}
`
export const UserIcon=styled(AiOutlineUser)`
color: #fff;
font-size: 2rem;
display: flex;
align-items: center;
row-gap:10px;
align-self: center;
text-decoration: none;
cursor: pointer;
@media screen and (max-width:400px){
    position: absolute;
    top: 10;
    left: 25;
}

`
// export const Bars=styled(FaPizzaSlice)`
// font-size: 2rem;
// transform: translate(-50%,-15%);
// `
export const ShowLogin=styled.div`
position: fixed;
z-index:99;
width:250px;
height: 30%;
background:	rgb(45,46,48);
display: grid;
align-items: center;
border-radius: 15px;
align-items: center;
justify-content: center;
top:85px;
transition: 0.9s ease-in-out;
box-shadow: 0 2px 8px rgba(0, 0, 0, .5);
right:${({toggleLogin})=>(toggleLogin?'50px':'-10000px')};
p{
    color: white;
    margin: 0,0;
    padding :10px;
}
`
export const LoggedUserDetails=styled.div`

height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
p{
    font-size: 15px;
    justify-content: center;
    align-content: center;
}
h5{
  color:white;
  font-style: italic;
}
h4{
    font-size:20px;
    justify-content: center;
    align-content: center;
    &:hover{
        cursor: pointer;
        transform:0.6s ease-in-out;
        color: rgba(255,0,0,.6);
    }
}
`
export const Hamberger=styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 700px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#333' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

`

export const LoginBarContainer=styled.div`
position: fixed;
z-index:99;
width:500px;
height: 100%;
background:rgb(8,12,13);
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
top:80px;
transition:right .5s;
box-shadow: 0 10px 8px 20px rgba(0, 0, 0, 0.35);
right:${({toggleLogin})=>(toggleLogin?'0':'-10000px')};

@media screen and (max-width:400px){
    width:100%;
    };
    @media screen and (max-height:400px){
    width:100%;
    };

`
export const LoginHeader=styled.div`
width: 100%;
background: linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0.1)),url(${imgbg});
height: 220px;
background-position: center;
background-size: cover;
display: flex;
overflow: hidden;
flex-direction: column;
p{
  font-size: 20px;
  color: rgb(0,120,173);
  padding-top:100px;
  padding-left: 20px;
}
`
export const LoginDescription=styled.div`
height: 50px;
p{
font-size: 20px;
color: rgb(0,120,173);
font-weight: normal;
font-style: italic;
margin: 10px 10px;
}

`

export const LoginCard=styled.div`
background:white;
width: 90%;
border-radius: 5px;
height: 350px;
margin-bottom: 10px;
`
export const LoginFooter=styled.footer`
height: 20px;
p{
  color: white;
}

`
