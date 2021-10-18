const express=require('express')
const cors=require('cors')
//add a Stripe key


const config = require('./utils/config')
const middleware=require('./utils/middleware')

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
const pizzaRouter=require('./controllers/pizzas')
const loginRouter=require('./controllers/login')
const signupRouter=require('./controllers/signup')
const categoryRouter=require('./controllers/categories')
const paymentRouter=require('./controllers/payment')
const mongoose = require('mongoose')
const cartRouter = require('./controllers/users')
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
   console.log('connected to MongoDB') })
  .catch((error) => {
   console.log('error connecting to MongoDB:', error.message)
  })


//Routes
app.use('/api/payment',paymentRouter)
app.use('/api/pizzas',pizzaRouter)
app.use('/api/login',loginRouter)
app.use('/api/signup',signupRouter)
app.use('/api/cart',cartRouter)
app.use('/api/category',categoryRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


//Listen
app.listen(config.PORT,()=>console.log(`Server running on port ${config.PORT}`))