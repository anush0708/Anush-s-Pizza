const loginToggle=(state=true,action)=>{
    switch (action.type) {
        case 'LOGIN_TOGGLE':
            return state=true;
        case 'SIGN_UP_TOGGLE':
            return state=false;
        default :
            return state;
    }
}
export default loginToggle