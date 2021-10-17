const express=require('express')
const cors=require('cors')
const config = require('./utils/config')
const middleware=require('./utils/middleware')
const app=express()

app.use(cors())

const pizzaRouter=require('./controllers/pizzas')
const loginRouter=require('./controllers/login')
const signupRouter=require('./controllers/signup')
const categoryRouter=require('./controllers/categories')
const mongoose = require('mongoose')
const cartRouter = require('./controllers/users')
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
   console.log('connected to MongoDB') })
  .catch((error) => {
   console.log('error connecting to MongoDB:', error.message)
  })


app.use(express.json())

app.use('/api/pizzas',pizzaRouter)
app.use('/api/login',loginRouter)
app.use('/api/signup',signupRouter)
app.use('/api/cart',cartRouter)
app.use('/api/category',categoryRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)







app.listen(config.PORT,()=>console.log(`Server running on port ${config.PORT}`))