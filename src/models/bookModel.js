const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required:true
    }, 
    authorName: String, 
    
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    
    year: {
        type: String,
        default: 2021 
    },
    tags : 
    {
        type: String,
        enum: ["Fiction", "", "Fantasy", "Horror", "Non Fiction"]
    },
     stocksAvailable: Boolean,
     totalPages : Number
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users


// sales: {type: Number, default: 10},
//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
