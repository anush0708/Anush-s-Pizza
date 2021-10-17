 import {Form,Button,Header} from './LoginElements'
 import { useSelector, useDispatch } from 'react-redux'
import { setUser, setPassword, setloggedInUser, loginToggle, setMail,signUpToggle } from '../../redux/actions/productActions'
import logging from '../../services/log'

 const Login=(props)=>{
    const dispatch = useDispatch()
    const userDetails=useSelector(state=>state.setUserDetails)
    const username=userDetails.username
    const   password=userDetails.password
    const mail=userDetails.mail
    console.log(props)
    const userNameHandler=(name)=>{
      dispatch(setUser(name))
    }
    const passwordHandler=(password)=>{
        dispatch(setPassword(password));
    }
    const mailHandler=(mail)=>{
        dispatch(setMail(mail));
    }
    const setDetails=async (event)=>{
        event.preventDefault()
        console.log(username,password)
        const personObject={
            username:username,
            password:password
        }
       const response= await logging.loginUser(personObject)
        if(response)
        {

            dispatch(setloggedInUser(response))
            localStorage.setItem("userDetails",JSON.stringify(response) )
            props.history.push('/')
        }
    }
    const setSignUpDetails=async(event)=>{
        event.preventDefault()
        const personObject={
            username:username,
            mail:mail,
            password:password
        }
        const response="";
        try{
            response= await logging.signUpUser(personObject) 
        }
         catch(error)
         {
             if(error.message=="Request failed with status code 400")
             {
                    <p>User already Exists</p>
                 
             }
         }
     
        
        if(response)
        {

            dispatch(setloggedInUser(response))
            localStorage.setItem("userDetails",JSON.stringify(response) )
            props.history.push('/')
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
        <label htmlfor='' name="">User Name</label>
        <input type="text" onChange={(e)=>userNameHandler(e.target.value)}/>
        <label name="password">Password</label>
        <input type="password" onChange={(e)=>passwordHandler(e.target.value)}/>
        <Button type="submit"   >Submit</Button>
         </Form>
        :
        <Form onSubmit={setSignUpDetails}>
             <label htmlfor='' name="">User Name</label>
        <input type="text" onChange={(e)=>userNameHandler(e.target.value)}/>
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