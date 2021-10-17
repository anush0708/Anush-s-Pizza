
import cartService from "../../services/cartService"

const updateCart=(state=[],action)=>{
    switch(action.type){
        case 'UPDATE_CART':
            return (state.concat(action.data))

        case 'DELETE_CART_PRODUCT':
            {
                
            return (state.filter(prd=>prd._id!==action.data))
            }
        case 'INCREMENT_CART_PRODUCT':
            {
                const sendRequest=(quantity)=>{
                    cartService.updateQuantity(`bearer ${JSON.parse(window.localStorage.userDetails).token}`,action.data,{quantity:quantity})
                }
               
             return  state=state.map(obj=>{
                     if(obj._id===action.data)
                     {
                         sendRequest(obj.quantity+1)
                        return{
                            ...obj,
                            quantity:obj.quantity+1
                        }
                     }
                    else
                    {
                       return obj
                    }
                    
                })
            }
        case 'DECREMENT_CART_PRODUCT':
            {
                const sendRequest=(quantity)=>{
                    cartService.updateQuantity(`bearer ${JSON.parse(window.localStorage.userDetails).token}`,action.data,{quantity:quantity})
                }
               
             return  state=state.map(obj=>{
                     if(obj._id===action.data)
                     {
                         if(obj.quantity==1)
                         {
                            // return (state.filter(prd=>prd.id!==action.data))
                         }
                         sendRequest(obj.quantity-1)
                        return{
                            ...obj,
                            quantity:obj.quantity-1
                        }
                     }
                    else
                    {
                       return obj
                    }
                    
                })
            }
        
            default:
                return state
        
    }
}
export default updateCart