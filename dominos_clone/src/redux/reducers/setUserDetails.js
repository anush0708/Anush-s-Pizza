const initialState={username:"",password:""}
const setUserDetails=(state={initialState},action)=>{
    switch(action.type){
        case 'USER_NAME':
            return (state={...state,username:action.data})
        case 'PASSWORD':
            return  (state={...state,password:action.data})
        default:
                return state
    }
}
export default setUserDetails