const bcrypt = require('bcrypt')
require('dotenv').config()
const cartRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const pizza = require('../models/pizza')
const User = require('../models/user')
const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
  }
cartRouter.post('/',async(request,response)=>{
    const body=request.body
    const token=getTokenFrom(request)
    const decodedToken=jwt.verify(token,process.env.SECRET)
    if(!token||!decodedToken.id)
    {
        return response.status(401).json({error:"Invalid or wrong token"})
    }
    const user = await User.findById(decodedToken.id)
    console.log(body)
    user.cart=user.cart.concat(body.id)
    await user.save()
    response.status(200).json({
        message: 'added'
      })
})
cartRouter.get('/',async(request,response)=>{
    const token=getTokenFrom(request)
    const decodedToken=jwt.verify(token,process.env.SECRET)
    if(!token||!decodedToken.id)
    {
        return response.status(401).json({error:"Invalid or wrong token"})
    }
    const user = await User.findById(decodedToken.id).populate('cart')
    response.send(user.cart)

})

module.exports = cartRouter