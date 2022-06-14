const { count } = require("console")
const orderModel= require("../models/orderModel.js")

const createOrder= async function (req, res, next) {
    let data = req.body
   let savedData= await orderModel.create(data)
    // res.send({data: savedData})
     next();
}

module.exports.createOrder= createOrder