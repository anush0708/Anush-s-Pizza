const pizzasRouter = require('express').Router()
const Pizza = require('../models/pizza')

pizzasRouter.get('/', async (request, response) => {
 
  const pizzas=await Pizza.find({})
      response.json(pizzas)
})
pizzasRouter.post('/', async (request, response) => {
  const body=request.body
  console.log(body)
  const pizza=new Pizza({
    categoryId:body.categoryId,
    img:body.img,
    alt:body.alt,
    name:body.name,
    desc:body.description,
    price:body.price
  }

  )
  const savedPizza=await pizza.save()
      response.json(savedPizza)
})


module.exports=pizzasRouter