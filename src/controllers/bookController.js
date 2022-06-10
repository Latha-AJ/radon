const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel =require("../models/publisherModel")

const createBook= async function (req, res) {
    const validateId = await authorModel.findById(req.body.author_id)
    const validatePublisher = await publisherModel.findById(req.body.publisher)
    isAuthorId = false 
    isPublisherId = false
    if(req.body.author_id)
    {   
        if(validateId)
        {
        isAuthorId = true;
            } 
            else {res.send("Enter the valid Author_Id")}
        }         
           else{ 
              res.send("Please enter the Author Id") 
       }
if(req.body.publisher)
{
    if(validatePublisher)
    {
        isPublisherId =true; 
    }
    else {res.send("Enter the valid PublisherId")}
}
else{ 
    res.send("Please enter the Publisher Id") 
}

        if(isAuthorId == true && isPublisherId ==true )
   {
       let data = req.body
       const bookCreated = await bookModel.create(data);
       res.send({msg: bookCreated})    
    }
    } 

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher')
    res.send({data: specificBook})

}

const updateIsHardcover = async function(req,res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher')
    let data = await bookModel.findByIdAndUpdate({"specificBook.publisher ": req.params.id}, {$set: {isHardCover: true}})
   res.send({msg: data })
}


module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateIsHardcover=updateIsHardcover