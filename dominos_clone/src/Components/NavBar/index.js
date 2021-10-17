import React,{useState,useEffect} from 'react'
import { FaShoppingBag } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar';
import LoginDetailsCard from './LoginDetailsCard';

import { Nav ,MainHeader,SideBarHeaders,NavLink,NavIcon,Bars,UserIcon,ShowLogin, Hamberger } from './NavBarElements'
const NavBar = () => {
    const [toggleLogin, setToggleLogin] = useState(false)
    const [open,setOpen]=useState(false)
    const toggleHandler=()=>{
        setToggleLogin(!toggleLogin)
      
        
    }
    
 
    
    const toggle=()=>{
        setOpen(!open)
    }
    return (
        <>
            <Nav>
                <MainHeader>
                    <NavLink to ='/'> PIZZA </NavLink>
                </MainHeader>
                <SideBarHeaders>
                <NavLink to='/'>MENU</NavLink>
                <UserIcon onClick={toggleHandler} />
                 { toggleLogin?<ShowLogin toggleLogin={toggleLogin} >
                      <LoginDetailsCard  toggleLogin={toggleLogin} setToggleLogin={setToggleLogin}/>
                </ShowLogin>:<></>}
                    {/* // {useSelector(state=>state.loggedInUser.username)!=""? */}
                    {/* // <UserIcon to='/login'/>:<NavLink to='/login' > Login/SignUp</NavLink>} */}
                
                
                <NavLink  to="/cart">
                    <FaShoppingBag/></NavLink>
                        {/* <Bars/> */}
                
                </SideBarHeaders>
                <Hamberger open={open} onClick={()=>setOpen(!open)}>
                    <div/>
                    <div/>
                    <div/>
                </Hamberger>
                <SideBar isOpen={open} toggle={toggle}/>
            </Nav>
        </>
        );
        
}

export default NavBar
