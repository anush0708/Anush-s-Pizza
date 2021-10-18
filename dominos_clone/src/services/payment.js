import axios from "axios"
const baseUrl="/api/payment"


const makePayment=async(token,data)=>{
  const config={
      headers: { Authorization:token }
  }
  const response = await axios.post(baseUrl,data,config)

  return response
}


  const paymentService= {makePayment}
  export default paymentService