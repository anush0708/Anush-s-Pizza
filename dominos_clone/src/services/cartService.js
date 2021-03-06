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
    console.log("running")
    const response = await axios.get(baseUrl,config)
    console.log("completed",response.data)
    return response.data
}
const updateQuantity=async(token,id,data)=>{
  const config={
      headers: { Authorization:token }
  }
  const response = await axios.put(`${baseUrl}/${id}`,data,config)
  return response.data
}

const deleteCartProduct=async(token,id)=>{
  const config={
      headers: { Authorization:token }
  }
  const response = await axios.delete(`${baseUrl}/${id}`,config)
  return response.data
}

  const cartService= {updateCartProducts,getCartProducts,deleteCartProduct,updateQuantity}
  export default cartService