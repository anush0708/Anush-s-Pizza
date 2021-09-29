import React from 'react'
import { FaShoppingBag } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar';

import { Nav ,MainHeader,SideBarHeaders,NavLink,NavIcon,Bars,UserIcon } from './NavBarElements'
const NavBar = ({toggle}) => {
    return (
        <>
            <Nav>
                <MainHeader>
                    <NavLink to ='/'> PIZZA </NavLink>
                </MainHeader>
                <SideBarHeaders>
                    {useSelector(state=>state.loggedInUser.username)!=""?
                    <UserIcon to='/login'/>:<NavLink to='/login' > Login/SignUp</NavLink>}
                
                <NavLink to='/'>MENU</NavLink>
                <NavLink  to="/cart">
                    <FaShoppingBag/></NavLink>
                        {/* <Bars/> */}
                </SideBarHeaders>
       
            </Nav>
        </>
        );
        
}

export default NavBar
