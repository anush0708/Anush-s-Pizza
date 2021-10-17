 import {Form,Button,Header} from './LoginElements'
 import { useSelector, useDispatch } from 'react-redux'
import { setUser, setPassword, setloggedInUser } from '../../redux/actions/productActions'
import logging from '../../services/log'

 const Login=(props)=>{
    const dispatch = useDispatch()
    const userDetails=useSelector(state=>state.setUserDetails)
    const username=userDetails.username
    const   password=userDetails.password
    console.log(props)
    const userNameHandler=(name)=>{
      dispatch(setUser(name))
    }
    const passwordHandler=(password)=>{
        dispatch(setPassword(password));
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
    return (
        <div>
        <Header> </Header>
     <Form onSubmit={setDetails} >
        <label htmlfor='' name="">User Name</label>
        <input type="text" onChange={(e)=>userNameHandler(e.target.value)}/>
        <label name="password">Password</label>
        <input type="password" onChange={(e)=>passwordHandler(e.target.value)}/>
        <Button type="submit"   >Submit</Button>
    </Form>
    </div>)

}
export default Login