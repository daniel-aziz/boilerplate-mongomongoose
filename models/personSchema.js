const mongoose = require('moongose')

const personSchema = mongoose.schema({
  name:String, 
  age:Number,
  favoriteFoods:[]
  
})