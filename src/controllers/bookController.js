const BookModel= require("../models/bookModel.js")
const authorModel= require("../models/authorModel.js")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const BookByChetanBhagat= async function(req,res){
    let data = await authorModel.find({authorName: "Chetan Bhagat"}).select({ author_Id:1,  _id: 0})
    let Books = await BookModel.find({author_Id:data[0].author_Id})
    res.send({msg: Books})
}

const UpdatePrice= async function(req,res){
    let data = await BookModel.find({ bookName: "Two States" }).select({ author_Id:1,  _id: 0})
    let updateBookPrice = await BookModel.findOneAndUpdate(
    {author_Id: data[0].author_Id},{$set:{price: 100} },{new:true})
    let NewPrice = updateBookPrice.price
    let AuthorIs = await authorModel.find({author_Id: data[0].author_Id}).select({authorName:1 , _id: 0})
    res.send({msg: AuthorIs , NewPrice })
   }

//   const AuthorOnPrice = async function(req,res){
//       let data =await BookModel.find({price:{$gte:50, $lte:100}}).select({author_Id:1,  _id: 0})
//      data.forEach(function(obj)
//       {
//           let Id=obj.author_Id
//           var AuthorName = authorModel.find({author_Id: Id}).select({authorName:1,  _id: 0})
//              }
//               )
              
//       res.send({msg:data})  
     
//   }

module.exports.createBook= createBook
module.exports.BookByChetanBhagat=BookByChetanBhagat
module.exports.UpdatePrice=UpdatePrice
// module.exports.AuthorOnPrice=AuthorOnPrice


