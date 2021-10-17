const initialState={username:"",password:"",mail:""}
const setUserDetails=(state={initialState},action)=>{
    switch(action.type){
        case 'USER_NAME':
            return (state={...state,username:action.data})
        case 'PASSWORD':
            return  (state={...state,password:action.data})
        case 'MAIL':
                return  (state={...state,mail:action.data})
        default:
                return state
    }
}
export default setUserDetails