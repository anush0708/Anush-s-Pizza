const bcrypt = require('bcrypt')
require('dotenv').config()
const paymentRouter = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const stripe=require('stripe')(process.env.STRIPE_KEY)
const  {v4 : uuid}=require('uuid')
const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
  }
paymentRouter.post('/', async (request, response) => {
    const body=request.body
    const token=getTokenFrom(request)
    const decodedToken=jwt.verify(token,process.env.SECRET)
    if(!token||!decodedToken.id)
    {
        return response.status(401).json({error:"Invalid or wrong token"})
    }
    const user = await User.findById(decodedToken.id)
    const idempotencyKey=uuid()
    return   stripe.customers.create({
        email:user.mail,
        source:user._id}).then(customer=>{
            stripe.charges.create({
                amount:body.finalCartValue*100,
                currency:'usd',
                customer:customer.id,
                receipt_email:user.mail,
                shipping:{
                    name:user.username,
                    address:{
                        country:"INDIA"
                    }
                }
            },{idempotencyKey})
        })
        .then(result=>response.status(200).json(result))
        .catch(err=>console.log(err))
    })

module.exports=paymentRouter