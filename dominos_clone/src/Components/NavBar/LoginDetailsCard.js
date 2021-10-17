import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { setloggedInUser } from '../../redux/actions/productActions'
import { NavLink ,LoggedUserDetails} from './NavBarElements'
const LoginDetailsCard = ({toggleLogin,setToggleLogin}) => {
    const dispatch = useDispatch()
    const user= useSelector(state=>state.loggedInUser)?.username
    const logoutHandler=(e)=>{
        setToggleLogin(!toggleLogin)
        localStorage.clear("userDetails")
        const emptyLoggeInUser={
            token:"",
            username:""
        }
        dispatch(setloggedInUser(emptyLoggeInUser)) 
    }
    return (
            user?<LoggedUserDetails><h5>Logged in as</h5> <p>{user}</p><h4 onClick={logoutHandler}>Log Out</h4></LoggedUserDetails> :<NavLink to='/login'>Login/SignUp</NavLink>
    )
}

export default LoginDetailsCard
