import React,{useEffect, useState} from 'react'
import { FaShoppingBag } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import SideBar from '../SideBar';
import LoginBar from './LoginBar';
import { setloggedInUser } from '../../redux/actions/productActions';
import { Nav ,MainHeader,SideBarHeaders,NavLink,NavLinkCart, Hamberger } from './NavBarElements'
const NavBar = () => {
    const [toggleLogin, setToggleLogin] = useState(false)
    const [headerColor, setHeaderColor] = useState("transparent")
    const [open,setOpen]=useState(false)
    const dispatch = useDispatch()
    const user= useSelector(state=>state.loggedInUser)?.username
    const cartItems=useSelector(state=>state.cart).length
    const listenScrollEvent=()=>{
        window.scrollY>690
        ? setHeaderColor("black")
        : setHeaderColor("transparent")
    }
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    }, [])
    const toggleHandler=(e)=>{
        setToggleLogin(true)
    }
    const toggle=()=>{
        setOpen(!open)
    }
   
    const logoutHandler=(e)=>{
        setToggleLogin(false)
        localStorage.clear("userDetails")
        const emptyLoggeInUser={
            token:"",
            username:""
        }
        dispatch(setloggedInUser(emptyLoggeInUser)) 
    }
    return (
            <Nav headerColor={headerColor}>
                <MainHeader>
                    <NavLink to ='/'> PIZZA </NavLink>
                </MainHeader>
                <SideBarHeaders>
                <NavLink to='/' >Menu</NavLink>
               
                <NavLink to='/' onClick={(e)=>{
                   user?logoutHandler(e):toggleHandler(e)}}>{user?<p>Log out</p>:<p>Login/Register</p> } </NavLink>
                 <LoginBar toggleLogin={toggleLogin} setToggleLogin={setToggleLogin} />
            
                
                <NavLinkCart  to="/cart">
                    <FaShoppingBag/>
                <p>{cartItems}</p>    
                </NavLinkCart>
                        {/* <Bars/> */}
                
                </SideBarHeaders>
                <Hamberger open={open} onClick={()=>setOpen(!open)}>
                    <div/>
                    <div/>
                    <div/>
                </Hamberger>
                <SideBar isOpen={open} toggle={toggle}/>
            </Nav>
        );
        
}

export default NavBar
