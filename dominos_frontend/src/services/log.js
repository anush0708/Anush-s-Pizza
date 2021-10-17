import axios from "axios"
const baseURL="/api/pizzas"

const getAll=()=>{
 const res=axios.get(baseURL)
  return res.then(Response=> Response.data)
}

const create=(personObject)=>{
const res=axios.post(baseURL,personObject)
  return res.then(Response=> Response.data)
}
const loginUser=(personObject)=>{
    const res=axios.post("/api/login",personObject)
      return res.then(Response=> Response.data)
    }
const signupUser= async(personObject)=>{
    const res=axios.post("/api/signup",personObject)
    return  (await res).data
}
const deleteContact=(id)=>{
  const res=axios.delete(`${baseURL}/${id}`)
  console.log("deleting")
  return res.then(Response=> Response.data)
}
// const getCartElements=()=>{
//   const res=axios.get('/api/cart')
//    console.log((await res).data)
//  }
const update=(id,obj)=>{
  const res=axios.put(`${baseURL}/${id}`,obj)
  console.log("updating in server")
  return res.then(Response=> Response.data)
}

const logging=  { getAll,create,loginUser,signupUser,deleteContact,update }

export default logging