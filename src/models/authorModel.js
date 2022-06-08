const mongoose = require('mongoose');

const authorName = new mongoose.Schema({
    author_Id : 
    {type:Number, required: true},
    authorName :
    {type:String, required: true },
    age: Number,
    address: String
},{timestamps: true})

module.exports = mongoose.model('author', authorName)


// isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
  //users



// String, Number
// Boolean, Object/json, array