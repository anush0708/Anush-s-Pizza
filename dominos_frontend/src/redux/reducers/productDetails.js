
const productDetails=(state=[],action)=>{
    switch(action.type){
        case 'SET_PRODUCTS':
            return (state.concat(action.data))
            default:
                return state
    }
}
export default productDetails