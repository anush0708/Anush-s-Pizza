

const updateCart=(state=[],action)=>{
    switch(action.type){
        case 'UPDATE_CART':
            return (state.concat(action.data))
            default:
                return state
    }
}
export default updateCart