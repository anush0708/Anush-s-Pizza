require('dotenv').config()
const mongoose = require('mongoose')

const url =process.env.MONGODB_URI 
  console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}).then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const pizzaSchema = new mongoose.Schema({
  categoryId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
    },
    img:String,
    alt:String,
    name:  String,      
    desc: String,
    price: Number,
    
})
pizzaSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

 module.exports= mongoose.model('Pizza', pizzaSchema)