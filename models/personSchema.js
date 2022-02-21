const mongoose = require('moongose')

const personSchema = mongoose.schema({
  name:String, 
  age:Number,
  favoriteFoods:[String]
  
})

module.exports = mongoose.model("Person",personSchema); 