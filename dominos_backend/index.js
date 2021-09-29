const express=require('express')
const cors=require('cors')
const config = require('./utils/config')
const app=express()

app.use(cors())

const pizzaRouter=require('./controllers/pizzas')
const loginRouter=require('./controllers/login')
const signupRouter=require('./controllers/signup')
const mongoose = require('mongoose')
const cartRouter = require('./controllers/users')
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
   console.log('connected to MongoDB') })
  .catch((error) => {
   console.log('error connecting to MongoDB:', error.message)
  })


 app.use(express.json())
// let  productData = [
//     {
//         id:1,
//       img: "https://previews.123rf.com/images/mariia82/mariia822104/mariia82210400057/168729494-pizza-with-dried-tomatoes-pesto-sauce-garlic-and-chili-pepper-spicy-pizza-national-italian-american-.jpg",
//       alt: 'Pizza',
//       name: 'URL PIZZA',
//       desc:
//         'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
//       price: '$19.99',
//       button: 'Add to Cart'
//     },
//     {
//         id:2,
//       img: "https://previews.123rf.com/images/olha/olha1906/olha190600029/124009078-pizza-with-mushrooms-top-view.jpg",
//       alt: 'Pizza',
//       name: 'Hawaiian Paradise',
//       desc:
//         ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
//       price: "16.99",
//       button: 'Add to Cart'
//     },
//     {
//         id:3,
//       img: "https://previews.123rf.com/images/innakreativv/innakreativv2105/innakreativv210500094/169516570-round-pizza-with-salami-and-mozzarella-on-a-kitchen-pizza-board-close-up-on-a-white-background-isola.jpg",
//       alt: 'Pizza',
//       name: 'Veggie Overload',
//       desc:
//         ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
//       price: "14.99",
//       button: 'Add to Cart'
//     },
//     {
//         id:4,
//       img: "https://previews.123rf.com/images/belchonock/belchonock2003/belchonock200303190/141535163-hot-delicious-seafood-pizza-isolated-on-white.jpg",
//       alt: 'Pizza',
//       name: 'Veggie Overload',
//       desc:
//         ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
//       price: '$14.99',
//       button: 'Add to Cart'
//     },
//     {
//         id:5,
//       img: "https://previews.123rf.com/images/chernikovatv/chernikovatv2004/chernikovatv200400477/145875655-pepperoni-pizza-with-mozzarella-cheese-salami-tomatoes-pepper-and-spices-italian-cuisine.jpg",
//       alt: 'Pizza',
//       name: 'Veggie Overload',
//       desc:
//         ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
//       price: '$14.99',
//       button: 'Add to Cart'
//     },
//     {
//         id:6,
//       img: "https://previews.123rf.com/images/wingedbull/wingedbull2001/wingedbull200100052/137787845-pizza-on-a-dark-background-with-ham-mushrooms-cheese-and-sweet-pepper.jpg",
//       alt: 'Pizza',
//       name: 'Veggie Overload',
//       desc:
//         ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
//       price: '$14.99',
//       button: 'Add to Cart'
//     },
//     {
//         id:7,
//       img: "https://previews.123rf.com/images/danifoto/danifoto1802/danifoto180200409/141214624-pizza.jpg",
//       alt: 'Pizza',
//       name: 'Veggie Overload',
//       desc:
//         ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
//       price: '$14.99',
//       button: 'Add to Cart'
//     },
//     {
//         id:8,
//       img: "https://previews.123rf.com/images/aamulya/aamulya1908/aamulya190800037/128463410-healthy-clean-eating-dieting-and-nutrition-seasonal-summer-concept-watermelon-pizza-with-berries-fru.jpg",
//       alt: 'Pizza',
//       name: 'Veggie Overload',
//       desc:
//         ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
//       price: '$14.99',
//       button: 'Add to Cart'
//     },
//     {
//         id:9,
//       img: "https://previews.123rf.com/images/belchonock/belchonock2003/belchonock200312235/142499178-delicious-seafood-pizza-on-wooden-board-closeup.jpg",
//       alt: 'Pizza',
//       name: 'Veggie Overload',
//       desc:
//         ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
//       price: '$14.99',
//       button: 'Add to Cart'
//     },
//     {
//         id:10,
//       img: "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg",
//       alt: 'Pizza',
//       name: 'Veggie Overload',
//       desc:
//         ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
//       price: '$14.99',
//       button: 'Add to Cart'
//     },
//     {
//         id:11,
//       img: "https://media.istockphoto.com/photos/slice-of-pizza-cheese-crust-seafood-topping-sauce-with-bell-pepper-picture-id835271096",
//       alt: 'Pizza',
//       name: 'Veggie Overload',
//       desc:
//         ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
//       price: "14.99",
//       button: 'Add to Cart'
//     }
//   ];
app.get("/",(request,response)=>{
  response.send(`<h2>WELLCOME TO  PIZZA HUB </h2>`)
})
// app.get("/api/products",(request,response)=>{
//     response.json(productData)
// })
// app.get("/api/products/:id",(request,response)=>{
//     const id=Number(request.params.id)
//     const product=productData.find(product=>product.id===id)

//     if(product)
//     {response.json(product)}
//     else
//     {response.status(404).end}
// })

// app.post("/api/products",(request,response)=>{
//     const maxId = productData.length > 0
//     ? Math.max(...productData.map(n => n.id)) 
//     : 0

//   const product = request.body
//   console.log(product)
//   product.id = maxId + 1

//   productData = productData.concat(product)
//     response.json(product)
// })

// app.delete('/api/products/:id', (request, response) => {
//     const id = Number(request.params.id)
//     productData = productData.filter(product => product.id !== id)
//     response.status(204).end()
//   })
 app.use('/api/pizzas',pizzaRouter)
app.use('/api/login',loginRouter)
app.use('/api/signup',signupRouter)
app.use('/api/cart',cartRouter)









app.listen(config.PORT,()=>console.log(`Server running on port ${config.PORT}`))