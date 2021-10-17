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
    const obj={
      productId:body.productId,
      quantity:body.quantity
    }
    user.cart=user.cart.concat(obj)
    await user.save()
    response.status(200).send(user.cart[user.cart.length-1]).json({
        message: 'added'
      })
})
cartRouter.put('/:id',async(request,response)=>{
  const body=request.body
  const token=getTokenFrom(request)
  const decodedToken=jwt.verify(token,process.env.SECRET)
  if(!token||!decodedToken.id)
  {
      return response.status(401).json({error:"Invalid or wrong token"})
  }
  await User.updateOne({_id:decodedToken.id,"cart._id":request.params.id},{$set:{"cart.$.quantity":body.quantity}})
  response.status(200).json({
      message: 'modified'
    })
})
cartRouter.get('/',async(request,response)=>{
    const token=getTokenFrom(request)
    const decodedToken=jwt.verify(token,process.env.SECRET)
    if(!token||!decodedToken.id)
    {
        return response.status(401).json({error:"Invalid or wrong token"})
    }
    const user = await User.findById(decodedToken.id).populate('cart.productId')

    response.send(user.cart)

})
cartRouter.delete('/:id',async(request,response)=>{
  const token=getTokenFrom(request)
  const decodedToken=jwt.verify(token,process.env.SECRET)
  console.log(request.params.id)
  if(!token||!decodedToken.id)
  {
      return response.status(401).json({error:"Invalid or wrong token"})
  }
 try { const user =  await User.findByIdAndUpdate(decodedToken.id,{$pull:{cart:{_id:request.params.id}}}).populate('cart')
  response.send(user.cart)
}
  catch(error){
    response.send(error)
  }
})
module.exports = cartRouter