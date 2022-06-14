const UserModel= require("../models/userModel")
const productModel = require("../models/productModel")
const orderModel = require("../models/orderModel.js")

const mid1= function ( req, res, next) {
    let tokenDataInHeaders= req.headers["isfreeappuser"]
    if(!tokenDataInHeaders) {
        res.send("request is missing a mandatory header")
    }
else{
   next();
}
}

const mid2 = async function(req,res,next){
    let data =req.body.userId
    let isUserID = await UserModel.findById(data)
    let isProduct = await productModel.findById(req.body.productId)
    if(!isUserID) { res.send("enter the valid userID") }
   else if(!isProduct) {res.send("Product doesnot exist")}
    else{
        next();
    }
}

const mid3=  async function ( req, res, next) {
        let header = req.headers["isfreeappuser"]
            
        if(header == "true")
        {
           
       const OrderDetails = await orderModel.findOneAndUpdate(
         {userId : req.body.userId},
         {$set:{amount: 0, isFreeAppUser: true }},
         {$new: true}
       )
       res.send({msg: OrderDetails})
          }
       else{ 
        const productdetails = await productModel.findById(req.body.productId).select({price:1 , _id:0})
        const userDetails = await UserModel.findById(req.body.userId).select({balance:1, _id:0})
          const newBalance = (userDetails. balance) - (productdetails.price)

          if(newBalance >= 0){
          const changingBalance = await UserModel.findOneAndUpdate(
            {userId:req.body.userId},{$set:{ balance: newBalance}},{$new:true})

                    const OrderDetails = await orderModel.findOneAndUpdate(
                    {userId : req.body.userId},
                    {$set:{amount: productdetails.price, isFreeAppUser: false}},
                    {$new: true}
                  )
                  res.send({msg :OrderDetails }) }
                  else {res.send("user doesn't have the sufficient balance") }
       }
        }

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
