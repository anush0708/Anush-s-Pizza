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
column-gap: 25px;
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
text-decoration: none;
cursor: pointer;

`
// export const Bars=styled(FaPizzaSlice)`
// font-size: 2rem;
// transform: translate(-50%,-15%);
// `