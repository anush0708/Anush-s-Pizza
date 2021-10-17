const categoryRouter = require('express').Router()


const Category = require('../models/category')
const Pizza=require('../models/pizza')
categoryRouter.get('/', async (request, response) => {
  const test=await Category.aggregate([
    {
      $lookup:
      {
         from: 'pizzas',
         localField: '_id',
         foreignField: 'categoryId',
         as: 'products'
      }
    }
  ]) 
   response.json(test)
})
categoryRouter.post('/', async (request, response) => {
  const body=request.body
  console.log(body.categoryName)
  const category=new Category({
    categoryName:body.categoryName,

  }

  )
  const savedCategory=await category.save()
      response.json(savedCategory)
})


module.exports=categoryRouter