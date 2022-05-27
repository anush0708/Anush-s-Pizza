import React,{useEffect,useRef  } from 'react'
import Login from '../Login'
// import {GiFullPizza} from 'react-icons/gi'
import {LoginBarContainer,
        LoginHeader,
        LoginDescription,
        LoginCard,
        LoginFooter
        // GiFullPizza
        } from './NavBarElements'
const LoginBar = ({toggleLogin,setToggleLogin}) => {
    let loginRef=  useRef()
     useEffect(() => {
        if(toggleLogin===true&&loginRef?true:false)
        {
            let handler =(event)=> loginRef.current?.contains(event.target)?<></>:setToggleLogin(false)
            document.addEventListener("mousedown",(e)=>handler(e))
            return ()=>{
                document.removeEventListener("mousedown",(e)=>handler(e))
                console.log(toggleLogin+"from unmount")
            }
        }
     },[toggleLogin])

    return (
        <LoginBarContainer ref={loginRef} toggleLogin={toggleLogin}>
            <LoginHeader>
                <p>Anush's Pizza</p>
            </LoginHeader>
            <LoginDescription>
                <p>Login to unlock awesome new features</p>
            </LoginDescription>
            <LoginCard>
            <Login setToggleLogin={setToggleLogin}/>
            </LoginCard>
            <LoginFooter> <p>TERMS OF USE </p> </LoginFooter>
        </LoginBarContainer>
            
        
    )
}

export default LoginBar
