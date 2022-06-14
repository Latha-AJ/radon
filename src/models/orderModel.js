const mongoose = require('mongoose');
const moment = require('moment')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId: 
    {
        type: ObjectId,
        ref: "User"
    }, 
    productId:
    {
        type: ObjectId,
        ref: "Product"
    },
    isFreeAppUser: Boolean,
    amount: Number,
    date: { type: Date, default: Date.now }
      
});

module.exports = mongoose.model('Order', orderSchema) 