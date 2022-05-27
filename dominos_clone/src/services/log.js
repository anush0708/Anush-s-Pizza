import axios from "axios"
const baseURL="/api/pizzas"

const getAll= async()=>{
 const res= await axios.get("/api/category")
  return res.data
}
const getAllProducts= async()=>{
  const res= await axios.get("/api/pizzas")
   return res.data
 }
const create=(personObject)=>{
const res=axios.post(baseURL,personObject)
  return res.then(Response=> Response.data)
}
const loginUser=(personObject)=>{
    const res=axios.post("/api/login",personObject)
      return res.then(Response=> Response.data)
    }
const signUpUser= async(personObject)=>{
    const res=axios.post("/api/signup",personObject)
    return  (await res).data
}
const deleteContact=(id)=>{
  const res=axios.delete(`${baseURL}/${id}`)
  return res.then(Response=> Response.data)
}
// const getCartElements=()=>{
//   const res=axios.get('/api/cart')
//    console.log((await res).data)
//  }
const update=(id,obj)=>{
  const res=axios.put(`${baseURL}/${id}`,obj)
  return res.then(Response=> Response.data)
}

const logging=  { getAll,getAllProducts,create,loginUser,signUpUser,deleteContact,update }

export default logging