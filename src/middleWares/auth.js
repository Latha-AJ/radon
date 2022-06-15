
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const auth = async function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    
//userId comparision to check if the logged-in user is requesting for their own data    
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
 if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

// checking if the userID present in the database

    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });

         next();

    // res.send({ status: true, data: userDetails });
  };
 
  module.exports.auth=auth