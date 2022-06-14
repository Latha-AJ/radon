const express = require('express');
const router = express.Router();


const app = express()
// const UserModel= require("../models/userModel.js")
const userController= require("../controllers/userController")
const productController= require("../controllers/productController.js")
const orderController= require("../controllers/orderController.js")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createProduct", productController.createProduct)


router.post("/createUser", commonMW.mid1 , userController.createUser1)

router.post("/createOrder", commonMW.mid1, commonMW.mid2, orderController.createOrder, commonMW.mid3)

module.exports = router;