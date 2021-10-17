const mongoose = require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')
const categorySchema = new mongoose.Schema({
  categoryName:{type:String,
    unique:true},
})
categorySchema.plugin(uniqueValidator)

categorySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category