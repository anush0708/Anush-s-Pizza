 import {Form,Button,Header} from './LoginElements'
 import { useSelector, useDispatch } from 'react-redux'
import { setUser, setPassword, setloggedInUser, loginToggle, setMail,signUpToggle } from '../../redux/actions/productActions'
import logging from '../../services/log'
import {debounce} from 'lodash'
 const Login=({setToggleLogin})=>{
    const dispatch = useDispatch()
    const userDetails=useSelector(state=>state.setUserDetails)
   
    const username=userDetails.username
    const   password=userDetails.password
    const mail=userDetails.mail
    const userNameHandler=(name)=>{

      dispatch(setUser(name))
    }
    const effectiveUserNameHandler=debounce((name)=>{
        userNameHandler(name)
      },3000)
    const passwordHandler=(password)=>{
        dispatch(setPassword(password));
        console.log("Logging",userDetails)
    }
    const mailHandler=(mail)=>{
        dispatch(setMail(mail));
    }
    const setDetails=async (event)=>{
        event.preventDefault()

        const personObject={
            username:username,
            password:password
        }
       const res= await logging.loginUser(personObject)
        if(res)
        {
            setToggleLogin(false)
            dispatch(setloggedInUser(res))
            localStorage.setItem("userDetails",JSON.stringify(res) )
           
        }
    }
    const setSignUpDetails=async(event)=>{
        event.preventDefault()
        const personObject={
            username:username,
            mail:mail,
            password:password
        }
        try{
           const response= await logging.signUpUser(personObject) 
           if(response)
           {
            setToggleLogin(false)
               dispatch(setloggedInUser(response))
               localStorage.setItem("userDetails",JSON.stringify(response) )
           }
        }
         catch(error)
         {
             if(error.message==="Request failed with status code 400")
             {
                    <p>User already Exists</p>
                 
             }
         }
     
        
       
    }
    const signIn=()=>{
        dispatch(loginToggle())
    }
    const signUp=()=>{
        dispatch(signUpToggle())
    }
    return (
        <div>
        <Header>
            <p onClick={signIn}>LOGIN</p>
            <p onClick={signUp}>SIGNUP</p>
         </Header>
         {useSelector(state=>state.loginToggle)
         ?
         <Form onSubmit={setDetails} >
        <label htmlFor='' name="">User Name</label>
        <input type="text" onChange={(e)=>effectiveUserNameHandler(e.target.value)}/>
        <label name="password">Password</label>
        <input type="password" onChange={(e)=>passwordHandler(e.target.value)}/>
        <Button type="submit"  >Submit</Button>
         </Form>
        :
        <Form onSubmit={setSignUpDetails}>
             <label htmlFor='' name="">User Name</label>
        <input type="text" onChange={(e)=>effectiveUserNameHandler(e.target.value)}/>
        <label name="mail">Mail</label>
        <input type="mail" onChange={(e)=>mailHandler(e.target.value)}/>
        <label name="password">Password</label>
        <input type="password" onChange={(e)=>passwordHandler(e.target.value)}/>
        <Button type="submit"   >Submit</Button>
        </Form>

    }
    
    </div>)

}
export default Login