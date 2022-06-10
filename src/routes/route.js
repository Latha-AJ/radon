const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", UserController.mySimpleMalware)
router.get("/tesTingMiddleWare", UserController.globalMiddleWare)
router.get("/homePage" , UserController.basicCode)

router.post("/createBook", BookController.createBook  )

module.exports = router;