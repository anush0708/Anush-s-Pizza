import axios from "axios"
const baseUrl="/api/cart"


const updateCartProducts = async (newObject,token) => {
    const config = {
      headers: { Authorization: token },
    }
  
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
  }

const getCartProducts=async(token)=>{
    const config={
        headers: { Authorization:token }
    }
    const response = await axios.get(baseUrl,config)
    console.log(response.data)
    return response.data
}
  const cartService= {updateCartProducts,getCartProducts}
  export default cartService