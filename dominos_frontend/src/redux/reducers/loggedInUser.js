
const loggedInUser=(state={token:"",username:""},action)=>{
    switch(action.type){
        case 'SET_USER':
            return (state=(action.data))
            default:
                return state
    }
}
export default loggedInUser