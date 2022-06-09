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
    let AuthorIs = await authorModel.find({author_Id: data[0].author_Id}).select({authorName:1 ,   _id: 0})
    res.send({msg: AuthorIs , NewPrice })
   }
  
   const AuthorOnPrice = async function(req,res){
       let data =await BookModel.find({price:{$gte:50, $lte:100}}).select({author_Id:1, bookName:1,  _id: 0})
       let Author =await authorModel.find().select({author_Id:1, authorName:1, _id:0})       
            let newArr = [];
      for(let i=0; i<data.length ; i++)
      {
        Author.forEach(element =>{
            if(element.author_Id == data[i].author_Id)
            {
                newArr.push({"author Name": element.authorName, "Book Name" : data[i].bookName} )
            }
        }) 
      }
      res.send({msg : newArr})   
          
   }
         const booksByAuthorId = async function(req,res){
            let data =req.params.AuthorId
            let booksWritten = await BookModel.find({author_Id: data}).select({bookName:1 ,_id:0 })
            res.send({booksAre : booksWritten})
   }

   const authorsWithRatings = async function(req,res){
       let data = await BookModel.find({ratings: { $gte:4}}).select({author_Id:1 , _id:0})
       let Authors = await authorModel.find().select({authorName:1, age:1 , author_Id:1, _id:0})
       let AuthorsAndAge =[];
       for(let i=0;i<data.length ; i++)
       {
        Authors.forEach(x=>{
            if(x.author_Id == data[i].author_Id)
            {
                AuthorsAndAge.push({"AuthorName":x.authorName, "AuthorAge": x.age})
                 }
        })
            
       }
       res.send({msg: AuthorsAndAge })
           }






module.exports.createBook= createBook
module.exports.BookByChetanBhagat=BookByChetanBhagat
module.exports.UpdatePrice=UpdatePrice
module.exports.AuthorOnPrice=AuthorOnPrice
module.exports.booksByAuthorId = booksByAuthorId
module.exports.authorsWithRatings=authorsWithRatings


