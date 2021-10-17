import { NavLink as Link} from 'react-router-dom'
import styled from 'styled-components'
import { FaShoppingBag } from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
export const Nav=styled.nav`
background : transparent;
height :80px;
display: flex;
justify-content: center;
font-weight: 700;
` 
export const MainHeader=styled.div`
display:flex;
min-width:60%;
align-items: center;
justify-content: center;
`
export const SideBarHeaders=styled.div`
display: flex;
width: auto;
flex-wrap:wrap;
padding-top:25px;
column-gap: 25px;
@media screen and (max-width:700px){
    display: none;

}
`
export const NavLink=styled(Link)`
color: #fff;
font-size: 2rem;
display: flex;
align-items: center;
row-gap:10px;
text-decoration: none;
cursor: pointer;
@media screen and (max-width:400px){
    position: absolute;
    top: 10;
    left: 25;
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
  position: fixed;
  top: 15px;
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
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
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